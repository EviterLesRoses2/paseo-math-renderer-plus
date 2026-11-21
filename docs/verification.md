# Verification

The v1.3 release passed 105 automated tests. A Chrome test against a running Paseo daemon verified centered display formulas, hover actions without layout shift, clipboard copying, source toggling, keyboard activation, touch emulation, and horizontal scrolling at 390 px.

The v0.1.2 regression suite passed 105 tests. It includes stretchy braces with Chinese labels, formula tables, long replies, isolated Markdown fallback, and bounded client request scheduling.

The v0.1.0 suite passed 102 tests on macOS. It covers the original Maxwell equations, font metrics for Chinese labels, complete inline relations, math extensions, failure details, cache and renderer lifecycle. The client bundle passed the DOM-free and Hermes evaluation tests.

The desktop test used Chrome and an isolated Paseo 0.17.0-beta.1 daemon. It verified four rendered images, the simplified and traditional glyphs in the two [light](../images/desktop.png) and [dark](../images/desktop-dark.png) screenshots, source visibility, exact clipboard copying of the two closed-integral commands and horizontal scrolling at a 390 px viewport. The user confirmed formula rendering on a real iPhone in Paseo’s native iOS app. Android device testing is pending.
