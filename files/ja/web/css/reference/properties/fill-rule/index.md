---
title: fill-rule
slug: Web/CSS/Reference/Properties/fill-rule
original_slug: Web/CSS/fill-rule
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

**`fill-rule`** は [CSS](/ja/docs/Web/CSS) のプロパティで、SVG シェイプのキャンバスのどの部分が塗りつぶすシェイプ内に記載されるかを決定するルールを定義します。これが存在する場合、要素の {{SVGAttr("fill-rule")}} 属性よりも優先されます。

`fill-rule` は、図形のどの領域を「図形の内側」とみなすかを明確にします。図形の内部をどのように決定するかをブラウザーに指示するために設定できる 2 つの値を提供します。円と同様に、交差するパスが存在しない図形の場合、塗りつぶす図形の内部境界は直感的に明らかです。交差するパスを含む複雑な図形（ベン図など）や、他のパスを囲むパス（ドーナツなど）は、図形のどの領域が図形の「内部」であり、{{cssxref("fill")}} プロパティによって塗りつぶすべきかを判断することが難しいため、このプロパティを使用すると便利です。

> [!NOTE]
> `fill-rule` プロパティは、 {{SVGElement("svg")}} に含まれる {{SVGElement("path")}}、{{SVGElement("polygon")}}、 {{SVGElement("polyline")}}、{{SVGElement("text")}}、{{SVGElement("textPath")}}、{{SVGElement("tspan")}} 要素に適用されます。他の SVG 要素、HTML 要素、または擬似要素には適用されません。

## 構文

```css
/* keywords */
fill-rule: evenodd;
fill-rule: nonzero;

/* Global values */
fill-rule: inherit;
fill-rule: initial;
fill-rule: revert;
fill-rule: revert-layer;
fill-rule: unset;
```

### 値

- `nonzero`
  - : 図形内のすべての点について、図形の外縁を越える方向にランダムな方向に光線が描画されます。それぞれの光線が図形と交差する場所を調べるために、各光線が調べられます。カウントを 0 から始めて、パス区間が光線を左から右に交差するたびに 1 を追加し、パス区間が光線を右から左に交差するたびに 1 を減算します。交差の回数を数えた後、結果が 0 の場合、その点はパスの外側にあることになります。それ以外の場合は、その点はパスの内側にあることになります。

- `evenodd`
  - : 塗りつぶし規則のボックス内のすべての点について、ランダムな方向に光線が描画されます。光線が指定された図形から交差するパスの区間の数がカウントされます。この数値が奇数の場合、その点は内側にあり、偶数の場合、その点は外側にあります。0 は偶数と見なされます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### SVG 要素の塗りつぶしルールを定義

この例では、`fill-rule` の宣言方法、プロパティの効果、および CSS `fill-rule` プロパティが `fill-rule` 属性よりも優先される仕組みについて示しています。

#### HTML

SVG {{SVGElement("polygon")}} および {{SVGElement("path")}} 要素を使用して定義された 2 つの複雑な形状を持つ SVG を定義します。多角形には SVG `fill-rule` 属性が `evenodd` に設定され、星形のパスは既定の `nonzero` に設定されています。行を表示するには、SVG の {{SVGAttr("stroke")}} 属性を使用して概要を `red` に設定します（代わりに {{CSSXRef("stroke")}} プロパティを使用することもできます）。

```html hidden
<p>元の SVG</p>
```

```html
<svg viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg">
  <polygon
    points="180,10 150,100 220,40 140,40 210,100"
    stroke="red"
    fill-rule="evenodd" />
  <path
    d="M 10,5 l 90,0 -80,80 0,-60 80,80 -90,0 z"
    stroke="red"
    fill-rule="nonzero" />
</svg>
```

```html hidden
<p><code>fill-rule: nonzero;</code></p>
<svg viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg">
  <polygon
    points="180,10 150,100 220,40 140,40 210,100"
    stroke="red"
    fill-rule="evenodd" />
  <path
    d="M 10,5 l 90,0 -80,80 0,-60 80,80 -90,0 z"
    stroke="red"
    fill-rule="nonzero" />
</svg>
<p><code>fill-rule: evenodd;</code></p>
<svg viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg">
  <polygon
    points="180,10 150,100 220,40 140,40 210,100"
    stroke="red"
    fill-rule="evenodd" />
  <path
    d="M 10,5 l 90,0 -80,80 0,-60 80,80 -90,0 z"
    stroke="red"
    fill-rule="nonzero" />
</svg>
```

上記の SVG は 3 回繰り返されていますが、簡潔にするため 1 つのコピーのみを示しています。

#### CSS

最初の SVG に内包されている図形には CSS は適用されていません。 2 つ目の SVG 内の図形は、 `nonzero` 値を使用するように設定します。 3 つ目の SVG では、入れ子になっているすべての図形が `evenodd` に設定されています。

```css hidden
svg {
  border: 1px solid;
  height: calc(33vh - 2.5em);
  margin-bottom: 10px;
}
p {
  margin: 0;
}
```

```css
svg:nth-of-type(2) > * {
  fill-rule: nonzero;
}
svg:nth-of-type(3) > * {
  fill-rule: evenodd;
}
```

#### 結果

{{EmbedLiveSample("Defining the fill rules for SVG elements", "300", "540")}}

`fill-rule` の値が `nonzero` の場合、図形の「内部」は図形全体になります。 `evenodd` の値は、一部の空間を空として定義します。最初の画像は、属性として含まれている `fill-rule` をレンダリングしています。CSS で `fill-rule` を宣言すると、2 つ目と 3 つ目の画像の属性値が上書きされます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- SVG の {{SVGAttr("fill-rule")}} 属性
- プレゼンテーションプロパティ: `fill-rule`, {{cssxref("clip-rule")}}, {{cssxref("color-interpolation-filters")}}, {{cssxref("fill-opacity")}}, {{cssxref("fill")}}, {{cssxref("marker-end")}}, {{cssxref("marker-mid")}}, {{cssxref("marker-start")}}, {{cssxref("shape-rendering")}}, {{cssxref("stop-color")}}, {{cssxref("stop-opacity")}}, {{cssxref("stroke")}}, {{cssxref("stroke-dasharray")}}, {{cssxref("stroke-dashoffset")}}, {{cssxref("stroke-linecap")}}, {{cssxref("stroke-linejoin")}}, {{cssxref("stroke-miterlimit")}}, {{cssxref("stroke-opacity")}}, {{cssxref("stroke-width")}}, {{cssxref("text-anchor")}}, {{cssxref("vector-effect")}}
- {{cssxref("opacity")}}
- {{cssxref("background-color")}}
- {{cssxref("color_value", "&lt;color>")}}
- {{cssxref("basic-shape")}} データ型
