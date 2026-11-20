Math Renderer Plus typesets inline and display LaTeX in completed assistant replies, including Chinese labels inside formulas. The Paseo daemon turns each expression into a PNG using MathJax and bundled fonts. Formula text and images travel between the daemon and the Paseo client. Rendering uses no external service.

Requires Paseo 0.13 or newer with plugins enabled on the selected daemon. Git installation also needs Node.js 22 or later and npm on that host.

Block formulas can be scrolled horizontally, and their LaTeX can be viewed or copied. Unsupported commands, missing glyphs and size limits preserve the original source. Avoid enabling multiple plugins that replace assistant replies. The first release was verified on macOS in Paseo's desktop web UI. The native iOS and Android apps are awaiting device testing.
