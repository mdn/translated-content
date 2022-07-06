---
title: scaleY()
slug: Web/CSS/transform-function/scaleY
tags:
  - CSS
  - CSS 関数
  - CSS 座標変換
  - 関数
  - リファレンス
translation_of: Web/CSS/transform-function/scaleY()
original_slug: Web/CSS/transform-function/scaleY()
browser-compat: css.types.transform-function.scaleY
---
{{CSSRef}}

**`scaleY()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、要素を Y 軸に沿って (垂直に) 変倍する変形を定義します。結果は {{cssxref("&lt;transform-function&gt;")}} データ型になります。

![](scaley.png)

これは要素のそれぞれの点の横座標を一定の係数で修正しますが、係数が 1 である場合はこの関数が恒等変換になるので例外です。変倍は等方性ではなく、要素の角度は保存されません。 `scaleY(-1)` は[軸の線対称](https://en.wikipedia.org/wiki/Axial_symmetry)を定義し、水平軸は ({{cssxref("transform-origin")}} プロパティの指定通りに) 原点を通過します。

> **Note:** `scaleY(sy)` は `scale(1, sy)` または `scale3d(1, sy, 1)` と等価です。
>
> `transform: rotateX(180deg);`  === `transform: scaleY(-1);`

## 構文

```css
scaleY(s)
```

### 値

- `s`
  - : {{cssxref("&lt;number&gt;")}} で、要素のそれぞれの点の縦座標に適用する変倍係数を表します。

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
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mi>s</mi></mtd></mtr
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
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mi>s</mi> </mtd
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
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mi>s</mi> </mtd
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
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mi>s</mi> </mtd
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
      <td><code>[1 0 0 s 0 0]</code></td>
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
  transform: scaleY(0.6);
  background-color: pink;
}
```

### 結果

{{EmbedLiveSample("Examples", 200, 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`scaleX()`](</ja/docs/Web/CSS/transform-function/scaleX()>)
- [`scaleZ()`](</ja/docs/Web/CSS/transform-function/scaleZ()>)
- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- {{cssxref("transform-origin")}}
