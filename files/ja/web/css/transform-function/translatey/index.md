---
title: translateY()
slug: Web/CSS/transform-function/translateY
l10n:
  sourceCommit: 88e01e6f934ea5f2413cecfab1b5112cf819ba09
---

{{CSSRef}}

**`translateY()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、要素を二次元平面上の垂直方向で再配置します。結果は {{cssxref("&lt;transform-function&gt;")}} データ型になります。

{{EmbedInteractiveExample("pages/css/function-translateY.html")}}

> **メモ:** `translateY(ty)` は `translate(0, ty)` または `translate3d(0, ty, 0)` と等価です。

## 構文

```css
/* <length-percentage> 値 */
transform: translateY(200px);
transform: translateY(50%);
```

### 値

- `<length-percentage>`
  - : 変換ベクトルの縦座標を表す {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} です。[直交座標系](/ja/docs/Web/CSS/transform-function#cartesian_coordinates)では Y 座標の移動量をを表します。パーセント値は {{cssxref("transform-box")}} プロパティで定義される参照ボックスの幅からの相対値です。

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
        <p>
          平行移動は ℝ^2 の線形変換ではないので、直交座標行列を使用して表すことはできません。
        </p>
      </td>
      <td>
        <math
          ><mrow><mo>(</mo
            ><mtable
              ><mtr
                ><mtd><mn>1</mn></mtd>
                <mtd><mn>0</mn></mtd>
                <mtd><mn>0</mn></mtd> </mtr
              ><mtr
                ><mtd><mn>0</mn></mtd>
                <mtd><mn>1</mn></mtd>
                <mtd><mi>t</mi></mtd> </mtr
              ><mtr
                ><mtd><mn>0</mn></mtd>
                <mtd><mn>0</mn></mtd>
                <mtd><mn>1</mn></mtd></mtr
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
                ><mtd><mn>1</mn></mtd>
                <mtd><mn>0</mn></mtd>
                <mtd><mn>0</mn></mtd> </mtr
              ><mtr
                ><mtd><mn>0</mn></mtd>
                <mtd><mn>1</mn></mtd>
                <mtd><mi>t</mi></mtd> </mtr
              ><mtr
                ><mtd><mn>0</mn></mtd>
                <mtd><mn>0</mn></mtd>
                <mtd><mn>1</mn></mtd></mtr
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
                ><mtd><mn>1</mn></mtd>
                <mtd><mn>0</mn></mtd>
                <mtd><mn>0</mn></mtd>
                <mtd><mn>0</mn></mtd> </mtr
              ><mtr
                ><mtd><mn>0</mn></mtd>
                <mtd><mn>1</mn></mtd>
                <mtd><mn>0</mn></mtd>
                <mtd><mi>t</mi></mtd> </mtr
              ><mtr
                ><mtd><mn>0</mn></mtd>
                <mtd><mn>0</mn></mtd>
                <mtd><mn>1</mn></mtd>
                <mtd><mn>0</mn></mtd> </mtr
              ><mtr
                ><mtd><mn>0</mn></mtd>
                <mtd><mn>0</mn></mtd>
                <mtd><mn>0</mn></mtd>
                <mtd><mn>1</mn></mtd></mtr
              ></mtable
            ><mo>)</mo></mrow
          ></math
        >
      </td>
    </tr>
    <tr>
      <td><code>[1 0 0 1 0 t]</code></td>
    </tr>
  </tbody>
</table>

### 形式文法

```css
translateY({{cssxref("&lt;length-percentage&gt;")}})
```

## 例

### HTML

```html
<div>Static</div>
<div class="moved">Moved</div>
<div>Static</div>
```

### CSS

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  transform: translateY(10px);
  background-color: pink;
}
```

### 結果

{{EmbedLiveSample("Examples", 250, 250)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- {{cssxref("translate")}}
