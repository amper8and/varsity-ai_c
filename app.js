const state = {
  role: "student",
  tab: "home",
  detail: null,
  activePrompt: "accommodation",
  exploreCategory: "all",
};

const roleConfig = {
  student: {
    label: "Student mode",
    heroTitle: "Stay on top of campus life, save money and get help fast.",
    heroBody:
      "Built for the UNIZIK community with verified offers, practical campus support and an AI concierge that understands what students need week to week.",
    stats: [
      { value: "12", label: "verified perks nearby" },
      { value: "3", label: "deadlines this week" },
      { value: "2", label: "mentors matched" },
    ],
    quickActions: [
      { id: "ai-help", title: "Ask AI", subtitle: "Campus, deals, deadlines", badge: "Smart" },
      { id: "deals", title: "Find deals", subtitle: "Food, data, transport", badge: "Save" },
      { id: "housing", title: "Accommodation", subtitle: "Verified close to campus", badge: "Safe" },
      { id: "jobs", title: "Jobs and gigs", subtitle: "Internships and side income", badge: "Grow" },
    ],
    essentials: [
      { title: "Awka campus map", detail: "Lecture halls, clinic, shuttle loops", meta: "Updated this morning" },
      { title: "Study planner", detail: "3 assessments due in the next 10 days", meta: "Priority view" },
      { title: "Orientation path", detail: "5 things every new student should finish", meta: "New starter" },
    ],
    greeting: "Good afternoon, Adaeze",
    profileMeta: "Verified student • Faculty of Engineering • Awka campus",
  },
  alumni: {
    label: "Alumni mode",
    heroTitle: "Reconnect with UNIZIK through business, mentorship and community value.",
    heroBody:
      "The same hub adapts to alumni life with events, business discovery, mentoring opportunities and offers that feel relevant to work, family and lifestyle.",
    stats: [
      { value: "8", label: "networking events live" },
      { value: "24", label: "alumni businesses this month" },
      { value: "6", label: "mentor requests pending" },
    ],
    quickActions: [
      { id: "network", title: "Build network", subtitle: "Connect by faculty and city", badge: "Connect" },
      { id: "mentor", title: "Become a mentor", subtitle: "Guide final-year students", badge: "Give back" },
      { id: "businesses", title: "Browse businesses", subtitle: "Support alumni-led brands", badge: "Discover" },
      { id: "events", title: "Events", subtitle: "Reunions, talks, dinners", badge: "Attend" },
    ],
    essentials: [
      { title: "Business directory", detail: "Featured alumni founders across retail, fintech and health", meta: "Verified listings" },
      { title: "Mentor board", detail: "Students in law, medicine and engineering are looking for advice", meta: "High demand" },
      { title: "Giving circle", detail: "Back scholarships, tools and local startup grants", meta: "Impact hub" },
    ],
    greeting: "Welcome back, Chinedu",
    profileMeta: "Verified alumnus • Mass Communication '16 • Lagos chapter",
  },
};

const navItems = [
  { id: "home", label: "Home", icon: "H" },
  { id: "explore", label: "Explore", icon: "E" },
  { id: "ai", label: "AI", icon: "AI" },
  { id: "community", label: "Community", icon: "C" },
  { id: "profile", label: "Profile", icon: "P" },
];

const screenMap = [
  "welcome onboarding",
  "verification setup",
  "home dashboard",
  "home hub",
  "explore marketplace",
  "ai concierge",
  "community events",
  "campus map",
  "accommodation search",
  "accommodation finder",
  "job board",
  "alumni network",
  "mentor profile",
  "profile wallet",
  "redemption",
];

const metrics = [
  { value: "4 pillars", label: "utility, commerce, connection and AI" },
  { value: "3 roles", label: "student, alumni and partner admin" },
  { value: "12+", label: "interactive surfaces across the demo" },
  { value: "0 build steps", label: "static deployable for Vercel" },
];

const timeline = [
  {
    title: "Onboard and verify",
    body: "Identity, faculty, campus and interests are captured up front so the app feels trusted and personalized from first launch.",
  },
  {
    title: "Get daily value",
    body: "Home brings together quick actions, events, offers, essentials and community prompts rather than a generic portal menu.",
  },
  {
    title: "Use AI with context",
    body: "Prompt chips and source-backed responses make the assistant practical for campus and marketplace discovery.",
  },
  {
    title: "Convert partner demand",
    body: "Deals, accommodation, business listings, jobs and reward redemption all have richer detail states and monetizable journeys.",
  },
  {
    title: "Operate the platform",
    body: "The partner studio exposes campaigns, targeting and analytics to showcase the admin MVP built into the concept.",
  },
];

const categories = ["all", "essentials", "accommodation", "transport", "food", "learning", "jobs", "businesses", "bundles"];

