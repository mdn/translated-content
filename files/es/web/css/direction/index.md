---
title: direction
slug: Web/CSS/direction
---

{{ CSSRef() }}

### Resumen

La propiedad `direction` se utiliza para indicar en que dirección fluye el texto: {{ Cssxref("rtl") }} para hebreo o árabe y {{ Cssxref("ltr") }} para otros tipos de escritura. Esto tendría que especificarse como parte del documento (por ejemplo, usando el código `dir` en HTML) en lugar que directamente en la hoja de estilo CSS.

Esta propiedad establece el sentido de base del texto para los elementos de tipo bloque y la dirección para los elementos creados por la propiedad {{ Cssxref("unicode-bidi") }}. Además, asigna el valor por defecto para la alineación de texto y de elementos tipo bloque dentro de las celdas de una tabla.

- {{ Cssxref("initial", "Valor inicial") }}: {{ Cssxref("ltr", "de izquierda a derecha") }}
- Se aplica a: todos los elementos.
- {{ Cssxref("inheritance", "Valor heredado") }}: si
- Porcentajes: n/a
- Medio: {{ Cssxref("Media:Visual", "visual") }}
- {{ Cssxref("computed value", "Valor calculado") }}:

### Sintaxis

```
direction: [ ltr | rtl | inherit ] ;
```

### Valores

- ltr
  - : Valor por defecto de `direction`. El contenido, texto y otros elementos fluyen de izquierda a derecha.
- rtl
  - : El contenido, texto y otros elementos van de derecha a izquierda.

Para que la propiedad `direction` tenga algún efecto en elementos de tipo en línea (_inline_), el valor de la propiedad {{ Cssxref("unicode-bidi") }} debe ser `embed` o `override`.

### Ejemplos

```
blockquote {
  direction : rtl ;
}
```

### Notas

Al contrario que el atributo `dir` en HTML, la propiedad `direction` no es heredada desde las columnas de una tabla a las celdas, ya que la herencia en CSS sigue el árbol del documento, y las celdas de una tabla son parte de las filas y no de las columnas.

### Especificaciones

- [CSS 2.1](https://www.w3.org/TR/CSS21/visuren.html#direction)
- [CSS 3 Text Module](https://www.w3.org/TR/2003/CR-css3-text-20030514/#direction)

### Ver también

{{ Cssxref("unicode-bidi") }} - {{ Cssxref("ltr") }} - {{ Cssxref("rtl") }}

Categorías

Interwiki Languages
