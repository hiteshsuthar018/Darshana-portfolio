# Darshana Soni — Portfolio

A premium, award-worthy portfolio for UI/UX Designer Darshana Soni, built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, GSAP, and Lenis smooth scroll.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — custom design tokens (colors, radii, shadows) in `tailwind.config.ts`
- **Framer Motion** — scroll reveals, stagger animations, tilt cards, magnetic buttons, page loader
- **GSAP** — hero entrance sequence + parallax on the floating UI cards
- **Lenis** — smooth scroll
- **lucide-react** — icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

> Note: `next/font/google` fetches font files at build time, so an internet connection is required for `npm run build` / `npm run dev` to download Space Grotesk, Inter, and JetBrains Mono the first time.

## Project structure

```
app/
  layout.tsx        # fonts, metadata/OG tags, providers
  page.tsx           # assembles all sections
  globals.css         # design tokens, utility classes
  loading.tsx         # route-level loading state
components/
  layout/             # Navbar, Footer, SmoothScroll, CursorGlow, PageLoader
  sections/           # Hero, About, Skills, Experience, Projects, Process, WhyMe, Contact
  ui/                  # Reveal, SectionLabel, MagneticButton, TiltCard, ProjectCard, ProjectMockup
lib/
  data.ts              # all portfolio content (edit this to update copy/projects)
```

## Editing content

All copy — bio, skills, experience, the four featured projects, process steps — lives in `lib/data.ts`. Update that file and the whole site reflows; no need to touch components for text changes.

## Replacing the OG image

Add a real `og-image.png` (1200×630) to `/public` — referenced in `app/layout.tsx` metadata.

## Design tokens

- **Palette:** violet `#7C5CFC` → indigo `#4C6FFF` gradient as the primary accent, off-white canvas `#FAFAFC`, near-black ink `#14121A`, coral `#FF7A59` used sparingly.
- **Type:** Space Grotesk (display), Inter (body), JetBrains Mono (eyebrows/labels).
- **Signature element:** floating glassmorphic UI cards in the hero that tilt and drift with the cursor, echoing a pinned Figma board.