const deals = [
  {
    id: "deal-data",
    category: "bundles",
    title: "MTN campus data drop",
    subtitle: "15GB + streaming pass for verified students",
    badge: "18% off",
    meta: "Ends Friday • Awka campus",
    detailTitle: "MTN campus data drop",
    detailBody:
      "A student-only bundle designed for lectures, streaming and social use. Verification is automatic from your UNIZIK profile and redemption happens instantly.",
    bullets: ["15GB valid for 30 days", "Bonus lecture-night streaming pass", "Redemption tracked for partner commission reporting"],
    cta: "Redeem bundle",
  },
  {
    id: "deal-housing",
    category: "accommodation",
    title: "Verified lodge near Ifite",
    subtitle: "Walkable to engineering blocks and shuttle route",
    badge: "Trusted",
    meta: "5 mins away • 2 bed options",
    detailTitle: "Verified lodge near Ifite",
    detailBody:
      "A marketplace listing built from the accommodation finder mockup flow. Students can compare safety, distance, roommate fit and landlord responsiveness in one place.",
    bullets: ["Distance heatmap and shuttle timing", "Safety checklist and verified reviews", "Pay inspection fee or book a visit"],
    cta: "Book inspection",
  },
  {
    id: "deal-food",
    category: "food",
    title: "Faculty lunch passport",
    subtitle: "Rotate between 6 partner restaurants with one tap",
    badge: "Daily",
    meta: "Popular this week",
    detailTitle: "Faculty lunch passport",
    detailBody:
      "A curated meal offer aimed at repeat usage. It demonstrates how the app can win weekly student spend instead of only pushing one-off campaigns.",
    bullets: ["6 lunch partners on one pass", "Fast pickup and digital queue slots", "Reward points stack with each order"],
    cta: "Activate pass",
  },
  {
    id: "deal-business",
    category: "businesses",
    title: "Alumni founder spotlight",
    subtitle: "Legal, design and tech services by UNIZIK alumni",
    badge: "Network",
    meta: "24 listings live",
    detailTitle: "Alumni founder spotlight",
    detailBody:
      "This mirrors the alumni business mockup route. The business directory is both a community benefit and a monetizable listing product for the university platform.",
    bullets: ["Verified alumni badge on every profile", "Book consults, request quotes or save vendors", "Featured placement upsell for premium businesses"],
    cta: "Browse founders",
  },
  {
    id: "deal-transport",
    category: "transport",
    title: "Morning shuttle saver",
    subtitle: "Predictable trips between Awka hotspots and campus",
    badge: "Reliable",
    meta: "Peak-hours optimised",
    detailTitle: "Morning shuttle saver",
    detailBody:
      "Designed around practical student routines, this transport offer shows how daily mobility can be embedded into the community commerce layer.",
    bullets: ["Recurring route reminders", "Peak-hour seat assurance", "Cashless booking with reward accrual"],
    cta: "Reserve ride",
  },
  {
    id: "deal-learning",
    category: "learning",
    title: "Exam prep toolkit",
    subtitle: "Mock tests, past questions and AI revision plan",
    badge: "Study",
    meta: "Built for finals season",
    detailTitle: "Exam prep toolkit",
    detailBody:
      "A direct bridge between the AI assistance proposition and a premium marketplace service. It makes the educational value proposition feel tangible inside the app.",
    bullets: ["Subject packs by faculty", "AI-generated study schedule", "Optional tutor add-ons and subscriptions"],
    cta: "Open toolkit",
  },
];

const prompts = {
  accommodation: {
    title: "Find safe accommodation near Ifite",
    reply:
      "I found 12 verified options within 10 minutes of the engineering blocks. Two have women-only floors, four include backup power, and three are offering inspection discounts this week.",
    sources: ["Accommodation listings", "Campus safety guide", "Shuttle map"],
    action: "View accommodation matches",
    detail: deals.find((item) => item.id === "deal-housing"),
  },
  data: {
    title: "Show me cheap data for the week",
    reply:
      "The best fit for a heavy-study week is the MTN campus data drop. If you mostly need messaging and LMS access, there is also a lighter 5GB saver bundle with a lower upfront cost.",
    sources: ["Partner bundles", "Usage patterns", "Reward wallet"],
    action: "Compare bundle offers",
    detail: deals.find((item) => item.id === "deal-data"),
  },
  internship: {
    title: "I need an internship in media or tech",
    reply:
      "There are 8 active internships matching your interests. I prioritized roles from alumni-founded teams and companies attending the next community careers fair.",
    sources: ["Jobs board", "Alumni directory", "Events feed"],
    action: "Open careers shortlist",
    detail: {
      title: "Career shortlist",
      subtitle: "Media and tech internships",
      meta: "8 matches this week",
      detailBody:
        "The demo careers flow connects the jobs board, alumni business directory and events calendar so opportunities feel like part of one system instead of separate portals.",
      bullets: ["Saved shortlist across sessions", "One-tap mentor requests", "Event RSVP tied to employer interest"],
      cta: "View jobs",
    },
  },
  events: {
    title: "What is happening on campus this week?",
    reply:
      "You have 5 events worth considering: a founder mixer, a faculty town hall, a design club sprint, a mass communication induction after-party and an alumni dinner in Awka.",
    sources: ["Community events", "Club notices", "Alumni chapter calendar"],
    action: "See events calendar",
    detail: {
      title: "Events this week",
      subtitle: "Campus and alumni calendar",
      meta: "5 curated picks",
      detailBody:
        "The event system is meant to work for both current students and alumni, with RSVP, reminders, and partner sponsorship opportunities wrapped into one feed.",
      bullets: ["Role-aware event recommendations", "Save, RSVP and share actions", "Sponsored hero placements for anchor events"],
      cta: "Open calendar",
    },
  },
};

