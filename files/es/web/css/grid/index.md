---
title: grid
slug: Web/CSS/grid
translation_of: Web/CSS/grid
---
La propiedad CSS **`grid`** es un [shorthand](/es/docs/Web/CSS/Shorthand_properties) que permite definir todas las propiedades _grid_ explícitas ({{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}}, y {{cssxref("grid-template-areas")}}), implícitas ({{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-columns")}}, y {{cssxref("grid-auto-flow")}}), y relativas a _gutter\_\_ _({{cssxref("grid-column-gap")}} y {{cssxref("grid-row-gap")}}) en una sola declaración.

```css
/* <'grid-template'> values */
grid: none;
grid: "a" 100px "b" 1fr;
grid: [linename1] "a" 100px [linename2];
grid: "a" 200px "b" min-content;
grid: "a" minmax(100px, max-content) "b" 20%;
grid: 100px / 200px;
grid: minmax(400px, min-content) / repeat(auto-fill, 50px);

/* <'grid-template-rows'> /
   [ auto-flow && dense? ] <'grid-auto-columns'>? values */
grid: 200px / auto-flow;
grid: 30% / auto-flow dense;
grid: repeat(3, [line1 line2 line3] 200px) / auto-flow 300px;
grid: [line1] minmax(20em, max-content) / auto-flow dense 40%;

/* [ auto-flow && dense? ] <'grid-auto-rows'>? /
   <'grid-template-columns'> values */
grid: auto-flow / 200px;
grid: auto-flow dense / 30%;
grid: auto-flow 300px / repeat(3, [line1 line2 line3] 200px);
grid: auto-flow dense 40% / [line1] minmax(20em, max-content);

/* Global values */
grid: inherit;
grid: initial;
grid: unset;
```

> **Nota:** Sólo se pueden especificar las propiedades explícitas **_o bien_** las propiedades implícitas en una sola declaración `grid`. Las sub-propiedades que no se especifican se definen a su valor inicial, como es normal para shorthands. También, las propiedades relativas a gutter se redefinen mediante este shorthand, incluso cuando no pueden ser definidas mediante el mismo.

{{cssinfo}}

## Sintaxis

### Valores

- `<'grid-template'>`
  - : Define el {{cssxref("grid-template")}} incluyendo {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-rows")}} y {{cssxref("grid-template-areas")}}.
- `<'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>?`
  - : Implementa un _auto-flow_ asignando los _row tracks_ explícitamente mediante {{cssxref("grid-template-rows")}} (definiendo {{cssxref("grid-template-columns")}} en `none`) y especificando como auto-repetir los _column tracks_ mediante {{cssxref("grid-auto-columns")}} (definiendo {{cssxref("grid-auto-rows")}} en `auto`). {{cssxref("grid-auto-flow")}} es seteado en `column` en consecuencia, con `dense` si se especifica.
    Todas las otras sub-propiedades de `grid` se redefinen a sus valores iniciales.
- `[ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>`
  - : Implementa un _auto-flow_ asignando los _column tracks_ explícitamente mediante {{cssxref("grid-template-columns")}} (definiendo {{cssxref("grid-template-rows")}} en `none`) y especificando como auto-repetir los _row tracks_ mediante {{cssxref("grid-auto-rows")}} (definiendo {{cssxref("grid-auto-columns")}} en `auto`). {{cssxref("grid-auto-flow")}} es seteado en `row` en consecuencia, con `dense` si se especifica.
    Todas las otras sub-propiedades de `grid` se redefinen a sus valores iniciales.

### Sintaxis formal

{{csssyntax}}

## Ejemplo

### HTML

```html
<div id="container">
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

### CSS

```css
#container {
  display: grid;
  grid: repeat(2, 60px) / auto-flow 80px;
}

#container > div {
  background-color: #8ca0ff;
  width: 50px;
  height: 50px;
}
```

### Resultado

{{EmbedLiveSample("Example", "100%", 150)}}

## Especificaciones

| Especificación                                                       | Estado                       | Comentario         |
| -------------------------------------------------------------------- | ---------------------------- | ------------------ |
| {{SpecName("CSS3 Grid", "#propdef-grid", "grid")}} | {{Spec2("CSS3 Grid")}} | Definición inicial |

## Compatibilidad en navegadores

{{Compat("css.properties.grid")}}

## Ver también

- Propiedades CSS relacionadas: {{cssxref("grid-template")}}, {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-areas")}}, {{cssxref("grid-auto-columns")}}, {{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-flow")}}
- Grid Layout Guide: _[Line-based placement with CSS Grid](/es/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)_
- Grid Layout Guide: _[Grid template areas - Grid definition shorthands](/es/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas#Grid_definition_shorthands)_

1.  [**CSS**](/es/docs/Web/CSS)
2.  [**CSS Reference**](/es/docs/Web/CSS/Reference)
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
