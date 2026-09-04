---
title: x
slug: Web/CSS/Reference/Properties/x
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

**`x`** は [CSS](/ja/docs/Web/CSS) プロパティで、SVG の {{SVGElement("rect")}} 図形、{{SVGElement("image")}} 画像、{{SVGElement("foreignObject")}} ビューポート、または入れ子になった {{SVGElement("svg")}} ビューポートの左上角の X 座標を、最も近い `<svg>` 親要素のユーザー[座標系](/ja/docs/Web/API/CSSOM_view_API/Coordinate_systems)に対して定義します。存在する場合、このプロパティは要素の {{SVGAttr("x")}} 属性よりも優先されます。

> [!NOTE]
> `x` プロパティは、{{SVGElement("rect")}}、{{SVGElement("image")}}、{{SVGElement("foreignObject")}}、{{SVGElement("svg")}} の各要素が {{SVGElement("svg")}} 要素の中に存在する場合にのみ適用されます。最外部の `<svg>` 要素自体には効果がなく、他の SVG 要素や HTML 要素、擬似要素には適用されません。

## 構文

```css
/* 寸法とパーセント値 */
x: 40px;
x: 40%;

/* グローバル値 */
x: inherit;
x: initial;
x: revert;
x: revert-layer;
x: unset;
```

### 値

{{cssxref("length")}} および {{cssxref("percentage")}} 値は、SVG 要素コンテナーの左上角の X 軸座標位置を表します。

- {{cssxref("length")}}
  - : 絶対または相対の寸法として、CSS の {{cssxref("&lt;length&gt;")}} データ型で利用できる任意の単位で表すことができます。

- {{cssxref("percentage")}}
  - : パーセント値は、SVG の {{SVGAttr("viewBox")}} が宣言されている場合はその幅を参照し、宣言されていない場合は現在の SVG ビューポートの幅を参照します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### SVG 図形の X 座標の定義

この例では、`x` の基本的な用途と、CSS の `x` プロパティが `x` 属性よりも優先される様子を示しています。

#### HTML

ここでは 4 つの同一の SVG `<rect>` 要素を記載しています。これらの要素の `x` および {{SVGAttr("y")}} 属性の値はすべて `10` であり、4 つの矩形はすべて、SVG ビューポートの左上角から `10px` の位置に配置されています。

```html
<svg xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
  <rect width="100" height="100" x="10" y="10" />
</svg>
```

#### CSS

すべての矩形に黒い境界線を付けて、少し半透明に設定することで、重なり合った矩形が見えるようにしています。それぞれの矩形には、異なる塗りつぶし色と `x` 値を指定しています。

```css
svg {
  border: 1px solid;
  width: 300px;
}

rect {
  fill: none;
  stroke: black;
  opacity: 0.8;
}

rect:nth-of-type(2) {
  x: 3em;
  fill: red;
}

rect:nth-of-type(3) {
  x: 180px;
  fill: yellow;
}

rect:nth-of-type(4) {
  x: 50%;
  fill: orange;
}
```

#### 結果

{{EmbedLiveSample("Defining the x-axis coordinate of SVG shapes", "300", "180")}}

矩形の左辺は、それぞれ `10`（属性による）、`3em`、`180px`、 `50%` の位置になります。SVG の幅は `300px` ですので、最後の矩形の左辺は `150px` の位置になります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- SVG の {{SVGAttr("x")}} 属性
- 幾何プロパティ: `x`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- {{cssxref("basic-shape")}} データ型