const events = [
  {
    id: "event-founder",
    title: "Awka founder mixer",
    subtitle: "Students, alumni founders and partner brands",
    meta: "Thursday • 6:30 PM",
    kicker: "High intent",
    detailBody:
      "A flagship event demonstrating community, business discovery and brand participation in one experience. Alumni business cards and partner offers surface alongside the RSVP flow.",
    bullets: ["Mentor matching on check-in", "Brand-backed welcome kits", "Post-event networking prompts"],
  },
  {
    id: "event-health",
    title: "Health sciences community clinic day",
    subtitle: "Free checks plus wellness offers",
    meta: "Saturday • Nnewi campus",
    kicker: "Utility",
    detailBody:
      "Shows how the app can bridge community service and monetizable partner value without feeling promotional first.",
    bullets: ["Official clinic schedule", "Partner pharmacy perks", "Reminder automation"],
  },
  {
    id: "event-dinner",
    title: "UNIZIK alumni dinner",
    subtitle: "Lagos chapter reunion and business showcase",
    meta: "Next week • 7 PM",
    kicker: "Alumni",
    detailBody:
      "An alumni-first event route with premium tables, founder booths and chapter engagement stats visible to the university team.",
    bullets: ["Chapter segmentation", "Business booths", "Referral and donation prompts"],
  },
];

const mentors = [
  {
    id: "mentor-ifeoma",
    title: "Ifeoma Eze",
    subtitle: "Product director • Mentor for design and tech careers",
    meta: "Engineering '14 • 32 matches completed",
    detailBody:
      "Mentor profiles are designed to feel premium and trustworthy, with availability, faculty relevance and impact made visible at a glance.",
    bullets: ["Open office hours this Friday", "Career track templates", "1-on-1 or group sessions"],
  },
  {
    id: "mentor-chuka",
    title: "Chuka Obasi",
    subtitle: "Media entrepreneur • Content, branding and storytelling",
    meta: "Mass Comm '11 • Accepting 6 new mentees",
    detailBody:
      "A stronger alumni affinity loop: mentoring becomes a recurring reason to stay inside the community hub rather than a one-time campaign.",
    bullets: ["Business feedback sessions", "Internship referral support", "Alumni chapter connection"],
  },
];

const groups = [
  { id: "group-design", title: "Design and builders guild", subtitle: "Student designers, developers and product thinkers", meta: "1.4k members • Very active" },
  { id: "group-chapter", title: "Lagos alumni chapter", subtitle: "Events, opportunities and local business exchange", meta: "680 members • Weekly events" },
];

const jobs = [
  {
    id: "job-growth",
    title: "Growth intern",
    subtitle: "Alumni fintech startup",
    meta: "Remote + Awka hybrid • Paid",
    detailBody:
      "A jobs board entry that feels connected to the rest of the platform, with referral context, mentor support and matching signals from the AI layer.",
    bullets: ["Apply with profile data", "See alumni connection strength", "Request a warm intro"],
  },
  {
    id: "job-media",
    title: "Content producer trainee",
    subtitle: "Campus media and brand storytelling program",
    meta: "Part-time • 3 months",
    detailBody:
      "This reflects the careers and growth module in the PRD, showing that the platform can support both commerce and employability.",
    bullets: ["Portfolio-friendly brief", "Brand partner stipend", "AI feedback prompts"],
  },
];

const businesses = [
  { id: "biz-lex", title: "Lex and Light Studio", subtitle: "Brand systems and digital design by UNIZIK alumni", meta: "Verified business • 4.9 rating" },
  { id: "biz-care", title: "CareLoop Health", subtitle: "Affordable diagnostics and wellness services", meta: "Nnewi network • Featured this month" },
];

