#!/usr/bin/env python3
import os
import sys
import httpx
from datetime import datetime, timezone, timedelta

TRAKT_API_BASE = "https://api.trakt.tv"
NOTION_API_BASE = "https://api.notion.com/v1"

TRAKT_CLIENT_ID = os.environ["TRAKT_CLIENT_ID"]
TRAKT_USERNAME = os.environ.get("TRAKT_USERNAME", "riffymovies")
NOTION_TOKEN = os.environ["NOTION_TOKEN"].strip()
NOTION_DATABASE_ID = "2b43cdafa587470a9e3a8229e48df5f4"

trakt_headers = {
    "Content-Type": "application/json",
    "trakt-api-version": "2",
    "trakt-api-key": TRAKT_CLIENT_ID,
}

notion_headers = {
    "Authorization": f"Bearer {NOTION_TOKEN}",
    "Notion-Version": "2022-06-28",
    "Content-Type": "application/json",
}


def check_notion_access():
    print("Checking Notion access...")
    response = httpx.get(
        f"{NOTION_API_BASE}/databases/{NOTION_DATABASE_ID}",
        headers=notion_headers,
    )
    if response.status_code == 200:
        db_name = response.json().get("title", [{}])[0].get("plain_text", "(unknown)")
        print(f"  Connected to: {db_name}")
        return True
    else:
        print(f"  ERROR {response.status_code}: {response.text}")
        return False


def get_existing_titles():
    titles = set()
    cursor = None
    while True:
        body = {"page_size": 100}
        if cursor:
            body["start_cursor"] = cursor
        response = httpx.post(
            f"{NOTION_API_BASE}/databases/{NOTION_DATABASE_ID}/query",
            headers=notion_headers,
            json=body,
        )
        response.raise_for_status()
        data = response.json()
        for page in data.get("results", []):
            title_parts = page["properties"].get("Title", {}).get("title", [])
            if title_parts:
                titles.add(title_parts[0].get("plain_text", ""))
        if not data.get("has_more"):
            break
        cursor = data.get("next_cursor")
    return titles


def get_latest_notion_date():
    response = httpx.post(
        f"{NOTION_API_BASE}/databases/{NOTION_DATABASE_ID}/query",
        headers=notion_headers,
        json={
            "sorts": [{"property": "Date Watched", "direction": "descending"}],
            "page_size": 1,
        },
    )
    response.raise_for_status()
    results = response.json().get("results", [])
    if results:
        date_prop = results[0]["properties"].get("Date Watched", {})
        date_val = date_prop.get("date", {})
        if date_val and date_val.get("start"):
            return date_val["start"]
    return None


def get_trakt_history(start_at=None):
    params = {"limit": 100, "extended": "full"}
    if start_at:
        params["start_at"] = start_at
    response = httpx.get(
        f"{TRAKT_API_BASE}/users/{TRAKT_USERNAME}/history",
        headers=trakt_headers,
        params=params,
    )
    response.raise_for_status()
    return response.json()


def create_notion_page(title, item_type, show_name=None):
    properties = {
        "Title": {"title": [{"text": {"content": title}}]},
        "Type": {"select": {"name": item_type}},
    }
    if show_name:
        properties["Show Name"] = {"rich_text": [{"text": {"content": show_name}}]}

    response = httpx.post(
        f"{NOTION_API_BASE}/pages",
        headers=notion_headers,
        json={"parent": {"database_id": NOTION_DATABASE_ID}, "properties": properties},
    )
    if not response.is_success:
        print(f"  FAILED to add {title!r}: {response.status_code} {response.text}")
        return False
    print(f"  + {title}")
    return True


def main():
    print(f"Syncing Trakt history for @{TRAKT_USERNAME}...")

    if not check_notion_access():
        sys.exit(1)

    existing_titles = get_existing_titles()
    print(f"Found {len(existing_titles)} existing entries in Notion")

    latest_date = get_latest_notion_date()
    if latest_date:
        start_at = latest_date
        print(f"Incremental sync from {start_at}")
    else:
        start_at = (datetime.now(timezone.utc) - timedelta(days=30)).isoformat()
        print("First run — fetching last 30 days")

    history = get_trakt_history(start_at=start_at)

    if not history:
        print("Nothing new to sync.")
        return

    seen_this_run = set()
    added = 0
    skipped = 0

    for item in reversed(history):
        item_type = item.get("type")

        if item_type == "movie":
            movie = item["movie"]
            name = movie["title"]
            year = movie.get("year", "")
            title = f"{name} ({year})" if year else name
            if title in existing_titles or title in seen_this_run:
                skipped += 1
                continue
            seen_this_run.add(title)
            if create_notion_page(title, "Movie"):
                added += 1

        elif item_type == "episode":
            show = item["show"]
            title = show["title"]
            if title in existing_titles or title in seen_this_run:
                skipped += 1
                continue
            seen_this_run.add(title)
            if create_notion_page(title, "TV Show", show_name=title):
                added += 1

    print(f"Done. Added {added}, skipped {skipped} duplicates.")


if __name__ == "__main__":
    main()
