---
title: fill
slug: Web/CSS/Reference/Properties/fill
original_slug: Web/CSS/fill
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

**`fill`** は [CSS](/ja/docs/Web/CSS) のプロパティで、SVG のテキストコンテンツおよび SVG の図形の内部キャンバスをどのように塗りつぶすか、または描画するかを定義します。存在する場合、要素の {{SVGAttr("fill")}} 属性を上書きします。

SVG の図形やテキストの輪郭の内部領域は塗りつぶされます。図形の「内部」が常に明確であるとは限りません。図形を定義するパスは重なり合うことがあります。これらの複雑な図形の「内部」と見なされる領域は、{{cssxref("fill-rule")}} プロパティまたは属性によって明確化されます。

サブパスが開いている場合、`fill` は描画前にパスを閉じます。これは、サブパスの終点と最初の点を結ぶ "closepath" コマンドが含まれているかのように動作します。言い換えれば、`fill` は `path` 要素（つまり、closepath コマンドのないサブパス）および `polyline` 要素内の開いたサブパスに適用されます。

> [!NOTE]
> `fill`プロパティは、{{SVGElement("svg")}} 内に含まれる, {{SVGElement('ellipse')}}、{{SVGElement('path')}}、{{SVGElement('polygon')}}、{{SVGElement('polyline')}}、{{SVGElement('rect')}}、{{SVGElement('text')}}、{{SVGElement('textPath')}}、{{SVGElement('tspan')}} の各要素にのみ適用されます。その他の SVG、HTML、擬似要素には適用されません。

## 構文

```css
/* キーワード */
fill: none;
fill: context-fill;
fill: context-stroke;

/* <color> 値 */
fill: red;
fill: hsl(120deg 75% 25% / 60%);

/* <url> 値 */
fill: url("#gradientElementID");
fill: url("star.png");

/* 代替値付き <url> 値 */
fill: url("#gradientElementID") blue;
fill: url("star.png") none;

/* グローバル値 */
fill: inherit;
fill: initial;
fill: revert;
fill: revert-layer;
fill: unset;
```

### 値

- `none`
  - : `fill` は描画されません。ストローク内の領域は、もしあれば、透明になります。

- `context-fill`
  - : コンテキスト要素の `fill` から塗りつぶす値を使用します。

- `context-stroke`
  - : コンテキスト要素の `stroke` から塗りつぶす値を使用します。

- {{cssxref("color_value", "&lt;color>")}}
  - : 塗りつぶし色は、任意の CSS {{cssxref("color_value", "&lt;color>")}} 値になります。

- `<url>`
  - : SVG ペイントサーバー要素（{{SVGElement("linearGradient")}}、{{SVGElement("radialGradient")}}、{{SVGElement("pattern")}} など）への URL 参照。リソース参照の後に、任意で `<color>` または `none` を続けることができます。これは、参照されたペイントサーバーが解決されない場合、代替値として使用されます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### SVG 要素の fill 値の定義

この例では、 `fill` 属性の宣言方法、その効果、および CSS の `fill` プロパティが `fill` 属性よりも優先される仕組みを示しています。

#### HTML

SVG には、2 巣の複雑な図形を、 {{SVGElement("polygon")}} および {{SVGElement("path")}} 要素を使用して定義してあります。両方の `fill` 属性は既定では `black` に設定されています。濃い灰色（`#666666`）のストロークを SVG の {{SVGAttr("stroke")}} 属性を使用して追加していますが、代わりに {{CSSXRef("stroke")}} プロパティを使用することができます。

```html
<svg viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M 10,5 l 90,0 -80,80 0,-60 80,80 -90,0 z"
    stroke="#666666"
    fill="black" />
  <polygon
    points="180,10 150,100 220,40 140,40 210,100"
    stroke="#666666"
    fill="black" />
</svg>
```

#### CSS

SVG 内の図形に `fill` 値を設定します。

```css hidden
svg {
  border: 1px solid;
  height: calc(100vh - 20px);
  margin-bottom: 10px;
}
```

```css
path {
  fill: red;
}
polygon {
  fill: hsl(0deg 100% 50% / 60%);
}
```

#### 結果

{{EmbedLiveSample("Defining fill values for SVG elements", "300", "170")}}

CSS の `fill` プロパティの値は SVG の `fill` 属性の値を上書きするため、両方の図形が赤色に塗りつぶされます。多角形の赤は半透明です。

### fill のキーワード値の使用

この例は、`fill` のキーワード値を使用する方法を示しています。

#### HTML

