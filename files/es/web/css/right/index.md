---
title: right
slug: Web/CSS/right
---

{{ CSSRef() }}

### Sumario

La propiedad `right` especifica parte de la posición de un elemento (posicionado - es decir, con una posición determinada por código).

Para los elementos con una posición absoluta (aquellos que tienen la propiedad {{ Cssxref("position") }}`: absolute` ó `position: fixed`), la propiedad right determina la distancia entre el margen derecho del elemento y el borde derecho de su bloque contenedor.

- [Valor inicial](/es/docs/Web/CSS/initial_value): {{ Cssxref("auto") }}
- Se aplica a: [positioned elements](/es/docs/Web/CSS/position)
- [Heredable](/es/docs/Web/CSS/Inheritance): no
- Porcentajes: se refiere al ancho del bloque contenedor.
- Media: {{cssxref("Media/Visual", "visual")}}
- [Valor calculado](/es/docs/Web/CSS/computed_value): valor absoluto, porcentaje ó auto.

### Sintaxis

```
right: <length> | <percentage> | auto | inherit ;
```

### Valores

- {{cssxref("&lt;length&gt;")}}
  - : Una longitud, puede ser un valor negativo, cero, o un valor positivo.
- {{cssxref("&lt;percentage&gt;")}}
  - : Un porcentaje del ancho del bloque contenedor.

### Ejemplos

```
div {
   position: absolute;
   right: 20px;
   height: 200px;
   border: 1px solid #000;
}
```

### Especificaciones

{{Specifications}}

### Compatibilidad con navegadores

{{Compat}}

### Ver también

{{ Cssxref("position") }}, {{ Cssxref("top") }}, {{ Cssxref("bottom") }}, {{ Cssxref("left") }}
