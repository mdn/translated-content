---
title: <line>
slug: Web/SVG/Reference/Element/line
---

{{SVGRef}}

Элемент **`<line>`** одна из базовых фигур SVG, используемая для создания линии, связывающей две точки.

## Пример

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

{{EmbedLiveSample("Пример", 100, 100)}}

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

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{SVGElement("polygon")}}
- {{SVGElement("path")}}
- [SVG Line - описание и примеры](https://www.svg-expert.ru/svg/line/)
