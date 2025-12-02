---
title: stroke-dashoffset
slug: Web/SVG/Reference/Attribute/stroke-dashoffset
---

> [!NOTE]
> Прежняя редакция: [Справочник SVG атрибутов](/ru/docs/Web/SVG/Reference/Attribute)
> Этот атрибут определяет смещение обводки относительно начального положения.
> При использовании [\<percentage>](/ru/docs/Web/SVG#percentage), значение будет вычисляться от текущего viewport.
> Значение может быть отрицательным.

{{SVGRef}}
Атрибут **`stroke-dashoffset`** определяет сдвиг массива **dash array** относительно начального положения.

> [!NOTE]
> Атрибут `stroke-dashoffset` может использоваться как свойство CSS.

Как атрибут представления, он может применяться к любому элементу, но влияет только на следующие одиннадцать элементов: {{SVGElement('altGlyph')}}, {{SVGElement('circle')}}, {{SVGElement('ellipse')}}, {{SVGElement('path')}}, {{SVGElement('polygon')}}, {{SVGElement('polyline')}}, {{SVGElement('rect')}}, {{SVGElement('text')}}, {{SVGElement('textPath')}}, {{SVGElement('tref')}}, and {{SVGElement('tspan')}}

## Пример

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-3 0 33 10" xmlns="http://www.w3.org/2000/svg">
  <!-- Без dash array -->
  <line x1="0" y1="1" x2="30" y2="1" stroke="black" />

  <!-- Без dash offset -->
  <line x1="0" y1="3" x2="30" y2="3" stroke="black" stroke-dasharray="3 1" />

  <!--
  Начало dash array тянет 3 отрезка
  -->
  <line
    x1="0"
    y1="5"
    x2="30"
    y2="5"
    stroke="black"
    stroke-dasharray="3 1"
    stroke-dashoffset="3" />

  <!--
  Начало dash array толкает 3 отрезка
  -->
  <line
    x1="0"
    y1="7"
    x2="30"
    y2="7"
    stroke="black"
    stroke-dasharray="3 1"
    stroke-dashoffset="-3" />

  <!--
  Начало dash array тянет 1 отрезок с финишем в том же рендеринге,
  что и в предыдущем примере
  -->
  <line
    x1="0"
    y1="9"
    x2="30"
    y2="9"
    stroke="black"
    stroke-dasharray="3 1"
    stroke-dashoffset="1" />

  <!--
  красным выделено   смещение dash array для каждой строки
  -->
  <path d="M0,5 h-3 M0,7 h3 M0,9 h-1" stroke="rgba(255,0,0,.5)" />
</svg>
```

{{EmbedLiveSample("Пример", '100%', 200)}}

## Usage context

| Категория         | Атрибут оформления                                                                              |
| ----------------- | ----------------------------------------------------------------------------------------------- |
| Значение          | [\<percentage>](/ru/docs/Web/SVG#percentage) \| [\<length>](/ru/docs/Web/SVG#length) \| inherit |
| Исходное значение | 0                                                                                               |
| Анимируемый       | Да                                                                                              |
| Спецификация      | [SVG 1.1 (2nd Edition)](https://www.w3.org/TR/SVG11/painting.html#StrokeDashoffsetProperty)     |

## Элементы

Следующие элементы могут использовать атрибут `stroke-dashoffset`

- [Элементы форм](/ru/docs/Web/SVG/Reference/Element#shape)
- [Текстовые элементы](/ru/docs/Web/SVG/Reference/Element#textcontent)
