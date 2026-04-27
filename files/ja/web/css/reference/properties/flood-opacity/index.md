---
title: CSS `flood-opacity` プロパティ
short-title: flood-opacity
slug: Web/CSS/Reference/Properties/flood-opacity
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

**`flood-opacity`** は [CSS](/ja/docs/Web/CSS) のプロパティで、{{SVGElement("filter")}} 内の {{SVGElement("feFlood")}} および {{SVGElement("feDropShadow")}} 要素における、現在のフィルタープリミティブのサブ領域の不透明度を定義します。存在する場合、この属性は要素の {{SVGAttr("flood-opacity")}} 属性よりも優先します。

このプロパティの値は、{{cssxref("flood-color")}} のアルファチャンネルに影響を与えます。これにより、`flood-color` の透過率を高めることは可能ですが、`flood-color` プロパティで定義された色の透過率を高めることはできません。

> [!NOTE]
> `flood-opacity` プロパティは、{{SVGElement("svg")}} に含まれた {{SVGElement("feFlood")}} および {{SVGElement("feDropShadow")}} 要素にのみ適用されます。他の SVG 要素、HTML 要素、擬似要素には適用されません。

## 構文

```css
/* 数値とパーセント値 */
flood-opacity: 0.2;
flood-opacity: 20%;

/* グローバル値 */
flood-opacity: inherit;
flood-opacity: initial;
flood-opacity: revert;
flood-opacity: revert-layer;
flood-opacity: unset;
```

### 値

`<opacity-value>` は、 {{cssxref("number")}} または {{cssxref("percentage")}} で SVG グラデーションの `<flood>` 要素の不透過度を表します。

- {{cssxref("number")}}
  - : `0` 以上 `1` 以下の値。

- {{cssxref("percentage")}}
  - : `0%` 以上 `100%` 以下のパーセント値。

`0` または `0%` を設定すると、塗りつぶしは完全に透明になります。`1` または `100%` を設定すると、要素は `flood-color` の値に応じた不透過度になり、部分的に不透過になる場合もありますし、ならない場合もあります。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### フィルターの塗りつぶしの不透過度を定義

この例では、`flood-opacity` の基本的な用途と、CSS の `flood-opacity` プロパティが `flood-opacity` 属性よりも優先される仕組みについて説明しています。

#### HTML

SVG にはいくつかの {{SVGElement("filter")}} 要素があり、それぞれに {{SVGElement("feFlood")}} の子要素が含まれています。`<feFlood>` 要素はフィルターを `seagreen` として定義しており、1 つ目の要素は `flood-opacity` 属性によって完全に不透明に、2 つ目のは完全に透明に設定されています。さらに、2 つの {{SVGElement("rect")}} 要素があり、それぞれに filter 属性を付けています。

```html
<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg">
  <filter id="flood1">
    <feFlood flood-color="seagreen" flood-opacity="1" />
  </filter>
  <filter id="flood2">
    <feFlood flood-color="seagreen" flood-opacity="0" />
  </filter>

  <rect id="r1" filter="url(#flood1)" />
  <rect id="r2" filter="url(#flood2)" />
</svg>
```

#### CSS

{{cssxref("height")}}、{{cssxref("width")}}、 {{cssxref("x")}}、および {{cssxref("y")}} を定義し、CSS を使用して矩形の位置指定を行います。また、SVG 上に {{cssxref("background-image")}} として繰り返し線形グラデーションを記載し、塗りつぶし色の不透過度をより明確に表示します。

```css
svg {
  background-image: repeating-linear-gradient(
    45deg,
    transparent 0 9px,
    #cccccc 0px 10px
  );
}
rect {
  width: 100px;
  height: 100px;
  x: 10px;
  y: 10px;
}
#r2 {
  x: 150px;
}
```

次に、CSS を使用し、`<feFlood>` 要素にそれぞれ異なる不透明度を設定します。

```css
#flood1 feFlood {
  flood-opacity: 0.5;
}
#flood2 feFlood {
  flood-opacity: 90%;
}
```

#### 結果

{{EmbedLiveSample(" Defining the flood opacity of a filter", "300", "220")}}

属性では、1 つ目の正方形を完全に不透明に、2 つ目を完全に透明に定義していましたが、これらの値は CSS の `flood-opacity` の値によって上書きされました。シーグリーンのフィルターは、それぞれ 50% と 90% の不透過度となっています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("flood-color")}}
- {{cssxref("fill")}}
- {{cssxref("stop-opacity")}}
- {{cssxref("stroke-opacity")}}
- {{cssxref("opacity")}}
- {{cssxref("box-shadow")}}
- {{cssxref("text-shadow")}}
- {{cssxref("filter-function")}}、例えば {{cssxref("filter-function/opacity", "opacity()")}}
- SVG の {{SVGAttr("flood-opacity")}} 属性
