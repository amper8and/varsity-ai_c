const state = {
  phase: "app",
  onboardingStep: 0,
  role: "student",
  tab: "home",
  route: null,
  category: "all",
  prompt: "housing",
};

const icons = {
  home: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11.5 12 4l9 7.5"></path><path d="M5 10.5V20h14v-9.5"></path></svg>`,
  explore: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"></circle><path d="m15.5 8.5-2.8 6-4.2 1.6 1.6-4.2z"></path></svg>`,
  spark: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m13 2 1.8 4.8L20 8.5l-4.2 3.1L17.2 17 13 13.9 8.8 17l1.4-5.4L6 8.5l5.2-1.7z"></path></svg>`,
  users: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.5 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"></path><path d="M15.5 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path><path d="M3.5 19c1.4-2.4 3.5-3.6 6.3-3.6S14.7 16.6 16 19"></path><path d="M14.5 18c.7-1.4 1.9-2.1 3.6-2.1s2.8.7 3.4 2.1"></path></svg>`,
  wallet: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18a2 2 0 0 1 2 2v2H6.5A2.5 2.5 0 0 0 4 11.5z"></path><path d="M20 9H6.5A2.5 2.5 0 0 0 4 11.5v5A2.5 2.5 0 0 0 6.5 19H20z"></path><circle cx="16.5" cy="14" r="1"></circle></svg>`,
  bell: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 9.5a4.5 4.5 0 1 1 9 0c0 5 2 6 2 6h-13s2-1 2-6"></path><path d="M10 18.5a2.3 2.3 0 0 0 4 0"></path></svg>`,
  back: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14.5 6.5-6 5.5 6 5.5"></path></svg>`,
  close: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 7 10 10"></path><path d="M17 7 7 17"></path></svg>`,
  arrow: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"></path></svg>`,
  hostel: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V8l8-4 8 4v11"></path><path d="M9 19v-5h6v5"></path></svg>`,
  map: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6.5 9 4l6 2 5-2v13.5L15 20l-6-2-5 2z"></path><path d="M9 4v14"></path><path d="M15 6v14"></path></svg>`,
  planner: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="4.5" width="14" height="15" rx="2"></rect><path d="M8 2.5v4"></path><path d="M16 2.5v4"></path><path d="M8 10h8"></path><path d="M8 14h5"></path></svg>`,
  food: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3v8"></path><path d="M10 3v8"></path><path d="M7 7h3"></path><path d="M8.5 11v10"></path><path d="M15 3c2 2.5 2 6 0 8.5"></path><path d="M15 11.5V21"></path></svg>`,
  jobs: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="7" width="16" height="12" rx="2"></rect><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7"></path><path d="M4 12h16"></path></svg>`,
  mentor: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.5"></circle><path d="M5.5 19c1.8-2.9 4-4.3 6.5-4.3s4.7 1.4 6.5 4.3"></path></svg>`,
  gift: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10h16v9H4z"></path><path d="M12 10v9"></path><path d="M2.5 7.5h19v2.5h-19z"></path><path d="M12 7.5c-1.9 0-3.5-1.1-3.5-2.5S10 2.5 12 7.5Z"></path><path d="M12 7.5c1.9 0 3.5-1.1 3.5-2.5S14 2.5 12 7.5Z"></path></svg>`,
  verify: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5 6 6v5c0 4 2.4 7 6 9 3.6-2 6-5 6-9V6z"></path><path d="m9.5 12 1.7 1.8L15 10"></path></svg>`,
};

const tabs = [
  { id: "home", label: "Home", icon: "home" },
  { id: "explore", label: "Explore", icon: "explore" },
  { id: "ai", label: "Zik AI", icon: "spark" },
  { id: "community", label: "People", icon: "users" },
  { id: "wallet", label: "Wallet", icon: "wallet" },
];

const onboarding = [
  {
    id: "welcome",
    title: "Welcome",
    body: "Choose how you use Varsity AI.",
    badge: "Get started",
  },
  {
    id: "role",
    title: "Select role",
    body: "Student or alumni.",
    badge: "Personalize",
  },
  {
    id: "verify",
    title: "Verify access",
    body: "Confirm identity to unlock deals, rewards and network access.",
    badge: "Secure access",
  },
];

const roles = {
  student: {
    label: "Student mode",
    greeting: "Hi, Adaeze",
    subtitle: "Your week is organized.",
    avatar: "AD",
    pills: ["Engineering", "300 level", "Verified"],
    heroTitle: "Today",
    heroBody: "",
    heroStats: [
      { value: "3", label: "saved offers" },
      { value: "11:00", label: "next class" },
      { value: "180", label: "new points" },
    ],
    stories: [
      { title: "Housing", subtitle: "Verified hostels", icon: "hostel", tone: "#d8f1e2", soft: "#eef9f1" },
      { title: "Planner", subtitle: "3 tasks ready", icon: "planner", tone: "#f6ead1", soft: "#fff8ea" },
      { title: "Mentors", subtitle: "2 warm intros", icon: "mentor", tone: "#dce9ff", soft: "#f1f6ff" },
    ],
  },
  alumni: {
    label: "Alumni mode",
    greeting: "Hi, Chinedu",
    subtitle: "Your network is active.",
    avatar: "CH",
    pills: ["Class of 2016", "Lagos chapter", "Verified"],
    heroTitle: "Today",
    heroBody: "",
    heroStats: [
      { value: "2", label: "mentor requests" },
      { value: "4", label: "new listings" },
      { value: "Fri", label: "chapter mixer" },
    ],
    stories: [
      { title: "Chapters", subtitle: "Lagos active", icon: "users", tone: "#d8f1e2", soft: "#eef9f1" },
      { title: "Business", subtitle: "4 new offers", icon: "wallet", tone: "#f6ead1", soft: "#fff8ea" },
      { title: "Mentor", subtitle: "Students waiting", icon: "mentor", tone: "#dce9ff", soft: "#f1f6ff" },
    ],
  },
};

