---
title: transform
slug: Web/SVG/Reference/Attribute/transform
l10n:
  sourceCommit: 193ee88d26a8ab4dea8f8b70464167edccee92e1
---

**`transform`** 属性定义应用于元素及其子元素的变换规则列表。

> [!NOTE]
> 从 SVG2 开始，`transform` 为表现属性，这意味着它可以用作 CSS 属性。但是，请注意 CSS 属性和该属性的语法存在一些差异。有关在这种情况下使用的特定语法，请参见 CSS {{cssxref('transform')}} 属性的文档。

你可以在任何 SVG 元素上使用此属性。

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

  <use href="#heart" fill="none" stroke="red" />
</svg>
```

{{EmbedLiveSample("示例", '100%', 200)}}

在 SVG 1.1 中，仅有 16 种元素可以使用它：{{SVGElement('a')}}、{{SVGElement('circle')}}、{{SVGElement('clipPath')}}、{{SVGElement('defs')}}、{{SVGElement('ellipse')}}、{{SVGElement('foreignObject')}}、{{SVGElement('g')}}、{{SVGElement('image')}}、{{SVGElement('line')}}、{{SVGElement('path')}}、{{SVGElement('polygon')}}、{{SVGElement('polyline')}}、{{SVGElement('rect')}}、{{SVGElement('switch')}}、{{SVGElement('text')}} 和 {{SVGElement('use')}}。

另外，作为 SVG 1.1 的遗留物，{{SVGElement('linearGradient')}} 和 {{SVGElement('radialGradient')}} 支持 `gradientTransform` 属性，而 {{SVGElement('pattern')}} 支持 `patternTransform` 属性，两者的行为与 `transform` 属性完全相同。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">值</th>
      <td>
        <strong
          ><a href="/zh-CN/docs/Web/SVG/Guides/Content_type#transform-list"
            ><code>&#x3C;transform-list></code></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">默认值</th>
      <td><em>无</em></td>
    </tr>
    <tr>
      <th scope="row">动画性</th>
      <td>有</td>
    </tr>
  </tbody>
</table>

## 变换函数

`transform` 属性的 `<transform-list>` 可以使用以下所有的变换函数

> [!WARNING]
> 根据规范，你还应该能够使用 CSS [变换函数](/zh-CN/docs/Web/CSS/Reference/Values/transform-function)。但是，这不能保证兼容性。

### 矩阵

`matrix(<a> <b> <c> <d> <e> <f>)` 变换函数以六个值的变换矩阵形式指定变换。`matrix(a,b,c,d,e,f)` 等同于应用变换矩阵：

<math display="block">
  <semantics><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\begin{pmatrix} a &#x26; c &#x26; e \\ b &#x26; d &#x26; f \\ 0 &#x26; 0 &#x26; 1 \end{pmatrix}</annotation></semantics>
</math>

它通过以下矩阵等式将坐标从先前的坐标系映射到新的坐标系：

<math display="block">
  <semantics><mrow><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>newCoordSys</mi></mrow></mstyle></msub></mtd></mtr><mtr><mtd><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>newCoordSys</mi></mrow></mstyle></msub></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><mo>=</mo><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub></mtd></mtr><mtr><mtd><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><mo>=</mo><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><mi>a</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>c</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>d</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>f</mi></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow></mrow><annotation encoding="TeX"> \begin{pmatrix} x_{\mathrm{newCoordSys}} \\ y_{\mathrm{newCoordSys}} \\ 1 \end{pmatrix} = \begin{pmatrix} a &#x26; c &#x26; e \\ b &#x26; d &#x26; f \\ 0 &#x26; 0 &#x26; 1 \end{pmatrix} \begin{pmatrix} x_{\mathrm{prevCoordSys}} \\ y_{\mathrm{prevCoordSys}} \\ 1 \end{pmatrix} = \begin{pmatrix} a x_{\mathrm{prevCoordSys}} + c y_{\mathrm{prevCoordSys}} + e \\ b x_{\mathrm{prevCoordSys}} + d y_{\mathrm{prevCoordSys}} + f \\ 1 \end{pmatrix}</annotation></semantics>
</math>

#### 示例

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
  在下面的示例中，我们应用矩阵：
  [a c e]    [3 -1 30]
  [b d f] => [1  3 40]
  [0 0 1]    [0  0  1]

  矩形变换如下：

  左上角：oldX=10 oldY=10
  newX = a * oldX + c * oldY + e = 3 * 10 - 1 * 10 + 30 = 50
  newY = b * oldX + d * oldY + f = 1 * 10 + 3 * 10 + 40 = 80

  右上角：oldX=40 oldY=10
  newX = a * oldX + c * oldY + e = 3 * 40 - 1 * 10 + 30 = 140
  newY = b * oldX + d * oldY + f = 1 * 40 + 3 * 10 + 40 = 110

  左下角：oldX=10 oldY=30
  newX = a * oldX + c * oldY + e = 3 * 10 - 1 * 30 + 30 = 30
  newY = b * oldX + d * oldY + f = 1 * 10 + 3 * 30 + 40 = 140

  右下角：oldX=40 oldY=30
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

{{EmbedLiveSample('矩阵', '100%', 200)}}

### 平移

`translate(<x> [<y>])` 变换函数将对象移动 `x` 和 `y`。如果没有提供 `y`，那么其默认为 `0`。

换而言之：

```plain
xnew = xold + <x>
ynew = yold + <y>
```

#### 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- 未经平移 -->
  <rect x="5" y="5" width="40" height="40" fill="green" />

  <!-- 水平平移 -->
  <rect
    x="5"
    y="5"
    width="40"
    height="40"
    fill="blue"
    transform="translate(50)" />

  <!-- 垂直平移 -->
  <rect
    x="5"
    y="5"
    width="40"
    height="40"
    fill="red"
    transform="translate(0 50)" />

  <!-- 水平和垂直平移 -->
  <rect
    x="5"
    y="5"
    width="40"
    height="40"
    fill="yellow"
    transform="translate(50 50)" />
</svg>
```

