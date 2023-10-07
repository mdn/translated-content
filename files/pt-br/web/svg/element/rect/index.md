---
title: rect
slug: Web/SVG/Element/rect
---

{{SVGRef}}

O elemento **`<rect>`** é uma [forma SVG básica](/pt-BR/docs/Web/SVG/Tutorial/Basic_Shapes) que desenha retângulos, definidos por sua posição, largura e altura. Os retângulos podem ter seus cantos arredondados.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 220 100" xmlns="https://www.w3.org/2000/svg">
  <!-- Simple rectangle -->
  <rect width="100" height="100" />

  <!-- Rounded corner rectangle -->
  <rect x="120" width="100" height="100" rx="15" />
</svg>
```

{{EmbedLiveSample('Example', 100, '100%')}}

## Attributes

- {{SVGAttr("x")}}
  - : The x coordinate of the rect.
    _Value type_: [**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage) ; _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr("y")}}
  - : The y coordinate of the rect.
    _Value type_: [**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage) ; _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr("width")}}
  - : The width of the rect.
    _Value type_: `auto`|[**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage) ; _Default value_: `auto`; _Animatable_: **yes**
- {{SVGAttr("height")}}
  - : The height of the rect.
    _Value type_: `auto`|[**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage) ; _Default value_: `auto`; _Animatable_: **yes**
- {{SVGAttr("rx")}}
  - : The horizontal corner radius of the rect. Defaults to `ry` if it is specified.
    _Value type_: `auto`|[**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage) ; _Default value_: `auto`; _Animatable_: **yes**
- {{SVGAttr("ry")}}
  - : The vertical corner radius of the rect. Defaults to `rx` if it is specified.
    _Value type_: `auto`|[**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage) ; _Default value_: `auto`; _Animatable_: **yes**
- {{SVGAttr("pathLength")}}
  - : The total length of the rectangle's perimeter, in user units.
    _Value type_: [**\<number>**](/docs/Web/SVG/Content_type#Number) ; _Default value_: _none_; _Animatable_: **yes**

> **Nota:** Starting with SVG2, `x`, `y`, `width`, `height`, `rx` and `ry` are _Geometry Properties_, meaning those attributes can also be used as CSS properties for that element.

### Global attributes

- [Core Attributes](/docs/Web/SVG/Attribute/Core)
  - : Most notably: {{SVGAttr('id')}}, {{SVGAttr('tabindex')}}
- [Styling Attributes](/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [Conditional Processing Attributes](/docs/Web/SVG/Attribute/Conditional_Processing)
  - : Most notably: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- Event Attributes
  - : [Global event attributes](/docs/Web/SVG/Attribute/Events#Global_Event_Attributes), [Graphical event attributes](/docs/Web/SVG/Attribute/Events#Graphical_Event_Attributes)
- [Presentation Attributes](/docs/Web/SVG/Attribute/Presentation)
  - : Most notably: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- Aria Attributes
  - : `aria-activedescendant`, `aria-atomic`, `aria-autocomplete`, `aria-busy`, `aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`, `aria-details`, `aria-disabled`, `aria-dropeffect`, `aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`, `aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`, `aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`, `aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`, `aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`, `aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`, `aria-rowindex`, `aria-rowspan`, `aria-selected`, `aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, `aria-valuetext`, `role`

## Usage notes

{{svginfo}}

## Specifications

| Specification                                                     | Status              | Comment            |
| ----------------------------------------------------------------- | ------------------- | ------------------ |
| {{SpecName('SVG2', 'shapes.html#RectElement', '&lt;rect&gt;')}}   | {{Spec2('SVG2')}}   |                    |
| {{SpecName('SVG1.1', 'shapes.html#RectElement', '&lt;rect&gt;')}} | {{Spec2('SVG1.1')}} | Initial definition |

## Compatibilidade com navegadores

{{Compat("svg.elements.rect")}}

## See also

- Other basic SVG shapes: {{SVGElement('circle')}}, {{ SVGElement('ellipse') }}, {{ SVGElement('line') }}, **{{ SVGElement('polygon') }}**, {{ SVGElement('polyline') }}
