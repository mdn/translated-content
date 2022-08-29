---
title: 网格模板列
slug: Web/CSS/grid-template-columns
---
## Summary

The `grid-template-columns` CSS property defines the line names and track sizing functions of the {{glossary("grid column", "grid columns")}}.

{{cssinfo}}

## Syntax

```css
/* Keyword value */
grid-template-columns: none;

/* <track-list> values */
grid-template-columns: 100px 1fr;
grid-template-columns: [linename] 100px;
grid-template-columns: [linename1] 100px [linename2 linename3];
grid-template-columns: minmax(100px, 1fr);
grid-template-columns: fit-content(40%);
grid-template-columns: repeat(3, 200px);

/* <auto-track-list> values */
grid-template-columns: 200px repeat(auto-fill, 100px) 300px;
grid-template-columns: minmax(100px, max-content)
                       repeat(auto-fill, 200px) 20%;
grid-template-columns: [linename1] 100px [linename2]
                       repeat(auto-fit, [linename3 linename4] 300px)
                       100px;
grid-template-columns: [linename1 linename2] 100px
                       repeat(auto-fit, [linename1] 300px) [linename3];

/* Global values */
grid-template-columns: inherit;
grid-template-columns: initial;
grid-template-columns: unset;
```

### Values

- `none`
  - : Is a keyword meaning that there is no explicit grid. Any columns will be implicitly generated and their size will be determined by the {{cssxref("grid-auto-columns")}} property.
- `<length>`
  - : Is a non-negative length.
- `<percentage>`
  - : Is a non-negative {{cssxref("percentage", "&lt;percentage&gt;")}} value relative to the inline size of the grid container. If the size of the grid container depends on the size of its tracks, then the percentage must be treated as `auto`.
    The intrinsic size contributions of the track may be adjusted to the size of the grid container and increase the final size of the track by the minimum amount that would result in honoring the percentage.
- `<flex>`
  - : Is a non-negative dimension with the unit `fr` specifying the track’s flex factor. Each `<flex>`-sized track takes a share of the remaining space in proportion to its flex factor.When appearing outside a `minmax()` notation, it implies an automatic minimum (i.e. `minmax(auto, <flex>)`).
- `max-content`
  - : Is a keyword representing the largest maximal content contribution of the grid items occupying the grid track.
- `min-content`
  - : Is a keyword representing the largest minimal content contribution of the grid items occupying the grid track.
- `{{cssxref("minmax", "minmax(min, max)")}}`
  - : Is a functional notation that defines a size range greater than or equal to _min_ and less than or equal to _max_. If _max_ is smaller than _min_, then _max_ is ignored and the function is treated as _min_. As a maximum, a `<flex>` value sets the track’s flex factor. It is invalid as a minimum.
- `auto`
  - : Is a keyword that is identical to maximal content if it's a maximum. As a minimum it represents the largest minimum size (as specified by {{cssxref("min-width")}}/{{cssxref("min-height")}}) of the grid items occupying the grid track.Note: `auto` track sizes (and only `auto` track sizes) can be stretched by the {{cssxref("align-content")}} and {{cssxref("justify-content")}} properties.
- `{{cssxref("fit-content", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}`
  - : Represents the formula `min(max-content, max(auto, argument))`, which is calculated similar to `auto` (i.e. `minmax(auto, max-content)`), except that the track size is clamped at _argument_ if it is greater than the `auto` minimum.
- {{cssxref("repeat", "repeat( [ &lt;positive-integer&gt; | auto-fill | auto-fit ] , &lt;track-list&gt; )")}}
  - : Represents a repeated fragment of the track list, allowing a large number of columns that exhibit a recurring pattern to be written in a more compact form.

### Formal syntax

{{csssyntax}}

## Examples

### CSS

```css
#grid {
  display: grid;
  width: 100%;
  grid-template-columns: 50px 1fr;
}

#areaA {
  background-color: lime;
}

#areaB {
  background-color: yellow;
}
```

### HTML

