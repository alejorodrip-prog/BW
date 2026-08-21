# Prompt para generar el diseño del home — Blue Water Equipment Group

Cómo usarlo: abrí una conversación nueva de Claude (o pegalo donde generes el diseño/artifact), pegá todo el bloque de abajo tal cual está en inglés, y adjuntá/subí las tres carpetas de secuencias (`Hero Secuence`, `Product 01 Secuence`, `Product 02 Secuence`) junto con el prompt para que el modelo pueda referenciarlas. El copy ya está aprobado — no debería reescribirse, solo maquetarse.

**v2 — agrega:** el hero ahora usa la secuencia real de 82 frames con scroll-scrubbing (la animación y el texto aparecen a medida que se hace scroll, no es más un fondo estático), y la sección de inventario tiene un visualizador 360° real, funcional, arrastrable, usando las dos secuencias de producto de 60 frames que subiste.

---

```
ROLE
You are a senior brand and product designer/frontend engineer. Design and build a
high-fidelity, production-quality homepage for an industrial equipment dealer group.
Output a single, responsive HTML file (Tailwind CSS via CDN + vanilla JS is fine) that
looks like a real, polished product — not a template. Prioritize craft: spacing
rhythm, motion that has a purpose, and typography that feels confident, not generic
AI output. This build includes two real interactive sequences (a scroll-scrubbed hero
and two 360° product turntables) — treat them as functional product UI, not mockups.

COMPANY CONTEXT
Blue Water Equipment Group (BWEG) is the new brand for a group of Kubota equipment
dealerships in Florida, recently acquired and being consolidated under one name by
Blue Water Advisors, a private equity firm that invests in real-asset, essential
industries. BWEG sells and services Kubota tractors, construction equipment, mowers,
utility vehicles, and implements, across multiple Florida locations.

POSITIONING (what the design needs to communicate, not just the copy)
- Institutional backing and long-term stability (borrowed from the parent company's
  restrained, confident brand — not flashy, not overpromising).
- Essential, tangible work — this is equipment that plants, builds, and maintains
  real land, not a lifestyle product. Avoid soft lifestyle stock photography; equipment
  should look capable and in-use.
- A modern, fast digital buying experience that most competitors in this category
  (small, single-shop dealers) do not offer: live inventory, 360° views, an AI sales
  advisor, real specs, and real availability instead of "call for details."

PROVIDED ASSETS
Three real image-sequence folders are provided alongside this prompt. Reference them
directly — do not substitute stock photography or illustration for these two moments.

1. `Hero Secuence/` — 82 frames, 1280×720, numbered 001.png–082.png. Real footage of
   an orange Kubota compact excavator working a job site (digging, boom articulating),
   shot with a moving/orbiting camera, blue sky, tree line, construction fencing and
   dirt in the background. This is the hero's scroll-scrubbed sequence — see HERO
   below and the ASSET INTEGRATION section for exact behavior.

2. `Product 01 Secuence/` — 60 frames, 1280×720, numbered 01.png–60.png. Studio
   turntable of an orange Kubota utility/row-crop tractor on a light gray cyclorama,
   one full 360° rotation across the 60 frames (6° per frame). Use as the first
   interactive 360° product in the inventory section. Placeholder label until
   confirmed: "Kubota Utility Tractor" — replace with the real model/series name and
   specs before production.

3. `Product 02 Secuence/` — 60 frames, 1280×720, numbered 01.png–60.png. Studio
   turntable of an orange Kubota compact excavator on the same light gray cyclorama,
   one full 360° rotation across 60 frames. Use as the second interactive 360°
   product. Placeholder label until confirmed: "Kubota Compact Excavator" — replace
   with the real model/series name and specs before production.

For the build, copy these into clean, URL-safe asset paths (the source folder names
have spaces, which is fine for local reference but not for shipped code):
  /assets/sequences/hero/frame-001.png ... frame-082.png
  /assets/sequences/product-01/frame-01.png ... frame-60.png
  /assets/sequences/product-02/frame-01.png ... frame-60.png

Only these two products have a 360° sequence today. Any other inventory cards shown
in the grid are placeholder/sample data and should visually indicate "360° view
coming soon" instead of implying an interactive viewer that doesn't exist for them.

BRAND DIRECTION

Color palette (use as CSS variables / Tailwind theme extension):
- --navy-900: #082238   (deep navy — footer, dark sections, header on scroll)
- --navy-800: #0B2F4E   (primary brand navy — headings, primary UI chrome)
- --blue-600: #1B5C8C   (secondary blue — links, secondary buttons, icons)
- --accent-orange: #FF5C00  (Kubota-adjacent accent — primary CTAs, live-availability
  badges, key highlights only; use sparingly, this is the "energy" color against an
  otherwise restrained palette. NOTE: confirm exact brand-approved hex against Kubota
  dealer co-op marketing guidelines before production use. The provided sequences
  show the actual Kubota orange in-camera — sample it from the source frames if you
  need a real reference swatch.)
- --success-green: #1E8E5A  (in-stock / live availability indicator)
- --neutral-50: #F7F8F9  (page background)
- --neutral-0: #FFFFFF   (card/surface background)
- --ink-900: #1F2933     (primary body text)
- --ink-600: #5B6570     (secondary/muted text)
- --border: #E1E5E9      (dividers, card borders)

Typography:
- Headings: "Space Grotesk" (bold, slightly geometric — reads modern-industrial, not
  corporate-boring). Weights 600–700.
- Body: "Inter" (highly readable at small sizes, neutral personality so it doesn't
  compete with the headline font). Weights 400–500.
- Base body size 16px minimum, line-height 1.5–1.6, headline line-height ~1.1–1.2.
- Use a consistent type scale: 14 / 16 / 18 / 22 / 28 / 36 / 48 / 60px.

Visual style:
- Clean, editorial, restrained — generous whitespace, not a busy dealership layout.
- Photography direction outside the hero/360 sequences: equipment shot in real
  Florida working environments (citrus groves, pasture, construction sites, turf) —
  golden-hour or overcast natural light, not studio-white. Where real photography
  isn't available, use labeled placeholder blocks with a short art-direction caption
  instead of generic stock imagery or random gradients.
- Rounded corners on cards (8–12px), soft single-direction shadows (no heavy drop
  shadows), 1px hairline borders in --border for definition.
- Icons: simple line icons (Lucide-style), never emoji.

MOTION PRINCIPLES
- Micro-interactions 150–300ms, ease-out on enter, ease-in on exit.
- Scroll-reveal sections (everything except the hero) should fade + translate-y(16px)
  → 0, staggered 30–50ms per card in a grid (inventory cards, category tiles).
- The hero is the one place motion is scroll-*driven* rather than scroll-*triggered*
  — see HERO and ASSET INTEGRATION below.
- Live-availability badges (green dot) get a slow, subtle pulse to read as "live data,"
  not decorative animation.
- No animation should block interaction or shift layout (use transform/opacity only,
  except the hero canvas and 360 viewers, which intentionally redraw pixel content).
- Everything must respect prefers-reduced-motion: see the fallback behavior specified
  for the hero and the 360 viewers in ASSET INTEGRATION.

PAGE STRUCTURE
Build these sections in this order. Use the copy exactly as written below — do not
rewrite it. Bracketed items like [Number] are placeholders; keep the brackets visible
in the design as a placeholder state.

1) HEADER / NAV (sticky, transitions from transparent-on-hero to solid navy-900 on
   scroll)
   - Logo (placeholder wordmark: "BLUE WATER EQUIPMENT GROUP")
   - Nav: Inventory, Shop by Category, Locations, Parts & Service, Financing
   - Persistent small "Ask Our AI Advisor" chat icon/button, always visible
   - Phone number + primary CTA button ("Search Inventory")

2) HERO — scroll-scrubbed sequence
   This section is pinned (position: sticky) inside a taller scroll container so that
   scrolling through it plays the `Hero Secuence` frames like a scrubbed video, with
   copy revealing in sync with specific frame ranges. Do not treat this as a static
   background image — it is the primary piece of motion on the page.

   Behavior:
   - Wrap the hero in an outer container roughly 350–400vh tall. Inside it, a sticky
     inner element (100vh) holds a <canvas> that fills the viewport (object-fit:
     cover behavior on a 1280×720 source — letterbox/crop as needed per breakpoint).
   - As the user scrolls through the outer container, map scroll progress (0 to 1)
     to a frame index (0 to 81) and draw that frame to the canvas. See ASSET
     INTEGRATION for the exact algorithm.
   - Copy reveals are keyed to frame ranges, not to separate scroll triggers, so
     everything stays locked to the same scrub:
       - Frames 0–18: establishing shot plays with no text on screen — let the
         machine and the motion read first.
       - Frames ~19–34: Headline ("The Machine You Need Is Already on Our Lot.")
         fades and slides up into view, positioned lower-left with a dark gradient
         behind it for contrast against the footage.
       - Frames ~35–54: Subhead fades in beneath the headline ("Search live
         inventory across every Blue Water location, see every unit in 360°, and
         get a real price in minutes — before you ever have to call.")
       - Frames ~55–70: Primary CTA ("Search Live Inventory") and secondary CTA
         ("Ask Our AI Advisor") fade/slide in, plus the inline inventory-search bar
         (category dropdown + location dropdown + search button).
       - Frames ~71–81: composition holds; as the user continues scrolling past
         frame 81 the sticky element releases and the page continues normally into
         the trust bar.
   - Once released, the hero should NOT re-trigger if the user scrolls back up and
     down again mid-page — only scrub while the hero's scroll container is in view.

3) TRUST BAR (thin strip directly under hero)
   "[Number] Locations Across Florida  |  Authorized Kubota Dealer  |  Certified
   Service Technicians  |  Live Inventory, Updated Daily"
   Render as 4 evenly-spaced items with small icons, on a light neutral-50 or navy-900
   band — pick whichever reads cleaner coming out of the hero footage.

4) HOW IT WORKS (4-step horizontal process, numbered)
   Headline: "From Browsing to Keys in Hand — Four Steps."
   1. Tell Us What You Need — Search inventory yourself, or tell our AI Advisor the
      job (acreage, terrain, budget) and get matched to real units in stock.
   2. See It Before You Drive to It — Full 360° walkaround, spec sheet, hours and
      condition for pre-owned units, and live availability by location.
   3. Get Your Real Number — Instant price estimate and financing pre-qualification,
      no obligation, no dealership visit required.
   4. Reserve or Schedule a Visit — Hold the unit online and book a test drive,
      delivery, or pickup. A local specialist confirms every detail before you sign
      anything.
   Layout: 4 columns on desktop collapsing to a vertical stack on mobile, connected
   by a subtle line/arrow between steps, numbers large and in --accent-orange.

5) AI EQUIPMENT ADVISOR
   Headline: "Meet the Advisor That's Always on the Lot."
   Body: "Not everyone shopping for a tractor at 9pm wants to leave a voicemail. Our
   AI Equipment Advisor checks real-time inventory across every location, compares
   specs side by side, estimates payments, and books a visit or service appointment,
   then hands off to a local specialist the moment you're ready to talk to a person."
   Include a realistic chat-widget mockup showing this exchange:
     YOU: "I need something for about 5 acres of pasture and brush hogging."
     ADVISOR: "A Kubota L3560 or BX23S would both handle that well. We have an L3560
     in stock at our Ocala location and a BX23S at Lakeland. Want to compare specs,
     or see the 360° walkaround for what's on the lot right now?"
   CTA button: "Ask Our AI Advisor"
   Layout: two columns on desktop — copy + CTA on one side, chat widget mockup (styled
   like a real messaging UI, navy header, rounded message bubbles) on the other.

6) EVERY MACHINE, EVERY ANGLE — real 360° viewer
   Headline: "See Every Angle, Every Spec, Before You Ever Step on the Lot."
   Body: "Every unit on a Blue Water lot, new or pre-owned, gets the same treatment:
   a full 360° interactive walkaround, complete specs pulled straight from our
   inventory system, and a live status tag so you know exactly what's available and
   where."
   Feature list (as compact checklist icons, not plain bullets):
   - 360° interactive walkaround for every new and pre-owned unit
   - Full specs: horsepower, PTO, hours, attachments, and compatible implements
   - Live availability by location — no "call to confirm"
   - Compare up to 3 units side by side
   - Save units to a list and share it with your team or your lender
   CTA button: "View Full Inventory"

   Build TWO fully interactive 360° product cards using the provided sequences —
   these are real, not decorative:
   - Card 1: `Product 01 Secuence` (utility tractor). Draggable/swipeable 360°
     viewer — see ASSET INTEGRATION for interaction spec.
   - Card 2: `Product 02 Secuence` (compact excavator). Same interaction.
   Each card includes:
   - The 360° canvas/image viewer itself, on the light gray studio background from
     the source frames (do not crop the cyclorama oddly — keep the product centered
     and grounded on its turntable line)
   - A small "360°" badge (circular arrows icon) and a "Drag to rotate" hint that
     fades out after the first interaction
   - Model name + series (placeholder label per PROVIDED ASSETS above)
   - Key specs as small tags (placeholder values — HP, drive type, etc.)
   - Live availability badge: green dot + "In Stock — [Location]" (pulsing dot)
   - Price or "Get My Price" if price isn't public
   - A small "Compare" checkbox

   Below or beside these two live cards, show 1–2 additional sample inventory cards
   using the same card anatomy but with a static image and a "360° view coming soon"
   badge instead of the interactive viewer, so the grid reads as a real, growing
   inventory rather than implying every unit already has this treatment.

7) SHOP BY CATEGORY (icon/image grid, 6 tiles)
   Headline: "Find the Right Equipment for the Job"
   - Compact Tractors — property, hobby farms, and grounds work
   - Utility & Ag Tractors — row crops, hay, and heavy-duty acreage
   - Construction Equipment — excavators, loaders, and site work
   - Mowers & Turf — commercial and residential grounds care
   - Utility Vehicles — job-site and property transport
   - Implements & Attachments — built to match the machine
   Each tile: background image placeholder + label, hover state darkens image and
   reveals a "Shop Now →" link.

8) LOCATIONS
   Headline: "One Team, Every Location"
   Body: "Blue Water Equipment Group connects Kubota dealerships across Florida into
   a single, dependable network, so the part or machine you need is never as far away
   as it looks."
   CTA button: "Find a Location Near You"
   Layout: Florida map illustration/placeholder on one side with location pin markers,
   simple location cards (city name + "View Inventory" link) on the other or below.

9) PARTS, SERVICE & FINANCING (3-column feature block)
   Headline: "Parts, Service, and Financing — Handled Right"
   - Genuine Kubota parts, in stock and ready
   - Factory-trained technicians who know the equipment
   - Financing built around your season, not the calendar
   CTAs: "Schedule Service" (primary) and "Check My Rate" (secondary/ghost)

10) CREDIBILITY CLOSE (full-width dark navy-900 band, feels like a pause/statement)
    Headline: "Built on a Track Record, Not Promises"
    Body: "Blue Water Equipment Group is backed by Blue Water Advisors, a firm with a
    track record of building industry-leading businesses for the long term. That
    means real investment in inventory, people, and the communities we serve, not
    just this quarter, but for years to come."
    Treat this like a quiet, confident statement — large type, lots of surrounding
    space, no clutter, no CTA button here (this section builds trust, not action).

11) FINAL CTA (full-width band, navy-800 or accent-orange background)
    Headline: "Ready to Find Your Machine?"
    CTAs: "Search Live Inventory" (primary), "Ask Our AI Advisor" and
    "Find Your Location" (secondary, side by side)

12) FOOTER (navy-900)
    Standard dealer footer: logo, nav columns (Inventory, Service, Financing, About,
    Locations), location list, phone, social icons, legal links, "© 2026 Blue Water
    Equipment Group. All Rights Reserved."

ASSET INTEGRATION — implementation notes for the two sequences

Hero scroll-scrub (canvas):
- Preload all 82 frames into an array of Image objects before enabling scroll
  scrubbing; show a minimal loading state (e.g. the first frame as a static image,
  or a brief branded loader) until preload completes so scrubbing never draws a
  blank frame.
- Frame selection: on scroll, compute progress = clamp((scrollY within the hero's
  outer container) / (outer container height − viewport height), 0, 1), then
  frameIndex = Math.floor(progress * 81) [0-indexed across 82 frames]. Draw that
  frame to the canvas.
- Throttle the scroll handler with requestAnimationFrame (do not run the draw call
  synchronously on every scroll event) to avoid jank.
- Canvas sizing: match canvas pixel dimensions to the container size × devicePixelRatio
  for sharpness, and use a cover-fit calculation (source is 1280×720 / 16:9) so the
  footage crops sensibly instead of stretching on non-16:9 viewports.
- Reduced motion fallback: if prefers-reduced-motion is set, skip scroll-scrubbing
  entirely — show a single representative static frame (e.g. frame 040) with the
  headline, subhead, and CTAs already visible, no scrub behavior.

360° product viewers (drag/swipe):
- Preload all 60 frames per product on section entry (e.g. via IntersectionObserver
  when the card scrolls near the viewport) rather than on initial page load, to keep
  first paint fast — show a lightweight spinner/skeleton on the card until ready.
- Interaction: on pointerdown, track horizontal pointer movement. Map every ~6–10px
  of horizontal drag to one frame step (tune to taste — should feel responsive, not
  twitchy). Wrap frame index modulo 60 in both directions so the rotation feels
  continuous. Support both mouse drag and touch swipe (pointer events cover both).
- On load (before first interaction), auto-play a single slow rotation once (e.g.
  ~4–6 seconds for the full 60 frames) so visitors immediately understand it's a
  360° viewer, then stop on the starting frame and wait for interaction. Do not loop
  indefinitely — that reads as decorative, not functional.
- Show a subtle "drag to rotate" hint (icon + text) that fades out after the user's
  first drag/swipe on that card.
- Reduced motion fallback: skip the auto-play rotation; show the first frame as a
  static image, but keep drag-to-rotate available since that's a user-initiated,
  discrete interaction rather than continuous motion.
- Cursor: use `grab` / `grabbing` cursor states on desktop to signal the interaction.

TECHNICAL REQUIREMENTS
- Single responsive HTML file, mobile-first, no horizontal scroll at any breakpoint.
- Real accessibility: 4.5:1 text contrast minimum, visible focus states on every
  interactive element, alt text on all images (including a text alternative for the
  hero sequence and each 360° viewer, e.g. "Kubota compact excavator working on a
  job site" / "360° view of Kubota utility tractor"), semantic headings (one h1,
  sequential h2/h3), keyboard-operable chat widget, CTAs, and 360° viewers (arrow
  keys should step the rotation when a viewer is focused).
- The AI chat widget in section 5 can remain a visual/interactive mockup (it doesn't
  need to be wired to a real model) — but it should look and behave like real product
  UI, not a flat illustration.
- Respect prefers-reduced-motion everywhere, per the fallbacks specified above.
- Do not invent real facts: keep [Number] and other bracketed placeholders visible
  rather than making up a location count, address, or phone number. Same for the two
  product names/specs — keep them clearly marked as placeholders until confirmed.

DELIVERABLE
Produce the full desktop-width homepage first, with the hero scroll-scrub and both
360° viewers fully working against the provided frame sequences. After that, note (in
a short comment block, not in the visible page) any places the layout would need to
change materially for mobile beyond standard stacking — in particular, whether the
hero scroll-scrub and drag-to-rotate interactions need adjusted timing/sensitivity on
touch devices — so those can be reviewed before the mobile pass.
```
