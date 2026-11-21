# Changelog

## 1.3.0

- Center display formulas while preserving horizontal scrolling.
- Reveal source actions on hover, with a tap target for touch clients and a keyboard-accessible trigger.
- Document formula rendering on a user-verified iPhone.

## 0.1.2

- Allow nested SVG viewports used by stretchy braces inside a single formula image.

## 0.1.1

- Render inline formulas inside Markdown tables and preserve column alignment.
- Keep other formulas visible when one Markdown block needs the host renderer.
- Queue formula requests and allow up to 256 rendered formulas per reply.

## 0.1.0

- Upgrade the daemon to MathJax 4.1.3 and bundle the SVG font ranges and common math extensions.
- Typeset Chinese formula labels as local glyph outlines with the bundled Noto Sans CJK SC font.
- Display specific formula failure reasons while preserving the original LaTeX.
- Keep formula images, inline and block rendering, and source actions in the existing Paseo timeline integration.
