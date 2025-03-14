---
title: flex-flow
slug: Web/CSS/flex-flow
---

{{ CSSRef}}

## Resumen

La propiedad [CSS](/es/docs/Web/CSS) **`flex-flow`** es una propiedad atajo para las propiedades individuales `flex-direction` y `flex-wrap`.

{{cssinfo}}

Para más propiedades e información ve [Utilizando cajas flexibles CSS](/es/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox).

## Sintaxis

```css
/* flex-flow: <'flex-direction'> */
flex-flow: row;
flex-flow: row-reverse;
flex-flow: column;
flex-flow: column-reverse;

/* flex-flow: <'flex-wrap'> */
flex-flow: nowrap;
flex-flow: wrap;
flex-flow: wrap-reverse;

/* flex-flow: <'flex-direction'> and <'flex-wrap'> */
flex-flow: row nowrap;
flex-flow: column wrap;
flex-flow: column-reverse wrap-reverse;

/* valores globales */
flex-flow: inherit;
flex-flow: initial;
flex-flow: unset;
```

### Valores

Ve [`flex-direction`](/es/docs/Web/CSS/flex-direction) y [`flex-wrap`](/es/docs/Web/CSS/flex-wrap) para más detalles de los valores.

### Sintaxis formal

{{csssyntax}}

## Ejemplos

```
element {
  /* Main-axis es la dirección de bloque con main-start y main-end opuesto. Los artículos flex se distribuyen en múltiples líneas */
  flex-flow: column-reverse wrap;
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Utilizando cajas flexibles CSS](/es/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
