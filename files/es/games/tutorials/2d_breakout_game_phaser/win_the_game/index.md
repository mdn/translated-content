---
title: Win the game
slug: Games/Tutorials/2D_breakout_game_Phaser/Win_the_game
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/The_score", "Games/Workflows/2D_Breakout_game_Phaser/Extra_lives")}}

Este es el paso **12º** del tutorial 16 de [Gamedev Phaser](/es/docs/Games/Workflows/2D_Breakout_game_Phaser). Puedes encontrar el código fuente tal y como queda al completar el tutorial en [Gamedev-Phaser-Content-Kit/demos/lesson12.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson12.html).

Implementar las victorias en nuestro juego es fácil: si destruyes todos los ladrillos, ganas.

## ¿Cómo ganar?

Añade el siguiente código a la función `ballHitBrick()`:

```js
function ballHitBrick(ball, brick) {
  brick.kill();
  score += 10;
  scoreText.setText("Points: " + score);

  var count_alive = 0;
  for (i = 0; i < bricks.children.length; i++) {
    if (bricks.children[i].alive == true) {
      count_alive++;
    }
  }
  if (count_alive == 0) {
    alert("You won the game, congratulations!");
    location.reload();
  }
}
```

Recorremos los ladrillos del grupo usando `bricks.children`, verificando la vida de cada uno con el método `.alive()`. Si no quedan más ladrillos con vida, mostramos un mensaje de victoria, reiniciando el juego una vez que la alerta desaparezca.

## Compare su código

Puedes comprobar el código terminado de esta lección en la siguiente demo, y jugar para entender mejor cómo funciona:

{{JSFiddleEmbed("https://jsfiddle.net/u8waa4Lx/1/","","400")}}

## Próximos pasos

Ganar y perder están implementados, por lo que la jugabilidad de nuestro juego está terminada. Ahora añadiremos algo extra — vamos a dar al jugador tres vidas en lugar de una.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/The_score", "Games/Workflows/2D_Breakout_game_Phaser/Extra_lives")}}
