---
title: Animation.currentTime
slug: Web/API/Animation/currentTime
---

{{APIRef("Web Animations")}}

La propiedad `Animation.currentTime` de la [Web Animations API](/es/docs/Web/API/Web_Animations_API) devuelve y establece el valor del tiempo de la animación en milisegundos, tanto si se está ejecutando como en pausa.

Si la animación carece de un {{domxref("AnimationTimeline", "timeline")}}, está inactiva, o no ha sido reproducida todavía, el valor devuelto por `currentTime` es `null`.

## Sintaxis

```js
var currentTime = Animation.currentTime;
Animation.currentTime = newTime;
```

### Valor

Un número que representa el tiempo actual en milisegundos, o `null` para desactivar la animación.

## Ejemplos

En el juego [Drink Me/Eat Me](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010), la altura de Alicia está animada, por lo que puede cambiar de pequeña a grande y de grande a pequeña. Al inicio del juego, su altura de fija estableciendo el `currentTime` (tiempoActual) a la mitad de la duración total del[`KeyframeEffect`](/es/docs/Web/API/Web_Animations_API/Animation_timing_options):

```js
aliceChange.currentTime = aliceChange.effect.timing.duration / 2;
```

Un modo más genérico para encontrar la marca del 50% en una animación sería :

```js
animation.currentTime =
  animation.effect.getComputedTiming().delay +
  animation.effect.getComputedTiming().activeDuration / 2;
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{domxref("Animation")}} para otros métodos y propiedades que puede usar para controlar la animación de la página web.
- {{domxref("Animation.startTime")}} para programar el tiempo de inicio de una animación.
- [Web Animations API](/es/docs/Web/API/Web_Animations_API)
