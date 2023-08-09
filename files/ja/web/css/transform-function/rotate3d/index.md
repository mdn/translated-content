---
title: rotate3d()
slug: Web/CSS/transform-function/rotate3d
---

{{CSSRef}}

**`rotate3d()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)は、要素を三次元空間内の固定した軸を中心に、形を崩さずに回転させる変形を定義します。結果は {{cssxref("&lt;transform-function&gt;")}} データ型になります。

{{EmbedInteractiveExample("pages/css/rotate3d.html")}}

三次元空間では、回転には三次元の自由度があり、これらが一緒になって単一の回転軸を表します。回転軸は \[x, y, z] ベクトルによって定義され、 ({{ cssxref("transform-origin") }} プロパティで定義される) 原点を通過します。もし、指定値として、ベクトルが*正規化*されていない場合 (すなわち、3 つの座標の 2 乗の合計が 1 ではない場合)、{{glossary("user agent", "ユーザーエージェント")}}が内部的に正規化します。正規化できないベクトル、例えば null ベクトル \[0, 0, 0] では、回転が無視されますが、 CSS プロパティ全体を無効化はしません。

> **メモ:** 二次元平面での回転とは異なり、三次元での回転はふつう交換可能ではありません。言い換えれば、回転の順番が結果に影響を与えます。

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
      <th scope="col">ℝ^2 のデカルト座標</th>
      <td rowspan="2">
        この変形は三次元空間に適用され、平面で表すことはできません。
      </td>
    </tr>
    <tr>
    <th scope="col">ℝℙ^2 の同次座標</th>
    </tr>
    <tr>
      <th scope="col">ℝ^3 のデカルト座標</th>
      <td>
        <a
          href="/en-US/docs/Web/CSS/transform-function/rotate3d()/transform-functions-rotate3d_cart.png"
          ><img src="transform-functions-rotate3d_cart.png" /></a
        ><math>
          <mfenced
            ><mtable
              ><mtr
                ><mtd
                  ><mn>1</mn>
                  <mo>+</mo>
                  <mo>(</mo>
                  <mn>1</mn>
                  <mo>-</mo>
                  <mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>)</mo>
                  <mo>(</mo>
                  <msup
                    ><mi>x</mi>
                    <mn>2</mn> </msup
                  ><mo>-</mo>
                  <mn>1</mn>
                  <mo>)</mo> </mtd
                ><mtd
                  ><mi>z</mi>
                  <mo>·</mo>
                  <mo>sin</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>+</mo>
                  <mi>x</mi>
                  <mi>y</mi>
                  <mo>(</mo>
                  <mn>1</mn>
                  <mo>-</mo>
                  <mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>)</mo> </mtd
                ><mtd
                  ><mo>-</mo>
                  <mi>y</mi>
                  <mo>·</mo>
                  <mo>sin</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>+</mo>
                  <mi>x</mi>
                  <mi>z</mi>
                  <mo>·</mo>
                  <mo>(</mo>
                  <mn>1</mn>
                  <mo>-</mo>
                  <mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>)</mo>
                </mtd></mtr
              ><mtr
                ><mtd
                  ><mo>-</mo>
                  <mi>z</mi>
                  <mo>·</mo>
                  <mo>sin</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>+</mo>
                  <mi>x</mi>
                  <mi>y</mi>
                  <mo>·</mo>
                  <mo>(</mo>
                  <mn>1</mn>
                  <mo>-</mo>
                  <mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>)</mo> </mtd
                ><mtd
                  ><mn>1</mn>
                  <mo>+</mo>
                  <mo>(</mo>
                  <mn>1</mn>
                  <mo>-</mo>
                  <mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>)</mo>
                  <mo>(</mo>
                  <mi>y2</mi>
                  <mo>-</mo>
                  <mn>1</mn>
                  <mo>)</mo> </mtd
                ><mtd
                  ><mi>x</mi>
                  <mo>·</mo>
                  <mo>sin</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>+</mo>
                  <mi>y</mi>
                  <mi>z</mi>
                  <mo>·</mo>
                  <mo>(</mo>
                  <mn>1</mn>
                  <mo>-</mo>
                  <mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>)</mo>
                </mtd></mtr
              ><mtr
                ><mtd
                  ><mi>y</mi>
                  <mo>sin</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>+</mo>
                  <mi>xz</mi>
                  <mo>(</mo>
                  <mn>1</mn>
                  <mo>-</mo>
                  <mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>)</mo> </mtd
                ><mtd
                  ><mo>-</mo>
                  <mi>x</mi>
                  <mo>sin</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>+</mo>
                  <mi>yz</mi>
                  <mo>(</mo>
                  <mn>1</mn>
                  <mo>-</mo>
                  <mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>)</mo> </mtd
                ><mtd
                  ><mn>1</mn>
                  <mo>+</mo>
                  <mo>(</mo>
                  <mn>1</mn>
                  <mo>-</mo>
                  <mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo>
                  <mo>)</mo>
                  <mo>(</mo>
                  <mi>z2</mi>
                  <mo>-</mo>
                  <mn>1</mn>
                  <mo>)</mo> </mtd
                ><mtd><mi>t</mi></mtd> </mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn></mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
    <tr>
      <th scope="col">ℝℙ^3 の同次座標</th>
      <td>
        <a
          href="/en-US/docs/Web/CSS/transform-function/rotate3d()/transform-functions-rotate3d_hom4.png"
          ><img src="transform-functions-rotate3d_hom4.png"
        /></a>
      </td>
    </tr>
  </tbody>
</table>

## 例

<h3 id="Rotating_on_the_y-axis">Y 軸に沿って回転</h3>

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

{{EmbedLiveSample("Rotating_on_the_y-axis", "auto", 180)}}

<h3 id="Rotating_on_a_custom_axis">独自の軸に沿って回転</h3>

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

{{EmbedLiveSample("Rotating_on_a_custom_axis", "auto", 180)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
