# Blue Water Equipment Group: prompt de diseño del home (v2)

Cómo usarlo: abrí una conversación nueva de Claude (o Claude Design), pegá todo el bloque de abajo tal cual está en inglés, y adjuntá:
- `BWEG_Kubota_Content_Structure_v1.xlsx`, como referencia de las categorías y modelos reales confirmados.
- `BWEG_Equipment_Data_v1.json`, las 28 unidades reales en formato que el buscador y los filtros pueden leer directamente.
- La carpeta `Hero Sequence - optimized` (61 fotos, ~9 MB): es la secuencia real y definitiva del hero, ya lista para usar.
- No hace falta adjuntar secuencias para los productos destacados todavía. Esas 3–4 siguen pendientes.

Cuando construyas Equipment, Rentals, Service, Financing, Parts o Company, adjuntá también el prompt de esa página específica (`BWEG_Design_Prompt_Equipment_v1.md`, `_Rentals_v1.md`, `_Services_v1.md`, `_Financing_v1.md`, `_Parts_v1.md`, `_Company_v1.md`) junto con este archivo del home, para que el modelo comparta marca, header, footer, y ahora también el AI Advisor funcional.

**Feedback de esta ronda (2026-09-07), aplicado abajo:**
- Hero: se quitan los dos botones "Search Inventory" / "Explore Rentals" que aparecían junto a la barra de búsqueda. Queda solo la barra (categoría + ubicación + toggle Buy/Rent + buscar), y tiene que llevar de verdad a Equipment o a Rentals con esos filtros aplicados.
- Se quita la sección "Shop by Category" completa: es redundante con los filtros que ya están en la página de Equipment.
- "Inventory Highlights" queda igual, pero el botón "View Full Inventory" tiene que llevar de verdad a la página de Equipment.
- Rental Fleet queda igual en estructura, pero cada tarjeta ahora tiene su propio espacio de foto de ejemplo (no solo un fondo). Se quitan las cinco páginas de apoyo de Rentals (crédito, protección, política, contacto, attachments); en su lugar, "Explore Rentals" lleva a una página interna nueva y más simple: filtro por categoría (reutilizando el de Equipment) más un formulario de solicitud de renta. Ver `BWEG_Design_Prompt_Rentals_v1.md`.
- Locations: por ahora son 2 ubicaciones, no 14 (ese número era de floridacoasteq.com, no de BWEG). Dejamos el estado entre corchetes: el material anterior de este proyecto decía Florida, pero este feedback menciona South Carolina. Quedó marcado como pendiente de confirmar, no lo asumí en ningún sentido.
- "Parts, Service & Financing": el botón "Schedule Service" ahora lleva a una página interna nueva de Service. Ver `BWEG_Design_Prompt_Services_v1.md`.
- Se quita la sección "Final CTA" completa (la de "Ready to Find Your Machine?"): redundante con las otras secciones que ya tienen sus propios CTAs.
- Footer: se simplifica más. Queda newsletter ("Stay Connected..."), logo, botón Call Us, un formulario de contacto corto (en vez de un botón que no hace nada), Privacy Policy, Terms & Conditions, horario, y el copyright. Se quita el directorio de ubicaciones del footer (ya está en la sección Locations del home) y el buscador chico.

**Segunda ronda de feedback (mismo día), tres páginas nuevas más el AI Advisor:**
- "Apply For Financing" (nav): página simple, invita a financiar y tiene un formulario de contacto/solicitud. Ver `BWEG_Design_Prompt_Financing_v1.md`.
- "Parts" (nav): sin catálogo real todavía, así que son placeholders organizados por los 4 grupos confirmados, más un formulario para pedir una parte. Ver `BWEG_Design_Prompt_Parts_v1.md`.
- "Company" (nav, About Us): sin contenido real todavía, placeholders marcados como tal (nada de historia, nombres de directivos, ni vacantes inventadas). Ver `BWEG_Design_Prompt_Company_v1.md`.
- AI Advisor: ahora es funcional de verdad, no un mockup. Responde preguntas reales sobre equipos (usando `BWEG_Equipment_Data_v1.json`) y sobre la compañía (ubicaciones, horario, financiamiento, renta, partes), por coincidencia de palabras clave contra esos datos, no una llamada real a un modelo de lenguaje (eso necesitaría una API y backend, fuera del alcance de una página estática de Claude Design). Igual se siente como un asesor real porque cubre bastantes preguntas típicas. Ver el detalle en AI ADVISOR IMPLEMENTATION dentro del prompt.

