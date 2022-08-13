---
title: grid-template-areas
slug: Web/CSS/grid-template-areas
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Grid
  - CSS Property
  - Reference
  - Referenz
translation_of: Web/CSS/grid-template-areas
---
Die **`grid-template-areas`** CSS Eigenschaft spezifiziert benannte {{glossary("grid areas")}}.

{{EmbedInteractiveExample("pages/css/grid-template-areas.html")}}

Diese areas sind nicht mit einem bestimmten grid item assoziiert, sondern können von den grid-placement Eigenschaften {{cssxref("grid-row-start")}}, {{cssxref("grid-row-end")}}, {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, und ihren Kurzformen {{cssxref("grid-row")}}, {{cssxref("grid-column")}}, und {{cssxref("grid-area")}} referenziert werden.

## Syntax

```css
/* Keyword value */
grid-template-areas: none;

/* <string> values */
grid-template-areas: "a b";
grid-template-areas: "a b b"
                     "a c d";

/* Global values */
grid-template-areas: inherit;
grid-template-areas: initial;
grid-template-areas: unset;
```

### Werte

- `none`
  - : Der grid container definiert keine benannten grid areas.
- `{{cssxref("&lt;string&gt;")}}+`
  - : Für jeden seperaten String wird eine Reihe, und für jede Zelle in dem String wird eine Spalte erstellt. Mehrere benannte Zelltokens innerhalb und zwischen den Reihen sind eine einzelne benannte grid area welche die entsprechenden grid Zellen überspannt. Wenn diese Zellen kein Quader formen ist de Deklaration ungültig.

### Formaler Syntax

{{csssyntax}}

**Beispiel**

### HTML

```html
<section id="page">
  <header>Header</header>
  <nav>Navigation</nav>
  <main>Main area</main>
  <footer>Footer</footer>
</section>
```

### CSS

```css
#page {
  display: grid;
  width: 100%;
  height: 250px;
  grid-template-areas: "head head"
                       "nav  main"
                       "nav  foot";
  grid-template-rows: 50px 1fr 30px;
  grid-template-columns: 150px 1fr;
}

#page > header {
  grid-area: head;
  background-color: #8ca0ff;
}

#page > nav {
  grid-area: nav;
  background-color: #ffa08c;
}

#page > main {
  grid-area: main;
  background-color: #ffff64;
}

#page > footer {
  grid-area: foot;
  background-color: #8cffa0;
}
```

### Ergebnis

_{{EmbedLiveSample("Example", "100%", "250px")}}_

## Spezifikationen

| Specification                                                                                                | Status                       | Comment                  |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------------ |
| {{SpecName("CSS3 Grid", "#propdef-grid-template-areas", "grid-template-areas")}} | {{Spec2("CSS3 Grid")}} | Ursprüngliche Definition |

{{cssinfo}}

## Browser kompatibilität

{{Compat("css.properties.grid-template-areas")}}

## Siehe auch

- Verwandte CSS Eigenschaften: {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template")}}
- Grid Layout Guide: _[Grid template areas](/de/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)_
- Video Tutorial: _[Grid Template Areas](http://gridbyexample.com/video/grid-template-areas/)_

1.  [**CSS**](/de/docs/Web/CSS)
2.  [**CSS Reference**](/de/docs/Web/CSS/Reference)
3.  [CSS Grid Layout](/de/docs/Web/CSS/CSS_Grid_Layout)
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

5.  **Properties**

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
    17. [grid-template-columns](/de/docs/Web/CSS/grid-template-columns)
    18. [grid-template-rows](/de/docs/Web/CSS/grid-template-rows)

6.  **Glossary**

    1.  [Grid lines](/de/docs/Glossary/Grid_lines)
    2.  [Grid tracks](/de/docs/Glossary/Grid_tracks)
    3.  [Grid cell](/de/docs/Glossary/Grid_cell)
    4.  [Grid areas](/de/docs/Glossary/Grid_areas)
    5.  [Gutters](/de/docs/Glossary/Gutters)
    6.  [Grid row](/de/docs/Glossary/Grid_rows)
    7.  [Grid column](/de/docs/Glossary/Grid_column)
