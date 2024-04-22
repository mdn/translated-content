---
title: transform
slug: Web/SVG/Attribute/transform
---

« Indice de atributos SVG

El atributo `transform` exhibe una lista de definiciones de transformación que se aplican a un elemento y a sus hijos. Los elementos en la lista de tranformación están separados por espacios en blanco y/o comas y se aplican de derecha a izquierda.

## Contexto de uso

| Categorias          | None                                                                             |
| ------------------- | -------------------------------------------------------------------------------- |
| Valor               | **`<transform-list>`**                                                           |
| Animable            | Yes                                                                              |
| Documento normativo | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG/coords.html#TransformAttribute) |

### Tipos de definiciones de transformación

- matrix(\<a> \<b> \<c> \<d> \<e> \<f>)
  - : Esta definición de tranformación, especifica una transformación en forma de una matriz de transformación de seis valores. `matrix(a,b,c,d,e,f)` es equivalente a aplicar la siguiente matriz de transformación:<math display="block"><semantics><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\begin{pmatrix} a &#x26; c &#x26; e \\ b &#x26; d &#x26; f \\ 0 &#x26; 0 &#x26; 1 \end{pmatrix}</annotation></semantics></math> que mapea las coordinadas desde un nuevo sistema de coordenadas a un sistema existente mediante la siguiente matriz de igualdades:<math display="block"><semantics><mrow><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>p</mi><mi>r</mi><mi>e</mi><mi>v</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub></mtd></mtr><mtr><mtd><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>p</mi><mi>r</mi><mi>e</mi><mi>v</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><mo>=</mo><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>n</mi><mi>e</mi><mi>w</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub></mtd></mtr><mtr><mtd><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>n</mi><mi>e</mi><mi>w</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><mo>=</mo><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><mi>a</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>n</mi><mi>e</mi><mi>w</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>+</mo><mi>c</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>n</mi><mi>e</mi><mi>w</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>+</mo><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>n</mi><mi>e</mi><mi>w</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>+</mo><mi>d</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>n</mi><mi>e</mi><mi>w</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>+</mo><mi>f</mi></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow></mrow><annotation encoding="TeX"> \begin{pmatrix} x*{\mathrm{prevCoordSys}} \\ y*{\mathrm{prevCoordSys}} \\ 1 \end{pmatrix} = \begin{pmatrix} a &#x26; c &#x26; e \\ b &#x26; d &#x26; f \\ 0 &#x26; 0 &#x26; 1 \end{pmatrix} \begin{pmatrix} x*{\mathrm{newCoordSys}} \\ y*{\mathrm{newCoordSys}} \\ 1 \end{pmatrix} = \begin{pmatrix} a x*{\mathrm{newCoordSys}} + c y*{\mathrm{newCoordSys}} + e \\ b x*{\mathrm{newCoordSys}} + d y*{\mathrm{newCoordSys}} + f \\ 1 \end{pmatrix}</annotation></semantics></math>
- translate(\<x> [\<y>])
  - : Esta definición de transformación, especifica la transición en `x` e `y`. Es equivalente a: `matrix(1 0 0 1 x y)`. Si no se provee ningun valor de `y` , éste se asume como cero.
- scale(\<x> [\<y>])
  - : Esta definición de transformación, especifica la escala de operación en `x` e `y`. Es equivalente a: `matrix(x 0 0 y 0 0)`. Si no se provee ningun valor de `y` , éste se asume igual a `x.`
- rotate(\<a> [\<x> \<y>])
  - : Esta definición de transformación, especifica la rotación en `a` grados a partir del punto dado. Si los parámetros opcionales `x` e `y` no se proveen, la rotación se produce en el origen del actual sistema de coordenadas del usuario. Esta operación se corresponde con la matriz:<math display="block"><semantics><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><mo lspace="0em" rspace="0em">cos</mo><mi>a</mi></mtd><mtd><mo>-</mo><mo lspace="0em" rspace="0em">sin</mo><mi>a</mi></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mo lspace="0em" rspace="0em">sin</mo><mi>a</mi></mtd><mtd><mo lspace="0em" rspace="0em">cos</mo><mi>a</mi></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\begin{pmatrix} \cos a &#x26; -\sin a &#x26; 0 \\ \sin a &#x26; \cos a &#x26; 0 \\ 0 &#x26; 0 &#x26; 1 \end{pmatrix}</annotation></semantics></math> Si se proveen los parámetros opcionales `x` e `y` , la rotación se produce en el punto provisto `(x, y)`. La operación representa el equivalente a la siguiente lista de transformaciones: `translate(<x>, <y>) rotate(<a>) translate(-<x>, -<y>)`.
