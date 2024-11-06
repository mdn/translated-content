---
title: CSS Grid Layout
slug: Web/CSS/CSS_grid_layout
---

**CSS Grid layout** contiene funciones de diseño dirigidas a los desarrolladores de aplicaciones web. El CSS grid se puede utilizar para lograr muchos diseños diferentes. También se destaca por permitir dividir una página en áreas o regiones principales, por definir la relación en términos de tamaño, posición y capas entre partes de un control construido a partir de primitivas HTML.

Al igual que las tablas, el grid layout permite a un autor alinear elementos en columnas y filas. Sin embargo, con CSS grid son posibles muchos más diseños y de forma más sencilla que con las tablas. Por ejemplo, los elementos secundarios de un contenedor de cuadrícula podrían posicionarse para que se solapen y se superpongan, de forma similar a los elementos posicionados en CSS.

## Ejemplo sencillo

El siguiente ejemplo muestra un grid de tres columnas con filas nuevas creadas con un mínimo de 100 píxeles y un máximo automático. Los elementos se han colocado en el grid utilizando posicionamiento en línea.

```css hidden
* {
  box-sizing: border-box;
}
.wrapper {
  max-width: 940px;
  margin: 0 auto;
}

.wrapper > div {
  border: 2px solid rgb(233, 171, 88);
  border-radius: 5px;
  background-color: rgba(233, 171, 88, 0.5);
  padding: 1em;
  color: #d9480f;
}
```

HTML

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

CSS

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

{{Specifications}}

<section id="Quick_links">
<section class="Quick_links" id="Enlaces_Rapidos">
<ol>
 <li><a href="/es/docs/Web/CSS"><strong>CSS</strong></a></li>
 <li><a href="/es/docs/Web/CSS/Reference"><strong>CSS Reference</strong></a></li>
 <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout">CSS Grid Layout</a></li>
 <li data-default-state="open"><a href="#"><strong>Guías</strong></a>
  <ol>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout">Basics concepts of grid layout</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout">Relationship to other layout methods</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid">Line-based placement</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas">Grid template areas</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines">Layout using named grid lines</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout">Auto-placement in grid layout</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout">Box alignment in grid layout</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes">Grids, logical values and writing modes</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility">CSS Grid Layout and Accessibility</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement">CSS Grid Layout and Progressive Enhancement</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout">Realizing common layouts using grids</a></li>
  </ol>
 </li>
 <li data-default-state="open"><a href="#"><strong>Propiedades</strong></a>
  <ol>
   <li><a href="/es/docs/Web/CSS/grid">grid</a></li>
   <li><a href="/es/docs/Web/CSS/grid-area">grid-area</a></li>
   <li><a href="/es/docs/Web/CSS/grid-auto-columns">grid-auto-columns</a></li>
   <li><a href="/es/docs/Web/CSS/grid-auto-flow">grid-auto-flow</a></li>
   <li><a href="/es/docs/Web/CSS/grid-auto-rows">grid-auto-rows</a></li>
   <li><a href="/es/docs/Web/CSS/grid-column">grid-column</a></li>
   <li><a href="/es/docs/Web/CSS/grid-column-end">grid-column-end</a></li>
   <li><a href="/es/docs/Web/CSS/grid-column-gap">grid-column-gap</a></li>
   <li><a href="/es/docs/Web/CSS/grid-column-start">grid-column-start</a></li>
   <li><a href="/es/docs/Web/CSS/grid-gap">grid-gap</a></li>
   <li><a href="/es/docs/Web/CSS/grid-row">grid-row</a></li>
   <li><a href="/es/docs/Web/CSS/grid-row-end">grid-row-end</a></li>
   <li><a href="/es/docs/Web/CSS/grid-row-gap">grid-row-gap</a></li>
   <li><a href="/es/docs/Web/CSS/grid-row-start">grid-row-start</a></li>
   <li><a href="/es/docs/Web/CSS/grid-template">grid-template</a></li>
   <li><a href="/es/docs/Web/CSS/grid-template-areas">grid-template-areas</a></li>
   <li><a href="/es/docs/Web/CSS/grid-template-columns">grid-template-columns</a></li>
   <li><a href="/es/docs/Web/CSS/grid-template-rows">grid-template-rows</a></li>
  </ol>
 </li>
 <li data-default-state="open"><a href="#"><strong>Glosario</strong></a>
  <ol>
   <li><a href="/es/docs/Glossary/Grid">Grid</a></li>
   <li><a href="/es/docs/Glossary/Grid_lines">Grid lines</a></li>
   <li><a href="/es/docs/Glossary/Grid_tracks">Grid tracks</a></li>
   <li><a href="/es/docs/Glossary/Grid_cell">Grid cell</a></li>
   <li><a href="/es/docs/Glossary/Grid_areas">Grid areas</a></li>
   <li><a href="/es/docs/Glossary/Gutters">Gutters</a></li>
   <li><a href="/es/docs/Glossary/Grid_Axis">Grid Axis</a></li>
   <li><a href="/es/docs/Glossary/Grid_rows">Grid row</a></li>
   <li><a href="/es/docs/Glossary/Grid_column">Grid column</a></li>
  </ol>
 </li>
</ol>
</section>
</section>