const quickActions = [
  { id: "hostel", title: "Hostels", copy: "Near-campus stays", icon: "hostel", route: "accommodation", tone: "#0d5c44" },
  { id: "map", title: "Campus map", copy: "Find key places", icon: "map", route: "campus-map", tone: "#2a7b72" },
  { id: "planner", title: "Planner", copy: "Organize the week", icon: "planner", route: "study-planner", tone: "#d6a348" },
  { id: "ai", title: "Zik AI", copy: "Ask and act", icon: "spark", tab: "ai", tone: "#db6d57" },
];

const featuredDeals = [
  { id: "deal-hostel", title: "Green Court", copy: "Flexible hostel booking", value: "12% off", meta: "52 rooms left", tone: "#0d5c44", soft: "#dbf2e4", tag: "Verified" },
  { id: "deal-food", title: "Meal pass", copy: "5 weekday lunches", value: "180 pts", meta: "Student essential", tone: "#d6a348", soft: "#fff0d2", tag: "Popular" },
  { id: "deal-data", title: "Study data", copy: "Learning bundle", value: "1.8GB extra", meta: "MTN partner", tone: "#2a7b72", soft: "#daf2ee", tag: "Smart spend" },
];

const marketplaceDeals = [
  { id: "deal-hostel", category: "housing", title: "Green Court hostel", copy: "Female wing, generator, borehole", price: "N420k", meta: "8 mins to campus", tag: "Trusted", tone: "#0d5c44", soft: "#d9f1e4" },
  { id: "deal-lodge", category: "housing", title: "Hillview lodge", copy: "Premium self-contained stay", price: "N610k", meta: "Ifite corridor", tag: "Premium", tone: "#2a7b72", soft: "#d8efea" },
  { id: "deal-food", category: "food", title: "Campus meal pass", copy: "5 lunches from partner kitchens", price: "N9.5k", meta: "Weekly plan", tag: "Popular", tone: "#d6a348", soft: "#fff1d8" },
  { id: "deal-cafe", category: "food", title: "Library breakfast", copy: "Coffee and sandwich combo", price: "N2.2k", meta: "Main campus", tag: "Quick bite", tone: "#db6d57", soft: "#fde4df" },
  { id: "deal-jobkit", category: "career", title: "CV review", copy: "Interview prep with alumni recruiters", price: "N6k", meta: "24 slots open", tag: "Career", tone: "#4677c9", soft: "#e6efff" },
  { id: "deal-business", category: "business", title: "Business showcase", copy: "Discovery placement in the alumni feed", price: "N18k", meta: "Seen by chapters", tag: "Growth", tone: "#7d4fd6", soft: "#eee6ff" },
];

const prompts = {
  housing: {
    title: "Find a safe hostel near Engineering",
    answer: "Three verified options fit your route. Green Court is the best value, Hillview is the premium pick.",
    route: "accommodation",
    action: "Open hostels",
  },
  timetable: {
    title: "Plan my study week around classes",
    answer: "I grouped your work into three focus windows and suggested a lighter Thursday before labs.",
    route: "study-planner",
    action: "Open planner",
  },
  network: {
    title: "Who can help me connect with media alumni?",
    answer: "I found three relevant alumni and one chapter mixer this Friday for warmer introductions.",
    route: "alumni-network",
    action: "Open network",
  },
};

const events = [
  { id: "event-mixer", title: "Founder mixer", month: "MAR", day: "21", copy: "Builders, alumni and brand partners", meta: "Awka civic lounge", tone: "#0d5c44" },
  { id: "event-health", title: "Health careers", month: "MAR", day: "24", copy: "Mentorship and internship roundtable", meta: "Nnewi campus", tone: "#2a7b72" },
  { id: "event-fair", title: "Market day", month: "MAR", day: "29", copy: "Offers, food and community businesses", meta: "Main campus green", tone: "#d6a348" },
];

const mentors = [
  { id: "mentor-ifeoma", name: "Ifeoma Eze", initials: "IE", role: "Growth lead", meta: "Product and career mentor", tone: "#0d5c44" },
  { id: "mentor-uche", name: "Uche Madu", initials: "UM", role: "Health entrepreneur", meta: "Startup and healthcare advice", tone: "#2a7b72" },
  { id: "mentor-kingsley", name: "Kingsley Obi", initials: "KO", role: "Brand strategist", meta: "Media and growth intros", tone: "#d6a348" },
];

const jobs = [
  { id: "job-growth", title: "Graduate growth analyst", meta: "Lagos hybrid", copy: "Alumni-founded startup", tone: "#4677c9" },
  { id: "job-content", title: "Community content intern", meta: "Awka flexible", copy: "Paid student-friendly role", tone: "#db6d57" },
];

const connections = [
  { id: "conn-1", name: "Adaora Nkem", initials: "AN", meta: "Law | Abuja chapter", copy: "Interested in mentoring final-year students", tone: "#0d5c44" },
  { id: "conn-2", name: "Tobe Nnadi", initials: "TN", meta: "Media product | Lagos", copy: "Open to coffee chats and portfolio feedback", tone: "#2a7b72" },
  { id: "conn-3", name: "Chisom Obi", initials: "CO", meta: "Architecture | Awka", copy: "Hiring junior creatives this quarter", tone: "#d6a348" },
];

const news = [
  { title: "Innovation sprint opens", copy: "Students can apply to a 6-week maker sprint backed by alumni mentors.", tag: "Campus" },
  { title: "Faster support routing", copy: "Verification-linked requests now move quicker across documentation and student services.", tag: "Service" },
];

const rewards = [
  { id: "meal", title: "Meal pass", copy: "Use 800 points", tone: "#d6a348" },
  { id: "event", title: "Event upgrade", copy: "Use 1,200 points", tone: "#0d5c44" },
  { id: "data", title: "Data bonus", copy: "Use 650 points", tone: "#2a7b72" },
];

