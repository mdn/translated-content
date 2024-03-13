---
title: ":right"
slug: Web/CSS/:right
---

{{ CSSRef() }}

La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) [CSS](/es/docs/Web/CSS) **`:right`**, utilizada con la [regla-at](/es/docs/Web/CSS/At-rule) {{cssxref("@page")}}, representa todas las páginas de la derecha de un documento impreso.

```css
/* Selecciona cualquier página de la derecha al imprimir */
@page :right {
  margin: 2in 3in;
}
```

Que una página dada sea "izquierda" o "derecha" está determinada por la dirección principal de escritura del documento. Por ejemplo, si la primera página tiene una dirección de escritura principal de izquierda a derecha, entonces será una página `:right`; si tiene una dirección de escritura principal de derecha a izquierda, entonces será una página {{Cssxref(":left")}}.

> **Nota:** No puede cambiar todas las propiedades de CSS con esta pseudo-clase. Solo puede cambiar las propiedades {{ Cssxref("margin") }}, {{ Cssxref("padding") }}, {{ Cssxref("border") }}, y {{ Cssxref("background") }} de la caja de página. Se ignorarán todas las demás propiedades y solo se verá afectada la caja de página, no el contenido del documento en la página.

## Sintaxis

{{csssyntax}}

## Ejemplos

```css
@page :right {
  margin: 2in 3in;
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{ Cssxref("@page") }}
- Otras páginas relacionadas con la pseudo-clases: {{ Cssxref(":first") }}, {{ Cssxref(":left") }}
