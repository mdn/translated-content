---
title: ":left"
slug: Web/CSS/:left
---

{{ CSSRef() }}

La **`:left`** [CSS](/es/docs/Web/CSS) [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes), utilizada con la regla @page at, representa todas las páginas de la izquierda de un documento impreso.

```css
/* Selects any left-hand pages when printing */
@page :left {
  margin: 2in 3in;
}
```

La dirección principal de escritura del documento determina si una página es "izquierda" o "derecha". Por ejemplo, si la primera página tiene una dirección de escritura principal de izquierda a derecha, entonces será una página :right (derecha); si tiene una dirección de escritura importante de derecha a izquierda, será una página :left (izquierda).

> **Nota:** Esta pseudoclase se puede usar para cambiar solo las propiedades margin, padding, border y background del cuadro de página. Se ignorarán todas las demás propiedades y solo se verá afectado el cuadro de página, no el contenido del documento en la página.

## Sintaxis

{{csssyntax}}

## Ejemplos

```css
@page :left {
  margin: 2in 3in;
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver También

- {{ Cssxref("@page") }}
- Otras pseudo-clases relacionadas con la página: {{ Cssxref(":first") }}, {{ Cssxref(":right") }}
