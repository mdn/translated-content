---
title: stroke-linecap
slug: Web/SVG/Attribute/stroke-linecap
---

{{SVGRef}}

Атрибут **`stroke-linecap`** - это атрибут представления, определяющий форму, которая будет использоваться в конце открытых подпутей при штриховании.

> **Примечание:** В качестве атрибута представления можно использовать `stroke-linecap` в качестве свойства CSS.

В качестве атрибута представления он может применяться к любому элементу, но он влияет только на следующие семь элементов: {{SVGElement('altGlyph')}}, {{SVGElement('path')}}, {{SVGElement('polyline')}}, {{SVGElement('text')}}, {{SVGElement('textPath')}}, {{SVGElement('tref')}}, and {{SVGElement('tspan')}}

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
  <!-- Effect of the (default) "butt" value -->
  <line x1="1" y1="1" x2="5" y2="1" stroke="black" stroke-linecap="butt" />

  <!-- Effect of the "round" value -->
  <line x1="1" y1="3" x2="5" y2="3" stroke="black" stroke-linecap="round" />

  <!-- Effect of the "square" value -->
  <line x1="1" y1="5" x2="5" y2="5" stroke="black" stroke-linecap="square" />

  <!--
  the following pink lines highlight the
  position of the path for each stroke
  -->
  <path d="M1,1 h4 M1,3 h4 M1,5 h4" stroke="pink" stroke-width="0.025" />
</svg>
```

{{EmbedLiveSample('topExample', '100%', 200)}}

## Нотации

| Value         | `butt` \| `round` \| `square` |
| ------------- | ----------------------------- |
| Default value | `butt`                        |
| Animatable    | Yes                           |

### butt

Значение `butt` указывает границу каждого подпути и не выходит за пределы двух его конечных точек. На подпути нулевой длины путь не будет отображаться вообще.

#### Пример

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg">
  <!-- Effect of the "butt" value -->
  <path d="M1,1 h4" stroke="black" stroke-linecap="butt" />

  <!-- Effect of the "butt" value on a zero length path -->
  <path d="M3,3 h0" stroke="black" stroke-linecap="butt" />

  <!--
  the following pink lines highlight the
  position of the path for each stroke
  -->
  <path d="M1,1 h4" stroke="pink" stroke-width="0.025" />
  <circle cx="1" cy="1" r="0.05" fill="pink" />
  <circle cx="5" cy="1" r="0.05" fill="pink" />
  <circle cx="3" cy="3" r="0.05" fill="pink" />
</svg>
```

{{EmbedLiveSample('butt', '100%', 200)}}

### round

Значение `round` указывает на то, что в конце каждого подпути обводка будет расширена на полукруг с диаметром, равным ширине обводки. На подпути нулевой длины обводка состоит из полного круга с центром в точке подпути.

#### Пример

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg">
  <!-- Effect of the "round" value -->
  <path d="M1,1 h4" stroke="black" stroke-linecap="round" />

  <!-- Effect of the "round" value on a zero length path -->
  <path d="M3,3 h0" stroke="black" stroke-linecap="round" />

  <!--
  the following pink lines highlight the
  position of the path for each stroke
  -->
  <path d="M1,1 h4" stroke="pink" stroke-width="0.025" />
  <circle cx="1" cy="1" r="0.05" fill="pink" />
  <circle cx="5" cy="1" r="0.05" fill="pink" />
  <circle cx="3" cy="3" r="0.05" fill="pink" />
</svg>
```

{{EmbedLiveSample('round', '100%', 200)}}

### square

Значение `square` указывает, что в конце каждого подпути обводка будет расширена прямоугольником с шириной, равной половине ширины обводки, и высотой, равной ширине обводки. На подпути с нулевой длиной обводка состоит из квадрата, ширина которого равна ширине обводки, с центром в точке подпути.

#### Пример

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg">
  <!-- Effect of the "square" value -->
  <path d="M1,1 h4" stroke="black" stroke-linecap="square" />

  <!-- Effect of the "square" value on a zero length path -->
  <path d="M3,3 h0" stroke="black" stroke-linecap="square" />

  <!--
  the following pink lines highlight the
  position of the path for each stroke
  -->
  <path d="M1,1 h4" stroke="pink" stroke-width="0.025" />
  <circle cx="1" cy="1" r="0.05" fill="pink" />
  <circle cx="5" cy="1" r="0.05" fill="pink" />
  <circle cx="3" cy="3" r="0.05" fill="pink" />
</svg>
```

{{EmbedLiveSample('square', '100%', 200)}}

## Совместимость браузера

{{Compat}}

## Спецификация

{{Specifications}}
