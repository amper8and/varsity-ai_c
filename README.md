# Varsity AI Mobile Demo

A mobile-first interactive prototype for the UNIZIK community hub concept. This version is structured as an app experience rather than a presentation page.

## Included app flows

- Onboarding with role selection for student and alumni journeys
- Home dashboard with quick actions, featured offers and events
- Explore marketplace for housing, food, career and alumni business offers
- Zik AI concierge with prompt-driven actions into real product flows
- Community section for mentors, networking, jobs and chapter-style engagement
- Wallet and profile area with rewards, verification and saved items
- Deeper in-app screens for accommodation search, campus map, study planner, deal detail, event calendar, mentor profile, alumni network and redemption
- Native-style bottom sheet interactions for quick detail and lightweight actions

## Files

- `index.html` - app shell
- `styles.css` - visual system and responsive mobile UI
- `app.js` - state, rendering and interaction logic
- `UNIZIK Community Hub PRD.md` - product requirements source
- `UNIZIK Community Hub Design Guide.md` - design principles source

## Run locally

Open `index.html` directly in a browser, or serve the repo with a simple static server.

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy on Vercel

This is a static front-end app. You can deploy it from the repo root on Vercel without adding a build command.
