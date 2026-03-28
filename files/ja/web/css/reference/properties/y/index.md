---
title: y
slug: Web/CSS/Reference/Properties/y
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

**`y`** は [CSS](/ja/docs/Web/CSS) プロパティで、SVG の {{SVGElement("rect")}} 図形、{{SVGElement("image")}} 画像、{{SVGElement("foreignObject")}} ビューポート、および入れ子になった {{SVGElement("svg")}} ビューポートの左上角の Y 座標を、最も近い `<svg>` 親要素のユーザー[座標系](/ja/docs/Web/API/CSSOM_view_API/Coordinate_systems)に対して定義します。存在する場合、このプロパティは要素の {{SVGAttr("y")}} 属性よりも優先されます。

> [!NOTE]
> `x` プロパティは、{{SVGElement("rect")}}、{{SVGElement("image")}}、{{SVGElement("foreignObject")}}、{{SVGElement("svg")}} の各要素が `<svg>` 要素の中に存在する場合にのみ適用されます。最外部の `<svg>` 要素自体には効果がなく、他の SVG 要素や HTML 要素、擬似要素には適用されません。

## 構文

```css
/* 寸法とパーセント値 */
y: 10px;
y: 10%;

/* グローバル値 */
y: inherit;
y: initial;
y: revert;
y: revert-layer;
y: unset;
```

### 値

{{cssxref("length")}} および {{cssxref("percentage")}} 値は、SVG 要素の左上角の Y 軸座標位置を表します。

- {{cssxref("length")}}
  - : 絶対または相対の寸法として、CSS の {{cssxref("&lt;length&gt;")}} データ型で利用できる任意の単位で表すことができます。

- {{cssxref("percentage")}}
  - : パーセント値は、SVG の {{SVGAttr("viewBox")}} が宣言されている場合はその高さを参照し、宣言されていない場合は現在の SVG ビューポートの高さを参照します。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### SVG 図形の Y 座標の定義

この例では、`y` の基本的な用途と、CSS の `y` プロパティが `y` 属性よりも優先される様子を示しています。

#### HTML

ここでは 4 つの同一の SVG `<rect>` 要素を記載しています。これらの要素の {{SVGAttr("x")}} および `y` 属性の値はすべて `10` であり、4 つの矩形はすべて、SVG ビューポートの左上角から `10px` の位置に配置されています。

```html
<svg>
  <rect width="40" height="40" x="10" y="10" />
  <rect width="40" height="40" x="10" y="10" />
  <rect width="40" height="40" x="10" y="10" />
  <rect width="40" height="40" x="10" y="10" />
</svg>
```

#### CSS

すべての矩形に黒い境界線を付けて、少し半透明に設定することで、重なり合った矩形が見えるようにしています。それぞれの矩形には、異なる {{cssxref("fill")}} と `y` 値を指定しています。

```css
svg {
  border: 1px solid;
}

rect {
  fill: none;
  stroke: black;
  opacity: 0.8;
}

rect:nth-of-type(2) {
  y: -20px;
  fill: red;
}

rect:nth-of-type(3) {
  y: 4em;
  fill: yellow;
}

rect:nth-of-type(4) {
  y: 60%;
  fill: orange;
}
```

#### 結果

{{EmbedLiveSample("Defining the y-axis coordinate of SVG shapes", "300", "180")}}

それぞれの矩形の上端は、それぞれ `10`（属性による）、`-20px`、`4em`、`60%` の位置になります。矩形の高さは `40px` ですので、`-20px` の場所では、赤い矩形の半分がビューポートの外側に配置されます。SVG の高さは `150px` ですので、オレンジ色の矩形の上辺は、SVGビューポートの上端から `90px` の位置になります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## See also

- SVG の {{SVGAttr("y")}} 属性
- 幾何プロパティ: `y`, {{cssxref("cx")}}, {{cssxref("cy")}}, {{cssxref("r")}}, {{cssxref("rx")}}, {{cssxref("ry")}}, {{cssxref("x")}}, {{cssxref("width")}}, {{cssxref("height")}}
- {{cssxref("fill")}}
- {{cssxref("stroke")}}
- {{cssxref("paint-order")}}
- {{cssxref("basic-shape")}} データ型
