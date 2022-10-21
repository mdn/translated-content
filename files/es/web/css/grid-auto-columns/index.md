---
title: grid-auto-columns
slug: Web/CSS/grid-auto-columns
tags:
  - CSS
  - CSS Grid
  - Experimental
  - Propiedades CSS
  - Referencia
translation_of: Web/CSS/grid-auto-columns
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

| Especificación                                                                                       | Estatus                      | Comentario         |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------ |
| {{SpecName("CSS3 Grid", "#propdef-grid-auto-columns", "grid-auto-columns")}} | {{Spec2("CSS3 Grid")}} | Initial definition |

{{cssinfo}}

## Compatibilidad con Navegadores

{{Compat("css.properties.grid-auto-columns")}}

## Vea también

- Propiedades CSS relacionadas: {{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-flow")}}, {{cssxref("grid")}}
- Guía de Layout tipo Grid (en inglés): _[Auto-placement in grid layout - sizing rows in the implicit grid](/es/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout#Sizing_rows_in_the_implicit_grid)_
- Video tutorial (inglés): _[Introducing Grid auto-placement and order](http://gridbyexample.com/video/series-auto-placement-order/)_

1.  [**CSS**](/es/docs/Web/CSS)
2.  **[R](/es/docs/Web/CSS/Reference)eferencia a CSS**
3.  [CSS Grid Layout](/es/docs/Web/CSS/CSS_Grid_Layout)
4.  **Guides**

    1.  [Basics concepts of grid layout](/es/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
    2.  [Relationship to other layout methods](/es/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
    3.  [Line-based placement](/es/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
    4.  [Grid template areas](/es/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
    5.  [Layout using named grid lines](/es/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
    6.  [Auto-placement in grid layout](/es/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
    7.  [Box alignment in grid layout](/es/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
    8.  [Grids, logical values and writing modes](/es/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)
    9.  [CSS Grid Layout and Accessibility](/es/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
    10. [CSS Grid Layout and Progressive Enhancement](/es/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
    11. [Realizing common layouts using grids](/es/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout)

5.  **Properties**

    1.  [grid](/es/docs/Web/CSS/grid)
    2.  [grid-area](/es/docs/Web/CSS/grid-area)
    3.  [grid-auto-columns](/es/docs/Web/CSS/grid-auto-columns)
    4.  [grid-auto-flow](/es/docs/Web/CSS/grid-auto-flow)
    5.  [grid-auto-rows](/es/docs/Web/CSS/grid-auto-rows)
    6.  [grid-column](/es/docs/Web/CSS/grid-column)
    7.  [grid-column-end](/es/docs/Web/CSS/grid-column-end)
    8.  [grid-column-gap](/es/docs/Web/CSS/grid-column-gap)
    9.  [grid-column-start](/es/docs/Web/CSS/grid-column-start)
    10. [grid-gap](/es/docs/Web/CSS/grid-gap)
    11. [grid-row](/es/docs/Web/CSS/grid-row)
    12. [grid-row-end](/es/docs/Web/CSS/grid-row-end)
    13. [grid-row-gap](/es/docs/Web/CSS/grid-row-gap)
    14. [grid-row-start](/es/docs/Web/CSS/grid-row-start)
    15. [grid-template](/es/docs/Web/CSS/grid-template)
    16. [grid-template-areas](/es/docs/Web/CSS/grid-template-areas)
    17. [grid-template-columns](/es/docs/Web/CSS/grid-template-columns)
    18. [grid-template-rows](/es/docs/Web/CSS/grid-template-rows)

6.  **Glossary**

    1.  [Grid lines](/es/docs/Glossary/Grid_lines)
    2.  [Grid tracks](/es/docs/Glossary/Grid_tracks)
    3.  [Grid cell](/es/docs/Glossary/Grid_cell)
    4.  [Grid areas](/es/docs/Glossary/Grid_areas)
    5.  [Gutters](/es/docs/Glossary/Gutters)
    6.  [Grid row](/es/docs/Glossary/Grid_rows)
    7.  [Grid column](/es/docs/Glossary/Grid_column)
