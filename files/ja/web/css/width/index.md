---
title: width
slug: Web/CSS/width
tags:
  - CSS
  - CSS プロパティ
  - レイアウト
  - リファレンス
  - 寸法
  - recipe:css-property
  - size
  - width
browser-compat: css.properties.width
translation_of: Web/CSS/width
---
{{CSSRef}}

**`width`** は CSS のプロパティで、要素の幅を設定します。既定では、このプロパティは[コンテンツ領域](/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#content-area)の幅を設定しますが、 {{cssxref("box-sizing")}} を `border-box` に設定すると、[境界領域](/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#border-area)の幅を設定します。

{{EmbedInteractiveExample("pages/css/width.html")}}

{{cssxref("min-width")}} および {{cssxref("max-width")}} プロパティは `width` を上書きします。

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
width: fit-content(20em);
width: auto;

/* グローバル値 */
width: inherit;
width: initial;
width: revert;
width: unset;
```

### 値

- {{cssxref("&lt;length&gt;")}}
  - : 絶対的な値で幅を定義します。
- {{cssxref("&lt;percentage&gt;")}}
  - : 親となる包含ブロックの幅に対するパーセント値で定義します。
- `auto`
  - : 指定された要素の幅をブラウザーが計算して決めます。
- `max-content`
  - : 望ましい固有の幅です。
- `min-content`
  - : 最小の固有の幅です。
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : 利用可能な空間に対して fit-content 式を使用し、指定された引数に置き換えられます。すなわち `min(max-content, max(min-content, <length-percentage>))` です。

## アクセシビリティの考慮

ページを拡大してテキストサイズを大きくしたときに、 `width` を設定した要素が切り捨てられたり、他のコンテンツが見えなくなったりしないようにしてください。

- [MDN WCAG の理解、 ガイドライン 1.4 の説明](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Default_width">既定の幅</h3>

```css
p.goldie {
  background: gold;
}
```

```html
<p class="goldie">The Mozilla community produces a lot of great software.</p>
```

{{EmbedLiveSample('Default_width', '500px', '64px')}}

<h3 id="Pixels_and_ems">ピクセル数と em 単位</h3>

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

{{EmbedLiveSample('Pixels_and_ems', '500px', '64px')}}

<h3 id="Percentage">パーセント値</h3>

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

{{EmbedLiveSample('Percentage', '500px', '64px')}}

### max-content

```css
p.maxgreen {
  background: lightgreen;
  width: intrinsic;           /* Safari/WebKit uses a non-standard name */
  width: -moz-max-content;    /* Firefox/Gecko */
  width: -webkit-max-content; /* Chrome */
  width: max-content;
}
```

```html
<p class="maxgreen">The Mozilla community produces a lot of great software.</p>
```

{{EmbedLiveSample('max-content', '500px', '64px')}}

### min-content

```css
p.minblue {
  background: lightblue;
  width: -moz-min-content;    /* Firefox */
  width: -webkit-min-content; /* Chrome */
  width: min-content;
}
```

```html
<p class="minblue">The Mozilla community produces a lot of great software.</p>
```

{{EmbedLiveSample('min-content', '500px', '155px')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ボックスモデル](/ja/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
- {{cssxref("height")}}
- {{cssxref("box-sizing")}}
- {{cssxref("min-width")}}, {{cssxref("max-width")}}
- 対応する論理的プロパティ: {{cssxref("block-size")}}, {{cssxref("inline-size")}}
