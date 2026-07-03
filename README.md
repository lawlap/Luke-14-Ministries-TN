# Luke 14 Ministries — Website Rebuild (Preview)

A recreation of [luke14ministries.net](https://luke14ministries.net) plus mockups of the new
accounts platform (Camp Celebrate registration for families & volunteers, and online giving).
Every page shows a red **PREVIEW / TEST BUILD** banner so camp administrators know it is not
the official site.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Publish the preview on GitHub Pages

1. Create a GitHub repo (e.g. `luke14-preview`) and push this folder:
   ```bash
   git init && git add -A && git commit -m "Preview build"
   git branch -M main
   git remote add origin https://github.com/<you>/luke14-preview.git
   git push -u origin main
   ```
2. In the repo: **Settings → Pages → Source: GitHub Actions**.
3. The included workflow (`.github/workflows/deploy.yml`) builds and deploys on every push.
   Preview URL: `https://<you>.github.io/luke14-preview/`

The workflow sets `NEXT_PUBLIC_BASE_PATH` to the repo name automatically. For local builds
that's left empty, so links work at the root.

## What's here

- **Recreated pages** — Home, Mission & Story, Leadership, Resources, Camp Celebrate (+ Camper
  Info, Volunteer Info, Camp Memories), Luke 14 Party, Wheels for Kenya, The Hazelnut Movement,
  Adult Adventure Retreat, Donate, Pray, Newsletter, Host a Speaker, Contact. Content captured
  verbatim from the live site (July 2026). All 126 photos are self-hosted in `public/images/`
  (downloaded at 2500px from the original site), so the site is fully standalone. Camp Memories
  embeds the original YouTube highlight videos per year; Luke 14 Party and Wheels for Kenya
  include their full photo galleries.
- **New platform mockups** (UI only, nothing saved/charged):
  - `/account` — login · `/account/signup` — account creation (family or volunteer path)
  - `/account/dashboard` — sample dashboard: registrations, household, giving history
  - `/register/family` — 4-step family registration wizard
  - `/register/volunteer` — volunteer application
  - `/donate` — original content + new online giving form (one-time/monthly, fund designation)

## Roadmap to the live platform

1. Gather admin feedback on the flows via the GitHub Pages preview.
2. Backend: Supabase (auth + database) — real accounts, saved registrations, admin views.
3. Payments: Stripe (camp fees + donations, recurring giving, receipts). Apply for the Stripe
   nonprofit rate. Remove `output: 'export'` from `next.config.mjs` and host on Vercel.
4. Before going public on the ministry's own domain, remove `components/PreviewBanner.jsx`
   from `app/layout.jsx`.

## Content notes (gaps found during capture)

- Video embeds (Luke 14 Party 2022 highlights, Wheels for Kenya 2024) and the Camp Memories
  photo galleries are client-rendered on Squarespace and couldn't be captured — placeholders used.
- The original contact form's fields didn't render in capture; a standard Name/Email/Subject/
  Message form is used.
- Pray/Newsletter/Kenya signups still link to the existing Google Forms; Hazelnut/speaker
  bookings still link to the existing Airtable forms (all functional).