const notifications = [
  { title: "Reward unlocked", body: "You crossed 2,500 points after booking a partner ride and saving two offers.", time: "2m ago" },
  { title: "Mentor reply", body: "Ifeoma accepted your request and opened a Saturday session slot.", time: "18m ago" },
  { title: "Campus alert", body: "The engineering shuttle route has a temporary pickup change this afternoon.", time: "43m ago" },
  { title: "New partner drop", body: "A verified accommodation partner near Ifite launched an inspection discount.", time: "Today" },
];

const studioMetrics = [
  { label: "Active partners", value: "18" },
  { label: "Campaign CTR", value: "7.4%" },
  { label: "Offer redemptions", value: "1,248" },
  { label: "Verified members", value: "9.6k" },
];

const studioCards = [
  { title: "Audience targeting", body: "Segment by role, faculty, campus, graduation year, city and interest graph before a campaign goes live." },
  { title: "Offer ops", body: "Approve merchants, set verification tags, schedule expiry logic and track which surfaces drive the most demand." },
  { title: "Community publishing", body: "Event promos, official notices and partner placements are managed in one editorial queue with moderation controls." },
  { title: "Revenue intelligence", body: "See attributable clicks, bookings, subscriptions and transaction value by partner, segment and campaign format." },
];

const root = {
  screenMap: document.getElementById("screen-map"),
  metricGrid: document.getElementById("metric-grid"),
  timeline: document.getElementById("timeline"),
  screenContent: document.getElementById("screen-content"),
  bottomNav: document.getElementById("bottom-nav"),
  roleSwitch: document.getElementById("role-switch"),
  roleLabel: document.getElementById("role-label"),
  screenTitle: document.getElementById("screen-title"),
  selectedTitle: document.getElementById("selected-title"),
  selectedBody: document.getElementById("selected-body"),
  detailClose: document.getElementById("detail-close"),
  sheetTitle: document.getElementById("sheet-title"),
  sheetBody: document.getElementById("sheet-body"),
  notificationsBody: document.getElementById("notifications-body"),
  studioBody: document.getElementById("studio-body"),
  studioStats: document.getElementById("studio-stats"),
};

function findById(collection, id) {
  return collection.find((item) => item.id === id);
}

function showOverlay(id) {
  const node = document.getElementById(id);
  node.classList.remove("hidden");
  node.setAttribute("aria-hidden", "false");
}

function hideOverlay(id) {
  const node = document.getElementById(id);
  node.classList.add("hidden");
  node.setAttribute("aria-hidden", "true");
}

function initStaticPanels() {
  root.screenMap.innerHTML = screenMap.map((item) => `<span>${item}</span>`).join("");
  root.metricGrid.innerHTML = metrics.map((metric) => `<article class="metric-card"><strong>${metric.value}</strong><span>${metric.label}</span></article>`).join("");
  root.timeline.innerHTML = timeline.map((item) => `<article class="timeline-item"><strong>${item.title}</strong><p>${item.body}</p></article>`).join("");
  root.studioStats.innerHTML = studioMetrics.map((metric) => `<article class="studio-stat"><strong>${metric.value}</strong><span>${metric.label}</span></article>`).join("");
  root.notificationsBody.innerHTML = notifications.map((item) => `<article class="notification-card"><div class="card-header-inline"><strong>${item.title}</strong><span>${item.time}</span></div><span>${item.body}</span></article>`).join("");
  root.studioBody.innerHTML = `
    <div class="sheet-grid">${studioCards.map((card) => `<article class="sheet-panel"><strong>${card.title}</strong><p>${card.body}</p></article>`).join("")}</div>
    <article class="sheet-panel">
      <div class="card-header-inline">
        <div><span class="eyebrow">Performance snapshot</span><h3>Launch-ready admin MVP</h3></div>
        <span class="kicker gold">Revenue + trust</span>
      </div>
      <p>This console demonstrates the operations layer from the PRD: partner onboarding, campaign scheduling, moderation, event publishing and attribution analytics. It keeps the consumer app clean while still showing how the model becomes commercially credible.</p>
      <div class="sheet-grid" style="margin-top: 14px;">${studioMetrics.map((metric) => `<article class="sheet-panel"><strong>${metric.value}</strong><span>${metric.label}</span></article>`).join("")}</div>
    </article>
  `;
}

function renderRoleSwitch() {
  root.roleSwitch.innerHTML = Object.entries(roleConfig)
    .map(([id, config]) => `<button class="role-chip ${state.role === id ? "active" : ""}" data-role="${id}" type="button">${config.label.replace(" mode", "")}</button>`)
    .join("");
}

