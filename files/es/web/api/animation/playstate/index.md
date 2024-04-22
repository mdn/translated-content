---
title: Animation.playState
slug: Web/API/Animation/playState
---

{{APIRef("Web Animations")}}

La propiedad `Animation.playState` de la [Web Animations API](/es/docs/Web/API/Web_Animations_API) devuelve y establece un valor enumerado que describe el estado de reproducción de una animación.

> **Nota:** Esta propiedad es de solo lectura para las Animaciones y Transiciones en CSS.

## Sintaxis

```js
var currentPlayState = Animation.playState;

Animation.playState = newState;
```

### Valor

- `idle(inactivo)`
  - : El tiempo actual de la animación no está resuelto y no hay tareas pendientes.
- `pending(pendiente)`
  - : La animación está esperando que se complete una tarea pendiente.
- `running(funcionando)`
  - : La animación se está ejecutando.
- `paused(pausado)`
  - : La animación se ha suspendido y la propiedad {{domxref ("Animation.currentTime")}} no se está actualizando.
- `finished(finalizado)`
  - : La animación ha alcanzado uno de sus límites y la propiedad {{domxref ("Animation.currentTime")}} no se está actualizando.

## Ejemplo

En el ejemplo [Growing/Shrinking Alice Game](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010) , los jugadores pueden tener un final con (Alicia llorando en un mar de lágrimas) [Alice crying into a pool of tears](https://codepen.io/rachelnabors/pen/EPJdJx?editors=0010). En el juego, por razones de rendimiento, las lágrimas solo se deben animar cuando son visibles. Por lo tanto, deben detenerse tan pronto como estén animadas, de esta manera:

```js
// Configurando las animaciones de lágrimas

tears.forEach(function (el) {
  el.animate(tearsFalling, {
    delay: getRandomMsRange(-1000, 1000), // cada lágrima aleatoria
    duration: getRandomMsRange(2000, 6000), // cada lágrima aleatoria
    iterations: Infinity,
    easing: "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
  });
  el.playState = "paused";
});

// Reproduce las lágrimas cayendo cuando el final necesita mostrarlas.

tears.forEach(function (el) {
  el.playState = "playing";
});

// Reinicia la animación de las lágrimas y la detiene.

tears.forEach(function (el) {
  el.playState = "paused";
  el.currentTime = 0;
});
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Web Animations API](/es/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}} para otros métodos y propiedades que puede usar para controlar la animación de la página web.
- Los métodos {{domxref("Animation.play()")}}, {{domxref("Animation.pause()")}}, {{domxref("Animation.finish()")}} pueden establecer el `playState` de un `Animation` .
