---
title: "`stop-opacity` プロパティ"
short-title: stop-opacity
slug: Web/CSS/Reference/Properties/stop-opacity
l10n:
  sourceCommit: c9f3d85f24d7839c9fe36a68d8042d088d906147
---

**`stop-opacity`** は [CSS](/ja/docs/Web/CSS) のプロパティで、SVG グラデーション内の SVG {{SVGElement("stop")}} 要素における、指定された色経由点の不透過度を定義します。このプロパティが指定されている場合、要素の {{SVGAttr("stop-opacity")}} 属性よりも優先されます。

このプロパティの値は、{{cssxref("stop-color")}} のアルファチャンネルに影響を与えます。これにより、`<stop>` の色をより透明にすることは可能ですが、`stop-color` プロパティで定義された色の透過率を高めることはできません。

> [!NOTE]
> `stop-opacity` プロパティは、{{SVGElement("svg")}} の中にある {{SVGElement('stop')}} 要素にのみ適用されます。他の SVG、HTML、擬似要素には適用されません。

## 構文

```css
/* 数値とパーセント値 */
stop-opacity: 0.2;
stop-opacity: 20%;

/* グローバル値 */
stop-opacity: inherit;
stop-opacity: initial;
stop-opacity: revert;
stop-opacity: revert-layer;
stop-opacity: unset;
```

### 値

`<opacity-value>` は、SVG グラデーションの `<stop>` 要素の不透過度を表す {{cssxref("number")}} または {{cssxref("percentage")}} です。

- {{cssxref("number")}}
  - : `0` 以上 `1` 以下の数値です。

- {{cssxref("percentage")}}
  - : `0%` 以上 `100%` 以下のパーセント値です。

`0` または `0%` を設定すると、色経由点は完全に透明になります。`1` または `100%` を設定すると、要素は `stop-color` の値に応じた不透過度になり、部分的に不透過になる場合もあれば、そうでない場合もあります。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntaxRaw(`stop-opacity = <number> | <percentage>`)}}

## 例

### SVG グラデーションの色経由点の不透過度の定義

この例では、`stop-opacity` の基本的な用途と、CSS の `stop-opacity` プロパティが `stop-opacity` 属性よりも優先される仕組みを示しています。

#### HTML

いくつか {{SVGElement("polygon")}} による星と、3 つの {{SVGElement("linearGradient")}} 要素を含む SVG があります。それぞれには、青から白、そしてピンクへと変化するグラデーションを生成する 3 つの色経由点を定義する、3 つの {{SVGElement("stop")}} 要素が含まれています。これら 3 つの要素の唯一の違いは、`id` の値です。

```html
<svg viewBox="0 0 250 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="myGradient1">
      <stop offset="5%" stop-color="#66ccff" stop-opacity="1" />
      <stop offset="50%" stop-color="#fefefe" stop-opacity="1" />
      <stop offset="95%" stop-color="#f4aab9" stop-opacity="1" />
    </linearGradient>
    <linearGradient id="myGradient2">
      <stop offset="5%" stop-color="#66ccff" stop-opacity="1" />
      <stop offset="50%" stop-color="#fefefe" stop-opacity="1" />
      <stop offset="95%" stop-color="#f4aab9" stop-opacity="1" />
    </linearGradient>
    <linearGradient id="myGradient3">
      <stop offset="5%" stop-color="#66ccff" stop-opacity="1" />
      <stop offset="50%" stop-color="#fefefe" stop-opacity="1" />
      <stop offset="95%" stop-color="#f4aab9" stop-opacity="1" />
    </linearGradient>
  </defs>
  <polygon points="40,10 10,100 80,40 0,40 70,100" />
  <polygon points="125,10 95,100 165,40 85,40 155,100" />
  <polygon points="210,10 180,100 250,40 170,40 240,100" />
</svg>
```

#### CSS

{{cssxref("stroke")}} および {{cssxref("stroke-width")}} を指定して、多角形のパス線を表示します。

それぞれの `polygon` には、{{cssxref("fill")}} プロパティを使用してグラデーションの背景が設定されています。グラデーションの `id` は `url()` 引数です。代替色として `magenta` を設定しています。

それぞれのグラデーションの色経由点の不透過度は、`stop-opacity` プロパティを使用して定義しています。

透過率の設定をより明確にするため、SVG には縞模様の背景を設定しています。

```css hidden
svg {
  border: 1px solid;
  height: calc(100vh - 20px);
  margin-bottom: 10px;
  background: repeating-linear-gradient(
    to top left,
    white 0 9px,
    black 9px 10px
  );
}
```

```css
polygon {
  stroke: #333333;
  stroke-width: 1px;
}
polygon:nth-of-type(1) {
  fill: url("#myGradient1") magenta;
}
polygon:nth-of-type(2) {
  fill: url("#myGradient2") magenta;
}
polygon:nth-of-type(3) {
  fill: url("#myGradient3") magenta;
}

#myGradient1 stop {
  stop-opacity: 1;
}
#myGradient2 stop {
  stop-opacity: 0.8;
}
#myGradient3 stop {
  stop-opacity: 25%;
}
```

#### 結果

{{EmbedLiveSample("Defining the opacity of an SVG gradient color stop", "300", "200")}}

最初の星は完全に不透明です。2 つ目の星の塗りつぶしは、色経由点がわずかに半透明であるため不透過度が 80% になっています。これは、`stop-opacity: 0.8;` が、要素の属性値 `stop-opacity="1"` を上書きしたためです。最後の星の塗りつぶしは、不透過度が 25% の色経由点が使用されているため、ほとんど目立ちません。いずれの場合も、ストロークは同じ不透過な濃い灰色であることに注意してください。

> [!NOTE]
> 線形グラデーション内のすべての兄弟要素である `<stop>` 要素に同じ `stop-opacity` の値を指定しましたが、代わりに、色経由点完全に不透明な単一の `<linearGradient>` を使用し、それぞれの `<polygon>` の {{cssxref("fill-opacity")}} プロパティに値を設定することもできるでしょう。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- SVG {{SVGAttr("stop-opacity")}} 属性
- プレゼンテーションプロパティ: `stop-opacity`, {{cssxref("clip-rule")}}, {{cssxref("color-interpolation-filters")}}, {{cssxref("fill-opacity")}}, {{cssxref("fill-rule")}}, {{cssxref("fill")}}, {{cssxref("marker-end")}}, {{cssxref("marker-mid")}}, {{cssxref("marker-start")}}, {{cssxref("shape-rendering")}}, {{cssxref("stop-color")}}, {{cssxref("stroke")}}, {{cssxref("stroke-dasharray")}}, {{cssxref("stroke-dashoffset")}}, {{cssxref("stroke-linecap")}}, {{cssxref("stroke-linejoin")}}, {{cssxref("stroke-miterlimit")}}, {{cssxref("stroke-opacity")}}, {{cssxref("stroke-width")}}, {{cssxref("text-anchor")}}, {{cssxref("vector-effect")}}
- {{cssxref("opacity")}}
- {{cssxref("background-color")}}
- {{cssxref("color_value", "&lt;color>")}}
- {{cssxref("basic-shape")}} データ型
