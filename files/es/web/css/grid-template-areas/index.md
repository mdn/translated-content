---
title: grid-template-areas
slug: Web/CSS/grid-template-areas
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

## Especificaciones

{{Specifications}}

## Browser compatibility

{{Compat("css.properties.grid-template-areas")}}

## See also

- Related CSS properties: {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template")}}
- Grid Layout Guide: _[Grid template areas](/es/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)_
- Video tutorial: _[Grid Template Areas](http://gridbyexample.com/video/grid-template-areas/)_

<section id="Quick_links">
<ol>
 <li><a href="/en-US/docs/Web/CSS"><strong>CSS</strong></a></li>
 <li><a href="/en-US/docs/Web/CSS/Reference"><strong>CSS Reference</strong></a></li>
 <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout">CSS Grid Layout</a></li>
 <li data-default-state="open"><a href="#"><strong>Guides</strong></a>
  <ol>
   <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout">Basics concepts of grid layout</a></li>
   <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout">Relationship to other layout methods</a></li>
   <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid">Line-based placement</a></li>
   <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas">Grid template areas</a></li>
   <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines">Layout using named grid lines</a></li>
   <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout">Auto-placement in grid layout</a></li>
   <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout">Box alignment in grid layout</a></li>
   <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes">Grids, logical values and writing modes</a></li>
   <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility">CSS Grid Layout and Accessibility</a></li>
   <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement">CSS Grid Layout and Progressive Enhancement</a></li>
   <li><a href="/en-US/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout">Realizing common layouts using grids</a></li>
  </ol>
 </li>
 <li data-default-state="open"><a href="#"><strong>Properties</strong></a>
  <ol>
   <li><a href="/en-US/docs/Web/CSS/grid">grid</a></li>
   <li><a href="/en-US/docs/Web/CSS/grid-area">grid-area</a></li>
   <li><a href="/en-US/docs/Web/CSS/grid-auto-columns">grid-auto-columns</a></li>
   <li><a href="/en-US/docs/Web/CSS/grid-auto-flow">grid-auto-flow</a></li>
   <li><a href="/en-US/docs/Web/CSS/grid-auto-rows">grid-auto-rows</a></li>
   <li><a href="/en-US/docs/Web/CSS/grid-column">grid-column</a></li>
   <li><a href="/en-US/docs/Web/CSS/grid-column-end">grid-column-end</a></li>
   <li><a href="/en-US/docs/Web/CSS/grid-column-gap">grid-column-gap</a></li>
   <li><a href="/en-US/docs/Web/CSS/grid-column-start">grid-column-start</a></li>
   <li><a href="/en-US/docs/Web/CSS/grid-gap">grid-gap</a></li>
   <li><a href="/en-US/docs/Web/CSS/grid-row">grid-row</a></li>
   <li><a href="/en-US/docs/Web/CSS/grid-row-end">grid-row-end</a></li>
   <li><a href="/en-US/docs/Web/CSS/grid-row-gap">grid-row-gap</a></li>
   <li><a href="/en-US/docs/Web/CSS/grid-row-start">grid-row-start</a></li>
   <li><a href="/en-US/docs/Web/CSS/grid-template">grid-template</a></li>
   <li><a href="/en-US/docs/Web/CSS/grid-template-areas">grid-template-areas</a></li>
   <li><a href="/en-US/docs/Web/CSS/grid-template-columns">grid-template-colunms</a></li>
   <li><a href="/en-US/docs/Web/CSS/grid-template-rows">grid-template-rows</a></li>
  </ol>
 </li>
 <li data-default-state="open"><a href="#"><strong>Glossary</strong></a>
  <ol>
   <li><a href="/en-US/docs/Glossary/Grid_lines">Grid lines</a></li>
   <li><a href="/en-US/docs/Glossary/Grid_tracks">Grid tracks</a></li>
   <li><a href="/en-US/docs/Glossary/Grid_cell">Grid cell</a></li>
   <li><a href="/en-US/docs/Glossary/Grid_areas">Grid areas</a></li>
   <li><a href="/en-US/docs/Glossary/Gutters">Gutters</a></li>
   <li><a href="/en-US/docs/Glossary/Grid_rows">Grid row</a></li>
   <li><a href="/en-US/docs/Glossary/Grid_column">Grid column</a></li>
  </ol>
 </li>
</ol>
</section>
