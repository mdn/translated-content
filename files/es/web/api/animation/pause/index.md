---
title: Animation.pause()
slug: Web/API/Animation/pause
---

{{ APIRef("Web Animations") }}

El método `pause()` de la interfaz {{domxref("Animation")}} de la [Web Animations API](/es/docs/Web/API/Web_Animations_API), suspende la reproducción de la animación.

## Sintaxis

```js
animation.pause();
```

### Parámetros

Ningun.

### Valor devuelto

Ningun.

### Excepciones

- InvalidStateError
  - : La animación {{domxref ("Animation.currentTime", "currentTime")}} no está resuelta `unresolved` (por ejemplo, si nunca se ha reproducido o no se está reproduciendo actualmente) y el tiempo de finalización de la animación es infinito positivo.

Lanza un `InvalidStateError` si el {{domxref("Animation.currentTime", "currentTime")}} de la animación no está resuelto `unresolved` (tal vez no se haya iniciado la reproducción) y el fin de la animación es infinito positivo.

## Ejemplos

`Animation.pause()` es utilizado en varias ocasiones en el juego Alice in Web Animations API Land [Growing/Shrinking Alice Game](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010), porque las animaciones creadas con el método {{domxref("Element.animate()")}} se inician de inmediato y deben ser detenidas manualmente para evitar esto:

```js
// animación de la magdalena que lentamente se está comiendo
var nommingCake = document
  .getElementById("eat-me_sprite")
  .animate(
    [{ transform: "translateY(0)" }, { transform: "translateY(-80%)" }],
    {
      fill: "forwards",
      easing: "steps(4, end)",
      duration: aliceChange.effect.timing.duration / 2,
    },
  );

// realmente solo debe funcionar al hacer click, así que se pausa inicialmente:
nommingCake.pause();
```

Adicionalmente, al restablecer:

```js
// Una función multiusos para pausar las animaciones de Alicia, el pastelito y la botella que dice "drink me."
var stopPlayingAlice = function () {
  aliceChange.pause();
  nommingCake.pause();
  drinking.pause();
};

// Cuando el usuario suelte el cupcake o la botella, pause las animaciones.
cake.addEventListener("mouseup", stopPlayingAlice, false);
bottle.addEventListener("mouseup", stopPlayingAlice, false);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Web Animations API](/es/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}} para otros métodos y propiedades que puedes usar para el control de animaciones en páginas web.
- {{domxref("Animation.pause()")}} para pausar una animación.
- {{domxref("Animation.reverse()")}} para reproducir una animación al revés.
- {{domxref("Animation.finish()")}} para finalizar una animación.
- {{domxref("Animation.cancel()")}} para cancelar una animación.
