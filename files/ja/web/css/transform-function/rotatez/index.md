---
title: rotateZ()
slug: Web/CSS/transform-function/rotateZ
l10n:
  sourceCommit: 88e01e6f934ea5f2413cecfab1b5112cf819ba09
---

{{CSSRef}}

**`rotateZ()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、要素の形を変化させずに Z 軸の周りを回転させる座標変換を定義します。結果は {{cssxref("&lt;transform-function&gt;")}} データ型になります。

{{EmbedInteractiveExample("pages/css/function-rotateZ.html")}}

回転軸は、 {{ cssxref("transform-origin") }} CSS プロパティで定義される原点を通ります。

> **メモ:** `rotateZ(a)` は `rotate(a)` または `rotate3d(0, 0, 1, a)` と等価です。

> [!NOTE]
> 2D 平面での回転とは異なり、 3D での回転はふつう交換可能ではありません。言い換えれば、回転の順番が結果に影響を与えます。

## 構文

`rotateZ()` で生成される回転の量は、 {{cssxref("&lt;angle&gt;")}} で指定します。正の数であれば、移動は時計回りです。負の数であれば、反時計回りになります。

```css
rotateZ(a)
```

### 値

- `a`
  - : {{ cssxref("&lt;angle&gt;") }} で、回転する角度を表します。正の数の角度は時計回りの回転を、負の数の角度は反時計回りの回転を表します。

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
        この変換は 3D 空間に適用され、平面で表すことはできません。
      </td>
      <td>
        <math
          ><mrow><mo>(</mo
            ><mtable
              ><mtr
                ><mtd
                  ><mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo> </mtd
                ><mtd
                  ><mo>-</mo>
                  <mo>sin</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo> </mtd
                ><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd
                  ><mo>sin</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo> </mtd
                ><mtd
                  ><mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo> </mtd
                ><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
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
                ><mtd
                  ><mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo> </mtd
                ><mtd
                  ><mo>-</mo>
                  <mo>sin</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd
                  ><mo>sin</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo> </mtd
                ><mtd
                  ><mo>cos</mo>
                  <mo>(</mo>
                  <mi>a</mi>
                  <mo>)</mo> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
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
  </tbody>
</table>

## 例

### HTML

```html
<div>Normal</div>
<div class="rotated">Rotated</div>
```

### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.rotated {
  transform: rotateZ(45deg);
  background-color: pink;
}
```

### 結果

{{EmbedLiveSample("Examples", "auto", 180)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("transform")}} プロパティ
- {{cssxref("rotate")}} プロパティ
- {{cssxref("&lt;transform-function&gt;")}}
