---
title: Altura
slug: Web/CSS/@media/height
tags:
  - '@media'
  - CSS
  - Media Queries
  - Referencia
  - características media
translation_of: Web/CSS/@media/height
original_slug: Web/CSS/@media/altura
---
{{cssref}}

Las [CSS](/es/docs/CSS) [media feature (consulta de medios)](/es/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features) **`height`** puede ser usada para aplicar estilos basados en la altura del {{glossary("viewport")}} (o la caja de la página, para [paged media](/es/docs/Web/CSS/Paged_media)).

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

| Especificación                                                           | Estado                                   | Comentario                                                                |
| ------------------------------------------------------------------------ | ---------------------------------------- | ------------------------------------------------------------------------- |
| {{SpecName('CSS4 Media Queries', '#height', 'height')}} | {{Spec2('CSS4 Media Queries')}} | El valor ahora puede ser negativo, en cuyo caso se calcula como negativo. |
| {{SpecName('CSS3 Media Queries', '#height', 'height')}} | {{Spec2('CSS3 Media Queries')}} | Definición inicial. El valor debe ser positivo.                           |

## Compatibilidad con navegadores

{{Compat("css.at-rules.media.height")}}
