const state = {
  phase: "onboarding",
  onboardingStep: 0,
  role: "student",
  tab: "home",
  route: null,
  sheet: null,
  category: "all",
  prompt: "housing",
};

const tabs = [
  { id: "home", label: "Home", icon: "H" },
  { id: "explore", label: "Explore", icon: "X" },
  { id: "ai", label: "Zik AI", icon: "AI" },
  { id: "community", label: "People", icon: "P" },
  { id: "wallet", label: "Wallet", icon: "W" },
];

const onboarding = [
  {
    id: "welcome",
    eyebrow: "UNIZIK community hub",
    title: "One app for campus life, alumni value and everyday support.",
    body:
      "Varsity AI brings together trusted campus information, practical student services, alumni connection, offers, rewards and a local AI concierge.",
    action: "See how it works",
  },
  {
    id: "role",
    eyebrow: "Personalized from day one",
    title: "Student and alumni journeys share one product, but not one generic experience.",
    body:
      "The app adapts the content mix, actions and commerce moments based on where someone is in the university relationship.",
    action: "Choose your role",
  },
  {
    id: "verify",
    eyebrow: "Trust layer",
    title: "Verification keeps the hub useful, safe and worth opening weekly.",
    body:
      "Members can unlock identity-based deals, chapter access, campus services and partner offers after a lightweight verification setup.",
    action: "Enter app",
  },
];

const roles = {
  student: {
    label: "Student mode",
    title: "Welcome back, Adaeze",
    subtitle: "You have classes at 11:00, 3 saved offers and a hostel shortlist waiting.",
    walletTitle: "Campus rewards wallet",
    persona: "300 level | Engineering | Verified student",
    homeHero: ["Timetable support", "Hostel search", "Affordable food", "Career launch"],
  },
  alumni: {
    label: "Alumni mode",
    title: "Welcome back, Chinedu",
    subtitle: "Your chapter mixer is on Friday, 2 mentees requested intros and 4 new businesses joined.",
    walletTitle: "Alumni member wallet",
    persona: "Class of 2016 | Lagos chapter | Verified alumni",
    homeHero: ["Mentorship", "Deals near you", "Events and giving", "Business discovery"],
  },
};

const quickActions = [
  { id: "accommodation", title: "Find hostel", body: "Compare trusted listings near campus.", route: "accommodation" },
  { id: "ai", title: "Ask Zik AI", body: "Get grounded answers and next actions.", tab: "ai" },
  { id: "map", title: "Campus map", body: "Find faculties, health services and key points.", route: "campus-map" },
  { id: "planner", title: "Study planner", body: "Organize classes, deadlines and focus blocks.", route: "study-planner" },
];

const featuredDeals = [
  {
    id: "deal-hostel",
    title: "Green Court hostel offer",
    subtitle: "Ifite road | 8 mins from campus | utilities included",
    badge: "Verified housing",
    meta: "Save 12% on annual booking",
    price: "N420,000 per session",
  },
  {
    id: "deal-food",
    title: "Campus meal pass",
    subtitle: "5 weekday lunches from partner kitchens",
    badge: "Student essential",
    meta: "Earn 180 reward points",
    price: "N9,500 weekly",
  },
  {
    id: "deal-data",
    title: "Learning data bundle",
    subtitle: "Study-friendly MTN plan for research and classes",
    badge: "Popular this week",
    meta: "1.8GB extra on first activation",
    price: "N3,200 monthly",
  },
];

const marketplaceDeals = [
  { id: "deal-hostel", category: "housing", title: "Green Court hostel offer", subtitle: "Female wing, generator, borehole, shuttle stop nearby", badge: "Trusted", meta: "52 rooms left", price: "N420,000 / session" },
  { id: "deal-lodge", category: "housing", title: "Hillview lodge", subtitle: "Premium self-contained space with study area", badge: "Premium", meta: "Ifite", price: "N610,000 / session" },
  { id: "deal-food", category: "food", title: "Campus meal pass", subtitle: "Lunch bundles from partner kitchens", badge: "Popular", meta: "5 options", price: "N9,500 / week" },
  { id: "deal-cafe", category: "food", title: "Library cafe breakfast", subtitle: "Coffee, sandwich and data corner package", badge: "Morning pick", meta: "Main campus", price: "N2,200 / pack" },
  { id: "deal-jobkit", category: "career", title: "CV review + interview prep", subtitle: "Run by verified alumni recruiters", badge: "Career", meta: "24 mentor slots", price: "N6,000 / session" },
  { id: "deal-business", category: "business", title: "Alumni business showcase", subtitle: "Weekly placement in the discovery feed", badge: "Growth", meta: "Seen by chapters", price: "N18,000 / week" },
];

