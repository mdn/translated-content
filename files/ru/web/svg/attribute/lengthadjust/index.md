---
title: lengthAdjust
slug: Web/SVG/Attribute/lengthAdjust
---

Когда SVG элемент `<text>` **или** `<tspan>` имеет конкретную длину, установленную с помощью атрибута `textLengt`, атрибут `lengthAdjust` контролирует как текст помещается в эту длину (растягивается или сжимается).

Существует 2 допустимых значения для атрибута `lengthAdjust`: `spacing` и `spacingAndGlyphs`. Используя `spacing` (установлено по умолчанию), форма букв сохраняется, но расстояние между ними увеличивается или уменьшается. Используя `spacingAndGlyphs` весь тестовый элемент растягивается.

## SVG текст с использованием lengthAdjust

### HTML Content

```html
<svg width="300" height="150" xmlns="http://www.w3.org/2000/svg">
  <g font-face="sans-serif">
    <text x="0" y="20" textLength="300" lengthAdjust="spacing">
      Stretched using spacing only.
    </text>
    <text x="0" y="50" textLength="300" lengthAdjust="spacingAndGlyphs">
      Stretched using spacing and glyphs.
    </text>
    <text x="0" y="80" textLength="100" lengthAdjust="spacing">
      Shrunk using spacing only.
    </text>
    <text x="0" y="110" textLength="100" lengthAdjust="spacingAndGlyphs">
      Shrunk using spacing and glyphs.
    </text>
  </g>
</svg>
```

### Результат

{{ EmbedLiveSample('SVG_text_fitting_using_lengthAdjust') }}
