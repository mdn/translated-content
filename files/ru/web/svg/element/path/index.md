---
title: <path>
slug: Web/SVG/Element/path
---

{{SVGRef}}

Элемент **`<path>`** является общим элементом для описания фигуры. Все базовые фигуры могут быть созданы с помощью элемента path.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M 10,30
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z" />
</svg>
```

{{EmbedLiveSample('Example', 100, 100)}}

## Атрибуты

- {{SVGAttr("d")}}
  - : Этот атрибут определяет форму.
    _Тип значения_: **\<string>** ; _Значение по умолчанию_: `''`; _Анимирование_: **Да**
- {{SVGAttr("pathLength")}}
  - : Этот атрибут позволяет указывать общую длину в пользовательских единицах.
    _Тип значения_: [**\<number>**](/docs/Web/SVG/Content_type#Number) ; _Значение по умолчанию_:_нет_; _Анимирование_: **Да**

### Глобальные атрибуты

- [Атрибуты ядра](/docs/Web/SVG/Attribute/Core)
  - : Most notably: {{SVGAttr('id')}}, {{SVGAttr('tabindex')}}
- [Атрибуты стиля](/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [Атрибуты условной обработки](/docs/Web/SVG/Attribute/Conditional_Processing)
  - : Most notably: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- Атрибуты событий
  - : [Атрибуты глобальных событий](/docs/Web/SVG/Attribute/Events#Global_Event_Attributes), [Атрибуты графических событий](/docs/Web/SVG/Attribute/Events#Graphical_Event_Attributes)
- [Presentation Attributes](/docs/Web/SVG/Attribute/Presentation)
  - : Most notably: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- ARIA-атрибуты
  - : `aria-activedescendant`, `aria-atomic`, `aria-autocomplete`, `aria-busy`, `aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`, `aria-details`, `aria-disabled`, `aria-dropeffect`, `aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`, `aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`, `aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`, `aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`, `aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`, `aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`, `aria-rowindex`, `aria-rowspan`, `aria-selected`, `aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, `aria-valuetext`, `role`

## Использование

{{svginfo}}

## Спецификация

{{Specifications}}

## Совместимость браузера

{{Compat}}

## Смотрите также

- SVG basic shapes: {{ SVGElement('circle') }}, {{ SVGElement('ellipse') }}, {{ SVGElement('line') }}, {{ SVGElement('polygon') }}, {{ SVGElement('polyline') }}, {{ SVGElement('rect') }}
- [The MDN SVG "Getting Started" tutorial : Path](/ru/docs/Web/SVG/Tutorial/Paths)
