const STORAGE_KEY = "riffycreates-dashboard-v1";

const CONFIG = {
  pillars: [
    {
      value: "Reviews & Reactions",
      short: "Pillar 1",
      description:
        "Spoiler-free reviews, first reactions, rankings, endings, and worth-your-time commentary.",
    },
    {
      value: "News & Updates",
      short: "Pillar 2",
      description:
        "Trailers, casting, leaks with disclaimers, release shifts, streaming updates, and franchise news.",
    },
    {
      value: "Engagement & Entertainment",
      short: "Pillar 3",
      description:
        "Memes, debates, trivia, fan theories, comment prompts, and highly shareable entertainment posts.",
    },
  ],
  platforms: ["Both", "TikTok", "Instagram"],
  ideaStatuses: ["Idea", "Planning", "In Progress", "Ready", "Posted"],
  scheduleStatuses: ["Planned", "Ready", "Posted"],
  weekdays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
};

const seedData = {
  ideas: [
    {
      id: crypto.randomUUID(),
      title: "Worth the Watch? Final Destination: Bloodlines",
      hook: "This is either the smartest reboot in years or totally overhyped.",
      description: "A 30-second spoiler-free review with one clear recommendation.",
      pillar: "Reviews & Reactions",
      platform: "Both",
      status: "Ready",
      format: "Spoiler-free Reel",
      topic: "Horror",
      link: "",
      notes: "Close with a save CTA for weekend watchlists.",
    },
    {
      id: crypto.randomUUID(),
      title: "Trailer just dropped: 3 things everyone missed",
      hook: "That background shot might have revealed the entire plot twist.",
      description: "Immediate trailer breakdown format for big franchise releases.",
      pillar: "News & Updates",
      platform: "TikTok",
      status: "Planning",
      format: "Trailer reaction",
      topic: "Marvel / DC",
      link: "",
      notes: "Best published within 60 minutes of trailer release.",
    },
    {
      id: crypto.randomUUID(),
      title: "Hot take court: the better Chris Nolan ending",
      hook: "You only get one ending to defend in the comments.",
      description: "Put two endings head-to-head and let the audience argue it out.",
      pillar: "Engagement & Entertainment",
      platform: "Instagram",
      status: "Idea",
      format: "Debate prompt",
      topic: "Christopher Nolan",
      link: "",
      notes: "Strong Story poll companion.",
    },
    {
      id: crypto.randomUUID(),
      title: "Weekend watchlist: 3 things to stream right now",
      hook: "If you only watch one thing this weekend, make it this.",
      description: "Fast recommendation stack across movie, TV, and sleeper pick.",
      pillar: "Reviews & Reactions",
      platform: "Both",
      status: "Ready",
      format: "Watchlist roundup",
      topic: "Streaming",
      link: "",
      notes: "Good recurring Friday or Saturday slot.",
    },
    {
      id: crypto.randomUUID(),
      title: "Real or rumor? That casting report everyone is posting",
      hook: "Before you repost it, here’s what actually sounds credible.",
      description: "Trust-building format that separates verified news from wishful thinking.",
      pillar: "News & Updates",
      platform: "Both",
      status: "In Progress",
      format: "Rumor check",
      topic: "Franchise news",
      link: "",
      notes: "Always include source screenshot or context.",
    },
    {
      id: crypto.randomUUID(),
      title: "Guess the movie from 3 frames",
      hook: "Only real movie people will get frame three immediately.",
      description: "An evergreen engagement format with easy series potential.",
      pillar: "Engagement & Entertainment",
      platform: "Both",
      status: "Planning",
      format: "Trivia game",
      topic: "Classics + new releases",
      link: "",
      notes: "Can be batched in sets of five.",
    },
  ],
  schedule: [
    {
      id: crypto.randomUUID(),
      ideaId: null,
      title: "Worth the Watch? Final Destination: Bloodlines",
      platform: "Instagram",
      pillar: "Reviews & Reactions",
      date: nextWeekdayDate(1),
      time: "18:00",
      status: "Ready",
      notes: "Caption angle: worth seeing in theaters?",
    },
    {
      id: crypto.randomUUID(),
      ideaId: null,
      title: "Trailer just dropped: 3 things everyone missed",
      platform: "TikTok",
      pillar: "News & Updates",
      date: nextWeekdayDate(2),
      time: "15:30",
      status: "Planned",
      notes: "Publish within the trend window.",
    },
    {
      id: crypto.randomUUID(),
      ideaId: null,
      title: "Hot take court: the better Chris Nolan ending",
      platform: "Both",
      pillar: "Engagement & Entertainment",
      date: nextWeekdayDate(4),
      time: "19:00",
      status: "Planned",
      notes: "Prompt for comments and Story repost.",
    },
    {
      id: crypto.randomUUID(),
      ideaId: null,
      title: "Weekend watchlist: 3 things to stream right now",
      platform: "Both",
      pillar: "Reviews & Reactions",
      date: nextWeekdayDate(6),
      time: "11:00",
      status: "Ready",
      notes: "Cross-post with story reminder.",
    },
  ],
  metrics: [
    {
      title: "Trailer just dropped: 3 things everyone missed",
      platform: "TikTok",
      pillar: "News & Updates",
      views: 48200,
      likes: 5200,
      comments: 490,
      shares: 870,
      saves: 410,
      followers: 118,
    },
    {
      title: "Worth the Watch? Final Destination: Bloodlines",
      platform: "Instagram",
      pillar: "Reviews & Reactions",
      views: 19100,
      likes: 1800,
      comments: 154,
      shares: 320,
      saves: 510,
      followers: 44,
    },
    {
      title: "Guess the movie from 3 frames",
      platform: "Both",
      pillar: "Engagement & Entertainment",
      views: 26500,
      likes: 2900,
      comments: 630,
      shares: 540,
      saves: 270,
      followers: 62,
    },
  ],
  trends: [
    {
      title: "Streaming release spikes",
      detail: "Watch for new-release conversation on Thursdays and Fridays. Pair with a fast spoiler-free recommendation.",
    },
    {
      title: "Trailer analysis window",
      detail: "Best reaction opportunity is within the first hour, then follow with a deeper breakdown within 24 hours.",
    },
    {
      title: "Comment-reply content",
      detail: "Turn contrarian audience comments into stitched opinion videos on TikTok and quick response Reels on Instagram.",
    },
  ],
  batching: [
    {
      title: "Review sprint",
      detail: "Record 4 spoiler-free mini reviews after one binge or theater day.",
    },
    {
      title: "Evergreen buffer",
      detail: "Batch 5 debate prompts and 5 trivia clips so low-news weeks do not stall posting.",
    },
    {
      title: "One trend, three assets",
      detail: "Cut every trailer reaction into a raw reaction, a breakdown, and a hot-take follow-up.",
    },
  ],
  ctas: [
    {
      title: "Debate CTA",
      detail: "Agree or am I completely off on this one?",
    },
    {
      title: "Recommendation CTA",
      detail: "What’s one movie or show I have to watch next?",
    },
    {
      title: "Save CTA",
      detail: "Save this for your weekend watchlist.",
    },
  ],
  hashtags: [
    {
      title: "Reviews",
      detail: "#moviereview #whattowatch #streamingrecommendations #filmcommunity",
    },
    {
      title: "News",
      detail: "#movienews #tvnews #trailerreaction #entertainmentnews",
    },
    {
      title: "Engagement",
      detail: "#movietok #filmfans #hottakes #movietrivia",
    },
  ],
  inspiration: [
    {
      title: "Fast reaction creators",
      detail: "Study how entertainment pages front-load the hook before context.",
    },
    {
      title: "Franchise fandom posts",
      detail: "Track which universes currently create the most debate-heavy comment sections.",
    },
    {
      title: "Comment bait done well",
      detail: "Collect examples where the prompt is simple, polarizing, and easy to answer in one line.",
    },
  ],
};

