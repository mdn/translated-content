---
title: border-bottom-width
slug: Web/CSS/border-bottom-width
---

{{CSSRef}}

### Resumen

`border-bottom-width` define el ancho del borde inferior de una caja.

- {{ Cssxref("initial", "Valor inicial") }}: {{ Cssxref("medium", "medio") }}
- Se aplica a : todos los elementos
- {{ Cssxref("inheritance", "Valor heredado") }}: no
- Porcentajes: N/A
- Medio: {{cssxref("Media/Visual", "visual")}}
- {{ Cssxref("computed value", "Valor calculado") }}: largo absoluto o '0' si el estilo es `none` o `hidden`.

### Sintaxis

```
border-bottom-width: <border-width> | inherit
```

### Valores

- thin
  - : un borde fino.
- medium
  - : un borde mediano.
- thick
  - : un borde grueso.
- \<length>

  - : El espesor de un borde tiene un valor explícito. los anchos de borde no pueden ser negativos.

    Nota : El valor `em` también es soportada.

### Propiedades relacionadas

- {{ Cssxref("border-left-style") }}
- {{ Cssxref("border-right-style") }}
- {{ Cssxref("border-top-style") }}
- {{ Cssxref("border-style") }}

### Ejemplos

[Ver El Ejemplo Vivo](https://mdn.dev/archives/media/samples/cssref/border.html)

```
element {
    border-bottom-width: thin;
    border-bottom-style: solid;
    border-bottom-color: #000;
}
```

### Especificaciones

{{Specifications}}

### Compatibilidad con navegadores

{{Compat}}

### Ver también

{{ Cssxref("border-bottom") }}, {{ Cssxref("border-color") }}, {{ Cssxref("border-bottom-style") }}, {{ Cssxref("border-bottom-width") }}
