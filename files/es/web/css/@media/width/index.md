---
title: width
slug: Web/CSS/@media/width
---

{{cssref}}

El **`width`** [CSS](/es/docs/CSS) {{cssxref("@media")}} media caracteristica puede ser usada para aplicar estilos basados en el ancho de el {{glossary("viewport")}} (o la caja de la pagina, para [paged media](/es/docs/Web/CSS/Paged_media)).

## Syntax

La característica `width` es especificada como {{cssxref("&lt;length&gt;")}} valor que representa el ancho de la ventana gráfica. Es una función de rango, lo que significa que también puede usar el prefijo **`min-width`** and **`max-width`** variantes para consultar valores mínimos y máximos, respectivamente.

## Example

### HTML

```html
<div>Watch this element as you resize your viewport's width.</div>
```

### CSS

```css
/* Exact width */
@media (width: 360px) {
  div {
    color: red;
  }
}

/* Minimum width */
@media (min-width: 35rem) {
  div {
    background: yellow;
  }
}

/* Maximum width */
@media (max-width: 50rem) {
  div {
    border: 2px solid blue;
  }
}
```

### Result

{{EmbedLiveSample('Example','90%')}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
