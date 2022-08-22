---
title: grid-template
slug: Web/CSS/grid-template
---
的**`grid-template`**CSS 屬性是一個[速記屬性](/zh-TW/docs/Web/CSS/Shorthand_properties)，用於定義{{glossary("grid column","grid columns")}}，{{glossary("grid rows","rows")}}，和{{glossary("grid areas","area")}}。

{{EmbedInteractiveExample("pages / css / grid-template.html")}}

作者可以為長期屬性設置值：{{cssxref("grid-template-rows")}},{{cssxref("grid-template-columns")}}和{{cssxref("grid-template-areas ")}}。

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
grid-template: "a a a"
               "b b b";
grid-template: "a a a" 20%
               "b b b" auto;
grid-template: [header-top] "a a a"     [header-bottom]
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
    Note: The {{cssxref("repeat")}} function isn’t allowed in these track listings, as the tracks are intended to visually line up one-to-one with the rows/columns in the “ASCII art”.

**Note:** The {{cssxref("grid")}} shorthand accepts the same syntax, but also resets the implicit grid properties to their initial values. Use `grid` (as opposed to `grid-template`) to prevent these values from cascading in seperately.

### Formal syntax

{{csssyntax}}

## Examples

### CSS

```css
#page {
  display: grid;
  width: 100%;
  height: 200px;
  grid-template: [header-left] "head head" 30px [header-right]
                 [main-left]   "nav  main" 1fr  [main-right]
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

### Result

{{EmbedLiveSample("Examples", "100%", "200px")}}

## Specifications

{{Specifications}}

{{cssinfo}}

## Browser compatibility

{{Compat("css.properties.grid-template")}}

## See also

- Related CSS properties: {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-areas")}}
- Grid Layout Guide: _[Line-based placement with CSS Grid](/zh-TW/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)_
- Grid Layout Guide: _[Grid template areas - Grid definition shorthands](/zh-TW/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas#Grid_definition_shorthands)_
- Video tutorial:_ [Grid Template shorthand](http://gridbyexample.com/video/grid-template-shorthand/)_

<section id="Quick_links"><ol><li><a href="/en-US/docs/Web/CSS"><strong>CSS</strong></a></li><li><a href="/en-US/docs/Web/CSS/Reference"><strong>CSS Reference</strong></a></li><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout">CSS Grid Layout</a></li><li data-default-state="open"><a href="#"><strong>Guides</strong></a><ol><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout">Basics concepts of grid layout</a></li><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout">Relationship to other layout methods</a></li><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid">Line-based placement</a></li><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas">Grid template areas</a></li><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines">Layout using named grid lines</a></li><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout">Auto-placement in grid layout</a></li><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout">Box alignment in grid layout</a></li><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes">Grids, logical values and writing modes</a></li><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility">CSS Grid Layout and Accessibility</a></li><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement">CSS Grid Layout and Progressive Enhancement</a></li><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout">Realizing common layouts using grids</a></li></ol></li><li data-default-state="open"><a href="#"><strong>Properties</strong></a><ol><li><a href="/en-US/docs/Web/CSS/grid">grid</a></li><li><a href="/en-US/docs/Web/CSS/grid-area">grid-area</a></li><li><a href="/en-US/docs/Web/CSS/grid-auto-columns">網格自動列</a></li><li><a href="/en-US/docs/Web/CSS/grid-auto-flow">網格自動流</a></li><li><a href="/en-US/docs/Web/CSS/grid-auto-rows">網格自動行</a></li><li><a href="/en-US/docs/Web/CSS/grid-column">網格列</a></li><li><a href="/en-US/docs/Web/CSS/grid-column-end">網格列端</a></li><li><a href="/en-US/docs/Web/CSS/grid-column-gap">網格列間隙</a></li><li><a href="/en-US/docs/Web/CSS/grid-column-start">網格列開始</a></li><li><a href="/en-US/docs/Web/CSS/grid-gap">網格間隙</a></li><li><a href="/en-US/docs/Web/CSS/grid-row">網格行</a></li><li><a href="/en-US/docs/Web/CSS/grid-row-end">網格行尾</a></li><li><a href="/en-US/docs/Web/CSS/grid-row-gap">網格行間隙</a></li><li><a href="/en-US/docs/Web/CSS/grid-row-start">網格行開始</a></li><li><a href="/en-US/docs/Web/CSS/grid-template">網格模板</a></li><li><a href="/en-US/docs/Web/CSS/grid-template-areas">網格模板區域</a></li><li><a href="/en-US/docs/Web/CSS/grid-template-columns">網格模板列</a></li><li><a href="/en-US/docs/Web/CSS/grid-template-rows">網格模板行</a></li></ol></li><li data-default-state="open"><a href="#"><strong>詞彙表</strong></a><ol><li><a href="/en-US/docs/Glossary/Grid_lines">網格線</a></li><li><a href="/en-US/docs/Glossary/Grid_tracks">網格軌道</a></li><li><a href="/en-US/docs/Glossary/Grid_cell">網格單元</a></li><li><a href="/en-US/docs/Glossary/Grid_areas">網格區域</a></li><li><a href="/en-US/docs/Glossary/Gutters">天溝</a></li><li><a href="/en-US/docs/Glossary/Grid_rows">網格行</a></li><li><a href="/en-US/docs/Glossary/Grid_column">網格列</a></li></ol></li></ol></section>
