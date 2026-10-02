# UI modernization — Alfredo Ramos portfolio

## Direction
The redesign moves the portfolio from a glow-heavy developer aesthetic to a cleaner product-engineering presentation: neutral surfaces, restrained blue accent, stronger typography, clearer hierarchy and subtle interaction states.

## Main changes
- Rebuilt the homepage hero around recruiter-first information: role, positioning, experience, contact, CV and selected links.
- Replaced large animated gradients and aggressive scaling with subtle elevation, borders and small motion.
- Simplified the visible technology stack to higher-signal tools.
- Redesigned work experience as a clean responsive timeline/list.
- Rebuilt project cards as case-study cards with clearer screenshots, descriptions and stack chips.
- Removed the unnecessary “View more” interaction for three projects.
- Rebuilt the final contact section as a focused CTA.
- Modernized project detail pages and their table of contents.
- Simplified header, mobile navigation, social links, buttons, theme control and CV dropdown.
- Improved metadata defaults and Open Graph image handling.
- Added reduced-motion support and cleaner focus states.
- Removed the obsolete global menu script.

## Recommended next iteration
1. Add measurable impact/results to each experience and project instead of only responsibilities.
2. Add GitHub/demo links directly to project metadata and cards.
3. Add a concise “About / principles” section only if it contributes information not already in the hero.
4. Replace project screenshots with consistent 16:10 captures at the same viewport size.
5. Self-host the Inter font or switch entirely to the system font stack for one less external request.
6. Run Lighthouse and an accessibility pass after dependencies are installed.

## Validation note
`git diff --check` passes. A full Astro build could not be executed in the current environment because the npm registry was unreachable (`EAI_AGAIN`), so dependencies could not be restored after the install attempt.

## Ambient background pass

The visual system now includes a restrained application-level background instead of a flat page color:

- subtle blue/cyan aurora lighting at the top of the SPA
- a low-contrast 64px technical grid that fades before the content becomes repetitive
- very light grain/noise to avoid a sterile flat digital surface
- glass surfaces on hero utility cards, project cards and project navigation
- a calmer translucent Experience section to create visual rhythm
- a second, softer grid/glow treatment behind Selected Work
- a layered dark CTA with its own local grid and blue light source

The intent is depth without distraction: the background should be noticed as polish, not as the main visual feature.
