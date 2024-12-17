---
title: border
slug: Web/CSS/border
---

{{CSSRef}}{{ PreviousNext("Guía de referencia de CSS", "CSS:border-color") }}

### Propiedades Constitutivas

Esta es una [propiedad abreviada](/es/docs/Web/CSS/Shorthand_properties) para las siguientes propiedades CSS:

- border-color
- border-style
- border-width

### Resumen

La propiedad `border` permite definir en una única regla todos los bordes de los elementos seleccionados. Se puede utilizar `border` para definir el o los valores siguientes: {{ Cssxref("border-width") }}, {{ Cssxref("border-style") }}, {{ Cssxref("border-color") }}.

- {{ Cssxref("initial", "Valor inicial") }}: ver propiedades individuales
- Se aplica a: todos los elementos
- {{ Cssxref("inheritance", "Herencia") }}: no
- Porcentajes: N/A
- Medio: {{ Cssxref("Media:Visual", "visual") }}
- {{ Cssxref("computed value", "Valor calculada") }}: ver propiedades individuales

### Sintaxis

```
border: [border-width || border-style || border-color | inherit] ;
```

### Valores

{{ Cssxref("border-width") }}.

{{ Cssxref("border-style") }}.

{{ Cssxref("border-color") }}.

### Ejemplos

[Ver ejemplo en vivo](https://mdn.dev/archives/media/samples/cssref/border.html)

```
element {
    border: 1px solid #000;
}
```

### Notas importantes

Mientras que las propiedades {{ Cssxref("border-width") }}, {{ Cssxref("border-style") }} y {{ Cssxref("border-color") }} admiten hasta cuatro valores diferentes, ésta (_border_) no acepta más de uno por cada propiedad.

### Especificaciones

{{Specifications}}

### Compatibilidad con navegadores

{{Compat}}

### Ver también

{{ Cssxref("border") }}, {{ Cssxref("border-color") }}, {{ Cssxref("border-style") }}, {{ Cssxref("border-width") }}

### Descripción

Como sucede con todas las propiedades abreviadas, cualquier subvalor omitdo será definido a su valor inicial. Cabe destacar que la asignación de un valor personalizado a `border-image` no puede ser realizada mediante el uso de `border`, en todo caso éste útltimo lo fijaría a su valor inicial, por ejemplo, a `none`.

La propiedad abreviada `border` es especialmente útil cuando deseas que los cuatro bordes sean idénticos. Sin embargo, es posible hacerlos distintos utilzando las propiedades extensas (aquellas individuales que componen a la abreviada) `border-width`, `border-style` y `border-color` puesto que aceptan valores distintos por lado. Alternativamente, puedes modificar un borde a la vez con las propiedades físicas (p. ej. `border-top)` y lógicas (p. ej. `border-block-start`) del borde.

### Bordes vs. contornos

Los bordes y los [contornos](/es/docs/Web/CSS/outline) son muy parecidos. Sin embargo, los contornos se distinguen de los bordes de la siguiente forma:

- Los contornos nunca toman espacio, ya que se dibujan fuera del contenido de un elemento.
- De conformidad con las especificaciones, si bien los contornos suelen ser rectangulares, no necesitan serlo.
