---
title: scaleZ()
slug: Web/CSS/transform-function/scaleZ
l10n:
  sourceCommit: 88e01e6f934ea5f2413cecfab1b5112cf819ba09
---

{{CSSRef}}

**`scaleZ()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、要素を Z 軸に沿って変倍する座標変換を定義します。結果は {{cssxref("&lt;transform-function&gt;")}} データ型になります。

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
      <th scope="col"><a href="/ja/docs/Web/CSS/transform-function#直交座標系">直交座標系</a> (<a href="https://ja.wikipedia.org/wiki/実数空間">ℝ^2</a>)</th>
      <th scope="col"><a href="https://en.wikipedia.org/wiki/Homogeneous_coordinates">同次座標系</a> (<a href="https://en.wikipedia.org/wiki/Real_projective_plane">ℝℙ^2</a>)</th>
      <th scope="col">直交座標系 (<a href="https://ja.wikipedia.org/wiki/実数空間">ℝ^3</a>)</th>
      <th scope="col">同次座標系 (<a href="https://en.wikipedia.org/wiki/Real_projective_space">ℝℙ^3</a>)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">
        この座標変換は 3D 空間に適用され、平面で表すことはできません。
      </td>
      <td>
        <math
          ><mrow><mo>(</mo
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
            ><mo>)</mo></mrow
          ></math
        >
      </td>
      <td>
        <math
          ><mrow><mo>(</mo
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
            ><mo>)</mo></mrow
          ></math
        >
      </td>
    </tr>
  </tbody>
</table>

## 例

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
  /* 3D 空間を生成するために視点を含める */
  transform: perspective(400px) translateZ(-100px);
  background-color: limegreen;
}

.scaled-translated {
  /* 3D 空間を生成するために視点を含める */
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

- [`scaleX()`](/ja/docs/Web/CSS/transform-function/scaleX)
- [`scaleY()`](/ja/docs/Web/CSS/transform-function/scaleY)
- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- {{cssxref("transform-origin")}}
- 独立した座標変換プロパティ:
  - {{cssxref("translate")}}
  - {{cssxref("scale")}}
  - {{cssxref("rotate")}}
  - 注: `skew` プロパティはありません
