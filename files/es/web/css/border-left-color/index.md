---
title: border-left-color
slug: Web/CSS/border-left-color
---

### Resumen

`border-left-color` pone el color del borde izquierdo de un elemento,con el valor de el color en hexadecimal o con palabras clave, como azul, verde, rojo `transparente`.

- [Valor inicial](/es/docs/Web/CSS/CSS_cascade/Value_processing): {{ Cssxref("color") }} propiedad
- Se aplica a : todos los elementos
- [Heredable](/es/docs/Web/CSS/CSS_cascade/Inheritance): no
- Porcentajes: N/A
- Media: {{cssxref("Media/Visual", "visual")}}
- [Valor calculado](/es/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_e3410028f0a698ddd9f74225ea8d122c0a582707d683fdd173e681e62003518d): cuando son tomados de la propiedad 'color',los valores computarizados de 'color'; de otra manera como sean especificados.

### Sintaxis

```
border-left-color:color | transparent | inherit
```

### Valores

- color
  - : El color puede ser especificado en un valor RGB en hexadecimal, o usando uno de los colores predeterminados
- transparent
  - : El elemento no tiene color de si mismo, en vez este enseña el color detras de este elemento.

### Propiedades parecidas

- {{ Cssxref("border-color") }}
- {{ Cssxref("border-bottom-color") }}
- {{ Cssxref("border-right-color") }}
- {{ Cssxref("border-top-color") }}

### Examples

[Ver El Ejemplo Vivo](https://mdn.dev/archives/media/samples/cssref/border.html)

```
element {
 width: 300px;
        padding: 15px;
        border-bottom-size: 1px;
        border-bottom-style: solid;
        border-bottom-color: #000;
}
```

```
p {
border-style: solid;
border-left-color: #ff0000
}

p {
border-style: solid;
border-left-color: rgb(255,0,0)
}
```

### Notas

- [Color Chart by VisiBone](http://html-color-codes.com/)
