---
title: tspan
slug: Web/SVG/Element/tspan
---

{{SVGRef}}

O elemento SVG **`<tspan>`** define um subtexto dentro de um elemento {{SVGElement ('text')}} ou outro elemento `<tspan>`. Permite o ajuste do estilo e / ou posição desse subtexto, conforme necessário.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 240 40" xmlns="https://www.w3.org/2000/svg">
  <style>
    text {
      font: italic 12px serif;
    }
    tspan {
      font: bold 10px sans-serif;
      fill: red;
    }
  </style>

  <text x="10" y="30" class="small">
    You are
    <tspan>not</tspan>
    a banana!
  </text>
</svg>
```

{{EmbedLiveSample('Example', 100, '100%')}}

## Attributes

- {{SVGAttr("x")}}
  - : The x coordinate of the starting point of the text baseline.
    _Value type_: [**\<length>**](/pt-BR/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/pt-BR/docs/Web/SVG/Content_type#percentage) ; _Default value: none; Animatable_: **yes**
- {{SVGAttr("y")}}
  - : The y coordinate of the starting point of the text baseline.
    _Value type_: [**\<length>**](/pt-BR/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/pt-BR/docs/Web/SVG/Content_type#percentage) ; _Default value: none; Animatable_: **yes**
- {{SVGAttr("dx")}}
  - : Shifts the text position horizontally from a previous text element.
    _Value type_: [**\<length>**](/pt-BR/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/pt-BR/docs/Web/SVG/Content_type#percentage) ; _Default value_: _none_; _Animatable_: **yes**
- {{SVGAttr("dy")}}
  - : Shifts the text position vertically from a previous text element.
    _Value type_: [**\<length>**](/pt-BR/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/pt-BR/docs/Web/SVG/Content_type#percentage) ; _Default value: none; Animatable_: **yes**
- {{SVGAttr("rotate")}}
  - : Rotates orientation of each individual glyph. Can rotate glyphs individually.
    _Value type_: [**\<list-of-number>**](/pt-BR/docs/Web/SVG/Content_type#list-of-ts) ; _Default value_: none; _Animatable_: **yes**
- {{SVGAttr("lengthAdjust")}}
  - : How the text is stretched or compressed to fit the width defined by the `textLength` attribute.
    _Value type_: `spacing`|`spacingAndGlyphs`; _Default value_: `spacing`; _Animatable_: **yes**
- {{SVGAttr("textLength")}}
  - : A width that the text should be scaled to fit.
    _Value type_: [**\<length>**](/pt-BR/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/pt-BR/docs/Web/SVG/Content_type#percentage) ; _Default value_: _none_; _Animatable_: **yes**

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
  - : Most notably: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('dominant-baseline')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr('text-anchor')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- Aria Attributes
  - : `aria-activedescendant`, `aria-atomic`, `aria-autocomplete`, `aria-busy`, `aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`, `aria-details`, `aria-disabled`, `aria-dropeffect`, `aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`, `aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`, `aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`, `aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`, `aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`, `aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`, `aria-rowindex`, `aria-rowspan`, `aria-selected`, `aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, `aria-valuetext`, `role`

## Usage notes

{{svginfo}}

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