3 つの {{SVGElement("path")}} 要素と、パスのそれぞれの点に {{SVGElement("circle")}} を追加する {{SVGElement("marker")}} 要素があります。円マーカーは、SVG の {{SVGAttr("stroke")}} 属性と {{SVGAttr("fill")}} 属性を使用して、黒のストロークと灰色の塗りつぶしをつけて設定します。

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 90">
  <path d="M 10 44.64 L 30 10 L 70 10 L 90 44.64 L 70 79.28 L 30 79.28 Z" />
  <path d="M 100 44.64 L 80 10 L 120 10 L 140 44.64 L 120 79.28 L 80 79.28 Z" />
  <path
    d="M 150 44.64 L 130 10 L 170 10 L 190 44.64 L 170 79.28 L 130 79.28 Z" />
  <marker
    id="circle"
    markerWidth="12"
    markerHeight="12"
    refX="6"
    refY="6"
    markerUnits="userSpaceOnUse">
    <circle cx="6" cy="6" r="3" stroke-width="2" stroke="black" fill="grey" />
  </marker>
</svg>
```

#### CSS

それぞれのパスに異なる `stroke` と `fill` の色を設定します。まずパス（赤い境界線を持つもの）は `fill` を `none` に設定しています。円形のマーカーのストロークと塗りつぶしは、`context-stroke` 値を使用して、それらがマークする要素のストロークと同じ色に設定します。

```css hidden
svg {
  border: 1px solid;
  height: calc(100vh - 20px);
  margin-bottom: 10px;
}
```

```css
path {
  stroke-width: 2px;
  marker: url("#circle");
}
path:nth-of-type(1) {
  stroke: red;
  fill: none;
}
path:nth-of-type(2) {
  stroke: green;
  fill: lightgreen;
}
path:nth-of-type(3) {
  stroke: blue;
  fill: lightblue;
}
circle {
  stroke: context-stroke;
  fill: context-stroke;
}
```

#### 結果

{{EmbedLiveSample("Using fill keyword values", "300", "170")}}

最初のパスが透明な背景を持つ点に注目してください。これは `fill` が `none` に設定されており、既定の `fill` である `black` を上書きしているためです。円はストロークの色で塗りつぶされています。値を `context-fill` に変更した場合、円は透明になり、`red`、`green`、`blue` の代わりに `lightgreen` と `lightblue` になります。

### 塗りつぶしと代替値

この例では、`fill` 値として代替値付きの `url()` 値を指定する方法を示しています。

#### HTML

指定された SVG には、2 つの {{SVGElement("polygon")}} で描かれた星と、緑から金色、赤へと変化する {{SVGElement("linearGradient")}} が含まれています。

```html
<svg viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="myGradient">
      <stop offset="5%" stop-color="green" />
      <stop offset="50%" stop-color="gold" />
      <stop offset="95%" stop-color="red" />
    </linearGradient>
  </defs>
  <polygon points="80,10 50,100 120,40 40,40 110,100" />
  <polygon points="180,10 150,100 220,40 140,40 210,100" />
</svg>
```

#### CSS

SVG 内の多角形に `fill` 値を設定し、 `url()` 値と代替値を提供します。

```css hidden
svg {
  border: 1px solid;
  height: calc(100vh - 20px);
  margin-bottom: 10px;
}
```

```css
polygon:first-of-type {
  fill: url("#myGradient") magenta;
}
polygon:last-of-type {
  fill: url("#MISSINGIMAGE") magenta;
}
```

#### 結果

{{EmbedLiveSample("Fills and fallbacks", "300", "170")}}

最初の星はグラデーションを背景として使用しています。2 つ目 は、`url()` で参照された要素が存在しないため、代替値を使用しています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- SVG の {{SVGAttr("fill")}} 属性
- プレゼンテーションプロパティ: `fill`, {{cssxref("clip-rule")}}, {{cssxref("color-interpolation-filters")}}, {{cssxref("fill-opacity")}}, {{cssxref("fill-rule")}}, {{cssxref("marker-end")}}, {{cssxref("marker-mid")}}, {{cssxref("marker-start")}}, {{cssxref("shape-rendering")}}, {{cssxref("stop-color")}}, {{cssxref("stop-opacity")}}, {{cssxref("stroke")}}, {{cssxref("stroke-dasharray")}}, {{cssxref("stroke-dashoffset")}}, {{cssxref("stroke-linecap")}}, {{cssxref("stroke-linejoin")}}, {{cssxref("stroke-miterlimit")}}, {{cssxref("stroke-opacity")}}, {{cssxref("stroke-width")}}, {{cssxref("text-anchor")}}, {{cssxref("vector-effect")}}
- {{cssxref("opacity")}}
- {{cssxref("background-color")}}
- {{cssxref("color_value", "&lt;color>")}}
- {{cssxref("basic-shape")}} データ型