const prompts = {
  housing: {
    title: "Find a safe hostel near Engineering with flexible payment.",
    reply:
      "I found three verified options near the faculty corridor. Green Court is the best value, Hillview is the most premium and Cedar Annex offers monthly payment support.",
    sources: ["Verified housing partners", "UNIZIK location map", "Student reviews"],
    action: "Open accommodation search",
    route: "accommodation",
  },
  timetable: {
    title: "Help me organize my classes and reading for this week.",
    reply:
      "I grouped your timetable into three focus windows, added a two-hour reading block before Thursday labs and suggested a low-cost lunch option near your afternoon class route.",
    sources: ["Study planner", "Campus timetable", "Marketplace food partners"],
    action: "Open study planner",
    route: "study-planner",
  },
  network: {
    title: "Who can help me connect with media alumni in Lagos?",
    reply:
      "Three alumni mentors match your interest. I recommend Ijeoma Okafor for media growth, Tobe Nnadi for product marketing and the Lagos chapter mixer this Friday for warm introductions.",
    sources: ["Mentor directory", "Chapter events", "Alumni profiles"],
    action: "Open alumni network",
    route: "alumni-network",
  },
};

const events = [
  { id: "event-mixer", title: "Founder mixer", subtitle: "Startup alumni, final-year builders and partner brands", meta: "Friday 18:00 | Awka civic lounge", badge: "Featured" },
  { id: "event-health", title: "Health campus career evening", subtitle: "Nnewi-focused mentorship and internship roundtable", meta: "Tuesday 17:30 | Health sciences", badge: "Career" },
  { id: "event-fair", title: "Community market day", subtitle: "Offers, businesses and local creators across the hub", meta: "Saturday 10:00 | Main campus green", badge: "Commerce" },
];

const mentors = [
  { id: "mentor-ifeoma", title: "Ifeoma Eze", subtitle: "Growth lead at a fintech | Class of 2018", meta: "Mentors product and business students", badge: "Available" },
  { id: "mentor-uche", title: "Uche Madu", subtitle: "Medical entrepreneur | Lagos chapter", meta: "Supports health and startup pathways", badge: "2 open slots" },
];

const jobs = [
  { id: "job-growth", title: "Graduate growth analyst", subtitle: "Lagos hybrid | Alumni-founded startup", meta: "Apply by March 28" },
  { id: "job-content", title: "Community content intern", subtitle: "Awka | Flexible student schedule", meta: "Paid internship" },
];

const news = [
  { id: "news-hack", title: "Innovation lab opens maker sprint applications", body: "Students across engineering, arts and business can apply for a 6-week prototype sprint backed by alumni mentors.", badge: "Campus update" },
  { id: "news-agreement", title: "Support desk updates academic service turnaround", body: "Verification-linked requests now route faster across fees, documentation and official announcements in the hub.", badge: "Service news" },
];

const connections = [
  { id: "conn-1", name: "Adaora Nkem", context: "Law | Abuja chapter | Wants to mentor final-year students" },
  { id: "conn-2", name: "Tobe Nnadi", context: "Media product | Lagos chapter | Open to coffee chats" },
  { id: "conn-3", name: "Chisom Obi", context: "Architecture | Awka chapter | Hiring junior creatives" },
];

const notifications = [
  { title: "Hostel shortlist updated", body: "Green Court added a new flexible payment option." },
  { title: "Mentor accepted", body: "Ifeoma Eze accepted your intro request for next Wednesday." },
  { title: "Reward unlocked", body: "You earned 180 points from the meal pass save." },
];

const root = {
  header: document.getElementById("app-header"),
  main: document.getElementById("app-main"),
  tabs: document.getElementById("tab-bar"),
  sheet: document.getElementById("sheet-overlay"),
  sheetTitle: document.getElementById("sheet-title"),
  sheetBody: document.getElementById("sheet-body"),
};

function role() {
  return roles[state.role];
}

function titleForTab(tab) {
  return tabs.find((item) => item.id === tab)?.label || "App";
}

function detailById(collection, id) {
  return collection.find((item) => item.id === id);
}

function openSheet(title, body) {
  state.sheet = { title, body };
  root.sheetTitle.textContent = title;
  root.sheetBody.innerHTML = body;
  root.sheet.classList.remove("hidden");
  root.sheet.setAttribute("aria-hidden", "false");
}

function closeSheet() {
  state.sheet = null;
  root.sheet.classList.add("hidden");
  root.sheet.setAttribute("aria-hidden", "true");
}

