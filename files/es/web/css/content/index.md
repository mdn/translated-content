---
title: content
slug: Web/CSS/content
---

{{CSSRef}}

<< [Volver](/es/Gu%c3%ada_de_referencia_de_CSS)

### Resumen

La propiedad `content` se usa junto con los pseudo-elementos `:before` y `:after` para generar contenido que se adjunta antes o después de un selector CSS.

### Características

En **CSS3**

- Value: [ &lt;uri&gt; \',\' ]\</uri>\* [ normal | none | inhibit | &lt;content-list&gt; ]\</content-list>
- Valor inicial: normal
- Se aplica a: todos los elementos y a `::before, ::after, ::alternate, ::marker, ::line-marker, áreas de margin y @footnote`.
- {{ Cssxref("inheritance", "Valor heredado") }}: no
- Porcentajes: N/A
- Medio: todos
- Valor calculada: The specified value with each occurrence of 'normal' expanded as per the prose below.

### Ejemplos

```
p:before
{
content: url("beep.wav")
}

img:before
{
content: attr(alt)
}
```

### Valores

- string: Define el contenido de texto. El valor por defecto es "".
- url: Define una dirección URL
- counter (name)
- counter (name, list-style-type)
- counters (name, string)
- counters (name, string, list-style-type)
- attr(X): Define un atributo de un selector que será mostrado antes/después del selector.
- open-quote
- close-quote
- no-open-quote
- no-close-quote

### Ver también

[(CSS2 en)](https://www.w3.org/TR/REC-CSS2/generate.html#content)
[(CSS2 1 en)](https://www.w3.org/TR/CSS21/generate.html#content)
[(CSS3 en)](https://www.w3.org/TR/css3-content/#inserting3)

Categorías

Interwiki Languages
