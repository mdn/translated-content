---
title: Game over
slug: Games/Tutorials/2D_breakout_game_Phaser/Game_over
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Player_paddle_and_controls", "Games/Workflows/2D_Breakout_game_Phaser/Build_the_brick_field")}}

Este es el paso numero **ocho** de los 16 del tutorial de [Gamedev Phaser](/es/docs/Games/Workflows/2D_Breakout_game_Phaser). Puedes encontrar el código fuente de como debería verse, después de haber completado esta lección en [Gamedev-Phaser-Content-Kit/demos/lesson08.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson08.html).

Para hacer el juego más interesante podemos introducir la habilidad de perder --- si no golpeas la pelota antes de que alcance el borde inferior de la pantalla, se acabará el juego.

## Cómo perder

Para proporcionar la habilidad de perder, deberemos inhabilitar las bolas que colisionen con el borde inferior de la pantalla. Añade el siguiente código dentro de la función `create()`; justo después de definir los atributos de las bolas está bien:

```js
game.physics.arcade.checkCollision.down = false;
```

Esto hará que a las tres paredes(arriba, izquierda y derecha) les rebote la bola, pero la cuarta pared (abajo) desaparecerá, dejando que la bola caiga fuera de la pantalla si la pala no lo alcanza. Necesitamos una forma de detectar esto y actuar en consecuencia. Añade las siguientes lineas justo debajo de la nueva linea, añadida anteriormente:

```js
ball.checkWorldBounds = true;
ball.events.onOutOfBounds.add(function () {
  alert("Game over!");
  location.reload();
}, this);
```

Añadiendo esas lineas conseguiremos que la bola compruebe los límites de su mundo(en nuestro caso la pantalla) y ejecute la función vinculada al evento `onOutOfBounds`. Cuando hagas click en el mensaje de alerta resultante, la página se reseteará, asi podrás jugar otra vez.

## Compara tu código

Puedes comprobar el código final para esta lección en la demo de abajo, y jugar con ello para entender mejor como funciona:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/436bckb7/","","400")}}

## Siguientes pasos

Ahora el juego básico está hecho, hagamos mas interesante el caso introduciendo ladrillos para romper --- es hora de [construir el campo de ladrillos](/es/docs/Games/Workflows/2D_Breakout_game_Phaser/Build_the_brick_field).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Player_paddle_and_controls", "Games/Workflows/2D_Breakout_game_Phaser/Build_the_brick_field")}}
