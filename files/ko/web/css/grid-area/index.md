---
title: grid-area
slug: Web/CSS/grid-area
---

**`grid-area`** 속성은 {{cssxref("grid-row-start")}}, {{cssxref("grid-column-start")}}, {{cssxref("grid-row-end")}} and {{cssxref("grid-column-end")}} 값을 한번에 설정하는 [shorthand](/ko/docs/Web/CSS/Shorthand_properties) property 입니다. 해당 속성값은 grid item의 크기와 위치를 결정합니다., specifying a grid item’s size and location within the {{glossary("grid rows", "grid row")}} by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its {{glossary("grid areas", "grid area")}}.

{{EmbedInteractiveExample("pages/css/grid-area.html")}}

If four `<grid-line>` values are specified, `grid-row-start` is set to the first value, `grid-column-start` is set to the second value, `grid-row-end` is set to the third value, and `grid-column-end` is set to the fourth value.

When `grid-column-end` is omitted, if `grid-column-start` is a {{cssxref("&lt;custom-ident&gt;")}}, `grid-column-end` is set to that `<custom-ident>`; otherwise, it is set to `auto`.

When `grid-row-end` is omitted, if `grid-row-start` is a `<custom-ident>`, `grid-row-end` is set to that `<custom-ident>`; otherwise, it is set to `auto`.

When `grid-column-start` is omitted, if `grid-row-start` is a `<custom-ident>`, all four longhands are set to that value. Otherwise, it is set to `auto`.

The grid-area property can also be set to a {{cssxref("&lt;custom-ident&gt;")}} which acts as a name for the area, which can then be placed using {{cssxref("grid-template-areas")}}.

## Syntax

```css
/* Keyword values */
grid-area: auto;
grid-area: auto / auto;
grid-area: auto / auto / auto;
grid-area: auto / auto / auto / auto;

/* <custom-ident> values */
grid-area: some-grid-area;
grid-area: some-grid-area / another-grid-area;

/* <integer> && <custom-ident>? values */
grid-area: some-grid-area 4;
grid-area: some-grid-area 4 / 2 another-grid-area;

/* span && [ <integer> || <custom-ident> ] values */
grid-area: span 3;
grid-area: span 3 / span some-grid-area;
grid-area: 2 span / another-grid-area span;

/* Global values */
grid-area: inherit;
grid-area: initial;
grid-area: unset;
```

### Values

- `auto`
  - : Is a keyword indicating that the property contributes nothing to the grid item’s placement, indicating auto-placement or a default span of `1`.
- `<custom-ident>`

  - : If there is a named line with the name '`<custom-ident>-start`'/'`<custom-ident>-end`', it contributes the first such line to the grid item’s placement.

    > **참고:** Named grid areas automatically generate implicit named lines of this form, so specifying `grid-area: foo;` will choose the start/end edge of that named grid area (unless another line named `foo-start`/`foo-end` was explicitly specified before it).

    Otherwise, this is treated as if the integer `1` had been specified along with the `<custom-ident>`.

- `<integer> && <custom-ident>?`

  - : Contributes the n-th grid line to the grid item’s placement. If a negative integer is given, it instead counts in reverse, starting from the end edge of the explicit grid.

    If a name is given as a {{cssxref("&lt;custom-ident&gt;")}}, only lines with that name are counted. If not enough lines with that name exist, all implicit grid lines are assumed to have that name for the purpose of finding this position.

    An {{cssxref("&lt;integer&gt;")}} value of `0` is invalid.

- `span && [ <integer> || <custom-ident> ]`

  - : Contributes a grid span to the grid item’s placement such that the corresponding edge of the grid item’s grid area is _n_ lines from the opposite edge.

    If a name is given as a {{cssxref("&lt;custom-ident&gt;")}}, only lines with that name are counted. If not enough lines with that name exist, all implicit grid lines on the side of the explicit grid corresponding to the search direction are assumed to have that name for the purpose of counting this span.

    If the {{cssxref("&lt;integer&gt;")}} is omitted, it defaults to `1`. Negative integers or 0 are invalid.

