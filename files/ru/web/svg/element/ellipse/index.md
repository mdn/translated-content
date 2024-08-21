---
title: <ellipse>
slug: Web/SVG/Element/ellipse
---

{{SVGRef}}

Элемент `ellipse` — базовая SVG фигура, используемая для создания эллипсов с помощью координат центра и обоих радиусов.

> [!NOTE]
> Сам по себе элемент `ellipse` не позволяет задать точное его расположение (например, нельзя сразу отобразить эллипс, повёрнутый на 45**°**), однако его можно повернуть с помощью атрибута {{SVGAttr("transform")}}.

## Пример

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

{{EmbedLiveSample("Пример", 100, '100%')}}

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

> [!NOTE]
> Начиная с SVG2, `cx`, `cy`, `rx` и `ry` это _Геометрические свойства_. Это означает, что они могут быть использованы как CSS-свойства элемента.

## Контекст использования

{{svginfo}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Другие основные SVG фигуры: **{{ SVGElement('circle') }}**, {{ SVGElement('line') }}, {{ SVGElement('polygon') }}, {{ SVGElement('polyline') }}, {{ SVGElement('rect') }}
