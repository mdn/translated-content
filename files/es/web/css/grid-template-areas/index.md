---
title: grid-template-areas
slug: Web/CSS/grid-template-areas
translation_of: Web/CSS/grid-template-areas
---
`La propiedad CSS grid-template-areas` especifica nombres para cada una de las {{glossary("grid areas")}}.

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

Estas áreas no están asociadas a ningún elemento particular de la cuadrícula, pero pueden referenciarse desde otras propiedades de posicionamiento en la cuadrícula: {{cssxref("grid-row-start")}}, {{cssxref("grid-row-end")}}, {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, y sus formas abreviadas {{cssxref("grid-row")}}, {{cssxref("grid-column")}}, and {{cssxref("grid-area")}}.

{{cssinfo}}

## Sintaxis

### Valores

- `none`
  - : El contenedor de la cuadrícula no define ningún nombre para las áreas de la cuadrícula.
- `<string>+`
  - : Las filas se crean listando líneas de cadenas separadas, mientras que las columnas se reflejan en cada una de las celdas que aparecen en la cadena. Multiple named cell tokens within and between rows create a single named grid area that spans the corresponding grid cells. Unless those cells form a rectangle, the declaration is invalid.

### Formal syntax

{{csssyntax}}

## Example

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

### Result

_{{EmbedLiveSample("Example", "100%", "250px")}}_

## Specifications

| Specification                                                                                                | Status                       | Comment            |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------ |
| {{SpecName("CSS3 Grid", "#propdef-grid-template-areas", "grid-template-areas")}} | {{Spec2("CSS3 Grid")}} | Initial definition |

## Browser compatibility

{{Compat("css.properties.grid-template-areas")}}

## See also

- Related CSS properties: {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template")}}
- Grid Layout Guide: _[Grid template areas](/es/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)_
- Video tutorial: _[Grid Template Areas](http://gridbyexample.com/video/grid-template-areas/)_

1. [**CSS**](/es/docs/Web/CSS)
2. [**CSS Reference**](/es/docs/Web/CSS/Reference)
3. [CSS Grid Layout](/es/docs/Web/CSS/CSS_Grid_Layout)
4. **Guides**

    1. [Basics concepts of grid layout](/es/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
    2. [Relationship to other layout methods](/es/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
    3. [Line-based placement](/es/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
    4. [Grid template areas](/es/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
    5. [Layout using named grid lines](/es/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
    6. [Auto-placement in grid layout](/es/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
    7. [Box alignment in grid layout](/es/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
    8. [Grids, logical values and writing modes](/es/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)
    9. [CSS Grid Layout and Accessibility](/es/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
    10. [CSS Grid Layout and Progressive Enhancement](/es/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
    11. [Realizing common layouts using grids](/es/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout)

5. **Properties**

    1. [grid](/es/docs/Web/CSS/grid)
    2. [grid-area](/es/docs/Web/CSS/grid-area)
    3. [grid-auto-columns](/es/docs/Web/CSS/grid-auto-columns)
    4. [grid-auto-flow](/es/docs/Web/CSS/grid-auto-flow)
    5. [grid-auto-rows](/es/docs/Web/CSS/grid-auto-rows)
    6. [grid-column](/es/docs/Web/CSS/grid-column)
    7. [grid-column-end](/es/docs/Web/CSS/grid-column-end)
    8. [grid-column-gap](/es/docs/Web/CSS/grid-column-gap)
    9. [grid-column-start](/es/docs/Web/CSS/grid-column-start)
    10. [grid-gap](/es/docs/Web/CSS/grid-gap)
    11. [grid-row](/es/docs/Web/CSS/grid-row)
    12. [grid-row-end](/es/docs/Web/CSS/grid-row-end)
    13. [grid-row-gap](/es/docs/Web/CSS/grid-row-gap)
    14. [grid-row-start](/es/docs/Web/CSS/grid-row-start)
    15. [grid-template](/es/docs/Web/CSS/grid-template)
    16. [grid-template-areas](/es/docs/Web/CSS/grid-template-areas)
    17. [grid-template-colunms](/es/docs/Web/CSS/grid-template-columns)
    18. [grid-template-rows](/es/docs/Web/CSS/grid-template-rows)

6. **Glossary**

    1. [Grid lines](/es/docs/Glossary/Grid_lines)
    2. [Grid tracks](/es/docs/Glossary/Grid_tracks)
    3. [Grid cell](/es/docs/Glossary/Grid_cell)
    4. [Grid areas](/es/docs/Glossary/Grid_areas)
    5. [Gutters](/es/docs/Glossary/Gutters)
    6. [Grid row](/es/docs/Glossary/Grid_rows)
    7. [Grid column](/es/docs/Glossary/Grid_column)
