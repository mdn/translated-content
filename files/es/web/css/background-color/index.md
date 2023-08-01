---
title: background-color
slug: Web/CSS/background-color
---

### Resumen

`Background-color` es un propiedad de CSS que define el color de fondo de un elemento, puede ser el valor de un color o la palabra clave `transparent`.

- {{ Cssxref("initial", "Valor inicial") }}: transparente
- Se aplica a: todos los elementos
- {{ Cssxref("inheritance", "Herencia") }}: no
- Percentages: N/A
- Medio: {{ Cssxref("Media:Visual", "visual") }}
- {{ Cssxref("computed value", "Valor calculado") }}: como se haya especificado

### Sintaxis

```
background-color: color | transparent | inherit
```

### Valores

- \<color>
  - : Se puede especificar el color de fondo como un valor RGB hexa-decimal o regular, o utilizando una de las palabras claves predefinidas de color.

<!---->

- transparent
  - : El valor por defecto del color de fondo (`background-color`) es `transparent` tomando así el color del elemento que está justo debajo de él en el apilamiento.

## Ejemplos

### HTML

```html
<div class="exampleone">Lorem ipsum dolor sit amet, consectetuer</div>

<div class="exampletwo">Lorem ipsum dolor sit amet, consectetuer</div>

<div class="examplethree">Lorem ipsum dolor sit amet, consectetuer</div>
```

### CSS

```css
.exampleone {
  background-color: teal;
  color: white;
}

.exampletwo {
  background-color: rgb(153, 102, 153);
  color: rgb(255, 255, 204);
}

.examplethree {
  background-color: #777799;
  color: #ffffff;
}
```

### Result

{{EmbedLiveSample("Ejemplos","200","150")}}

### Notas

(Add links to good colour reference sites here.)

### Especificaciones

- [CSS 1 (en)](http://www.w3.org/TR/CSS1#background-color)
- [CSS 2.1 (en)](http://www.w3.org/TR/CSS21/colors.html#propdef-background-color)
- [CSS 3 (en)](http://www.w3.org/TR/2005/WD-css3-background-20050216/#background-color)

### Compatibilidad de navegadores

TBD: This may be removed in favour of a centralized compatibility chart.

| Navegador           | soporta background-color |
| ------------------- | ------------------------ |
| Internet Explorer 6 | parcialmente             |
| Internet Explorer 7 | parcialmente             |
| Firefox 1.5         | Sí                       |
| Firefox 2           | Sí                       |
| Opera 8.5           | parcialmente             |
| Opera 9             | parcialmente             |
| Konqueror 3.5       | Sí                       |
| Safari 2            | Sí                       |

### Ver también

{{ Cssxref("background") }}, {{ Cssxref("background-attachment") }}, {{ Cssxref("background-color") }}, {{ Cssxref("background-image") }}, {{ Cssxref("background-position") }}, {{ Cssxref("background-repeat") }}