const root = {
  header: document.getElementById("app-header"),
  main: document.getElementById("app-main"),
  tabs: document.getElementById("tab-bar"),
  sheet: document.getElementById("sheet-overlay"),
  sheetTitle: document.getElementById("sheet-title"),
  sheetBody: document.getElementById("sheet-body"),
  sheetCloseIcon: document.getElementById("sheet-close-icon"),
};

function icon(name, className = "") {
  return `<span class="${className}">${icons[name] || ""}</span>`;
}

function roleData() {
  return roles[state.role];
}

function styleVars(item) {
  return `style="--tone:${item.tone}; --tone-soft:${item.soft || item.tone};"`;
}

function chip(text, className = "meta-chip") {
  return `<span class="${className}">${text}</span>`;
}

function avatar(initials, tone = "#0d5c44") {
  return `<div class="avatar-ring" style="background:linear-gradient(135deg, ${tone}, #d6a348)"><span>${initials}</span></div>`;
}

function renderHeader() {
  if (state.phase === "onboarding") {
    root.header.innerHTML = `
      <div class="header-row">
        <div class="header-primary">
          <div class="avatar-sm">VA</div>
          <div class="onboarding-brand">
            <strong>Varsity AI</strong>
            <span>for UNIZIK</span>
          </div>
        </div>
        <button class="icon-button" type="button" data-skip-onboarding="true">${icon("arrow", "icon-holder")}</button>
      </div>
    `;
    return;
  }

  if (state.route) {
    root.header.innerHTML = `
      <div class="header-row">
        <div class="header-primary">
          <button class="back-button" type="button" data-back="true">${icon("back", "icon-holder")}</button>
          <div class="header-copy">
            <p class="eyebrow">${roleData().label}</p>
            <h2>${routeTitle(state.route)}</h2>
            <p>${routeSubtitle(state.route)}</p>
          </div>
        </div>
        <button class="icon-button" type="button" data-notifications="true">${icon("bell", "icon-holder")}</button>
      </div>
    `;
    return;
  }

  root.header.innerHTML = `
    <div class="header-row">
      <div class="header-primary">
        <div class="avatar">${roleData().avatar}</div>
        <div class="header-copy">
          <p class="eyebrow">${roleData().label}</p>
          <h2>${roleData().greeting}</h2>
          <p>${roleData().subtitle}</p>
        </div>
      </div>
      <div class="header-actions">
        <button class="icon-button" type="button" data-notifications="true">${icon("bell", "icon-holder")}</button>
      </div>
    </div>
    <div class="chip-row" style="margin-top: 14px;">${roleData().pills.map((item) => chip(item, "role-chip")).join("")}</div>
  `;
}

function renderTabs() {
  if (state.phase === "onboarding") {
    root.tabs.classList.add("hidden");
    root.tabs.innerHTML = "";
    return;
  }

  root.tabs.classList.remove("hidden");
  root.tabs.innerHTML = tabs
    .map(
      (tab) => `
        <button class="tab-button ${state.tab === tab.id && !state.route ? "active" : ""}" type="button" data-tab="${tab.id}">
          ${icon(tab.icon, "nav-icon")}
          <span>${tab.label}</span>
        </button>
      `
    )
    .join("");
}

function renderOnboarding() {
  const step = onboarding[state.onboardingStep];
  const finalStep = state.onboardingStep === onboarding.length - 1;
  const welcomeStep = step.id === "welcome";

  return `
    <section class="onboarding-stack">
      <article class="onboarding-card visual">
        ${
          welcomeStep
            ? `
              <div class="welcome-hero">
                <div class="welcome-copy">
                  <p class="eyebrow">${step.badge}</p>
                  <h2 class="welcome-title">${step.title}</h2>
                  <p class="welcome-subtitle">${step.body}</p>
                </div>
                <div class="welcome-scene">
                  <div class="scene-orb"></div>
                  <div class="scene-orb small"></div>
                  <div class="scene-phone">
                    <div class="scene-top">
                      <span class="scene-pill">Verified</span>
                      <span class="scene-pill ghost">Live</span>
                    </div>
                    <div class="scene-grid">
                      <div class="scene-card tone-green">
                        <span>Hostels</span>
                        <strong>52 rooms</strong>
                      </div>
                      <div class="scene-card tone-gold">
                        <span>Rewards</span>
                        <strong>2,540 pts</strong>
                      </div>
                      <div class="scene-card tone-sky wide">
                        <span>People</span>
                        <strong>Mentors + alumni</strong>
                      </div>
                    </div>
                  </div>
                  <div class="scene-floating scene-floating-a">
                    <span>Events</span>
                    <strong>21 Mar</strong>
                  </div>
                  <div class="scene-floating scene-floating-b">
                    <span>Zik AI</span>
                    <strong>Ask and act</strong>
                  </div>
                  <div class="scene-avatars">
                    <span>AD</span>
                    <span>IE</span>
                    <span>TN</span>
                  </div>
                </div>
              </div>
            `
            : `
              <p class="eyebrow">${step.badge}</p>
              <h2 style="margin-top: 10px; font-size: 1.42rem; line-height: 1.06;">${step.title}</h2>
              <p>${step.body}</p>
              <div class="onboarding-visual">
                <div class="orb"></div>
                <div class="float-card">
                  <strong>${state.onboardingStep === 1 ? "Role-aware" : "Trusted access"}</strong>
                  <span>${state.onboardingStep === 1 ? "Student and alumni tuned" : "Verification-led experiences"}</span>
                </div>
                <div class="signal-card">
                  <strong>${state.onboardingStep === 2 ? "Verified" : "Live"}</strong>
                  <span>${state.onboardingStep === 1 ? "Paths change by persona" : "Deals, rewards, chapters"}</span>
                </div>
              </div>
            `
        }
      </article>

      ${
        step.id === "role"
          ? `<div class="mode-grid">
              <button class="mode-card ${state.role === "student" ? "active" : ""}" type="button" data-role="student">
                ${icon("planner", "card-icon large")}
                <div class="card-title">Student</div>
                <div class="card-copy">Utility, affordability and momentum.</div>
              </button>
              <button class="mode-card ${state.role === "alumni" ? "active" : ""}" type="button" data-role="alumni">
                ${icon("users", "card-icon large")}
                <div class="card-title">Alumni</div>
                <div class="card-copy">Network, chapter life and opportunity.</div>
              </button>
            </div>`
          : ""
      }

      ${
        finalStep
          ? `<article class="panel">
              <div class="section-head">
                <div>
                  <p class="eyebrow">Unlocks</p>
                  <h3 class="section-title">What verification enables</h3>
                </div>
                ${chip("Required", "badge gold")}
              </div>
              <div class="action-grid" style="margin-top: 14px;">
                <div class="action-card active" style="--tone:#0d5c44;">
                  ${icon("verify", "card-icon")}
                  <div class="card-title">Deals</div>
                  <div class="card-copy">Member pricing and rewards.</div>
                </div>
                <div class="action-card" style="--tone:#d6a348;">
                  ${icon("users", "card-icon")}
                  <div class="card-title">Network</div>
                  <div class="card-copy">Mentors, chapters, warm intros.</div>
                </div>
              </div>
            </article>`
          : ""
      }

      <div class="action-row">
        ${state.onboardingStep > 0 ? `<button class="secondary-button" type="button" data-prev-onboarding="true">Back</button>` : ""}
        <button class="primary-button" type="button" data-next-onboarding="true">${finalStep ? "Enter app" : "Continue"}</button>
      </div>
    </section>
  `;
}