function renderBottomNav() {
  root.bottomNav.innerHTML = navItems
    .map((item) => `<button class="nav-button ${state.tab === item.id ? "active" : ""}" data-tab="${item.id}" type="button"><span class="nav-icon">${item.icon}</span><span>${item.label}</span></button>`)
    .join("");
}

function miniCards(items) {
  return items
    .map((item) => `<button class="small-card" type="button" data-detail-type="card" data-detail-id="${item.id || item.title}"><strong>${item.title}</strong><span>${item.detail || item.subtitle || item.body}</span><div class="inline-meta" style="margin-top: 10px;"><span>${item.meta || item.kicker || "Explore"}</span></div></button>`)
    .join("");
}
function renderHome() {
  const role = roleConfig[state.role];
  return `
    <div class="screen-stack">
      <section class="hero-banner">
        <span class="eyebrow">${role.greeting}</span>
        <h3 style="margin: 8px 0 10px; font-size: 1.32rem;">${role.heroTitle}</h3>
        <p>${role.heroBody}</p>
        <div class="hero-stats">${role.stats.map((item) => `<div><strong>${item.value}</strong><span>${item.label}</span></div>`).join("")}</div>
      </section>
      <section class="section-card">
        <div class="card-header-inline"><div><span class="eyebrow">Quick actions</span><h3>What do you need today?</h3></div></div>
        <div class="quick-grid">${role.quickActions.map((action) => `<button class="quick-action" type="button" data-detail-type="action" data-detail-id="${action.id}"><span class="kicker">${action.badge}</span><strong style="margin-top: 10px;">${action.title}</strong><span>${action.subtitle}</span></button>`).join("")}</div>
      </section>
      <section class="focus-banner">
        <strong>Spotlight: accommodation finder</strong>
        <p>Compare verified lodges, inspection windows, power reliability, distance to faculty blocks and roommate fit in a single guided flow.</p>
        <div class="stat-bar"><span>12 matches live</span><button class="secondary-inline" type="button" data-detail-type="deal" data-detail-id="deal-housing">Open flow</button></div>
      </section>
      <section class="section-card">
        <div class="card-header-inline"><div><span class="eyebrow">Essentials</span><h3>Campus utility</h3></div><span class="kicker gold">Verified</span></div>
        <div class="small-grid">${miniCards(role.essentials)}</div>
      </section>
      <section class="section-card">
        <div class="card-header-inline"><div><span class="eyebrow">Offers worth opening</span><h3>Curated marketplace</h3></div><button class="text-button" type="button" data-nav-target="explore">See all</button></div>
        <div class="list-grid">${deals.slice(0, 3).map((deal) => `<button class="list-card" type="button" data-detail-type="deal" data-detail-id="${deal.id}"><div class="card-header-inline"><strong>${deal.title}</strong><span class="kicker ${deal.badge === "Trusted" ? "gold" : ""}">${deal.badge}</span></div><span>${deal.subtitle}</span><div class="inline-meta" style="margin-top: 10px;"><span>${deal.meta}</span></div></button>`).join("")}</div>
      </section>
      <section class="dual-grid">
        <article class="event-card" data-detail-type="event" data-detail-id="event-founder"><span class="eyebrow">Event pick</span><strong>Awka founder mixer</strong><span>Students, alumni founders and partner brands in one room.</span></article>
        <article class="mentor-card" data-detail-type="mentor" data-detail-id="mentor-ifeoma"><span class="eyebrow">Recommended mentor</span><strong>Ifeoma Eze</strong><span>Product director offering portfolio and career guidance.</span></article>
      </section>
    </div>
  `;
}

function renderExplore() {
  const filteredDeals = state.exploreCategory === "all" ? deals : deals.filter((deal) => deal.category === state.exploreCategory);
  return `
    <div class="screen-stack">
      <label class="search-shell"><span>Search</span><input type="text" value="Accommodation, deals, businesses" aria-label="Search" readonly /></label>
      <div class="category-row">${categories.map((category) => `<button class="category-chip ${state.exploreCategory === category ? "active" : ""}" data-category="${category}" type="button">${category}</button>`).join("")}</div>
      <section class="section-card">
        <div class="card-header-inline"><div><span class="eyebrow">Featured collection</span><h3>Built around real campus needs</h3></div></div>
        <div class="dual-grid">
          <article class="search-result-card" data-detail-type="deal" data-detail-id="deal-housing"><strong>Accommodation finder</strong><span>Verified listings, safety cues and inspection scheduling.</span></article>
          <article class="search-result-card" data-detail-type="deal" data-detail-id="deal-transport"><strong>Transport essentials</strong><span>Shuttle-friendly routes and cashless rides.</span></article>
        </div>
      </section>
      <section class="section-card">
        <div class="card-header-inline"><div><span class="eyebrow">Marketplace results</span><h3>${filteredDeals.length} matched listings</h3></div><span class="kicker">Segment-aware</span></div>
        <div class="list-grid">${filteredDeals.map((deal) => `<button class="list-card" type="button" data-detail-type="deal" data-detail-id="${deal.id}"><div class="card-header-inline"><div><strong>${deal.title}</strong><span>${deal.subtitle}</span></div><span class="kicker ${deal.badge === "Trusted" ? "gold" : ""}">${deal.badge}</span></div><div class="tag-list" style="margin-top: 12px;"><span>${deal.category}</span><span>${deal.meta}</span></div></button>`).join("")}</div>
      </section>
    </div>
  `;
}