### Formal syntax

{{csssyntax}}

## Example

### HTML content

```html
<div id="grid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
</div>
```

### CSS content

```css
#grid {
  display: grid;
  height: 100px;
  grid-template: repeat(4, 1fr) / 50px 100px;
}

#item1 {
  background-color: lime;
  grid-area: 2 / 2 / auto / span 3;
}

#item2 {
  background-color: yellow;
}

#item3 {
  background-color: blue;
}
```

{{EmbedLiveSample("Example", "100%", "150px")}}

## 명세서

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}

## See also

- Related CSS properties: {{cssxref("grid-row")}}, {{cssxref("grid-row-start")}}, {{cssxref("grid-row-end")}}, {{cssxref("grid-column")}}, {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, {{cssxref("grid-template-areas")}}
- Grid Layout Guide: _[Grid template areas](/ko/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)_
- Video tutorial: _[Grid Template Areas](http://gridbyexample.com/video/grid-template-areas/)_

1. [**CSS**](/ko/docs/Web/CSS)
2. [**CSS Reference**](/ko/docs/Web/CSS/Reference)
3. [CSS Grid Layout](/ko/docs/Web/CSS/CSS_Grid_Layout)
4. **Guides**

    1. [Basics concepts of grid layout](/ko/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
    2. [Relationship to other layout methods](/ko/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
    3. [Line-based placement](/ko/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
    4. [Grid template areas](/ko/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
    5. [Layout using named grid lines](/ko/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
    6. [Auto-placement in grid layout](/ko/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
    7. [Box alignment in grid layout](/ko/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
    8. [Grids, logical values and writing modes](/ko/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)
    9. [CSS Grid Layout and Accessibility](/ko/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
    10. [CSS Grid Layout and Progressive Enhancement](/ko/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
    11. [Realizing common layouts using grids](/ko/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout)

5. **Properties**

    1. [grid](/ko/docs/Web/CSS/grid)
    2. [grid-area](/ko/docs/Web/CSS/grid-area)
    3. [grid-auto-columns](/ko/docs/Web/CSS/grid-auto-columns)
    4. [grid-auto-flow](/ko/docs/Web/CSS/grid-auto-flow)
    5. [grid-auto-rows](/ko/docs/Web/CSS/grid-auto-rows)
    6. [grid-column](/ko/docs/Web/CSS/grid-column)
    7. [grid-column-end](/ko/docs/Web/CSS/grid-column-end)
    8. [grid-column-gap](/ko/docs/Web/CSS/grid-column-gap)
    9. [grid-column-start](/ko/docs/Web/CSS/grid-column-start)
    10. [grid-gap](/ko/docs/Web/CSS/grid-gap)
    11. [grid-row](/ko/docs/Web/CSS/grid-row)
    12. [grid-row-end](/ko/docs/Web/CSS/grid-row-end)
    13. [grid-row-gap](/ko/docs/Web/CSS/grid-row-gap)
    14. [grid-row-start](/ko/docs/Web/CSS/grid-row-start)
    15. [grid-template](/ko/docs/Web/CSS/grid-template)
    16. [grid-template-areas](/ko/docs/Web/CSS/grid-template-areas)
    17. [grid-template-columns](/ko/docs/Web/CSS/grid-template-columns)
    18. [grid-template-rows](/ko/docs/Web/CSS/grid-template-rows)

6. **Glossary**

    1. [Grid lines](/ko/docs/Glossary/Grid_lines)
    2. [Grid tracks](/ko/docs/Glossary/Grid_tracks)
    3. [Grid cell](/ko/docs/Glossary/Grid_cell)
    4. [Grid areas](/ko/docs/Glossary/Grid_areas)
    5. [Gutters](/ko/docs/Glossary/Gutters)
    6. [Grid row](/ko/docs/Glossary/Grid_rows)
    7. [Grid column](/ko/docs/Glossary/Grid_column)
