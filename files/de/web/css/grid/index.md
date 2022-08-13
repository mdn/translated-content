---
title: grid
slug: Web/CSS/grid
tags:
  - CSS
  - CSS-Eigenschaft
  - CSS-Raster
  - Referenz
translation_of: Web/CSS/grid
---
## Zusammenfassung

Die **`grid-`**CSS-Eigenschaft ist eine [Kurzschrift-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties), die alle der expliziten Gittereigenschaften ({{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-areas")}}) setzt, alle impliziten Gittereigenschaften ({{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-columns")}} und {{cssxref("grid-auto-flow")}}) sowie die Zwischenabstandseigenschaften ({{cssxref("grid-column-gap")}} und {{cssxref("grid-row-gap")}}) in einer einfachen Deklaration.

> **Note:** **Hinweis:** Sie können nur die expliziten _oder_ die impliziten Rastereigenschaften in einer einfachen `grid`-Deklaration spezifizieren. Die Subeigenschaften, die Sie nicht spezifizieren, werden auf ihre Initialwerte gesetzt, wie für Kurzschrift üblich. Außerdem werden die Zwischenabstandseigenschaften durch diese Kurzschrift ebenfalls zurückgesetzt, obwohl diese nicht einmal gesetzt werden können.

{{cssinfo}}

## Syntax

```css
/* Werte für <'grid-template'> */
grid: none;
grid: "a" 100px "b" 1fr;
grid: [linename1] "a" 100px [linename2];
grid: "a" 200px "b" min-content;
grid: "a" minmax(100px, max-content) "b" 20%;
grid: 100px / 200px;
grid: minmax(400px, min-content) / repeat(auto-fill, 50px);

/* Werte für <'grid-template-rows'> /
   [ auto-flow && dense? ] <'grid-auto-columns'>? */
grid: 200px / auto-flow;
grid: 30% / auto-flow dense;
grid: repeat(3, [line1 line2 line3] 200px) / auto-flow 300px;
grid: [line1] minmax(20em, max-content) / auto-flow dense 40%;

/* Werte für [ auto-flow && dense? ] <'grid-auto-rows'>? /
   <'grid-template-columns'> */
grid: auto-flow / 200px;
grid: auto-flow dense / 30%;
grid: auto-flow 300px / repeat(3, [line1 line2 line3] 200px);
grid: auto-flow dense 40% / [line1] minmax(20em, max-content);

/* Globale Werte */
grid: inherit;
grid: initial;
grid: unset;
```

### Werte

- `<'grid-template'>`
  - : Defines the {{cssxref("grid-template")}} including {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-rows")}} and {{cssxref("grid-template-areas")}}.
- `<'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>?`
  - : Sets up an auto-flow by setting the row tracks explicitly via the {{cssxref("grid-template-rows")}} property (and the {{cssxref("grid-template-columns")}} property to `none`) and specifying how to auto-repeat the column tracks via {{cssxref("grid-auto-columns")}} (and setting {{cssxref("grid-auto-rows")}} to `auto`). {{cssxref("grid-auto-flow")}} is also set to `column` accordingly, with `dense` if it’s specified.All other `grid` sub-properties are reset to their initial values.
- `[ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>`
  - : Sets up an auto-flow by setting the column tracks explicitly via the {{cssxref("grid-template-columns")}} property (and the {{cssxref("grid-template-rows")}} property to `none`) and specifying how to auto-repeat the row tracks via {{cssxref("grid-auto-rows")}} (and setting {{cssxref("grid-auto-columns")}} to `auto`). {{cssxref("grid-auto-flow")}} is also set to `row` accordingly, with `dense` if it’s specified.All other `grid` sub-properties are reset to their initial values.

### Formale Syntax

{{csssyntax}}

## Beispiel

### HTML-Inhalt

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

### CSS-Inhalt

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

### Ergebnis

{{EmbedLiveSample("Example", "100%", 150)}}

## Spezifikationen

| Specification                                                        | Status                       | Comment            |
| -------------------------------------------------------------------- | ---------------------------- | ------------------ |
| {{SpecName("CSS3 Grid", "#propdef-grid", "grid")}} | {{Spec2("CSS3 Grid")}} | Initial definition |

## Browserkompatibilität

{{Compat("css.properties.grid")}}

## Siehe auch

- Verwandte CSS-Eigenschaften: {{cssxref("grid-template")}}, {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-areas")}}, {{cssxref("grid-auto-columns")}}, {{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-flow")}}

1.  [**CSS**](/de/docs/Web/CSS)
2.  **[CSS-Referenz](/de/docs/Web/CSS/Reference)**
3.  [CSS-Gitterlayout](/de/docs/Web/CSS/CSS_Grid_Layout)
4.  **Guides**

    1.  [Basics concepts of grid layout](/de/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
    2.  [Relationship to other layout methods](/de/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
    3.  [Line-based placement](/de/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
    4.  [Grid template areas](/de/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
    5.  [Layout using named grid lines](/de/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
    6.  [Auto-placement in grid layout](/de/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
    7.  [Box alignment in grid layout](/de/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
    8.  [Grids, logical values and writing modes](/de/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)
    9.  [CSS Grid Layout and Accessibility](/de/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
    10. [CSS Grid Layout and Progressive Enhancement](/de/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
    11. [Realizing common layouts using grids](/de/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout)

5.  **Eigenschaften**

    1.  [grid](/de/docs/Web/CSS/grid)
    2.  [grid-area](/de/docs/Web/CSS/grid-area)
    3.  [grid-auto-columns](/de/docs/Web/CSS/grid-auto-columns)
    4.  [grid-auto-flow](/de/docs/Web/CSS/grid-auto-flow)
    5.  [grid-auto-rows](/de/docs/Web/CSS/grid-auto-rows)
    6.  [grid-column](/de/docs/Web/CSS/grid-column)
    7.  [grid-column-end](/de/docs/Web/CSS/grid-column-end)
    8.  [grid-column-gap](/de/docs/Web/CSS/grid-column-gap)
    9.  [grid-column-start](/de/docs/Web/CSS/grid-column-start)
    10. [grid-gap](/de/docs/Web/CSS/grid-gap)
    11. [grid-row](/de/docs/Web/CSS/grid-row)
    12. [grid-row-end](/de/docs/Web/CSS/grid-row-end)
    13. [grid-row-gap](/de/docs/Web/CSS/grid-row-gap)
    14. [grid-row-start](/de/docs/Web/CSS/grid-row-start)
    15. [grid-template](/de/docs/Web/CSS/grid-template)
    16. [grid-template-areas](/de/docs/Web/CSS/grid-template-areas)
    17. [grid-template-colunms](/de/docs/Web/CSS/grid-template-columns)
    18. [grid-template-rows](/de/docs/Web/CSS/grid-template-rows)

6.  **Glossar**

    1.  [Gitterlinien](/de/docs/Glossary/Grid_lines)
    2.  [Gittertracks](/de/docs/Glossary/Grid_tracks)
    3.  [Gitterzelle](/de/docs/Glossary/Grid_cell)
    4.  [Gitterbereiche](/de/docs/Glossary/Grid_areas)
    5.  [Zwischenabstände](/de/docs/Glossary/Gutters)
    6.  [Gitterzeile](/de/docs/Glossary/Grid_rows)
    7.  [Gitterspalte](/de/docs/Glossary/Grid_column)
