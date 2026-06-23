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
NOTION_DATABASE_ID = os.environ["NOTION_DATABASE_ID"].strip()

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
    print(f"Checking Notion access...")
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
        print()
        print("  Fix: Go to your Watch History database in Notion -> ... -> Connections")
        print("  and connect the integration whose token matches your NOTION_TOKEN secret.")
        return False


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


def create_notion_page(item):
    item_type = item.get("type")
    watched_at = item.get("watched_at", "")
    date_str = watched_at[:10] if watched_at else None

    if item_type == "movie":
        movie = item["movie"]
        title = movie["title"]
        year = movie.get("year", "")
        properties = {
            "Title": {"title": [{"text": {"content": f"{title} ({year})" if year else title}}]},
            "Type": {"select": {"name": "Movie"}},
            "Content Status": {"select": {"name": "No Ideas Yet"}},
        }

    elif item_type == "episode":
        episode = item["episode"]
        show = item["show"]
        show_title = show["title"]
        season = episode.get("season", 0)
        ep_num = episode.get("number", 0)
        title = f"{show_title} S{season:02d}E{ep_num:02d}"
        properties = {
            "Title": {"title": [{"text": {"content": title}}]},
            "Show Name": {"rich_text": [{"text": {"content": show_title}}]},
            "Type": {"select": {"name": "TV Show"}},
            "Season": {"number": season},
            "Episode": {"number": ep_num},
            "Content Status": {"select": {"name": "No Ideas Yet"}},
        }
    else:
        return

    if date_str:
        properties["Date Watched"] = {"date": {"start": date_str}}

    response = httpx.post(
        f"{NOTION_API_BASE}/pages",
        headers=notion_headers,
        json={"parent": {"database_id": NOTION_DATABASE_ID}, "properties": properties},
    )
    if not response.is_success:
        print(f"  FAILED to add {title!r}: {response.status_code} {response.text}")
        return
    print(f"  + {title}")


def main():
    print(f"Syncing Trakt history for @{TRAKT_USERNAME}...")

    if not check_notion_access():
        sys.exit(1)

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

    print(f"Found {len(history)} new items:")
    for item in reversed(history):
        create_notion_page(item)

    print("Done.")


if __name__ == "__main__":
    main()
