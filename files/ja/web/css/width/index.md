---
title: width
slug: Web/CSS/width
l10n:
  sourceCommit: 925b2bd8beeae6ce8237863637bcd28ccbb8d47f
---

{{CSSRef}}

**`width`** は CSS のプロパティで、要素の幅を設定します。既定では、このプロパティは[コンテンツ領域](/ja/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#content-area)の幅を設定しますが、 {{cssxref("box-sizing")}} を `border-box` に設定すると、[境界領域](/ja/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#border-area)の幅を設定します。

{{EmbedInteractiveExample("pages/css/width.html")}}

`width` に指定された値は、その値が {{cssxref("min-width")}} および {{cssxref("max-width")}} で定義された値内にある限り、コンテンツ領域に適用されます。

- `width` の値が `min-width` の値より小さい場合、`min-width` は `width` をオーバーライドします。
- `width` の値が `max-width` の値より大きい場合、`max-width` は `width` をオーバーライドします。

## 構文

```css
/* <length> 値 */
width: 300px;
width: 25em;

/* <percentage> 値 */
width: 75%;

/* キーワード値 */
width: max-content;
width: min-content;
width: fit-content;
width: fit-content(20em);
width: auto;

/* グローバル値 */
width: inherit;
width: initial;
width: revert;
width: revert-layer;
width: unset;
```

### 値

- {{cssxref("&lt;length&gt;")}}
  - : 絶対的な値で幅を定義します。
- {{cssxref("&lt;percentage&gt;")}}
  - : 親となる[包含ブロック](/ja/docs/Web/CSS/Containing_block)の幅に対するパーセント値で定義します。
- `auto`
  - : 指定された要素の幅をブラウザーが計算して決めます。
- `max-content`
  - : 望ましい固有の幅です。
- `min-content`
  - : 最小の固有の幅です。
- `fit-content`
  - : 利用可能なスペースを使用しますが、[max-content](/ja/docs/Web/CSS/max-content)、つまり `min(max-content, max(min-content, stretch))` を超えません。
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})` {{Experimental_Inline}}
  - : 利用可能な空間に対して fit-content 式を使用し、指定された引数に置き換えられます。すなわち `min(max-content, max(min-content, <length-percentage>))` です。

## アクセシビリティの考慮

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
<p class="goldie">The Mozilla community produces a lot of great software.</p>
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

### Percentage の例

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
p.maxgreen {
  background: lightgreen;
  width: intrinsic; /* Safari/WebKit uses a non-standard name */
  width: -moz-max-content; /* Firefox/Gecko */
  width: -webkit-max-content; /* Chrome */
  width: max-content;
}
```

```html
<p class="maxgreen">The Mozilla community produces a lot of great software.</p>
```

{{EmbedLiveSample('Example using "max-content"', '500px', '64px')}}

### min-content の例

```css
p.minblue {
  background: lightblue;
  width: -moz-min-content; /* Firefox */
  width: -webkit-min-content; /* Chrome */
  width: min-content;
}
```

```html
<p class="minblue">The Mozilla community produces a lot of great software.</p>
```

{{EmbedLiveSample('Example using "min-content"', '500px', '155px')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ボックスモデル](/ja/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- {{cssxref("height")}}
- {{cssxref("box-sizing")}}
- {{cssxref("min-width")}}, {{cssxref("max-width")}}
- 対応する論理的プロパティ: {{cssxref("block-size")}}, {{cssxref("inline-size")}}
