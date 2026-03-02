---
title: scale()
slug: Web/CSS/Reference/Values/transform-function/scale
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`scale()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/Reference/Values/Functions)で、二次元平面上における拡縮する座標変換を定義します。変倍の量がベクトルで定義されるため、水平方向と垂直方向に対して異なる変倍で大きさを変えることができます。結果は {{cssxref("&lt;transform-function&gt;")}} データ型になります。

{{InteractiveExample("CSS デモ: scale()")}}

```css interactive-example-choice
transform: scale(1);
```

```css interactive-example-choice
transform: scale(0.7);
```

```css interactive-example-choice
transform: scale(1.3, 0.4);
```

```css interactive-example-choice
transform: scale(-0.5, 1);
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/firefox-logo.svg"
    width="200" />
</section>
```

この変倍座標変換は、二次元のベクトルであることが特徴です。この座標は、それぞれの方向にどれだけ変倍を行うかを定義します。両方の座標が等しい場合、変倍は一様 (_等方的_) で、要素の形が保たれます (これは[相似変換](https://ja.wikipedia.org/wiki/%E8%A1%8C%E5%88%97%E3%81%AE%E7%9B%B8%E4%BC%BC)です)。

座標の値が \[-1, 1] の範囲外の場合、変倍は、その座標の方向に要素を拡大します。この範囲内の場合、変倍は、要素をその座標の方向に縮小します。負の場合、変倍は [点対称化](https://ja.wikipedia.org/wiki/点対称) と大きさの変更を行います。1 と等しい場合、変倍は何もしません。

> [!NOTE]
> `scale()` 関数は、 2D の変換のみに適用されます。 3D 空間内での変倍を行うには、 [`scale3d()`](/ja/docs/Web/CSS/Reference/Values/transform-function/scale3d) 関数を使用してください。

## 構文

```css
scale(sx)

scale(sx, sy)
```

### 値

- `sx`
  - : 変倍ベクトルの横軸（水平、X 成分）を表す {{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;percentage&gt;")}} です。
- `sy` {{optional_inline}}
  - : 変倍ベクトルの縦軸（垂直、Y 成分）を表す {{cssxref("&lt;number&gt;")}} または {{cssxref("&lt;percentage&gt;")}} です。
    定義されていない場合、デフォルト値は `sx` であり、要素の{{glossary("aspect ratio", "アスペクト比")}}を保つ一様な変倍となります。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><a href="/ja/docs/Web/CSS/Reference/Values/transform-function#直交座標系">直交座標系</a> (<a href="https://ja.wikipedia.org/wiki/実数空間">ℝ^2</a>)</th>
      <th scope="col"><a href="https://en.wikipedia.org/wiki/Homogeneous_coordinates">同次座標系</a> (<a href="https://en.wikipedia.org/wiki/Real_projective_plane">ℝℙ^2</a>)</th>
      <th scope="col">直交座標系 (<a href="https://ja.wikipedia.org/wiki/実数空間">ℝ^3</a>)</th>
      <th scope="col">同次座標系 (<a href="https://en.wikipedia.org/wiki/Real_projective_space">ℝℙ^3</a>)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mi>sx</mi></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mi>sy</mi></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cc} sx & 0 \\ 0 & sy \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mi>sx</mi></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mi>sy</mi></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} sx & 0 & 0 \\ 0 & sy & 0 \\ 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mi>sx</mi></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mi>sy</mi></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} sx & 0 & 0 \\ 0 & sy & 0 \\ 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mi>sx</mi></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mi>sy</mi></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} sx & 0 & 0 & 0 \\ 0 & sy & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
    </tr>
    <tr>
      <td><code>[sx 0 0 sy 0 0]</code></td>
    </tr>
  </tbody>
</table>

## 形式文法

{{CSSSyntax}}

## アクセシビリティ

拡大や縮小のアニメーションは、特定の種類の偏頭痛を引き起こす原因になりやすいので、アクセシビリティの問題になることがあります。ウェブサイトにこのようなアニメーションを含める必要がある場合は、できればサイト全体で、ユーザーがアニメーションを止める制御ができるようしてください。

また、 {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} メディア特性を使用することを検討してください。これを使用して[メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries)を書けば、ユーザーがシステムの設定でアニメーションを減らすよう指定した場合にアニメーションを止めることができます。

詳しくは以下の文書を参照してください。

- [MDN WCAG の理解、ガイドライン 2.3 の解説](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#ガイドライン_2.3_—_発作と身体的反応_発作や身体的反応を引き起こすことが知られている方法でコンテンツをデザインしないでください)
- [Understanding Success Criterion 2.3.3 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)

## 例

### X と Y の大きさを一緒に変倍する

#### HTML

```html
<div>通常</div>
<div class="scaled">変倍</div>
```

#### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.scaled {
  transform: scale(0.7); /* scaleX(0.7) scaleY(0.7) と等価 */
  background-color: pink;
}
```

#### 結果

{{EmbedLiveSample("x_と_y_の大きさを一緒に変倍する", "200", "200")}}

### X と Y の大きさを別々に変倍し、原点を平行移動させる

#### HTML

```html
<div>通常</div>
<div class="scaled">変倍</div>
```

#### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.scaled {
  transform: scale(2, 0.5); /* scaleX(2) scaleY(0.5) と等価 */
  transform-origin: left;
  background-color: pink;
}
```

#### 結果

{{EmbedLiveSample("x_と_y_の大きさを別々に変倍し、原点を平行移動させる", "200", "200")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("transform")}}
- {{cssxref("scale")}}
- {{cssxref("zoom")}}
- {{cssxref("&lt;transform-function&gt;")}}
- {{cssxref("transform-function/scale3d", "scale3d()")}}
- 他の独立座標変換関数、 {{cssxref("translate")}} および {{cssxref("rotate")}}
