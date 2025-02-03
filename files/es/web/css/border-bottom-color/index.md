---
title: border-bottom-color
slug: Web/CSS/border-bottom-color
---

{{CSSRef}}

### Resumen

La propiedad `border-bottom-color` define el color del borde inferior de un elemento, con la ayuda de un valor de color o con la palabra clave `transparent`.

- {{ Cssxref("initial", "Valor inicial") }}: propiedad {{ Cssxref("color") }}
- Se aplica a: todos los elementos
- {{ Cssxref("inheritance", "Valor heredado") }}: non
- Porcentajes: N/A
- Medio : {{cssxref("Media/Visual", "visual")}}
- {{ Cssxref("computed value", "Valor calculado") }}: como se especifique o si proviene de la propiedad {{ Cssxref("color") }}, será el valor {{ Cssxref("color") }}.

### Sintaxis

```
border-bottom-color: couleur | transparent | inherit
```

### Valores

- color
  - : puede especificarse por un valor RGB hexa-decimal o regular o por una palabra clave predefinida (_azul_).

<!---->

- transparent
  - : el elemento no tiene color propio, muestra el color del elemento atrás suyo en el árbol de apilado.

### Propiedades relacionadas

- {{ Cssxref("border-color") }}
- {{ Cssxref("border-left-color") }}
- {{ Cssxref("border-right-color") }}
- {{ Cssxref("border-top-color") }}

### Ejemplos

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

### Notas

- [Color Chart by VisiBone (en)](http://html-color-codes.com/)
- [Sélecteur de couleur, chez yoyodesign (fr)](http://www.yoyodesign.org/outils/ncolor/ncolor.php?langue=fr)

### Especificaciones

{{Specifications}}

### Compatibilidad con navegadores

{{Compat}}

### Ver también

{{ Cssxref("border-bottom") }}, {{ Cssxref("border-color") }}, {{ Cssxref("border-bottom-style") }}, {{ Cssxref("border-bottom-width") }}
