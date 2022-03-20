---
title: skew()
slug: Web/CSS/transform-function/skew
tags:
  - CSS
  - CSS 関数
  - CSS 座標変換
  - 関数
  - リファレンス
translation_of: Web/CSS/transform-function/skew()
original_slug: Web/CSS/transform-function/skew()
browser-compat: css.types.transform-function.skew
---
{{CSSRef}}

**`skew()`** は [CSS](/ja/docs/Web/CSS) [関数](/ja/docs/Web/CSS/CSS_Functions)で、要素を二次元平面上でゆがめる変換を定義します。結果は {{cssxref("&lt;transform-function&gt;")}} データ型になります。

{{EmbedInteractiveExample("pages/css/function-skew.html")}}

この変換はシアー変形 ({{interwiki('wikipedia', 'せん断写像')}}) で、要素内のそれぞれの点を水平および垂直方向に指定された角度でゆがませます。要素のそれぞれの角を掴んで、一定の角度に沿って引っ張ったような効果があります。

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
      <th scope="col">ℝ^2 のデカルト座標</th>
      <th scope="col">ℝℙ^2 の同次座標</th>
      <th scope="col">ℝ^3 のデカルト座標</th>
      <th scope="col">ℝℙ^3 の同次座標</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">
        <math
          ><mfenced
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
            ></mfenced
          ></math
        >
      </td>
      <td>
        <math
          ><mfenced
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
              ><mtr></mtr></mtable></mfenced
        ></math>
      </td>
      <td rowspan="2">
        <math
          ><mfenced
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
            ></mfenced
          ></math
        >
      </td>
      <td rowspan="2">
        <math
          ><mfenced
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
            ></mfenced
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

<h3 id="Skewing_on_the_x-axis_only">X 軸のみの変形</h3>

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

{{EmbedLiveSample("Skewing_on_the_x-axis_only", 200, 200)}}

<h3 id="Skewing_on_both_axes">両方の軸の変形</h3>

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

{{EmbedLiveSample("Skewing_on_both_axes", 200, 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- [skewX()](/ja/docs/Web/CSS/transform-function/skewX())
- [skewY()](/ja/docs/Web/CSS/transform-function/skewY())
