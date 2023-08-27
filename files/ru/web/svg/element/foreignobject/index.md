---
title: <foreignObject>
slug: Web/SVG/Element/foreignObject
---

{{SVGRef}}
Элемент **`<foreignObject>`** [SVG](/ru/docs/Web/SVG) позволяет включать другое пространство имён XML.
В контексте браузера это, скорее всего, XHTML / HTML.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <style>
    polygon {
      fill: black;
    }

    div {
      color: white;
      font: 18px serif;
      height: 100%;
      overflow: auto;
    }
  </style>

  <polygon points="5,5 195,10 185,185 10,195" />

  <!-- Типичный пример использования: встраивание HTML-текста в SVG -->
  <foreignObject x="20" y="20" width="160" height="160">
    <!--
В контексте SVG, внедрённого в HTML, пространство имён XHTML может и следует избегать,
но это обязательно в контексте документа SVG
   -->
    <div xmlns="http://www.w3.org/1999/xhtml">
      - Смолчал хозяин, да и то, что мог сказать - Мне невдомёк, но во владениях
      чертога Поможет дом срубить да судьбы вам связать. Не веришь ежли -
      испроси у Бога...
    </div>
  </foreignObject>
</svg>
```

{{EmbedLiveSample('Exemple', 150, '100%')}}

## Атрибуты

- {{SVGAttr("height")}}
  - : Этот атрибут определяет высоту прямоугольника.
    _Value type_: [**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage) ; _Default value_: `auto`; _Animatable_: **yes**
- {{SVGAttr("width")}}
  - : Этот атрибут определяет ширину прямоугольника.
    _Value type_: [**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage) ; _Default value_: `auto`; _Animatable_: **yes**
- {{SVGAttr("x")}}
  - : Этот атрибут определяет координату x контейнера svg.
    Это не влияет на внешние элементы SVG.
    _Value type_: [**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage) ; _Default value_: `0`; _Animatable_: **yes**
- {{SVGAttr("y")}}
  - : Этот атрибут определяет координату Y контейнера SVG.
    Это не влияет на внешние элементы SVG.
    _Value type_: [**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage) ; _Default value_: `0`; _Animatable_: **yes**

> **Примечание:** Starting with SVG2 `x`, `y`, `width`, and `height` are Geometry Properties, meaning those attributes can also be used as CSS properties for that element.

### Глобальные атрибуты

- [Core Attributes](/docs/Web/SVG/Attribute/Core)
  - : Most notably: {{SVGAttr('id')}}, {{SVGAttr('tabindex')}}
- [Styling Attributes](/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [Conditional Processing Attributes](/docs/Web/SVG/Attribute/Conditional_Processing)
  - : Most notably: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- Event Attributes
  - : [Global event attributes](/docs/Web/SVG/Attribute/Events#Global_Event_Attributes), [Graphical event attributes](/docs/Web/SVG/Attribute/Events#Graphical_Event_Attributes), [Document event attributes](/docs/Web/SVG/Attribute/Events#Document_Event_Attributes), [Document element event attributes](/docs/Web/SVG/Attribute/Events#Document_Element_Event_Attributes)
- [Presentation Attributes](/docs/Web/SVG/Attribute/Presentation)
  - : Most notably: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- Aria Attributes
  - : `aria-activedescendant`, `aria-atomic`, `aria-autocomplete`, `aria-busy`, `aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`, `aria-details`, `aria-disabled`, `aria-dropeffect`, `aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`, `aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`, `aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`, `aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`, `aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`, `aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`, `aria-rowindex`, `aria-rowspan`, `aria-selected`, `aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, `aria-valuetext`, `role`

## Примечания по использованию

{{svginfo}}

## Характеристики

| Specification                                                                       | Status              | Comment            |
| ----------------------------------------------------------------------------------- | ------------------- | ------------------ |
| {{SpecName('SVG2', 'embedded.html#ForeignObjectElement', '&lt;foreignObject&gt;')}} | {{Spec2('SVG2')}}   |                    |
| {{SpecName('SVG1.1', 'extend.html#ForeignObjectElement', '&lt;foreignObject&gt;')}} | {{Spec2('SVG1.1')}} | Initial definition |

## Совместимость браузера

{{Compat}}
