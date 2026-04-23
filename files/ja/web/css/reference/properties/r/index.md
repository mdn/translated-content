---
title: r
slug: Web/CSS/Reference/Properties/r
original_slug: Web/CSS/r
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

**`r`** は [CSS](/ja/docs/Web/CSS) のプロパティで、円の半径を定義します。これは SVG の {{SVGElement("circle")}} 要素でのみ使用されます。存在する場合、その円の {{SVGAttr("r")}} 属性を上書きします。

> [!NOTE]
> `r` プロパティは、 {{SVGElement("svg")}} の中にある {{SVGElement("circle")}} 要素にのみ適用されます。その他の SVG 要素、 HTML 要素、擬似要素には適用されません。

## 構文

```css
/* 長さとパーセント値 */
r: 3px;
r: 20%;

/* グローバル値 */
r: inherit;
r: initial;
r: revert;
r: revert-layer;
r: unset;
```

### 値

円の半径を定義する {{cssxref("length")}} と {{cssxref("percentage")}} の値です。

- {{cssxref("length")}}
  - : 絶対的または相対的な長さで、 CSS の {{cssxref("&lt;length&gt;")}} データ型で許可されている任意の単位で表現することができます。負の値は無効です。

- {{cssxref("percentage")}}
  - : 現在の SVG ビューポートの、 <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math> で計算される正規化された対角線を参照するパーセント値です。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 円の半径の定義

この例では、 SVG 内に 2 つの同一の `<circle>` 要素が存在し、それぞれ半径が `10` で、中心点の X 軸座標と Y 軸座標が同じです。

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="10" />
  <circle cx="50" cy="50" r="10" />
</svg>
```

CSS を使用して、最初の円のみスタイルを設定し、 2 番目の円には既定のスタイルを使用します（{{cssxref("fill")}} の既定値は黒）。 `r` プロパティを使用して SVG の {{SVGAttr("r")}} 属性の値を上書きし、 `fill` と {{cssxref("stroke")}} を指定します。 SVG の既定のサイズは、幅が `300px`、高さが `150px`です。

```css
svg {
  border: 1px solid black;
}

circle:first-of-type {
  r: 30px;
  fill: lightgreen;
  stroke: black;
}
```

{{EmbedLiveSample("Defining a circle's radius", "300", "180")}}

### ViewBox とビューポートのピクセル

この例では、 2 つの SVG が含まれており、それぞれに 2 つの `<circle>` 要素があります。 2 つ目の SVG には `viewBox` 属性が記載されており、SVG の viewBox と SVG のビューポートの違いを示しています。

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="10" />
  <circle cx="50" cy="50" r="10" />
</svg>
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="10" />
  <circle cx="50" cy="50" r="10" />
</svg>
```

CSS は前回の例と似ており、 `r: 30px` が設定されていますが、画像がどちらも確実に `300px` になるように、 {{cssxref("width")}} を設定します。

```css
svg {
  border: 1px solid black;
  width: 300px;
}

circle:first-of-type {
  r: 30px;
  fill: lightgreen;
  stroke: black;
}
```

{{EmbedLiveSample("ViewBox versus viewport pixels", "300", "360")}}

`viewBox` 属性は SVG を SVG 座標系で 200 ピクセルの幅として定義し、画像は `300px` まで拡大されるため、SVG 座標で `30` ピクセルである部分は、CSS ピクセルでは `45` ピクセルとしてレンダリングされるように変倍されます。

### パーセント値を使用して円の半径を定義

この例では、前回の例と同じマークアップを使用します。唯一の違いは `r` の値であり、この場合はパーセント値を使用します。

```html hidden
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="10" />
  <circle cx="50" cy="50" r="10" />
</svg>
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="10" />
  <circle cx="50" cy="50" r="10" />
</svg>
```

```css
svg {
  border: 1px solid black;
  width: 300px;
}

circle:first-of-type {
  r: 30%;
  fill: lightgreen;
  stroke: black;
}
```

{{EmbedLiveSample("Defining the radius of a circle using percentages", "300", "360")}}

どちらの場合も、円の半径は SVG ビューポートの正規化された対角線の `30%` です。半径 `r` は <math><mn>0.3</mn><mo>&#xd7;</mo><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math> と同等です。最初の画像は `300` と `150` の CSS ピクセルを使用し、2 番目の画像は `200` と `100` の SVG ビューボックス単位を使用していますが、30% は比例した値です。その結果、`r` の値は同じになります。 `47.43` ビューボックス単位で、`71.15` CSS ピクセルに解決されます。

`r` は同じだが、 2 番目の SVG は 50% 拡大され、中心が 50% 下に、そして右に押されているため、中心点が異なっています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 幾何プロパティ: `r`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- {{cssxref("border-radius")}} 一括指定プロパティ
- {{cssxref("gradient/radial-gradient", "radial-gradient")}}
- {{cssxref("basic-shape")}} データ型
- SVG の {{SVGAttr("r")}} 属性
