"""Retone Forma's stylesheet: readable sizes, calmer weights, warm neutrals.

Reads tools/style.original.css (the live site's stylesheet, untouched) and
writes site/style.css. Rerun it any time the original changes:

    python3 tools/retone.py

What it changes, and nothing else:
1. Text smaller than 12px becomes 12px (font-size and the font shorthand).
2. Weights 800 and 900 become 600.
3. Wide tracking on small labels (letter-spacing >= 0.5px or 0.05em) becomes 0.
4. Purple-tinted greys become violet-tinted darks (dark ones 15% deeper).
   Saturated light purples become the electric violet accent (#b49bff).
It prints a count of each change so the diff is easy to check.
"""

import colorsys
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "tools" / "style.original.css"
OUT = ROOT / "site" / "style.css"

ACCENT = (0xB4, 0x9B, 0xFF)  # electric violet, from Pip's hoodie
NEUTRAL_HUE, NEUTRAL_SAT = 262, 0.12  # violet-tinted darks
counts = {"size": 0, "weight": 0, "tracking": 0, "neutral": 0, "accent": 0}


def retone(r, g, b):
    """Return a new (r, g, b) for purple-tinted colours, or None to keep it."""
    h, l, s = colorsys.rgb_to_hls(r / 255, g / 255, b / 255)
    hue = h * 360
    if s < 0.04 or not (240 <= hue <= 340):
        return None
    if l > 0.6 and s >= 0.25:
        counts["accent"] += 1
        return ACCENT
    counts["neutral"] += 1
    nr, ng, nb = colorsys.hls_to_rgb(NEUTRAL_HUE / 360, l * 0.85 if l < 0.3 else l, min(s, NEUTRAL_SAT))
    return tuple(round(v * 255) for v in (nr, ng, nb))


def hex_sub(m):
    raw = m.group(1)
    if len(raw) in (3, 4):
        raw = "".join(c * 2 for c in raw)
    rgb = tuple(int(raw[i:i + 2], 16) for i in (0, 2, 4))
    alpha = raw[6:8] if len(raw) == 8 else ""
    new = retone(*rgb)
    if new is None:
        return m.group(0)
    return "#" + "".join(f"{v:02x}" for v in new) + alpha


def rgb_sub(m):
    parts = [p.strip() for p in m.group(2).split(",")]
    try:
        rgb = tuple(int(float(p)) for p in parts[:3])
    except ValueError:
        return m.group(0)
    new = retone(*rgb)
    if new is None:
        return m.group(0)
    return f"{m.group(1)}({', '.join(str(v) for v in new)}{', ' + parts[3] if len(parts) > 3 else ''})"


def size_sub(m):
    value = float(m.group(2))
    if value >= 12:
        return m.group(0)
    counts["size"] += 1
    return f"{m.group(1)}12px"


def weight_sub(m):
    counts["weight"] += 1
    return f"{m.group(1)}600{m.group(3)}"


def font_shorthand(m):
    decl = re.sub(r"([\s:])(\d+(?:\.\d+)?)px", size_sub, m.group(0))
    return re.sub(r"([\s:])(800|900)(\s)", weight_sub, decl)


def tracking_sub(m):
    value, unit = float(m.group(1)), m.group(2)
    if (unit == "px" and value >= 0.5) or (unit == "em" and value >= 0.05):
        counts["tracking"] += 1
        return "letter-spacing:0"
    return m.group(0)


css = SRC.read_text()
css = re.sub(r"(font-size:\s*)(\d+(?:\.\d+)?)px", size_sub, css)
css = re.sub(r"font:[^;}]+", font_shorthand, css)
css = re.sub(r"(font-weight:\s*)(800|900)()", weight_sub, css)
css = re.sub(r"letter-spacing:\s*(\d*\.?\d+)(px|em)", tracking_sub, css)
css = re.sub(r"#([0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{3,4})\b", hex_sub, css)
css = re.sub(r"(rgba?)\(([^)]+)\)", rgb_sub, css)

OUT.write_text(css)
print("retone:", ", ".join(f"{k} {v}" for k, v in counts.items()))
