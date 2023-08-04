---
title: transform
slug: Web/SVG/Attribute/transform
---

{{SVGRef}}

**`transform`** 属性定义了一系列应用于元素和元素子元素的变换规则集合

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg
  viewBox="-40 0 150 100"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <g
    fill="grey"
    transform="rotate(-10 50 100)
                translate(-36 45.5)
                skewX(40)
                scale(1 0.5)">
    <path
      id="heart"
      d="M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z" />
  </g>

  <use xlink:href="#heart" fill="none" stroke="red" />
</svg>
```

{{EmbedLiveSample('示例', '100%', 200)}}

**提示：** 从 SVG2 开始，transform 是一种图像属性，这意味着它可以用作 CSS 属性。但是请注意，CSS 属性和属性之间在语法上存在一些差异。有关在这种情况下使用的特定语法，请参见 CSS 属性{{cssxref('transform')}}的文档

作为表示属性，任何元素都可以使用**`transform`** （在 SVG 1.1 中，仅这 16 个元素被允许使用：{{SVGElement('a')}}, {{SVGElement('circle')}}, {{SVGElement('clipPath')}}, {{SVGElement('defs')}}, {{SVGElement('ellipse')}}, {{SVGElement('foreignObject')}}, {{SVGElement('g')}}, {{SVGElement('image')}}, {{SVGElement('line')}}, {{SVGElement('path')}}, {{SVGElement('polygon')}}, {{SVGElement('polyline')}}, {{SVGElement('rect')}}, {{SVGElement('switch')}}, {{SVGElement('text')}}, and {{SVGElement('use')}})。

另外，作为 SVG 1.1 的遗留物，{{SVGElement('linearGradient')}}和{{SVGElement('radialGradient')}}支持 `gradientTransform` 属性，而{{SVGElement('pattern')}}支持 `patternTransform` 属性，两者的行为完全相同于 `transform` 属性

| Value         | **[\<transform-list>](/zh-CN/docs/Web/SVG/Content_type#Transform-list)** |
| ------------- | ------------------------------------------------------------------------ |
| Default value | _none_                                                                   |
| Animatable    | Yes                                                                      |

## Transform functions

`transform` 属性 `<transform-list>` 可以使用以下的所有 `transform` 函数

**警告：** 根据规范，您还应该能够使用 CSS {{cssxref('transform-function', 'transform functions')}}，但是，这不能保证兼容性。

### Matrix

`matrix(<a> <b> <c> <d> <e> <f>)` 函数以六个值的变换矩阵形式指定一个 `transform`。matrix（a，b，c，d，e，f）等同于应用变换矩阵： \ begin {pmatrix} a＆c＆e \\\ b＆d＆f \\\ 0＆0＆1 \ end {pmatrix} 通过以下矩阵等式将坐标从先前的坐标系映射到新的坐标系： <math display="block"><semantics><mrow><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>n</mi><mi>e</mi><mi>w</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub></mtd></mtr><mtr><mtd><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>n</mi><mi>e</mi><mi>w</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><mo>=</mo><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>p</mi><mi>r</mi><mi>e</mi><mi>v</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub></mtd></mtr><mtr><mtd><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>p</mi><mi>r</mi><mi>e</mi><mi>v</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><mo>=</mo><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><mi>a</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>p</mi><mi>r</mi><mi>e</mi><mi>v</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>+</mo><mi>c</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>p</mi><mi>r</mi><mi>e</mi><mi>v</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>+</mo><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>p</mi><mi>r</mi><mi>e</mi><mi>v</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>+</mo><mi>d</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>p</mi><mi>r</mi><mi>e</mi><mi>v</mi><mi>C</mi><mi>o</mi><mi>o</mi><mi>r</mi><mi>d</mi><mi>S</mi><mi>y</mi><mi>s</mi></mrow></mstyle></msub><mo>+</mo><mi>f</mi></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow></mrow><annotation encoding="TeX"> \begin{pmatrix} x*{\mathrm{newCoordSys}} \\ y*{\mathrm{newCoordSys}} \\ 1 \end{pmatrix} = \begin{pmatrix} a &#x26; c &#x26; e \\ b &#x26; d &#x26; f \\ 0 &#x26; 0 &#x26; 1 \end{pmatrix} \begin{pmatrix} x*{\mathrm{prevCoordSys}} \\ y*{\mathrm{prevCoordSys}} \\ 1 \end{pmatrix} = \begin{pmatrix} a x*{\mathrm{prevCoordSys}} + c y*{\mathrm{prevCoordSys}} + e \\ b x*{\mathrm{prevCoordSys}} + d y*{\mathrm{prevCoordSys}} + f \\ 1 \end{pmatrix}</annotation></semantics></math>

#### 举例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="30" height="20" fill="green" />

  <!--
  In the following example we are applying the matrix:
  [a c e]    [3 -1 30]
  [b d f] => [1  3 40]
  [0 0 1]    [0  0  1]

  which transform the rectangle as such:

  top left corner: oldX=10 oldY=10
  newX = a * oldX + c * oldY + e = 3 * 10 - 1 * 10 + 30 = 50
  newY = b * oldX + d * oldY + f = 1 * 10 + 3 * 10 + 40 = 80

  top right corner: oldX=40 oldY=10
  newX = a * oldX + c * oldY + e = 3 * 40 - 1 * 10 + 30 = 140
  newY = b * oldX + d * oldY + f = 1 * 40 + 3 * 10 + 40 = 110

  bottom left corner: oldX=10 oldY=30
  newX = a * oldX + c * oldY + e = 3 * 10 - 1 * 30 + 30 = 30
  newY = b * oldX + d * oldY + f = 1 * 10 + 3 * 30 + 40 = 140

  bottom right corner: oldX=40 oldY=30
  newX = a * oldX + c * oldY + e = 3 * 40 - 1 * 30 + 30 = 120
  newY = b * oldX + d * oldY + f = 1 * 40 + 3 * 30 + 40 = 170
  -->
  <rect
    x="10"
    y="10"
    width="30"
    height="20"
    fill="red"
    transform="matrix(3 1 -1 3 30 40)" />
</svg>
```