function renderHome() {
  return `
    <section class="screen-stack">
      <article class="hero-panel home-hero-panel media-hero-panel">
        <img class="hero-media-image" src="${heroImage()}" alt="" />
        <div class="hero-media-scrim"></div>
        <div class="hero-layout compact media">
          <div class="hero-copy compact media">
            <p class="eyebrow">Today</p>
            <h2 class="hero-title compact">${state.role === "student" ? "Campus" : "Alumni"}</h2>
            <div class="chip-row" style="margin-top: 14px;">
              ${roleData().pills.map((item) => chip(item, "story-badge")).join("")}
            </div>
          </div>
          <div class="hero-visual poster-visual overlay">
            <div class="poster-stack">
              <div class="poster-card poster-primary">
                <span>${state.role === "student" ? "Next" : "Upcoming"}</span>
                <strong>${state.role === "student" ? "11:00 class" : "Fri mixer"}</strong>
              </div>
              <div class="poster-card poster-secondary">
                <span>Wallet</span>
                <strong>2,540 pts</strong>
              </div>
              <div class="poster-card poster-tertiary">
                <span>${state.role === "student" ? "Hostels" : "Network"}</span>
                <strong>${state.role === "student" ? "52 live" : "42 nearby"}</strong>
              </div>
            </div>
          </div>
        </div>
      </article>

      <section>
        <div class="section-head">
          <div>
            <p class="eyebrow">Shortcuts</p>
            <h3 class="section-title">Quick access</h3>
          </div>
        </div>
        <div class="quick-action-rail" style="margin-top: 12px;">
          ${quickActions.map((item) => `
            <button class="quick-visual-card" type="button" style="--tone:${item.tone};" ${item.route ? `data-route="${item.route}"` : `data-tab-jump="${item.tab}"`}>
              <div class="quick-visual-icon">${icons[item.icon]}</div>
              <div class="quick-visual-art"></div>
              <div class="quick-visual-label">${item.title}</div>
            </button>`).join("")}
        </div>
      </section>

      <section>
        <div class="section-head">
          <div>
            <p class="eyebrow">Offers</p>
            <h3 class="section-title">Saved for you</h3>
          </div>
          <button class="soft-button" type="button" data-tab="explore">${icon("explore", "icon-holder")}</button>
        </div>
        <div class="poster-strip" style="margin-top: 12px;">
          ${featuredDeals.map((item) => `
            <button class="offer-poster" type="button" ${styleVars(item)} data-route="deal-detail" data-route-id="${item.id}">
              <div class="offer-poster-media">
                <img class="poster-media-image" src="${mediaImage(item.id)}" alt="" />
                <div class="image-scrim"></div>
                ${chip(item.tag, "tiny-badge")}
                <div class="offer-value">${item.value}</div>
                <div class="offer-mini-chip">${item.meta}</div>
              </div>
              <div class="offer-poster-footer">
                <strong>${item.title}</strong>
                <span>${item.copy}</span>
              </div>
            </button>`).join("")}
        </div>
      </section>

      <section>
        <div class="section-head">
          <div>
            <p class="eyebrow">Events</p>
            <h3 class="section-title">Coming up</h3>
          </div>
          <button class="soft-button" type="button" data-route="event-calendar">${icon("planner", "icon-holder")}</button>
        </div>
        <div class="event-tile-stack" style="margin-top: 12px;">
          ${events.slice(0, 2).map((item) => `
            <button class="event-poster" type="button" style="--tone:${item.tone};" data-sheet-type="event" data-sheet-id="${item.id}">
              <div class="event-date-badge">
                <span>${item.month}</span>
                <strong>${item.day}</strong>
              </div>
              <div class="event-poster-copy">
                <strong>${item.title}</strong>
                <span>${item.meta}</span>
              </div>
              <div class="event-poster-mark">${icons.spark}</div>
            </button>`).join("")}
        </div>
      </section>
    </section>
  `;
}

