---
title: Collision detection
slug: Games/Tutorials/2D_breakout_game_Phaser/Collision_detection
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Build_the_brick_field", "Games/Workflows/2D_Breakout_game_Phaser/The_score")}}

Este es el **paso 10** de un total de 16, del tutorial de [Gamedev Phaser](/es/docs/Games/Workflows/2D_Breakout_game_Phaser). Puedes encontrar el código fuente tal y cómo queda al completar la lección en [Gamedev-Phaser-Content-Kit/demos/lesson10.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson10.html).

Ahora en el próximo desafío: la detección de colisiones entre la bola y los ladrillos. Por suerte, podemos usar el motor de física para verificar las colisiones no solo entre objetos individuales (como la pelota y la paleta), sino también entre un objeto y el grupo.

## Detección de colisión ladrillo/bola

El motor de físicas hace que todo sea mucho más fácil - solo necesitamos agregar dos simples fragmentos de código. Primero, añade una nueva línea dentro de la función `update()` que verifique la detección de las colisiones entre la bola y los ladrillos, como se muestra a continuación:

```js
function update() {
  game.physics.arcade.collide(ball, paddle);
  game.physics.arcade.collide(ball, bricks, ballHitBrick);
  paddle.x = game.input.x || game.world.width * 0.5;
}
```

La posición de la bola se calcula contra las posiciones de todos los ladrillos del grupo. El tercer parámetro opcional es la función que se ejecuta cuando se produce una colisión: `ballHitBrick()`. Crea esta nueva función en la parte inferior de tu código, justo antes de la etiqueta de cierre `</script>`, como sigue:

```js
function ballHitBrick(ball, brick) {
  brick.kill();
}
```

¡Y ya está! Vuelve a cargar el código, y verás que la nueva detección de colisión funciona correctamente.

Gracias a Phaser, se pasan dos parámetros a la función: el primero es la bola, que definimos explícitamente en el método de colisión, y el segundo es el único bloque del grupo de ladrillos con el que la bola está colisionando. Dentro de la función, eliminamos el bloque en cuestión de la pantalla ejecutando el método `kill()` en él.

Seguro que esperarabas tener que escribir muchos más cálculos para implementar la detección de colisiones cuando se utiliza [JavaScript](/es/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Collision_detection) puro. Esa es la belleza de usar el marco: puedes dejar un montón de código aburrido a Phaser, y enfocarte en las partes más divertidas e interesantes de hacer un juego.

## Compara tu código

Puedes consultar el código terminado para esta lección en la demo que aparece a continuación, y jugar con él para comprender mejor cómo funciona:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/wwneakwf/","","400")}}

## Próximos pasos

Podemos golpear los ladrillos y eliminarlos, lo cual sería una buena adición al juego. Sería incluso mejor contar los ladrillos destruidos incrementando la puntuación como resultado.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Build_the_brick_field", "Games/Workflows/2D_Breakout_game_Phaser/The_score")}}
