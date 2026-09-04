---
title: cx
slug: Web/CSS/Reference/Properties/cx
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

**`cx`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 SVG の {{SVGElement("circle")}} または {{SVGElement("ellipse")}} 要素の中心の X 座標を定義します。存在する場合、その要素の {{SVGAttr("cx")}} 属性を上書きします。

> [!NOTE]
> SVG の {{SVGAttr("cx")}} 属性は SVG の {{SVGElement("radialGradient")}} 要素に関連付けられていますが、この `cx` プロパティは {{SVGElement("svg")}} の中に含まれている {{SVGElement("circle")}} および {{SVGElement("ellipse")}} 要素にのみ適用されます。 `<radialGradient>` 、その他の SVG 要素、 HTML の要素や擬似要素には適用されません。

## 構文

```css
/* 長さとパーセント値の値 */
cx: 20px;
cx: 20%;

/* グローバル値 */
cx: inherit;
cx: initial;
cx: revert;
cx: revert-layer;
cx: unset;
```

### 値

{{cssxref("length")}} および {{cssxref("percentage")}} 値で、円または楕円の水平方向の中心を記述します。

- {{cssxref("length")}}
  - : 絶対長または相対長として、 CSS の {{cssxref("&lt;length&gt;")}} データ型で許可されている任意の単位で表現できます。負の値は無効です。

- {{cssxref("percentage")}}
  - : パーセント値は、現在の SVG ビューポートの幅を参照します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 円および楕円の X 軸座標の定義

この例では、 `cx` の基本的な使用例と、 CSS の `cx` プロパティが `cx` 属性を引き継ぐ仕組みを説明しています。

#### HTML

SVG には、同一の `<circle>` 要素と同一の `<ellipse>` 要素が 2 つずつ含まれます。それらの `cx` 属性値はそれぞれ、 `50` と `150` です。

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="30" />
  <circle cx="50" cy="50" r="30" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
</svg>
```

#### CSS

CSS を使用して、最初の円と最初の楕円のみスタイル設定し、それらの双子図形には既定のスタイルを使用できるようにします（{{cssxref("fill")}} は既定で黒）。 `cx` プロパティを使用して SVG の {{SVGAttr("cx")}} 属性の値を上書きし、さらに `fill` と {{cssxref("stroke")}} を与えて、各ペアの最初の図形を双子と区別します。 ブラウザーは、既定では SVG 画像を幅 `300px`、高さ `150px` でレンダリングします。

```css
svg {
  border: 1px solid;
}

circle:first-of-type {
  cx: 30px;
  fill: lightgreen;
  stroke: black;
}
ellipse:first-of-type {
  cx: 180px;
  fill: pink;
  stroke: black;
}
```

#### 結果

{{EmbedLiveSample("Defining the x-axis coordinate of a circle and ellipse", "300", "180")}}

スタイル設定された円の中心は、 SVG ビューポートの左端から `30px` の距離にあり、スタイル設定された楕円の中心は、左端から `180px` の距離にあります。これは、 CSS の `cx` プロパティ値で定義されているとおりです。スタイル設定されていない図形の中心は、 SVG ビューポートの左端から `50ox` と `150px` の距離にあります。これは、 SVG の `cx` 属性値で定義されているとおりです。

### X 軸座標をパーセント値で設定

この例では、`cx` にパーセント値を使用する方法を示しています。

#### HTML

前回と同じマークアップを使用します。

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="30" />
  <circle cx="50" cy="50" r="30" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
  <ellipse cx="150" cy="50" rx="20" ry="40" />
</svg>
```

#### CSS

CSS は、前回の例とほぼ同様です。唯一の違いは CSS の `cx` プロパティ値で、この例では、 `<circle>` には `30%` のパーセント値、 `<ellipse>` には `80%` のパーセント値を使用しています。

```css
svg {
  border: 1px solid;
}

circle:first-of-type {
  cx: 30%;
  fill: lightgreen;
  stroke: black;
}
ellipse:first-of-type {
  cx: 80%;
  fill: pink;
  stroke: black;
}
```

#### 結果

{{EmbedLiveSample("x-axis coordinates as percentage values", "300", "180")}}

`cx` にパーセント値を使用する場合、値は SVG ビューポートの幅からの相対値となります。 ここでは、スタイル設定の円と楕円の中心の X 軸座標は、それぞれ現在の SVG ビューポートの幅の `30%` と `80%` です。幅が既定で `300px` であるため、`cx` の値は SVG ビューポートの左端から `90px` と `240px` となります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- SVG の {{SVGAttr("cx")}} 属性
- 幾何プロパティ: `cx`, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- {{cssxref("border-radius")}} 一括指定プロパティ
- {{cssxref("gradient/radial-gradient", "radial-gradient")}}
- {{cssxref("basic-shape")}} データ型
