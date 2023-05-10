---
title: grid
slug: Web/CSS/grid
---

**`grid`** CSS 속성은 [shorthand](/ko/docs/Web/CSS/Shorthand_properties) property 입니다. 외재적인 속성인 ({{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-areas")}}), 값과 내재적인 속성인 ({{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-columns")}}, {{cssxref("grid-auto-flow")}}), 값을 한번에 설정합니다.

{{EmbedInteractiveExample("pages/css/grid.html")}}

> **참고:** You can only specify the explicit _or_ the implicit grid properties in a single `grid` declaration. The sub-properties you don’t specify are set to their initial value, as normal for shorthands. Also, the gutter properties are NOT reset by this shorthand.

## Syntax

```css
/* <'grid-template'> values */
grid: none;
grid: "a" 100px "b" 1fr;
grid: [linename1] "a" 100px [linename2];
grid: "a" 200px "b" min-content;
grid: "a" minmax(100px, max-content) "b" 20%;
grid: 100px / 200px;
grid: minmax(400px, min-content) / repeat(auto-fill, 50px);

/* <'grid-template-rows'> /
   [ auto-flow && dense? ] <'grid-auto-columns'>? values */
grid: 200px / auto-flow;
grid: 30% / auto-flow dense;
grid: repeat(3, [line1 line2 line3] 200px) / auto-flow 300px;
grid: [line1] minmax(20em, max-content) / auto-flow dense 40%;

/* [ auto-flow && dense? ] <'grid-auto-rows'>? /
   <'grid-template-columns'> values */
grid: auto-flow / 200px;
grid: auto-flow dense / 30%;
grid: auto-flow 300px / repeat(3, [line1 line2 line3] 200px);
grid: auto-flow dense 40% / [line1] minmax(20em, max-content);

/* Global values */
grid: inherit;
grid: initial;
grid: unset;
```

### Values

- `<'grid-template'>`
  - : {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-areas")}} 값을 내포하고 있는 {{cssxref("grid-template")}}의 값을 정의합니다.
- `<'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>?`

  - : {{cssxref("grid-template-rows")}} (and the {{cssxref("grid-template-columns")}} property to `none`)은 auto-flow 값을 설정합니다. {{cssxref("grid-auto-columns")}} (and setting {{cssxref("grid-auto-rows")}} to `auto`)은 auto-repeat를 설정합니다. {{cssxref("grid-auto-flow")}} 또한 마찬가지로 auto-repeat에 영향을 줍니다. 만약 이 값이 생략되었다면 그 기본값은 `dense` 입니다.

    `만약 grid` 의 sub-properties가 있다면, 해당 값으로 초기화 됩니다.

- `[ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>`

  - : {{cssxref("grid-template-columns")}} (and the {{cssxref("grid-template-rows")}} property to `none`)은 auto-flow 값을 설정합니다. {{cssxref("grid-auto-rows")}} (and setting {{cssxref("grid-auto-columns")}} to `auto`)은 열(row)에 대한 auto-repeat를 설정합니다. {{cssxref("grid-auto-flow")}} 또한 마찬가지로 auto-repeat에 영향을 줍니다. 만약 이 값이 생략되었다면 그 기본값은 `dense` 입니다.

    `만약 grid` 의 sub-properties가 있다면, 해당 값으로 초기화 됩니다.

### Formal syntax

{{csssyntax}}

## Example

### HTML Content

```html
<div id="container">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

### CSS Content

```css
#container {
  display: grid;
  grid: repeat(2, 60px) / auto-flow 80px;
}

#container > div {
  background-color: #8ca0ff;
  width: 50px;
  height: 50px;
}
```

### Result

{{EmbedLiveSample("Example", "100%", 150)}}

## 명세서

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}

## See also

- Related CSS properties: {{cssxref("grid-template")}}, {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-areas")}}, {{cssxref("grid-auto-columns")}}, {{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-flow")}}
- Grid Layout Guide: _[Line-based placement with CSS Grid](/ko/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)_
- Grid Layout Guide: _[Grid template areas - Grid definition shorthands](/ko/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas#Grid_definition_shorthands)_

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