function renderExplore() {
  const categories = ["all", "housing", "food", "career", "business"];
  const items = state.category === "all" ? marketplaceDeals : marketplaceDeals.filter((item) => item.category === state.category);

  return `
    <section class="screen-stack">
      <article class="section-banner">
        <img class="banner-image" src="./assets/explore-banner.svg" alt="" />
        <div class="banner-scrim"></div>
        <div class="banner-copy">
          <p class="eyebrow">Explore</p>
          <h3 class="section-title">Featured</h3>
        </div>
      </article>
      <div class="panel compact-panel">
        <div class="section-head">
          <div>
            <p class="eyebrow">Marketplace</p>
            <h3 class="section-title">Browse</h3>
          </div>
          ${chip(`${items.length}`, "badge gold")}
        </div>
        <div class="chip-row" style="margin-top: 12px;">
          ${categories.map((item) => `<button class="filter-chip ${state.category === item ? "active" : ""}" type="button" data-category="${item}">${item === "all" ? "All" : item}</button>`).join("")}
        </div>
      </div>
      <div class="market-grid-media">
        ${items.map((item) => `
          <button class="market-poster" type="button" ${styleVars(item)} data-route="deal-detail" data-route-id="${item.id}">
            <div class="market-poster-visual">
              <img class="poster-media-image" src="${mediaImage(item.id)}" alt="" />
              <div class="image-scrim"></div>
              ${chip(item.tag, "tiny-badge")}
              <div class="market-poster-price">${item.price}</div>
              <div class="market-poster-art"></div>
            </div>
            <div class="market-poster-copy">
              <strong>${item.title}</strong>
              <span>${item.meta}</span>
            </div>
          </button>`).join("")}
      </div>
    </section>
  `;
}

function renderAI() {
  const prompt = prompts[state.prompt];
  return `
    <section class="screen-stack">
      <article class="ai-panel visual-ai-panel">
        <div class="ai-stage visual">
          <div class="ai-orb large"></div>
          <div class="ai-visual-card">
            <p class="eyebrow">Zik AI</p>
            <h3 class="section-title">${prompt.action}</h3>
            <div class="chat-bubble user compact" style="margin-top: 12px;">${prompt.title}</div>
            <div class="ai-answer-chips">
              <span>${prompt.answer.split('.')[0]}</span>
            </div>
          </div>
        </div>
      </article>
      <div class="ai-prompt-grid">
        ${Object.entries(prompts).map(([key, item]) => `<button class="prompt-visual ${state.prompt === key ? "active" : ""}" type="button" data-prompt="${key}"><span>${item.action}</span></button>`).join("")}
      </div>
      <div class="quick-action-rail two-up">
        <button class="quick-visual-card active" type="button" style="--tone:#0d5c44;" data-route="${prompt.route}">
          <div class="quick-visual-icon">${icons.spark}</div>
          <div class="quick-visual-art"></div>
          <div class="quick-visual-label">Open</div>
        </button>
        <button class="quick-visual-card" type="button" style="--tone:#d6a348;" data-sheet-type="prompt" data-sheet-id="${state.prompt}">
          <div class="quick-visual-icon">${icons.verify}</div>
          <div class="quick-visual-art"></div>
          <div class="quick-visual-label">Details</div>
        </button>
      </div>
    </section>
  `;
}

function renderCommunity() {
  return `
    <section class="screen-stack">
      <article class="section-banner narrow-banner">
        <img class="banner-image" src="./assets/alumni-spotlight.svg" alt="" />
        <div class="banner-scrim"></div>
        <div class="banner-copy">
          <p class="eyebrow">Spotlight</p>
          <h3 class="section-title">Community</h3>
        </div>
      </article>
      <section>
        <div class="section-head">
          <div>
            <p class="eyebrow">Mentors</p>
            <h3 class="section-title">People</h3>
          </div>
          <button class="soft-button" type="button" data-route="alumni-network">${icon("users", "icon-holder")}</button>
        </div>
        <div class="mentor-visual-row" style="margin-top: 12px;">
          ${mentors.map((item) => `
            <button class="mentor-visual-card" type="button" style="--tone:${item.tone};" data-route="mentor-profile" data-route-id="${item.id}">
              ${avatar(item.initials, item.tone)}
              <strong>${item.name}</strong>
              <span>${item.role}</span>
            </button>`).join("")}
        </div>
      </section>

      <section>
        <div class="section-head">
          <div>
            <p class="eyebrow">Opportunity</p>
            <h3 class="section-title">Open now</h3>
          </div>
        </div>
        <div class="market-grid-media" style="margin-top: 12px;">
          ${jobs.map((item) => `
            <button class="market-poster job-poster" type="button" style="--tone:${item.tone}; --tone-soft:${item.tone};" data-sheet-type="job" data-sheet-id="${item.id}">
              <div class="market-poster-visual">
                <img class="poster-media-image" src="./assets/explore-banner.svg" alt="" />
                <div class="image-scrim"></div>
                ${chip(item.meta, "tiny-badge")}
                <div class="market-poster-price">Open</div>
                <div class="market-poster-art"></div>
              </div>
              <div class="market-poster-copy">
                <strong>${item.title}</strong>
                <span>${item.meta}</span>
              </div>
            </button>`).join("")}
          <button class="market-poster business-poster" type="button" style="--tone:#7d4fd6; --tone-soft:#efe6ff;" data-route="deal-detail" data-route-id="deal-business">
            <div class="market-poster-visual">
              <img class="poster-media-image" src="./assets/alumni-spotlight.svg" alt="" />
              <div class="image-scrim"></div>
              ${chip("Growth", "tiny-badge")}
              <div class="market-poster-price">Reach</div>
              <div class="market-poster-art"></div>
            </div>
            <div class="market-poster-copy">
              <strong>Business showcase</strong>
              <span>Alumni placement</span>
            </div>
          </button>
        </div>
      </section>
    </section>
  `;
}