let state = loadState();
let draggedScheduleId = null;

const els = {
  pillarSummary: document.querySelector("#pillarSummary"),
  heroStats: document.querySelector("#heroStats"),
  ideaCountBadge: document.querySelector("#ideaCountBadge"),
  ideasTableBody: document.querySelector("#ideasTableBody"),
  ideaForm: document.querySelector("#ideaForm"),
  ideaCancelBtn: document.querySelector("#ideaCancelBtn"),
  filterPillar: document.querySelector("#filterPillar"),
  filterPlatform: document.querySelector("#filterPlatform"),
  filterStatus: document.querySelector("#filterStatus"),
  filterSearch: document.querySelector("#filterSearch"),
  calendarBoard: document.querySelector("#calendarBoard"),
  scheduleForm: document.querySelector("#scheduleForm"),
  scheduleCancelBtn: document.querySelector("#scheduleCancelBtn"),
  metricCards: document.querySelector("#metricCards"),
  topPosts: document.querySelector("#topPosts"),
  trendList: document.querySelector("#trendList"),
  batchingList: document.querySelector("#batchingList"),
  ctaList: document.querySelector("#ctaList"),
  hashtagList: document.querySelector("#hashtagList"),
  inspirationList: document.querySelector("#inspirationList"),
  exportDataBtn: document.querySelector("#exportDataBtn"),
  importDataInput: document.querySelector("#importDataInput"),
  resetDataBtn: document.querySelector("#resetDataBtn"),
};