- skewX(\<a>)
  - : This transform definition specifies a skew transformation along the x axis by `a` degrees. The operation corresponds to the matrix <math display="block"><semantics><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><mn>1</mn></mtd><mtd><mo lspace="0em" rspace="0em">tan</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\begin{pmatrix} 1 &#x26; \tan(a) &#x26; 0 \\ 0 &#x26; 1 &#x26; 0 \\ 0 &#x26; 0 &#x26; 1 \end{pmatrix}</annotation></semantics></math>
- skewY(\<a>)

  - : This transform definition specifies a skew transformation along the y axis by `a` degrees. The operation corresponds to the matrix <math display="block"><semantics><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mo lspace="0em" rspace="0em">tan</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX"> \begin{pmatrix} 1 &#x26; 0 &#x26; 0 \\ \tan(a) &#x26; 1 &#x26; 0 \\ 0 &#x26; 0 &#x26; 1 \end{pmatrix}</annotation></semantics></math>

## Example

### Rotating and Translating an SVG element

In this simple example we rotate and translate (move) an SVG element using transform SVG attribute. The original element before transform is shown with a low opacity.

CSS (optional):

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
  <!-- This is the element before translation and rotation are applied -->
  <rect
    x="50"
    y="50"
    height="100"
    width="100"
    style="stroke:#000; fill: #0086B2"
    fill-opacity="0.2"
    stroke-opacity="0.2"></rect>

  <!-- Now we add a text element and apply rotate and translate to both -->
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

{{EmbedLiveSample("Rotating_and_Translating_an_SVG_element",200,200,"/files/5217/rotate_and_translate_svg.png.png")}}

### General Transformation

Here is a basic example to understand a general transformation. We consider the transform `matrix(1,2,3,4,5,6)` and draw a thick blue line from (10,20) to (30,40) in the new coordinate system. A thin white line with the same end points is drawn above it using the original coordinate system.

```html
<svg width="160" height="230" xmlns="http://www.w3.org/2000/svg">
  <g transform="matrix(1,2,3,4,5,6)">
    <!-- New coordinate system (thick blue line)
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

  <!-- Previous coordinate system (thin white line)
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

### Illustration of Text at the Same Position Rotated Around Different Points

All text examples in the SVG below have the same positioning on the page (`x="200" y="0"`), and all are rotated at 45°. The only difference is the point that anchors the rotation.

```html
<svg
  viewBox="-20 -20 820 420"
  xmlns="http://www.w3.org/2000/svg"
  width="800"
  height="400">
  <text x="200" y="0">
    ...unrotated text; same starting position as examples below (in all cases:
    x="200" y="0")
  </text>

  <circle
    cx="200"
    cy="0"
    r="2"
    style="stroke: green; stroke-width: 1; fill: green;" />
  <text x="200" y="0" transform="rotate(45 200,0)" style="fill: green;">
    ...(1) rotate(45 200,0) (rotated 45° around a point at 200,0)
  </text>

  <circle
    cx="100"
    cy="0"
    r="2"
    style="stroke: blue; stroke-width: 1; fill: blue;" />
  <path
    d="M 200,0 A 100,100 0 0,1 0,0"
    style="stroke: blue; stroke-width: 1; fill: transparent;" />
  <text x="200" y="0" transform="rotate(45 100,0)" style="fill: blue;">
    ...(2) rotate(45 100,0) (rotated 45° around a point at 100,0)
  </text>

  <circle
    cx="0"
    cy="0"
    r="2"
    style="stroke: red; stroke-width: 1; fill: red;" />
  <path
    d="M 200,0 A 200,200 0 0,1 0,200"
    style="stroke: red; stroke-width: 1; fill: transparent;" />
  <text x="200" y="0" transform="rotate(45 0,0)" style="fill: red;">
    ...(3) rotate(45 0,0) (rotated 45° around a point at 0,0)
  </text>
</svg>
```

{{EmbedLiveSample("Illustration_of_Text_at_the_Same_Position_Rotated_Around_Different_Points", 800, 400)}}

## Elements

The following elements can use the `transform` attribute:

- {{ SVGElement("a") }}
- {{ SVGElement("clipPath") }}
- {{ SVGElement("defs") }}
- {{ SVGElement("foreignObject") }}
- {{ SVGElement("g") }}
- {{ SVGElement("switch") }}
- {{ SVGElement("use") }}
- {{ SVGElement("svg") }} (SVG 2 onwards)
- [Graphics elements](/en/SVG/Element#Graphics) »
