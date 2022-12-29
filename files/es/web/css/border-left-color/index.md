---
title: border-left-color
slug: Web/CSS/border-left-color
---

### Resumen

`border-left-color` pone el color del borde izquierdo de un elemento,con el valor de el color en hexadecimal o con palabras clave, como azul, verde, rojo `transparente`.

- {{ Xref_cssinitial() }}: {{ Cssxref("color") }} propiedad
- Se aplica a : todos los elementos
- {{ Xref_cssinherited() }}: no
- Porcentajes: N/A
- Media: {{ Xref_cssvisual() }}
- {{ Xref_csscomputed() }}: cuando son tomados de la propiedad 'color',los valores computarizados de 'color'; de otra manera como sean especificados.

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

[Ver El Ejemplo Vivo](/samples/cssref/border.html)

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
