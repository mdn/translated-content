---
title: Controles del ratón
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Track_the_score_and_win", "Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Terminando")}}

Este es el noveno paso de 10 del [tutorial Canvas para el desarrollo de juegos](/es/docs/Games/Workflows/Breakout_game_from_scratch). Puedes encontrar el código y pegarle un vistazo después de completar esta lección [Gamedev-Canvas-workshop/lesson9.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson09.html).

El juego en sí está terminado, así que ahora vamos a pulirlo. Ya le hemos puesto el control del teclado y ahora le añadiremos el control del ratón.

## Detectar el movimiento del ratón

Detectar el movimiento del ratón es más fácil que detectar las pulsaciones de las teclas. Todo lo que necesitamos es un añadir "escuchador" al evento [`mousemove`](/es/docs/Web/Reference/Events/mousemove).Añade esta línea destrás de los otros "listeners", justo debajo del evento `keyup`:

```js
document.addEventListener("mousemove", mouseMoveHandler, false);
```

## Asociar el movimiento de la pala con el movimiento del ratón

Podemos cambiar la posición de la pala basándonos en las coordenadas del puntero del ratón. Eso es lo que hace la función siguiente. Añádela detrás de la línea que acabas de añadir:

```js
function mouseMoveHandler(e) {
  var relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}
```

En esta función calculamos un valor `relativeX`, que es la posición horizontal del ratón en el "viewport" (`e.clientX`), menos la distancia entre el borde izquierdo del terreno de juego y el borde izquierdo del "viewport" (`canvas.offsetLeft`).

Si el valor resultante es mayor que cero y menor que el ancho del terreno de juego, es que el ratón está dentro de los límites, y calculamos la posición de la paleta poniéndole el valor `relativeX` menos la mitad del ancho de la paleta, para que el movimiento sea de verdad relativo a la mitad de la paleta.

Ahora, la paleta seguirá la posición del cursor del ratón pero, como restringimos el movimiento al \<canvas>, no desaparecerá completamente por los lados.

## Compara tu código

Aquí tienes el código para comparar:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/L3gngab5/","","320")}}

> **Nota:** ajusta los límites del movimiento de la pala para que siempre se vea la pala completa (ahora sólo se ve media en los laterales).

## Pasos siguientes

Ya tenemos el juego terminado, pero aún lo podemos mejorar con algunos trucos [Finalizando](/es/docs/Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Terminando).

{{PreviousNext("Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Track_the_score_and_win", "Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Terminando")}}
