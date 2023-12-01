---
title: Animation.onfinish
slug: Web/API/Animation/finish_event
---

{{ APIRef("Web Animations") }}

La propiedad `onfinish` de la interfaz {{domxref("Animation")}} (de la [Web Animations API](/es/docs/Web/API/Web_Animations_API)) es el manejador de eventos para el evento [`finish`](/es/docs/Web/Reference/Events/finish). Este evento se envía cuando la animación termina de reproducirse.

El evento `finish` ocurre cuando la reproducción se completa de forma natural, así como cuando se llama al método {{domxref("Animation.finish()")}} para que la animación termine inmediatamente.

> **Nota:** El estado de reproducción `"paused"` reemplaza al estado `"finished"`. Si la animación está pausada y finalizada, el estado`"paused"` será el único reportado. Puedes forzar el estado de la animación a `"finished"` configurando su {{domxref("Animation.startTime", "startTime")}} a `document.timeline.currentTime - (Animation.currentTime * Animation.playbackRate)`.

## Sintaxis

```js
var finishHandler = Animation.onfinish;

Animation.onfinish = finishHandler;
```

### Valor

Una función que debe ser llamada para manejar el evento [`finish`](/es/docs/Web/Reference/Events/finish), o `null` si no se establece ningún manejador para el evento `finish`.

## Ejemplos

`Animation.onfinish` es utilizado en varias ocasiones en el juego de Alice in Web Animations API Land [Growing/Shrinking Alice Game](https://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010). Aquí hay una instancia en la que agregamos eventos de puntero a un elemento después de que su animación de opacidad se haya desvanecido:

```js
// Agrega una animación a los créditos finales del juego.
var endingUI = document.getElementById("ending-ui");
var bringUI = endingUI.animate(keysFade, timingFade);

// Pone en Pausa dichos créditos.
bringUI.pause();

// Esta función elimina los eventos de puntero en los créditos.
hide(endingUI);

// Cuando los créditos se hayan desvanecido,
// volvemos a agregar los eventos de puntero cuando terminen.
bringUI.onfinish = function () {
  endingUI.style.pointerEvents = "auto";
};
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Web Animations API](/es/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
- {{domxref("Animation.finish()")}}
