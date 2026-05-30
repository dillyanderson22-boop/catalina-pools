# Catalina Pools AZ — Premium Site

Next.js 14 + Tailwind v4 + GSAP + Lenis. Single-crew build, written scope.

## Stack
- **Framework**: Next.js 14 App Router (TypeScript)
- **Styling**: Tailwind CSS v4
- **Smooth scroll**: Lenis (wired into GSAP ticker)
- **Animation**: GSAP + ScrollTrigger
- **WebGL**: OGL fragment shader (water caustics — no Three.js, no Roblox risk)
- **Icons**: lucide-react
- **Type**: Fraunces (display) + Inter (body)

## Brand & style frame
- **Aesthetic**: Editorial Refined, adapted for coastal/pool palette
- **Palette**: warm sand `#F5EFE3` · deep water `#0A1F33` · pool turquoise `#1B9FD9` · deep blue `#0E4F7A`
- **Signature motion**: SplitText hero reveal + WebGL water caustic background

## Pages
- `/` — Home (hero, trust strip, services, why us, gallery preview, testimonial, CTA)
- `/about` — Owner story, three non-negotiables, credentials
- `/services` — 4 deep service sections (build, remodel, repair, maintenance) with anchor nav
- `/work` — Project gallery (8 projects, asymmetric grid, hover-reveal metadata)
- `/contact` — Full contact info, quote form, Google Map embed
- `/not-found` — Designed 404

## Run it
```bash
npm install
npm run dev
```
Visit http://localhost:3000

## Deploy to aydenbuilds.com subdomain
```bash
npm run build
vercel --prod
vercel alias <deploy-url> catalina-pools.aydenbuilds.com
```

Live target: **https://catalina-pools.aydenbuilds.com**

## Real photos to swap in
The hero and one featured gallery image pull from the client's existing CDN
(`catalinapoolsaz.com/wp-content/uploads/...`). Remaining gallery slots use
Unsplash photos as placeholders matching the resort/pool aesthetic. Drop the
client's own project photos into `public/photos/` and update the paths in
`app/page.tsx` and `app/work/page.tsx`.

## Business facts (NAP — match everywhere)
- Catalina Pools AZ, LLC
- 70 S Val Vista Dr., Ste. A3-218, Gilbert, AZ 85296
- (480) 361-4462
- info@catalinapoolsaz.com
- ROC #324249 · ROC #329417
- Mon–Fri 8 AM – 5 PM · Sat by appointment
