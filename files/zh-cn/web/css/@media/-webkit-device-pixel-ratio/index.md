---
title: "-webkit-device-pixel-ratio"
slug: Web/CSS/@media/-webkit-device-pixel-ratio
---

{{CSSRef}}

{{ Non-standard_header() }}

**`-webkit-device-pixel-ratio`** 是一个非标准的布尔类型 CSS 媒体类型，是标准 [`resolution`](/zh-CN/docs/Web/CSS/@media/resolution) 媒体类型的一个替代方案。

Its value is the number of device pixels used to represent each [CSS `px`](/zh-CN/docs/Web/CSS/length#Absolute_length_units). Although the value is a {{cssxref("&lt;number&gt;")}} and thus doesn't syntactically allow units, its implicit unit is [`dppx`](/zh-CN/docs/Web/CSS/resolution#dppx).

### Syntax

**`-webkit-device-pixel-ratio`** is a range value meaning the prefixed **`-webkit-min-device-pixel-ratio`** and **`-webkit-max-device-pixel-ratio`** are also available.

```css
@media (-webkit-min-device-pixel-ratio: 2) { ... }
/* is equivalent to */
@media (min-resolution: 2dppx) { ... }

/* And likewise */
@media (-webkit-max-device-pixel-ratio: 2) { ... }
/* is equivalent to */
@media (max-resolution: 2dppx) { ... }
```

### Specifications

{{Specifications}}

### See also

- [`-webkit-transform-2d`](/zh-CN/docs/Web/CSS/@media/-webkit-transform-2d)
- [`-webkit-transform-3d`](/zh-CN/docs/Web/CSS/@media/-webkit-transform-3d)
- [`-webkit-transition`](/zh-CN/docs/Web/CSS/@media/-webkit-transition)
- [`-webkit-animation`](/zh-CN/docs/Web/CSS/@media/-webkit-animation)
