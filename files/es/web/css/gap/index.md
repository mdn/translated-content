---
title: grid-gap
slug: Web/CSS/gap
translation_of: Web/CSS/gap
translation_of_original: Web/CSS/grid-gap
original_slug: Web/CSS/grid-gap
---
## Resumen

La propiedad CSS `grid-gap` es una propiedad abreviada [shorthand](/es/docs/Web/CSS/Shorthand_properties) para {{cssxref("grid-row-gap")}} y {{cssxref("grid-column-gap")}} que especifica los canales entre las filas y las columnas de la cuadrícula.

Si <'grid-column-gap'> se omite, adquiere el mismo valor que <'grid-row-gap'>.

{{cssinfo}}

## Sintaxis

```css
/* Un valor <longitud> */
grid-gap: 20px;
grid-gap: 1em;
grid-gap: 3vmin;
grid-gap: 0.5cm;

/* Un valor <porcentaje> */
grid-gap: 16%;
grid-gap: 100%;

/* Dos valores <longitud> */
grid-gap: 20px 10px;
grid-gap: 1em 0.5em;
grid-gap: 3vmin 2vmax;
grid-gap: 0.5cm 2mm;

/* Uno o dos valores <porcentaje> */
grid-gap: 16% 100%;
grid-gap: 21px 82%;

/* Valores Globales */
grid-gap: inherit;
grid-gap: initial;
grid-gap: unset;
```

### Valores

- `<longitud>`
  - : Es el ancho del calalón que separa las lineas de las rejillas.
- `<percentage>`
  - : Es el ancho del canalón que separa las lineas de las rejillas, en relación con la dimensión del elemento.

### Sintaxis formal

{{csssyntax}}

## Ejemplo

### Contenido HTML

```html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

### Contenido CSS

```css
#grid {
  display: grid;
  height: 200px;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  grid-gap: 20px 5px;
}

#grid > div {
  background-color: lime;
}
```

{{EmbedLiveSample("Example", "100%", "200px")}}

## Especificaciones

| Especificación                                                               | Estado                       | Comentario         |
| ---------------------------------------------------------------------------- | ---------------------------- | ------------------ |
| {{SpecName("CSS3 Grid", "#propdef-grid-gap", "grid-gap")}} | {{Spec2("CSS3 Grid")}} | definición inicial |

## Compatibilidad del navegador

{{Compat("css.properties.gap")}}

## See also

- Related CSS properties: {{cssxref("grid-row-gap")}}, {{cssxref("grid-column-gap")}}
- Grid Layout Guide: _[Basic concepts of grid layout - Gutters](/es/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#Gutters)_

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