function routeMeta(route) {
  const meta = {
    accommodation: { title: "Accommodation", subtitle: "Compare trusted student housing" },
    "campus-map": { title: "Campus map", subtitle: "Navigate the university faster" },
    "study-planner": { title: "Study planner", subtitle: "Build a lighter week" },
    "event-calendar": { title: "Events", subtitle: "Community and chapter calendar" },
    "mentor-profile": { title: "Mentor profile", subtitle: "High-trust alumni connection" },
    "deal-detail": { title: "Offer detail", subtitle: "Partner commerce flow" },
    "job-board": { title: "Jobs", subtitle: "Career and business opportunities" },
    "news-feed": { title: "News feed", subtitle: "Important updates and stories" },
    "alumni-network": { title: "Alumni network", subtitle: "Context-aware reconnection" },
    redemption: { title: "Redemption", subtitle: "Use your points" },
    verification: { title: "Verification", subtitle: "Identity, status and trust" },
  };
  return meta[route.id] || { title: titleForTab(state.tab), subtitle: role().label };
}

function renderHeader() {
  if (state.phase === "onboarding") {
    root.header.innerHTML = `
      <div class="header-row">
        <div class="header-copy">
          <p class="eyebrow">Varsity AI</p>
          <h2>UNIZIK community hub</h2>
          <p>App prototype</p>
        </div>
        <button class="icon-button" type="button" data-skip-onboarding="true">></button>
      </div>
    `;
    return;
  }

  if (state.route) {
    root.header.innerHTML = `
      <div class="header-row">
        <button class="back-button" type="button" data-back="true"><</button>
        <div class="header-copy" style="flex: 1;">
          <p class="eyebrow">${role().label}</p>
          <h2>${routeMeta(state.route).title}</h2>
          <p>${routeMeta(state.route).subtitle}</p>
        </div>
        <button class="icon-button" type="button" data-notifications="true">3</button>
      </div>
    `;
    return;
  }

  root.header.innerHTML = `
    <div class="header-row">
      <div class="header-copy">
        <p class="eyebrow">${role().label}</p>
        <h2>${role().title}</h2>
        <p>${role().subtitle}</p>
      </div>
      <button class="icon-button" type="button" data-notifications="true">3</button>
    </div>
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
          <span>${tab.icon}</span>
          <span>${tab.label}</span>
        </button>
      `
    )
    .join("");
}

function renderOnboarding() {
  const step = onboarding[state.onboardingStep];
  const isRoleStep = step.id === "role";
  const isFinal = state.onboardingStep === onboarding.length - 1;

  return `
    <section class="onboarding-stack">
      <article class="onboarding-card">
        <p class="eyebrow">${step.eyebrow}</p>
        <h2 class="section-title" style="font-size: 1.35rem; margin-top: 8px;">${step.title}</h2>
        <p>${step.body}</p>
        <div class="onboarding-visual">
          <div class="visual-rings"></div>
          <div class="visual-stack"></div>
          <div class="visual-dots">${new Array(12).fill("").map(() => "<span></span>").join("")}</div>
        </div>
      </article>

      ${
        isRoleStep
          ? `<div class="role-grid">
              <button class="role-option ${state.role === "student" ? "active" : ""}" type="button" data-role="student">
                <strong>Student</strong>
                <span>Campus support, accommodation, study tools, deals and early-career pathways.</span>
              </button>
              <button class="role-option ${state.role === "alumni" ? "active" : ""}" type="button" data-role="alumni">
                <strong>Alumni</strong>
                <span>Mentorship, events, business discovery, chapter activity and giving opportunities.</span>
              </button>
            </div>`
          : ""
      }

      ${
        isFinal
          ? `<article class="section-card">
              <div class="inline-head">
                <div>
                  <p class="eyebrow">Verification setup</p>
                  <h3 class="section-title">Ready to unlock the hub</h3>
                </div>
                <span class="badge gold">Required</span>
              </div>
              <div class="list-lines" style="margin-top: 14px;">
                <div class="list-line"><strong>Identity</strong><span>Student number or alumni record confirmed.</span></div>
                <div class="list-line"><strong>Consent</strong><span>Commercial preferences and community privacy controls saved.</span></div>
                <div class="list-line"><strong>Access</strong><span>Verified deals, chapters, mentors and wallet benefits activated.</span></div>
              </div>
            </article>`
          : ""
      }

      <div class="onboarding-actions">
        ${state.onboardingStep > 0 ? `<button class="secondary-button" type="button" data-prev-onboarding="true">Back</button>` : ""}
        <button class="primary-button" type="button" data-next-onboarding="true">${step.action}</button>
      </div>
    </section>
  `;
}

