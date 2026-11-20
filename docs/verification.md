# Verification

The v0.1.0 suite passed 102 tests on macOS. It covers the original Maxwell equations, font metrics for Chinese labels, complete inline relations, math extensions, failure details, cache and renderer lifecycle. The client bundle passed the DOM-free and Hermes evaluation tests.

The desktop test used Chrome and an isolated Paseo 0.17.0-beta.1 daemon. It verified four rendered images, the simplified and traditional glyphs in the two [light](../images/desktop.png) and [dark](../images/desktop-dark.png) screenshots, source visibility, exact clipboard copying of the two closed-integral commands and horizontal scrolling at a 390 px viewport. The native iOS and Android apps are awaiting device tests.
