# Blue Water Equipment Group: prompt de diseño, página de Company (v1)

Cómo usarlo: pegá el bloque de abajo en una conversación nueva de Claude (o Claude Design), junto con el prompt del home (`BWEG_Design_Prompt_v2.md`), para que comparta paleta, tipografía, header, footer, y el AI Advisor funcional.

**Qué es esto:** la página interna a la que lleva "About Us" dentro del dropdown de Company del nav. No hay historia de la empresa, nombres de directivos, ni vacantes confirmadas todavía, así que todo eso queda como placeholder marcado, no inventado. "Locations" del dropdown apunta a la sección Locations del home (ancla), no a esta página; "Careers" vive como una sección corta dentro de esta misma página, no como URL propia por ahora.

---

```
ROLE
You are the same senior brand and product designer/frontend engineer from the
homepage build. Build the Company (About Us) page for Blue Water Equipment Group
(BWEG), as another page in the same site. Reuse the brand tokens, typography,
header and footer defined in BWEG_Design_Prompt_v2.md exactly. Do not restate or
redesign them here; this prompt only covers what's specific to this page.

PAGE PURPOSE
This is the page the nav's Company dropdown's "About Us" item leads to. No company
history, leadership names, or career listings are confirmed yet. Build the page
using only what's already confirmed elsewhere in this project (BWEG's positioning,
its backing by Blue Water Advisors, its dealer model), and mark everything else
clearly as placeholder or pending, never invented as if it were real.

PAGE STRUCTURE
1) Header and nav: same as the homepage, "Company" shown active (About Us item).
2) Page header band: headline "Built to Last, Not Just to Sell," subhead reusing
   the homepage's positioning language (institutional backing, a real accountable
   dealer), breadcrumb "Home / Company."
3) About Us: 2-3 short paragraphs using only confirmed facts: BWEG is a Kubota
   dealer group backed by Blue Water Advisors (a private equity firm investing in
   real-asset, essential industries), sells and rents Kubota equipment across [2]
   locations in [State], and provides parts, service, and financing. Do not add a
   founding year, an origin story, or specific milestones; where the copy would
   naturally want one, leave a bracketed note instead (e.g. "[Founding story
   pending from client]").
4) Leadership / Team: 2-3 placeholder profile card slots (photo placeholder + "[Name
   pending], [Title pending]"), with a visible note above them: "Team bios coming
   soon." Don't invent names, titles, or headcounts.
5) Careers: a short section, not a separate page. Headline "Join the Team," body
   ("[Open positions pending. Check back soon, or reach out directly.]"), one CTA
   ("Contact Us About Careers") linking to the footer's contact form (see
   BWEG_Design_Prompt_v2.md's FOOTER section) rather than a separate careers portal.
6) Trust close: reuse the homepage's Credibility Close band tone and copy exactly
   (same headline, "Built on a Track Record, Not Promises," same body), so this
   page reinforces the same message rather than introducing a new claim.
7) Locations link-through: a single line and link ("See all our locations →")
   pointing to the homepage's Locations section (an anchor link, e.g. /#locations),
   rather than duplicating the location grid on this page, consistent with cutting
   repeated information per the client's last feedback round.

TECHNICAL REQUIREMENTS
- Same responsive, mobile-first, single-file approach as the homepage. No
  horizontal scroll at any breakpoint.
- Accessibility matches the homepage prompt: 4.5:1 contrast minimum, visible focus
  states, alt text on every image/placeholder, semantic headings.
- Do not invent real facts: no fabricated founding year, history, leadership names,
  headcount, or job openings. Every placeholder must visibly read as pending, not
  as real content.

DELIVERABLE
Produce the full desktop-width Company page first, matching PAGE STRUCTURE above.
Use the same DRAFT tagging convention as the homepage prompt for any new copy, and
keep every unconfirmed fact bracketed and visible as a placeholder. After that,
note in a short comment block any mobile layout adjustments needed beyond standard
stacking.
```
