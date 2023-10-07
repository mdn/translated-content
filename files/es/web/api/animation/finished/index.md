---
title: Animation.finished
slug: Web/API/Animation/finished
---

{{ APIRef("Web Animations") }}

La propiedad de solo-lectura de `Animation.finished` de la [Web Animations API](/es/docs/Web/API/Web_Animations_API) devuelve un {{jsxref("Promise")}} que se resuelve una vez que la animación a terminado de reproducirse.

> **Nota:** Una vez que la reproducción de la animación abandona el estado `finished` (es decir, la reproducción se está ejecutando otra vez), Un nuevo `Promise` es creado para esta propiedad. El nuevo `Promise` será resuelto cuando se haya completado la actual secuencia de la animación.

## Sintaxis

```js
var animationsPromise = Animation.finished;
```

### Valor

Un objeto {{jsxref("Promise")}} que se resuelve cuando haya finalizado la reproducción de la animación.

## Ejemplos

El siguiente código espera a que todas las animaciones que se ejecutan en el elemento `elem` hayan terminado, después elimina el elemento del arbol del DOM:

```js
Promise.all(
  elem.getAnimations().map(function (animation) {
    return animation.finished;
  }),
).then(function () {
  return elem.remove();
});
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{domxref("KeyframeEffect")}}
- [Web Animations API](/es/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
