---
title: border-spacing
slug: Web/CSS/border-spacing
---

{{CSSRef}}

### Resumen

La propiedad de {{ Cssxref("border-spacing", "espaciado de borde") }} especifica la distancia entre los bordes de celdas adyacentes (sólo para el modelo de [separación de borde](/es/docs/Web/CSS/border-collapse)). Es el equivalente al atributo `cellspacing` en HTML.

- {{ Cssxref("initial", "Valor inicial") }}: 0
- Se aplica a: tablas y elementos con la propiedad `inline-table`
- {{ Cssxref("inheritance", "Valor heredado") }}: sí
- Medio: {{cssxref("Media/Visual", "visual")}}
- {{ Cssxref("computed value", "Valor calculado") }}: dos largos absolutos.

### Sintaxis

border-spacing: \<length> | \<length> \<length> | inherit

### Valores

- **\<length>** : un largo a utilizar para el espaciado horizontal y vertical.
- **\<length> \<length>** : el primero da el espaciado horizontal (espacio entre celdas de una fila) y el segundo el espaciado vertical (espacio entre celdas de una columna).

### Ejemplos

[Ver El Ejemplo Vivo](https://mdn.dev/archives/media/samples/cssref/border-spacing.html)

```
table#space {
  border-collapse: separate;
  border-spacing: 10px 5px;
}
```

### Notas

Ésta propiedad sólo se aplica cuando {{ Cssxref("border-collapse") }} es especificado en `separate`.

El espaciado de borde también se utiliza en los bordes exteriores de las tablas donde la distancia entre los bordes de tabla y las celdas en la primera/última columna o fila es la suma de los espaciados (horizontales o verticales) y de los espaciados (arriba, derecho, abajo o izquierdo) en una tabla.

### Especificaciones

{{Specifications}}

### Compatibilidad con navegadores

{{Compat}}

### Ver también

{{ Cssxref("border-collapse") }}