bootstrap();

function bootstrap() {
  populateSelectOptions();
  attachEvents();
  render();
}

function populateSelectOptions() {
  fillSelect("ideaPillar", CONFIG.pillars.map((p) => p.value));
  fillSelect("ideaPlatform", CONFIG.platforms);
  fillSelect("ideaStatus", CONFIG.ideaStatuses);
  fillSelect("schedulePlatform", CONFIG.platforms);
  fillSelect("scheduleStatus", CONFIG.scheduleStatuses);

  fillSelect("filterPillar", ["All Pillars", ...CONFIG.pillars.map((p) => p.value)]);
  fillSelect("filterPlatform", ["All Platforms", ...CONFIG.platforms]);
  fillSelect("filterStatus", ["All Statuses", ...CONFIG.ideaStatuses]);

  refreshIdeaOptions();
}

function attachEvents() {
  els.ideaForm.addEventListener("submit", handleIdeaSubmit);
  els.ideaCancelBtn.addEventListener("click", resetIdeaForm);
  els.scheduleForm.addEventListener("submit", handleScheduleSubmit);
  els.scheduleCancelBtn.addEventListener("click", resetScheduleForm);

  [els.filterPillar, els.filterPlatform, els.filterStatus, els.filterSearch].forEach(
    (el) => el.addEventListener("input", renderIdeasTable),
  );

  els.exportDataBtn.addEventListener("click", exportState);
  els.importDataInput.addEventListener("change", importState);
  els.resetDataBtn.addEventListener("click", () => {
    state = structuredClone(seedData);
    persistState();
    refreshIdeaOptions();
    render();
    resetIdeaForm();
    resetScheduleForm();
  });
}

function render() {
  renderPillars();
  renderHeroStats();
  renderIdeasTable();
  renderCalendar();
  renderMetrics();
  renderStackList(els.trendList, state.trends);
  renderStackList(els.batchingList, state.batching);
  renderStackList(els.ctaList, state.ctas);
  renderStackList(els.hashtagList, state.hashtags);
  renderStackList(els.inspirationList, state.inspiration);
}

function renderPillars() {
  els.pillarSummary.innerHTML = CONFIG.pillars
    .map(
      (pillar) => `
        <li>
          <strong>${pillar.short}: ${pillar.value}</strong>
          <span>${pillar.description}</span>
        </li>
      `,
    )
    .join("");
}

function renderHeroStats() {
  const readyIdeas = state.ideas.filter((idea) => idea.status === "Ready").length;
  const scheduledPosts = state.schedule.length;
  const totalViews = state.metrics.reduce((sum, item) => sum + item.views, 0);

  els.heroStats.innerHTML = [
    { label: "Ready Ideas", value: readyIdeas },
    { label: "Scheduled Posts", value: scheduledPosts },
    { label: "Tracked Views", value: totalViews.toLocaleString() },
  ]
    .map(
      (item) => `
        <div class="stat-card">
          <span>${item.label}</span>
          <strong>${item.value}</strong>
        </div>
      `,
    )
    .join("");
}

function renderIdeasTable() {
  const filtered = getFilteredIdeas();
  els.ideaCountBadge.textContent = `${filtered.length} visible ideas`;

  if (!filtered.length) {
    els.ideasTableBody.innerHTML = `
      <tr>
        <td colspan="6" class="muted">No ideas match these filters yet.</td>
      </tr>
    `;
    return;
  }

  els.ideasTableBody.innerHTML = filtered
    .map(
      (idea) => `
        <tr>
          <td>
            <div class="table-title">${escapeHtml(idea.title)}</div>
            <div class="table-sub">${escapeHtml(idea.hook || idea.description || "")}</div>
          </td>
          <td><span class="pill-badge">${escapeHtml(idea.pillar)}</span></td>
          <td>${escapeHtml(idea.platform)}</td>
          <td>${escapeHtml(idea.status)}</td>
          <td>${escapeHtml(idea.topic || "—")}</td>
          <td>
            <div class="table-actions">
              <button class="secondary" data-action="edit-idea" data-id="${idea.id}">Edit</button>
              <button class="secondary" data-action="schedule-from-idea" data-id="${idea.id}">Schedule</button>
              <button class="danger" data-action="delete-idea" data-id="${idea.id}">Delete</button>
            </div>
          </td>
        </tr>
      `,
    )
    .join("");

  els.ideasTableBody.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", handleIdeaAction);
  });
}

