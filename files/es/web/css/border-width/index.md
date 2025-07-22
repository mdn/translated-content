---
title: border-width
slug: Web/CSS/border-width
---

### Resumen

La propiedad **`border-width`** define el ancho del borde.

- {{ Cssxref("initial", "Valor inicial") }}: {{ Cssxref("medium", "medio") }}
- Se aplica a: todos los elementos
- {{ Cssxref("inheritance", "Herencia") }}: no
- Porcentajes: N/A
- Medio: {{ Cssxref("Media:Visual", "visual") }}
- {{ Cssxref("computed value", "Valor calculado") }}: largo absoluto o '0' si el estilo del borde es _ninguno_ ('none') o 'hidden'.

### Sintaxis

```
 border-width: <border-width-value> {1,4} | {{ Cssxref("inherit", "heredado") }}
```

### Valores

- **\<border-width-value>**
  - : `thin | medium | thick |`{{ Cssxref("length", "largo") }}
- thin
  - : Un borde fino.
- medium
  - : Un borde mediano.
- thick
  - : Un borde grueso.
- \<length>
  - : El grosor de un borde es un valor explícito por lo cual el ancho **no** puede ser nunca negativo.
    Nota: Un valor `em` también es reconocido y soportado.

### Propiedades relacionadas

- {{ Cssxref("border-bottom-width") }}
- {{ Cssxref("border-left-width") }}
- {{ Cssxref("border-right-width") }}
- {{ Cssxref("border-top-width") }}

### Ejemplos

[V](https://mdn.dev/archives/media/samples/cssref/border.html)er el ejemplo en vivo

```
element {
    border-width: thin;
    border-style: solid;
    border-color: #000;
}
```

### Especificaciones

{{Specifications}}

### Compatibilidad con navegadores

{{Compat}}

### Ver también

{{ Cssxref("border") }}, {{ Cssxref("border-color") }}, {{ Cssxref("border-style") }}, {{ Cssxref("border-width") }}
