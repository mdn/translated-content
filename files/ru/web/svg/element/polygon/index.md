---
title: <polygon>
slug: Web/SVG/Element/polygon
---

{{SVGRef}}

Элемент **`<polygon>`** описывает замкнутую фигуру, состоящую из набора последовательно соединённых между собой прямых линий. Для создания незамкнутых фигур используется элемент {{SVGElement("polyline")}}.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Example of a polygon with the default fill -->
  <polygon points="0,100 50,25 50,75 100,0" />

  <!-- Example of the same polygon shape with stroke and no fill -->
  <polygon points="100,100 150,25 150,75 200,0" fill="none" stroke="black" />
</svg>
```

{{EmbedLiveSample('Exemple', 100, 100)}}

## Атрибуты

- {{SVGAttr('points')}}
  - : Данный атрибут определяет список точек (независимых пар x,y координат), необходимых для отрисовки фигуры.
    _Тип значения_: [**\<number>**](/docs/Web/SVG/Content_type#Number)+ ; _Значение по умолчанию_: `""`; _Анимируемый_: **да**
- {{SVGAttr("pathLength")}}
  - : Данный атрибут позволяет указывать общую длину пути в пользовательских единицах.
    _Тип значения_: [**\<number>**](/docs/Web/SVG/Content_type#Number) ; _Значение по умолчанию_: _none_; _Анимируемый_: **да**

### Global attributes

- [Основные атрибуты](/docs/Web/SVG/Attribute/Core)
  - : Самые важные: {{SVGAttr('id')}}, {{SVGAttr('tabindex')}}
- [Атрибуты стилизации](/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [Условные атрибуты](/docs/Web/SVG/Attribute/Conditional_Processing)
  - : Самые важные: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- Атрибуты событий
  - : [Атрибуты глобальных событий](/docs/Web/SVG/Attribute/Events#Global_Event_Attributes), [Атрибуты графических событий](/docs/Web/SVG/Attribute/Events#Graphical_Event_Attributes)
- [Presentation Attributes](/docs/Web/SVG/Attribute/Presentation)
  - : Most notably: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- ARIA-атрибуты
  - : `aria-activedescendant`, `aria-atomic`, `aria-autocomplete`, `aria-busy`, `aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`, `aria-details`, `aria-disabled`, `aria-dropeffect`, `aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`, `aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`, `aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`, `aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`, `aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`, `aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`, `aria-rowindex`, `aria-rowspan`, `aria-selected`, `aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, `aria-valuetext`, `role`

## Usage notes

{{svginfo}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Другие базовые фигуры SVG: {{ SVGElement('circle') }}, {{ SVGElement('ellipse') }}, {{ SVGElement('line') }}, **{{ SVGElement('polyline') }}**, **{{ SVGElement('rect') }}**