function renderCalendar() {
  const weekMap = new Map(CONFIG.weekdays.map((day) => [day, []]));

  state.schedule
    .slice()
    .sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`))
    .forEach((item) => {
      weekMap.get(getWeekdayName(item.date)).push(item);
    });

  els.calendarBoard.innerHTML = CONFIG.weekdays
    .map((weekday) => {
      const items = weekMap.get(weekday) || [];
      const content = items.length
        ? items
            .map(
              (item) => `
                <article class="schedule-card" draggable="true" data-schedule-id="${item.id}">
                  <div class="schedule-time">${item.time}</div>
                  <strong>${escapeHtml(item.title)}</strong>
                  <div class="schedule-meta">
                    <span>${escapeHtml(item.platform)}</span>
                    <span>${escapeHtml(item.pillar)}</span>
                    <span>${escapeHtml(item.status)}</span>
                  </div>
                  <div class="table-sub">${escapeHtml(item.notes || "")}</div>
                  <div class="schedule-actions">
                    <button class="secondary" data-action="edit-schedule" data-id="${item.id}">Edit</button>
                    <button class="danger" data-action="delete-schedule" data-id="${item.id}">Delete</button>
                  </div>
                </article>
              `,
            )
            .join("")
        : `<div class="empty">No post scheduled.</div>`;

      return `
        <section class="day-column" data-weekday="${weekday}">
          <div class="day-header">
            <strong>${weekday}</strong>
            <span class="muted">${renderDateHintForWeekday(weekday)}</span>
          </div>
          ${content}
        </section>
      `;
    })
    .join("");

  attachCalendarEvents();
}

function renderMetrics() {
  const totals = state.metrics.reduce(
    (acc, item) => {
      acc.views += item.views;
      acc.likes += item.likes;
      acc.comments += item.comments;
      acc.shares += item.shares;
      acc.saves += item.saves;
      acc.followers += item.followers;
      return acc;
    },
    { views: 0, likes: 0, comments: 0, shares: 0, saves: 0, followers: 0 },
  );

  const cards = [
    ["Views", totals.views],
    ["Likes", totals.likes],
    ["Comments", totals.comments],
    ["Shares", totals.shares],
    ["Saves", totals.saves],
    ["Followers", totals.followers],
  ];

  els.metricCards.innerHTML = cards
    .map(
      ([label, value]) => `
        <div class="metric-card">
          <span>${label}</span>
          <strong>${Number(value).toLocaleString()}</strong>
        </div>
      `,
    )
    .join("");

  const topPosts = state.metrics
    .slice()
    .sort((a, b) => b.views - a.views)
    .slice(0, 3);

  els.topPosts.innerHTML = topPosts
    .map(
      (post, index) => `
        <div class="mini-row">
          <strong>#${index + 1} ${escapeHtml(post.title)}</strong>
          <span>${post.platform} · ${post.pillar}</span>
          <span>${post.views.toLocaleString()} views · ${post.shares.toLocaleString()} shares · ${post.followers} follows</span>
        </div>
      `,
    )
    .join("");
}

function renderStackList(container, items) {
  container.innerHTML = items
    .map(
      (item) => `
        <div class="stack-item">
          <strong>${escapeHtml(item.title)}</strong>
          <span>${escapeHtml(item.detail)}</span>
        </div>
      `,
    )
    .join("");
}

function handleIdeaSubmit(event) {
  event.preventDefault();

  const payload = {
    id: document.querySelector("#ideaId").value || crypto.randomUUID(),
    title: document.querySelector("#ideaTitle").value.trim(),
    hook: document.querySelector("#ideaHook").value.trim(),
    description: document.querySelector("#ideaDescription").value.trim(),
    pillar: document.querySelector("#ideaPillar").value,
    platform: document.querySelector("#ideaPlatform").value,
    status: document.querySelector("#ideaStatus").value,
    format: document.querySelector("#ideaFormat").value.trim(),
    topic: document.querySelector("#ideaTopic").value.trim(),
    link: document.querySelector("#ideaLink").value.trim(),
    notes: document.querySelector("#ideaNotes").value.trim(),
  };

  const existingIndex = state.ideas.findIndex((idea) => idea.id === payload.id);
  if (existingIndex >= 0) {
    state.ideas[existingIndex] = payload;
  } else {
    state.ideas.unshift(payload);
  }

  persistState();
  refreshIdeaOptions();
  render();
  resetIdeaForm();
}

function handleScheduleSubmit(event) {
  event.preventDefault();

  const selectedIdeaId = document.querySelector("#scheduleIdea").value;
  const linkedIdea = state.ideas.find((idea) => idea.id === selectedIdeaId);
  const existingId = document.querySelector("#scheduleId").value;

  const payload = {
    id: existingId || crypto.randomUUID(),
    ideaId: selectedIdeaId || null,
    title: linkedIdea ? linkedIdea.title : "Untitled Post",
    platform: document.querySelector("#schedulePlatform").value || (linkedIdea?.platform ?? "Both"),
    pillar: linkedIdea?.pillar ?? "Reviews & Reactions",
    date: document.querySelector("#scheduleDate").value,
    time: document.querySelector("#scheduleTime").value,
    status: document.querySelector("#scheduleStatus").value,
    notes: document.querySelector("#scheduleNotes").value.trim(),
  };

  const existingIndex = state.schedule.findIndex((item) => item.id === payload.id);
  if (existingIndex >= 0) {
    state.schedule[existingIndex] = payload;
  } else {
    state.schedule.push(payload);
  }

  persistState();
  render();
  resetScheduleForm();
}

function handleIdeaAction(event) {
  const { action, id } = event.currentTarget.dataset;
  const idea = state.ideas.find((item) => item.id === id);
  if (!idea) return;

  if (action === "edit-idea") {
    document.querySelector("#ideaId").value = idea.id;
    document.querySelector("#ideaTitle").value = idea.title;
    document.querySelector("#ideaHook").value = idea.hook || "";
    document.querySelector("#ideaDescription").value = idea.description || "";
    document.querySelector("#ideaPillar").value = idea.pillar;
    document.querySelector("#ideaPlatform").value = idea.platform;
    document.querySelector("#ideaStatus").value = idea.status;
    document.querySelector("#ideaFormat").value = idea.format || "";
    document.querySelector("#ideaTopic").value = idea.topic || "";
    document.querySelector("#ideaLink").value = idea.link || "";
    document.querySelector("#ideaNotes").value = idea.notes || "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (action === "schedule-from-idea") {
    document.querySelector("#scheduleIdea").value = idea.id;
    document.querySelector("#schedulePlatform").value = idea.platform;
    document.querySelector("#scheduleNotes").value = idea.hook || "";
    window.scrollTo({ top: document.body.scrollHeight / 4, behavior: "smooth" });
  }

  if (action === "delete-idea") {
    state.ideas = state.ideas.filter((item) => item.id !== id);
    state.schedule = state.schedule.filter((item) => item.ideaId !== id);
    persistState();
    refreshIdeaOptions();
    render();
  }
}

function attachCalendarEvents() {
  document.querySelectorAll(".schedule-card").forEach((card) => {
    card.addEventListener("dragstart", () => {
      draggedScheduleId = card.dataset.scheduleId;
    });
  });

  document.querySelectorAll(".day-column").forEach((column) => {
    column.addEventListener("dragover", (event) => {
      event.preventDefault();
      column.classList.add("dragover");
    });

    column.addEventListener("dragleave", () => {
      column.classList.remove("dragover");
    });

    column.addEventListener("drop", (event) => {
      event.preventDefault();
      column.classList.remove("dragover");
      if (!draggedScheduleId) return;
      moveScheduleToWeekday(draggedScheduleId, column.dataset.weekday);
      draggedScheduleId = null;
    });
  });

  document.querySelectorAll("[data-action='edit-schedule']").forEach((button) => {
    button.addEventListener("click", () => editSchedule(button.dataset.id));
  });

  document.querySelectorAll("[data-action='delete-schedule']").forEach((button) => {
    button.addEventListener("click", () => {
      state.schedule = state.schedule.filter((item) => item.id !== button.dataset.id);
      persistState();
      render();
      resetScheduleForm();
    });
  });
}

function editSchedule(id) {
  const item = state.schedule.find((entry) => entry.id === id);
  if (!item) return;

  document.querySelector("#scheduleId").value = item.id;
  document.querySelector("#scheduleIdea").value = item.ideaId || "";
  document.querySelector("#scheduleDate").value = item.date;
  document.querySelector("#scheduleTime").value = item.time;
  document.querySelector("#schedulePlatform").value = item.platform;
  document.querySelector("#scheduleStatus").value = item.status;
  document.querySelector("#scheduleNotes").value = item.notes || "";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function moveScheduleToWeekday(scheduleId, weekday) {
  const item = state.schedule.find((entry) => entry.id === scheduleId);
  if (!item) return;
  item.date = getDateForBoardWeekday(weekday);
  persistState();
  render();
}

function refreshIdeaOptions() {
  const ideaSelect = document.querySelector("#scheduleIdea");
  ideaSelect.innerHTML = [
    `<option value="">Select an idea</option>`,
    ...state.ideas.map((idea) => `<option value="${idea.id}">${escapeHtml(idea.title)}</option>`),
  ].join("");
}

function getFilteredIdeas() {
  const pillar = els.filterPillar.value;
  const platform = els.filterPlatform.value;
  const status = els.filterStatus.value;
  const query = els.filterSearch.value.trim().toLowerCase();

  return state.ideas.filter((idea) => {
    const pillarMatch = pillar === "All Pillars" || idea.pillar === pillar;
    const platformMatch = platform === "All Platforms" || idea.platform === platform;
    const statusMatch = status === "All Statuses" || idea.status === status;
    const queryMatch =
      !query ||
      [idea.title, idea.hook, idea.description, idea.topic, idea.format]
        .join(" ")
        .toLowerCase()
        .includes(query);
    return pillarMatch && platformMatch && statusMatch && queryMatch;
  });
}

function resetIdeaForm() {
  els.ideaForm.reset();
  document.querySelector("#ideaId").value = "";
  document.querySelector("#ideaPillar").value = CONFIG.pillars[0].value;
  document.querySelector("#ideaPlatform").value = CONFIG.platforms[0];
  document.querySelector("#ideaStatus").value = CONFIG.ideaStatuses[0];
}

function resetScheduleForm() {
  els.scheduleForm.reset();
  document.querySelector("#scheduleId").value = "";
  document.querySelector("#scheduleDate").value = nextWeekdayDate(1);
  document.querySelector("#schedulePlatform").value = CONFIG.platforms[0];
  document.querySelector("#scheduleStatus").value = CONFIG.scheduleStatuses[0];
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return structuredClone(seedData);

  try {
    return JSON.parse(raw);
  } catch {
    return structuredClone(seedData);
  }
}

function persistState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function exportState() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "riffymovies-dashboard-data.json";
  link.click();
  URL.revokeObjectURL(url);
}

function importState(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result));
      state = parsed;
      persistState();
      refreshIdeaOptions();
      render();
      resetIdeaForm();
      resetScheduleForm();
      event.target.value = "";
    } catch {
      alert("That file could not be imported. Please use a valid dashboard JSON export.");
    }
  };
  reader.readAsText(file);
}

function fillSelect(id, options) {
  document.querySelector(`#${id}`).innerHTML = options
    .map((option) => `<option value="${option}">${option}</option>`)
    .join("");
}

