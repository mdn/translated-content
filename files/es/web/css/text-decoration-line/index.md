---
title: text-decoration-line
slug: Web/CSS/text-decoration-line
---

{{CSSRef}}

La propiedad [CSS](/es/docs/CSS) **`text-decoration-line`** establece el tipo de decoración de línea que se agregará a un elemento.

{{EmbedInteractiveExample("pages/css/text-decoration-line.html")}}

When setting multiple line-decoration properties at once, it may be more convenient to use the {{cssxref("text-decoration")}} shorthand property instead.

La decoración _underline_ posiciona el subrayado debajo del texto, la decoración _overline_ posiciona el subrayado encima del texto, y la decoración _line-through_ posiciona la línea en medio del texto.

## Sintaxis

```css
/* Valores de clave */
text-decoration-line: none;
text-decoration-line: underline;
text-decoration-line: overline;
text-decoration-line: line-through;
text-decoration-line: underline overline;                /* Dos líneas de decoración */
text-decoration-line: overline underline line-through;   /* Múltiples líneas de decoración */

/* Valores globales */
text-decoration-line: inherit;
text-decoration-line: initial;
text-decoration-line: unset;
```

### Valores

- `none`
  - : No agrega decoración al texto.
- `underline`
  - : Cada línea del texto lleva subrayado inferior.
- `overline`
  - : Cada línea del texto lleva subrayado superior.
- `line-through`
  - : Cada línea del texto lleva una línea atravesando por en medio del mismo.
- `blink {{deprecated_inline}}`
  - : El texto parpadea (se alterna entre visible e invisible). Según los ajustes del agente usuario, el texto puede simplemente no parpadear. Este valor está en **desuso**, en favor de las [Animaciones](/es/docs/Web/CSS/animation).
- `-moz-anchor-decoration`{{non-standard_inline}}
  - : El texto es decorado con el estilo de un ancla; no adecuado para contenido web.

### Sintaxis formal

{{csssyntax}}

## Ejemplo

HTML

```html
<p>¡Aquí hay texto con subrayado inferior rojo ondulado!</p>
```

CSS

```css
p {
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: red;
}
```

{{EmbedLiveSample('example', 300, 50)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- When setting multiple line-decoration properties at once, it may be more convenient to use the {{cssxref("text-decoration")}} shorthand property instead.
