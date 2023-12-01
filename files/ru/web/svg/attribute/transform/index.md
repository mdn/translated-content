---
title: transform
slug: Web/SVG/Attribute/transform
---

« [Справочник SVG атрибутов](/ru/docs/Web/SVG/Attribute)

В атрибуте `transform` перечисляются описания преобразований, применяемых как к самому элементу, так и к его последователям. Описания в списке разделяются пробелами или запятыми и применяются в порядке слева направо.

## Контекст использования

| Категории        | Нет                                                                              |
| ---------------- | -------------------------------------------------------------------------------- |
| Значение         | **\<transform-list>**                                                            |
| Анимация         | Да                                                                               |
| Нормативная база | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG/coords.html#TransformAttribute) |

### Типы преобразований

- matrix(\<a> \<b> \<c> \<d> \<e> \<f>)

  - : Преобразование с использованием матрицы из шести элементов. Преобразование `matrix(a,b,c,d,e,f)` равнозначно применению матрицы&#x20;

    <math display="block"><semantics><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\begin{pmatrix} a &#x26; c &#x26; e \\ b &#x26; d &#x26; f \\ 0 &#x26; 0 &#x26; 1 \end{pmatrix}</annotation></semantics>,</math>

    &#x20;которая отображает координаты из новой системы координат в предыдущую систему координат используя следующие формулы:&#x20;

    <math display="block"><semantics><mrow><mrow><mo>(</mo><mtable><mtr><mtd><msub><mi>x</mi><mi>пред.</mi></msub></mtd></mtr><mtr><mtd><msub><mi>y</mi><mi>пред.</mi></msub></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><mo>=</mo><mrow><mo>(</mo><mtable><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><mrow><mo>(</mo><mtable><mtr><mtd><msub><mi>x</mi><mstyle><mi>нов.</mi></mstyle></msub></mtd></mtr><mtr><mtd><msub><mi>y</mi><mi>нов.</mi></msub></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><mo>=</mo><mrow><mo>(</mo><mtable><mtr><mtd><mi>a</mi><msub><mi>x</mi><mi>нов.</mi></msub><mo>+</mo><mi>c</mi><msub><mi>y</mi><mi>нов.</mi></msub><mo>+</mo><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi><msub><mi>x</mi><mi>нов.</mi></msub><mo>+</mo><mi>d</mi><msub><mi>y</mi><mi>нов.</mi></msub><mo>+</mo><mi>f</mi></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow></mrow><annotation encoding="TeX"> \begin{pmatrix} x*{\mathrm{пред.}} \\ y*{\mathrm{пред.}} \\ 1 \end{pmatrix} = \begin{pmatrix} a &#x26; c &#x26; e \\ b &#x26; d &#x26; f \\ 0 &#x26; 0 &#x26; 1 \end{pmatrix} \begin{pmatrix} x*{\mathrm{нов.}} \\ y*{\mathrm{нов.}} \\ 1 \end{pmatrix} = \begin{pmatrix} a x*{\mathrm{нов.}} + c y*{\mathrm{нов.}} + e \\ b x*{\mathrm{нов.}} + d y*{\mathrm{нов.}} + f \\ 1 \end{pmatrix}</annotation></semantics></math>

- translate(\<x> \[\<y>])
  - : Перенос по осям `x` и `y`. Равнозначно `matrix(1 0 0 1 x y)`. Если значение `y` опущено, оно принимается равным нулю.
- scale(\<x> \[\<y>])
  - : Масштабирование по осям `x` и `y`. Равнозначно `matrix(x 0 0 y 0 0)`. Если значение `y` опущено, оно принимается равным `x`.
- rotate(\<a> \[\<x> \<y>])

  - : Поворот на `a` градусов вокруг указанной точки. Если необязательные параметры `x` и `y` опущены, поворот будет осуществляться вокруг начала координат текущей пользовательской системы координат. Операция соответствует матрице&#x20;

    <math display="block"><semantics><mrow><mo>(</mo><mtable><mtr><mtd><mo>cos</mo><mi>a</mi></mtd><mtd><mo>-</mo><mo>sin</mo><mi>a</mi></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mo>sin</mo><mi>a</mi></mtd><mtd><mo>cos</mo><mi>a</mi></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\begin{pmatrix} \cos a &#x26; -\sin a &#x26; 0 \\ \sin a &#x26; \cos a &#x26; 0 \\ 0 &#x26; 0 &#x26; 1 \end{pmatrix}</annotation></semantics></math>

    &#x20;Если необязательные параметры `x` и `y` присутствуют, поворот будет осуществляться вокруг точки `(x, y)`. Операция равнозначна следующему списку преобразований: `translate(<x>, <y>) rotate(<a>) translate(-<x>, -<y>)`.

- skewX(\<a>)

  - : Наклон относительно оси `x` на `a` градусов. Операция соответствует матрице&#x20;

    <math display="block"><semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mo>tg</mo><mi>a</mi></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\begin{pmatrix} 1 &#x26; \tan(a) &#x26; 0 \\ 0 &#x26; 1 &#x26; 0 \\ 0 &#x26; 0 &#x26; 1 \end{pmatrix}</annotation></semantics></math>

- skewY(\<a>)

  - : Наклон относительно оси `y` на `a` градусов. Операция соответствует матрице&#x20;

    <math display="block"><semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mo>tg</mo><mi>a</mi></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX"> \begin{pmatrix} 1 &#x26; 0 &#x26; 0 \\ \tan(a) &#x26; 1 &#x26; 0 \\ 0 &#x26; 0 &#x26; 1 \end{pmatrix}</annotation></semantics></math>

## Примеры

### Поворот и перенос SVG-элемента

В этом простом примере мы поворачиваем и переносим SVG-элемент, используя атрибут `transform`. Первоначальный элемент до преобразования показан полупрозрачным.

CSS (необязательный):

```css
text {
  font: 1em sans-serif;
}
```

SVG:

```html
<svg
  width="180"
  height="200"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- Это элемент до применения переноса и поворота -->
  <rect
    x="50"
    y="50"
    height="100"
    width="100"
    style="stroke:#000; fill: #0086B2"
    fill-opacity="0.2"
    stroke-opacity="0.2"></rect>

  <!-- Здесь мы добавим текстовый элемент, повернём и перенесём оба элемента -->
  <rect
    x="50"
    y="50"
    height="100"
    width="100"
    style="stroke:#000; fill: #0086B2"
    transform="translate(30) rotate(45 50 50)"></rect>
  <text x="60" y="105" transform="translate(30) rotate(45 50 50)">
    Hello Moz!
  </text>
</svg>
```

{{EmbedLiveSample("Поворот_и_перенос_SVG-элемента",200,200,"/files/5217/rotate_and_translate_svg.png.png")}}

### Общее преобразование

Вот простой пример, чтобы понять общее преобразование. Мы рассмотрим матрицу преобразования `matrix(1,2,3,4,5,6)` и нарисуем жирную синюю линию из точки (10,20) в точку (30,40) в новой системе координат. Тонкая белая линия, проходящая через те же точки, нарисована над нею, используя первоначальную систему координат.

```html
<svg width="160" height="230" xmlns="http://www.w3.org/2000/svg">
  <g transform="matrix(1,2,3,4,5,6)">
    <!-- Новая система координат (жирная синяя линия)
         x1 = 10 | x2 = 30
         y1 = 20 | y2 = 40
      -->
    <line
      x1="10"
      y1="20"
      x2="30"
      y2="40"
      style="stroke-width: 10px; stroke: blue;" />
  </g>

  <!-- Предыдущая система координат (тонкая белая линия)
       x1 = 1 * 10 + 3 * 20 + 5 = 75  | x2 = 1 * 30 + 3 * 40 + 5 = 155
       y1 = 2 * 10 + 4 * 20 + 6 = 106 | y2 = 2 * 30 + 4 * 40 + 6 = 226
    -->
  <line
    x1="75"
    y1="106"
    x2="155"
    y2="226"
    style="stroke-width: 1px; stroke: white;" />
</svg>
```

{{ EmbedLiveSample('General_Transformation','200px','250px') }}

## Элементы

Следующие элементы могут использовать атрибут `transform`:

- {{ SVGElement("a") }}
- {{ SVGElement("clipPath") }}
- {{ SVGElement("defs") }}
- {{ SVGElement("foreignObject") }}
- {{ SVGElement("g") }}
- {{ SVGElement("switch") }}
- {{ SVGElement("use") }}
- [Графические элементы](/en/SVG/Element#Graphics) »
