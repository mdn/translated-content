---
title: grid-column-gap
slug: Web/CSS/column-gap
translation_of: Web/CSS/column-gap
translation_of_original: Web/CSS/grid-column-gap
original_slug: Web/CSS/grid-column-gap
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

### HTML

```html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
</div>
```

### CSS

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

| Especificación                                                                                   | Estado                       | Comentario        |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------- |
| {{SpecName("CSS3 Grid", "#propdef-grid-column-gap", "grid-column-gap")}} | {{Spec2("CSS3 Grid")}} | Definición incial |

## Compatibilidad en navegadores

{{Compat("css.properties.grid-column-gap")}}

## Ver también

- Propiedades CSS relacionadas: {{cssxref("grid-row-gap")}}, {{cssxref("grid-gap")}}
- Guía sobre CSS Grid Layout: _[Conceptos básicos sobre CSS Grid Layout - Gutters](/es/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#Gutters)_

1.  [**CSS**](/es/docs/Web/CSS)
2.  **[Referencia CSS](/es/docs/Web/CSS/Reference)**
3.  [Diseño CSS Grid](/es/docs/Web/CSS/CSS_Grid_Layout)
4.  **Guías**

    1.  [Conceptos básicos sobre Diseño CSS Grid](/es/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
    2.  [Relación con otros métodos de diseño](/es/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
    3.  [Posicionamiento basado en línea](/es/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
    4.  [Grid template areas](/es/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
    5.  [Layout using named grid lines](/es/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
    6.  [Auto-placement in grid layout](/es/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
    7.  [Box alignment in grid layout](/es/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
    8.  [Grids, logical values and writing modes](/es/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)
    9.  [CSS Grid Layout and Accessibility](/es/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
    10. [CSS Grid Layout and Progressive Enhancement](/es/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
    11. [Realizing common layouts using grids](/es/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout)

5.  **Propiedades**

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
    17. [grid-template-colunms](/es/docs/Web/CSS/grid-template-columns)
    18. [grid-template-rows](/es/docs/Web/CSS/grid-template-rows)

6.  **Glosario**

    1.  [Grid lines](/es/docs/Glossary/Grid_lines)
    2.  [Grid tracks](/es/docs/Glossary/Grid_tracks)
    3.  [Grid cell](/es/docs/Glossary/Grid_cell)
    4.  [Grid areas](/es/docs/Glossary/Grid_areas)
    5.  [Gutters](/es/docs/Glossary/Gutters)
    6.  [Grid row](/es/docs/Glossary/Grid_rows)
    7.  [Grid column](/es/docs/Glossary/Grid_column)
