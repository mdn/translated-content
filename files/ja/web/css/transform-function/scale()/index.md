---
title: scale()
slug: Web/CSS/transform-function/scale()
tags:
  - CSS
  - CSS 関数
  - CSS 座標変換
  - 関数
  - リファレンス
browser-compat: css.types.transform-function.scale
translation_of: Web/CSS/transform-function/scale()
---
{{CSSRef}}

**`scale()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Functions)で、二次元平面上における拡縮する変形を定義します。変倍の量がベクトルで定義されるため、水平方向と垂直方向に対して異なる変倍で大きさを変えることができます。結果は {{cssxref("&lt;transform-function&gt;")}} データ型になります。

![](scale.png)

この変倍変形は、二次元のベクトルであることが特徴です。この座標は、それぞれの方向にどれだけ変倍を行うかを定義します。両方の座標が等しい場合、変倍は一様 (_等方的_) で、要素の形が保たれます (これは[相似変換](https://ja.wikipedia.org/wiki/%E8%A1%8C%E5%88%97%E3%81%AE%E7%9B%B8%E4%BC%BC)です)。

座標の値が \[-1, 1] の範囲外の場合、変倍は、その座標の方向に要素を拡大します。この範囲内の場合、変倍は、要素をその座標の方向に縮小します。負の場合、変倍は [点対称化](https://ja.wikipedia.org/wiki/点対称) と大きさの変更を行います。1 と等しい場合、変倍は何もしません。

> **Note:** `scale()` 関数は、二次元の変換のみに適用されます。三次元空間内での変倍を行うには、 [`scale3d()`](</ja/docs/Web/CSS/transform-function/scale3d()>) 関数を使用してください。

## 構文

`scale()` 関数は、1 つまたは 2 つの値で指定され、それにより各方向に適用される変倍が表現されます。

```css
scale(sx)

scale(sx, sy)
```

### 値

- `sx`
  - : 変倍ベクトルの横座標を表す {{cssxref("&lt;number&gt;")}}。
- `sy`
  - : 変倍ベクトルの縦座標を表す {{cssxref("&lt;number&gt;")}}。定義されない場合、これの既定値は `sx` であり、要素の形を保つ一様な変倍となります。

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
                ><mtd><mi>sx</mi> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mi>sy</mi></mtd></mtr
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
                ><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mi>sy</mi> </mtd
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
                ><mtd><mi>sx</mi> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mi>sy</mi> </mtd
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
                ><mtd><mi>sx</mi> </mtd><mtd><mn>0</mn> </mtd
                ><mtd><mn>0</mn> </mtd><mtd><mn>0</mn> </mtd></mtr
              ><mtr
                ><mtd><mn>0</mn> </mtd><mtd><mi>sy</mi> </mtd
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
      <td><code>[sx 0 0 sy 0 0]</code></td>
    </tr>
  </tbody>
</table>

## アクセシビリティの考慮

拡大や縮小のアニメーションは、特定の種類の偏頭痛を引き起こす原因になりやすいので、アクセシビリティの問題になることがあります。ウェブサイトにこのようなアニメーションを含める必要がある場合は、できればサイト全体で、ユーザーがアニメーションを止める制御ができるようしてください。

また、 {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} メディア特性を使用することを検討してください。これを使用して[メディアクエリー](/ja/docs/Web/CSS/Media_queries)を書けば、ユーザーがシステムの設定でアニメーションを減らすよう指定した場合にアニメーションを止めることができます。

詳しくは以下の文書を参照してください。

- [MDN WCAG の理解、ガイドライン 2.3 の解説](/ja/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.3_%e2%80%94_seizures_and_physical_reactions_do_not_design_content_in_a_way_that_is_known_to_cause_seizures_or_physical_reactions)
- [Understanding Success Criterion 2.3.3 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)

## 例

<h3 id="Scaling_the_X_and_Y_dimensions_together">X と Y の大きさを一緒に変倍する</h3>

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
  transform: scale(0.7); /* Equal to scaleX(0.7) scaleY(0.7) */
  background-color: pink;
}
```

#### 結果

{{EmbedLiveSample("Scaling_the_X_and_Y_dimensions_together", "200", "200")}}

<h3 id="Scaling_X_and_Y_dimensions_separately_and_translating_the_origin">X と Y の大きさを別々に変倍し、原点を平行移動させる</h3>

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
  transform: scale(2, 0.5); /* Equal to scaleX(2) scaleY(0.5) */
  transform-origin: left;
  background-color: pink;
}
```

#### 結果

{{EmbedLiveSample("Scaling_X_and_Y_dimensions_separately_and_translating_the_origin", "200", "200")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- {{cssxref("transform-function/scale3d()", "scale3d()")}}