function renderHome() {
  return `
    <section class="screen-stack">
      <article class="hero-card">
        <p class="eyebrow">This week</p>
        <h2>${state.role === "student" ? "Useful campus help, not just announcements." : "Reconnect, discover and get practical value."}</h2>
        <p>${state.role === "student" ? "Your home feed blends timetable support, affordable offers, verified services and the people or places you actually need this week." : "Your home feed surfaces chapter energy, curated opportunities, alumni businesses, mentor pathways and commercial value designed for trusted community members."}</p>
        <div class="hero-chip-row" style="margin-top: 16px;">${role().homeHero.map((item) => `<span class="hero-chip">${item}</span>`).join("")}</div>
      </article>

      <section>
        <div class="section-head">
          <h3 class="section-title">Quick actions</h3>
          <button class="mini-link" type="button" data-route="news-feed">View news</button>
        </div>
        <div class="quick-actions" style="margin-top: 12px;">
          ${quickActions
            .map(
              (item) => `
                <button class="quick-card" type="button" ${item.route ? `data-route="${item.route}"` : `data-tab-jump="${item.tab}"`}>
                  <strong>${item.title}</strong>
                  <span>${item.body}</span>
                </button>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="section-card">
        <div class="section-head">
          <div>
            <p class="eyebrow">Curated for you</p>
            <h3 class="section-title">Featured offers</h3>
          </div>
          <button class="mini-link" type="button" data-tab="explore">Open market</button>
        </div>
        <div class="cards-column" style="margin-top: 14px;">
          ${featuredDeals
            .map(
              (deal) => `
                <button class="deal-card" type="button" data-route="deal-detail" data-route-id="${deal.id}">
                  <div class="card-topline">
                    <span class="badge ${deal.badge.toLowerCase().includes("verified") ? "gold" : ""}">${deal.badge}</span>
                    <span class="kicker">${deal.meta}</span>
                  </div>
                  <h3 style="margin-top: 12px;">${deal.title}</h3>
                  <span>${deal.subtitle}</span>
                  <div class="price-pill">${deal.price}</div>
                </button>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="section-card">
        <div class="section-head">
          <div>
            <p class="eyebrow">Community pulse</p>
            <h3 class="section-title">Upcoming events</h3>
          </div>
          <button class="mini-link" type="button" data-route="event-calendar">Calendar</button>
        </div>
        <div class="cards-column" style="margin-top: 14px;">
          ${events
            .map(
              (event) => `
                <button class="event-card" type="button" data-sheet-type="event" data-sheet-id="${event.id}">
                  <div class="badge-row">
                    <span class="badge">${event.badge}</span>
                    <span class="kicker">${event.meta}</span>
                  </div>
                  <h3 style="margin-top: 12px;">${event.title}</h3>
                  <span>${event.subtitle}</span>
                </button>
              `
            )
            .join("")}
        </div>
      </section>
    </section>
  `;
}

function renderExplore() {
  const visibleDeals = state.category === "all" ? marketplaceDeals : marketplaceDeals.filter((deal) => deal.category === state.category);
  const categories = ["all", "housing", "food", "career", "business"];

  return `
    <section class="screen-stack">
      <div class="search-shell">
        <span>Search</span>
        <input type="text" value="Hostels, food, jobs, businesses" readonly />
      </div>
      <div class="filter-row">
        ${categories
          .map(
            (category) => `
              <button class="filter-chip ${state.category === category ? "active" : ""}" type="button" data-category="${category}">${category === "all" ? "All" : category}</button>
            `
          )
          .join("")}
      </div>
      <section class="section-card">
        <div class="section-head">
          <div>
            <p class="eyebrow">Marketplace</p>
            <h3 class="section-title">Practical community value</h3>
          </div>
          <span class="badge gold">${visibleDeals.length} results</span>
        </div>
        <div class="cards-column" style="margin-top: 14px;">
          ${visibleDeals
            .map(
              (deal) => `
                <button class="deal-card" type="button" data-route="deal-detail" data-route-id="${deal.id}">
                  <div class="badge-row">
                    <span class="badge ${deal.badge === "Trusted" ? "gold" : ""}">${deal.badge}</span>
                    <span class="kicker">${deal.meta}</span>
                  </div>
                  <h3 style="margin-top: 12px;">${deal.title}</h3>
                  <span>${deal.subtitle}</span>
                  <div class="price-pill">${deal.price}</div>
                </button>
              `
            )
            .join("")}
        </div>
      </section>
    </section>
  `;
}

function renderAI() {
  const prompt = prompts[state.prompt];

  return `
    <section class="screen-stack">
      <article class="section-card">
        <div class="inline-head">
          <div>
            <p class="eyebrow">Zik AI concierge</p>
            <h3 class="section-title">Ask naturally, move quickly</h3>
          </div>
          <span class="badge gold">Source-aware</span>
        </div>
        <div class="ai-chat" style="margin-top: 14px;">
          <div class="chat-bubble user">${prompt.title}</div>
          <div class="chat-bubble assistant">
            ${prompt.reply}
            <span>Sources: ${prompt.sources.join(" | ")}</span>
          </div>
        </div>
      </article>

      <div class="quick-chips">
        ${Object.entries(prompts)
          .map(
            ([key, item]) => `
              <button class="saved-chip ${state.prompt === key ? "active" : ""}" type="button" data-prompt="${key}">${item.action}</button>
            `
          )
          .join("")}
      </div>

      <article class="ai-response">
        <strong>${prompt.action}</strong>
        <span>Each answer leads into an actual product flow, instead of stopping at a text response.</span>
        <div class="onboarding-actions" style="margin-top: 14px;">
          <button class="primary-button" type="button" data-route="${prompt.route}">Open action</button>
          <button class="secondary-button" type="button" data-sheet-type="prompt" data-sheet-id="${state.prompt}">Why this matters</button>
        </div>
      </article>
    </section>
  `;
}

function renderCommunity() {
  return `
    <section class="screen-stack">
      <article class="section-card">
        <div class="section-head">
          <div>
            <p class="eyebrow">Network</p>
            <h3 class="section-title">Mentors, chapters and warm intros</h3>
          </div>
          <button class="mini-link" type="button" data-route="alumni-network">Open</button>
        </div>
        <div class="cards-column" style="margin-top: 14px;">
          ${mentors
            .map(
              (mentor) => `
                <button class="person-card" type="button" data-route="mentor-profile" data-route-id="${mentor.id}">
                  <div class="badge-row">
                    <span class="badge gold">${mentor.badge}</span>
                    <span class="kicker">${mentor.meta}</span>
                  </div>
                  <h3 style="margin-top: 12px;">${mentor.title}</h3>
                  <span>${mentor.subtitle}</span>
                </button>
              `
            )
            .join("")}
        </div>
      </article>

      <article class="section-card">
        <div class="section-head">
          <div>
            <p class="eyebrow">Opportunity layer</p>
            <h3 class="section-title">Jobs and alumni business</h3>
          </div>
          <button class="mini-link" type="button" data-route="job-board">Board</button>
        </div>
        <div class="cards-column" style="margin-top: 14px;">
          ${jobs
            .map(
              (job) => `
                <button class="feed-card" type="button" data-sheet-type="job" data-sheet-id="${job.id}">
                  <strong>${job.title}</strong>
                  <span>${job.subtitle}</span>
                  <div class="price-pill">${job.meta}</div>
                </button>
              `
            )
            .join("")}
          <button class="feed-card" type="button" data-route="deal-detail" data-route-id="deal-business">
            <strong>Alumni business showcase</strong>
            <span>Promoted listings, chapter visibility and trusted discovery.</span>
            <div class="price-pill">Commercial flow</div>
          </button>
        </div>
      </article>
    </section>
  `;
}

function renderWallet() {
  return `
    <section class="screen-stack">
      <article class="wallet-card">
        <p class="eyebrow">${role().walletTitle}</p>
        <h2>${role().persona}</h2>
        <div class="wallet-balance">2,540 pts</div>
        <p>Rewards from saves, bookings, referrals, events and community participation.</p>
        <div class="reward-grid" style="margin-top: 14px;">
          <button class="reward-option" type="button" data-route="redemption">
            <strong>Redeem now</strong>
            <span>Use points on meal passes, events and partner bundles.</span>
          </button>
          <button class="reward-option" type="button" data-route="verification">
            <strong>Verification</strong>
            <span>Manage access, status and trust controls.</span>
          </button>
        </div>
      </article>

      <article class="section-card">
        <div class="section-head">
          <div>
            <p class="eyebrow">Saved</p>
            <h3 class="section-title">Your shortlist</h3>
          </div>
          <button class="mini-link" type="button" data-tab="explore">Browse more</button>
        </div>
        <div class="saved-row" style="margin-top: 12px;">
          <button class="saved-chip active" type="button" data-route="deal-detail" data-route-id="deal-hostel">Hostel</button>
          <button class="saved-chip" type="button" data-route="mentor-profile" data-route-id="mentor-ifeoma">Mentor</button>
          <button class="saved-chip" type="button" data-route="event-calendar">Events</button>
          <button class="saved-chip" type="button" data-route="job-board">Jobs</button>
        </div>
      </article>

      <article class="section-card">
        <div class="section-head">
          <div>
            <p class="eyebrow">Profile</p>
            <h3 class="section-title">Mode and preferences</h3>
          </div>
        </div>
        <div class="segmented" style="margin-top: 14px;">
          <button class="${state.role === "student" ? "active" : ""}" type="button" data-role="student">Student</button>
          <button class="${state.role === "alumni" ? "active" : ""}" type="button" data-role="alumni">Alumni</button>
        </div>
        <div class="settings-list" style="margin-top: 14px;">
          <button class="setting-row" type="button" data-sheet-type="settings" data-sheet-id="privacy"><strong>Privacy and consent</strong><span>Commercial controls, notifications, visibility</span></button>
          <button class="setting-row" type="button" data-sheet-type="settings" data-sheet-id="identity"><strong>Identity and faculty tags</strong><span>Verification, chapter links, trust state</span></button>
          <button class="setting-row" type="button" data-sheet-type="settings" data-sheet-id="support"><strong>Support center</strong><span>Payments, verification help, partner support</span></button>
        </div>
      </article>
    </section>
  `;
}

function renderRoute() {
  const route = state.route;
  if (!route) return "";

  if (route.id === "accommodation") {
    return `
      <section class="route-stack">
        <article class="route-hero">
          <p class="eyebrow">Verified student housing</p>
          <h2>Find a place that fits your budget, route and comfort level.</h2>
          <p>The demo combines partner listings, trust signals, map context and student-friendly payment structures.</p>
        </article>
        <div class="inline-search"><span>Near</span><input type="text" value="Engineering faculty, transport route, water, power" readonly /></div>
        <div class="filter-row">
          <button class="filter-chip active" type="button">Women only</button>
          <button class="filter-chip" type="button">Flexible payment</button>
          <button class="filter-chip" type="button">Verified review</button>
        </div>
        <div class="cards-column">
          ${marketplaceDeals
            .filter((deal) => deal.category === "housing")
            .map(
              (deal) => `
                <button class="deal-card" type="button" data-route="deal-detail" data-route-id="${deal.id}">
                  <strong>${deal.title}</strong>
                  <span>${deal.subtitle}</span>
                  <div class="badge-row" style="margin-top: 12px;"><span class="badge gold">${deal.badge}</span><span class="kicker">${deal.meta}</span></div>
                  <div class="price-pill">${deal.price}</div>
                </button>
              `
            )
            .join("")}
        </div>
      </section>
    `;
  }

  if (route.id === "campus-map") {
    return `
      <section class="route-stack">
        <article class="map-card">
          <p class="eyebrow">Main campus</p>
          <h3 class="section-title" style="margin-top: 8px;">Essential places in one view</h3>
          <p>Quick access to faculties, health services, event spaces, partner offers and student help points.</p>
          <div class="map-grid" style="margin-top: 16px;">
            <div class="map-line" style="left: 12%; top: 20%; width: 68%; height: 12px;"></div>
            <div class="map-line" style="left: 30%; top: 44%; width: 12px; height: 44%;"></div>
            <div class="map-line" style="left: 20%; top: 62%; width: 56%; height: 12px;"></div>
            <div class="map-pin" style="left: 20%; top: 18%;"></div>
            <div class="map-pin" style="left: 62%; top: 26%;"></div>
            <div class="map-pin" style="left: 48%; top: 58%;"></div>
            <div class="map-pin" style="left: 72%; top: 66%;"></div>
          </div>
        </article>
        <article class="section-card">
          <div class="connection-list">
            <div class="connection-row"><strong>Engineering corridor</strong><span>Closest food and hostel offers nearby</span></div>
            <div class="connection-row"><strong>Student support desk</strong><span>Verification and documentation help</span></div>
            <div class="connection-row"><strong>Community green</strong><span>Saturday market day and mixer events</span></div>
          </div>
        </article>
      </section>
    `;
  }

  if (route.id === "study-planner") {
    return `
      <section class="route-stack">
        <article class="route-card">
          <p class="eyebrow">This week</p>
          <h3 class="section-title" style="margin-top: 8px;">Balanced around your class load</h3>
          <div class="week-strip" style="margin-top: 16px;">
            <span class="week-pill active">Mon</span>
            <span class="week-pill">Tue</span>
            <span class="week-pill">Wed</span>
            <span class="week-pill">Thu</span>
            <span class="week-pill">Fri</span>
          </div>
          <div class="list-lines" style="margin-top: 14px;">
            <div class="list-line"><strong>08:00 - 10:00</strong><span>Deep work block for Mechanics.</span></div>
            <div class="list-line"><strong>11:00 - 13:00</strong><span>Faculty classes and campus movement window.</span></div>
            <div class="list-line"><strong>17:00 - 18:00</strong><span>Review lab notes with AI-generated prompts.</span></div>
          </div>
        </article>
        <article class="route-card">
          <strong>Weekly progress</strong>
          <span>Three of four major deadlines already broken into manageable sessions.</span>
          <div class="progress-bar" style="margin-top: 14px;"><div class="progress-fill" style="width: 76%;"></div></div>
        </article>
      </section>
    `;
  }

  if (route.id === "event-calendar") {
    return `
      <section class="route-stack">
        <article class="calendar-card">
          <p class="eyebrow">March</p>
          <h3 class="section-title" style="margin-top: 8px;">Community calendar</h3>
          <div class="calendar-grid" style="margin-top: 16px;">
            ${Array.from({ length: 28 }, (_, i) => `<div class="day-cell ${[8, 14, 21, 26].includes(i + 1) ? "marked" : ""}">${i + 1}</div>`).join("")}
          </div>
        </article>
        <article class="section-card">
          <div class="cards-column">
            ${events.map((event) => `<button class="event-card" type="button" data-sheet-type="event" data-sheet-id="${event.id}"><strong>${event.title}</strong><span>${event.subtitle}</span><div class="price-pill">${event.meta}</div></button>`).join("")}
          </div>
        </article>
      </section>
    `;
  }

  if (route.id === "mentor-profile") {
    const mentor = detailById(mentors, route.ref) || mentors[0];
    return `
      <section class="route-stack">
        <article class="route-hero">
          <p class="eyebrow">Mentor</p>
          <h2>${mentor.title}</h2>
          <p>${mentor.subtitle}. ${mentor.meta}.</p>
        </article>
        <article class="route-card">
          <strong>What they can help with</strong>
          <span>Career transitions, interview prep, product thinking, networking and realistic growth advice.</span>
          <div class="tag-row" style="margin-top: 14px;"><span class="tag">Career</span><span class="tag">Mentorship</span><span class="tag">Warm intro</span></div>
        </article>
        <article class="route-card">
          <strong>Availability</strong>
          <span>Two 30-minute slots open next week. First conversation requests are routed through the hub.</span>
          <div class="onboarding-actions" style="margin-top: 14px;"><button class="primary-button" type="button" data-sheet-type="mentor" data-sheet-id="${mentor.id}">Request intro</button></div>
        </article>
      </section>
    `;
  }

  if (route.id === "deal-detail") {
    const deal = detailById([...featuredDeals, ...marketplaceDeals], route.ref) || featuredDeals[0];
    return `
      <section class="route-stack">
        <article class="route-hero">
          <p class="eyebrow">Partner offer</p>
          <h2>${deal.title}</h2>
          <p>${deal.subtitle}</p>
          <div class="hero-chip-row" style="margin-top: 16px;"><span class="hero-chip">${deal.badge || "Curated"}</span><span class="hero-chip">${deal.meta || "Community value"}</span></div>
        </article>
        <article class="route-card">
          <strong>Why it fits the hub</strong>
          <span>The university gets a commercial participation model, members get negotiated value and partners get trusted access to a defined community segment.</span>
          <div class="price-pill">${deal.price || "See offer"}</div>
        </article>
        <article class="route-card">
          <strong>Redemption path</strong>
          <span>Members can save, redeem, contact the partner or unlock the offer with wallet points and verified status.</span>
          <div class="onboarding-actions" style="margin-top: 14px;"><button class="primary-button" type="button" data-route="redemption">Redeem</button><button class="secondary-button" type="button" data-sheet-type="deal" data-sheet-id="${deal.id}">Save detail</button></div>
        </article>
      </section>
    `;
  }

  if (route.id === "job-board") {
    return `
      <section class="route-stack">
        <article class="route-card">
          <p class="eyebrow">Career board</p>
          <h3 class="section-title" style="margin-top: 8px;">Verified opportunities from the community</h3>
          <div class="cards-column" style="margin-top: 14px;">
            ${jobs.map((job) => `<button class="feed-card" type="button" data-sheet-type="job" data-sheet-id="${job.id}"><strong>${job.title}</strong><span>${job.subtitle}</span><div class="price-pill">${job.meta}</div></button>`).join("")}
          </div>
        </article>
      </section>
    `;
  }

  if (route.id === "news-feed") {
    return `
      <section class="route-stack">
        ${news.map((item) => `<article class="feed-card"><div class="badge-row"><span class="badge gold">${item.badge}</span></div><h3 style="margin-top: 12px;">${item.title}</h3><p>${item.body}</p></article>`).join("")}
      </section>
    `;
  }

  if (route.id === "alumni-network") {
    return `
      <section class="route-stack">
        <article class="route-hero">
          <p class="eyebrow">People graph</p>
          <h2>Reconnect through shared context, not noise.</h2>
          <p>Filter by faculty, city, graduating class, industry and chapter activity to get introductions that feel useful.</p>
        </article>
        <article class="section-card">
          <div class="connection-list">
            ${connections.map((item) => `<button class="connection-row" type="button" data-sheet-type="connection" data-sheet-id="${item.id}"><strong>${item.name}</strong><span>${item.context}</span></button>`).join("")}
          </div>
        </article>
      </section>
    `;
  }

  if (route.id === "redemption") {
    return `
      <section class="route-stack">
        <article class="route-card">
          <p class="eyebrow">Redeem rewards</p>
          <h3 class="section-title" style="margin-top: 8px;">2,540 points available</h3>
          <div class="cards-column" style="margin-top: 14px;">
            <button class="reward-card" type="button" data-sheet-type="reward" data-sheet-id="meal"><strong>Meal pass discount</strong><span>Use 800 points to reduce your weekly lunch bundle.</span></button>
            <button class="reward-card" type="button" data-sheet-type="reward" data-sheet-id="event"><strong>Event access upgrade</strong><span>Use 1,200 points for premium seating and networking access.</span></button>
            <button class="reward-card" type="button" data-sheet-type="reward" data-sheet-id="data"><strong>Study data top-up</strong><span>Use 650 points for a learning data bonus.</span></button>
          </div>
        </article>
      </section>
    `;
  }

  if (route.id === "verification") {
    return `
      <section class="route-stack">
        <article class="route-card">
          <p class="eyebrow">Verification state</p>
          <h3 class="section-title" style="margin-top: 8px;">Verified and active</h3>
          <div class="checklist" style="margin-top: 14px;">
            <div class="list-line"><strong>Identity matched</strong><span>Student or alumni record confirmed.</span></div>
            <div class="list-line"><strong>Faculty and chapter tags</strong><span>Used for relevance and trust controls.</span></div>
            <div class="list-line"><strong>Consent saved</strong><span>Commercial, privacy and notification settings available.</span></div>
          </div>
        </article>
      </section>
    `;
  }

  return `<div class="empty-state">This route is still being shaped.</div>`;
}

function sheetPayload(type, id) {
  if (type === "prompt") {
    return {
      title: "Why AI is central",
      body: `<article class="section-card"><strong>Actionable AI</strong><span>The assistant is designed to bridge into real product flows like housing, planning, mentors and marketplace actions instead of acting like a standalone chat novelty.</span></article>`,
    };
  }

  if (type === "event") {
    const event = detailById(events, id);
    return {
      title: event.title,
      body: `<article class="section-card"><strong>${event.subtitle}</strong><span>${event.meta}</span></article><article class="section-card"><strong>Why attend</strong><span>This event connects community, commerce and belonging in one touchpoint, which is core to the hub model.</span></article>`,
    };
  }

  if (type === "job") {
    const job = detailById(jobs, id);
    return {
      title: job.title,
      body: `<article class="section-card"><strong>${job.subtitle}</strong><span>${job.meta}</span></article><article class="section-card"><strong>Why this belongs in the hub</strong><span>Opportunities become more trusted and relevant when they are routed through the verified university community.</span></article>`,
    };
  }

  if (type === "mentor") {
    const mentor = detailById(mentors, id);
    return {
      title: "Request intro",
      body: `<article class="section-card"><strong>${mentor.title}</strong><span>${mentor.subtitle}</span></article><article class="section-card"><strong>Next step</strong><span>The first intro is routed through the platform so both mentor and member have context and trust before sharing direct contact.</span><div class="sheet-actions"><button class="primary-button" type="button">Send request</button></div></article>`,
    };
  }

  if (type === "reward") {
    return {
      title: "Reward ready",
      body: `<article class="section-card"><strong>Redemption flow</strong><span>Your selection would confirm points, show remaining balance and generate a partner-ready code inside the wallet.</span><div class="sheet-actions"><button class="primary-button" type="button">Confirm redemption</button></div></article>`,
    };
  }

  if (type === "settings") {
    const copy = {
      privacy: "Members can control visibility, notifications and which commercial categories they want to hear from.",
      identity: "Faculty, year and alumni chapter context make the app more useful while preserving trust and consent.",
      support: "Escalation paths exist for payments, verification issues and partner disputes.",
    };
    return {
      title: "Settings detail",
      body: `<article class="section-card"><strong>${id}</strong><span>${copy[id]}</span></article>`,
    };
  }

  if (type === "connection") {
    const person = detailById(connections, id);
    return {
      title: person.name,
      body: `<article class="section-card"><strong>${person.context}</strong><span>This intro can be made through chapter context, shared faculty history or event attendance.</span><div class="sheet-actions"><button class="primary-button" type="button">Request connection</button></div></article>`,
    };
  }

  if (type === "deal") {
    return {
      title: "Saved to wallet",
      body: `<article class="section-card"><strong>Offer saved</strong><span>The app can keep a short list of offers, notify on changes and route redemption without forcing the member to start over each time.</span></article>`,
    };
  }

  return {
    title: "Notifications",
    body: notifications.map((item) => `<article class="section-card"><strong>${item.title}</strong><span>${item.body}</span></article>`).join(""),
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

  const screens = {
    home: renderHome,
    explore: renderExplore,
    ai: renderAI,
    community: renderCommunity,
    wallet: renderWallet,
  };

  root.main.innerHTML = screens[state.tab]();
}

function render() {
  renderHeader();
  renderTabs();
  renderMain();
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
    const payload = sheetPayload("notifications", "all");
    openSheet(payload.title, payload.body);
    return;
  }

  const sheetButton = event.target.closest("[data-sheet-type]");
  if (sheetButton) {
    const payload = sheetPayload(sheetButton.dataset.sheetType, sheetButton.dataset.sheetId);
    openSheet(payload.title, payload.body);
    return;
  }

  const closeButton = event.target.closest("[data-close-sheet]");
  if (closeButton) {
    closeSheet();
  }
});

render();
