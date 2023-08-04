---
title: Fin del juego
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Control_pala_y_teclado", "Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Construye_grupo_bloques")}}

Este es el quinto paso de 10 del [Gamedev Canvas tutorial](/es/docs/Games/Workflows/Breakout_game_from_scratch). Puedes ver como debería quedar el código fuente después de completar esta lección en [Gamedev-Canvas-workshop/lesson5.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson05.html).

Es divertido ver la bola rebotando en las paredes y ser capaz de mover la pala pero, aparte de eso, el juego no hace nada y no tiene ningún progreso ni un objetivo final.Sería bueno desde el punto de vista del juego poder perder. La lógica asociada a perder en este juego es fácil de entender: si se te escapa la bola y alcanza el borde inferior de la pantalla, pierdes y se acabó el juego.

## Implementar el final del juego

Intentemos implementar el final del juego en nuestro juego.Aquí está el trozo de código de la tercera lección en donde hicimos que la pelota rebotara en las paredes:

```js
if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
  dx = -dx;
}

if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
  dy = -dy;
}
```

En lugar de dejar que la pelota rebote en las cuatro paredes, vamos a permitir que lo haga sólo en tres: izquierda, arriba y derecha. Alcanzar la pared inferior supondrá el fin del juego. Editaremos el segundo bloque if y lo convertiremos en un "if else" que activará el estado de "final de juego" cuando la pelota colisione con el borde inferior del terreno de juego. Por ahora nos conformaremos con mostrar un mensaje con la función alert() y con reiniciar el juego volviendo a cargar la página. Modifica el segundo if para que quede así:

```js
if (y + dy < ballRadius) {
  dy = -dy;
} else if (y + dy > canvas.height - ballRadius) {
  alert("GAME OVER");
  document.location.reload();
}
```

## Hacer que la pala golpee la bola

Para terminar esta lección sólo nos falta detectar la colisión de la bola y la paleta para que pueda rebotar, volviendo hacia la zona de juego. La manera más sencilla de hacerlo es comprobar si el centro de la bola está entre los límites izquierdo y derecho de la paleta. Actualiza el último fragmento del código, el "if else" de antes, para que te quede así:

```js
if (y + dy < ballRadius) {
  dy = -dy;
} else if (y + dy > canvas.height - ballRadius) {
  if (x > paddleX && x < paddleX + paddleWidth) {
    dy = -dy;
  } else {
    alert("GAME OVER");
    document.location.reload();
  }
}
```

Si la bola toca el borde inferior del lienzo (Canvas) debemos comprobar si golpea la pala. Si es así, entonces rebota como el jugador se imagina que va a ocurrir; si no, el juego ha terminado.

## Compara tu código

Aquí tienes el código que funciona para que lo compares con el tuyo:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/z4zy79fo/","","320")}}

> **Nota:** haz que la bola se mueva más rápida cuando golpea la pala.

## Siguientes pasos

Lo estamos haciendo bastante bien hasta ahora y nuestro juego está empezando a despertar interés ahora que se puede perder. Pero todavía falta algo. Vamos a pasar al sexto capítulo, [Construir el muro de ladrillos](/es/docs/Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Construye_grupo_bloques), y crear algunos ladrillos para que la bola los destruya.

{{PreviousNext("Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Control_pala_y_teclado", "Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Construye_grupo_bloques")}}
