---
title: text-decoration-line
slug: Web/CSS/text-decoration-line
l10n:
  sourceCommit: 37163d27e0625a83a3f8633fe58b9041867adeaa
---

{{CSSRef}}

La propiedad **`text-decoration-line`** de [CSS](/es/docs/Web/CSS) establece el tipo de decoración que se utiliza en el texto de un elemento, como un subrayado o un sobrerayado.

{{EmbedInteractiveExample("pages/css/text-decoration-line.html")}}

Al configurar varias propiedades de decoración de línea a la vez, puede ser más conveniente usar la propiedad abreviada {{cssxref("text-decoration")}} en su lugar.

## Sintaxis

```css
/* Palabra clave única */
text-decoration-line: none;
text-decoration-line: underline;
text-decoration-line: overline;
text-decoration-line: line-through;
text-decoration-line: blink;

/* Varias palabras clave */
text-decoration-line: underline overline; /* Dos líneas de decoración */
text-decoration-line: overline underline line-through; /* Múltiples líneas de decoración */

/* Valores globales */
text-decoration-line: inherit;
text-decoration-line: initial;
text-decoration-line: revert;
text-decoration-line: revert-layer;
text-decoration-line: unset;
```

La propiedad `text-decoration-line` se especifica como `none`, o **uno o más** valores separados por espacios de la lista a continuación.

### Valores

- `none`
  - : No produce decoración de texto.
- `underline`
  - : Cada línea de texto tiene una línea decorativa debajo.
- `overline`
  - : Cada línea de texto tiene una línea decorativa encima.
- `line-through`
  - : Cada línea de texto tiene una línea decorativa que pasa por su centro.
- `blink` {{deprecated_inline}}
  - : El texto parpadea (alterna entre visible e invisible). Es posible que algunos navegadores no parpadeen el texto. Este valor está **obsoleto** en favor de [animaciones CSS](/es/docs/Web/CSS/animation).

## Definicion formal

{{CSSInfo}}

## Sintaxis formal

{{csssyntax}}

## Ejemplos

### Ejemplo básico

```html
<p class="wavy">¡Aquí hay un texto con subrayado rojo ondulado!</p>
<p class="both">Este texto tiene líneas arriba y abajo.</p>
```

```css
.wavy {
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: red;
}

.both {
  text-decoration-line: underline overline;
}
```

{{EmbedLiveSample('Examples')}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Al configurar varias propiedades de decoración de línea a la vez, puede ser más conveniente usar la propiedad abreviada {{cssxref("text-decoration")}} en su lugar, que también incluye:
  - {{cssxref("text-decoration-style")}}
  - {{cssxref("text-decoration-color")}}
  - {{cssxref("text-decoration-thickness")}}
- {{cssxref("text-underline-offset")}}
