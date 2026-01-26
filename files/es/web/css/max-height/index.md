---
title: max-height
slug: Web/CSS/max-height
---

### Resumen

La propiedad `max-height` se utiliza para definir la altura máxima de un elemento dado. Impide que el valor de la {{ Cssxref("height", "altura") }} pueda llegar a ser más grande que la de `max-height`.

- {{ Cssxref("initial", "Valor inicial") }}: {{ Cssxref("none", "ninguno") }}
- Se aplica a : elementos de bloque o remplazados
- {{ Cssxref("inheritance", "Valor heredado") }}: no
- Porcentajes: se refiere a la altura del bloque contenedor.
- Medio: {{cssxref("Media/Visual", "visual")}}
- {{ Cssxref("computed value", "Valor calculado") }}:

### Sintaxis

```
max-height: <length> | <percentage>
```

### Valores

- **none** : la {{ Cssxref("height", "altura") }} no tiene valor máxima.
- **length** : puede ser en px, cm, in (píxel, centímetro o inches)
- **percentage** : % especificado como un porcentaje de la altura del bloque contenedor.

### Ejemplos

```
table { max-height: 75%; }

form { max-height: none; }
```

### Notas

{{ Cssxref("max-height") }} sobrescribe {{ Cssxref("height") }}, pero **no** {{ Cssxref("min-height") }}.

### Especificaciones

{{Specifications}}

### Compatibilidad con navegadores

{{Compat}}

### Ver también

{{ Cssxref("Modelo de caja", "modelo de caja") }}, {{ Cssxref("width", "ancho") }}, {{ Cssxref("-moz-box-sizing", "tamaño de cajas -Mozilla") }}, {{ Cssxref("min-height", "altura mínima") }}, {{ Cssxref("max-height", "altura máxima") }}
