---
title: Altura
slug: Web/CSS/@media/height
---

Las [CSS](/es/docs/Web/CSS) [media feature (consulta de medios)](/es/docs/Web/CSS/CSS_media_queries/Using_media_queries#media_features) **`height`** puede ser usada para aplicar estilos basados en la altura del {{glossary("viewport")}} (o la caja de la página, para [paged media](/es/docs/Web/CSS/CSS_paged_media)).

## Sintáxis

La característica `height` es especificada como un valor {{cssxref("&lt;length&gt;")}} representando la altura de la vista (viewport). Es una característica en rangos, lo que siginifica que puede ser prefijada con las variantes **`min-height`** y **`max-height`** para consultar valores mínimos y máximos, respectivamente.

## Ejemplo

### HTML

```html
<div>Watch this element as you resize your viewport's height.</div>
```

### CSS

```css
/* Altura exacta */
@media (height: 360px) {
  div {
    color: red;
  }
}

/* Altura mínima */
@media (min-height: 25rem) {
  div {
    background: yellow;
  }
}

/* Altura máxima */
@media (max-height: 40rem) {
  div {
    border: 2px solid blue;
  }
}
```

### Resultado

{{EmbedLiveSample('Example','90%')}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
