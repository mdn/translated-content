---
title: width
slug: Web/CSS/Reference/Properties/width
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**`width`** は [CSS](/ja/docs/Web/CSS) のプロパティで、要素の幅を設定します。既定では、このプロパティは[コンテンツ領域](/ja/docs/Web/CSS/Guides/Box_model/Introduction#コンテンツ領域)の幅を設定しますが、 {{cssxref("box-sizing")}} を `border-box` に設定すると、[境界領域](/ja/docs/Web/CSS/Guides/Box_model/Introduction#境界領域)の幅を設定します。

{{InteractiveExample("CSS デモ: width")}}

```css interactive-example-choice
width: 150px;
```

```css interactive-example-choice
width: 20em;
```

```css interactive-example-choice
width: 75%;
```

```css interactive-example-choice
width: auto;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    これは幅が変更できるボックスです。
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  height: 80%;
  justify-content: center;
  color: white;
}
```

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
width: anchor-size(width);
width: anchor-size(--my-anchor inline, 120%);

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
  - : 親となる[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block)の幅に対するパーセント値で定義します。
- `auto`
  - : 指定された要素の幅をブラウザーが計算して決めます。
- {{cssxref("max-content")}}
  - : 本来の望ましい幅です。
- {{cssxref("min-content")}}
  - : 本来の最小の幅です。
- {{cssxref("fit-content")}}
  - : 利用できる空間を使用しますが、 [max-content](/ja/docs/Web/CSS/Reference/Values/max-content) を超えないようにします。すなわち、 `min(max-content, max(min-content, stretch))` です。
- [`fit-content(<length-percentage>)`](/ja/docs/Web/CSS/Reference/Values/fit-content_function)
  - : 利用可能な空間に対して fit-content 式を使用し、指定された引数に置き換えられます。すなわち `min(max-content, max(min-content, <length-percentage>))` です。
- `stretch`
  - : 要素の[マージンボックス](/ja/docs/Learn_web_development/Core/Styling_basics/Box_model#ボックスの構成)の幅を、[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block#包含ブロックの識別)の幅に設定します。マージンボックスが包含ブロック内で利用できる空間をすべて満たそうとするため、 `100%` と似たような動作をしますが、結果として得られるサイズは [box-sizing](/ja/docs/Web/CSS/Reference/Properties/box-sizing) で決定されるボックスではなく、マージンボックスに適用されます。

## アクセシビリティ

ページを拡大してテキストサイズを大きくしたときに、 `width` を設定した要素が切り捨てられたり、他のコンテンツが見えなくなったりしないようにしてください。

- [MDN WCAG の理解、 ガイドライン 1.4 の説明](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 既定の幅

```css
p.gold {
  background: gold;
}
```

```html-nolint
<p class="gold">MDN コミュニティは非常に優れたドキュメントを作成しています。</p>
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
<div class="px_length">px で測定された幅</div>
<div class="em_length">em で測定された幅</div>
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
<div class="percent">パーセント値の幅</div>
```

{{EmbedLiveSample('Example using percentage', '500px', '64px')}}

### max-content の例

```css
p.max-green {
  background: lightgreen;
  width: max-content;
}
```

```html-nolint
<p class="max-green">MDN コミュニティは非常に優れたドキュメントを作成しています。</p>
```

{{EmbedLiveSample('Example using "max-content"', '500px', '64px')}}

### min-content の例

```css
p.min-blue {
  background: lightblue;
  width: min-content;
}
```

```html-nolint
<p class="min-blue">MDN コミュニティは非常に優れたドキュメントを作成しています。</p>
```

{{EmbedLiveSample('Example using "min-content"', '500px', '155px')}}

### Stretch width to fill the containing block

#### HTML

```html
<div class="parent">
  <div class="child">text</div>
</div>

<div class="parent">
  <div class="child stretch">stretch</div>
</div>
```

#### CSS

```css hidden
@supports not (width: stretch) {
  .parent {
    display: none !important;
  }

  body::after {
    content: "このブラウザーはまだ `stretch` 値には対応していません。";
  }
}
```

```css
.parent {
  border: solid;
  margin: 1rem;
  display: flex;
}

.child {
  background: #00999999;
  margin: 1rem;
}

.stretch {
  width: stretch;
}
```

#### 結果

{{EmbedLiveSample('Stretch width to fill the containing block', 'auto', 250)}}

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
- SVG の {{SVGAttr("width")}} 属性
- [CSS 基本ボックスモデル入門](/ja/docs/Web/CSS/Guides/Box_model/Introduction)
- [CSS ボックスモデル](/ja/docs/Web/CSS/Guides/Box_model)モジュール
