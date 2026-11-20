---
title: "`stop-color` プロパティ"
short-title: stop-color
slug: Web/CSS/Reference/Properties/stop-color
l10n:
  sourceCommit: 28f5f3b9b463fa842fa686ccc73c9e1d9b06282b
---

**`stop-color`** は [CSS](/ja/docs/Web/CSS) のプロパティで、グラデーション内の SVG {{SVGElement("stop")}} 要素に使用する色を定義します。このプロパティが指定されている場合、要素の {{SVGAttr("stop-color")}} 属性よりも優先されます。

> [!NOTE]
> `stop-color` プロパティは、{{SVGElement("svg")}} の中にある {{SVGElement('stop')}} 要素にのみ適用されます。他の SVG、HTML、擬似要素には適用されません。

## 構文

```css
/* <color> 値 */
stop-color: red;
stop-color: hsl(120deg 75% 25% / 60%);
stop-color: currentColor;

/* グローバル値 */
stop-color: inherit;
stop-color: initial;
stop-color: revert;
stop-color: revert-layer;
stop-color: unset;
```

### 値

- {{cssxref("color_value", "&lt;color>")}}
  - : 塗りつぶしの色。これは有効なあらゆる CSS の {{cssxref("color_value", "&lt;color>")}} 値を取ることができます。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntaxRaw(`stop-color = <color>`)}}

## 例

### SVG グラデーションの色経由点の定義

この例では、`stop-color` の基本的な用途と、CSS の `stop-color` プロパティが `stop-color` 属性よりも優先される仕組みを示しています。

#### HTML

3 つの正方形の {{SVGElement("rect")}} と 3 つの {{SVGElement("linearGradient")}} 要素を含む SVG があります。それぞれのグラデーションには 4 つの {{SVGElement("stop")}} 要素があり、黒から白、そして白からグレーへと変化するグラデーションを作成しています。これらを区別する唯一の違いは、`id` の値だけです。

```html
<svg viewBox="0 0 264 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="myGradient1">
      <stop offset="25%" stop-color="black" />
      <stop offset="40%" stop-color="white" />
      <stop offset="60%" stop-color="white" />
      <stop offset="75%" stop-color="#333333" />
    </linearGradient>
    <linearGradient id="myGradient2">
      <stop offset="25%" stop-color="black" />
      <stop offset="40%" stop-color="white" />
      <stop offset="60%" stop-color="white" />
      <stop offset="75%" stop-color="#333333" />
    </linearGradient>
    <linearGradient id="myGradient3">
      <stop offset="25%" stop-color="black" />
      <stop offset="40%" stop-color="white" />
      <stop offset="60%" stop-color="white" />
      <stop offset="75%" stop-color="#333333" />
    </linearGradient>
  </defs>
  <rect x="2" y="10" width="80" height="80" fill="url('#myGradient1')" />
  <rect x="92" y="10" width="80" height="80" fill="url('#myGradient2')" />
  <rect x="182" y="10" width="80" height="80" fill="url('#myGradient3')" />
</svg>
```

#### CSS

矩形の外枠として、{{cssxref("stroke")}} と {{cssxref("stroke-width")}} を定義しています。それぞれのグラデーションの最初と最後の色経由点の値を、`stop-color` プロパティを使用して定義し、`stop-color` 属性の値を上書きします。さまざまな CSS {{cssxref("color_value", "&lt;color>")}} の構文を示しています。

```css hidden
svg {
  border: 1px solid;
  height: calc(100vh - 20px);
  margin-bottom: 10px;
}
```

```css
rect {
  stroke: #333333;
  stroke-width: 1px;
}

#myGradient1 {
  stop:first-of-type {
    stop-color: #66ccff;
  }
  stop:last-of-type {
    stop-color: #f4aab9;
  }
}
#myGradient2 {
  stop:first-of-type {
    stop-color: yellow;
  }
  stop:last-of-type {
    stop-color: purple;
  }
}
#myGradient3 {
  stop:first-of-type {
    stop-color: hsl(0deg 90% 50%);
  }
  stop:last-of-type {
    stop-color: hsl(20deg 60% 50%);
  }
}
```

#### 結果

{{EmbedLiveSample("Defining the color stops of SVG gradients", "300", "200")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- SVG {{SVGAttr("stop-color")}} 属性
- プレゼンテーションプロパティ: `stop-color`, {{cssxref("clip-rule")}}, {{cssxref("color-interpolation-filters")}}, {{cssxref("fill-opacity")}}, {{cssxref("fill-rule")}}, {{cssxref("fill")}}, {{cssxref("marker-end")}}, {{cssxref("marker-mid")}}, {{cssxref("marker-start")}}, {{cssxref("shape-rendering")}}, {{cssxref("stop-opacity")}}, {{cssxref("stroke")}}, {{cssxref("stroke-dasharray")}}, {{cssxref("stroke-dashoffset")}}, {{cssxref("stroke-linecap")}}, {{cssxref("stroke-linejoin")}}, {{cssxref("stroke-miterlimit")}}, {{cssxref("stroke-opacity")}}, {{cssxref("stroke-width")}}, {{cssxref("text-anchor")}}, {{cssxref("vector-effect")}}
- {{cssxref("opacity")}}
- {{cssxref("background-color")}}
- {{cssxref("color_value", "&lt;color>")}}
- {{cssxref("basic-shape")}} データ型
