---
title: Animation.startTime
slug: Web/API/Animation/startTime
tags:
  - API
  - Animacion
  - Animaciones Web
  - Experimental
  - Interface
  - Reference
  - startTime
translation_of: Web/API/Animation/startTime
---
{{ SeeCompatTable() }}{{ APIRef("Web Animations") }}

La propiedad **`Animation.startTime`** de la interfaz {{domxref ("Animación")}} es un valor de punto flotante de doble precisión que indica el tiempo programado en el que debe comenzar la reproducción de una animación.

El **start time** **(tiempo de inicio)** es el valor de tiempo de su {{domxref("timeline", "DocumentTimeline")}}cuando su objetivo {{domxref("KeyframeEffect")}} está programado para comenzar la reproducción. El **start time** **(tiempo de inicio)** de una animación inicialmente no está resuelto (lo que significa que es `null` porque no tiene valor).

## Sintaxis

    var animationStartedWhen = Animation.startTime;

    Animation.startTime = newStartTime;

### Valor

Un número de punto flotante que representa el tiempo actual en milisegundos, o nulo si no se establece ningún valor de tiempo. Puede leer este valor para determinar en qué momento está establecido el punto de inicio, y puede modificarlo para que la animación comience en un momento diferente.

## Ejemplos

En el ejemplo [Running on Web Animations API example](http://codepen.io/rachelnabors/pen/zxYexJ?editors=0010), podemos sincronizar todos los nuevos gatos animados dándoles el mismo tiempo de inicio `startTime` que el gato original:

```js
var catRunning = document.getElementById ("withWAAPI").animate(keyframes, timing);

/* Una función que crea nuevos gatos. */
function addCat(){
  var newCat = document.createElement("div");
  newCat.classList.add("cat");
  return newCat;
}

/* Esta es la función que agrega un gato a la columna WAAPI */
function animateNewCatWithWAAPI() {
  // crea unnuevo gato
  var newCat = addCat();

  // Animar a dicho gato con la función "animate" de WAAPI
  var newAnimationPlayer = newCat.animate(keyframes, timing);

  // Establece que el punto de inicio de la animación sea el mismo que el original .cat#withWAAPI
  newAnimationPlayer.startTime = catRunning.startTime;

  // Agrega el gato a la pila.
  WAAPICats.appendChild(newCat);
}
```

## Especificaciones

| Specification                                                                                                | Status                               | Comment         |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------ | --------------- |
| {{SpecName('Web Animations', '#dom-animation-starttime', 'Animation.startTime' )}} | {{Spec2('Web Animations')}} | Editor's draft. |

## Compatibilidad del navegador

{{Compat("api.Animation.startTime")}}

## Ver también

- [Web Animations API](/es/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
- {{domxref("Animation.currentTime")}} para el tiempo actual de la animación.
