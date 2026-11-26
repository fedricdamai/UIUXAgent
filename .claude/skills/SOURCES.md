# Vendored Skills: Sources, Versions and Licenses

These skills were copied from public GitHub repos on 26 November 2026, after a read-through for unsafe instructions, hooks and network calls. Each folder keeps its original LICENSE file.

| Skill folder(s) | Repo | Commit | License | Author |
| --- | --- | --- | --- | --- |
| `emil-design-eng`, `animate`, `animate-expo`, `animation-performance`, `animation-vocabulary`, `apple-design`, `ask-emil`, `ask-sonner`, `break-ui`, `choreograph`, `find-animation-opportunities`, `gestures`, `improve-animations`, `learn-taste`, `mobile-native`, `pick-ui-library`, `prototype`, `remove-animations`, `review-animations`, `write-swift` | [emilkowalski/skills](https://github.com/emilkowalski/skills) | `64eb3de` | MIT | Emil Kowalski |
| `impeccable` (plus `.claude/agents/impeccable-*.md`) | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | `2fc5e14` | Apache 2.0 (see NOTICE.md) | Paul Bakaus |
| `design-taste-frontend` | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | `d1a2bb4` | MIT | Leonxlnx |
| `unslop` | [heydamir/unslop](https://github.com/heydamir/unslop) | `620163e` | CC BY 4.0 | Damir Sokolovsky ([@heydamir](https://x.com/heydamir)) |

## What runs, and what doesn't

- **Impeccable:** `scripts/impeccable` downloads a checksum-verified engine binary from the repo's GitHub Releases on first run. The repo's auto-run hooks (`.claude/settings.json` in the source repo) were **not** copied, so nothing runs on edit or stop. Turn them on per project with `/impeccable hooks on`. If the binary can't run, the skill falls back to reading its `reference/` files.
- **Taste:** needs Node 22+ and Chromium (both present in cloud sessions). Its scripts run locally. `photos.mjs` and `icons.mjs` fetch public images and icons from Wikimedia Commons, jsDelivr and GitHub. The skill declares its own Stop hook that runs `scripts/gate.mjs` only while the skill is active and a `.taste-skill/` build exists.
- **Unslop:** `scripts/snapshot.mjs` loads the page you point it at (with Playwright) to save a copy. `story.mjs` uses ffmpeg for before/after videos.
- **Emil Kowalski:** instructions only, no scripts.

Not copied: Impeccable's builds for other editors (Cursor, Codex, Gemini...), the Taste repo's README images, and Unslop's `agents/openai.yaml`.

## Updating

Re-clone the repo, diff it against the folder here, and read the diff before copying it over. A skill is instructions future agents will follow, so never update one blind.

```bash
git clone --depth 1 https://github.com/emilkowalski/skills /tmp/emil
```

```bash
diff -r /tmp/emil/skills/emil-design-eng .claude/skills/emil-design-eng
```
