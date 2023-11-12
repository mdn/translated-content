---
title: Botones
slug: Games/Tutorials/2D_breakout_game_Phaser/Buttons
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens", "Games/Workflows/2D_Breakout_game_Phaser/Randomizing_gameplay")}}

Este es el **paso 15** de 16 del tutorial [Gamedev Phaser](/es/docs/Games/Workflows/2D_Breakout_game_Phaser). Puedes encontrar el código fuente como debería quedar después de completar el tutorial en [Gamedev-Phaser-Content-Kit/demos/lesson15.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson15.html).

En lugar de comenzar el juego de inmediato, podemos dejar la decisión en el jugador añadiendo un botón de Inicio que pueda pulsar. Vamos a investigar cómo hacerlo.

## Variables nuevas

Necesitamos una variable para almacenar un valor booleano que represente si el juego se está jugando actualmente o no, y otra para representar a nuestro botón. Añade las siguientes lineas a tu declaración de variables:

```js
var playing = false;
var startButton;
```

## Cargando el botón de spritesheet

Podemos cargar el botón de spritesheet de la misma manera que cargamos la animación del movimiento de la pelota. Añade lo siguiente al botón de la función `preload()`:

```js
game.load.spritesheet("button", "img/button.png", 120, 40);
```

El marco de un solo botón mide 120 pixels de ancho y 40 pixels de alto.

También se debe tomar el botón de spritesheet de [Github](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/img/button.png), y guardarlo en el directorio `/img`.

## Añadiendo el botón al juego

Para añadir el botón al juego usaremos el método `add.button`. Añade las siguientes lineas del botón a la función `create()`:

```js
startButton = game.add.button(
  game.world.width * 0.5,
  game.world.height * 0.5,
  "button",
  startGame,
  this,
  1,
  0,
  2,
);
startButton.anchor.set(0.5);
```

Los parámetros del método `button()` son los siguientes:

- Las coordenadas x e y del botón.
- El nombre del elemento gráfico que se mostrará en el botón.
- Una función de callback que se ejecutará cuando se presione el botón.
- Una referencia a `this` para especificar el contexto de ejecución.
- Los marcos que usaremos para los eventos _over_, _out_ and _down_.

> **Nota:** El evento over es igual al hover, out es cuando el puntero se mueve fuera del botón y down cuando el botón es presionado.

Ahora necesitamos definir la función `startGame()` referenciada en el siguiente código:

```js
function startGame() {
  startButton.destroy();
  ball.body.velocity.set(150, -150);
  playing = true;
}
```

Cuando se presiona el botón, se borra el botón, se establecen la velocidad inicial de la pelota y la variable `playing` a `true`.

Para terminar con esta sección, vuelve a la función `create()`, encuentra la linea `ball.body.velocity.set(150, -150);`, y bórrala. Solo queremos que la pelota se mueva cuando se presione el botón, no antes.

## Mantener la paleta inmóvil antes de que comience el juego

Funciona como se esperaba, pero aún podemos mover la paleta cuando el juego aún no ha comenzado, lo que parece un poco tonto. Para impedir esto, podemos aprovechar la variable `playing` y hacer que la paleta solo se mueva cuando el juego haya empezado. Para hacer esto, ajustamos la función `update()` así:

```js
function update() {
  game.physics.arcade.collide(ball, paddle, ballHitPaddle);
  game.physics.arcade.collide(ball, bricks, ballHitBrick);
  if (playing) {
    paddle.x = game.input.x || game.world.width * 0.5;
  }
}
```

De esta manera la paleta es inamovible hasta que todo esté cargado y preparado, pero sí cuando el juego actual comience.

## Compara tu código

Puedes comprobar el código acabado en esta lección en la demo de abajo, y jugar para entender mejor cómo funciona:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/1rpj71k4/","","400")}}

## Siguientes pasos

La última cosa que haremos en esta serie de artículos es hacer el juego más interesante añadiendo algo de aleatorización a la forma en la que la pelota rebota con la paleta.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens", "Games/Workflows/2D_Breakout_game_Phaser/Randomizing_gameplay")}}