function renderWallet() {
  return `
    <section class="screen-stack">
      <article class="wallet-card rich-wallet-card">
        <div class="wallet-topline">
          <p class="eyebrow">${state.role === "student" ? "Campus wallet" : "Member wallet"}</p>
          ${chip("Verified", "tiny-badge")}
        </div>
        <div class="wallet-balance">2,540 pts</div>
        <div class="wallet-visual-grid">
          <div class="wallet-mini-card"><span>Saved</span><strong>N3,200</strong></div>
          <div class="wallet-mini-card"><span>Live</span><strong>4 items</strong></div>
        </div>
      </article>

      <div class="quick-action-rail two-up">
        <button class="quick-visual-card active" type="button" style="--tone:#d6a348;" data-route="redemption">
          <div class="quick-visual-icon">${icons.gift}</div>
          <div class="quick-visual-art"></div>
          <div class="quick-visual-label">Redeem</div>
        </button>
        <button class="quick-visual-card" type="button" style="--tone:#0d5c44;" data-route="verification">
          <div class="quick-visual-icon">${icons.verify}</div>
          <div class="quick-visual-art"></div>
          <div class="quick-visual-label">Verify</div>
        </button>
      </div>

      <section class="panel compact-panel">
        <div class="section-head">
          <div>
            <p class="eyebrow">Saved</p>
            <h3 class="section-title">Shortlist</h3>
          </div>
        </div>
        <div class="saved-strip" style="margin-top: 12px;">
          <button class="saved-chip active" type="button" data-route="deal-detail" data-route-id="deal-hostel">Hostel</button>
          <button class="saved-chip" type="button" data-route="mentor-profile" data-route-id="mentor-ifeoma">Mentor</button>
          <button class="saved-chip" type="button" data-route="event-calendar">Events</button>
          <button class="saved-chip" type="button" data-route="job-board">Jobs</button>
        </div>
      </section>
    </section>
  `;
}

function routeTitle(route) {
  const names = {
    accommodation: "Accommodation",
    "campus-map": "Campus map",
    "study-planner": "Study planner",
    "event-calendar": "Events",
    "mentor-profile": "Mentor",
    "deal-detail": "Offer detail",
    "job-board": "Jobs",
    "alumni-network": "Alumni network",
    redemption: "Redemption",
    verification: "Verification",
  };
  return names[route.id] || "Detail";
}

function routeSubtitle(route) {
  const names = {
    accommodation: "Verified housing flow",
    "campus-map": "Key places and context",
    "study-planner": "Organize the week visually",
    "event-calendar": "Community dates and chapters",
    "mentor-profile": "High-trust connection",
    "deal-detail": "Curated partner offer",
    "job-board": "Career and business opportunities",
    "alumni-network": "Context-aware reconnection",
    redemption: "Points and perks",
    verification: "Identity and access",
  };
  return names[route.id] || roleData().label;
}

function routeDeal(id) {
  return [...featuredDeals, ...marketplaceDeals].find((item) => item.id === id) || featuredDeals[0];
}

