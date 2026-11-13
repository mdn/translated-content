---
title: grid-template
slug: Web/CSS/Reference/Properties/grid-template
---

CSS 的 **`grid-template`** 屬性是一個用於定義{{glossary("grid column","網格欄")}}、{{glossary("grid rows","列")}}和{{glossary("grid areas","區域")}}的[簡寫屬性](/zh-TW/docs/Web/CSS/Guides/Cascade/Shorthand_properties)。

{{InteractiveExample("CSS Demo: grid-template")}}

```css interactive-example-choice
grid-template:
  "a a a" 40px
  "b c c" 40px
  "b c c" 40px / 1fr 1fr 1fr;
```

```css interactive-example-choice
grid-template:
  "b b a" auto
  "b b c" 2ch
  "b b c" 1em / 20% 20px 1fr;
```

```css interactive-example-choice
grid-template:
  "a a ." minmax(50px, auto)
  "a a ." 80px
  "b b c" auto / 2em 3em auto;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-gap: 10px;
  width: 200px;
}

#example-element :nth-child(1) {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
  grid-area: a;
}

#example-element :nth-child(2) {
  background-color: rgba(255, 0, 200, 0.2);
  border: 3px solid rebeccapurple;
  grid-area: b;
}

#example-element :nth-child(3) {
  background-color: rgba(94, 255, 0, 0.2);
  border: 3px solid green;
  grid-area: c;
}
```

作者可以為長期屬性設置值：{{cssxref("grid-template-rows")}}、{{cssxref("grid-template-columns")}} 和 {{cssxref("grid-template-areas ")}}。

## 句法

```css
/* Keyword value */
grid-template: none;

/* grid-template-rows / grid-template-columns values */
grid-template: 100px 1fr / 50px 1fr;
grid-template: auto 1fr / auto 1fr auto;
grid-template: [linename] 100px / [columnname1] 30% [columnname2] 70%;
grid-template: fit-content(100px) / fit-content(40%);

/* grid-template-areas grid-template-rows / grid-template-column values */
grid-template:
  "a a a"
  "b b b";
grid-template:
  "a a a" 20%
  "b b b" auto;
grid-template:
  [header-top] "a a a" [header-bottom]
  [main-top] "b b b" 1fr [main-bottom]
  / auto 1fr auto;

/* Global values */
grid-template: inherit;
grid-template: initial;
grid-template: unset;
```

### 價值觀

- `none`
  - : 是將所有三個長期屬性設置為的關鍵字`none`，表示沒有顯式網格。沒有命名的網格區域。行和列將隱式生成；它們的大小將由{{cssxref("grid-auto-rows")}}和{{cssxref("grid-auto-columns")}}屬性確定。
- `<'grid-template-rows'> / <'grid-template-columns'>`
  - : 將{{cssxref("grid-template-rows")}}和{{cssxref("grid-template-columns")}}設置為指定值，並設置{{cssxref("grid-template-areas")}}至`none`。
- `[ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?`
  - : Sets {{cssxref("grid-template-areas")}} to the strings listed, {{cssxref("grid-template-rows")}} to the track sizes following each string (filling in `auto` for any missing sizes), and splicing in the named lines defined before/after each size, and {{cssxref("grid-template-columns")}} to the track listing specified after the slash (or `none`, if not specified).
    Note: The {{cssxref("repeat")}} function isn't allowed in these track listings, as the tracks are intended to visually line up one-to-one with the rows/columns in the 「ASCII art」.

**Note:** The {{cssxref("grid")}} shorthand accepts the same syntax, but also resets the implicit grid properties to their initial values. Use `grid` (as opposed to `grid-template`) to prevent these values from cascading in seperately.

### Formal syntax

{{csssyntax}}

## 範例

### CSS

```css
#page {
  display: grid;
  width: 100%;
  height: 200px;
  grid-template:
    [header-left] "head head" 30px [header-right]
    [main-left] "nav  main" 1fr [main-right]
    [footer-left] "nav  foot" 30px [footer-right]
    / 120px 1fr;
}

header {
  background-color: lime;
  grid-area: head;
}

nav {
  background-color: lightblue;
  grid-area: nav;
}

main {
  background-color: yellow;
  grid-area: main;
}

footer {
  background-color: red;
  grid-area: foot;
}
```

### HTML

```html
<section id="page">
  <header>Header</header>
  <nav>Navigation</nav>
  <main>Main area</main>
  <footer>Footer</footer>
</section>
```

### 結果

{{EmbedLiveSample("範例", "100%", "200px")}}

## 規範

{{Specifications}}

{{cssinfo}}

## 瀏覽器相容性

{{Compat}}

## 參見

- Related CSS properties: {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-areas")}}
- Grid Layout Guide: _[Line-based placement with CSS Grid](/zh-TW/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)_
- Grid Layout Guide: _[Grid template areas - Grid definition shorthands](/zh-TW/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas#Grid_definition_shorthands)_
- Video tutorial: [Grid Template shorthand](https://gridbyexample.com/video/grid-template-shorthand/)