function renderAI() {
  const active = prompts[state.activePrompt];
  return `
    <div class="screen-stack">
      <section class="ai-chat">
        <div class="card-header-inline"><div><span class="eyebrow">AI concierge</span><h3>Ask in plain language</h3></div><span class="kicker">Source-aware</span></div>
        <div class="chat-bubble user">${active.title}</div>
        <div class="chat-bubble assistant">${active.reply}<div class="source-row" style="margin-top: 12px;">${active.sources.map((source) => `<span class="source-pill">${source}</span>`).join("")}</div></div>
      </section>
      <div class="prompt-row">${Object.entries(prompts).map(([key, prompt]) => `<button class="prompt-chip ${state.activePrompt === key ? "active" : ""}" data-prompt="${key}" type="button">${prompt.title}</button>`).join("")}</div>
      <section class="ai-grid">
        <button class="ai-card" type="button" data-detail-type="prompt" data-detail-id="${state.activePrompt}"><strong>${active.action}</strong><span>Move from AI answer to a concrete journey with one tap.</span></button>
        <article class="ai-card"><strong>Why this matters</strong><span>The assistant is tied to partner offers, official campus information, community content and user profile context, not treated as a detached chatbot.</span></article>
      </section>
    </div>
  `;
}

function renderCommunity() {
  return `
    <div class="screen-stack">
      <section class="section-card">
        <div class="card-header-inline"><div><span class="eyebrow">Events and chapters</span><h3>Structured, not noisy</h3></div><button class="text-button" type="button" data-detail-type="event" data-detail-id="event-founder">Calendar</button></div>
        <div class="list-grid">${events.map((event) => `<button class="event-card" type="button" data-detail-type="event" data-detail-id="${event.id}"><div class="card-header-inline"><strong>${event.title}</strong><span class="kicker">${event.kicker}</span></div><span>${event.subtitle}</span><div class="inline-meta" style="margin-top: 10px;"><span>${event.meta}</span></div></button>`).join("")}</div>
      </section>
      <section class="section-card">
        <div class="card-header-inline"><div><span class="eyebrow">Mentors</span><h3>People who can actually help</h3></div><span class="kicker gold">High trust</span></div>
        <div class="list-grid">${mentors.map((mentor) => `<button class="mentor-card" type="button" data-detail-type="mentor" data-detail-id="${mentor.id}"><strong>${mentor.title}</strong><span>${mentor.subtitle}</span><div class="tag-list" style="margin-top: 10px;"><span>${mentor.meta}</span></div></button>`).join("")}</div>
      </section>
      <section class="dual-grid">${groups.map((group) => `<button class="group-card" type="button" data-detail-type="group" data-detail-id="${group.id}"><strong>${group.title}</strong><span>${group.subtitle}</span><div class="inline-meta" style="margin-top: 10px;"><span>${group.meta}</span></div></button>`).join("")}</section>
      <section class="section-card">
        <div class="card-header-inline"><div><span class="eyebrow">Career and business</span><h3>Opportunity layer</h3></div></div>
        <div class="list-grid">${jobs.map((job) => `<button class="job-card" type="button" data-detail-type="job" data-detail-id="${job.id}"><strong>${job.title}</strong><span>${job.subtitle}</span><div class="inline-meta" style="margin-top: 10px;"><span>${job.meta}</span></div></button>`).join("")}${businesses.map((business) => `<button class="business-card" type="button" data-detail-type="business" data-detail-id="${business.id}"><strong>${business.title}</strong><span>${business.subtitle}</span><div class="inline-meta" style="margin-top: 10px;"><span>${business.meta}</span></div></button>`).join("")}</div>
      </section>
    </div>
  `;
}

