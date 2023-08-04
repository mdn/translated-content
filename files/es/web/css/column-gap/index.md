---
title: grid-column-gap
slug: Web/CSS/column-gap
---

La propiedad CSS **`grid-column-gap`** especifica el {{glossary("gutters","gutter")}} entre {{glossary("grid columns")}}.

```css
/* <length> values */
grid-column-gap: 20px;
grid-column-gap: 1em;
grid-column-gap: 3vmin;
grid-column-gap: 0.5cm;

/* <percentage> value */
grid-column-gap: 10%;

/* Global values */
grid-column-gap: inherit;
grid-column-gap: initial;
grid-column-gap: unset;
```

El efecto es como si las {{glossary("grid lines")}} afectadas adquieren una anchura específica: Los {{glossary("grid tracks", "grid track")}} entre dos líneas de la cuadrícula es el espacio entre los canales que las representa. Para el tamaño de la pista, cada canal se trata esencialmente como una pista adicional del tamaño especificado. Los valores negativos no son válidos.

{{cssinfo}}

## Syntax

### Valores

- `<length-percentage>`
  - : Es el ancho del canal que separa las columnas de la grilla. {{cssxref("&lt;percentage&gt;")}} valores son relativos a la dimensión del elemento.

### Sintaxis formal

{{csssyntax}}

## Ejemplo

HTML

```html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
</div>
```

CSS

```css
#grid {
  display: grid;
  height: 100px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px;
  grid-column-gap: 20px;
}

#grid > div {
  background-color: lime;
}
```

{{EmbedLiveSample("Example", "100%", "100px")}}

## Especificaciones

{{Specifications}}

## Compatibilidad en navegadores

{{Compat}}

## Ver también

- Propiedades CSS relacionadas: {{cssxref("grid-row-gap")}}, {{cssxref("grid-gap")}}
- Guía sobre CSS Grid Layout: _[Conceptos básicos sobre CSS Grid Layout - Gutters](/es/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#Gutters)_

<section id="Quick_links">
<ol>
 <li><a href="/es/docs/Web/CSS"><strong>CSS</strong></a></li>
 <li><strong> <a href="/es/docs/Web/CSS/Reference">Referencia CSS</a></strong></li>
 <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout">Diseño CSS Grid</a></li>
 <li data-default-state="open"><a href="#"><strong>Guías</strong></a>
  <ol>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout">Conceptos básicos sobre Diseño CSS Grid </a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout">Relación con otros métodos de diseño</a></li>
   <li><a href="/es/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid">Posicionamiento basado en línea</a></li>
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
   <li><a href="/es/docs/Web/CSS/grid-template-columns">grid-template-colunms</a></li>
   <li><a href="/es/docs/Web/CSS/grid-template-rows">grid-template-rows</a></li>
  </ol>
 </li>
 <li data-default-state="open"><a href="#"><strong>Glosario</strong></a>
  <ol>
   <li><a href="/es/docs/Glossary/Grid_lines">Grid lines</a></li>
   <li><a href="/es/docs/Glossary/Grid_tracks">Grid tracks</a></li>
   <li><a href="/es/docs/Glossary/Grid_cell">Grid cell</a></li>
   <li><a href="/es/docs/Glossary/Grid_areas">Grid areas</a></li>
   <li><a href="/es/docs/Glossary/Gutters">Gutters</a></li>
   <li><a href="/es/docs/Glossary/Grid_rows">Grid row</a></li>
   <li><a href="/es/docs/Glossary/Grid_column">Grid column</a></li>
  </ol>
 </li>
</ol>
</section>
