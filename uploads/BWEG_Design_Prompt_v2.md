# Prompt para generar el diseño del home — Blue Water Equipment Group (v2)

Cómo usarlo: abrí una conversación nueva de Claude (o Claude Design), pegá todo el bloque de abajo tal cual está en inglés, y adjuntá:
- `BWEG_Kubota_Content_Structure_v1.xlsx` como referencia de las categorías y modelos reales confirmados, para que el modelo arme "Shop by Category" y los highlights con datos reales en vez de inventados.
- No hace falta adjuntar secuencias de imágenes esta vez — las tres carpetas del v1 (Hero, Product 01, Product 02) se usaron solo para el concepto que se le entregó al cliente y ya no se incluyen en este build. El prompt deja el hero y 3–4 productos destacados marcados como placeholder, a la espera de las fotos/secuencias reales que vayamos a producir.

**Qué cambió respecto al v1 (para tu propio control, esto no va pegado):**
- BWEG se reposiciona como dealer que vende Y alquila, no fabricante — Rentals pasa a ser una sección propia del sitio y del home, al mismo nivel que Inventory.
- "Shop by Category" ahora usa las categorías reales confirmadas por el cliente (Tractors, Mowers, Utility Vehicles, Attachments) en vez de las 6 categorías genéricas del draft anterior.
- Se retiran las tres secuencias de imágenes del v1 (eran material del concepto para el cliente, no assets de producción). El hero conserva el mecanismo de scroll-scrub y la sección de destacados conserva el visor 360°, pero ambos quedan como placeholder a la espera de fotos/secuencias nuevas — se deja espacio para unos 3–4 productos destacados, no más.
- Se revisó la navegación principal (header) contra la estructura real de floridacoasteq.com: el borrador anterior fusionaba Parts & Service en un solo ítem y omitía Other Brands y Company, que sí existen como secciones propias en el sitio de referencia — ver el punto 1 (HEADER / NAV) en PAGE STRUCTURE.
- El copy quedó ajustado en varios puntos para reflejar venta + alquiler. Sigue siendo un borrador para que el cliente reaccione — quedó marcado bloque por bloque como DRAFT o APPROVED/UNCHANGED para que sepan exactamente qué están aprobando.

Esta es una revisión de contenido, no de marca — la paleta y tipografía ya aprobadas en v1 se mantienen intactas.

---

