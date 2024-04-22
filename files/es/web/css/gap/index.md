---
title: grid-gap
slug: Web/CSS/gap
---

{{CSSRef}}

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

Contenido HTML

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

CSS

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

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- Related CSS properties: {{cssxref("grid-row-gap")}}, {{cssxref("grid-column-gap")}}
- Grid Layout Guide: _[Basic concepts of grid layout - Gutters](/es/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#Gutters)_
