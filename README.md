# Varsity AI Demo App

A polished single-page demo for the UNIZIK community hub concept, built from the product requirements, design guide and mockup review in `tasks/varsity ai`.

## What is included

- A mobile-first showcase app for students, alumni and partners
- Marketplace flows for accommodation, food, careers, events and alumni businesses
- An AI concierge experience tied to practical campus and community actions
- Rewards, verification and referral surfaces
- A lightweight partner studio overlay to demonstrate the commercial model
- Source product documents:
  - `UNIZIK Community Hub PRD.md`
  - `UNIZIK Community Hub Design Guide.md`

## Project structure

- `index.html` - page structure and app shell
- `styles.css` - visual system, responsive layout and component styling
- `app.js` - demo data, interaction logic and screen rendering

## Run locally

Because the project is static, you can open `index.html` directly in a browser or serve the folder with any static server.

Simple option with Python:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

This repository is ready for a straightforward Vercel static deployment. Point Vercel at the repo root and deploy without a custom build command.
