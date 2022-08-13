---
title: CSS のガイドライン
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS
tags:
  - CSS
  - Code
  - Guide
  - Guidelines
  - MDN Meta
translation_of: MDN/Guidelines/Code_guidelines/CSS
original_slug: MDN/Guidelines/Code_guidelines/CSS
---
{{MDNSidebar}}{{IncludeSubnav("/ja/docs/MDN")}}

次のガイドラインでは、MDN コードの例として CSS を記述する方法について説明します。

## 目次

- [高水準のガイドライン](#High-level_guidelines)

  - [プリプロセッサーを使用しない](#Dont_use_preprocessors)
  - [特定の CSS の方法論を使わない](#Dont_use_specific_CSS_methodologies)
  - [柔軟性のある/相対的な単位を使用する](#Use_flexiblerelative_units)
  - [リセットを使わない](#Dont_use_resets)
  - [CSS を計画する - オーバーライドを避ける](#Plan_your_CSS_%E2%80%94_avoid_overriding)

- [一般的な CSS コーディングスタイル](#General_CSS_coding_style)

  - [展開した構文を使用する](#Use_expanded_syntax)
  - [一括指定よりも個別指定を推奨](#Favor_longhand_rules_over_terse_shorthand)
  - [値の周りには二重引用符を使用する](#Use_double_quotes_around_values)
  - [関数の引数の空白](#Spacing_around_function_parameters)
  - [CSS のコメント](#CSS_comments)
  - [!important は使わない](#Dont_use_!important)

- [具体的な CSS 構文のポイント](#Specific_CSS_syntax_points)

  - [ボーダーなどのプロパティをオフにする](#Turning_off_borders_and_other_properties)
  - [「モバイルファースト」のメディアクエリを使用する](#Use_mobile_first_media_queries)

- [セレクター](#Selectors)

  - [ID セレクターを使わない](#Dont_use_ID_selectors)
  - [複数のセレクターは個別の行に配置する](#Put_multiple_selectors_on_separate_lines)

## 高水準のガイドライン

### プリプロセッサーを使用しない

MDN のサンプル コードでは、[Sass](https://sass-lang.com/),[Less](http://lesscss.org/),[Stylus,](http://stylus-lang.com/)などのプリプロセッサー構文を使用しないでください。MDN はバニラ CSS 言語を文書化しており、プリプロセッサーを使用することは、例を理解するためのハードルを上げるだけであり、読者を混乱させる可能性があります。

### 特定の CSS の方法論を使わない

前のガイドラインと同じ精神で、 [BEM](http://getbem.com/naming/) や [SMACSS](https://smacss.com/) のような特定の CSS の方法論を使って MDN のサンプルコードを書かないようにしてください。これらが有効な CSS 構文であっても、それらの方法論に精通していない人にとっては、命名規則が混乱を招く可能性があります。

### 柔軟性のある/相対的な単位を使用する

可能な限り幅広い端末で最大限の柔軟性を実現するために、コンテナーやパディングなどの寸法は、em や rem のような相対的な単位を使用し、ビューポートの幅に応じて変化させたい場合はパーセント値やビューポートの単位を使用することをお勧めします。これについては、[レスポンシブデザインのビルディングブロック](/ja/docs/Web/Apps/app_layout/responsive_design_building_blocks#Fluid_grids)の記事をご覧ください。

### リセットを使わない

For maximum control over CSS across platforms, a lot of people used to use CSS resets to remove every style, before then building things back up themselves. This certainly has its merits, but especially in the modern world CSS resets can be overkill, resulting in lots of extra time spent reimplementing things that weren't completely broken in the first place, like default margins, list styles, etc.

If you really feel like you need to use a reset, consider using [normalize.css by Nicolas Gallagher](http://necolas.github.io/normalize.css/), which aims to just make things more consistent across browsers, get rid of some default annoyances that we always remove (the margins on `<body>`, for example) and fix a few bugs.

### CSS を計画する — オーバーライドを避ける

Before diving in and writing huge chunks of CSS, plan your styles carefully. What general styles are going to be needed, what different layouts do you need to create, what specific overrides need to be created, and are they reusable? Above all, you need to try to avoid too much overriding. If you keep finding yourself writing styles and then cancelling them again a few rulesets down, you probably need to rethink your strategy.

## 一般的な CSS のコーディングスタイル

### 展開した構文を使用する

There are a variety of CSS writing styles you can use, but we prefer the expanded style, with the selector/opening brace, close brace, and each declaration on a separate line. This maximizes readability, and again, promotes consistency on MDN.

Use this:

```css example-good
p {
  color: white;
  background-color: black;
  padding: 1rem;
}
```

Not this:

```css example-bad
p { color: white; background-color: black; padding: 1rem; }
```

In addition, keep these specifics in mind:

- Include a space between the selector(s) and the opening curly brace.
- Always include a semi-colon at the end of the last declaration, even though it isn't strictly necessary.
- Put the closing curly brace on a new line.
- In each declaration, put a space after the separating colon, but not before.
- Use 2 spaces for code indentation.

### 一括指定よりも個別指定を推奨

Usually when teaching the specifics of CSS syntax, it is clearer and more obvious to use longhand properties, rather than terse shorthand (unless of course teaching the shorthand is the point of the example). Remember that the point of MDN examples is to teach people, not to be clever or efficient.

To start with, it is often harder to understand what the shorthand is doing. It takes a while to pick apart exactly what {{cssxref("font")}} syntax is doing, for example:

```css
font: small-caps bold 2rem/1.5 sans-serif;
```

Whereas this is more immediate in terms of understanding:

```css
font-variant: small-caps;
font-weight: bold;
font-size: 2rem;
line-height: 1.5;
font-family: sans-serif;
```

Second, CSS shorthand comes with potential added pitfalls — default values are set for parts of the syntax that you don't explicitly set, which can produce unexpected resets of values you've set earlier in the cascade, or other expected effects. The {{cssxref("grid")}} property for example sets all of the following default values for items that are not specified:

- {{cssxref("grid-template-rows")}}: `none`
- {{cssxref("grid-template-columns")}}: `none`
- {{cssxref("grid-template-areas")}}: `none`
- {{cssxref("grid-auto-rows")}}: `auto`
- {{cssxref("grid-auto-columns")}}: `auto`
- {{cssxref("grid-auto-flow")}}: `row`
- {{cssxref("grid-column-gap")}}: `0`
- {{cssxref("grid-row-gap")}}: `0`
- {{cssxref("column-gap")}}: `normal`
- {{cssxref("row-gap")}}: `normal`

In addition, some shorthands only work as expected if you include the different value components in a certain order. In CSS animations for example:

```css
/* duration | timing-function | delay | iteration-count
   direction | fill-mode | play-state | name */
animation: 3s ease-in 1s 2 reverse both paused slidein;
```

As an example, the first value that can be parsed as a {{cssxref("time", "&lt;time&gt;")}} is assigned to the {{cssxref("animation-duration")}}, and the second one is assigned to {{cssxref("animation-delay")}}. For more details, read the full [animation syntax](/ja/docs/Web/CSS/animation#Syntax) details.

### 値の周りには二重引用符を使用する

Where quotes can or should be included, use them, and use double quotes. For example:

```css example-good
[data-vegetable="liquid"] {
  background-color: goldenrod;
  background-image: url("../../media/examples/lizard.png");
}
```

### 関数の引数の空白

Function parameters should have spaces after their separating commas, but not before:

```css example-good
color: rgb(255, 0, 0);
background-image: linear-gradient(to bottom, red, black);
```

### CSS のコメント

Use CSS-style comments to comment code that isn't self-documenting:

```css example-good
/* This is a CSS-style comment */
```

Put your comments on separate lines preceeding the code they are referring to:

```css example-good
h3 {
  /* Creates a red drop shadow, offset 1px right and down, w/2px blur radius */
  text-shadow: 1px 1px 2px red;
  /* Sets the font-size to double the default document font size */
  font-size: 2rem;
}
```

Also note that you should leave a space between the asterisks and the comment, in each case.

### !important は使わない

!important is a last resort generally only used when you need to override something and there is no other way. It is a bad practice and you should avoid it wherever possible.

Bad:

```css example-bad
.bad-code {
  font-size: 4rem !important;
}
```

## 具体的な CSS 構文のポイント

### border などのプロパティをオフにする

When turning off borders (and any other properties that can take `0` or `none` as values), use `0` rather than `none`:

```css example-good
border: 0;
```

### 「モバイルファースト」のメディアクエリを使用する

When including different sets of styles for different target viewport sizes using media queries inside the same stylesheet, it is a good idea to make the default styling before any media queries have been applied to the document the narrow screen/mobile styling, and then override this for wider viewports inside successive media queries.

```css example-good
/*Default CSS layout for narrow screens*/

@media (min-width: 480px) {
  /*CSS for medium width screens*/
}

@media (min-width: 800px) {
  /*CSS for wide screens*/
}

@media (min-width: 1100px) {
  /*CSS for really wide screens*/
}
```

This has many advantages, outlined in our [Mobile First](/ja/docs/Web/Apps/Progressive/Responsive/Mobile_first) article.

## セレクター

### ID セレクターを使わない

There is really no need to use ID selectors — they are less flexible (you can't add more if you discover you need more than one), and are harder to override if needed, being of a higher specificity than classes.

Good:

```css example-good
.editorial-summary {
  ...
}
```

Bad:

```css example-bad
#editorial-summary {
  ...
}
```

### 複数のセレクターは個別の行に配置する

When a rule has multiple selectors, put each selector on a new line. This makes the selector list easier to read, and can help to make code lines shorter.

Do this:

```css example-good
h1,
h2,
h3 {
  font-family: sans-serif;
  text-align: center;
}
```

Not this:

```css example-bad
h1, h2, h3 {
  font-family: sans-serif;
  text-align: center;
}
```

## MDN の良い CSS の例

CSS プロパティのリファレンスページの冒頭には、簡潔で意味のある良い CSS スニペットが掲載されています。 [CSS のキーワード索引](/ja/docs/Web/CSS/Reference#Keyword_index)から探して参照してみてください。そこにあるインタラクティブな例は、一般的に上記のガイドラインに沿って書かれていますが、ガイドラインが新しく書かれる前に書かれたものがほとんどなので、場所によってはそうではない場合があることに注意してください。
