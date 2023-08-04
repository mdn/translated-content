---
title: scale3d()
slug: Web/CSS/transform-function/scale3d
---

{{CSSRef}}

**`scale3d()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、三次元空間において要素を変倍する変形を定義します。
変倍量はベクトルで定義されるため、それぞれの次元ごとに異なる倍率で変倍することができます。結果は {{cssxref("&lt;transform-function&gt;")}} データ型になります。

{{EmbedInteractiveExample("pages/css/function-scale3d.html")}}

この変倍変形は、三次元ののベクトルであることが特徴です。この座標は、それぞれの方向にどれだけ変倍を行うかを定義します。3 つすべての座標が等しい場合、変倍は一様 (_等方的_) で、要素の形が保たれます (これは[相似変換](https://ja.wikipedia.org/wiki/%E8%A1%8C%E5%88%97%E3%81%AE%E7%9B%B8%E4%BC%BC)です)。

座標の値が \[-1, 1] の範囲外の場合、変倍は、その座標の方向に要素を拡大します。この範囲内の場合、変倍は、要素をその座標の方向に縮小します。負の場合、変倍は [点対称化](https://ja.wikipedia.org/wiki/点対称) と大きさの変更を行います。1 と等しい場合、変倍は何もしません。

## 構文

`scale3d()` 関数は 3 つの値で指定され、それぞれの値はそれぞれの方向に適用される変倍率を表します。

```css
scale3d(sx, sy, sz)
```

### 値

- `sx`
  - : {{cssxref("&lt;number&gt;")}} で、変倍ベクトルの横軸を表します。
- `sy`
  - : {{cssxref("&lt;number&gt;")}} で、変倍ベクトルの縦軸を表します。
- `sz`
  - : {{cssxref("&lt;number&gt;")}} で、変倍ベクトルの Z 成分を表します。

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
                ><mtd><mi>sx</mi> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mi>sy</mi> </mtd
                ><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mi>sz</mi></mtd></mtr
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
                ><mtd><mi>sx</mi> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mi>sy</mi> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mi>sz</mi> </mtd><mtd><mn>0</mn> </mtd></mtr
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

## 例

<h3 id="Without_changing_the_origin">原点の変更なし</h3>

#### HTML

```html
<div>Normal</div>
<div class="scaled">Scaled</div>
```

#### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.scaled {
  transform: perspective(500px) scale3d(2, 0.7, 0.2) translateZ(100px);
  background-color: pink;
}
```

#### 結果

{{EmbedLiveSample("Without_changing_the_origin","200","200")}}

<h3 id="Translating_the_origin_of_the_transformation">変形の原点を移動</h3>

#### HTML

```html
<div>Normal</div>
<div class="scaled">Scaled</div>
```

#### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.scaled {
  transform: perspective(500px) scale3d(2, 0.7, 0.2) translateZ(100px);
  transform-origin: left;
  background-color: pink;
}
```

#### 結果

{{EmbedLiveSample("Translating_the_origin_of_the_transformation","200","200")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- [`scaleZ()`](</ja/docs/Web/CSS/transform-function/scaleZ()>)
- [`translate3d()`](</ja/docs/Web/CSS/transform-function/translate3d()>)
- [`rotate3d()`](</ja/docs/Web/CSS/transform-function/rotate3d()>)
