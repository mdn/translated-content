---
title: Animation.timeline
slug: Web/API/Animation/timeline
---

{{ APIRef("Web Animations") }}

La propiedad `Animation.timeline` de la interfaz {{domxref ("Animation")}} devuelve o establece el {{domxref ("AnimationTimeline", "timeline")}} asociado a esta animación. Un 'timeline' es una fuente de valores de tiempo para propósitos de sincronización, y es un objeto basado en {{domxref ("AnimationTimeline")}}. Por defecto, la línea de tiempo de la animación y la línea de tiempo de {{domxref ("Document")}} son las mismas.

## Sintaxis

```js
var animationsTimeline = Animation.timeline;

Animation.timeline = newTimeline;
```

### Valor

Un {{domxref ("AnimationTimeline", "timeline object", "", 1)}} para usar como la fuente de sincronización para la animación, o `null` para usar el predeterminado, que es el 'timeline' del {{domxref ("Document")}}.

## Ejemplos

Aquí establecemos que la línea de tiempo `timeline` de la animación sea la misma que la del tiempo del documento (por cierto, esta es la `timeline` predeterminada para todas las animaciones):

```js
animation.timeline = document.timeline;
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Web Animations API](/es/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
- {{domxref("AnimationTimeline")}} el objeto padre del que heredan todas las timeLine.
- {{domxref("DocumentTimeline")}} el único objeto timeLine disponible en este momento.
- {{domxref("Document.timeline")}} el timeLine predeterminado asignado a todas las animaciones.
