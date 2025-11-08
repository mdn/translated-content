---
title: skew()
slug: Web/CSS/Reference/Values/transform-function/skew
original_slug: Web/CSS/transform-function/skew
l10n:
  sourceCommit: 88e01e6f934ea5f2413cecfab1b5112cf819ba09
---

**`skew()`** は [CSS](/ja/docs/Web/CSS) [関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、要素を 2D 平面上でゆがめる変換を定義します。結果は {{cssxref("&lt;transform-function&gt;")}} データ型になります。

{{InteractiveExample("CSS デモ: skew()")}}

```css interactive-example-choice
transform: skew(0);
```

```css interactive-example-choice
transform: skew(15deg, 15deg);
```

```css interactive-example-choice
transform: skew(-0.06turn, 18deg);
```

```css interactive-example-choice
transform: skew(0.312rad);
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/firefox-logo.svg"
    width="200" />
</section>
```

この変換はシアー変形 ([せん断写像](https://ja.wikipedia.org/wiki/せん断写像)) で、要素内のそれぞれの点を水平および垂直方向に指定された角度でゆがませます。要素のそれぞれの角を掴んで、一定の角度に沿って引っ張ったような効果があります。

それぞれの点の座標は、指定された角度と原点からの距離に比例した値によって変更されます。よって、原点から遠くなるにしたがって、加えられる値が大きくなります。

## 構文

`skew()` 関数は 1 つまたは 2 つの値を指定し、それぞれの軸に適用されるゆがみの量を表します。1 つだけ値を設定した場合は X 軸に使用され、 Y 軸方向の変形は行いません。

```css
skew(ax)

skew(ax, ay)
```

### 値

- `ax`
  - : {{cssxref("&lt;angle&gt;")}} で、 X 軸 (横座標) 方向にゆがめるのに使用する角度を表します。
- `ay`
  - : {{cssxref("&lt;angle&gt;")}} で、 Y 軸 (縦座標) 方向にゆがめるのに使用する角度を表します。定義されていない場合、既定値は `0` となり、水平方向にのみゆがめます。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><a href="/ja/docs/Web/CSS/transform-function#直交座標系">直交座標系</a> (<a href="https://ja.wikipedia.org/wiki/実数空間">ℝ^2</a>)</th>
      <th scope="col"><a href="https://en.wikipedia.org/wiki/Homogeneous_coordinates">同次座標系</a> (<a href="https://en.wikipedia.org/wiki/Real_projective_plane">ℝℙ^2</a>)</th>
      <th scope="col">直交座標系 (<a href="https://ja.wikipedia.org/wiki/実数空間">ℝ^3</a>)</th>
      <th scope="col">同次座標系 (<a href="https://en.wikipedia.org/wiki/Real_projective_space">ℝℙ^3</a>)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">
        <math
          ><mrow><mo>(</mo
            ><mtable
              ><mtr
                ><mtd><mn>1</mn> </mtd
                ><mtd
                  ><mo>tan</mo>
                  <mo>(</mo>
                  <mi>ax</mi>
                  <mo>)</mo>
                </mtd></mtr
              ><mtr
                ><mtd
                  ><mo>tan</mo>
                  <mo>(</mo>
                  <mi>ay</mi>
                  <mo>)</mo> </mtd
                ><mtd><mn>1</mn></mtd></mtr
              ></mtable
            ><mo>)</mo></mrow
          ></math
        >
      </td>
      <td>
        <math
          ><mrow><mo>(</mo
            ><mtable
              ><mtr
                ><mtd><mn>1</mn> </mtd
                ><mtd
                  ><mo>tan</mo>
                  <mo>(</mo>
                  <mi>ax</mi>
                  <mo>)</mo> </mtd
                ><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd
                  ><mo>tan</mo>
                  <mo>(</mo>
                  <mi>ay</mi>
                  <mo>)</mo> </mtd
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn></mtd></mtr
              ><mtr></mtr></mtable><mo>)</mo></mrow
        ></math>
      </td>
      <td rowspan="2">
        <math
          ><mrow><mo>(</mo
            ><mtable
              ><mtr
                ><mtd><mn>1</mn> </mtd
                ><mtd
                  ><mo>tan</mo>
                  <mo>(</mo>
                  <mi>ax</mi>
                  <mo>)</mo> </mtd
                ><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd
                  ><mo>tan</mo>
                  <mo>(</mo>
                  <mi>ay</mi>
                  <mo>)</mo> </mtd
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn></mtd></mtr
              ></mtable
            ><mo>)</mo></mrow
          ></math
        >
      </td>
      <td rowspan="2">
        <math
          ><mrow><mo>(</mo
            ><mtable
              ><mtr
                ><mtd><mn>1</mn> </mtd
                ><mtd
                  ><mo>tan</mo>
                  <mo>(</mo>
                  <mi>ax</mi>
                  <mo>)</mo> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd
                  ><mo>tan</mo>
                  <mo>(</mo>
                  <mi>ay</mi>
                  <mo>)</mo> </mtd
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn></mtd></mtr
              ></mtable
            ><mo>)</mo></mrow
          ></math
        >
      </td>
    </tr>
    <tr>
      <td><code>[1 tan(ay) tan(ax) 1 0 0]</code></td>
    </tr>
  </tbody>
</table>

## 例

### X 軸のみの変形

#### HTML

```html
<div>Normal</div>
<div class="skewed">Skewed</div>
```

#### CSS

```css
body {
  margin: 20px;
}

div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.skewed {
  transform: skew(10deg); /* Equal to skewX(10deg) */
  background-color: pink;
}
```

#### 結果

{{EmbedLiveSample("x_軸のみの変形", 200, 200)}}

### 両方の軸の変形

#### HTML

```html
<div>Normal</div>
<div class="skewed">Skewed</div>
```

#### CSS

```css
body {
  margin: 20px;
}

div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.skewed {
  transform: skew(10deg, 10deg);
  background-color: pink;
}
```

#### 結果

{{EmbedLiveSample("両方の軸の変形", 200, 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- [skewX()](/ja/docs/Web/CSS/Reference/Values/transform-function/skewX)
- [skewY()](/ja/docs/Web/CSS/Reference/Values/transform-function/skewY)
- 独立した座標変換プロパティ:
  - {{cssxref("translate")}}
  - {{cssxref("scale")}}
  - {{cssxref("rotate")}}
  - 注: `skew` プロパティはありません
