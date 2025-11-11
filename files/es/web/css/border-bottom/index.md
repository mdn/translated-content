---
title: border-bottom
slug: Web/CSS/border-bottom
---

### Resumen

La propiedad `border-bottom` permite de definir de una vez todas las propiedades individuales {{ Cssxref("border-bottom-color") }}, {{ Cssxref("border-bottom-style") }}, y {{ Cssxref("border-bottom-width") }}, las cuales describen el color, estilo y ancho del borde inferior de un elementos.

- {{ Cssxref("initial", "Valor inicial") }}: ver propiedades individuales
- Se aplica a : todos los elementos
- {{ Cssxref("inheritance", "Valor heredado") }}: no
- Porcentajes: N/A
- Medio: {{cssxref("Media/Visual", "visual")}}
- {{ Cssxref("computed value", "Valor calculado") }}: ver propiedades individuales

### Sintaxis

```
border-bottom: [ <border-width> || <border-style> || <border-color> ] | inherit
```

### Valores

- \<border-width>
  - : ver {{ Cssxref("border-bottom-width") }}.
- \<border-style>
  - : ver {{ Cssxref("border-bottom-style") }}.
- \<border-color>
  - : ver {{ Cssxref("border-bottom-color") }}.

### Ejemplos

[Ver El Ejemplo Vivo](https://mdn.dev/archives/media/samples/cssref/border.html)

```
element {
    border-bottom-width: 1px solid #000;
}
```

### Notas

Si no se especifica el color del borde, este tomará el valor definido en la propiedad del {{ Cssxref("color") }} general.

Se puede especificar los tres valores en cualquier orden y se pueden omitir una o dos.

Como con todas las propiedades generales, `border-bottom` siempre inicia todos los valores que le pueden ser definidos aún cuando no están especificados, en este caso toma los valores por defecto.

Lo que significa que:

```
  border-bottom-style: dotted;
  border-bottom: thick green;
```

es idéntico a:

```
  border-bottom-style: dotted;
  border-bottom: none thick green;
```

y el valor de {{ Cssxref("border-bottom-style") }} dado antes de `border-bottom` es ignorado.

Como el valor por defecto de {{ Cssxref("border-bottom-style") }} es `none`, el no especificar la parte \<border-style> en la propiedad general significa: **sin borde**.

### Especificaciones

{{Specifications}}

### Compatibilidad con navegadores

{{Compat}}

### Ver también

{{ Cssxref("border") }}, {{ Cssxref("border-bottom") }}, {{ Cssxref("border-bottom-width") }}, {{ Cssxref("border-bottom-style") }}, {{ Cssxref("border-bottom-color") }},
