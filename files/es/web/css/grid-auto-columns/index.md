---
title: grid-auto-columns
slug: Web/CSS/grid-auto-columns
---

La propiedad de css **`grid-auto-columns`** especifíca el tamaño de una columna de cuadrícula creada implícitamente {{glossary("grid tracks", "track")}}.

{{EmbedInteractiveExample("pages/css/grid-auto-columns.html")}}

La version original interactiva de este artículo se guarda en un repositorio GitHub . If you'd like to contribute to the interactive examples project, please clone <https://github.com/mdn/interactive-examples> and send us a pull request.

Si un item grid se posiciona dentro de una columna que no tenga un tamaño explícito para {{cssxref("grid-template-columns")}}, implícito{{glossary("grid", "grid")}}las pistan se crean para sostenerlo. Esto puede suceder posicionándose explícitamente en una columna que está fuera de rango, o mediante el algoritmo de auto colocación creando columnas adicionales.

## Sintaxis

```css
/* Keyword values */
grid-auto-columns: min-content;
grid-auto-columns: max-content;
grid-auto-columns: auto;

/* <length> values */
grid-auto-columns: 100px;
grid-auto-columns: 20cm;
grid-auto-columns: 50vmax;

/* <percentage> values */
grid-auto-columns: 10%;
grid-auto-columns: 33.3%;

/* <flex> values */
grid-auto-columns: 0.5fr;
grid-auto-columns: 3fr;

/* minmax() values */
grid-auto-columns: minmax(100px, auto);
grid-auto-columns: minmax(max-content, 2fr);
grid-auto-columns: minmax(20%, 80vmax);

/* fit-content() values */
grid-auto-columns: fit-content(400px);
grid-auto-columns: fit-content(5cm);
grid-auto-columns: fit-content(20%);

/* multiple track-size values */
grid-auto-columns: min-content max-content auto;
grid-auto-columns: 100px 150px 390px;
grid-auto-columns: 10% 33.3%;
grid-auto-columns: 0.5fr 3fr 1fr;
grid-auto-columns: minmax(100px, auto) minmax(max-content, 2fr) minmax(20%, 80vmax);
grid-auto-columns: 100px minmax(100px, auto) 10% 0.5fr fit-content(400px);

/* Global values */
grid-auto-columns: inherit;
grid-auto-columns: initial;
grid-auto-columns: unset;
```

### Values

- `<length>`
  - : Es una longitud no negativa.
- `<percentage>`
  - : Es un valor no negativo {{cssxref("percentage", "&lt;percentage&gt;")}} en relación con el tamaño del bloque del contenedor de la grilla. Si el tamaño de bloque del contenedor de cuadrícula es indefinido, el valor porcentual se trata como automático.
- `<flex>`

  - : Es una dimensión -valor- no negativa con la unidad `fr` especificando el 'factor flex' del espacio entre dos celdas. Si el espacio entre dos celdas está designado como `<flex>` tomará una porción del espacio remanente entre celdas en proporción a su 'factor flex' - o flex factor `fr`-.

    Si aparece en una función `minmax()` implica un mínimo automático (ejemplo: `minmax(auto, <flex>)`).

- `max-content`
  - : Es una keyword o palabra clave que representa el contenido máximo de los items que ocupan el espacio de la grid o cuadrilla.
- `min-content`
  - : Es una keyword o palabra clave que representa el contenido mínimo de los items que ocupan el espacio de la grid o cuadrilla.
- `minmax(min, max)`
  - : Es una notación funcional (una función) que define un rango de tamaño mayor que o igual a _min_ y menor que o igual a _max_. Si _max_ es menor que _min_, entonces _max_ será ignorado y la función será tratada como un _min_. Si establecemos un valor máximo como `<flex>`, se define el 'factor flex' del espacio entre las celdas del grid. Si establecemos el valor mínimo como `<flex>`, se tratará como cero, o contenido mínimo si el contenedor de la grid/cuadrilla tiene la restricción de valor mínimo (min-content).
- `fit-content(argument)`
  - : Representa la fórmula `min(max-content, max(auto, argument))`, que se calcula similar a `auto` (por ejemplo: `minmax(auto, max-content)`), excepto que el _track size_ o espacio entre celdas es mayor que el auto mínimo.
- `auto`

  - : Es una palabra reservada -o keyword- que es idéntica a contenido máximo si es un máximo. Como mínimo representa el máximo valor mínimo aceptado (según lo especificado por{{cssxref("min-width")}}/{{cssxref("min-height")}}) de los elementos de la cuadrícula que ocupan el espacio de la cuadrícula.

    > **Nota:** Note: Los valores de tamaño `auto` (y solo los `auto`) pueden ser estirados por las propiedades {{cssxref("align-content")}} y {{cssxref("justify-content")}} .

### Sintaxis Formal

{{csssyntax}}

## Ejemplo

### Contenido HTML

```html
<div id="grid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
</div>
```

### Contenido CSS

```css
#grid {
  height: 100px;
  display: grid;
  grid-template-areas: "a a";
  grid-gap: 10px;
  grid-auto-columns: 200px;
}

#grid > div {
  background-color: lime;
}
```

### Resultado:

{{EmbedLiveSample("Example", "410px", "100px")}}

## Especificaciones

{{Specifications}}

## Compatibilidad con Navegadores

{{Compat("css.properties.grid-auto-columns")}}

## Vea también

- Propiedades CSS relacionadas: {{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-flow")}}, {{cssxref("grid")}}
- Guía de Layout tipo Grid (en inglés): _[Auto-placement in grid layout - sizing rows in the implicit grid](/es/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout#Sizing_rows_in_the_implicit_grid)_
- Video tutorial (inglés): _[Introducing Grid auto-placement and order](http://gridbyexample.com/video/series-auto-placement-order/)_

<section id="Quick_links">
<ol>
 <li><a href="/en-US/docs/Web/CSS"><strong>CSS</strong></a></li>
 <li><strong><a href="/en-US/docs/Web/CSS/Reference">R</a>eferencia a CSS</strong></li>
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
