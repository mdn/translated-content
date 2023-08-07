---
title: svg
slug: Web/SVG/Element/svg
---

{{SVGRef}}

O elemento `svg` é um contêiner que define um novo sistema de coordenadas e [janela de visualização](/pt-BR/docs/Web/SVG/Attribute/viewBox). É usado como o elemento mais externo dos documentos SVG, mas também pode ser usado para incorporar um fragmento SVG dentro de um documento SVG ou HTML.

> **Nota:** The `xmlns` attribute is only required on the outermost `svg` element of _SVG documents_. It is unnecessary for inner `svg` elements or inside HTML documents.

## Exemplo

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg
  viewBox="0 0 300 100"
  xmlns="https://www.w3.org/2000/svg"
  stroke="red"
  fill="grey">
  <circle cx="50" cy="50" r="40" />
  <circle cx="150" cy="50" r="4" />

  <svg viewBox="0 0 10 10" x="200" width="100">
    <circle cx="5" cy="5" r="4" />
  </svg>
</svg>
```

{{EmbedLiveSample('Exemplo', 300, 100)}}

## Attributes

- {{SVGAttr("baseProfile")}} {{deprecated_inline}}
  - : The minimum SVG language profile that the document requires.
    _Value type_: **\<string>** ; _Default value_: none; _Animatable_: **no**
- {{SVGAttr("contentScriptType")}} {{deprecated_inline}}
  - : The default scripting language used by the SVG fragment.
    _Value type_: **\<string>** ; _Default value_: `application/ecmascript`; _Animatable_: **no**
- {{SVGAttr("contentStyleType")}} {{deprecated_inline}}
  - : The default style sheet language used by the SVG fragment.
    _Value type_: **\<string>** ; _Default value_: `text/css`; _Animatable_: **no**
- {{SVGAttr("height")}}
  - : The displayed height of the rectangular viewport. (Not the height of its coordinate system.)
    _Value type_: [**\<length>**](/pt-BR/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/pt-BR/docs/Web/SVG/Content_type#Percentage) ; _Default value_: `auto`; _Animatable_: **yes**
- {{SVGAttr("preserveAspectRatio")}}
  - : How the `svg` fragment must be deformed if it is displayed with a different aspect ratio.
    _Value type_: (`none`| `xMinYMin`| `xMidYMin`| `xMaxYMin`| `xMinYMid`| `xMidYMid`| `xMaxYMid`| `xMinYMax`| `xMidYMax`| `xMaxYMax`) (`meet`|`slice`)? ; _Default value_: `xMidYMid meet`; _Animatable_: **yes**
- {{SVGAttr("version")}} {{deprecated_inline}}
  - : Which version of SVG is used for the inner content of the element.
    _Value type_: **[\<number>](/pt-BR/docs/Web/SVG/Content_type#Number)** ; _Default value_: none; _Animatable_: **no**
- {{SVGAttr("viewBox")}}
  - : The SVG viewport coordinates for the current SVG fragment.
    _Value type_: **[\<list-of-numbers>](/pt-BR/docs/Web/SVG/Content_type#List-of-Ts)** ; _Default value_: none; _Animatable_: **yes**
- {{SVGAttr("width")}}
  - : The displayed width of the rectangular viewport. (Not the width of its coordinate system.)
    _Value type_: [**\<length>**](/pt-BR/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/pt-BR/docs/Web/SVG/Content_type#Percentage) ; _Default value_: `auto`; _Animatable_: **yes**
- {{SVGAttr("x")}}
  - : The displayed x coordinate of the svg container. No effect on outermost `svg` elements.
    _Value type_: [**\<length>**](/pt-BR/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/pt-BR/docs/Web/SVG/Content_type#Percentage) ; _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr("y")}}
  - : The displayed y coordinate of the svg container. No effect on outermost `svg` elements.
    _Value type_: [**\<length>**](/pt-BR/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/pt-BR/docs/Web/SVG/Content_type#Percentage) ; _Default value_: `0`; _Animatable_: **yes**

> **Nota:** Starting with SVG2, `x`, `y`, `width`, and `height` are _Geometry Properties_, meaning these attributes can also be used as CSS properties.

### Global attributes

- [Core Attributes](/pt-BR/docs/Web/SVG/Attribute/Core)
  - : Most notably: {{SVGAttr('id')}}, {{SVGAttr('tabindex')}}
- [Styling Attributes](/pt-BR/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [Conditional Processing Attributes](/pt-BR/docs/Web/SVG/Attribute/Conditional_Processing)
  - : Most notably: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- Event Attributes
  - : [Global event attributes](/pt-BR/docs/Web/SVG/Attribute/Events#Global_Event_Attributes), [Graphical event attributes](/pt-BR/docs/Web/SVG/Attribute/Events#Graphical_Event_Attributes), [Document event attributes](/pt-BR/docs/Web/SVG/Attribute/Events#Document_Event_Attributes), [Document element event attributes](/pt-BR/docs/Web/SVG/Attribute/Events#Document_Element_Event_Attributes)
- [Presentation Attributes](/pt-BR/docs/Web/SVG/Attribute/Presentation)
  - : Most notably: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- Aria Attributes
  - : `aria-activedescendant`, `aria-atomic`, `aria-autocomplete`, `aria-busy`, `aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`, `aria-details`, `aria-disabled`, `aria-dropeffect`, `aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`, `aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`, `aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`, `aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`, `aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`, `aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`, `aria-rowindex`, `aria-rowspan`, `aria-selected`, `aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, `aria-valuetext`, `role`

## Usage notes

{{svginfo}}

## Specifications

| Specification                                                    | Status              | Comment            |
| ---------------------------------------------------------------- | ------------------- | ------------------ |
| {{SpecName('SVG2', 'struct.html#NewDocument', '&lt;svg&gt;')}}   | {{Spec2('SVG2')}}   |                    |
| {{SpecName('SVG1.1', 'struct.html#NewDocument', '&lt;svg&gt;')}} | {{Spec2('SVG1.1')}} | Initial definition |

## Compatibilidade com navegadores

{{Compat("svg.elements.svg")}}
