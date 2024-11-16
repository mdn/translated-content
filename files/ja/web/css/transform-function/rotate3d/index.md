---
title: rotate3d()
slug: Web/CSS/transform-function/rotate3d
l10n:
  sourceCommit: 48813be4b5187c6a17e744e7f9ba37a146302847
---

{{CSSRef}}

**`rotate3d()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)は、要素を 3D 空間内の固定した軸を中心に、形を崩さずに回転させる座標変換を定義します。結果は {{cssxref("&lt;transform-function&gt;")}} データ型になります。

{{EmbedInteractiveExample("pages/css/rotate3d.html")}}

3D 空間では、回転には三次元の自由度があり、これらが一緒になって単一の回転軸を表します。回転軸は \[x, y, z] ベクトルによって定義され、 ({{ cssxref("transform-origin") }} プロパティで定義される) 原点を通過します。もし、指定値として、ベクトルが*正規化*されていない場合 (すなわち、3 つの座標の 2 乗の合計が 1 ではない場合)、{{glossary("user agent", "ユーザーエージェント")}}が内部的に正規化します。正規化できないベクトル、例えば null ベクトル \[0, 0, 0] では、回転が無視されますが、 CSS プロパティ全体を無効化はしません。

> [!NOTE]
> 2D 平面での回転とは異なり、 3D での回転はふつう交換可能ではありません。言い換えれば、回転の順番が結果に影響を与えます。

## 構文

`rotate3d()` で行う回転の量は、3 つの {{cssxref("&lt;number&gt;")}} および 1 つの {{cssxref("&lt;angle&gt;")}} で指定します。 `<number>` は回転軸を表すベクトルの X, Y, Z 座標を表します。 `<angle>` は回転角を表します。正の数の場合、回転方向は時計回りで、負の数の場合、回転方向は反時計回りになります。

```css
rotate3d(x, y, z, a)
```

### 値

- `x`
  - : {{cssxref("&lt;number&gt;")}} で、回転軸を表すベクトルの X 座標を表し、 0 から 1 までの値を取ります。
- `y`
  - : {{cssxref("&lt;number&gt;")}} で、回転軸を表すベクトルの Y 座標を表し、 0 から 1 までの値を取ります。
- `z`
  - : {{cssxref("&lt;number&gt;")}} で、回転軸を表すベクトルの Z 座標を表し、 0 から 1 までの値を取ります。
- `a`
  - : {{ cssxref("&lt;angle&gt;") }} で、回転する角度を表します。正の数の角度は時計回りの回転を、負の数の角度は反時計回りの回転を表します。

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col"><a href="/ja/docs/Web/CSS/transform-function#直交座標系">直交座標系</a> (<a href="https://ja.wikipedia.org/wiki/実数空間">ℝ^2</a>)</th>
      <td rowspan="2">
        この座標変換は 3D 空間に適用され、平面で表すことはできません。
      </td>
    </tr>
    <tr>
      <th scope="col"><a href="https://en.wikipedia.org/wiki/Homogeneous_coordinates">同次座標系</a> (<a href="https://en.wikipedia.org/wiki/Real_projective_plane">ℝℙ^2</a>)</th>
    </tr>
    <tr>
      <th scope="col">直交座標系 (<a href="https://ja.wikipedia.org/wiki/実数空間">ℝ^3</a>)</th>
      <td>
        <math><semantics><mrow><mo>(</mo><mtable displaystyle="false" rowspacing="0.5ex"><mtr><mtd><mn>1</mn><mo>+</mo><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo></mtd><mtd><mi>z</mi><mo>⋅</mo><mo lspace="0em" rspace="0em">sin</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>+</mo><mi>x</mi><mi>y</mi><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mtd><mtd><mo>−</mo><mi>y</mi><mo>⋅</mo><mo lspace="0em" rspace="0em">sin</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>+</mo><mi>x</mi><mi>z</mi><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mtd></mtr><mtr><mtd><mo>−</mo><mi>z</mi><mo>⋅</mo><mo lspace="0em" rspace="0em">sin</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>+</mo><mi>x</mi><mi>y</mi><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mtd><mtd><mn>1</mn><mo>+</mo><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo></mtd><mtd><mi>x</mi><mo>⋅</mo><mo lspace="0em" rspace="0em">sin</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>+</mo><mi>y</mi><mi>z</mi><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mtd></mtr><mtr><mtd><mi>y</mi><mo>⋅</mo><mo lspace="0em" rspace="0em">sin</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>+</mo><mi>x</mi><mi>z</mi><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mtd><mtd><mo>−</mo><mi>x</mi><mo>⋅</mo><mo lspace="0em" rspace="0em">sin</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>+</mo><mi>y</mi><mi>z</mi><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mtd><mtd><mn>1</mn><mo>+</mo><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msup><mi>z</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\begin{pmatrix}1 + (1 - \cos(a))(x^2 - 1) &amp; z\cdot \sin(a) + xy(1 - \cos(a)) &amp; -y\cdot \sin(a) + xz(1 - \cos(a))\\-z\cdot \sin(a) + xy(1 - \cos(a)) &amp; 1 + (1 - \cos(a))(y^2 - 1) &amp; x\cdot \sin(a) + yz(1 - \cos(a))\\y\cdot \sin(a) + xz(1 - \cos(a)) &amp; -x\cdot \sin(a) + yz(1 - \cos(a)) &amp; 1 + (1 - \cos(a))(z^2 - 1)\end{pmatrix}</annotation></semantics></math>
      </td>
    </tr>
    <tr>
      <th scope="col">同次座標系 (<a href="https://en.wikipedia.org/wiki/Real_projective_space">ℝℙ^3</a>)</th>
      <td>
        <math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mo>(</mo><mtable displaystyle="false" rowspacing="0.5ex"><mtr><mtd><mn>1</mn><mo>+</mo><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo></mtd><mtd><mi>z</mi><mo>⋅</mo><mo lspace="0em" rspace="0em">sin</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>+</mo><mi>x</mi><mi>y</mi><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mtd><mtd><mo>−</mo><mi>y</mi><mo>⋅</mo><mo lspace="0em" rspace="0em">sin</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>+</mo><mi>x</mi><mi>z</mi><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mo>−</mo><mi>z</mi><mo>⋅</mo><mo lspace="0em" rspace="0em">sin</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>+</mo><mi>x</mi><mi>y</mi><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mtd><mtd><mn>1</mn><mo>+</mo><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo></mtd><mtd><mi>x</mi><mo>⋅</mo><mo lspace="0em" rspace="0em">sin</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>+</mo><mi>y</mi><mi>z</mi><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mi>y</mi><mo>⋅</mo><mo lspace="0em" rspace="0em">sin</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>+</mo><mi>x</mi><mi>z</mi><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mtd><mtd><mo>−</mo><mi>x</mi><mo>⋅</mo><mo lspace="0em" rspace="0em">sin</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>+</mo><mi>y</mi><mi>z</mi><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo></mtd><mtd><mn>1</mn><mo>+</mo><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo stretchy="false">)</mo><mo stretchy="false">(</mo><msup><mi>z</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy="false">)</mo></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\begin{pmatrix}1 + (1 - \cos(a))(x^2 - 1) &amp; z\cdot \sin(a) + xy(1 - \cos(a)) &amp; -y\cdot \sin(a) + xz(1 - \cos(a)) &amp; 0\\-z\cdot \sin(a) + xy(1 - \cos(a)) &amp; 1 + (1 - \cos(a))(y^2 - 1) &amp; x\cdot \sin(a) + yz(1 - \cos(a)) &amp; 0\\y\cdot \sin(a) + xz(1 - \cos(a)) &amp; -x\cdot \sin(a) + yz(1 - \cos(a)) &amp; 1 + (1 - \cos(a))(z^2 - 1) &amp; 0\\0 &amp; 0 &amp; 0 &amp; 1\end{pmatrix}</annotation></semantics></math>
      </td>
    </tr>
  </tbody>
</table>

## 例

### Y 軸に沿って回転

#### HTML

```html
<div>Normal</div>
<div class="rotated">Rotated</div>
```

#### CSS

```css
body {
  perspective: 800px;
}

div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.rotated {
  transform: rotate3d(0, 1, 0, 60deg);
  background-color: pink;
}
```

#### 結果

{{EmbedLiveSample("y_軸に沿って回転", "auto", 180)}}

### 独自の軸に沿って回転

#### HTML

```html
<div>Normal</div>
<div class="rotated">Rotated</div>
```

#### CSS

```css
body {
  perspective: 800px;
}

div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.rotated {
  transform: rotate3d(1, 2, -1, 192deg);
  background-color: pink;
}
```

#### 結果

{{EmbedLiveSample("独自の軸に沿って回転", "auto", 180)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("transform")}} プロパティ
- {{cssxref("rotate")}} プロパティ
- {{cssxref("&lt;transform-function&gt;")}}
