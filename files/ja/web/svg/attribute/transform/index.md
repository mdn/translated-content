---
title: transform
slug: Web/SVG/Attribute/transform
l10n:
  sourceCommit: dc86333db6b97ee7fed053f76f6d0a6ecec763e9
---

{{SVGRef}}

**`transform`** 属性は、要素とその要素の子に適用される変換定義のリストを定義します。

> **メモ:** SVG2 では、 `transform` はプレゼンテーション属性であり、 CSS プロパティとして使用することができます。ただし、 CSS プロパティとこの属性との間には構文の違いがあるので注意が必要です。その場合に使用する具体的な構文については、 CSS プロパティの {{cssxref('transform')}} のドキュメントを参照してください。

この属性はすべての SVG 要素で使用できます。

## 例

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

{{EmbedLiveSample("Example", '100%', 200)}}

SVG 1.1 では、 {{SVGElement('a')}}, {{SVGElement('circle')}}, {{SVGElement('clipPath')}}, {{SVGElement('defs')}}, {{SVGElement('ellipse')}}, {{SVGElement('foreignObject')}}, {{SVGElement('g')}}, {{SVGElement('image')}}, {{SVGElement('line')}}, {{SVGElement('path')}}, {{SVGElement('polygon')}}, {{SVGElement('polyline')}}, {{SVGElement('rect')}}, {{SVGElement('switch')}}, {{SVGElement('text')}}, {{SVGElement('use')}} の 16 要素でのみ使用することができました。

また、 SVG 1.1 からの遺物として、 {{SVGElement('linearGradient')}} と {{SVGElement('radialGradient')}} は `gradientTransform` 属性に対応しており、 {{SVGElement('pattern')}} は `patternTransform` 属性に対応しており、どちらも `transform` 属性と全く同じように動作します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#transform-list"
            ><code>&#x3C;transform-list></code></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>none</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## 変換関数

以下の変換関数は、 `transform` 属性の `<transform-list>` で使用することができます。

> **警告:** 仕様書によれば、 CSS の[変換関数](/ja/docs/Web/CSS/transform-function)も使用することができます。しかし、互換性は保証されていません。

### matrix

`matrix(<a> <b> <c> <d> <e> <f>)` 変換関数は、6 つの値の変換行列の形式で変形を指定します。 `matrix(a,b,c,d,e,f)` は次の変換行列を適用することと等価です。 <math display="block"><semantics><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\begin{pmatrix} a &#x26; c &#x26; e \\ b &#x26; d &#x26; f \\ 0 &#x26; 0 &#x26; 1 \end{pmatrix}</annotation></semantics></math> これは、前の座標系から新しい座標系への座標の写像を次の行列の等式によって行うものです。<math display="block"><semantics><mrow><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>newCoordSys</mi></mrow></mstyle></msub></mtd></mtr><mtr><mtd><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>newCoordSys</mi></mrow></mstyle></msub></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><mo>=</mo><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub></mtd></mtr><mtr><mtd><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><mo>=</mo><mrow><mo>(</mo><mtable rowspacing="0.5ex"><mtr><mtd><mi>a</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>c</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi><msub><mi>x</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>d</mi><msub><mi>y</mi><mstyle mathvariant="normal"><mrow><mi>prevCoordSys</mi></mrow></mstyle></msub><mo>+</mo><mi>f</mi></mtd></mtr><mtr><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow></mrow><annotation encoding="TeX"> \begin{pmatrix} x*{\mathrm{newCoordSys}} \\ y*{\mathrm{newCoordSys}} \\ 1 \end{pmatrix} = \begin{pmatrix} a &#x26; c &#x26; e \\ b &#x26; d &#x26; f \\ 0 &#x26; 0 &#x26; 1 \end{pmatrix} \begin{pmatrix} x\_{\mathrm{prevCoordSys}} \\ y\_{\mathrm{prevCoordSys}} \\ 1 \end{pmatrix} = \begin{pmatrix} a x\_{\mathrm{prevCoordSys}} + c y\_{\mathrm{prevCoordSys}} + e \\ b x\_{\mathrm{prevCoordSys}} + d y\_{\mathrm{prevCoordSys}} + f \\ 1 \end{pmatrix}</annotation></semantics></math>

#### 例

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

### translate

`translate(<x> [<y>])` 変換関数は、オブジェクトを `x` と `y` によって移動します。 `y` が提供されなかった場合は、 `0` と見なします。

言い換えれば、次の通りです。

```plain
xnew = xold + <x>
ynew = yold + <y>
```

#### 例

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
    transform="translate(50 50)" />
</svg>
```

{{EmbedLiveSample('Example_3', '100%', 200)}}

### scale

`scale(<x> [<y>])` 変換関数は、 `x` と `y` による拡大縮小操作を指定します。 `y` が提供されなかった場合は、 `x` と同じと見なします。

#### 例

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
  <circle cx="0" cy="0" r="10" fill="yellow" transform="scale(1, 4)" />

  <!-- horizontal scale -->
  <circle cx="0" cy="0" r="10" fill="pink" transform="scale(4, 1)" />

  <!-- No scale -->
  <circle cx="0" cy="0" r="10" fill="black" />
</svg>
```

{{EmbedLiveSample('Scale', '100%', 200)}}

### rotate

`rotate(<a> [<x> <y>])` 変換関数は、指定された点を軸に `a` 度の回転を指定します。オプションの引数 `x` と `y` が提供されなかった場合、回転は現在のユーザーの座標系の原点を基準に行われます。オプションの引数 `x` と `y` が指定された場合は、回転は `(x, y)` を基準に行われます。

#### 例

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
    transform="rotate(100, 10, 10)" />
</svg>
```

{{EmbedLiveSample('Rotate', '100%', 200)}}

### skewX

`skewX(<a>)` 変換関数は、 X 軸を基準に `a` 度の傾斜変換を指定します。

#### 例

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

### skewY

`skewY(<a>)` 変換関数は、 Y 軸を基準に `a` 度の傾斜変換を指定します。

#### 例

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

## 仕様書

{{Specifications}}