function renderRoute() {
  if (!state.route) return "";
  const route = state.route;

  if (route.id === "accommodation") {
    return `
      <section class="route-stack">
        <article class="route-hero">
          <div class="route-layout">
            <div class="route-copy">
              <p class="eyebrow">Hostel finder</p>
              <h2>Trusted places near the parts of campus that matter most.</h2>
              <p>Ifite corridor</p>
            </div>
            <div class="route-visual">
              <div class="orb"></div>
              <div class="float-card"><strong>52 rooms</strong><span>Verified this week</span></div>
              <div class="signal-card"><strong>Ifite</strong><span>Most active corridor</span></div>
            </div>
          </div>
        </article>
        <div class="chip-row">
          <span class="filter-chip active">Women only</span>
          <span class="filter-chip">Flexible pay</span>
          <span class="filter-chip">Water + power</span>
        </div>
        <div class="card-stack">
          ${marketplaceDeals.filter((item) => item.category === "housing").map((item) => `
            <button class="market-card" type="button" ${styleVars(item)} data-route="deal-detail" data-route-id="${item.id}">
              <div class="market-media">
                ${chip(item.tag, "tiny-badge")}
                <div class="media-value" style="margin-top: 20px;">${item.price}</div>
                <div class="media-badge"><strong>${item.meta}</strong><span>Near campus</span></div>
              </div>
              <div class="market-info">
                <div class="card-title">${item.title}</div>
                <div class="card-copy">${item.copy}</div>
                <div class="market-meta">${chip("Map linked")}${chip("Reviews", "meta-chip ghost")}</div>
              </div>
            </button>`).join("")}
        </div>
      </section>
    `;
  }

  if (route.id === "campus-map") {
    return `
      <section class="route-stack">
        <article class="map-panel">
          <p class="eyebrow">Map</p>
          <h3 class="section-title" style="margin-top: 8px;">Main campus</h3>
          <div class="map-stage">
            <div class="map-line" style="left: 14%; top: 18%; width: 64%; height: 12px;"></div>
            <div class="map-line" style="left: 30%; top: 38%; width: 12px; height: 44%;"></div>
            <div class="map-line" style="left: 18%; top: 62%; width: 58%; height: 12px;"></div>
            <div class="map-node" style="left: 20%; top: 16%;"></div>
            <div class="map-node" style="left: 58%; top: 18%;"></div>
            <div class="map-node" style="left: 42%; top: 56%;"></div>
            <div class="map-node" style="left: 70%; top: 64%;"></div>
          </div>
        </article>
        <article class="route-card">
          <div class="market-meta">
            ${chip("Engineering")}
            ${chip("Support desk", "meta-chip ghost")}
            ${chip("Food zone", "meta-chip ghost")}
          </div>
        </article>
      </section>
    `;
  }

  if (route.id === "study-planner") {
    return `
      <section class="route-stack">
        <article class="route-hero">
          <div class="route-layout">
            <div class="route-copy">
              <p class="eyebrow">Weekly rhythm</p>
              <h2>A calmer visual plan for classes, focus blocks and deadlines.</h2>
              <p>Mon to Fri</p>
            </div>
            <div class="route-visual">
              <div class="float-card"><strong>76%</strong><span>Week already mapped</span></div>
              <div class="signal-card"><strong>Thu</strong><span>Light schedule before labs</span></div>
            </div>
          </div>
        </article>
        <div class="chip-row">
          <span class="day-chip active">Mon</span>
          <span class="day-chip">Tue</span>
          <span class="day-chip">Wed</span>
          <span class="day-chip">Thu</span>
          <span class="day-chip">Fri</span>
        </div>
        <article class="route-card">
          <div class="card-stack">
            <div class="row-between"><strong>08:00 - 10:00</strong><span class="note-copy">Mechanics deep work</span></div>
            <div class="row-between"><strong>11:00 - 13:00</strong><span class="note-copy">Faculty classes</span></div>
            <div class="row-between"><strong>17:00 - 18:00</strong><span class="note-copy">AI review session</span></div>
          </div>
        </article>
      </section>
    `;
  }

  if (route.id === "event-calendar") {
    return `
      <section class="route-stack">
        <article class="calendar-panel">
          <p class="eyebrow">March</p>
          <h3 class="section-title" style="margin-top: 8px;">Events calendar</h3>
          <div class="calendar-grid">
            ${Array.from({ length: 28 }, (_, index) => `<div class="day-box ${[8, 14, 21, 24, 29].includes(index + 1) ? "active" : ""}">${index + 1}</div>`).join("")}
          </div>
        </article>
        <div class="card-stack">
          ${events.map((item) => `<button class="event-card" type="button" data-sheet-type="event" data-sheet-id="${item.id}"><div class="row-between"><div class="meta-chip">${item.month} ${item.day}</div>${chip(item.meta, "meta-chip ghost")}</div><div class="card-title" style="margin-top: 12px;">${item.title}</div><div class="card-copy">${item.copy}</div></button>`).join("")}
        </div>
      </section>
    `;
  }

  if (route.id === "mentor-profile") {
    const person = mentors.find((item) => item.id === route.ref) || mentors[0];
    return `
      <section class="route-stack">
        <article class="route-hero">
          <div class="route-layout">
            <div class="route-copy">
              <p class="eyebrow">Mentor profile</p>
              <h2>${person.name}</h2>
              <p>${person.role}</p>
            </div>
            <div class="route-visual" style="display:flex; align-items:center; justify-content:center;">${avatar(person.initials, person.tone)}</div>
          </div>
        </article>
        <article class="route-card">
          <div class="market-meta">${chip("Career")}${chip("Warm intros", "meta-chip ghost")}${chip("Video call", "meta-chip ghost")}</div>
          <div class="action-row"><button class="primary-button" type="button" data-sheet-type="mentor" data-sheet-id="${person.id}">Request intro</button></div>
        </article>
      </section>
    `;
  }

  if (route.id === "deal-detail") {
    const item = routeDeal(route.ref);
    return `
      <section class="route-stack">
        <article class="route-hero" ${styleVars(item)}>
          <div class="route-layout">
            <div class="route-copy">
              <p class="eyebrow">Offer detail</p>
              <h2>${item.title}</h2>
              <p>${item.copy || item.meta}</p>
            </div>
            <div class="route-visual">
              <div class="float-card"><strong>${item.value || item.price}</strong><span>${item.tag}</span></div>
              <div class="signal-card"><strong>${item.meta}</strong><span>Curated for the community</span></div>
            </div>
          </div>
        </article>
        <article class="route-card">
          <div class="market-meta">${chip(item.tag || "Curated")}${chip(item.meta, "meta-chip ghost")}</div>
          <div class="action-row"><button class="primary-button" type="button" data-route="redemption">Redeem</button><button class="secondary-button" type="button" data-sheet-type="deal" data-sheet-id="${item.id}">Save</button></div>
        </article>
      </section>
    `;
  }

  if (route.id === "job-board") {
    return `
      <section class="route-stack">
        ${jobs.map((item) => `<article class="job-card"><div class="row-between"><div class="card-icon" style="--tone:${item.tone};">${icons.jobs}</div>${chip(item.meta)}</div><div class="card-title" style="margin-top: 12px;">${item.title}</div><div class="card-copy">${item.copy}</div></article>`).join("")}
      </section>
    `;
  }

  if (route.id === "alumni-network") {
    return `
      <section class="route-stack">
        <article class="route-hero">
          <div class="route-layout">
            <div class="route-copy">
              <p class="eyebrow">People graph</p>
              <h2>Reconnect through shared context, not noise.</h2>
              <p>Lagos chapter</p>
            </div>
            <div class="route-visual">
              <div class="float-card"><strong>42</strong><span>relevant alumni nearby</span></div>
              <div class="signal-card"><strong>Lagos</strong><span>Most active chapter</span></div>
            </div>
          </div>
        </article>
        <div class="card-stack">
          ${connections.map((item) => `<button class="connection-card" type="button" data-sheet-type="connection" data-sheet-id="${item.id}">${avatar(item.initials, item.tone)}<div><div class="card-title">${item.name}</div><div class="card-copy">${item.meta}</div></div><div class="soft-button">${icon("arrow", "icon-holder")}</div></button>`).join("")}
        </div>
      </section>
    `;
  }

  if (route.id === "redemption") {
    return `
      <section class="route-stack">
        <article class="route-card">
          <p class="eyebrow">Rewards</p>
          <h3 class="section-title" style="margin-top: 8px;">Use your points beautifully</h3>
          <div class="card-stack" style="margin-top: 14px;">
            ${rewards.map((item) => `<button class="feature-card" type="button" style="--tone:${item.tone}; --tone-soft:${item.tone};" data-sheet-type="reward" data-sheet-id="${item.id}"><div class="media-top"><div class="media-value">${item.copy}</div><div class="media-badge"><strong>${item.title}</strong><span>Redeem instantly</span></div></div></button>`).join("")}
          </div>
        </article>
      </section>
    `;
  }

  if (route.id === "verification") {
    return `
      <section class="route-stack">
        <article class="route-card">
          <p class="eyebrow">Verification</p>
          <h3 class="section-title" style="margin-top: 8px;">Trusted and active</h3>
          <div class="card-stack" style="margin-top: 14px;">
            <div class="row-between"><strong>Identity</strong>${chip("Matched")}</div>
            <div class="row-between"><strong>Faculty and chapter tags</strong>${chip("Synced", "meta-chip ghost")}</div>
            <div class="row-between"><strong>Consent settings</strong>${chip("Saved", "meta-chip ghost")}</div>
          </div>
        </article>
      </section>
    `;
  }

  return `<div class="empty-state">This route is still being shaped.</div>`;
}

