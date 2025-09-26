---
title: grid
slug: Web/CSS/grid
---

La propiedad CSS **`grid`** es un [shorthand](/es/docs/Web/CSS/CSS_cascade/Shorthand_properties) que permite definir todas las propiedades _grid_ explícitas ({{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}}, y {{cssxref("grid-template-areas")}}), implícitas ({{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-columns")}}, y {{cssxref("grid-auto-flow")}}), y relativas a _gutter_ ({{cssxref("grid-column-gap")}} y {{cssxref("grid-row-gap")}}) en una sola declaración.

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

> [!NOTE]
> Sólo se pueden especificar las propiedades explícitas **_o bien_** las propiedades implícitas en una sola declaración `grid`. Las sub-propiedades que no se especifican se definen a su valor inicial, como es normal para shorthands. También, las propiedades relativas a gutter se redefinen mediante este shorthand, incluso cuando no pueden ser definidas mediante el mismo.

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

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- Propiedades CSS relacionadas: {{cssxref("grid-template")}}, {{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-areas")}}, {{cssxref("grid-auto-columns")}}, {{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-flow")}}
- Grid Layout Guide: _[Line-based placement with CSS Grid](/es/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)_
- Grid Layout Guide: _[Grid template areas - Grid definition shorthands](/es/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas#Grid_definition_shorthands)_
