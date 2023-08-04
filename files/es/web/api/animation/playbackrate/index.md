---
title: Animation.playbackRate
slug: Web/API/Animation/playbackRate
---

{{APIRef("Web Animations")}}

La propiedad `Animation.playbackRate` de la [Web Animations API](/es/docs/Web/API/Web_Animations_API) devuelve o establece la velocidad de reproducción de la animación.

Las animaciones tienen un **playback rate** que proporciona un factor de escala para el cambio de velocidad de la animación {{domxref("DocumentTimeline", "timeline")}} valores del estado actual de la linea de tiempo de la animación. La velocidad de reproducción inicial es `1`.

## Sintaxis

```js
var currentPlaybackRate = Animation.playbackRate;

Animation.playbackRate = newRate;
```

### Valor

Toma un número que puede ser 0, negativo o positivo. Los valores negativos invierten la animación. El valor es un factor de escala, por lo que, por ejemplo, un valor de 2 duplicaría la velocidad de reproducción.

> **Nota:** si establecemos el `playbackRate` a `0` pausa la animación de manera efectiva (sin embargo, su {{domxref("Animation.playstate", "playstate")}} no se convierte necesariamente en `paused`).

## Ejemplos

En el ejemplo [Growing/Shrinking Alice Game](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010) , hacer click o tocar la botella, hace que la animación de crecimiento de Alicia (`aliceChange`) se invierta para reducirse:

```js
var shrinkAlice = function () {
  aliceChange.playbackRate = -1;
  aliceChange.play();
};

// Con un toque o un click, Alicia se encogerá.
bottle.addEventListener("mousedown", shrinkAlice, false);
bottle.addEventListener("touchstart", shrinkAlice, false);
```

Por el contrario, hacer click en el pastel hace que "crezca" reproduciendo `aliceChange` hacia adelante otra vez:

```js
var growAlice = function () {
  aliceChange.playbackRate = 1;
  aliceChange.play();
};

// Con un toque o un click, Alicia crecerá.
cake.addEventListener("mousedown", growAlice, false);
cake.addEventListener("touchstart", growAlice, false);
```

En otro ejemplo, [Red Queen's Race Game](https://codepen.io/rachelnabors/pen/PNGGaV?editors=0010), Alicia y La Reina Roja están ralentizandose constantemente:

```js
setInterval(function () {
  // Asegúrate de que la velocidad de reproducción nunca descienda por debajo de .4

  if (redQueen_alice.playbackRate > 0.4) {
    redQueen_alice.playbackRate *= 0.9;
  }
}, 3000);
```

Pero hacer click o hacer tapping(pasar el puntero) sobre ellos hace que aceleren multiplicando su `playbackRate` (velocidad de reproducción):

```js
var goFaster = function () {
  redQueen_alice.playbackRate *= 1.1;
};

document.addEventListener("click", goFaster);
document.addEventListener("touchstart", goFaster);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Web Animations API](/es/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
