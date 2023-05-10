---
title: border-bottom-color
slug: Web/CSS/border-bottom-color
---

<< [Volver](/es/Guía_de_referencia_de_CSS)

### Resumen

La propiedad `border-bottom-color` define el color del borde inferior de un elemento, con la ayuda de un valor de color o con la palabra clave `transparent`.

- {{ Cssxref("initial", "Valor inicial") }}: propiedad {{ Cssxref("color") }}
- Se aplica a: todos los elementos
- {{ Cssxref("inheritance", "Valor heredado") }}: non
- Porcentajes: N/A
- Medio : {{ Xref_cssvisual() }}
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

### Notas

- [Color Chart by VisiBone (en)](http://html-color-codes.com/)
- [Sélecteur de couleur, chez yoyodesign (fr)](http://www.yoyodesign.org/outils/ncolor/ncolor.php?langue=fr)

### Especificaciones

- [CSS 2.1 (en)](http://www.w3.org/TR/CSS21/box.html#propdef-border-bottom-color)
- [CSS 3 (en)](http://www.w3.org/TR/css3-background/#border-bottom)

### Compatibilidades

| Navegador         | Versión mínima |
| ----------------- | -------------- |
| Internet Explorer | 4              |
| Firefox           | 1              |
| Netscape          | 6              |
| Opera             | 3.5            |

### Ver también

{{ Cssxref("border-bottom") }}, {{ Cssxref("border-color") }}, {{ Cssxref("border-bottom-style") }}, {{ Cssxref("border-bottom-width") }}

Categorías

Interwiki Languages
