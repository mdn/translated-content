---
title: column-count
slug: Web/CSS/column-count
---

{{CSSRef}}

La propiedad [CSS](/es/docs/Web/CSS) **`column-count`** divide el contenido de un elemento en el número de columnas indicado.

{{EmbedInteractiveExample("pages/css/column-count.html")}}

## Sintaxis

```css
/* Keyword value */
column-count: auto;

/* <integer> value */
column-count: 3;

/* Global values */
column-count: inherit;
column-count: initial;
column-count: unset;
```

### Valores

- `auto`
  - : El número de columnas es determinado por otras propiedades CSS, como {{cssxref("column-width")}}.
- `{{cssxref("&lt;integer&gt;")}}`
  - : Es un {{cssxref("&lt;integer&gt;")}} estrictamente positivo que describe el número ideal de columnas en las que el contenido del elemento va a fluir. Si la propiedad {{cssxref("column-width")}} se establece a un valor que no sea `auto`, se limitará a indicar el número máximo permitido de columnas.

### Sintaxis formal

{{csssyntax}}

## Ejemplos

### HTML

```html
<p class="content-box">
  This is a bunch of text split into three columns using the CSS `column-count`
  property. The text is equally distributed over the columns.
</p>
```

### CSS

```css
.content-box {
  column-count: 3;
}
```

### Resultado

{{EmbedLiveSample('Example', 'auto', 120)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Diseño con columnas múltiples](/es/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- [Conceptos básicos de Multicol](/es/docs/Web/CSS/CSS_Columns/Basic_Concepts_of_Multicol)