```html
<div id="grid">
  <div id="areaA">A</div>
  <div id="areaB">B</div>
</div>
```

### Result

{{EmbedLiveSample("Examples", "100%", "20px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat("css.properties.grid-template-columns")}}

## See also

- Related CSS properties: {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-areas")}}, {{cssxref("grid-template")}}
- Grid Layout Guide: _[Basic concepts of grid layout - Grid Tracks](/zh-TW/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#Grid_Tracks)_
- Video tutorial: _[Defining a Grid](http://gridbyexample.com/video/series-define-a-grid/)_

<section id="Quick_links"><ol><li><a href="/en-US/docs/Web/CSS"><strong>CSS</strong></a></li><li><a href="/en-US/docs/Web/CSS/Reference"><strong>CSS Reference</strong></a></li><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout">CSS Grid Layout</a></li><li data-default-state="open"><a href="#"><strong>Guides</strong></a><ol><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout">Basics concepts of grid layout</a></li><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout">Relationship to other layout methods</a></li><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid">Line-based placement</a></li><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas">Grid template areas</a></li><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines">Layout using named grid lines</a></li><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout">Auto-placement in grid layout</a></li><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout">Box alignment in grid layout</a></li><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes">Grids, logical values and writing modes</a></li><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility">CSS Grid Layout and Accessibility</a></li><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement">CSS Grid Layout and Progressive Enhancement</a></li><li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout">Realizing common layouts using grids</a></li></ol></li><li data-default-state="open"><a href="#"><strong>Properties</strong></a><ol><li><a href="/en-US/docs/Web/CSS/grid">grid</a></li><li><a href="/en-US/docs/Web/CSS/grid-area">grid-area</a></li><li><a href="/en-US/docs/Web/CSS/grid-auto-columns">grid-auto-columns</a></li><li><a href="/en-US/docs/Web/CSS/grid-auto-flow">grid-auto-flow</a></li><li><a href="/en-US/docs/Web/CSS/grid-auto-rows">grid-auto-rows</a></li><li><a href="/en-US/docs/Web/CSS/grid-column">grid-column</a></li><li><a href="/en-US/docs/Web/CSS/grid-column-end">grid-column-end</a></li><li><a href="/en-US/docs/Web/CSS/grid-column-gap">grid-column-gap</a></li><li><a href="/en-US/docs/Web/CSS/grid-column-start">grid-column-start</a></li><li><a href="/en-US/docs/Web/CSS/grid-gap">grid-gap</a></li><li><a href="/en-US/docs/Web/CSS/grid-row">grid-row</a></li><li><a href="/en-US/docs/Web/CSS/grid-row-end">grid-row-end</a></li><li><a href="/en-US/docs/Web/CSS/grid-row-gap">grid-row-gap</a></li><li><a href="/en-US/docs/Web/CSS/grid-row-start">grid-row-start</a></li><li><a href="/en-US/docs/Web/CSS/grid-template">grid-template</a></li><li><a href="/en-US/docs/Web/CSS/grid-template-areas">grid-template-areas</a></li><li><a href="/en-US/docs/Web/CSS/grid-template-columns">grid-template-columns</a></li><li><a href="/en-US/docs/Web/CSS/grid-template-rows">grid-template-rows</a></li></ol></li><li data-default-state="open"><a href="#"><strong>Glossary</strong></a><ol><li><a href="/en-US/docs/Glossary/Grid_lines">Grid lines</a></li><li><a href="/en-US/docs/Glossary/Grid_tracks">Grid tracks</a></li><li><a href="/en-US/docs/Glossary/Grid_cell">Grid cell</a></li><li><a href="/en-US/docs/Glossary/Grid_areas">Grid areas</a></li><li><a href="/en-US/docs/Glossary/Gutters">Gutters</a></li><li><a href="/en-US/docs/Glossary/Grid_rows">Grid row</a></li><li><a href="/en-US/docs/Glossary/Grid_column">Grid column</a></li></ol></li></ol></section>
