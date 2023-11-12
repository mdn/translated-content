---
title: "::first-line (:first-line)"
slug: Web/CSS/::first-line
---

{{CSSRef}}

El [Pseudoelemento](/es/docs/Web/CSS/Pseudoelementos) **`::first-line`** aplica estilos a la primera línea de un [elemento de bloque](/es/docs/Web/HTML/Block-level_elements). Nótese que la longitud de la primera línea depende de muchos factores, incluyendo el ancho del elemento, el ancho del documento y el tamaño de fuente del texto.

```css
/* Selecciona la primera línea de un <p> */
p::first-line {
  color: red;
}
```

> **Nota:** CSS3 introdujo la notación `::first-line` (con doble dos puntos) para distinguir [pseudo-clases](/es/docs/Web/CSS/Pseudo-classes) de [pseudo-elementos](/es/docs/Web/CSS/Pseudo-elements). Los navegadores también aceptan `:first-line`, añadido en CSS2.

## Propiedades permitidas

Sólo unas pocas propiedades de CSS se pueden usar con el pseudoelemento `::first-line`:

- Todas las propiedades de fuente: {{Cssxref("font")}}, {{cssxref("font-kerning")}}, {{Cssxref("font-style")}}, {{Cssxref("font-variant")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-synthesis")}}, {{cssxref("font-feature-settings")}}, {{cssxref("font-language-override")}}, {{Cssxref("font-weight")}}, {{Cssxref("font-size")}}, {{cssxref("font-size-adjust")}}, {{cssxref("font-stretch")}}, and {{Cssxref("font-family")}}
- Todas las propiedades de fondo: {{Cssxref("background-color")}}, {{cssxref("background-clip")}}, {{Cssxref("background-image")}}, {{cssxref("background-origin")}}, {{Cssxref("background-position")}}, {{Cssxref("background-repeat")}}, {{cssxref("background-size")}}, {{Cssxref("background-attachment")}}, and {{cssxref("background-blend-mode")}}
- La propiedad {{cssxref("color")}}
- {{cssxref("word-spacing")}}, {{cssxref("letter-spacing")}}, {{cssxref("text-decoration")}}, {{cssxref("text-transform")}}, and {{cssxref("line-height")}}
- {{cssxref("text-shadow")}}, {{cssxref("text-decoration")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}}, and {{cssxref("vertical-align")}}.

## Sintaxis

{{csssyntax}}

## Ejemplo

### HTML

```html
<p>
  Los estilos sólo se aplicarán en la primera línea de este párrafo.
  Posteriormente, todo el texto tendrá el estilo normal. ¿Ves?
</p>

<span
  >La primera línea de este elemento no recibe ningún estilo especial, porque no
  es un elemento de bloque.</span
>
```

### CSS

```css
::first-line {
  color: blue;
  text-transform: uppercase;

  /* ADVERTENCIA: NO USES ESTOS*/
  /* Muchas propiedades son inválidas en pseudoelementos ::first-line */
  margin-left: 20px;
  text-indent: 20px;
}
```

### Resultado

{{EmbedLiveSample('Example', 350, 160)}}

## Especificaciones

{{Specifications}}

## Ver También

- {{cssxref("::first-letter")}}