function sheetPayload(type, id) {
  if (type === "notifications") {
    return {
      title: "Notifications",
      body: `<div class="sheet-stack">${news.map((item) => `<article class="sheet-panel"><div class="feed-head"><strong>${item.title}</strong>${chip(item.tag)}</div><div class="card-copy">${item.copy}</div></article>`).join("")}</div>`,
    };
  }

  if (type === "prompt") {
    return {
      title: "Sources",
      body: `<div class="sheet-stack"><article class="sheet-panel"><strong>Matches</strong><div class="card-copy">Hostels, planner and network actions are ready.</div></article></div>`,
    };
  }

  if (type === "event") {
    const item = events.find((entry) => entry.id === id) || events[0];
    return {
      title: item.title,
      body: `<div class="sheet-stack"><article class="sheet-panel"><div class="feed-head">${chip(`${item.month} ${item.day}`, "badge gold")} ${chip(item.meta, "meta-chip ghost")}</div><div class="card-copy" style="margin-top:10px;">${item.copy}</div></article></div>`,
    };
  }

  if (type === "job") {
    const item = jobs.find((entry) => entry.id === id) || jobs[0];
    return {
      title: item.title,
      body: `<div class="sheet-stack"><article class="sheet-panel"><strong>${item.meta}</strong><div class="card-copy">${item.copy}</div></article></div>`,
    };
  }

  if (type === "mentor") {
    const item = mentors.find((entry) => entry.id === id) || mentors[0];
    return {
      title: `Request intro to ${item.name}`,
      body: `<div class="sheet-stack"><article class="sheet-panel"><strong>${item.role}</strong><div class="card-copy">Intro request</div></article><button class="primary-button" type="button">Send request</button></div>`,
    };
  }

  if (type === "reward") {
    const item = rewards.find((entry) => entry.id === id) || rewards[0];
    return {
      title: item.title,
      body: `<div class="sheet-stack"><article class="sheet-panel"><strong>${item.copy}</strong><div class="card-copy">Partner code ready</div></article><button class="primary-button" type="button">Confirm</button></div>`,
    };
  }

  if (type === "connection") {
    const item = connections.find((entry) => entry.id === id) || connections[0];
    return {
      title: item.name,
      body: `<div class="sheet-stack"><article class="sheet-panel"><strong>${item.meta}</strong><div class="card-copy">${item.name}</div></article><button class="primary-button" type="button">Request connection</button></div>`,
    };
  }

  return {
    title: "Saved",
    body: `<div class="sheet-stack"><article class="sheet-panel"><strong>Saved</strong><div class="card-copy">Added to shortlist</div></article></div>`,
  };
}

function renderMain() {
  if (state.phase === "onboarding") {
    root.main.innerHTML = renderOnboarding();
    return;
  }

  if (state.route) {
    root.main.innerHTML = renderRoute();
    return;
  }

  const renderers = {
    home: renderHome,
    explore: renderExplore,
    ai: renderAI,
    community: renderCommunity,
    wallet: renderWallet,
  };

  root.main.innerHTML = renderers[state.tab]();
}

function render() {
  renderHeader();
  renderTabs();
  renderMain();
}

function openSheet(payload) {
  root.sheetTitle.textContent = payload.title;
  root.sheetBody.innerHTML = payload.body;
  root.sheet.classList.remove("hidden");
  root.sheet.setAttribute("aria-hidden", "false");
}

function closeSheet() {
  root.sheet.classList.add("hidden");
  root.sheet.setAttribute("aria-hidden", "true");
}

function nextOnboarding() {
  if (state.onboardingStep < onboarding.length - 1) {
    state.onboardingStep += 1;
  } else {
    state.phase = "app";
  }
  render();
}

function prevOnboarding() {
  state.onboardingStep = Math.max(0, state.onboardingStep - 1);
  render();
}

document.addEventListener("click", (event) => {
  const roleButton = event.target.closest("[data-role]");
  if (roleButton) {
    state.role = roleButton.dataset.role;
    render();
    return;
  }

  const nextButton = event.target.closest("[data-next-onboarding]");
  if (nextButton) {
    nextOnboarding();
    return;
  }

  const prevButton = event.target.closest("[data-prev-onboarding]");
  if (prevButton) {
    prevOnboarding();
    return;
  }

  const skipButton = event.target.closest("[data-skip-onboarding]");
  if (skipButton) {
    state.phase = "app";
    render();
    return;
  }

  const tabButton = event.target.closest("[data-tab]");
  if (tabButton) {
    state.tab = tabButton.dataset.tab;
    state.route = null;
    render();
    return;
  }

  const jumpButton = event.target.closest("[data-tab-jump]");
  if (jumpButton) {
    state.tab = jumpButton.dataset.tabJump;
    state.route = null;
    render();
    return;
  }

  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) {
    state.category = categoryButton.dataset.category;
    render();
    return;
  }

  const promptButton = event.target.closest("[data-prompt]");
  if (promptButton) {
    state.prompt = promptButton.dataset.prompt;
    render();
    return;
  }

  const routeButton = event.target.closest("[data-route]");
  if (routeButton) {
    state.route = { id: routeButton.dataset.route, ref: routeButton.dataset.routeId || null };
    render();
    return;
  }

  const backButton = event.target.closest("[data-back]");
  if (backButton) {
    state.route = null;
    render();
    return;
  }

  const notificationsButton = event.target.closest("[data-notifications]");
  if (notificationsButton) {
    openSheet(sheetPayload("notifications", "all"));
    return;
  }

  const sheetButton = event.target.closest("[data-sheet-type]");
  if (sheetButton) {
    openSheet(sheetPayload(sheetButton.dataset.sheetType, sheetButton.dataset.sheetId));
    return;
  }

  const closeButton = event.target.closest("[data-close-sheet]");
  if (closeButton) {
    closeSheet();
  }
});

root.sheetCloseIcon.innerHTML = icons.close;
render();











