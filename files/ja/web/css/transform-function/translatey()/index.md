---
title: translateY()
slug: Web/CSS/transform-function/translateY()
tags:
  - CSS
  - CSS 関数
  - CSS 座標変換
  - 関数
  - リファレンス
browser-compat: css.types.transform-function.translateY
translation_of: Web/CSS/transform-function/translateY()
---
{{CSSRef}}

**`translateX()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、要素を二次元平面上の水平方向で再配置します。結果は {{cssxref("&lt;transform-function&gt;")}} データ型になります。

![](translatey.png)

> **Note:** `translateY(ty)` は `translate(0, ty)` または `translate3d(0, ty, 0)` と等価です。

## 構文

```css
/* <length-percentage> 値 */
transform: translateY(200px);
transform: translateY(50%);
```

### 値

- `<length-percentage>`
  - : 変換ベクトルの縦座標を表す {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} です。パーセント値は {{cssxref("transform-box")}} プロパティで定義される参照ボックスの幅からの相対値です。

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
        <p>
          ℝ^2 では線形変換ではないので、デカルト座標の行列で表すことはできない。
        </p>
      </td>
      <td>
        <math
          ><mfenced
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
            ></mfenced
          ></math
        >
      </td>
      <td rowspan="2">
        <math
          ><mfenced
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
            ></mfenced
          ></math
        >
      </td>
      <td rowspan="2">
        <math
          ><mfenced
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
            ></mfenced
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

<h2 id="Examples">例</h2>

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
