---
title: text
slug: Web/SVG/Element/text
---

{{SVGRef}}

O elemento SVG **`<text>`** desenha um elemento gráfico que consiste em texto. É possível aplicar um gradiente, pattern, clipping path, máscara ou filtro ao `<text>`, como qualquer outro elemento gráfico SVG.

If text is included in SVG not inside of a `<text>` element, it is not rendered. This is different than being hidden by default, as setting the {{SVGAttr('display')}} property won't show the text.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 240 80" xmlns="https://www.w3.org/2000/svg">
  <style>
    .small {
      font: italic 13px sans-serif;
    }
    .heavy {
      font: bold 30px sans-serif;
    }

    /* Note that the color of the text is set with the    *
     * fill property, the color property is for HTML only */
    .Rrrrr {
      font: italic 40px serif;
      fill: red;
    }
  </style>

  <text x="20" y="35" class="small">My</text>
  <text x="40" y="35" class="heavy">cat</text>
  <text x="55" y="55" class="small">is</text>
  <text x="65" y="55" class="Rrrrr">Grumpy!</text>
</svg>
```

{{EmbedLiveSample('Example', 100, '100%')}}

## Attributes

- {{SVGAttr("x")}}
  - : The x coordinate of the starting point of the text baseline.
    _Value type_: [**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage) ; _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr("y")}}
  - : The y coordinate of the starting point of the text baseline.
    _Value type_: [**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage) ; _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr("dx")}}
  - : Shifts the text position horizontally from a previous text element.
    _Value type_: [**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage) ; _Default value_: _none_; _Animatable_: **yes**
- {{SVGAttr("dy")}}
  - : Shifts the text position vertically from a previous text element.
    _Value type_: [**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage) ; _Default value_: _none_; _Animatable_: **yes**
- {{SVGAttr("rotate")}}
  - : Rotates orientation of each individual glyph. Can rotate glyphs individually.
    _Value type_: [**\<list-of-number>**](/docs/Web/SVG/Content_type#List-of-Ts) ; _Default value_: none; _Animatable_: **yes**
- {{SVGAttr("lengthAdjust")}}
  - : How the text is stretched or compressed to fit the width defined by the `textLength` attribute.
    _Value type_: `spacing`|`spacingAndGlyphs`; _Default value_: `spacing`; _Animatable_: **yes**
- {{SVGAttr("textLength")}}
  - : A width that the text should be scaled to fit.
    _Value type_: [**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage) ; _Default value_: _none_; _Animatable_: **yes**

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

## Specifications

| Specification                                                   | Status              | Comment            |
| --------------------------------------------------------------- | ------------------- | ------------------ |
| {{SpecName('SVG2', 'text.html#TextElement', '&lt;text&gt;')}}   | {{Spec2('SVG2')}}   |                    |
| {{SpecName('SVG1.1', 'text.html#TextElement', '&lt;text&gt;')}} | {{Spec2('SVG1.1')}} | Initial definition |

## Compatibilidade com navegadores

{{Compat("svg.elements.text")}}

## Related

- Other SVG text related elements: **{{SVGElement("tspan")}}**, {{SVGElement("tref")}}, {{SVGElement("altGlyph")}}
