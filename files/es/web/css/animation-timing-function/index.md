---
title: animation-timing-function
slug: Web/CSS/animation-timing-function
---

{{CSSRef}}{{SeeCompatTable}}

## Resumen

La propiedad [CSS](/es/docs/CSS) **`animation-timing-function`** especifica cómo una animación CSS debe avanzar sobre la duración de cada ciclo. Los posibles valores son una o varias {{cssxref("&lt;timing-function&gt;")}}.

Para animaciones con keyframes, la timing function se aplica entre los [keyframes](/es/docs/Web/CSS/@keyframes) en lugar de sobre toda la animación. Es decir, se aplica al comienzo del keyframe y al final del mismo.

Una timing function definida dentro de un keyframe afecta a ese keyframe. Si no está definida para el keyframe, se aplica la timing function para la animación en general.

A menudo, es conveniente usar la propiedad abreviada {{cssxref("animation")}} para ajustar las propiedades de animación una sola vez.

{{cssinfo}}

## Sintaxis

```css
/* Keyword values */
animation-timing-function: ease;
animation-timing-function: ease-in;
animation-timing-function: ease-out;
animation-timing-function: ease-in-out;
animation-timing-function: linear;
animation-timing-function: step-start;
animation-timing-function: step-end;

/* Function values */
animation-timing-function: cubic-bezier(0.1, 0.7, 1, 0.1);
animation-timing-function: steps(4, end);

/* Multiple animations */
animation-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1, 0.1);

/* Global values */
animation-timing-function: inherited;
animation-timing-function: initial;
animation-timing-function: unset;
```

### Valores

- `<timingfunction>`
  - : Cada {{cssxref("&lt;timing-function&gt;")}} representa la timing function vinculada a la propiedad correspondiente a animar, como se define en {{cssxref ("animación-propiedad")}}.

### Sintaxis formal

{{csssyntax}}

## Ejemplos

Visita [animaciones CSS](/es/CSS/Usando_animaciones_CSS) para ver algunos ejemplos.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Consulte también

- [Usando animaciones CSS](/es/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- {{domxref("AnimationEvent", "AnimationEvent")}}
