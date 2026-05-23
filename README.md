# Build The Bridge

**Live site:** [build-the-bridge-ohje.vercel.app](https://build-the-bridge-ohje.vercel.app/)

A marketing consultancy website for a Canada–China market entry agency. The business helps Canadian natural and sustainable brands launch into the Chinese market through Xiaohongshu (小红书) campaigns and KOL/influencer partnerships.

The site serves as the agency's primary client-facing presence — communicating the service offering, sharing market case studies, answering common questions, and collecting inbound leads via a contact form that delivers submissions directly to the founder's inbox.

## Pages

- **Home** — hero with brand pitch, value proposition, and contact form
- **Why Build The Bridge** — editorial page on the China–Canada market opportunity
- **Our Approach** — step-by-step service breakdown (market research → partnership network → tech support → launch)
- **Cases** — carousel of real cross-border brand success stories (GeoSkincare, Lulujo Baby, Nanushka)
- **FAQ** — collapsible accordion of common client questions
- **Canadian Service / Chinese Service** — separate landing pages targeting each audience

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router, TypeScript) |
| UI | React 19 |
| Styling | Tailwind CSS v4 + CSS Modules |
| Animation | Framer Motion |
| Icons | Lucide React |
| Email | Resend API (contact form → founder's inbox) |
| Deployment | Vercel (auto-deploy from GitHub) |
| Language | TypeScript (strict mode) |

## Notable Details

- Custom SVG organic background in `layout.tsx` — two flowing peach-toned shapes with a pink radial glow at their intersection, fixed-position behind all content
- Server-side API route (`/api/contact`) with `force-dynamic` to handle form submissions and send dual confirmation emails (to founder + submitter)
- Fully static-friendly architecture — only the contact endpoint requires a server function
- Environment variable–gated API key (Resend), never exposed to the client

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Requires a `.env.local` file with:

```
RESEND_API_KEY=your_key_here
```
