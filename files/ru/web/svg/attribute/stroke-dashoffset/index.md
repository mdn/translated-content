---
title: stroke-dashoffset
slug: Web/SVG/Attribute/stroke-dashoffset
---

> **Примечание:** **Прежняя редакция:** « [Справочник SVG атрибутов](/ru/docs/Web/SVG/Attribute)
> Этот атрибут определяет смещение обводки относительно начального положения.
> При использовании [\<percentage>](/ru/SVG/Content_type#Percentage), значение будет вычисляться от текущего viewport.
> Значение может быть отрицательным.

{{SVGRef}}
Атрибут **`stroke-dashoffset`** определяет сдвиг массива **dash array** относительно начального положения.

> **Примечание:** Атрибут `stroke-dashoffset` может использоваться как свойство CSS.

Как атрибут представления, он может применяться к любому элементу, но влияет только на следующие одиннадцать элементов: {{SVGElement('altGlyph')}}, {{SVGElement('circle')}}, {{SVGElement('ellipse')}}, {{SVGElement('path')}}, {{SVGElement('polygon')}}, {{SVGElement('polyline')}}, {{SVGElement('rect')}}, {{SVGElement('text')}}, {{SVGElement('textPath')}}, {{SVGElement('tref')}}, and {{SVGElement('tspan')}}

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

{{EmbedLiveSample('topExample', '100%', 200)}}

## Usage context

| Категория         | Атрибут оформления                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------------- |
| Значение          | [\<percentage>](/en/SVG/Content_type#Percentage) \| [\<length>](/en/SVG/Content_type#Length) \| inherit |
| Исходное значение | 0                                                                                                       |
| Анимируемый       | Да                                                                                                      |
| Спецификация      | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG11/painting.html#StrokeDashoffsetProperty)              |

## Пример

### HTML

```html
<?xml version="1.0"?>
<svg
  width="200"
  height="230"
  viewBox="0 0 200 200"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg">
  <line stroke-dasharray="20, 5" x1="10" y1="10" x2="190" y2="10" />
  <!--
      Поскольку размер штриха 20 с разрывами 5,
      добавление смещения dash-offset 20 приводит к тому,
      что линия начинается с разрыва.
    -->
  <line
    stroke-dashoffset="20"
    stroke-dasharray="20, 5"
    x1="10"
    y1="30"
    x2="190"
    y2="30" />
  <!--
      Добавление смещения штрихов на 10% приводит к началу линии с разрывом там же,
      потому что элемент svg имеет ширину области просмотра 200.
      Меняя размер svg, меняется и значение в пикселях stroke-dashoffset.
    -->
  <line
    stroke-dashoffset="10%"
    stroke-dasharray="20, 5"
    x1="10"
    y1="50"
    x2="190"
    y2="50" />
  <line
    stroke-dashoffset="10"
    stroke-dasharray="20, 5"
    x1="10"
    y1="70"
    x2="190"
    y2="70" />

  <line
    stroke-dashoffset="100"
    stroke-dasharray="200"
    x1="10"
    y1="90"
    x2="190"
    y2="90" />
  <line
    stroke-dashoffset="100"
    stroke-dasharray="100"
    x1="10"
    y1="110"
    x2="190"
    y2="110" />
  <!--
      Без stroke-dasharray - stroke-dashoffset не даст никакого эффекта.
    -->
  <line stroke-dashoffset="50" x1="10" y1="130" x2="190" y2="130" />
  <!--
      stroke-dashoffset values can be negative and as expected offest
      in the opposite direction as a positive value.
      Значения смещения штрихов могут быть отрицательными
      с направлением, обратным положительному значению.
    -->
  <line
    stroke-dashoffset="-40"
    stroke-dasharray="80"
    x1="10"
    y1="150"
    x2="190"
    y2="150" />
  <line stroke-dasharray="80" x1="10" y1="170" x2="190" y2="170" />
  <line
    stroke-dashoffset="-10%"
    stroke-dasharray="65, 5, 1, 5"
    x1="10"
    y1="190"
    x2="190"
    y2="190" />
  <line stroke-dasharray="65, 5, 1, 5" x1="10" y1="210" x2="190" y2="210" />
  <style>
    <![CDATA[
          line{
            stroke: black;
            stroke-width: 2;
            }
            ]]>
  </style>
</svg>
```

### Результат

{{EmbedLiveSample('Пример', '220', '240')}}

## Элементы

Следующие элементы могут использовать атрибут `stroke-dashoffset`

- [Элементы форм](/ru/SVG/Element#Shape)
- [Текстовые элементы](/ru/SVG/Element#TextContent)
