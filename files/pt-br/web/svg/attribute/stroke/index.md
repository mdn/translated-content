---
title: stroke
slug: Web/SVG/Attribute/stroke
---

{{SVGRef}}

O atributo **`stroke`** é um atributo de apresentação que define a cor (_ou qualquer SVG_ _paint servers, como gradientes ou patterns_) usado para pintar o contorno da forma;

> **Nota:** As a presentation attribute `stroke` can be used as a CSS property.

As a presentation attribute, it can be applied to any element but it has effect only on the following twelve elements: {{SVGElement('altGlyph')}}, {{SVGElement('circle')}}, {{SVGElement('ellipse')}}, {{SVGElement('line')}}, {{SVGElement('path')}}, {{SVGElement('polygon')}}, {{SVGElement('polyline')}}, {{SVGElement('rect')}}, {{SVGElement('text')}}, {{SVGElement('textPath')}}, {{SVGElement('tref')}}, and {{SVGElement('tspan')}}

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 20 10" xmlns="https://www.w3.org/2000/svg">
  <!-- Simple color stroke -->
  <circle cx="5" cy="5" r="4" fill="none" stroke="green" />

  <!-- Stroke a circle with a gradient -->
  <defs>
    <linearGradient id="myGradient">
      <stop offset="0%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </linearGradient>
  </defs>

  <circle cx="15" cy="5" r="4" fill="none" stroke="url(#myGradient)" />
</svg>
```

{{EmbedLiveSample('topExample', '100%', 200)}}

## Usage notes

| Value         | **[\<paint>](/docs/Web/SVG/Content_type#Paint)** |
| ------------- | ------------------------------------------------ |
| Default value | `none`                                           |
| Animatable    | Yes                                              |

## Specifications

| Specification                                                    | Status              | Comment                                                                    |
| ---------------------------------------------------------------- | ------------------- | -------------------------------------------------------------------------- |
| {{SpecName("SVG2", "painting.html#StrokeProperty", "stroke")}}   | {{Spec2("SVG2")}}   | Definition for shapes and texts. Adds `context-fill` and `context-stroke`. |
| {{SpecName("SVG1.1", "painting.html#StrokeProperty", "stroke")}} | {{Spec2("SVG1.1")}} | Initial definition for shapes and texts                                    |

## Browser compatibility

{{Compat("svg.attributes.presentation.stroke")}}

> **Nota:** For information on using the `context-stroke` (and `context-fill`) values from HTML documents, see the documentation for the non-standard {{cssxref("-moz-context-properties")}} property.
