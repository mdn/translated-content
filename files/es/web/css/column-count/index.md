---
title: column-count
slug: Web/CSS/column-count
---

La propiedad [CSS](/es/docs/Web/CSS) **`column-count`** divide el contenido de un elemento en el número de columnas indicado.

{{InteractiveExample("CSS Demo: column-count")}}

```css interactive-example-choice
column-count: 2;
```

```css interactive-example-choice
column-count: 3;
```

```css interactive-example-choice
column-count: 4;
```

```css interactive-example-choice
column-count: auto;
column-width: 8rem;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
#example-element {
  width: 100%;
  text-align: left;
}
```

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
- [Conceptos básicos de Multicol](/es/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
