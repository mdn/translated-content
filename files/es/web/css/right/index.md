---
title: right
slug: Web/CSS/right
---

{{ CSSRef() }}

### Sumario

La propiedad `right` especifica parte de la posición de un elemento (posicionado - es decir, con una posición determinada por código).

Para los elementos con una posición absoluta (aquellos que tienen la propiedad {{ Cssxref("position") }}`: absolute` ó `position: fixed`), la propiedad right determina la distancia entre el margen derecho del elemento y el borde derecho de su bloque contenedor.

- {{ Xref_cssinitial() }}: {{ Cssxref("auto") }}
- Se aplica a: [positioned elements](/es/CSS/position)
- {{ Xref_cssinherited() }}: no
- Porcentajes: se refiere al ancho del bloque contenedor.
- Media: {{ Xref_cssvisual() }}
- {{ Xref_csscomputed() }}: valor absoluto, porcentaje ó auto.

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

### Notas

### Especificaciones

- [CSS 2.1](http://www.w3.org/TR/CSS21/visuren.html#propdef-right)
- [CSS 3](http://www.w3.org/Style/CSS/current-work#positioning)

### Compatibilidad entre navegadores

| Navegador         | Versión mínima |
| ----------------- | -------------- |
| Internet Explorer | ?              |
| Firefox           | 1              |
| Netscape          | ?              |
| Opera             | ?              |
| Safari            | ?              |

### Ver también

{{ Cssxref("position") }}, {{ Cssxref("top") }}, {{ Cssxref("bottom") }}, {{ Cssxref("left") }}