function renderProfile() {
  const role = roleConfig[state.role];
  return `
    <div class="screen-stack">
      <section class="wallet-card"><span class="eyebrow">Member wallet</span><h3 style="margin-top: 6px;">${role.profileMeta}</h3><div class="wallet-balance">2,540 pts</div><p>Rewards from offer saves, bookings, referrals and community participation.</p></section>
      <div class="wallet-grid">
        <button class="wallet-action" type="button" data-detail-type="wallet" data-detail-id="points"><strong>Redeem rewards</strong><span>Use points for bundles, food and community perks.</span></button>
        <button class="wallet-action" type="button" data-detail-type="wallet" data-detail-id="referral"><strong>Invite friends</strong><span>Earn more when verified members join through you.</span></button>
      </div>
      <section class="verification-card">
        <div class="card-header-inline"><div><span class="eyebrow">Verification</span><strong>Identity and trust controls</strong></div><span class="kicker gold">Active</span></div>
        <div class="tag-list" style="margin-top: 12px;"><span>UNIZIK verified</span><span>Faculty tagged</span><span>Consent saved</span><span>Official sources on</span></div>
      </section>
      <section class="reward-card"><strong>Saved collection</strong><span>Your shortlist carries across deals, events, mentors and businesses.</span><div class="saved-pill-list" style="margin-top: 12px;"><button class="saved-pill active" type="button" data-detail-type="deal" data-detail-id="deal-housing">Accommodation</button><button class="saved-pill" type="button" data-detail-type="event" data-detail-id="event-founder">Founder mixer</button><button class="saved-pill" type="button" data-detail-type="mentor" data-detail-id="mentor-ifeoma">Mentor</button><button class="saved-pill" type="button" data-detail-type="business" data-detail-id="biz-lex">Business</button></div></section>
      <section class="section-card">
        <div class="card-header-inline"><div><span class="eyebrow">Operations preview</span><h3>Want to see the partner side?</h3></div><button class="primary-inline" type="button" id="profile-admin-button">Open studio</button></div>
        <div class="small-grid">${studioCards.slice(0, 2).map((card) => `<article class="small-card"><strong>${card.title}</strong><span>${card.body}</span></article>`).join("")}</div>
      </section>
    </div>
  `;
}

function renderScreen() {
  const role = roleConfig[state.role];
  root.roleLabel.textContent = role.label;
  root.screenTitle.textContent = navItems.find((item) => item.id === state.tab)?.label || "Home";
  let content = "";
  if (state.tab === "home") content = renderHome();
  if (state.tab === "explore") content = renderExplore();
  if (state.tab === "ai") content = renderAI();
  if (state.tab === "community") content = renderCommunity();
  if (state.tab === "profile") content = renderProfile();
  root.screenContent.innerHTML = content;
}

function detailPayload(type, id) {
  if (type === "deal") return findById(deals, id);
  if (type === "event") return findById(events, id);
  if (type === "mentor") return findById(mentors, id);
  if (type === "job") return findById(jobs, id);
  if (type === "business") return findById(businesses, id);
  if (type === "prompt") return prompts[id]?.detail;

  if (type === "wallet" && id === "points") {
    return {
      title: "Rewards wallet",
      subtitle: "Redeem across partner surfaces",
      meta: "2,540 points ready",
      detailBody:
        "The wallet is designed as the retention layer tying community behaviour back into commerce. It supports redemptions, referrals and future membership benefits.",
      bullets: [
        "Points from offers, events and referrals",
        "Instant redemption states",
        "Future premium memberships"
      ],
      cta: "Use rewards"
    };
  }

  if (type === "wallet" && id === "referral") {
    return {
      title: "Referral loop",
      subtitle: "Bring more of the community into the hub",
      meta: "Growth engine",
      detailBody:
        "A referral program is included because the concept depends on community density. It gives the university, partners and members aligned incentives to grow reach.",
      bullets: [
        "Verified invites only",
        "Points after profile completion",
        "Attribution in admin analytics"
      ],
      cta: "Invite now"
    };
  }

  const generic = {
    "ai-help": {
      title: "AI help center",
      subtitle: "Ask once, act instantly",
      meta: "Practical assistance",
      detailBody:
        "This action sits at the center of the experience. It routes students and alumni into support, discovery and commerce without forcing them through a rigid menu tree.",
      bullets: [
        "Prompt chips tuned to common intents",
        "Sources shown on important answers",
        "Actions connected to real app surfaces"
      ],
      cta: "Open concierge"
    },
    deals: deals.find((item) => item.id === "deal-food"),
    housing: deals.find((item) => item.id === "deal-housing"),
    jobs: jobs.find((item) => item.id === "job-growth"),
    network: {
      title: "Alumni network",
      subtitle: "Context-aware reconnection",
      meta: "Faculty, city and career filters",
      detailBody:
        "The alumni network flow is designed to feel intentional and useful, not like an empty social graph. People can reconnect around shared context, events and opportunities.",
      bullets: [
        "Chapter-based relevance",
        "Mentor and business hooks",
        "Saved conversation trails"
      ],
      cta: "View network"
    },
    mentor: mentors.find((item) => item.id === "mentor-ifeoma"),
    businesses: deals.find((item) => item.id === "deal-business"),
    events: findById(events, "event-dinner")
  };

  if (generic[id]) return generic[id];

  return {
    title: id,
    subtitle: "Concept surface",
    meta: "Demo route",
    detailBody:
      "This route is represented in the prototype and can be expanded into a richer task flow in the next iteration.",
    bullets: [
      "Aligned to PRD scope",
      "Included in screen map",
      "Ready for deeper prototyping"
    ],
    cta: "Explore"
  };
}

