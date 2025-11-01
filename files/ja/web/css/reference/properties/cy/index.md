---
title: cy
slug: Web/CSS/Reference/Properties/cy
original_slug: Web/CSS/cy
l10n:
  sourceCommit: c5f403bb08c91ae77ddfe47f937438fb5e6fcae5
---

**`cy`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 SVG の {{SVGElement("circle")}} または {{SVGElement("ellipse")}} 要素の中心の Y 座標を定義します。存在する場合、その要素の {{SVGAttr("cy")}} 属性を上書きします。

> [!NOTE]
> SVG の {{SVGElement("radialGradient")}} 要素は {{SVGAttr("cx")}} 属性に対応していますが、この `cy` プロパティは {{SVGElement("svg")}} の中に含まれている {{SVGElement("circle")}} および {{SVGElement("ellipse")}} 要素にのみ適用されます。この属性は `<radialGradient>` 、その他の SVG 要素、 HTML の要素や擬似要素には適用されません。

## 構文

```css
/* length and percentage values */
cx: 20px;
cx: 20%;

/* Global values */
cx: inherit;
cx: initial;
cx: revert;
cx: revert-layer;
cx: unset;
```

### 値

{{cssxref("length")}} および {{cssxref("percentage")}} 値で、円または楕円の垂直方向の中心を記述します。

- {{cssxref("length")}}
  - : 絶対長または相対長として、 CSS の {{cssxref("&lt;length&gt;")}} データ型で許可されている任意の単位で表現できます。負の値は無効です。

- {{cssxref("percentage")}}
  - : パーセント値は、現在の SVG ビューポートの高さを参照します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 円および楕円の Y 軸座標の定義

この例では、 SVG には、同一の `<circle>` 要素と同一の `<ellipse>` 要素が 2 つずつ含まれます。それらの `cy` 属性値はそれぞれ、 `50` と `150` です。

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="30" />
  <circle cx="50" cy="50" r="30" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
</svg>
```

CSS を使用して、最初の円と最初の楕円のみスタイル設定し、それらの双子図形には既定のスタイルを使用できるようにします（{{cssxref("fill")}} は既定で黒）。 `cy` プロパティを使用して SVG の {{SVGAttr("cy")}} 属性の値を上書きし、さらに `fill` と {{cssxref("stroke")}} を与えて、各ペアの最初の図形を双子と区別します。 ブラウザーは、既定では SVG 画像を幅 `300px`、高さ `150px` でレンダリングします。

```css
svg {
  border: 1px solid;
}

circle:first-of-type {
  cy: 30px;
  fill: lightgreen;
  stroke: black;
}
ellipse:first-of-type {
  cy: 100px;
  fill: pink;
  stroke: black;
}
```

{{EmbedLiveSample("Defining the y-axis coordinate of a circle and ellipse", "300", "180")}}

スタイル設定された円の中心は、 SVG ビューポートの上端から `30px` の距離にあり、スタイル設定された楕円の中心は、上端から `180px` の距離にあります。これは、 CSS の `cy` プロパティ値で定義されているとおりです。スタイル設定されていない図形の中心は、 SVG ビューポートの上端から `50ox` と `150px` の距離にあります。これは、 SVG の `cy` 属性値で定義されているとおりです。

### Y 軸座標をパーセント値で設定

この例では、前回の例と同じマークアップを使用します。唯一の違いは、 CSS の `cy` プロパティ値です。この場合、 `30%` と `50%` のパーセント値を使用しています。

```html hidden
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="30" />
  <circle cx="50" cy="50" r="30" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
</svg>
```

```css
svg {
  border: 1px solid;
}

circle:first-of-type {
  cy: 30%;
  fill: lightgreen;
  stroke: black;
}
ellipse:first-of-type {
  cy: 50%;
  fill: pink;
  stroke: black;
}
```

{{EmbedLiveSample("y-axis coordinates as percentage values", "300", "180")}}

この場合、円と楕円の中心の Y 軸座標は、それぞれ現在の SVG ビューポートの高さの `30%` と `50%` です。画像の高さは既定では `150px` であるため、 `cy` の値は `45px` と `120px` に相当します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- SVG の {{SVGAttr("cy")}} 属性
- 幾何プロパティ: `cy`, {{cssxref("cx")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- {{cssxref("border-radius")}} 一括指定プロパティ
- {{cssxref("gradient/radial-gradient", "radial-gradient")}}
- {{cssxref("basic-shape")}} データ型
