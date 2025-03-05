---
title: width
slug: Web/CSS/width
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

**`width`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の幅を設定します。既定では、このプロパティは[コンテンツ領域](/ja/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#コンテンツ領域)の幅を設定しますが、 {{cssxref("box-sizing")}} を `border-box` に設定すると、[境界領域](/ja/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#境界領域)の幅を設定します。

{{EmbedInteractiveExample("pages/css/width.html")}}

`width` に指定された値は、その値が {{cssxref("min-width")}} および {{cssxref("max-width")}} で定義された値内にある限り、コンテンツ領域に適用されます。

- `width` の値が `min-width` の値より小さい場合、`min-width` は `width` をオーバーライドします。
- `width` の値が `max-width` の値より大きい場合、`max-width` は `width` をオーバーライドします。

> [!NOTE]
> 幾何プロパティとして、 `width` プロパティは、{{SVGElement("svg")}}、{{SVGElement("rect")}}、{{SVGElement("image")}}、{{SVGElement("foreignObject")}} の各 SVG 要素にも適用されます。 `auto` の値は `<svg>` では `100%` に、その他の要素では `0` に解決され、パーセント値は `<rect>` の場合は SVG ビューポートの高さに対する相対値に解決します。 CSS の `width` プロパティ値は、 SVG 要素に設定された {{SVGAttr("width")}} 属性の値を上書きします。

## 構文

```css
/* <length> 値 */
width: 300px;
width: 25em;
width: anchor-size(--myAnchor inline, 120%);
width: minmax(100px, anchor-size(width));

/* <percentage> 値 */
width: 75%;

/* キーワード値 */
width: max-content;
width: min-content;
width: fit-content;
width: fit-content(20em);
width: auto;
width: stretch;

/* グローバル値 */
width: inherit;
width: initial;
width: revert;
width: revert-layer;
width: unset;
```

### 値

- {{cssxref("&lt;length&gt;")}}
  - : 距離の値で幅を定義します。
- {{cssxref("&lt;percentage&gt;")}}
  - : 親となる[包含ブロック](/ja/docs/Web/CSS/Containing_block)の幅に対するパーセント値で定義します。
- `auto`
  - : 指定された要素の幅をブラウザーが計算して決めます。
- `max-content`
  - : 本来の望ましい幅です。
- `min-content`
  - : 本来の最小の幅です。
- `fit-content`
  - : 利用できる空間を使用しますが、 [max-content](/ja/docs/Web/CSS/max-content) を超えないようにします。すなわち、 `min(max-content, max(min-content, stretch))` です。
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : 利用可能な空間に対して fit-content 式を使用し、指定された引数に置き換えられます。すなわち `min(max-content, max(min-content, <length-percentage>))` です。
- `stretch`

  - : 要素の[マージンボックス](/ja/docs/Learn/CSS/Building_blocks/The_box_model#ボックスの構成)の幅を、[包含ブロック](/ja/docs/Web/CSS/Containing_block#包含ブロックの識別)の幅に設定します。マージンボックスが包含ブロック内で利用できる空間をすべて満たそうとするため、 `100%` と似たような動作をしますが、結果として得られるサイズは [box-sizing](/ja/docs/Web/CSS/box-sizing) で決定されるボックスではなく、マージンボックスに適用されます。

    > [!NOTE]
    > ブラウザーが `stretch` 値のために使用する別名と実装状況については、[ブラウザーの互換性](#ブラウザーの互換性)の節を参照してください。

## アクセシビリティ

ページを拡大してテキストサイズを大きくしたときに、 `width` を設定した要素が切り捨てられたり、他のコンテンツが見えなくなったりしないようにしてください。

- [MDN WCAG の理解、 ガイドライン 1.4 の説明](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 既定の幅

```css
p.goldie {
  background: gold;
}
```

```html
<p class="goldie">The MDN community writes really great documentation.</p>
```

{{EmbedLiveSample('Default_width', '500px', '64px')}}

### ピクセル数と em 単位

```css
.px_length {
  width: 200px;
  background-color: red;
  color: white;
  border: 1px solid black;
}

.em_length {
  width: 20em;
  background-color: white;
  color: red;
  border: 1px solid black;
}
```

```html
<div class="px_length">Width measured in px</div>
<div class="em_length">Width measured in em</div>
```

{{EmbedLiveSample('Example using pixels and ems', '500px', '64px')}}

### パーセント値の例

```css
.percent {
  width: 20%;
  background-color: silver;
  border: 1px solid red;
}
```

```html
<div class="percent">Width in percentage</div>
```

{{EmbedLiveSample('Example using percentage', '500px', '64px')}}

### max-content の例

```css
p.max-green {
  background: lightgreen;
  width: max-content;
}
```

```html
<p class="max-green">The MDN community writes really great documentation.</p>
```

{{EmbedLiveSample('Example using "max-content"', '500px', '64px')}}

### min-content の例

```css
p.min-blue {
  background: lightblue;
  width: min-content;
}
```

```html
<p class="min-blue">The MDN community writes really great documentation.</p>
```

{{EmbedLiveSample('Example using "min-content"', '500px', '155px')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("height")}}
- {{cssxref("box-sizing")}}
- {{cssxref("min-width")}}, {{cssxref("max-width")}}
- {{cssxref("block-size")}}, {{cssxref("inline-size")}}
- {{cssxref("anchor-size()")}}
- [CSS 基本ボックスモデル入門](/ja/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS ボックスモデル](/ja/docs/Web/CSS/CSS_box_model)モジュール