```
ROLE
You are a senior brand and product designer/frontend engineer. Design and build a
high-fidelity, production-quality homepage for an industrial equipment dealer group.
Output a single, responsive HTML file (Tailwind CSS via CDN + vanilla JS is fine) that
looks like a real, polished product — not a template. Prioritize craft: spacing
rhythm, motion that has a purpose, and typography that feels confident, not generic
AI output. This is a v2 content revision of an already-approved v1 design — the
brand direction and motion mechanisms below are unchanged and approved; what changed
is the company's positioning, the site's category structure, and section copy. Build
the full page fresh from this brief rather than diffing against v1.

COMPANY CONTEXT
Blue Water Equipment Group (BWEG) is the new brand for a group of Kubota dealerships
in Florida, recently acquired and being consolidated under one name by Blue Water
Advisors, a private equity firm that invests in real-asset, essential industries.
BWEG is a DEALER, not a manufacturer: it sells AND RENTS Kubota tractors, mowers,
utility vehicles, and attachments, and provides parts, service, and financing,
across multiple Florida locations. This is a correction from the v1 brief, which did
not surface the rental side of the business — rental is now a first-class part of
the site and the home page, on equal footing with sales.

The client shared floridacoasteq.com — an existing Kubota Florida dealer — as the
structural reference for how the whole site (not just the home page) should be
organized: category structure, navigation, and the way rental is presented as its
own section with its own catalog, attachments, policy, and credit application. Use
it as a structural and tonal reference, not a template to copy verbatim — BWEG's own
differentiators below still apply and should stay more ambitious than a typical
dealer site.

POSITIONING (what the design needs to communicate, not just the copy)
- Institutional backing and long-term stability (borrowed from the parent company's
  restrained, confident brand — not flashy, not overpromising).
- A real, accountable local dealer — sells AND rents, stocks genuine Kubota parts,
  and services what it sells. This is the trust bridge Kubota's own network
  messaging leans on ("your local, accountable Kubota dealer").
- Essential, tangible work — this is equipment that plants, builds, and maintains
  real land, not a lifestyle product. Avoid soft lifestyle stock photography;
  equipment should look capable and in-use.
- A modern, fast digital buying AND renting experience that most competitors in this
  category (small, single-shop dealers) do not offer: live inventory, 360° views, an
  AI sales advisor, real specs, and real availability instead of "call for details."

CONFIRMED INVENTORY — use this, not invented categories
The client provided a wholegoods audit of what's actually in stock, already mapped
into an approved structure. Use these four groups everywhere the design shows
equipment categories — nav, Shop by Category, and any featured/highlight cards. Do
not invent categories BWEG doesn't currently stock (e.g. Construction equipment).

  TRACTORS (8 units)
    Sub-Compact — BX Series (incl. one BX23S Tractor-Loader-Backhoe combo unit)
    Compact — B Series, L Series, LX Series
    Utility — MX Series

  MOWERS (14 units)
    Diesel — ZD Series
    Gas, Residential — Z200 Series
    Gas, Prosumer — Z400 Series
    Gas, Commercial — Z700 Series
    Gas, Commercial (Grand) — ZG Series
    Stand-On — SZ Series

  UTILITY VEHICLES (1 unit)
    RTV-X Series

  ATTACHMENTS (5 units)
    Loaders — LA Series
    Backhoes — BH Series

RENTALS — structure confirmed, specific fleet not yet provided
Rentals is now a top-level section, structurally equivalent to Inventory —
floridacoasteq.com treats it the same way: its own landing page, its own equipment
catalog, attachments available for rent, a rental policy, a protection program, and
a credit application. The client has not yet provided which specific units are
available to rent (as opposed to sale-only). Design the Rentals section and its
home-page highlight with real structure and real UI, but keep specific rental unit
names as bracketed placeholders — do not invent rental inventory or rates.

PROVIDED ASSETS
No image sequences are provided with this prompt. The three sequence folders used in
the earlier concept pitch (a stock-style excavator hero and two studio turntables)
were built to sell the idea to the client and do not represent real BWEG inventory or
locations — do not reuse them, and do not substitute generic stock photography or
illustration in their place either. Build the page with clearly labeled placeholder
blocks instead, so the client can see exactly which pieces still need real
photography/video and isn't shown anything that looks like a finished asset.

1. Hero — keep the scroll-scrubbed image-sequence mechanism (unchanged, see HERO in
   PAGE STRUCTURE and ASSET INTEGRATION for the exact algorithm), but treat the frame
   sequence itself as not-yet-produced. Build the hero against a placeholder frame set
   (a labeled static gradient or single placeholder photo is fine for now) sized to
   the same spec the real footage will follow — see ASSET INTEGRATION — so swapping in
   real frames later is a drop-in replacement, not a rebuild. Caption it clearly as
   "Hero footage — pending production" in the build notes.

2. Inventory Highlights — reserve space for 3–4 highlighted products, not more, each
   with either a real photo or a 360° turntable sequence once we shoot them. Pick the
   3–4 from CONFIRMED INVENTORY above, spanning at least two of the four groups (e.g.
   one Tractor, one Mower, one Utility Vehicle or Attachment) so the highlights reflect
   what BWEG actually carries rather than a single category. Build each highlight card
   using the same 360°-viewer anatomy as v1 (drag/swipe, auto-play-once — see ASSET
   INTEGRATION) so it's ready to receive real frames, but show a clearly labeled
   "360° view coming soon" placeholder state until footage exists. Do not name or
   imply a specific real model on any placeholder card until we confirm which 3–4
   units are actually being shot.

Any inventory card shown beyond these 3–4 highlighted placeholders is sample data and
should visually indicate "360° view coming soon" instead of implying an interactive
viewer that doesn't exist for it.

BRAND DIRECTION — approved in v1, unchanged

Color palette (use as CSS variables / Tailwind theme extension):
- --navy-900: #082238   (deep navy — footer, dark sections, header on scroll)
- --navy-800: #0B2F4E   (primary brand navy — headings, primary UI chrome)
- --blue-600: #1B5C8C   (secondary blue — links, secondary buttons, icons)
- --accent-orange: #FF5C00  (Kubota-adjacent accent — primary CTAs, live-availability
  badges, key highlights only; use sparingly, this is the "energy" color against an
  otherwise restrained palette. NOTE: confirm exact brand-approved hex against Kubota
  dealer co-op marketing guidelines before production use.)
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
  instead of generic stock imagery or random gradients — this now also applies to
  the new Rental Fleet section (8 below).
- Rounded corners on cards (8–12px), soft single-direction shadows (no heavy drop
  shadows), 1px hairline borders in --border for definition.
- Icons: simple line icons (Lucide-style), never emoji.

MOTION PRINCIPLES — approved in v1, unchanged
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
Build these sections in this order. Every block is tagged so the client's feedback
pass can target content precisely:
  (APPROVED, UNCHANGED) — keep exactly as-is, not open for this round of feedback.
  (DRAFT) — new or rewritten copy, proposed for this round, expected to change.
Bracketed items like [Number] are placeholders; keep the brackets visible in the
design as a placeholder state.

1) HEADER / NAV (sticky, transitions from transparent-on-hero to solid navy-900 on
   scroll) — structure VERIFIED against floridacoasteq.com's real site structure
   - Logo (placeholder wordmark: "BLUE WATER EQUIPMENT GROUP")
   - Nav: Inventory, Rentals, Parts, Service, Other Brands [pending], Financing,
     Locations, Company
   - Checked directly against floridacoasteq.com's live sitemap: Parts and Service
     are two separate top-level sections there, each with its own real sub-pages
     (Parts: parts department, parts request, parts online store, parts specials,
     return policy — Service: service request, protection program, service specials,
     maintenance) — don't collapse them into one "Parts & Service" nav item. FCE also
     carries a top-level "Other Brands" section (Bush Hog, Echo, Stihl, and others)
     and a "Company" section (About Us, Careers) that the previous draft of this nav
     dropped. BWEG's confirmed inventory is 100% Kubota, so keep "Other Brands"
     marked [pending] rather than silently omitting it, until the client confirms
     whether BWEG carries any other brand. One deliberate departure from the
     reference: FCE nests Locations under Company > About Us rather than giving it
     its own top-level nav item — keep Locations as its own top-level item here
     anyway, since multiple Florida locations is one of BWEG's stated
     differentiators, not an oversight.
   - Persistent small "Ask Our AI Advisor" chat icon/button, always visible
     (APPROVED, UNCHANGED)
   - Phone number + primary CTA button ("Search Inventory")

2) HERO — scroll-scrubbed sequence (mechanism APPROVED, UNCHANGED — copy DRAFT —
   frame sequence PENDING PRODUCTION, see PROVIDED ASSETS)
   This section is pinned (position: sticky) inside a taller scroll container so that
   scrolling through it plays a sequence of hero frames like a scrubbed video, with
   copy revealing in sync with specific points in the sequence — identical mechanism
   to v1, see ASSET INTEGRATION for the exact algorithm. Build against a placeholder
   frame set for now (see PROVIDED ASSETS); reveal points below are given as
   percentage-of-sequence so they transfer directly once real footage exists,
   whatever its final frame count turns out to be.
   - 0–20% of the sequence: establishing shot, no text on screen (unchanged).
   - ~20–40% (DRAFT headline): "The Machine You Need — In Stock or Ready to Rent."
   - ~40–65% (DRAFT subhead): "Search live inventory across every Blue Water
     location, see every unit in 360°, and buy or rent in minutes — before you ever
     have to call."
   - ~65–85%: Primary CTA (DRAFT) "Search Inventory" and secondary CTA (DRAFT)
     "Explore Rentals" fade/slide in, plus the inline inventory-search bar (category
     dropdown + location dropdown + search button). ADD a Buy / Rent toggle to this
     search bar — new from v1.
   - ~85–100%: composition holds, then releases into the trust bar (unchanged).
   - Once released, the hero should NOT re-trigger on scrolling back up and down
     (unchanged behavior).

3) TRUST BAR (mechanism APPROVED — copy DRAFT)
   "[Number] Locations Across Florida  |  Authorized Kubota Dealer — Sales & Rentals
   |  Certified Service Technicians  |  Live Inventory, Updated Daily"
   Render as 4 evenly-spaced items with small icons (layout unchanged from v1).

4) HOW IT WORKS (4-step horizontal process, numbered) — DRAFT copy
   Headline: "From Browsing to Keys in Hand — Four Steps."
   1. Tell Us What You Need — Search inventory yourself, or tell our AI Advisor the
      job (acreage, terrain, budget, buy or rent) and get matched to real units in
      stock.
   2. See It Before You Drive to It — Full 360° walkaround, spec sheet, hours and
      condition for pre-owned units, and live availability by location.
   3. Get Your Real Number — Instant price estimate — or rental rate — and financing
      pre-qualification, no obligation, no dealership visit required.
   4. Reserve or Schedule a Visit — Hold the unit online and book a test drive,
      delivery, pickup, or rental start date. A local specialist confirms every
      detail before you sign anything.
   Layout: 4 columns on desktop collapsing to a vertical stack on mobile (unchanged).

5) AI EQUIPMENT ADVISOR (mechanism APPROVED — copy mostly UNCHANGED, one DRAFT swap)
   Headline: "Meet the Advisor That's Always on the Lot." (APPROVED, UNCHANGED)
   Body: "Not everyone shopping for a tractor at 9pm wants to leave a voicemail. Our
   AI Equipment Advisor checks real-time inventory across every location, compares
   specs side by side, estimates payments or rental rates, and books a visit or
   service appointment, then hands off to a local specialist the moment you're ready
   to talk to a person." (DRAFT — added "or rental rates")
   Chat-widget mockup exchange (DRAFT — now shows a buy-vs-rent question):
     YOU: "I need something for about 5 acres of pasture and brush hogging — is it
     better to buy or rent for a one-time job?"
     ADVISOR: "For a one-time job, renting usually makes more sense. We have a
     Kubota L-series tractor with a rotary cutter available to rent at our
     [Location] store this week — want to see the rate, or compare it to buying a
     BX2380?"
   CTA button: "Ask Our AI Advisor" (APPROVED, UNCHANGED)
   Layout: two columns on desktop (unchanged).

6) INVENTORY HIGHLIGHTS — real 360° viewer (renamed from "Every Machine, Every
   Angle"; mechanism APPROVED — content UPDATED to match confirmed inventory)
   Headline: "See Every Angle, Every Spec, Before You Ever Step on the Lot."
   (APPROVED, UNCHANGED)
   Body: "Every unit on a Blue Water lot, new or pre-owned, for sale or for rent,
   gets the same treatment: a full 360° interactive walkaround, complete specs
   pulled straight from our inventory system, and a live status tag so you know
   exactly what's available and where." (DRAFT — added "for sale or for rent")
   Feature list (checklist icons, DRAFT — one line updated):
   - 360° interactive walkaround for every new and pre-owned unit
   - Full specs: horsepower, PTO, hours, attachments, and compatible implements
   - Live availability by location — for sale AND for rent — no "call to confirm"
   - Compare up to 3 units side by side
   - Save units to a list and share it with your team or your lender
   CTA button: "View Full Inventory" (APPROVED, UNCHANGED)

   Build 3–4 interactive highlight cards per PROVIDED ASSETS above, spanning at least
   two of the CONFIRMED INVENTORY groups, each using the 360°-viewer anatomy but shown
   with a clearly labeled "360° view coming soon" placeholder state until real frames
   exist. Alongside them, show 2–3 additional sample inventory cards using the same
   card anatomy with a static image placeholder and the same "coming soon" badge,
   pulled from CONFIRMED INVENTORY groups not already covered by the 3–4 highlights,
   so the full grid reflects what BWEG actually carries, not generic filler.

7) SHOP BY CATEGORY (icon/image grid) — content REPLACED
   Headline: "Find the Right Equipment for the Job" (APPROVED, UNCHANGED)
   Four tiles — replaces v1's six generic tiles, which didn't match the confirmed
   inventory:
   - Tractors — sub-compact, compact, and utility, for property, hobby farms, and
     acreage work
   - Mowers — diesel and gas, residential to commercial zero-turns and stand-ons
   - Utility Vehicles — job-site and property transport
   - Attachments — loaders, backhoes, and implements built to match the machine
   Each tile: background image placeholder + label, hover state darkens image and
   reveals a "Shop Now →" link (interaction unchanged from v1).

8) RENTAL FLEET — NEW SECTION
   Headline (DRAFT): "Need It for a Day, a Week, or a Season?"
   Body (DRAFT): "Not every job needs a purchase. Browse what's available to rent
   right now, from compact tractors to attachments, with the same live availability
   and transparent pricing as our inventory for sale."
   Layout: mirrors Shop by Category's tile anatomy (7 above), but each tile is a
   rental category placeholder using the same four confirmed groups ("Tractors,"
   "Mowers," "Utility Vehicles," "Attachments") rather than an invented equipment
   type — keep specific rental units bracketed until the client confirms the rental
   fleet (see RENTALS above). Visually distinguish this section from Shop by
   Category so a visitor immediately reads "this row is for rent."
   CTA button (DRAFT): "Explore Rentals"

9) LOCATIONS (APPROVED, UNCHANGED)
   Headline: "One Team, Every Location"
   Body: "Blue Water Equipment Group connects Kubota dealerships across Florida into
   a single, dependable network, so the part or machine you need is never as far away
   as it looks."
   CTA button: "Find a Location Near You"
   Layout: Florida map illustration/placeholder with location pin markers, simple
   location cards (city name + "View Inventory" link).

10) PARTS, SERVICE & FINANCING (3-column feature block) — DRAFT copy
    Headline: "Parts, Service, and Financing — Handled Right" (APPROVED, UNCHANGED)
    - Genuine Kubota parts, in stock and ready
    - Factory-trained technicians who know the equipment
    - Financing built around your season — whether you're buying or renting (DRAFT —
      added "whether you're buying or renting")
    CTAs: "Schedule Service" (primary) and "Check My Rate" (secondary/ghost)
    (APPROVED, UNCHANGED)

11) CREDIBILITY CLOSE (full-width dark navy-900 band) (APPROVED, UNCHANGED)
    Headline: "Built on a Track Record, Not Promises"
    Body: "Blue Water Equipment Group is backed by Blue Water Advisors, a firm with a
    track record of building industry-leading businesses for the long term. That
    means real investment in inventory, people, and the communities we serve, not
    just this quarter, but for years to come."
    Treat this like a quiet, confident statement — large type, lots of surrounding
    space, no clutter, no CTA button here.

12) FINAL CTA (full-width band, navy-800 or accent-orange background) — DRAFT copy
    Headline: "Ready to Find Your Machine?"
    CTAs: "Search Inventory" (primary), "Explore Rentals" and "Find Your Location"
    (secondary, side by side) — DRAFT, added "Explore Rentals" as a third CTA.

13) FOOTER (navy-900) — structure UPDATED
    Nav columns: Buy (Inventory, Other Brands [pending], Used Equipment, Specials),
    Rentals (Rental Equipment, Rental Attachments, Rental Policy), Support (Parts,
    Service, Financing, Contact), Company (About, Careers, Locations), Legal
    (Privacy Policy, Terms & Conditions, Rental Terms & Conditions).
    Location list, phone, social icons, "© 2026 Blue Water Equipment Group. All
    Rights Reserved."

ASSET INTEGRATION — implementation notes for the hero and highlight sequences
(mechanism approved in v1, unchanged; the frame content itself is placeholder,
pending production — see PROVIDED ASSETS)

Hero scroll-scrub (canvas):
- Spec to build against: ~80 frames, 1280×720, one full establishing pass — matches
  the technical spec used in v1's concept pitch, kept here as the production target
  even though no actual frame files are attached to this prompt (see PROVIDED
  ASSETS). Preload all frames into an array of Image objects before enabling scroll
  scrubbing; show a minimal loading state (e.g. the first frame as a static image,
  or a brief branded loader) until preload completes so scrubbing never draws a
  blank frame.
- Frame selection: on scroll, compute progress = clamp((scrollY within the hero's
  outer container) / (outer container height − viewport height), 0, 1), then
  frameIndex = Math.floor(progress * (totalFrames - 1)) [0-indexed]. Draw that frame
  to the canvas.
- Throttle the scroll handler with requestAnimationFrame (do not run the draw call
  synchronously on every scroll event) to avoid jank.
- Canvas sizing: match canvas pixel dimensions to the container size ×
  devicePixelRatio for sharpness, and use a cover-fit calculation (source is
  1280×720 / 16:9) so the footage crops sensibly instead of stretching on non-16:9
  viewports.
- Reduced motion fallback: if prefers-reduced-motion is set, skip scroll-scrubbing
  entirely — show a single representative static frame from roughly the midpoint of
  the sequence, with the headline, subhead, and CTAs already visible, no scrub
  behavior.

360° product viewer(s) (drag/swipe):
- Spec to build against: ~60 frames per product, same production target as v1, even
  though no actual frame files are attached (see PROVIDED ASSETS). Preload all
  frames per product on section entry (e.g. via IntersectionObserver when the card
  scrolls near the viewport) rather than on initial page load, to keep first paint
  fast — show a lightweight spinner/skeleton, or the "coming soon" placeholder state,
  on the card until ready.
- Interaction: on pointerdown, track horizontal pointer movement. Map every ~6–10px
  of horizontal drag to one frame step (tune to taste). Wrap frame index modulo the
  frame count in both directions so the rotation feels continuous. Support both mouse
  drag and touch swipe (pointer events cover both).
- On load (before first interaction), auto-play a single slow rotation once (e.g.
  ~4–6 seconds for the full sequence), then stop on the starting frame and wait for
  interaction. Do not loop indefinitely.
- Show a subtle "drag to rotate" hint (icon + text) that fades out after the user's
  first drag/swipe on that card.
- Reduced motion fallback: skip the auto-play rotation; show the first frame as a
  static image, but keep drag-to-rotate available.
- Cursor: use `grab` / `grabbing` cursor states on desktop.
- Each of the 3–4 highlight cards gets its own independent viewer instance and frame
  state — don't share state across cards.

TECHNICAL REQUIREMENTS (approved in v1, unchanged)
- Single responsive HTML file, mobile-first, no horizontal scroll at any breakpoint.
- Real accessibility: 4.5:1 text contrast minimum, visible focus states on every
  interactive element, alt text on all images (including a text alternative for the
  hero sequence and each 360° viewer), semantic headings (one h1, sequential
  h2/h3), keyboard-operable chat widget, CTAs, and 360° viewers (arrow keys should
  step the rotation when a viewer is focused).
- The AI chat widget can remain a visual/interactive mockup (it doesn't need to be
  wired to a real model) — but it should look and behave like real product UI.
- Respect prefers-reduced-motion everywhere, per the fallbacks specified above.
- Do not invent real facts: keep [Number] and other bracketed placeholders visible
  rather than making up a location count, address, phone number, rental rate, or
  rental unit. This now explicitly covers the Rental Fleet section (8) — no invented
  rental inventory.

DELIVERABLE
Produce the full desktop-width homepage first, matching PAGE STRUCTURE above, with
the hero scroll-scrub and the 360° viewer(s) fully working against placeholder frame
sets per PROVIDED ASSETS, ready to receive real footage once it's produced. This
round is for CONTENT
approval — make every DRAFT block easy to spot at a glance (e.g. a small dev-only
"DRAFT" tag or a distinct outline) so the client's first feedback pass can target
content and structure, not visual polish. After that, note (in a short comment
block, not in the visible page) any places the layout would need to change
materially for mobile beyond standard stacking, same as v1.
```
