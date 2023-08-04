---
title: scaleZ()
slug: Web/CSS/transform-function/scaleZ
---

{{CSSRef}}

**`scaleZ()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、要素を Z 軸に沿って変倍する変形を定義します。結果は {{cssxref("&lt;transform-function&gt;")}} データ型になります。

{{EmbedInteractiveExample("pages/css/function-scaleZ.html")}}

これは要素のそれぞれの点の Z 座標を一定の係数で修正しますが、係数が 1 である場合はこの関数が恒等変換になるので例外です。変倍は等方性ではなく、要素の角度は保存されません。 `scaleZ(-1)` は[軸の線対称](https://en.wikipedia.org/wiki/Axial_symmetry)を定義し、Z 軸は ({{cssxref("transform-origin")}} プロパティの指定通りに) 原点を通過します。

上記のデモでは、[`perspective: 550px;`](/ja/docs/Web/CSS/perspective) (三次元空間を作るため) と [`transform-style: preserve-3d;`](/ja/docs/Web/CSS/transform-style) (立方体の 6 つの面である子を三次元空間に配置) を立方体に設定しました。

> **メモ:** `scaleZ(sz)` は `scale3d(1, 1, sz)` と等価です。

## 構文

```css
scaleZ(s)
```

### 値

- `s`
  - : {{cssxref("&lt;number&gt;")}} で、要素のそれぞれの点の Z 座標に適用される変倍率を表します。

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
      <td colspan="2">
        この変形は三次元空間に適用され、平面で表すことはできません。
      </td>
      <td>
        <math
          ><mfenced
            ><mtable
              ><mtr
                ><mtd><mn>1</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn> </mtd
                ><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mi>s</mi></mtd></mtr
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
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mi>s</mi> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>1</mn></mtd></mtr
              ></mtable
            ></mfenced
          ></math
        >
      </td>
    </tr>
  </tbody>
</table>

<h2 id="Examples">例</h2>

### HTML

```html
<div>Normal</div>
<div class="perspective">Translated</div>
<div class="scaled-translated">Scaled</div>
```

### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.perspective {
  /* 三次元空間を生成するために視点を含める */
  transform: perspective(400px) translateZ(-100px);
  background-color: limegreen;
}

.scaled-translated {
  /* 三次元空間を生成するために視点を含める */
  transform: perspective(400px) scaleZ(2) translateZ(-100px);
  background-color: pink;
}
```

### 結果

{{EmbedLiveSample("Examples", 200, 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`scaleX()`](</ja/docs/Web/CSS/transform-function/scaleX()>)
- [`scaleY()`](</ja/docs/Web/CSS/transform-function/scaleY()>)
- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- {{cssxref("transform-origin")}}
