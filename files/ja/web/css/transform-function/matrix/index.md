---
title: matrix()
slug: Web/CSS/transform-function/matrix
l10n:
  sourceCommit: 88e01e6f934ea5f2413cecfab1b5112cf819ba09
---

{{CSSRef}}

**`matrix()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、二次元同次変換行列を定義します。結果は {{cssxref("&lt;transform-function&gt;")}} データ型になります。

{{EmbedInteractiveExample("pages/css/function-matrix.html")}}

> **メモ:** `matrix(a, b, c, d, tx, ty)` は `matrix3d(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1)` の短縮形です。

## 構文

`matrix()` 関数は 6 つの値で指定されます。定数は内蔵されていて引数としては渡されず、その他の引数は列優先の順で記述されます。

```css
matrix(a, b, c, d, tx, ty)
```

### 値

- _a_ _b_ _c_ _d_
  - : {{cssxref("&lt;number&gt;")}} で、線形変換を記述します。
- _tx_ _ty_
  - : {{cssxref("&lt;number&gt;")}} で、適用する変換を記述します。

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
                ><mtd><mi>a</mi> </mtd><mtd><mi>c</mi> </mtd></mtr
              ><mtr
                ><mtd><mi>b</mi> </mtd><mtd><mi>d</mi></mtd></mtr
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
                ><mtd><mi>a</mi> </mtd><mtd><mi>c</mi> </mtd
                ><mtd><mi>tx</mi> </mtd></mtr
              ><mtr
                ><mtd><mi>b</mi> </mtd><mtd><mi>d</mi> </mtd
                ><mtd><mi>ty</mi> </mtd></mtr
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
                ><mtd><mi>a</mi> </mtd><mtd><mi>c</mi> </mtd
                ><mtd><mi>tx</mi> </mtd></mtr
              ><mtr
                ><mtd><mi>b</mi> </mtd><mtd><mi>d</mi> </mtd
                ><mtd><mi>ty</mi> </mtd></mtr
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
                ><mtd><mi>a</mi> </mtd><mtd><mi>c</mi> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mi>tx</mi> </mtd></mtr
              ><mtr
                ><mtd><mi>b</mi> </mtd><mtd><mi>d</mi> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mi>ty</mi> </mtd></mtr
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
      <td><code>[a b c d tx ty]</code></td>
    </tr>
  </tbody>
</table>

値は次の関数を表します。
`matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY())`

## 例

### HTML

```html
<div>Normal</div>
<div class="changed">Changed</div>
```

### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.changed {
  transform: matrix(1, 2, -1, 1, 80, 80);
  background-color: pink;
}
```

### 結果

{{EmbedLiveSample("Examples", 350, 350)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("transform")}}
- 独立した座標変換プロパティ:
  - {{cssxref("translate")}}
  - {{cssxref("scale")}}
  - {{cssxref("rotate")}}
- {{cssxref("&lt;transform-function&gt;")}}
- [`matrix3d()`](/ja/docs/Web/CSS/transform-function/matrix3d)
- [Understanding the CSS Transforms Matrix](https://dev.opera.com/articles/understanding-the-css-transforms-matrix/)
