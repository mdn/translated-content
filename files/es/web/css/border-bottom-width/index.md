---
title: border-bottom-width
slug: Web/CSS/border-bottom-width
---

<< [Volver](/es/Guía_de_referencia_de_CSS)

### Resumen

`border-bottom-width` define el ancho del borde inferior de una caja.

- {{ Cssxref("initial", "Valor inicial") }}: {{ Cssxref("medium", "medio") }}
- Se aplica a : todos los elementos
- {{ Cssxref("inheritance", "Valor heredado") }}: no
- Porcentajes: N/A
- Medio: {{ Xref_cssvisual() }}
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

[Ver El Ejemplo Vivo](/samples/cssref/border.html)

```
element {
    border-bottom-width: thin;
    border-bottom-style: solid;
    border-bottom-color: #000;
}
```

### Especificacions

- [CSS 1](http://www.w3.org/TR/CSS1#border-width)
- [CSS 2.1](http://www.w3.org/TR/CSS21/box.html#border-width-properties)
- [CSS 3](http://www.w3.org/TR/css3-background/#border-width)

### Compatibilidades

| Navegador         | Versión mínima |
| ----------------- | -------------- |
| Internet Explorer |                |
| Firefox           |                |
| Netscape          |                |
| Opera             |                |

### Ver también

{{ Cssxref("border-bottom") }}, {{ Cssxref("border-color") }}, {{ Cssxref("border-bottom-style") }}, {{ Cssxref("border-bottom-width") }}

Categorías

Interwiki Languages
