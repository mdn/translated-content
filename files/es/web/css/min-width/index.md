---
title: min-width
slug: Web/CSS/min-width
---

{{ CSSRef() }}

### Sumario

La propiedad `min-width` se usa para determinar la anchura mínima de un elemento. Previene que la propiedad {{ Cssxref("width") }} pueda ser inferior que `min-width`.

- [Valor inicial](/es/docs/Web/CSS/initial_value): 0
- Aplicable a: elementos de tipo bloque.
- [Heredable](/es/docs/Web/CSS/Inheritance): no
- Porcentajes: se refieren a la anchura del bloque contenedor.
- Media: {{cssxref("Media/Visual", "visual")}}
- [Valor calculado](/es/docs/Web/CSS/computed_value):

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

{{Specifications}}

### Compatibilidad con navegadores

{{Compat}}

### Ver también

[box model](/es/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model), {{ Cssxref("min-height") }}, {{ Cssxref("-moz-box-sizing") }}, {{ Cssxref("width") }}, {{ Cssxref("max-width") }}