{{EmbedLiveSample('Matrix', '100%', 200)}}

### Translate

`translate(<x> [<y>])` 变换函数通过 `x` 向量和 `y` 向量移动元素 (i.e. `xnew = xold + <x>, ynew = yold + <y>`). 如果 `y` 向量没有被提供，那么默认为 `0`

#### 举例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- No translation -->
  <rect x="5" y="5" width="40" height="40" fill="green" />

  <!-- Horizontal translation -->
  <rect
    x="5"
    y="5"
    width="40"
    height="40"
    fill="blue"
    transform="translate(50)" />

  <!-- Vertical translation -->
  <rect
    x="5"
    y="5"
    width="40"
    height="40"
    fill="red"
    transform="translate(0 50)" />

  <!-- Both horizontal and vertical translation -->
  <rect
    x="5"
    y="5"
    width="40"
    height="40"
    fill="yellow"
    transform="translate(50,50)" />
</svg>
```

{{EmbedLiveSample('Translate', '100%', 200)}}

### Scale

`scale(<x> [<y>])` 变换函数通过 `x` 和 `y`指定一个 **等比例放大缩小** 操作。如果 `y` 没有被提供，那么假定为等同于 `x`

#### 举例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-50 -50 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- uniform scale -->
  <circle cx="0" cy="0" r="10" fill="red" transform="scale(4)" />

  <!-- vertical scale -->
  <circle cx="0" cy="0" r="10" fill="yellow" transform="scale(1,4)" />

  <!-- horizontal scale -->
  <circle cx="0" cy="0" r="10" fill="pink" transform="scale(4,1)" />

  <!-- No scale -->
  <circle cx="0" cy="0" r="10" fill="black" />
</svg>
```

{{EmbedLiveSample('Scale', '100%', 200)}}

### Rotate

`rotate(<a> [<x> <y>])` 变换方法通过一个给定角度对一个指定的点进行旋转变换。如果 x 和 y 没有提供，那么默认为当前元素坐标系原点。否则，就以`(x,y)`为原点进行旋转。

#### 举例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-12 -2 34 14" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="10" height="10" />

  <!-- rotation is done around the point 0,0 -->
  <rect x="0" y="0" width="10" height="10" fill="red" transform="rotate(100)" />

  <!-- rotation is done around the point 10,10 -->
  <rect
    x="0"
    y="0"
    width="10"
    height="10"
    fill="green"
    transform="rotate(100,10,10)" />
</svg>
```

{{EmbedLiveSample('Rotate', '100%', 200)}}

### SkewX

`skewX(<a>)` 变换函数指定了沿 `x` 轴倾斜 `a°` 的倾斜变换。

#### 举例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-5 -5 10 10" xmlns="http://www.w3.org/2000/svg">
  <rect x="-3" y="-3" width="6" height="6" />

  <rect x="-3" y="-3" width="6" height="6" fill="red" transform="skewX(30)" />
</svg>
```

{{EmbedLiveSample('SkewX', '100%', 200)}}

### SkewY

`skewY(<a>)` 变换函数指定了沿 `y` 轴倾斜 `a°` 的倾斜变换。

#### 举例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-5 -5 10 10" xmlns="http://www.w3.org/2000/svg">
  <rect x="-3" y="-3" width="6" height="6" />

  <rect x="-3" y="-3" width="6" height="6" fill="red" transform="skewY(30)" />
</svg>
```

{{EmbedLiveSample('SkewY', '100%', 200)}}

## Specification

{{Specifications}}
