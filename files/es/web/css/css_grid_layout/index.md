---
title: CSS Grid Layout
slug: Web/CSS/CSS_Grid_Layout
translation_of: Web/CSS/CSS_Grid_Layout
---
**CSS Grid layout** contiene funciones de diseño dirigidas a los desarrolladores de aplicaciones web. El CSS grid se puede utilizar para lograr muchos diseños diferentes. También se destaca por permitir dividir una página en áreas o regiones principales, por definir la relación en términos de tamaño, posición y capas entre partes de un control construido a partir de primitivas HTML.

Al igual que las tablas, el grid layout permite a un autor alinear elementos en columnas y filas. Sin embargo, con CSS grid son posibles muchos más diseños y de forma más sencilla que con las tablas. Por ejemplo, los elementos secundarios de un contenedor de cuadrícula podrían posicionarse para que se solapen y se superpongan, de forma similar a los elementos posicionados en CSS.

## Ejemplo sencillo

El siguiente ejemplo muestra un grid de tres columnas con filas nuevas creadas con un mínimo de 100 píxeles y un máximo automático. Los elementos se han colocado en el grid utilizando posicionamiento en línea.

```css hidden
* {box-sizing: border-box;}
.wrapper {
  max-width: 940px;
  margin: 0 auto;
}

.wrapper > div {
  border: 2px solid rgb(233,171,88);
  border-radius: 5px;
  background-color: rgba(233,171,88,.5);
  padding: 1em;
  color: #d9480f;
}
```

### HTML

```html
<div class="wrapper">
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three</div>
  <div class="four">Four</div>
  <div class="five">Five</div>
  <div class="six">Six</div>
</div>
```

### CSS

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
.one {
  grid-column: 1 / 3;
  grid-row: 1;
}
.two {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}
.three {
  grid-column: 1;
  grid-row: 2 / 5;
}
.four {
  grid-column: 3;
  grid-row: 3;
}
.five {
  grid-column: 2;
  grid-row: 4;
}
.six {
  grid-column: 3;
  grid-row: 4;
}
```

{{ EmbedLiveSample('example', '500', '440') }}

## Referencia

### Propiedades CSS

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-template")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-flow")}}
- {{cssxref("grid")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-column-start")}}
- {{cssxref("grid-row-end")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-row")}}
- {{cssxref("grid-column")}}
- {{cssxref("grid-area")}}
- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

### Funciones CSS

- {{cssxref("repeat", "repeat()")}}
- {{cssxref("minmax", "minmax()")}}
- {{cssxref("fit-content", "fit-content()")}}

### CSS data types

- {{cssxref("&lt;flex&gt;")}}

### Glosario

- [Grid](/es/docs/Glossary/Grid)
- [Grid Lines](/es/docs/Glossary/Grid_Lines)
- [Grid Tracks](/es/docs/Glossary/Grid_Tracks)
- [Grid Cell](/es/docs/Glossary/Grid_Cell)
- [Grid Area](/es/docs/Glossary/Grid_Areas)
- [Gutters](/es/docs/Glossary/Gutters)
- [Grid Axis](/es/docs/Glossary/Grid_Axis)
- [Grid row](/es/docs/Glossary/Grid_Rows)
- [Grid column](/es/docs/Glossary/Grid_Column)

## Guías

- [Basic concepts of Grid Layout](/es/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- [Relationship of Grid Layout to other layout methods](/es/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
- [Layout using line-based placement](/es/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
- [Grid template areas](/es/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
- [Layout using named grid lines](/es/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
- [Auto-placement in CSS Grid Layout](/es/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
- [Box alignment in CSS Grid Layout](/es/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
- [CSS Grid, Logical Values and Writing Modes](/es/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)
- [CSS Grid Layout and accessibility](/es/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
- [CSS Grid and progressive enhancement](/es/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
- [Realising common layouts using CSS Grid](/es/docs/Web/CSS/CSS_Grid_Layout/Realising_common_layouts_using_CSS_Grid_)

## Recursos externos

- [Examples from Jen Simmons](http://labs.jensimmons.com/)
- [Grid by Example - a collection of usage examples and video tutorials](http://gridbyexample.com/)
- [Codrops Grid Reference](https://tympanus.net/codrops/css_reference/grid/)
- [Firefox DevTools CSS Grid Inspector](/es/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts)
- [CSS Grid Playground](https://mozilladevelopers.github.io/playground/)
- [Grid Garden](http://cssgridgarden.com) - Un juego para aprender el grid

## Especificaciones

| Specification                        | Status                           | Comment                                                                                   |
| ------------------------------------ | -------------------------------- | ----------------------------------------------------------------------------------------- |
| {{ SpecName("CSS Grid 2") }} | {{ Spec2("CSS Grid 2") }} | Added [subgrids](/es/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#Subgrid). |
| {{ SpecName('CSS3 Grid') }} | {{ Spec2('CSS3 Grid') }} | Initial definition.                                                                       |

1. [**CSS**](/es/docs/Web/CSS)
2. [**CSS Reference**](/es/docs/Web/CSS/Reference)
3. [CSS Grid Layout](/es/docs/Web/CSS/CSS_Grid_Layout)
4. **Guías**

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

5. **Propiedades**

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
    17. [grid-template-columns](/es/docs/Web/CSS/grid-template-columns)
    18. [grid-template-rows](/es/docs/Web/CSS/grid-template-rows)

6. **Glosario**

    1. [Grid](/es/docs/Glossary/Grid)
    2. [Grid lines](/es/docs/Glossary/Grid_lines)
    3. [Grid tracks](/es/docs/Glossary/Grid_tracks)
    4. [Grid cell](/es/docs/Glossary/Grid_cell)
    5. [Grid areas](/es/docs/Glossary/Grid_areas)
    6. [Gutters](/es/docs/Glossary/Gutters)
    7. [Grid Axis](/es/docs/Glossary/Grid_Axis)
    8. [Grid row](/es/docs/Glossary/Grid_rows)
    9. [Grid column](/es/docs/Glossary/Grid_column)
