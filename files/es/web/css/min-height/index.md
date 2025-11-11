---
title: min-height
slug: Web/CSS/min-height
---

### Resumen

La propiedad `min-height` se utiliza para definir la altura mínima de un elemento dado. Impide que el valor de la propiedad {{ Cssxref("height") }} llegue a ser más pequeña que la especificada en la altura mínima (`min-height`).

{{cssinfo}}

### Sintaxis

{{csssyntax}}

### Values

- **length** : puede ser en px, cm, in (píxel, centímetro o inches)
- **percentage** : % especificado como un porcentaje de la altura del bloque contenedor.

### Examples

```
table {min-height: 75%;}

form {min-height: 0;}
```

### Notes

{{ Cssxref("min-height") }} tiene prioridad sobre los valores {{ Cssxref("max-height") }} y {{ Cssxref("height") }}.

### Especificaciones

{{Specifications}}

### Compatibilidad con navegadores

{{Compat}}

### Ver también

{{ Cssxref("Modelo de caja", "modelo de caja") }}, {{ Cssxref("width", "ancho") }}, {{ Cssxref("-moz-box-sizing", "tamaño de cajas -Mozilla") }}, {{ Cssxref("min-height", "altura mínima") }}, {{ Cssxref("max-height", "altura máxima") }}
