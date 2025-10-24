---
title: border-bottom-style
slug: Web/CSS/border-bottom-style
---

<< [Volver](/es/Guía_de_referencia_de_CSS)

### Resumen

`border-bottom-style` define el estilo de línea del borde inferior de una caja.

- {{ Cssxref("initial", "Valor inicial") }}: {{ Cssxref("none", "ninguno") }}
- Se aplica a: todos los elementos
- {{ Cssxref("inheritance", "Valor heredado") }}: no
- Porcentajes: N/A
- Medio: {{cssxref("Media/Visual", "visual")}}
- {{ Cssxref("computed value", "Valor calculado") }}: como se especificó

### Sintaxis

```
border-bottom-style: <border-style> | inherit
```

### Valores

- none
  - : sin borde.
- hidden
  - : es igual a 'none', excepto en términos de resolución de conflicto para elementos de tabla.
- dotted
  - : series de puntos (....).
- dashed
  - : series de guiones cortos o pequeñas líneas (----).
- solid
  - : línea única, recta y sólida.
- double
  - : dos líneas rectas que se suman a la cantidad de píxeles definidos como ancho de borde `border-width`.
- groove
  - : efecto de hundido.
- ridge
  - : al revés de 'groove'. El borde aparece en 3D (saliendo).
- inset
  - : hace que la caja aparezca hundida.
- outset
  - : opuesto a 'inset'. La caja aparece en 3D (saliendo).

### Propiedades relacionadas

- {{ Cssxref("border-left-style") }}
- {{ Cssxref("border-right-style") }}
- {{ Cssxref("border-top-style") }}
- {{ Cssxref("border-style") }}

### Ejemplos

[Ver El Ejemplo Vivo](https://mdn.dev/archives/media/samples/cssref/border.html)

```
element {
        border-bottom-size: 1px;
        border-bottom-style: dotted;
        border-bottom-color: #000;
}
```

### Notas

A menos que un valor {{ Cssxref("border-style") }} sea definido, el borde no aparecerá porque el valor por defecto es 'none'.

### Especificaciones

- [CSS 2.1](https://www.w3.org/TR/CSS21/box.html#propdef-border-bottom-style)
- [CSS 3](https://www.w3.org/TR/css3-background/#border-style)

### Compatibilidades

### Ver también

{{ Cssxref("border-bottom") }}, {{ Cssxref("border-color") }}, {{ Cssxref("border-bottom-style") }}, {{ Cssxref("border-bottom-width") }}

Categorías

Interwiki Languages
