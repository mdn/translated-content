---
title: background-attachment
slug: Web/CSS/background-attachment
---

{{CSSRef}}

### Resumen

La propiedad CSS **`background-attachment`** determina si la posición de la imagen de fondo será **fija** dentro de la pantalla o **se desplazará** con su bloque contenedor.

- {{ Cssxref("initial", "Inicial") }}: desplazamiento (_scroll_)
- Se aplica a: todos los elementos
- {{ Cssxref("inheritance", "Herencia") }}: no
- Porcentajes: N/A
- Medio: {{ Cssxref("Media:Visual", "visual") }}
- {{ Cssxref("computed value", "Valor calculada") }}: como se haya especificado

### Sintaxis

```
background-attachment: scroll | fixed | inherit
```

### Valores

- scroll
  - : Si `scroll` es especificado, la imagen de fondo se moverá dentro de la pantalla junto al bloque que la contiene.
- fixed
  - : Si `fixed` es especificado, la imagen de fondo estará fija en la pantalla y no se moverá con el bloque contenedor.

## Ejemplos

### Ejemplo simple

#### CSS

```css
p {
  background-image: url("starsolid.gif");
  background-attachment: fixed;
}
```

#### HTML

```html
<p>
  There were doors all round the hall, but they were all locked; and when Alice
  had been all the way down one side and up the other, trying every door, she
  walked sadly down the middle, wondering how she was ever to get out again.
</p>
```

#### Resultado

{{EmbedLiveSample("Simple_example")}}

### Soporta múltiples imagenes de fondo

Esta propiedad soporta multiples imágenes de fondo. Puedes especificar un `<attachment>` diferente por cada imagen de fondo, separado por comas. Cada imagen es asociada con el correspondiente valor de \<attachment>, especificado desde el primero hasta el último.

#### CSS

```css
p {
  background-image: url("starsolid.gif"), url("startransparent.gif");
  background-attachment: fixed, scroll;
  background-repeat: no-repeat, repeat-y;
}
```

#### HTML

```html
<p>
  There were doors all round the hall, but they were all locked; and when Alice
  had been all the way down one side and up the other, trying every door, she
  walked sadly down the middle, wondering how she was ever to get out again.
  Suddenly she came upon a little three-legged table, all made of solid glass;
  there was nothing on it except a tiny golden key, and Alice's first thought
  was that it might belong to one of the doors of the hall; but, alas! either
  the locks were too large, or the key was too small, but at any rate it would
  not open any of them. However, on the second time round, she came upon a low
  curtain she had not noticed before, and behind it was a little door about
  fifteen inches high: she tried the little golden key in the lock, and to her
  great delight it fitted!
</p>
```

#### Resultado

{{EmbedLiveSample("Multiple_background_image_support")}}

### Especificaciones

- [CSS 1](http://www.w3.org/TR/CSS1#background-attachment)
- [CSS 2.1](http://www.w3.org/TR/CSS21/colors.html#propdef-background-attachment)
- [CSS 3](http://www.w3.org/TR/2005/WD-css3-background-20050216/#background-attachment)

### Compatibilidad de navegadores

| Navegador         | Versión mínima |
| ----------------- | -------------- |
| Internet Explorer | 4              |
| Firefox           | 1              |
| Netscape          | 6              |
| Opera             | 3.5            |

### Ver también

{{ Cssxref("background") }}, {{ Cssxref("background-attachment") }}, {{ Cssxref("background-color") }}, {{ Cssxref("background-image") }}, {{ Cssxref("background-position") }}, {{ Cssxref("background-repeat") }}
