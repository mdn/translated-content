---
title: CSS `flood-color` プロパティ
short-title: flood-color
slug: Web/CSS/Reference/Properties/flood-color
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

**`flood-color`** は [CSS](/ja/docs/Web/CSS) のプロパティで、{{SVGElement("filter")}} 内の {{SVGElement("feFlood")}} および {{SVGElement("feDropShadow")}} 要素における、現在のフィルタープリミティブのサブ領域の色を定義します。存在する場合、この属性は要素の {{SVGAttr("flood-color")}} 属性よりも優先します。

> [!NOTE]
> `flood-color` プロパティは、{{SVGElement("svg")}} に含まれた {{SVGElement("feFlood")}} および {{SVGElement("feDropShadow")}} 要素にのみ適用されます。他の SVG 要素、HTML 要素、擬似要素には適用されません。

## 構文

```css
/* <color> 値 */
flood-color: red;
flood-color: hsl(120deg 75% 25% / 60%);
flood-color: currentColor;

/* グローバル値 */
flood-color: inherit;
flood-color: initial;
flood-color: revert;
flood-color: revert-layer;
flood-color: unset;
```

### 値

- {{cssxref("color_value", "&lt;color>")}}
  - : 塗りつぶしの色です。この色には、有効な CSS の {{cssxref("color_value", "&lt;color>")}} の値が使用可能です。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### フィルターの塗りつぶしの色を定義

この例では、`flood-color` の基本的な用途と、CSS の `flood-color` プロパティが `flood-color` 属性よりも優先される仕組みについて説明しています。

#### HTML

SVG に 2 つの{{SVGElement("filter")}} 要素があり、それぞれの要素に {{SVGElement("feFlood")}} の子要素があります。それぞれの `<feFlood>` 要素には、SVG の `flood-color` 属性が含まれており、塗りつぶし色が `seagreen` として定義されています。また、filter 属性を持つ 2 つの {{SVGElement("rect")}} 要素を含めました。ここがフィルターが表示される場所です。

```html
<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg">
  <filter id="flood1">
    <feFlood flood-color="seagreen" />
  </filter>
  <filter id="flood2">
    <feFlood flood-color="seagreen" />
  </filter>

  <rect id="r1" filter="url(#flood1)" />
  <rect id="r2" filter="url(#flood2)" />
</svg>
```

#### CSS

`<rect>` のサイズと位置は、CSS の {{cssxref("height")}}、{{cssxref("width")}}、{{cssxref("x")}}、{{cssxref("y")}} プロパティを使用して定義します。

```css
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

次に、CSS の `flood-color` プロパティを使用して、`<feFlood>` 要素にさまざまな塗りつぶし色を適用します。ここでは名前付きの色と 3 桁の 16 進数表記を使用していますが、有効な CSS の色構文を使用することができます。

```css
#flood1 feFlood {
  flood-color: rebeccapurple;
}
#flood2 feFlood {
  flood-color: #ff3366;
}
```

#### 結果

{{EmbedLiveSample("Defining the color of a filters flood", "300", "220")}}

属性では四角形の色をシーグリーンと定義していましたが、この値は CSS の `flood-color` の値によって上書きされました。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("flood-opacity")}}
- {{cssxref("color")}}
- {{cssxref("fill")}}
- {{cssxref("lighting-color")}}
- {{cssxref("stop-color")}}
- {{cssxref("stroke")}}
- {{cssxref("box-shadow")}}
- {{cssxref("text-shadow")}}
- {{cssxref("background-color")}}
- {{cssxref("color_value", "&lt;color>")}}
- {{cssxref("filter-function")}}
- SVG の {{SVGAttr("flood-color")}} 属性
