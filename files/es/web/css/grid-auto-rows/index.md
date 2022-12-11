---
title: grid-auto-rows
slug: Web/CSS/grid-auto-rows
---

La propiedad **`grid-auto-rows`** de CSS especifíca el tamaño de una nueva fila creada de forma implícita.

```css
/* Keyword values */
grid-auto-rows: min-content;
grid-auto-rows: max-content;
grid-auto-rows: auto;

/* <length> values */
grid-auto-rows: 100px;
grid-auto-rows: 20cm;
grid-auto-rows: 50vmax;

/* <percentage> values */
grid-auto-rows: 10%;
grid-auto-rows: 33.3%;

/* <flex> values */
grid-auto-rows: 0.5fr;
grid-auto-rows: 3fr;

/* minmax() values */
grid-auto-rows: minmax(100px, auto);
grid-auto-rows: minmax(max-content, 2fr);
grid-auto-rows: minmax(20%, 80vmax);

/* multiple track-size values */
grid-auto-rows: min-content max-content auto;
grid-auto-rows: 100px 150px 390px;
grid-auto-rows: 10% 33.3%;
grid-auto-rows: 0.5fr 3fr 1fr;
grid-auto-rows: minmax(100px, auto) minmax(max-content, 2fr) minmax(20%, 80vmax);
grid-auto-rows: 100px minmax(100px, auto) 10% 0.5fr fit-content(400px);

/* Global values */
grid-auto-rows: inherit;
grid-auto-rows: initial;
grid-auto-rows: unset;
```

Si el elemento de una grilla es ubicado en una fila que no tiene un tamaño explicitado en {{cssxref("grid-template-rows")}}, se crean filas implícitas en la {{glossary("grid", "grilla")}} para ubicarlas. Esto puede suceder al ubicar explícitamente un elemento en una fila que está fuera de rango o por el posicionamiento automático que utiliza el algoritmo para crear líneas adicionales.

{{cssinfo}}

## Syntax

### Values

- `<length>`
  - : Es una medida no negativa.
- `<percentage>`
  - : Es un {{cssxref("percentage", "&lt;percentage&gt;")}} no negativo relativo al tamaño del bloque del contenedor de la grilla. Si el tamaño del bloque del contenedor de la grilla es indefinido, el valor del porcentaje es tratado como `auto`.
- `<flex>`

  - : Es una dimensión no negativa con la unidad `fr` especificando el factor flex de la pista (track). Cada pista con valor `<flex>` toma una parte del espacio restante en proporción con su factor flex.

    Cuando aparece fuera de una notación `minmax()`, implica un mínimo automático (p.e. `minmax(auto, <flex>)`).

- `max-content`
  - : representa el largo maximo del contenido de cada uno de los items de la pista en la cuadricula(grid)
- `min-content`
  - : representa el largo minimo del contenido de cada uno de los items de la pista en la cuadricula(grid)
- `minmax(minimo, maximo)`
  - : es una notacion funcional que define el rango del tamano, dicho tamano debe ser mayor o igual al (minimo) y menor o igual al (maximo). si el parametro (maximo) es mas pequeno que el parametro (minimo), entonces el parametro (maximo) es ignorado y la funcion se tratara con el parametro (minimo). De otra manera si, a valor `<flex>` pone como minimo el factor flex de la pista, sera tratado como cero( or el contenido minimo, si el contenedor grid es inicializado con el tamano minimo permitido ).
- `auto`

  - : Es una palabra clave que es identica a contenido máximo si es un máximo. Como mínimo representa el valor mínimo más grande (como esté especificado por {{cssxref("min-width")}}/{{cssxref("min-height")}}) de los elementos de la grilla que ocupan la pista de la grilla.

    > **Nota:** Nota: los tamaños de la pista `auto` (y sólo los tamaños de la pista `auto`) pueden ser estirados por las propiedades {{cssxref("align-content")}} y {{cssxref("justify-content")}}.

### Formal syntax

{{csssyntax}}

## Example

### HTML Content

```html
<div id="grid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
</div>
```

### CSS Content

```css
#grid {
  width: 200px;
  display: grid;
  grid-template-areas: "a a";
  grid-gap: 10px;
  grid-auto-rows: 100px;
}

#grid > div {
  background-color: lime;
}
```

{{EmbedLiveSample("Example", "210px", "210px")}}

## Especificaciones

{{Specifications}}

## Browser compatibility

{{Compat("css.properties.grid-auto-rows")}}

## Ver también

- Related CSS properties: {{cssxref("grid-auto-columns")}}, {{cssxref("grid-auto-flow")}}, {{cssxref("grid")}}
- Grid Layout Guide: _[Auto-placement in grid layout - sizing rows in the implicit grid](/es/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout#Sizing_rows_in_the_implicit_grid)_
- Video tutorial: _[Introducing Grid auto-placement and order](http://gridbyexample.com/video/series-auto-placement-order/)_

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
   <li><a href="/en-US/docs/Web/CSS/grid-template-columns">grid-template-columns</a></li>
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
