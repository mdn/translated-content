---
title: column-span
slug: Web/CSS/column-span
---

{{CSSRef}}

La propiedad **`column-span`** [CSS](/es/docs/Web/CSS) hace posible que un elemento se extienda sobre todas las columnas cuando su valor se establece a `all`.

{{EmbedInteractiveExample("pages/css/column-span.html")}}

```css
/* Keyword values */
column-span: none;
column-span: all;

/* Global values */
column-span: inherit;
column-span: initial;
column-span: unset;
```

A un elemento que se extiende más de una columna se le llama elemento extendido (_spanning element)_.

## Sintaxis

La propiedad `column-span` se especifica como una de las palabras clave listadas a continuación.

### Valores

- `none`
  - : El elemento no se extiende en sobre varias columnas.
- `all`
  - : El elemento se extiende sobre todas las columnas. El contenido en el flujo normal que aparece antes del elemento se equilibra automáticamente en todas las columnas antes de que aparezca el elemento. El elemento establece un nuevo contexto de formato de bloque..

### Sintaxis formal

{{csssyntax}}

## Ejemplo

En este ejemplo, la cabecera se expande sobre todas las columnas del artículo.

### HTML

```html
<article>
  <h2>My Very Special Columns</h2>
  <p>
    This is a bunch of text split into three columns using the CSS `columns`
    property. The text is equally distributed over the columns.
  </p>
</article>
```

### CSS

```css
article {
  columns: 3;
}

h2 {
  column-span: all;
}
```

### Resultado

{{EmbedLiveSample('Example', 'auto', 120)}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
