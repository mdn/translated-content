---
title: "-moz-user-focus"
slug: Web/CSS/-moz-user-focus
---

{{Non-standard_header}}

## Resumen

La propiedad [CSS](/es/docs/Web/CSS) `-moz-user-focus`se usa para indicar si el elemento puedo obtener el foco.

Al poner el valor de esta propiedad a `ignore`, deshabilitas el hecho de que el elemento pueda obtener el foco lo que significa que el usuario no podrá activar el elemento. Se saltará el elemento es un secuncia de tabuladores.

{{cssinfo}}

## Síntaxis

```css
/* Palabras clave de valores */
-moz-user-focus: normal;
-moz-user-focus: ignore;

/* Valores gloables */
-moz-user-focus: inherit;
-moz-user-focus: initial;
-moz-user-focus: unset;
```

### Valores

- `ignore`
  - : El elemento no aceptará el foco y será saltado en el orden de tabulación.
- `normal`
  - : El elemento puedeo aceptar el foco del teclado.
- `select-after`
  - : ?
- `select-before`
  - : ?
- `select-menu`
  - : ?
- `select-same`
  - : ?
- `select-all`
  - : ?
- `none`
  - : ?

### Síntaxis Formal

{{csssyntax}}

## Especificaciones

Esta propiedad no es parte de ninguna especificación. Una propiedad similar `user-focus` fue propuesta en [borradores previos de la especificación CSS 3 UI](http://www.w3.org/TR/2000/WD-css3-userint-20000216) pero finalmente fué rechazada por el grupo de trabajo.

## Compatibilidad con navegadores

{{Compat}}
