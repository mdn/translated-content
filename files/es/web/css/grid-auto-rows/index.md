---
title: grid-auto-rows
slug: Web/CSS/grid-auto-rows
tags:
  - CSS
  - Grilla CSS
  - Propiedad CSS
translation_of: Web/CSS/grid-auto-rows
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

## Specifications

| Specification                                                                                | Status                       | Comment            |
| -------------------------------------------------------------------------------------------- | ---------------------------- | ------------------ |
| {{SpecName("CSS3 Grid", "#propdef-grid-auto-rows", "grid-auto-rows")}} | {{Spec2("CSS3 Grid")}} | Initial definition |

## Browser compatibility

{{Compat("css.properties.grid-auto-rows")}}

## Ver también

- Related CSS properties: {{cssxref("grid-auto-columns")}}, {{cssxref("grid-auto-flow")}}, {{cssxref("grid")}}
- Grid Layout Guide: _[Auto-placement in grid layout - sizing rows in the implicit grid](/es/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout#Sizing_rows_in_the_implicit_grid)_
- Video tutorial: _[Introducing Grid auto-placement and order](http://gridbyexample.com/video/series-auto-placement-order/)_

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
    17. [grid-template-columns](/es/docs/Web/CSS/grid-template-columns)
    18. [grid-template-rows](/es/docs/Web/CSS/grid-template-rows)

6. **Glossary**

    1. [Grid lines](/es/docs/Glossary/Grid_lines)
    2. [Grid tracks](/es/docs/Glossary/Grid_tracks)
    3. [Grid cell](/es/docs/Glossary/Grid_cell)
    4. [Grid areas](/es/docs/Glossary/Grid_areas)
    5. [Gutters](/es/docs/Glossary/Gutters)
    6. [Grid row](/es/docs/Glossary/Grid_rows)
    7. [Grid column](/es/docs/Glossary/Grid_column)