function renderSelectedDetail(payload) {
  root.selectedTitle.textContent = payload.title;
  root.selectedBody.innerHTML = `
    <div class="selected-visual">
      <span class="eyebrow">${payload.meta || "Selected"}</span>
      <strong>${payload.subtitle || payload.title}</strong>
      <p>${payload.detailBody || payload.body || payload.subtitle || ""}</p>
    </div>
    ${
      payload.bullets
        ? `<ul class="sheet-list">${payload.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>`
        : ""
    }
    <div class="detail-actions">
      ${payload.cta ? `<button class="primary-inline" type="button">${payload.cta}</button>` : ""}
      <button class="secondary-inline" type="button" id="selected-open-sheet">Open mobile sheet</button>
    </div>
  `;
  root.detailClose.classList.remove("hidden");
}

function openDetail(type, id) {
  const payload = detailPayload(type, id);
  state.detail = { type, id, payload };
  renderSelectedDetail(payload);
  root.sheetTitle.textContent = payload.title;
  root.sheetBody.innerHTML = `
    <div class="sheet-panel">
      <span class="kicker ${payload.meta && payload.meta.toLowerCase().includes("verified") ? "gold" : ""}">${payload.meta || "Detail"}</span>
      <h3 style="margin-top: 12px;">${payload.subtitle || payload.title}</h3>
      <p style="margin-top: 10px;">${payload.detailBody || payload.body || payload.subtitle || ""}</p>
    </div>
    ${
      payload.bullets
        ? `<article class="sheet-panel"><strong>Why this flow matters</strong><ul class="sheet-list">${payload.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul></article>`
        : ""
    }
    <article class="sheet-panel">
      <strong>Next step</strong>
      <div class="detail-actions" style="margin-top: 10px;">
        ${payload.cta ? `<button class="primary-inline" type="button">${payload.cta}</button>` : ""}
        <button class="secondary-inline" type="button" data-close-overlay="detail-sheet">Close</button>
      </div>
    </article>
  `;
  showOverlay("detail-sheet");
}

function clearDetail() {
  state.detail = null;
  root.selectedTitle.textContent = "Choose a card in the phone demo";
  root.selectedBody.innerHTML = "<p>Tap deals, prompts, mentors, events, accommodation or jobs to inspect the richer product surface here.</p>";
  root.detailClose.classList.add("hidden");
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const roleButton = event.target.closest("[data-role]");
    if (roleButton) {
      state.role = roleButton.dataset.role;
      render();
      return;
    }

    const navButton = event.target.closest("[data-tab]");
    if (navButton) {
      state.tab = navButton.dataset.tab;
      render();
      return;
    }

    const categoryButton = event.target.closest("[data-category]");
    if (categoryButton) {
      state.exploreCategory = categoryButton.dataset.category;
      render();
      return;
    }

    const promptButton = event.target.closest("[data-prompt]");
    if (promptButton) {
      state.activePrompt = promptButton.dataset.prompt;
      render();
      return;
    }

    const detailTrigger = event.target.closest("[data-detail-type]");
    if (detailTrigger) {
      openDetail(detailTrigger.dataset.detailType, detailTrigger.dataset.detailId);
      return;
    }

    const targetNav = event.target.closest("[data-nav-target]");
    if (targetNav) {
      state.tab = targetNav.dataset.navTarget;
      render();
      return;
    }

    if (event.target.id === "admin-toggle" || event.target.id === "profile-admin-button") {
      showOverlay("studio-sheet");
      return;
    }

    if (event.target.id === "notification-button") {
      showOverlay("notifications-sheet");
      return;
    }

    if (event.target.id === "detail-close") {
      clearDetail();
      return;
    }

    if (event.target.id === "selected-open-sheet" && state.detail) {
      showOverlay("detail-sheet");
      return;
    }

    const closeTarget = event.target.closest("[data-close-overlay]");
    if (closeTarget) {
      hideOverlay(closeTarget.dataset.closeOverlay);
    }
  });
}

function render() {
  renderRoleSwitch();
  renderBottomNav();
  renderScreen();
  if (state.detail) renderSelectedDetail(state.detail.payload);
}

initStaticPanels();
bindEvents();
render();
