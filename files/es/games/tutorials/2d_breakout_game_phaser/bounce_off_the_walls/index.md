---
title: Rebotar en las paredes
slug: Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Physics", "Games/Workflows/2D_Breakout_game_Phaser/Player_paddle_and_controls")}}

Este es el **paso 6** de 16 del [tutorial de Gamedev Phaser](/es/docs/Games/Workflows/2D_Breakout_game_Phaser). Puedes encontrar el código fuente como debería verse después de completar esta lección en [Gamedev-Phaser-Content-Kit/demos/lesson06.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson06.html).

Ahora que las físicas han sido introducidas, podemos empezar a implementar la detección de colisión en el juego — primero miraremos las paredes.

## Rebotando en las fronteras del mundo

La forma más fácil de hacer que nuestra bola rebote en las paredes es decirle al marco que queremos tratar los límites del elemento {{htmlelement("canvas")}} como paredes y no dejar que la pelota pase por ellos. En Phaser esto se puede puede lograr usando la propiedad `collideWorldsBound`. Añade esta linea justo después de la llamada al método `game.physics.enable()` existente:

```js
ball.body.collideWorldBounds = true;
```

Ahora la bola se detendrá en el borde de la pantalla en lugar de desaparecer, pero no rebota. Para que esto ocurra tenemos que configurar su rebote. Añade la siguiente línea debajo de la anterior:

```js
ball.body.bounce.set(1);
```

Intenta recargar index.html otra vez — ahora deberías ver la pelota rebotando en todas las paredes y moviéndose dentro del área del lienzo.

## Compara tu código

Puedes consultar el código terminado para esta lección en la demostración en vivo a continuación, y jugar con él para comprender mejor cómo funciona:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/dcw36opz/","","400")}}

## Próximos pasos

Esto está empezando a parecerse más a un juego ahora, Pero no podemos controlarlo de ninguna manera — es hora de que introduzacamos [reproductor de paletas y controles](/es/docs/Games/Workflows/2D_Breakout_game_Phaser/Player_paddle_and_controls).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Physics", "Games/Workflows/2D_Breakout_game_Phaser/Player_paddle_and_controls")}}
