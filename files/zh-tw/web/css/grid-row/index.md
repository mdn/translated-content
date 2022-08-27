---
title: grid-row
slug: Web/CSS/grid-row
---
## Summary

The `grid-row` CSS property is a [shorthand](/zh-TW/docs/Web/CSS/Shorthand_properties) property for {{cssxref("grid-row-start")}} and {{cssxref("grid-row-end")}} specifying a grid item’s size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its {{glossary("grid areas", "grid area")}}.

If two \<grid-line> values are specified, the `grid-row-start` longhand is set to the value before the slash, and the `grid-row-end` longhand is set to the value after the slash.

{{cssinfo}}

## Syntax

```css
/* Keyword values */
grid-row: auto;
grid-row: auto / auto;

/* <custom-ident> values */
grid-row: somegridarea;
grid-row: somegridarea / someothergridarea;

/* <integer> + <custom-ident> values */
grid-row: somegridarea 4;
grid-row: 4 somegridarea / 6;

/* span + <integer> + <custom-ident> values */
grid-row: span 3;
grid-row: span somegridarea;
grid-row: 5 somegridarea span;
grid-row: span 3 / 6;
grid-row: span somegridarea / span someothergridarea;
grid-row: 5 somegridarea span / 2 span;

/* Global values */
grid-row: inherit;
grid-row: initial;
grid-row: unset;
```

### Values

- `auto`
  - : Is a keyword indicating that the property contributes nothing to the grid item’s placement, indicating auto-placement, an automatic span, or a default span of `1`.
- `<custom-ident>`
  - : If there is a named line with the name '\<custom-ident>-start'/'\<custom-ident>-end', it contributes the first such line to the grid item’s placement.**Note:** Named grid areas automatically generate implicit named lines of this form, so specifying `grid-row: foo;` will choose the start/end edge of that named grid area (unless another line named `foo-start`/`foo-end` was explicitly specified before it).Otherwise, this is treated as if the integer `1` had been specified along with the `<custom-ident>`.
- `<integer> && <custom-ident>?`
  - : Contributes the nth grid line to the grid item’s placement. If a negative integer is given, it instead counts in reverse, starting from the end edge of the explicit grid.If a name is given as a \<custom-ident>, only lines with that name are counted. If not enough lines with that name exist, all implicit grid lines are assumed to have that name for the purpose of finding this position.An {{cssxref("integer")}} value of `0` is invalid.
- `span && [ <integer> || <custom-ident> ]`
  - : Contributes a grid span to the grid item’s placement such that the corresponding edge of the grid item’s grid area is n lines from the opposite edge.If a name is given as a \<custom-ident>, only lines with that name are counted. If not enough lines with that name exist, all implicit grid lines on the side of the explicit grid corresponding to the search direction are assumed to have that name for the purpose of counting this span.If the \<integer> is omitted, it defaults to `1`. Negative integers or 0 are invalid.

### Formal syntax

{{csssyntax}}

## Example

### HTML Content

```html
<div id="grid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
</div>
```

### CSS Content

```css
#grid {
  display: grid;
  height: 200px;
  grid-template-columns: 200px;
  grid-template-rows: repeat(6, 1fr);
}

#item1 {
  background-color: lime;
}

#item2 {
  background-color: yellow;
  grid-row: 2 / 4;
}

#item3 {
  background-color: blue;
  grid-row: span 2 / 7;
}
```

{{EmbedLiveSample("Example", "200px", "200px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat("css.properties.grid-row")}}

## See also

- Related CSS properties: {{cssxref("grid-row-start")}}, {{cssxref("grid-row-end")}}, {{cssxref("grid-column")}}, {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}
- Grid Layout Guide: _[Line-based placement with CSS Grid](/zh-TW/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)_
- Video tutorial: _[Line-based placement](http://gridbyexample.com/video/series-line-based-placement/)_

<section id="Quick_links"><ol><li><a href="/en-US/docs/Web/CSS"><strong>CSS</strong></a></li><li><a href="/en-US/docs/Web/CSS/Reference"><strong>CSS Reference</strong></a></li><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout">CSS Grid Layout</a></li><li data-default-state="open"><a href="#"><strong>Guides</strong></a><ol><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout">Basics concepts of grid layout</a></li><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout">Relationship to other layout methods</a></li><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid">Line-based placement</a></li><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas">Grid template areas</a></li><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines">Layout using named grid lines</a></li><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout">Auto-placement in grid layout</a></li><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout">Box alignment in grid layout</a></li><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes">Grids, logical values and writing modes</a></li><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility">CSS Grid Layout and Accessibility</a></li><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement">CSS Grid Layout and Progressive Enhancement</a></li><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout">Realizing common layouts using grids</a></li></ol></li><li data-default-state="open"><a href="#"><strong>Properties</strong></a><ol><li><a href="/en-US/docs/Web/CSS/grid">grid</a></li><li><a href="/en-US/docs/Web/CSS/grid-area">grid-area</a></li><li><a href="/en-US/docs/Web/CSS/grid-auto-columns">grid-auto-columns</a></li><li><a href="/en-US/docs/Web/CSS/grid-auto-flow">grid-auto-flow</a></li><li><a href="/en-US/docs/Web/CSS/grid-auto-rows">grid-auto-rows</a></li><li><a href="/en-US/docs/Web/CSS/grid-column">grid-column</a></li><li><a href="/en-US/docs/Web/CSS/grid-column-end">grid-column-end</a></li><li><a href="/en-US/docs/Web/CSS/grid-column-gap">grid-column-gap</a></li><li><a href="/en-US/docs/Web/CSS/grid-column-start">grid-column-start</a></li><li><a href="/en-US/docs/Web/CSS/grid-gap">grid-gap</a></li><li><a href="/en-US/docs/Web/CSS/grid-row">grid-row</a></li><li><a href="/en-US/docs/Web/CSS/grid-row-end">grid-row-end</a></li><li><a href="/en-US/docs/Web/CSS/grid-row-gap">grid-row-gap</a></li><li><a href="/en-US/docs/Web/CSS/grid-row-start">grid-row-start</a></li><li><a href="/en-US/docs/Web/CSS/grid-template">grid-template</a></li><li><a href="/en-US/docs/Web/CSS/grid-template-areas">grid-template-areas</a></li><li><a href="/en-US/docs/Web/CSS/grid-template-columns">grid-template-colunms</a></li><li><a href="/en-US/docs/Web/CSS/grid-template-rows">grid-template-rows</a></li></ol></li><li data-default-state="open"><a href="#"><strong>Glossary</strong></a><ol><li><a href="/en-US/docs/Glossary/Grid_lines">Grid lines</a></li><li><a href="/en-US/docs/Glossary/Grid_tracks">Grid tracks</a></li><li><a href="/en-US/docs/Glossary/Grid_cell">Grid cell</a></li><li><a href="/en-US/docs/Glossary/Grid_areas">Grid areas</a></li><li><a href="/en-US/docs/Glossary/Gutters">Gutters</a></li><li><a href="/en-US/docs/Glossary/Grid_rows">Grid row</a></li><li><a href="/en-US/docs/Glossary/Grid_column">Grid column</a></li></ol></li></ol></section>
