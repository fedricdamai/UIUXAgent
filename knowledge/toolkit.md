# Design Toolkit: Sites, Libraries and Claude Skills

Sources: four shorts shared 26 November 2026. Two are versions of the same "5 websites every vibe coder should know" video. One covers GitHub libraries ("GitHub is your new design asset library"). One covers "3 Claude Skills That Make Your Websites Look Like a Pro Designed Them".

Recommend a tool only when it fixes a problem found in a review. Each entry says what it's for.

## Claude skills and tools

The video's claim: describe a site ("a landing page for my coffee shop"), get "Fresh coffee, every morning." in under an hour, with these five installed.

| Name | Type | What it does | Where |
| --- | --- | --- | --- |
| Emil Kowalski's design skills | Skill | Motion and polish from a designer and engineer (Vercel, Linear background in the video). The small details, a polished feel, smooth animations. Main skill: `emil-design-eng`. | [github.com/emilkowalski/skills](https://github.com/emilkowalski/skills), [emilkowal.ski](https://emilkowal.ski) |
| Impeccable | Skill | Gives Claude real design vocabulary: layout, type, color, polish. Flags AI-design tells. Commands like `/audit`, `/critique`, `/polish`, `/distill`, `/typeset`. Built by Paul Bakaus on top of Anthropic's frontend-design skill. | [github.com/pbakaus/impeccable](https://github.com/pbakaus/impeccable), [impeccable.style](https://impeccable.style) |
| Taste | Skill | Studied 247 real sites (One Page Love, Awwwards). Picks an art direction, pulls open-archive photos, then checks the result in a real browser. | [github.com/Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) |
| Figma MCP | MCP | Reads Figma designs and turns them into code. | [Figma remote MCP setup](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation), [github.com/figma/mcp-server-guide](https://github.com/figma/mcp-server-guide) |
| Playwright | Tool | Lets Claude test its own work: page loads, buttons click, layout looks right. | [playwright.dev](https://playwright.dev), [github.com/microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) |

Unslop (the skill the UNSLOP video sends to commenters) isn't linked in the video. The closest public match is [heydamir/unslop](https://github.com/heydamir/unslop) by Damir Sokolovsky. It covers the same tells (purple gradients, glows, emoji labels, uneven spacing, generated hero visuals via Higgsfield and similar tools). It may not be the exact file the creator sends.

Notes from checking the sources: the skill counts and anti-pattern counts for Emil's repo and Impeccable differ between listings. Several unrelated skills are also called "taste". The one matching the video (247 sites, art direction, real-browser check) is Leonxlnx's.

## Websites

| Name | URL | Use it for |
| --- | --- | --- |
| Watermelon UI | [ui.watermelon.sh](https://ui.watermelon.sh) | Open-source, copy-paste components and full landing pages. Built on shadcn and Tailwind. |
| Manus | [manus.im](https://manus.im) | AI agent that builds full sites in one click, back end included. The video also showed it running an SEO tracker. |
| Realtime Colors | [realtimecolors.com](https://www.realtimecolors.com) | Test a color palette and font pairing on a real-looking site before you commit. |
| React Spring | [react-spring.dev](https://www.react-spring.dev), [GitHub](https://github.com/pmndrs/react-spring) | Physics-based animation library for React. Natural, fluid motion. |
| Godly | [godly.website](https://godly.website) | Live gallery of the best-designed sites on the internet, shown as video so you see the motion. Use it to pick an art direction. |

The video's caption said "godly.design" in one version and something else in the other. The real site is godly.website.

## GitHub libraries (free, open source)

| Name | Repo | What it is | Use it for |
| --- | --- | --- | --- |
| Lenis | [darkroomengineering/lenis](https://github.com/darkroomengineering/lenis) | Smooth scroll library by darkroom.engineering | Velocity-based smooth scrolling. Drop it in. The video claims "probably 90% of Awwwards" sites use it. Unverified. |
| GSAP | [greensock/GSAP](https://github.com/greensock/GSAP), [gsap.com](https://gsap.com) | GreenSock Animation Platform | The animation library pros have used for years. Now owned by Webflow, and every premium plugin (ScrollTrigger, SplitText, MorphSVG...) is free, with no license needed. Scroll, text, SVG and UI interactions. |
| Vanta.js | [tengbao/vanta](https://github.com/tengbao/vanta), [vantajs.com](https://www.vantajs.com) | Three.js and WebGL animated backgrounds | 3D animated hero backgrounds (waves, halo, birds, net) in about five lines of code. |
| React Bits | [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits), [reactbits.dev](https://reactbits.dev) | 130+ animated React components | Copy-paste text effects, backgrounds and animations (e.g. Shiny Text). |

**Review caution:** These make slop faster too. A Vanta background behind buzzword copy is still slop. Check each animation against [anti-slop.md](anti-slop.md) (motion section) and the Doherty threshold in [ux-laws.md](ux-laws.md).

## Installed in this repo

The skills above now live in `.claude/skills/`, so any Claude Code session opened in this repo can use them. See the skills table in [CLAUDE.md](../CLAUDE.md) for which one to use when. Versions, licenses and how to update them are in [.claude/skills/SOURCES.md](../.claude/skills/SOURCES.md).

Figma MCP and Playwright are tools, not skills, so they aren't vendored. To add Figma MCP to Claude Code:

```bash
claude mcp add --transport http figma https://mcp.figma.com/mcp
```

Cloud sessions already have Chromium and Playwright installed.
