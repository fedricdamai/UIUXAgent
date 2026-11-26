# Anti-Slop Checklist: Why a Site Looks Vibecoded

Sources: two shorts shared 26 November 2026.

- "20 reasons why your app looks vibecoded (Give this to Claude/chatGPT)"
- "18 things to give to Claude to UNSLOP your website". It shows a before and after of one lamp store ("Stillform"), fixed one item at a time in 30 seconds.

Use this file in two ways. In a review, every item is a tell you can point at on the screen. When building, paste the "Fix" column into the prompt.

## The demo that proves it

The UNSLOP video started with a purple lamp store and ended with a dark, calm one. The headline shows the copy problem in one line.

| Before | After |
| --- | --- |
| Light That Feels Like Home, Designed To Inspire Every Moment ✨💡 | Turn off the big light. |
| Purple-to-violet background, radial glow, 4 badges | Near-black background, one orange accent |
| Two outlined buttons of equal weight | One filled "Shop the lamps" button plus one quiet text link |
| Flat 3D-render product shots | Warm, lit photography of the lamp (made with Higgsfield) |

The new headline is 5 words. The old one was 10 words plus 2 emojis, and it could sell any product. The new one could only sell a lamp.

## The tells and the fixes

Grouped by what they touch. "V20" means it came from the 20-reasons list, "U18" from the UNSLOP list.

### Color

| Tell | Source | Fix |
| --- | --- | --- |
| Purple-to-blue gradient | V20 #1, U18 #1 | Pick a palette from the brand or the product, not the model's default. Test it on Realtime Colors. |
| Radial glows behind the hero | U18 #2 | Remove them. Let the product or photo carry the light. |
| Gradient hero text | V20 #2, U18 #3 | Solid text. Use weight and size for emphasis. |
| Grain over a gradient | V20 #20 | Drop both, or use grain only with a real art direction behind it. |
| Several accent colors fighting | U18 #10 | One accent color, used only for the primary action and the one thing to notice (Von Restorff). |
| Low-contrast dark mode | V20 #7 | Body text at WCAG AA minimum (4.5:1). Test grey-on-black text with a contrast checker. |

### Type

| Tell | Source | Fix |
| --- | --- | --- |
| Inter everywhere | V20 #4 | Choose a typeface that fits the brand. Inter is fine for UI, but not as the whole personality. |
| Space Grotesk + Instrument Serif | V20 #19 | This pairing is now the AI default for "designed". Pick something the brand owns. |
| Serif italic accent words ("Get *inspired* with us") | V20 #18 | Cut the mid-sentence italic swap. If it needs emphasis, the copy is weak. |
| Unreadable type | U18 #7 | Body 16px minimum, line length 45 to 75 characters, real line height. |
| No type hierarchy | U18 #12 | Use size to show order: one clear H1, then steps down. The eye should land on the headline first. |

### Layout and components

| Tell | Source | Fix |
| --- | --- | --- |
| Badge above the headline ("✨ New: AI-powered") | V20 #9, U18 #4 | Cut it unless it carries real news. Cut extra badges on cards too. |
| 3 icon boxes in a row | V20 #8 | Show the product doing the thing. A screenshot beats three icons with three generic words. |
| Colored left-border cards | V20 #5 | Plain cards. Hierarchy from spacing and type, not stripes. |
| Glassmorphism cards | V20 #6, U18 #15 | Glass only where something sits over imagery (a nav over a photo). Never as the default card. |
| Untouched shadcn UI | V20 #11 | Change radius, spacing, color and type tokens so it stops looking like the docs site. |
| Lucide icons everywhere | V20 #10 | Fewer icons. Where needed, pick a set that matches the brand's line weight. |
| Inconsistent spacing | V20 #15, U18 #11 | 4-point grid: every gap is a multiple of 4 (4, 8, 12, 16, 24, 32...). |
| Random corner radii | U18 #14 | One radius scale, applied everywhere. |
| Two or more equal CTAs | U18 #5 | Two CTAs max: one filled primary, one quiet secondary (Hick's law). |
| Main visual fighting the copy | U18 #13 | Give the main visual priority. One focal point per screen. |
| Cards that make you read | U18 #16 | Scannable cards: image, name, price, one action. Nothing else. |

### Motion

| Tell | Source | Fix |
| --- | --- | --- |
| Fade-in on scroll for every section | V20 #12 | Animate what explains something. Static is fine. |
| Cursor-following beam or spotlight | V20 #13 | Cut it. |
| Buttons that only fade on hover | V20 #14 | Real interaction cues: pressed state, focus ring, cursor change, under 400ms (Doherty). |
| No feedback at all | U18 #17 | Use motion to show what's clickable and what just happened. |

### Copy

| Tell | Source | Fix |
| --- | --- | --- |
| Emojis in headings | V20 #3, U18 #6 | Remove them. |
| Em dashes everywhere | V20 #16 | Replace with periods, commas or colons. (House rule: never use them.) |
| Generic buzzword copy ("Ship faster", "Secure by default", "Built for teams") | V20 #17, U18 #9 | Swap the hype for specifics: numbers, names, what it does. If a competitor could say it, rewrite it. |
| Features before benefits | U18 #8 | Benefits first. Say what changes for the buyer, then how. |

### Assets

| Tell | Source | Fix |
| --- | --- | --- |
| Placeholder 3D renders, stock illustrations | U18 #18 | Premium assets: real photos, lit product shots, or generated ones with art direction (the video used Higgsfield). |

## Where the two videos disagree

- **Glass:** V20 says glass cards are a tell. U18 says use glass selectively. Both agree: glass as the default card is slop.
- **Motion:** V20 calls scroll fades slop. The GitHub libraries video (see [toolkit.md](toolkit.md)) sells Lenis and GSAP scroll effects. The rule: motion has to explain or reward something. Decoration on every section is the tell.

## Prompt block to paste

```
Before you design, avoid these defaults: purple-to-blue gradients, radial glows,
gradient text, grain on gradients, Inter as the only font, Space Grotesk +
Instrument Serif, serif italic accent words, badges above the headline, three
icon boxes in a row, colored left-border cards, default glassmorphism, untouched
shadcn styling, Lucide icons everywhere, fade-in on every scroll, cursor-following
beams, emojis in headings, em dashes, and buzzword copy.

Do this instead: one accent color, a 4-point spacing grid, one corner-radius scale,
clear type hierarchy, body text 16px+ with AA contrast, max two CTAs (one primary),
one focal visual, scannable cards, real hover/press/focus states, specific copy
with benefits first, and real or art-directed imagery.
```
