---
title: <line>
slug: Web/SVG/Element/line
---

{{SVGRef}}

Элемент **`<line>`** одна из базовых фигур SVG, используемая для создания линии, связывающей две точки.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="80" x2="100" y2="20" stroke="black" />

  <!-- Если вы не укажете цвет контура,
       линия не будет видна -->
</svg>
```

{{EmbedLiveSample('Example', 100, 100)}}

## Атрибуты

- {{SVGAttr('x1')}}
  - : Определяет координату начальной точки линии по оси x .
    _Тип значения:_ [**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage)|[**\<number>**](/docs/Web/SVG/Content_type#Number) ; _Значение по умолчанию_: `0`; А*неминуемый*: **да**
- {{SVGAttr('x2')}}
  - : Определяет координату конечной точки линии по оси x.
    _Тип значения_: [**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage)|[**\<number>**](/docs/Web/SVG/Content_type#Number) ; _Значение по умолчанию_: `0`; А*неминуемый*: **да**
- {{SVGAttr('y1')}}
  - : Определяет координату начальной точки линии по оси y.
    _Тип значения_: [**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage)|[**\<number>**](/docs/Web/SVG/Content_type#Number) ; _Значение по умолчанию_: `0`; А*неминуемый*: **да**
- {{SVGAttr('y2')}}
  - : Определяет координату конечной точки линии по оси y.
    _Тип значения_: [**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage)|[**\<number>**](/docs/Web/SVG/Content_type#Number) ; _Значение по умолчанию_: `0`; А*неминуемый*: **да**
- {{SVGAttr("pathLength")}}
  - : Определяет общую длину пути в пользовательских единицах.
    _Тип значения_: [**\<number>**](/docs/Web/SVG/Content_type#Number) ; _Значение по умолчанию_: _none_; А*неминуемый*: **да**

### Глобальные атрибуты

- [Основные атрибуты](/docs/Web/SVG/Attribute/Core)
  - : В первую очередь: {{SVGAttr('id')}}, {{SVGAttr('tabindex')}}
- [Атрибуты оформления (стилей)](/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [Атрибуты условной обработки](/docs/Web/SVG/Attribute/Conditional_Processing)
  - : В первую очередь: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- Атрибуты события
  - : [Глобальные атрибуты события](/docs/Web/SVG/Attribute/Events#Global_Event_Attributes), [Графические атрибуты события](/docs/Web/SVG/Attribute/Events#Graphical_Event_Attributes)
- [Атрибуты презентации](/docs/Web/SVG/Attribute/Presentation)
  - : В первую очередь: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- ARIA-атрибуты
  - : `aria-activedescendant`, `aria-atomic`, `aria-autocomplete`, `aria-busy`, `aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`, `aria-details`, `aria-disabled`, `aria-dropeffect`, `aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`, `aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`, `aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`, `aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`, `aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`, `aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`, `aria-rowindex`, `aria-rowspan`, `aria-selected`, `aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, `aria-valuetext`, `role`

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{SVGElement("polygon")}}
- {{SVGElement("path")}}
- [SVG Line - описание и примеры](https://www.svg-expert.ru/svg/line/)