{{EmbedLiveSample('示例_3', '100%', 200)}}

### 缩放

`scale(<x> [<y>])` 变换函数指定一个按 `x` 和 `y` 进行缩放的操作。如果没有提供 `y`，那么假定其等同于 `x`。

#### 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-50 -50 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- 等比缩放 -->
  <circle cx="0" cy="0" r="10" fill="red" transform="scale(4)" />

  <!-- 垂直缩放 -->
  <circle cx="0" cy="0" r="10" fill="yellow" transform="scale(1, 4)" />

  <!-- 水平缩放 -->
  <circle cx="0" cy="0" r="10" fill="pink" transform="scale(4, 1)" />

  <!-- 无缩放 -->
  <circle cx="0" cy="0" r="10" fill="black" />
</svg>
```

{{EmbedLiveSample('缩放', '100%', 200)}}

### 旋转

`rotate(<a> [<x> <y>])` 变换函数指定一个围绕给定点旋转 `a` 度的操作。如果没有提供可选参数 `x` 和 `y`，那么默认绕当前用户坐标系的原点旋转。否则，就以 `(x,y)` 为原点进行旋转。

#### 示例

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

  <!-- 绕 0,0 点旋转 -->
  <rect x="0" y="0" width="10" height="10" fill="red" transform="rotate(100)" />

  <!-- 绕 10,10 点旋转 -->
  <rect
    x="0"
    y="0"
    width="10"
    height="10"
    fill="green"
    transform="rotate(100, 10, 10)" />
</svg>
```

{{EmbedLiveSample('旋转', '100%', 200)}}

### 倾斜 X

`skewX(<a>)` 变换函数指定沿 `x` 轴倾斜 `a` 度的倾斜变换。

#### 示例

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

{{EmbedLiveSample('倾斜 X', '100%', 200)}}

### 倾斜 Y

`skewY(<a>)` 变换函数指定了沿 `y` 轴倾斜 `a` 度的倾斜变换。

#### 示例

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

{{EmbedLiveSample('倾斜 Y', '100%', 200)}}

## 规范

{{Specifications}}
