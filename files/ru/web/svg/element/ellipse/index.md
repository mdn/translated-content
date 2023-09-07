---
title: <ellipse>
slug: Web/SVG/Element/ellipse
---

{{SVGRef}}

Элемент `ellipse` — базовая SVG фигура, используемая для создания эллипсов с помощью координат центра и обоих радиусов.

> **Примечание:** Сам по себе элемент `ellipse` не позволяет задать точное его расположение (например, нельзя сразу отобразить эллипс, повёрнутый на 45**°**), однако его можно повернуть с помощью атрибута {{SVGAttr("transform")}}.

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="100" cy="50" rx="100" ry="50" />
</svg>
```

{{EmbedLiveSample('LiveSample', 100, '100%')}}

## Атрибуты

- {{SVGAttr("cx")}}
  - : Позиция эллипса по x.
    _Тип значения_: [**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage) ; _Значение по умолчанию_: `0`; _Можно анимировать_: **да**
- {{SVGAttr("cy")}}
  - : Позиция эллипса по y.
    _Тип значения_: [**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage) ; _Значение по умолчанию_: `0`; _Можно анимировать_: **да**
- {{SVGAttr("rx")}}
  - : Радиус эллипса по x.
    _Тип значения_: `auto`|[**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage) ;_Значение по умолчанию_: `auto`; _Можно анимировать_: **да**
- {{SVGAttr("ry")}}
  - : Радиус эллипса по y.
    _Тип значения_: `auto`|[**\<length>**](/docs/Web/SVG/Content_type#Length)|[**\<percentage>**](/docs/Web/SVG/Content_type#Percentage) ; _Значение по умолчанию_: `auto`; _Можно анимировать_: **да**
- {{SVGAttr("pathLength")}}

  - : Этот атрибут позволяет установить длину всего пути.

    _Тип значения_: [**\<number>**](/docs/Web/SVG/Content_type#Number) ; _Значение по умолчанию_: _нет_; _Можно анимировать_: **да**

    > **Примечание:** Начиная с SVG2, `cx`, `cy`, `rx` и `ry` это _Геометрические свойства_. Это означает, что они могут быть использованы как CSS-свойства элемента.

### Глобальные Атрибуты

- [Основные атрибуты](/docs/Web/SVG/Attribute/Core)
  - : Самые важные: {{SVGAttr('id')}}, {{SVGAttr('tabindex')}}
- [Атрибуты стиля](/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [Условные атрибуты](/docs/Web/SVG/Attribute/Conditional_Processing)
  - : Самые важные: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- Атрибуты событий
  - : [Глобальные атрибуты событий](/docs/Web/SVG/Attribute/Events#Global_Event_Attributes), [Атрибуты графических событий](/docs/Web/SVG/Attribute/Events#Graphical_Event_Attributes)
- [Атрибуты представления](/docs/Web/SVG/Attribute/Presentation)
  - : Самые важные: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- ARIA-атрибуты
  - : `aria-activedescendant`, `aria-atomic`, `aria-autocomplete`, `aria-busy`, `aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`, `aria-details`, `aria-disabled`, `aria-dropeffect`, `aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`, `aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`, `aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`, `aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`, `aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`, `aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`, `aria-rowindex`, `aria-rowspan`, `aria-selected`, `aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, `aria-valuetext`, `role`

## Информация

{{svginfo}}

## Пример

» [ellipse.svg](/files/3253/ellipse.svg)

## Интерфейс DOM

Этот элемент реализует интерфейс {{ domxref("SVGEllipseElement") }}.

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{SVGElement("circle")}}
