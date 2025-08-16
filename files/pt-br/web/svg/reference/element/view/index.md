---
title: view
slug: Web/SVG/Reference/Element/view
original_slug: Web/SVG/Element/view
---

{{SVGRef}}

Uma **`view`** é uma maneira definida de visualizar a imagem, como um nível de zoom ou uma visualização de detalhes.

## Usage context

{{svginfo}}

## Attributes

### Global attributes

- [Aria attributes](/pt-BR/docs/Web/SVG/Attribute#aria_attributes) »
- [Core attributes](/pt-BR/docs/Web/SVG/Attribute#core_attributes) »
- [Global event attributes](/pt-BR/docs/Web/SVG/Attribute#global_event_attributes) »
- {{SVGAttr("externalResourcesRequired")}}

### Specific attributes

- {{SVGAttr("viewBox")}}
- {{SVGAttr("preserveAspectRatio")}}
- {{SVGAttr("zoomAndPan")}}
- {{SVGAttr("viewTarget")}}

## Example

### SVG

```html
<svg
  width="600"
  height="200"
  viewBox="0 0 600 200"
  xmlns="https://www.w3.org/2000/svg"
  xmlns:xlink="https://www.w3.org/1999/xlink">
  <defs>
    <radialGradient id="gradient">
      <stop offset="0%" stop-color="#8cffa0" />
      <stop offset="100%" stop-color="#8ca0ff" />
    </radialGradient>
  </defs>

  <circle r="50" cx="180" cy="50" style="fill:url(#gradient)" />

  <view id="halfSizeView" viewBox="0 0 1200 400" />
  <view id="normalSizeView" viewBox="0 0 600 200" />
  <view id="doubleSizeView" viewBox="0 0 300 100" />

  <a xlink:href="#halfSizeView">
    <text x="5" y="20" font-size="20">half size</text>
  </a>
  <a xlink:href="#normalSizeView">
    <text x="5" y="40" font-size="20">normal size</text>
  </a>
  <a xlink:href="#doubleSizeView">
    <text x="5" y="60" font-size="20">double size</text>
  </a>
</svg>
```

### Result

{{EmbedLiveSample("Example", 600, 200)}}

## DOM Interface

This element implements the {{domxref("SVGViewElement")}} interface.

## Specifications

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
