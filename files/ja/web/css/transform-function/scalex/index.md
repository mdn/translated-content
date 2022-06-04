---
title: scaleX()
slug: Web/CSS/transform-function/scaleX
tags:
  - CSS
  - CSS 関数
  - CSS 座標変換
  - 関数
  - リファレンス
translation_of: Web/CSS/transform-function/scaleX()
original_slug: Web/CSS/transform-function/scaleX()
browser-compat: css.types.transform-function.scaleX
---
{{CSSRef}}

**`scaleX()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、要素を X 軸に沿って (水平に) 変倍する変形を定義します。結果は {{cssxref("&lt;transform-function&gt;")}} データ型になります。

![](scalex.png)

これは要素のそれぞれの点の横座標を一定の係数で修正しますが、係数が 1 である場合はこの関数が恒等変換になるので例外です。変倍は等方性ではなく、要素の角度は保存されません。 `scaleX(-1)` は[軸の線対称](https://en.wikipedia.org/wiki/Axial_symmetry)を定義し、垂直軸は ({{cssxref("transform-origin")}} プロパティの指定通りに) 原点を通過します。

> **Note:** `scaleX(sx)` は `scale(sx, 1)` または `scale3d(sx, 1, 1)` と等価です。

## 構文

```css
scaleX(s)
```

### 値

- `s`
  - : {{cssxref("&lt;number&gt;")}} で、要素のそれぞれの点の横座標に適用される変倍率を表します。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">ℝ^2 上のデカルト座標</th>
      <th scope="col">ℝℙ^2 上の同次座標</th>
      <th scope="col">ℝ^3 上のデカルト座標</th>
      <th scope="col">ℝℙ^3 上の同次座標</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">
        <math
          ><mfenced
            ><mtable
              ><mtr
                ><mtd><mi>s</mi> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn></mtd></mtr
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
                ><mtd><mi>s</mi> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn> </mtd
                ><mtd><mn>0</mn> </mtd></mtr
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
                ><mtd><mi>s</mi> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn> </mtd
                ><mtd><mn>0</mn> </mtd></mtr
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
                ><mtd><mi>s</mi> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
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
      <td><code>[s 0 0 1 0 0]</code></td>
    </tr>
  </tbody>
</table>

<h2 id="Examples">例</h2>

### HTML

```html
<div>Normal</div>
<div class="scaled">Scaled</div>
```

### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.scaled {
  transform: scaleX(0.6);
  background-color: pink;
}
```

### 結果

{{EmbedLiveSample("Examples","200","200")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`scaleY()`](</ja/docs/Web/CSS/transform-function/scaleY()>)
- [`scaleZ()`](</ja/docs/Web/CSS/transform-function/scaleZ()>)
- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- {{cssxref("transform-origin")}}
