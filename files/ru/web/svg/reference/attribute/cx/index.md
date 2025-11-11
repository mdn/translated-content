---
title: cx
slug: Web/SVG/Reference/Attribute/cx
l10n:
  sourceCommit: 0c3c2bd5feaedbe0ffa7fd3530c625e5b1200670
---

{{SVGRef}}

Атрибут **`cx`** определяет координату центральной точки по оси x.

Этот атрибут можно использовать для следующих SVG-элементов:

- {{SVGElement("circle")}}
- {{SVGElement("ellipse")}}
- {{SVGElement("radialGradient")}}

## Пример

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <radialGradient cx="25%" id="myGradient">
    <stop offset="0" stop-color="white" />
    <stop offset="100%" stop-color="black" />
  </radialGradient>

  <circle cx="50" cy="50" r="45" />
  <ellipse cx="150" cy="50" rx="45" ry="25" />
  <rect x="205" y="5" width="90" height="90" fill="url(#myGradient)" />
</svg>
```

{{EmbedLiveSample("Пример", 100, 100)}}

## circle

Для элемента {{SVGElement('circle')}} атрибут `cx` определяет координату центра фигуры по оси x.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Значение</th>
      <td>{{cssxref("length-percentage")}}</td>
    </tr>
    <tr>
      <th scope="row">Значение по умолчанию</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Анимируемый</th>
      <td>Да</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Начиная с SVG2, `cx` является _Геометрическим свойством_, это означает, что этот атрибут также может быть использован в качестве CSS-свойства для окружностей.

## ellipse

Для элемента {{SVGElement('ellipse')}} атрибут `cx` определяет координату центра фигуры по оси x.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Значение</th>
      <td>{{cssxref("length-percentage")}}</td>
    </tr>
    <tr>
      <th scope="row">Значение по умолчанию</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Анимируемый</th>
      <td>Да</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Начиная с SVG2, `cx` является _Геометрическим свойством_, это означает, что этот атрибут также может быть использован в качестве CSS-свойства для для эллипсов.

## radialGradient

Для элемента {{SVGElement('radialGradient')}} атрибут `cx` определяет координату конечной окружности радиального градиента по оси x.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Значение</th>
      <td>{{cssxref("length-percentage")}}</td>
    </tr>
    <tr>
      <th scope="row">Значение по умолчанию</th>
      <td><code>50%</code></td>
    </tr>
    <tr>
      <th scope="row">Анимируемый</th>
      <td>Да</td>
    </tr>
  </tbody>
</table>

### Пример

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 34 10" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient cx="0" id="myGradient000">
      <stop offset="0%" stop-color="gold" />
      <stop offset="50%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>

    <radialGradient cx="50%" id="myGradient050">
      <stop offset="0%" stop-color="gold" />
      <stop offset="50%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>

    <radialGradient cx="100%" id="myGradient100">
      <stop offset="0%" stop-color="gold" />
      <stop offset="50%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>
  </defs>

  <rect
    x="1"
    y="1"
    width="8"
    height="8"
    fill="url(#myGradient000)"
    stroke="black" />
  <rect
    x="13"
    y="1"
    width="8"
    height="8"
    fill="url(#myGradient050)"
    stroke="black" />
  <rect
    x="25"
    y="1"
    width="8"
    height="8"
    fill="url(#myGradient100)"
    stroke="black" />
</svg>
```

{{EmbedLiveSample('radialGradient', 150, '100%')}}

## Спецификации

{{Specifications}}

## Смотрите также

- {{SVGAttr("cy")}}
- {{SVGAttr("r")}}
