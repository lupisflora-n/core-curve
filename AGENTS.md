# AGENTS.md

## Project
Core & Curve is a published static landing page for women’s body makeup / body transformation services.

## Stack
- Static site
- HTML
- CSS
- Vanilla JavaScript
- No framework
- Git managed

## Primary goal
Improve SEO, stability, maintainability, and page performance without breaking the current design, conversion flow, or published site behavior.

## User role
The user wants to focus on final judgment only.
Therefore, make routine implementation decisions autonomously within the rules below.

## Autonomy policy

### Codex may decide and execute without asking
- Add or improve basic SEO tags.
- Add meta description, canonical, OGP, and favicon links.
- Remove `noindex` from production pages when the stated goal is search visibility.
- Add `rel="noopener"` to external links using `target="_blank"`.
- Add missing alt text when the image purpose is clear.
- Create optimized image copies.
- Replace image references with optimized copies only when visual quality and layout are preserved.
- Fix obvious HTML validation issues.
- Fix obvious JavaScript errors.
- Add comments where code is hard to maintain.
- Refactor very small duplicated code only when behavior is unchanged.
- Run checks and create a final report.

### Codex must not do without explicit human approval
- Do not change pricing.
- Do not change service promises.
- Do not change trainer profile facts.
- Do not change customer reviews or achievements.
- Do not change official LINE / Instagram / note URLs.
- Do not remove any LP section.
- Do not redesign the visual identity.
- Do not replace the main concept or tone.
- Do not delete original image assets.
- Do not deploy to production.
- Do not force-push or rewrite Git history.

## Design constraints
Preserve:
- dark background
- pink / gold accents
- serif typography
- glass-style UI
- soft scroll animations
- mobile-first layout
- current conversion flow

## Conversion paths that must not break
- first view CTA
- free diagnostic checklist
- diagnostic result modal
- 90-day program section
- pricing section
- FAQ
- official LINE CTA
- Instagram link
- note link

## SEO priority
Check and improve:
- robots meta
- title
- meta description
- canonical
- OGP
- favicon
- heading order
- image alt text
- structured data only when appropriate

## Performance priority
Check:
- heavy images
- first-view image loading
- responsive image sizing
- unnecessary blocking resources
- JavaScript placement
- CSS duplication

## Working style
- Prefer minimal changes.
- Make one logical change per task.
- Keep existing UI and copy unless there is a clear bug.
- When uncertain, choose the safer option and document the assumption.
- Do not ask the user about minor implementation details.
- Ask the user only when the decision changes business meaning, visual identity, legal risk, or production release.

## Definition of Done
A task is complete only when:
- Changed files are listed.
- The reason for each change is explained.
- Existing conversion paths are confirmed.
- Manual verification steps are provided.
- Remaining risks are listed.
- The final status is one of:
  - Ready for review
  - Needs human decision
  - Not safe to release yet
