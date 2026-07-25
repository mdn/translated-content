---
title: CSS `shape-rendering` プロパティ
short-title: shape-rendering
slug: Web/CSS/Reference/Properties/shape-rendering
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

**`shape-rendering`** は [CSS](/ja/docs/Web/CSS) のプロパティで、パス、円、矩形などの図形をレンダリングする際に、どのようなトレードオフを行うべきかについて、レンダラーにヒントを提供します。
このプロパティは、{{SVGElement("circle")}}、{{SVGElement("ellipse")}}、{{SVGElement("line")}}、{{SVGElement("path")}}、{{SVGElement("polygon")}}、 {{SVGElement("polyline")}}、{{SVGElement("rect")}} の各要素にのみ影響します。明示的に宣言された場合、この CSS プロパティの値は、要素の {{SVGAttr("shape-rendering")}} 属性の値よりも優先されます。

## 構文

```css
shape-rendering: auto;
shape-rendering: crispEdges;
shape-rendering: geometricPrecision;
shape-rendering: optimizeSpeed;

/* グローバル値 */
shape-rendering: inherit;
shape-rendering: initial;
shape-rendering: revert;
shape-rendering: revert-layer;
shape-rendering: unset;
```

### 値

{{cssxref("length")}} および {{cssxref("percentage")}} の値は、円または楕円の水平方向の中心を表します。

- `auto`
  - : この値は、ユーザーエージェントに対し、速度、エッジの鮮明さ、および幾何学的精度のバランスをとるためにトレードオフを行うよう指示するものであり、その際、速度やエッジの鮮明さよりも幾何学的精度がより重視されます。
- `crispEdges`
  - : この値は、ユーザーエージェントに対し、幾何学的精度やレンダリング速度よりもエッジの鮮明さを優先するよう指示します。最終的なレンダリングでは、アンチエイリアスなどの処理が省略される可能性があります。また、エッジをデバイスピクセルに合わせるように、線の位置や線幅が調整される場合もあります。
- `geometricPrecision`
  - : この値は、ユーザーエージェントに対し、速度や鮮明なエッジよりも幾何学的な精度を優先するよう指示します。最終的なレンダリングでは、アンチエイリアスなどの手法が用いられる場合があります。
- `optimizeSpeed`
  - : この値は、ユーザーエージェントに対し、幾何学的精度やエッジの鮮明さよりもレンダリング速度を優先するよう指示します。最終的なレンダリングでは、アンチエイリアスなどの処理が省略される可能性があります。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

さまざまなレンダリング結果を示すために、同じ大きさ・同じ形の楕円を 4 つ作成します。

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 120">
  <ellipse cx="50" cy="60" rx="40" ry="60" />
  <ellipse cx="150" cy="60" rx="40" ry="60" />
  <ellipse cx="250" cy="60" rx="40" ry="60" />
  <ellipse cx="350" cy="60" rx="40" ry="60" />
</svg>
```

次に、`shape-rendering` の 4 つの値を、楕円ごとに 1 つずつ適用します。

```css
ellipse:nth-of-type(1) {
  shape-rendering: crispEdges;
}
ellipse:nth-of-type(2) {
  shape-rendering: geometricPrecision;
}
ellipse:nth-of-type(3) {
  shape-rendering: optimizeSpeed;
}
ellipse:nth-of-type(4) {
  shape-rendering: auto;
}
```

結果の SVG はここに表示されます。左から数えて 1 番目と 3 番目の楕円は、ギザギザした縁になる可能性が高くなりますが、2 番目の楕円はより滑らかな外観になるはずです。4 番目と最後の楕円の外観は、この例を表示するために使用するユーザーエージェントが設定した具体的なトレードオフによって決まります。

{{EmbedLiveSample("Example", "400", "240")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- SVG {{SVGAttr("shape-rendering")}} 属性
