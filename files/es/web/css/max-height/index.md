---
title: max-height
slug: Web/CSS/max-height
---

<< [Volver](/es/Gu%c3%ada_de_referencia_de_CSS)

### Resumen

La propiedad `max-height` se utiliza para definir la altura máxima de un elemento dado. Impide que el valor de la {{ Cssxref("height", "altura") }} pueda llegar a ser más grande que la de `max-height`.

- {{ Cssxref("initial", "Valor inicial") }}: {{ Cssxref("none", "ninguno") }}
- Se aplica a : elementos de bloque o remplazados
- {{ Cssxref("inheritance", "Valor heredado") }}: no
- Porcentajes: se refiere a la altura del bloque contenedor.
- Medio: {{ Xref_cssvisual() }}
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
table { max-width: 75%; }

form { max-width: none; }
```

### Notas

{{ Cssxref("max-height") }} sobrescribe {{ Cssxref("height") }}, pero **no** {{ Cssxref("min-height") }}.

### Especificaciones

- [CSS 2.1](http://www.w3.org/TR/CSS2/visudet.html#min-max-heights)

### Compatibilidades

| Navegador         | Versión mínima |
| ----------------- | -------------- |
| Internet Explorer | 6              |
| Netscape          | 6              |
| Opera             | 3.5            |

### Ver también

{{ Cssxref("Modelo de caja", "modelo de caja") }}, {{ Cssxref("width", "ancho") }}, {{ Cssxref("-moz-box-sizing", "tamaño de cajas -Mozilla") }}, {{ Cssxref("min-height", "altura mínima") }}, {{ Cssxref("max-height", "altura máxima") }}

Categorías

Interwiki Languages
