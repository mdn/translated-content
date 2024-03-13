---
title: Animation.play()
slug: Web/API/Animation/play
---

{{ APIRef("Web Animations") }}

El método `play()` de la interfaz {{ domxref("Animation") }} de la [Web Animations API](/es/docs/Web/API/Web_Animations_API) inicia o reanuda la reproducción de una animación. Si la animación ha finalizado, llamando a `play()` reinicia la animación y la reproduce desde el principio.

## Sintaxis

```js
animation.play();
```

### Parámetros

Ningun.

### Valor devuelto

{{jsxref("undefined")}}

## Ejemplo

En el ejemplo [Growing/Shrinking Alice Game](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010) , hacer click o tocar el pastel hace que la animación de crecimiento de Alicia (`aliceChange`) sea reproducida hacia adelante, causando que Alicia se haga más grande, ademas de desencadenar la animación del pastel. Dos `Animation.play()` y un `EventListener`:

```js
// El pastel tiene su propia animación:
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

// Pausa la animación del pastel para que no se reproduzca inmediatamente.
nommingCake.pause();

// Esta función se reproducirá cuando el usuario haga click o toque
var growAlice = function () {
  // Reproduce la animación de Alicia.
  aliceChange.play();

  // Reproduce la animación del pastel.
  nommingCake.play();
};

// Cuando el usuario hace click o toca, llama a growAlice, para reproducir todas las animaciones.
cake.addEventListener("mousedown", growAlice, false);
cake.addEventListener("touchstart", growAlice, false);
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
