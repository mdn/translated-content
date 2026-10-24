---
title: "`fill-opacity` プロパティ (CSS)"
short-title: fill-opacity
slug: Web/CSS/Reference/Properties/fill-opacity
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

**`fill-opacity`** は [CSS](/ja/docs/Web/CSS) のプロパティで、SVG の図形やテキストコンテンツ要素に適用され、要素を塗りつぶす描画操作（色、グラデーション、パターンなど）の不透過度を定義します。このプロパティは、要素の `fill` の不透過度のみを定義するものであり、ストロークには影響しません。存在する場合、要素の {{SVGAttr("fill-opacity")}} 属性よりも優先されます。

> [!NOTE]
> `fill-opacity` プロパティは、{{SVGElement("svg")}} 内に含まれる {{SVGElement("circle")}}、{{SVGElement("ellipse")}}、{{SVGElement("path")}}、{{SVGElement("polygon")}}、{{SVGElement("polyline")}}、{{SVGElement("rect")}}、{{SVGElement("text")}}、{{SVGElement("textPath")}}、{{SVGElement("tspan")}} の各要素にのみ適用されます。その他の SVG、HTML、擬似要素には適用されません。

## 構文

```css
/* 数値とパーセント値 */
fill-opacity: 0.2;
fill-opacity: 20%;

/* グローバル値 */
fill-opacity: inherit;
fill-opacity: initial;
fill-opacity: revert;
fill-opacity: revert-layer;
fill-opacity: unset;
```

### 値

この要素の `fill` の不透過度を表す {{cssxref("number")}} または {{cssxref("percentage")}} です。

- {{cssxref("number")}}
  - : `0` 以上 `1` 以下の数値です。

- {{cssxref("percentage")}}
  - : `0%` 以上 `100%` 以下のパーセント値です。

`0` または `0%` を設定すると、要素は完全に透明になります。`1` または `100%` を設定すると、要素は完全に不透明になります。その中間値の場合、要素は半透明になり、要素の背後のコンテンツが見えるようになります。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### SVG 要素の塗りつぶしの不透過度の定義

この例では、`fill-opacity` の基本的な使用例を示しています。また、CSS の `fill-opacity` プロパティが `fill-opacity` 属性よりも優先され、図形に適用された `stroke` には何の影響も与えないことを説明しています。

#### HTML

いくつかの異なる SVG グラフィック要素を含め、それぞれの `fill-opacity` 属性を `1` に設定します（`line` を除く）。これは、各要素の塗りつぶしが不透明になることを意味します。SVG の `fill-opacity` 属性は、{{SVGElement("line")}} には適用されません。

```html
<svg viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="10" width="30" height="30" fill-opacity="1" />
  <rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill-opacity="1" />
  <circle cx="25" cy="75" r="20" fill-opacity="1" />
  <ellipse cx="75" cy="75" rx="20" ry="10" fill-opacity="1" />
  <line x1="50" x2="90" y1="40" y2="60" stroke="black" stroke-width="5" />
  <polyline
    points="60 90 65 100 70 95 75 110 80 105 85 120 90 115 95 130 100 125"
    fill-opacity="1" />
  <path d="M20,130 Q40,105 50,130 T90,130" fill-opacity="1" />
</svg>
```

#### CSS

CSS では、`fill-opacity` プロパティを使用して SVG の {{SVGAttr("fill-opacity")}} 属性の値を上書きし、それぞれの SVG 要素に異なる値を指定します。

円と楕円に {{cssxref("stroke")}} を追加し、ストロークの不透過度が `fill-opacity` プロパティの影響を受けないことを示します。

各要素の不透過度をより見やすくするために背景画像を設定するなど、その他の SVG スタイルも設定されています。簡潔さを期すため、これらについてはここでは表示させていません。

```css hidden
svg {
  border: 1px solid;
  height: calc(100vh - 20px);
  background: repeating-linear-gradient(
    to bottom right,
    transparent 0 10px,
    #cccccc 10px 11px
  );
}
```

```css
svg > * {
  fill: black;
}
rect:last-of-type {
  fill-opacity: 0.1;
}
circle {
  fill-opacity: 0.6;
}
ellipse {
  fill-opacity: 40%;
}
line {
  fill-opacity: 10%;
}
polyline {
  fill-opacity: 50%;
}
path {
  fill-opacity: 0.5;
}

circle,
ellipse {
  stroke: black;
  stroke-width: 3px;
}
```

#### 結果

{{EmbedLiveSample("Defining the fill opacity of SVG elements", "300", "360")}}

完全に不透明なものは、最初の矩形と線の 2 つの要素だけです。最初の矩形はどのセレクターにも一致しないため、CSS は適用されず、`fill` は完全に不透明になります。`line` はセレクターに一致し、`fill-opacity: 10%` が設定されています。しかし、この線には `fill` の描画操作がなく、`stroke` のみが表示されるため、この宣言は効果がありません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- SVG {{SVGAttr("fill-opacity")}} 属性
- プレゼンテーションプロパティ: `fill-opacity`, {{cssxref("clip-rule")}}, {{cssxref("color-interpolation-filters")}}, {{cssxref("fill-rule")}}, {{cssxref("fill")}}, {{cssxref("marker-end")}}, {{cssxref("marker-mid")}}, {{cssxref("marker-start")}}, {{cssxref("shape-rendering")}}, {{cssxref("stop-color")}}, {{cssxref("stop-opacity")}}, {{cssxref("stroke")}}, {{cssxref("stroke-dasharray")}}, {{cssxref("stroke-dashoffset")}}, {{cssxref("stroke-linecap")}}, {{cssxref("stroke-linejoin")}}, {{cssxref("stroke-miterlimit")}}, {{cssxref("stroke-opacity")}}, {{cssxref("stroke-width")}}, {{cssxref("text-anchor")}}, {{cssxref("vector-effect")}}
- {{cssxref("opacity")}}
- {{cssxref("background-color")}}
- {{cssxref("color_value", "&lt;color>")}}
- {{cssxref("basic-shape")}} データ型
