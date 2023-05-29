---
title: min-width
slug: Web/CSS/min-width
---

{{ CSSRef() }}

### Sumario

La propiedad `min-width` se usa para determinar la anchura mínima de un elemento. Previene que la propiedad {{ Cssxref("width") }} pueda ser inferior que `min-width`.

- {{ Xref_cssinitial() }}: 0
- Aplicable a: elementos de tipo bloque.
- {{ Xref_cssinherited() }}: no
- Porcentajes: se refieren a la anchura del bloque contenedor.
- Media: {{ Xref_cssvisual() }}
- {{ Xref_csscomputed() }}:

### Sintaxis

min-width: \<longitud> | \<porcentaje> | -moz-max-content | -moz-min-content | -moz-fit-content | -moz-available

### Valores

- **length** : puede ser expresado en px, cm, in
- **percentage** : expresado con "%" es un porcentaje del ancho del elemento contenedor.
- **-moz-max-content** : el ancho intrínseco preferido
- **-moz-min-content** : el ancho intrínseco mínimo
- **-moz-available** : el ancho del contenedor menos el margen horizontal, borde y padding
- **-moz-fit-content** : igual que `-moz-min-content`

### Ejemplos

```
table{min-width: 75%;}

form{min-width: 0;}
```

### Notas

{{ Cssxref("min-width") }} sobrescribe los valores de {{ Cssxref("max-width") }} y {{ Cssxref("width") }}.

### Especificaciones

- [CSS 2.1](http://www.w3.org/TR/CSS2/visudet.html#min-max-widths)

### Compatibilidad entre navegadores

| Navegador         | Versión mínima |
| ----------------- | -------------- |
| Internet Explorer | 6              |
| Netscape          | 6              |
| Opera             | 3.5            |

### Ver también

[box model](/es/CSS/box_model), {{ Cssxref("min-height") }}, {{ Cssxref("-moz-box-sizing") }}, {{ Cssxref("width") }}, {{ Cssxref("max-width") }}
