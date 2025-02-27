---
title: RGB
slug: Glossary/RGB
---

{{GlossarySidebar}}

RGB は、赤、緑、青という 3 つの基本要素（またはチャネル）を混ぜ合わせることで表現されるカラーモデルです。各色は、最終的な色を決定する際、赤、緑、青それぞれの強度を示す 3 つの数字のシーケンス (通常は 0.0〜1.0、または 0〜255) で表されます。

There are many ways to describe the RGB components of a color. In {{Glossary("CSS")}} they can be represented as a single 24-bit integer in hexadecimal notation (for example, `#add8e6` is light blue), or in functional notation as three separate 8-bit integers (for example, rgb(46, 139, 87) is sea green). In {{Glossary("OpenGL")}}, {{Glossary("WebGL")}}, and {{Glossary("GLSL")}} the red-green-blue components are fractions (floating-point numbers between 0.0 and 1.0), although in the actual color buffer they are typically stored as 8-bit integers. Graphically, a color can be represented as a point in a three-dimensional grid or cube, where each dimension (or axis) corresponds to a different channel.

## Learn more

### General knowledge

- [RGB color model on Wikipedia](https://en.wikipedia.org/wiki/RGB_color_model)

### Learn about it

- [CSS data type: \<color>](/ja/docs/Web/CSS/color_value)
