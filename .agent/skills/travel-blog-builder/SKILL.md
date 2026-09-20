---
name: travel-blog-builder
description: Scaffolds and builds an ultra-modern, UI-heavy, nature-immersive multi-page travel blog using Astro or Next.js with Tailwind CSS. Incorporates organic color palettes, glassmorphic cards, topographic subtle motifs, smooth micro-interactions, and editorial layouts.
---

# Travel Blog Builder Skill (Nature & Modern Editorial Edition)

## Goal
Build an aesthetically rich, interactive, nature-inspired travel website with fluid typography, atmospheric visual layers, interactive photo showcases, and long-form editorial trip stories.

---

## Visual Identity & Design System

### 1. Nature-Inspired Color Palette
- **Forest & Alpine Canopy (Primary Dark):**
  - Background Dark: `#0B1311` (Deep Pine Night)
  - Surface Dark: `#13221E` / `#182C27` (Muted Moss & Evergreen)
  - Borders: `rgba(45, 106, 79, 0.25)`
- **Alpine Mist & Stone (Light Surfaces):**
  - Background Light: `#F4F7F5` (Morning Mist)
  - Surface Light: `#FFFFFF` and `#EAF0EC` (Glacial Stone)
  - Text Primary: `#0F1E19` (Charcoal Slate)
- **Nature Accents (Light & Dawn):**
  - Accent Sun/Campfire: `#E07A5F` / `#DDA15E` (Warm Ochre / Prayer Flag Amber)
  - Accent Water/Glacier: `#38A3A5` (Glacial River Cyan)
  - Accent Foliage: `#2D6A4F` (Deep Botanical Green)

### 2. Typography
- **Headings / Display:** Editorial Serif (e.g., `Playfair Display`, `Fraunces`, or `Cinzel`) for grand mountain/nature storytelling.
- **Body / Interface:** Ultra-clean Modern Sans (e.g., `Plus Jakarta Sans`, `Inter`, or `Geist`) for high legibility, clean timestamps, and coordinate badges.

### 3. UI Patterns & Atmospheric Elements
- **Glassmorphism & Mist Layers:** Translucent floating navigation and cards (`backdrop-blur-md bg-white/70 dark:bg-emerald-950/40 border border-white/20 dark:border-emerald-800/30`).
- **Hero Sections:** Immersive full-height or 80vh hero banners with subtle radial gradient glows mimicking alpine morning light breaking through fog.
- **Topographic & Nature Accents:** Subtle topographic contour line SVG patterns or organic wave dividers between sections.
- **Micro-Badges & Meta Info:** Sleek pill badges displaying altitude (`13,700 FT`), coordinates, temperature badges, and route indicators.
- **Interactive Image Treatment:**
  - Smooth zoom-on-hover (`transition-transform duration-700 ease-out hover:scale-105`).
  - Aspect ratio preservation with rounded organic edges (`rounded-2xl` or `rounded-3xl`).
  - Parallax feeling or subtle hover card elevation with soft ambient shadows (`shadow-xl shadow-emerald-950/10`).

---

## Step-by-Step Execution Workflow

1. **Environment Setup & Stack:**
   - Framework: **Astro** (with React or Vue components where interactivity is required) or **Next.js (App Router)**.
   - Styling: **Tailwind CSS** with `@tailwindcss/typography`.
   - Icons: **Lucide** (`Compass`, `Mountain`, `Wind`, `Calendar`, `MapPin`, `ArrowUpRight`, `Sun`, `Moon`).

2. **Scaffold Layout & Global Aesthetics:**
   - Set up an ambient global background featuring a subtle radial gradient (e.g., emerald/teal glow at the top corners fade to dark slate).
   - Create a sticky floating glass navbar (`rounded-full mx-auto max-w-4xl px-6 py-3 my-4`).
   - Include a seamless Dark/Light mode theme toggle.

3. **Core Component Suite:**
   - `HeroBanner`: Large editorial title, subtle subline, floating badge pill showing "Current Expedition", and scroll-down indicator.
   - `TripCardModern`: Split or layered card featuring an image preview, destination coordinates, elevation tag, and a smooth hover-lift effect.
   - `TimelineStep`: An organic road-trip timeline connecting Day 1 to Day 4 with custom iconography and vertical gradient trail lines.
   - `EditorialGallery`: Multi-format photo layout (alternating wide full-bleed shots, 2-column side-by-side grids, and captioned callout frames).
   - `PlaceholderFrame`: When local images are not yet present in `/public/images/arunachal/`, display an artistic SVG mountain-gradient placeholder container displaying the target caption cleanly without broken asset errors.

4. **Page Construction:**
   - **`/` (Home):** Immersive hero banner $\rightarrow$ "Featured Mountain Routes" carousel/grid $\rightarrow$ "Field Notes" preview $\rightarrow$ Quick traveler manifesto.
   - **`/trips`:** Curated grid with nature-themed filter tabs ("High Passes", "River Valleys", "Winter Trails").
   - **`/trips/arunachal-pradesh-2023`:** Long-form luxury editorial article with:
     - Header badge bar (Elevation: 13,700 ft | Route: Tezpur $\rightarrow$ Tawang | Season: Winter).
     - Connected day-by-day road trip cards with interactive photo containers.
     - Travel Logistics Accordion / Grid (ILP permit info, 4x4 road conditions, gear checklist).
   - **`/about`:** Minimalist profile highlighting road trip ethics, gear setup, and visual aesthetics.

5. **Build & Validation:**
   - Verify layout responsiveness across mobile, tablet, and ultra-wide screens.
   - Run `npm run build` to confirm clean compilation and zero TypeScript/hydration errors.

---

## Quality Guardrails
- **Heavy UI without Bloat:** Use CSS-driven transitions and Tailwind utility classes for performance; avoid heavy, sluggish JS animation libraries.
- **Contrast & Accessibility:** Ensure all serif titles and body text meet WCAG AA contrast against dark emerald/slate backgrounds.