function renderDateHintForWeekday(weekday) {
  return getDateForBoardWeekday(weekday);
}

function getWeekdayName(dateString) {
  const date = new Date(`${dateString}T12:00:00`);
  return date.toLocaleDateString(undefined, { weekday: "long" });
}

function nextWeekdayDate(targetIsoDay, fromDateString = new Date().toISOString().slice(0, 10)) {
  const date = new Date(`${fromDateString}T12:00:00`);
  const jsTarget = targetIsoDay % 7;
  while (date.getDay() !== jsTarget) {
    date.setDate(date.getDate() + 1);
  }
  return date.toISOString().slice(0, 10);
}

function getBoardWeekStart() {
  const reference = state.schedule.length
    ? state.schedule
        .map((item) => item.date)
        .sort()[0]
    : new Date().toISOString().slice(0, 10);

  const start = new Date(`${reference}T12:00:00`);
  while (start.getDay() !== 1) {
    start.setDate(start.getDate() - 1);
  }
  return start;
}

function getDateForBoardWeekday(weekday) {
  const start = getBoardWeekStart();
  const targetIndex = CONFIG.weekdays.indexOf(weekday);
  const date = new Date(start);
  date.setDate(start.getDate() + targetIndex);
  return date.toISOString().slice(0, 10);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

resetIdeaForm();
resetScheduleForm();
