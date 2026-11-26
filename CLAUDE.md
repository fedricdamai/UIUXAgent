# UIUXAgent

UI, UX and website copy reviews. One folder per project under `reviews/`.

## Reference material

Read these before any review:

- [knowledge/ux-laws.md](knowledge/ux-laws.md): 15 UX laws, with what to look for, the fix pattern and a quick review checklist.
- [knowledge/anti-slop.md](knowledge/anti-slop.md): 30+ tells that make a site look AI-made, each with a fix, plus a prompt block to paste.
- [knowledge/toolkit.md](knowledge/toolkit.md): Claude skills, sites and GitHub libraries to recommend, and what each one fixes.
- [knowledge/visual-styles.md](knowledge/visual-styles.md): named aesthetics to use as art direction instead of the AI default look.

## Skills installed in this repo

Full list, versions and licenses: [.claude/skills/SOURCES.md](.claude/skills/SOURCES.md).

| Job | Skill |
| --- | --- |
| Review a site or app screen for UX and visual quality | `impeccable` (`critique`, `audit`) plus the checklists above |
| Fix a page that looks AI-made | `unslop` (works from code, a link or a screenshot) |
| Build or redesign a landing page with a real art direction | `design-taste-frontend` (Taste) |
| Polish, motion, the small details | `emil-design-eng`, then `review-animations` or `improve-animations` |
| Name a motion effect someone described vaguely | `animation-vocabulary` |
| Stress-test UI with worst-case data | `break-ui` |
| Not sure which Emil skill fits | `ask-emil` |

For a review, these skills inform the findings. The deliverable still follows the review rules below: plain language, a fix for each problem, no em-dashes.

## Review rules

- Cite a law only when it explains a real problem on the screen, and pair it with a fix.
- Make findings falsifiable: counts, timings, sizes, before and after copy.
- No em-dashes in anything written for the user.
- Run the anti-slop checklist on every site review. Flag each tell with what to do instead.
- Recommend a tool only when it fixes a problem you found.