Esta sigue siendo una revisión de contenido y estructura, no de marca: la paleta, la tipografía, el hero y el motion se mantienen intactos.

---

```
ROLE
You are a senior brand and product designer/frontend engineer. Design and build a
high-fidelity, production-quality homepage for an industrial equipment dealer group.
Output a single, responsive HTML file (Tailwind CSS via CDN and vanilla JS is fine)
that looks like a real, polished product, not a template. Prioritize craft: spacing
rhythm, motion that has a purpose, and typography that feels confident, not generic
AI output. This is a content and structure revision of an already-approved design.
The brand direction and motion mechanisms below are unchanged and approved; what
changed is the company's positioning, the site's category structure, the section
copy, and (this round) which sections exist at all and where the CTAs link. Build
the full page fresh from this brief rather than diffing against an earlier version.

COMPANY CONTEXT
Blue Water Equipment Group (BWEG) is the new brand for a group of Kubota dealerships,
recently acquired and being consolidated under one name by Blue Water Advisors, a
private equity firm that invests in real-asset, essential industries. BWEG is a
dealer, not a manufacturer: it sells and rents Kubota tractors, mowers, utility
vehicles, and attachments, and provides parts, service, and financing across [2]
locations in [State]. The state is bracketed on purpose: earlier project material
said Florida, but the client's latest feedback mentioned South Carolina. Confirm
before publishing; don't guess.

The client shared floridacoasteq.com, an existing Kubota Florida dealer, and asked
for BWEG's site structure to closely mirror it, almost site-for-site: nav order and
grouping, and the footer anatomy. Follow that structure for navigation and layout,
not for content: BWEG's own confirmed inventory, location count, and the sections
below (some now simplified from FCE's fuller version, per client feedback) take
priority over matching FCE section-for-section. BWEG's own differentiators
(positioning, brand direction, the AI Advisor) still apply on top of that structure.

POSITIONING (what the design needs to communicate, not just the copy)
- Institutional backing and long-term stability (borrowed from the parent company's
  restrained, confident brand: not flashy, not overpromising).
- A real, accountable local dealer that sells and rents, stocks genuine Kubota parts,
  and services what it sells. This is the trust bridge Kubota's own network
  messaging leans on ("your local, accountable Kubota dealer").
- Essential, tangible work: equipment that plants, builds, and maintains real land,
  not a lifestyle product. Avoid soft lifestyle stock photography; equipment should
  look capable and in-use.
- A modern, fast digital buying and renting experience that most competitors in this
  category (small, single-shop dealers) do not offer: live inventory, 360° views, an
  AI sales advisor, real specs, and real availability instead of "call for details."

CONFIRMED INVENTORY (use this, not invented categories)
The client provided a wholegoods audit of what's actually in stock, already mapped
into an approved structure (also available as structured data in the attached
BWEG_Equipment_Data_v1.json). Use these four groups everywhere the design shows
equipment categories: nav, Equipment page filters, and any featured/highlight cards.
Do not invent categories BWEG doesn't currently stock (e.g. Construction equipment).

  TRACTORS (8 units)
    Sub-Compact: BX Series (includes one BX23S Tractor-Loader-Backhoe combo unit)
    Compact: B Series, L Series, LX Series
    Utility: MX Series

  MOWERS (14 units)
    Diesel: ZD Series
    Gas, Residential: Z200 Series
    Gas, Prosumer: Z400 Series
    Gas, Commercial: Z700 Series
    Gas, Commercial (Grand): ZG Series
    Stand-On: SZ Series

  UTILITY VEHICLES (1 unit)
    RTV-X Series

  ATTACHMENTS (5 units)
    Loaders: LA Series
    Backhoes: BH Series

RENTALS (structure simplified per client feedback)
Rentals is a top-level nav link that leads to a real internal page (see
BWEG_Design_Prompt_Rentals_v1.md), not a dropdown. An earlier draft modeled this
after floridacoasteq.com's full pattern (a live filterable catalog plus five
supporting pages: Credit Application, Protection Program, Policy, Contact,
Attachments). The client asked to simplify: drop the five supporting pages, and for
now filter by the same four confirmed groups used everywhere else on the site
(Tractors, Mowers, Utility Vehicles, Attachments) rather than a separate
rental-specific catalog. In place of a per-unit rental checkout flow, the page has
one request form: the visitor picks what they want to rent and submits a request,
and BWEG follows up directly. The client has not yet provided which specific units
are available to rent (as opposed to sale-only); keep specific rental unit names,
categories, and counts as bracketed placeholders until confirmed. Do not invent
rental inventory or rates.

PROVIDED ASSETS

1. Hero. A real, final image sequence is attached: `Hero Sequence - optimized/`, 61
   frames, numbered 01.jpg to 61.jpg, 1280×720, about 9MB total. Build the
   scroll-scrubbed hero directly against these frames (see HERO in PAGE STRUCTURE and
   ASSET INTEGRATION for the exact algorithm).

2. Inventory Highlights. No sequences are attached for this section yet. Reserve
   space for 3–4 highlighted products, not more, each with a real photo or a 360°
   turntable sequence once we shoot them. Pick the 3–4 from CONFIRMED INVENTORY
   above, spanning at least two of the four groups (e.g. one Tractor, one Mower, one
   Utility Vehicle or Attachment), so the highlights reflect what BWEG actually
   carries. Build each highlight card with the same 360°-viewer anatomy (drag/swipe,
   auto-play once, see ASSET INTEGRATION) so it's ready to receive real frames, but
   show a "360° view coming soon" placeholder state until footage exists. Don't name
   or imply a specific real model on any placeholder card until we confirm which 3–4
   units are being shot.

3. Real unit data. `BWEG_Equipment_Data_v1.json`, the 28 confirmed units in a
   machine-readable format (group, subcategory, series, display name, category
   badge, fuel/drivetrain, deck or loader size, configuration notes, availability).
   Use it wherever real per-unit data is needed on the home page (Inventory
   Highlights cards, for instance), so content stays in sync with the Equipment page.

Any inventory card shown beyond the 3–4 highlighted placeholders is sample data and
should show "360° view coming soon" instead of implying a viewer that doesn't exist
for it.

BRAND DIRECTION (unchanged)

Color palette (use as CSS variables / Tailwind theme extension):
- --navy-900: #082238   (deep navy: footer, dark sections, header on scroll)
- --navy-800: #0B2F4E   (primary brand navy: headings, primary UI chrome)
- --blue-600: #1B5C8C   (secondary blue: links, secondary buttons, icons)
- --accent-orange: #FF5C00  (Kubota-adjacent accent, for primary CTAs, live-
  availability badges, and key highlights only. Use sparingly; this is the "energy"
  color against an otherwise restrained palette. Confirm the exact brand-approved hex
  against Kubota dealer co-op marketing guidelines before production use.)
- --success-green: #1E8E5A  (in-stock / live availability indicator)
- --neutral-50: #F7F8F9  (page background)
- --neutral-0: #FFFFFF   (card/surface background)
- --ink-900: #1F2933     (primary body text)
- --ink-600: #5B6570     (secondary/muted text)
- --border: #E1E5E9      (dividers, card borders)

Typography:
- Headings: "Space Grotesk," bold and slightly geometric. Reads modern-industrial,
  not corporate-boring. Weights 600–700.
- Body: "Inter," highly readable at small sizes, neutral personality so it doesn't
  compete with the headline font. Weights 400–500.
- Base body size 16px minimum, line-height 1.5–1.6, headline line-height ~1.1–1.2.
- Use a consistent type scale: 14 / 16 / 18 / 22 / 28 / 36 / 48 / 60px.

Visual style:
- Clean, editorial, restrained: generous whitespace, not a busy dealership layout.
- Photography direction outside the hero/360 sequences: equipment shot in real
  outdoor working environments (pasture, construction sites, turf, and similar), in
  golden-hour or overcast natural light, not studio-white. Exact regional imagery
  (which crops, which terrain) depends on confirming BWEG's state, see COMPANY
  CONTEXT. Where real photography isn't available, use labeled placeholder blocks
  with a short art-direction caption instead of generic stock imagery or random
  gradients. This also applies to the Rental Fleet section (7 below).
- Rounded corners on cards (8–12px), soft single-direction shadows (no heavy drop
  shadows), 1px hairline borders in --border for definition.
- Icons: simple line icons (Lucide-style), never emoji.

MOTION PRINCIPLES (unchanged)
- Micro-interactions 150–300ms, ease-out on enter, ease-in on exit.
- Scroll-reveal sections (everything except the hero) should fade + translate-y(16px)
  → 0, staggered 30–50ms per card in a grid (inventory cards, category tiles).
- The hero is the one place motion is scroll-*driven* rather than scroll-*triggered*.
  See HERO and ASSET INTEGRATION below.
- Live-availability badges (green dot) get a slow, subtle pulse to read as "live
  data," not decorative animation.
- No animation should block interaction or shift layout (use transform/opacity only,
  except the hero canvas and 360 viewers, which intentionally redraw pixel content).
- Everything must respect prefers-reduced-motion: see the fallback behavior specified
  for the hero and the 360 viewers in ASSET INTEGRATION.

PAGE STRUCTURE
Build these sections in this order. Every block is tagged so the client's feedback
pass can target content precisely:
  (APPROVED, UNCHANGED): keep exactly as-is, not open for this round of feedback.
  (DRAFT): new or rewritten copy, proposed for this round, expected to change.
Bracketed items like [Number] are placeholders; keep the brackets visible in the
design as a placeholder state.

1) HEADER / NAV (sticky, transitions from transparent-on-hero to solid navy-900 on
   scroll). Nav order and grouping verified live against floridacoasteq.com (real
   nav, not just its sitemap): 7 top-level items, 3 of them dropdowns.
   - Logo (placeholder wordmark: "BLUE WATER EQUIPMENT GROUP")
   - Nav, in this order:
     1. Equipment ▾ (dropdown: BWEG's four confirmed groups, Tractors, Mowers,
        Utility Vehicles, Attachments, same as CONFIRMED INVENTORY above). Renamed
        from "Inventory" in the earlier draft, to match FCE's nav label;
        "Inventory" still reads fine as ordinary copy elsewhere (e.g. page titles),
        just not as this nav item's label.
     2. Apply For Financing (direct link, own page, not nested under Equipment; see
        BWEG_Design_Prompt_Financing_v1.md)
     3. Rentals (direct link, not a dropdown; goes straight to the Rentals page, see
        RENTALS above and section 7)
     4. Service (direct link; goes to the internal Service page, see section 9 and
        BWEG_Design_Prompt_Services_v1.md)
     5. Parts ▾ (dropdown: Order Parts, Parts Request; both point to the same
        internal Parts page, see BWEG_Design_Prompt_Parts_v1.md, since there's one
        placeholder catalog and one order form today, not two separate flows)
     6. Company ▾ (dropdown: About Us, Locations, Careers). Locations moves here
        from its own top-level slot in the prior draft, matching FCE's structure.
        Multiple locations still gets its own home-page section (8, unchanged) so
        it doesn't lose visibility by moving in the nav. "About Us" goes to the new
        internal Company page, see BWEG_Design_Prompt_Company_v1.md; "Locations"
        can link to section 8 on the home page (an anchor link) rather than a
        separate page, since that section already covers it; "Careers" can be a
        short section inside the Company page rather than its own URL for now.
     7. Contact (direct link)
   - No separate top-level "Other Brands" item: live-checking FCE's actual nav shows
     no such section, only Equipment/Parts/Company as dropdowns. BWEG's inventory is
     100% Kubota, so there's nothing to nest there today.
   - Persistent small "Ask Our AI Advisor" chat icon/button, always visible
     (APPROVED, UNCHANGED)
   - Phone number and primary CTA button ("Search Inventory"), linking to the
     Equipment page

2) HERO: scroll-scrubbed sequence (mechanism APPROVED, UNCHANGED; copy DRAFT; frame
   sequence CONFIRMED, 61 real frames attached, see PROVIDED ASSETS)
   This section is pinned (position: sticky) inside a taller scroll container so that
   scrolling through it plays the attached hero sequence like a scrubbed video, with
   copy revealing in sync with specific points in the sequence. See ASSET INTEGRATION
   for the exact algorithm. Reveal points map to specific frames of the 61:
   - Frames 1–12 (0–20%): establishing shot, no text on screen (unchanged).
   - Frames ~13–24 (~20–40%, DRAFT headline): "The Machine You Need. In Stock or
     Ready to Rent."
   - Frames ~25–40 (~40–65%, DRAFT subhead): "Search live inventory across every
     Blue Water location, see every unit in 360°, and buy or rent in minutes
     without ever picking up the phone."
   - Frames ~41–52 (~65–85%): the inline equipment-search bar fades/slides in, and
     that's the only interactive element at this reveal point: a Buy/Rent toggle, a
     category dropdown (the four confirmed groups), a location dropdown ([2]
     locations, pending confirmation), and a search button. The separate "Search
     Inventory" and "Explore Rentals" CTA buttons from the earlier draft are
     removed here: they duplicated what the search bar itself does, per client
     feedback. This bar must be functional, not decorative: submitting it navigates
     to the Equipment page (Buy) or the Rentals page (Rent) with the selected
     category and location applied as filters (e.g. a `?category=Tractors`-style
     query param, matching the pattern confirmed live on floridacoasteq.com).
   - Frames ~53–61 (~85–100%): composition holds, then releases into the trust bar
     (unchanged).
   - Once released, the hero should not re-trigger on scrolling back up and down
     (unchanged behavior).

3) TRUST BAR (mechanism APPROVED; copy DRAFT)
   "2 Locations Across [State]  |  Authorized Kubota Dealer for Sales & Rentals  |
   Certified Service Technicians  |  Live Inventory, Updated Daily"
   Render as 4 evenly-spaced items with small icons (layout unchanged). Location
   count corrected from an earlier placeholder to BWEG's actual 2, per the client;
   [State] stays bracketed until confirmed, see COMPANY CONTEXT.

4) HOW IT WORKS (4-step horizontal process, numbered; DRAFT copy)
   Headline: "From Browsing to Keys in Hand."
   1. Tell Us What You Need. Search inventory yourself, or tell our AI Advisor the
      job (acreage, terrain, budget, buy or rent) and get matched to real units in
      stock.
   2. See It Before You Drive to It. Full 360° walkaround, spec sheet, hours and
      condition for pre-owned units, and live availability by location.
   3. Get Your Real Number. Instant price estimate, or rental rate, and financing
      pre-qualification, no obligation, no dealership visit required.
   4. Reserve or Schedule a Visit. Hold the unit online and book a test drive,
      delivery, pickup, or rental start date. A local specialist confirms every
      detail before you sign anything.
   Layout: 4 columns on desktop collapsing to a vertical stack on mobile (unchanged).

5) AI EQUIPMENT ADVISOR (mechanism UPDATED per client feedback: now functional, see
   AI ADVISOR IMPLEMENTATION below; copy mostly UNCHANGED, one DRAFT swap)
   Headline: "Meet the Advisor That's Always on the Lot." (APPROVED, UNCHANGED)
   Body: "Not everyone shopping for a tractor at 9pm wants to leave a voicemail. Our
   AI Equipment Advisor checks real-time inventory across every location, compares
   specs side by side, estimates payments or rental rates, and books a visit or
   service appointment, then hands off to a local specialist the moment you're ready
   to talk to a person." (DRAFT)
   Chat-widget starter exchange, shown once on first open (DRAFT, illustrative; the
   widget must also handle real typed questions per AI ADVISOR IMPLEMENTATION, not
   just replay this one exchange):
     YOU: "I need something for about 5 acres of pasture and brush hogging. Is it
     better to buy or rent for a one-time job?"
     ADVISOR: "For a one-time job, renting usually makes more sense. We have a
     Kubota L-series tractor with a rotary cutter available to rent at our
     [Location] store this week. Want to see the rate, or compare it to buying a
     BX2380?"
   CTA button: "Ask Our AI Advisor" (APPROVED, UNCHANGED). Opens the same chat
   widget that's reachable from the persistent header icon (section 1), so it's one
   shared component, not two separate implementations.
   Layout: two columns on desktop (unchanged).

6) INVENTORY HIGHLIGHTS: real 360° viewer (mechanism APPROVED, content updated to
   match confirmed inventory; structure APPROVED UNCHANGED per client feedback)
   Headline: "See Every Angle, Every Spec, Before You Ever Step on the Lot."
   (APPROVED, UNCHANGED)
   Body: "Every unit on a Blue Water lot, new or pre-owned, for sale or for rent,
   gets the same treatment: a full 360° interactive walkaround, complete specs
   pulled straight from our inventory system, and a live status tag so you know
   exactly what's available and where." (DRAFT)
   Feature list (checklist icons, DRAFT):
   - 360° interactive walkaround for every new and pre-owned unit
   - Full specs: horsepower, PTO, hours, attachments, and compatible implements
   - Live availability by location, for sale and for rent, no "call to confirm"
   - Compare up to 3 units side by side
   - Save units to a list and share it with your team or your lender
   CTA button: "View Full Inventory" (APPROVED, UNCHANGED). Must link to the real
   Equipment page, not a placeholder or dead link, per client feedback.

   Build 3–4 interactive highlight cards per PROVIDED ASSETS above, spanning at least
   two of the CONFIRMED INVENTORY groups, each using the 360°-viewer anatomy but
   shown with a "360° view coming soon" placeholder state until real frames exist.
   Alongside them, show 2–3 additional sample inventory cards using the same card
   anatomy with a static image placeholder and the same "coming soon" badge, pulled
   from CONFIRMED INVENTORY groups not already covered by the 3–4 highlights, so the
   full grid reflects what BWEG actually carries, not generic filler.

7) RENTAL FLEET
   Headline (DRAFT): "Need It for a Day, a Week, or a Season?"
   Body (DRAFT): "Not every job needs a purchase. Browse what's available to rent
   right now, from compact tractors to attachments, with the same live availability
   as our inventory for sale."
   Layout: four tiles, one per confirmed group (Tractors, Mowers, Utility Vehicles,
   Attachments). Each tile has its own dedicated image placeholder, a real photo
   slot captioned with what should be shot for that category (e.g. "Photo pending:
   a Tractor available to rent"), not just a background treatment; plus the group
   label and a hover state that darkens the image and reveals a "Rent Now →" link.
   Visually distinguish this row from the rest of the page (a different section
   background, for instance) so a visitor immediately reads "this row is for rent."
   Clicking a tile or the CTA leads to the internal Rentals page (see RENTALS above
   and BWEG_Design_Prompt_Rentals_v1.md): a category filter reusing the same four
   groups, plus a rental request form. Keep specific rental units bracketed until
   the client confirms the fleet.
   CTA button (DRAFT): "Explore Rentals"

8) LOCATIONS (structure APPROVED; count and state UPDATED per client feedback)
   Headline: "One Team, Every Location"
   Body: "Blue Water Equipment Group connects Kubota dealerships in [State] into a
   single, dependable network, so the part or machine you need is never as far away
   as it looks."
   CTA button: "Find a Location Near You"
   Layout: [State] map illustration/placeholder with 2 location pin markers, and 2
   simple location cards (city name + "View Inventory" link). Location count
   corrected to BWEG's actual 2 (the earlier draft's 14 was floridacoasteq.com's own
   count, not BWEG's); exact cities stay [bracketed] pending confirmation, and
   [State] stays bracketed too, see COMPANY CONTEXT for why.

9) PARTS, SERVICE & FINANCING (3-column feature block; DRAFT copy)
   Headline: "Parts, Service, and Financing Handled Right" (APPROVED, UNCHANGED)
   - Genuine Kubota parts, in stock and ready
   - Factory-trained technicians who know the equipment
   - Financing built around your season, whether you're buying or renting
   CTAs: "Schedule Service" (primary) and "Check My Rate" (secondary/ghost)
   "Schedule Service" must link to the real internal Service page (see
   BWEG_Design_Prompt_Services_v1.md). "Check My Rate" must link to the real
   internal Financing page (see BWEG_Design_Prompt_Financing_v1.md); it's no
   longer a placeholder now that financing is scoped.

10) CREDIBILITY CLOSE (full-width dark navy-900 band) (APPROVED, UNCHANGED)
    Headline: "Built on a Track Record, Not Promises"
    Body: "Blue Water Equipment Group is backed by Blue Water Advisors, a firm with a
    track record of building industry-leading businesses for the long term. That
    means real investment in inventory, people, and the communities we serve, not
    just this quarter, but for years to come."
    Treat this like a quiet, confident statement: large type, lots of surrounding
    space, no clutter, no CTA button here.

11) FOOTER (navy-900; simplified further per client feedback)
    - Newsletter signup band: headline ("Stay Connected With Blue Water Equipment
      Group"), email field, an email-updates opt-in checkbox pair, an SMS opt-in
      checkbox pair, "Sign Up" button. (DRAFT copy, mechanism APPROVED as a real
      form, not decorative; the client confirmed this part works well as-is.)
    - Logo + one-line tagline (DRAFT, BWEG's own positioning), a "Call Us" button
      (tel: link to BWEG's main number), and a short inline contact form (Name,
      Email, Message, "Send" button) in place of a plain "Contact" button that goes
      nowhere, so a visitor can actually reach out directly from the footer.
    - Bottom row: social icons (whichever platforms BWEG actually has; don't invent
      accounts), "Privacy Policy" and "Terms & Conditions" links, a short hours
      note ("Mon-Fri [hours]. Weekend hours vary by location."), "© 2026 Blue Water
      Equipment Group."
    - Dropped per client feedback: the location-directory grid (locations already
      have their own home-page section, 8 above, so repeating the list here was
      redundant) and the small footer search box. No footer nav columns either,
      matching floridacoasteq.com's real footer.

ASSET INTEGRATION: implementation notes for the hero and highlight sequences
(mechanism unchanged). The hero sequence is real and attached; the highlight-card
sequences are still placeholder, pending production. See PROVIDED ASSETS.

Hero scroll-scrub (canvas):
- Source: `Hero Sequence - optimized/01.jpg` through `61.jpg`, 61 frames, 1280×720,
  the real attached hero sequence (see PROVIDED ASSETS). Preload all 61 frames into
  an array of Image objects before enabling scroll scrubbing; show a minimal loading
  state (e.g. the first frame as a static image, or a brief branded loader) until
  preload completes so scrubbing never draws a blank frame.
- Frame selection: on scroll, compute progress = clamp((scrollY within the hero's
  outer container) / (outer container height − viewport height), 0, 1), then
  frameIndex = Math.floor(progress * 60) [0-indexed across 61 frames]. Draw that
  frame to the canvas.
- Throttle the scroll handler with requestAnimationFrame (do not run the draw call
  synchronously on every scroll event) to avoid jank.
- Canvas sizing: match canvas pixel dimensions to the container size ×
  devicePixelRatio for sharpness, and use a cover-fit calculation (source is
  1280×720 / 16:9) so the footage crops sensibly instead of stretching on non-16:9
  viewports.
- Reduced motion fallback: if prefers-reduced-motion is set, skip scroll-scrubbing
  entirely; show frame 30 (roughly the midpoint) as a static image, with the
  headline, subhead, and CTAs already visible, no scrub behavior.

360° product viewer(s) (drag/swipe):
- Spec to build against: ~60 frames per product, even though no frame files are
  attached yet (see PROVIDED ASSETS). Preload all frames per product on section
  entry (e.g. via IntersectionObserver when the card scrolls near the viewport)
  rather than on initial page load, to keep first paint fast; show a lightweight
  spinner/skeleton, or the "coming soon" placeholder state, on the card until ready.
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
  state. Don't share state across cards.

AI ADVISOR IMPLEMENTATION (new, per client feedback: make the widget functional)
The AI Advisor chat widget (header icon, section 1; homepage section 5; and present
on every internal page so a visitor never loses access to it) must give real
answers from real data, not just replay one scripted exchange. Build it as a
rule-based assistant: match the visitor's typed question against embedded data with
keyword/intent matching, and return a real, specific answer. This is not a live
call to a language model (that needs an API key and backend, out of scope for a
static Claude Design page); don't claim or imply otherwise in the UI copy.

- Data sources, both embedded directly in the page's JS (as a `<script>`-embedded
  object/array, same approach as the Equipment page's JSON, no fetch needed if it's
  simpler to inline): the full BWEG_Equipment_Data_v1.json units array, and a small
  COMPANY_INFO object covering: location count (2) and [State] (bracketed pending
  confirmation), hours ("Mon-Fri [hours]. Weekend hours vary by location."), main
  phone number ([Number]), and one-line descriptions of what each of Rentals,
  Financing, Parts, and Service offer, with a link/anchor to that page.
- Intent matching, in priority order: (1) equipment lookup, if the question mentions
  a group name (tractor, mower, utility vehicle, attachment), a series (e.g. "BX",
  "ZD", "RTV-X"), or a model name from the JSON, search `units` for matches and
  reply listing the matching display_name(s), their category_badge, and
  fuel_drivetrain or deck_or_loader_size when present, then invite the visitor to
  view the Equipment page for full specs; (2) rentals, if the question mentions
  "rent"/"rental," reply with a short summary and a link to the Rentals page; (3)
  financing, if it mentions "finance"/"apply"/"rate"/"payment," reply with a short
  summary and a link to the Financing page; (4) parts, if it mentions "part," reply
  with a short summary and a link to the Parts page; (5) service, if it mentions
  "service"/"maintenance"/"repair," reply with a short summary and a link to the
  Service page; (6) locations/hours/contact, if it mentions
  "where"/"location"/"hours"/"open"/"phone"/"call," reply from COMPANY_INFO; (7)
  fallback, if nothing matches, reply honestly that it doesn't have that answer yet
  and offer the footer contact form or the phone number, rather than guessing or
  inventing a fact.
- Implement at least the 10-12 example questions above as verified working paths
  (one per intent, plus a couple of equipment-lookup variations), not just the
  single starter exchange in section 5, so the widget has real, testable coverage
  rather than one canned demo line.
- Conversational tone matching the ADVISOR voice already shown in section 5's
  example (helpful, specific, offers a next step), but every fact in a real reply
  must come from BWEG_Equipment_Data_v1.json or COMPANY_INFO, never invented.
- UI: same chat-widget shell for both entry points (header icon and homepage
  section 5's CTA), a scrollback of the conversation, a text input, and quick-reply
  suggestion chips for 3-4 of the example intents (e.g. "What tractors do you
  have?", "Where are you located?") to make the working coverage discoverable.

TECHNICAL REQUIREMENTS (unchanged)
- Single responsive HTML file, mobile-first, no horizontal scroll at any breakpoint.
- Real accessibility: 4.5:1 text contrast minimum, visible focus states on every
  interactive element, alt text on all images (including a text alternative for the
  hero sequence and each 360° viewer), semantic headings (one h1, sequential
  h2/h3), keyboard-operable chat widget, CTAs, and 360° viewers (arrow keys should
  step the rotation when a viewer is focused).
- The AI chat widget must be functional per AI ADVISOR IMPLEMENTATION above: real
  keyword/intent matching against the embedded equipment and company data, not a
  static mockup or a single scripted exchange.
- Respect prefers-reduced-motion everywhere, per the fallbacks specified above.
- Do not invent real facts: keep [Number], [State], and other bracketed
  placeholders visible rather than making up a location count, address, phone
  number, rental rate, or rental unit. This explicitly covers the Rental Fleet
  section (7) too: no invented rental inventory.
- Every CTA and the hero search bar must link to its real destination (Equipment,
  Rentals, Service, Locations) instead of being decorative. See the note under
  each section above for exactly where it should go.

DELIVERABLE
Produce the full desktop-width homepage first, matching PAGE STRUCTURE above, with
the hero scroll-scrub fully working against the real attached sequence, and the 360°
viewer(s) for the 3–4 highlighted products working against placeholder frame sets per
PROVIDED ASSETS, ready to receive real footage once it's produced. This round is for
content and structure approval. Make every DRAFT block easy to spot at a glance (e.g.
a small dev-only "DRAFT" tag or a distinct outline) so the client's next feedback
pass can target content and structure, not visual polish. After that, note in a
short comment block (not in the visible page) any places the layout would need to
change materially for mobile beyond standard stacking.
```
