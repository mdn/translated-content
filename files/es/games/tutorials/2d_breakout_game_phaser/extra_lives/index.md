---
title: Extra lives
slug: Games/Tutorials/2D_breakout_game_Phaser/Extra_lives
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Win_the_game", "Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens")}}

Este es el **paso 13** de 16 del tutorial [Gamedev Phaser](/es/docs/Games/Workflows/2D_Breakout_game_Phaser). Puedes encontrar el código fuente tal y cómo queda al completar la lección en [Gamedev-Phaser-Content-Kit/demos/lesson13.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson13.html).

Podemos hacer que el juego sea divertido por más tiempo añadiendo vidas. En este artículo implementaremos un sistema de vidas, para que el jugador pueda seguir jugando hasta que haya perdido tres vidas, no solo una.

## Nuevas variables

Añade las siguientes líneas debajo de las ya existentes en tú código:

```js
var lives = 3;
var livesText;
var lifeLostText;
```

Estas almacenarán las vidas, el texto que muestra el número de vidas restante, y el texto que se muestra en pantalla cuando el jugador pierde todas sus vidas.

## Definiendo las nuevas etiquetas de texto

Definir los textos es parecido a algo que ya hicimos en la lección de la [puntuación](/es/docs/Games/Workflows/2D_Breakout_game_Phaser/The_score). Añade las siguientes líneas debajo de la definición de `scoreText` dentro de la función `create()`:

```js
livesText = game.add.text(game.world.width - 5, 5, "Lives: " + lives, {
  font: "18px Arial",
  fill: "#0095DD",
});
livesText.anchor.set(1, 0);
lifeLostText = game.add.text(
  game.world.width * 0.5,
  game.world.height * 0.5,
  "Life lost, click to continue",
  { font: "18px Arial", fill: "#0095DD" },
);
lifeLostText.anchor.set(0.5);
lifeLostText.visible = false;
```

Los objetos `livesText` y `lifeLostText` se parecen mucho al `scoreText` — definen una posición en la pantalla, el texto actual a mostrar, y el estilo de la fuente. El primero está anclado en el borde superior derecho para alinearse con la pantalla y el segundo está centrado, ambos usan `anchor.set()`.

El texto `lifeLostText` se mostrará solamente cuando se pierda la vida, así que su visibilidad al principio será `false`.

### Haciendo nuestro estilo de texto DRY

Cómo probablemente hayas notado, estamos usando el mismo estilo para los tres textos: `scoreText`, `livesText` y `lifeLostText`. Si quisiéramos cambiar el tamaño de la fuente o el color tendríamos que hacerlo en muchos lugares. Para hacer eso más fácil de mantener en el futuro podemos crear una variable separada que almacenará nuestro estilo, la llamaremos `textStyle` y la colocaremos después de las definiciones de los textos:

```js
textStyle = { font: "18px Arial", fill: "#0095DD" };
```

Ahora podemos usar esta variable para dar estilo a nuestros textos — actualiza tú código para que cada una de las múltiples instancias de estilo de tú texto sean reemplazadas por la variable:

```js
scoreText = game.add.text(5, 5, "Points: 0", textStyle);
livesText = game.add.text(
  game.world.width - 5,
  5,
  "Lives: " + lives,
  textStyle,
);
livesText.anchor.set(1, 0);
lifeLostText = game.add.text(
  game.world.width * 0.5,
  game.world.height * 0.5,
  "Life lost, click to continue",
  textStyle,
);
lifeLostText.anchor.set(0.5);
lifeLostText.visible = false;
```

De esta manera cambiando la fuente en una variable aplicará los cambios en todos los sitios donde se esté usando.

## El código de manejo de vidas

Para implementar las vidas en nuestro juego, primero cambiaremos la función de bote de la pelota por el evento `onOutOfBounds`.En lugar de ejecutar una función anónima y mostrar un mensaje de alerta :

```js
ball.events.onOutOfBounds.add(function () {
  alert("Game over!");
  location.reload();
}, this);
```

Vamos a asignar una nueva función llamada `ballLeaveScreen`; borra el manejador de evento anterior (mostrado arriba) y sustitúyelo por la siguiente línea:

```js
ball.events.onOutOfBounds.add(ballLeaveScreen, this);
```

Queremos decrementar el número de vidas cada vez que la pelota abandone el lienzo.Añade la definición de la función `ballLeaveScreen()` al final de tu código :

```js
function ballLeaveScreen() {
  lives--;
  if (lives) {
    livesText.setText("Lives: " + lives);
    lifeLostText.visible = true;
    ball.reset(game.world.width * 0.5, game.world.height - 25);
    paddle.reset(game.world.width * 0.5, game.world.height - 5);
    game.input.onDown.addOnce(function () {
      lifeLostText.visible = false;
      ball.body.velocity.set(150, -150);
    }, this);
  } else {
    alert("You lost, game over!");
    location.reload();
  }
}
```

En lugar de mostrar el mensaje de alerta cuando pierdes una vida, primero quitaremos una vida del número actual y comprobaremos que no sea cero. Si lo es, quiere decir que el jugador tiene todavía algunas vidas y puede continuar jugando — verá el mensaje de pérdida de vida, las posiciones de la pelota y la paleta se reiniciarán en la pantalla y en la siguiente entrada (click o toque) el mensaje se ocultará y la pelota comenzará a moverse de nuevo.

Cuando el número de vidas disponibles alcanza el cero, el juego termina y se muestra un mensaje de "game over".

## Eventos

Probablemente hayas notado las llamadas a los métodos `add()` y `addOnce()` en los dos bloques de código de arriba y te hayas preguntado en qué se diferencian. La diferencia es que el método `add()` vincula la función dada y hace que se ejecute cada vez que se produce el evento, mientras que `addOnce()` es útil cuando deseas que la función enlazada se ejecute solo una vez y luego se desvincule para que no se ejecute otra vez. En nuestro caso, en cada evento `outOfBounds` el `ballLeaveScreen` se ejecutará, pero cuando la pelota abandona la pantalla solo queremos quitar el mensaje de la pantalla una sola vez.

## Compare tu código

Puedes consultar el código terminado de esta lección en la demo de abajo, y jugar para entender mejor cómo funciona:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/yk1c5n0b/","","400")}}

## Próximos pasos

Las vidas hacen el juego más indulgente — si pierdes una vida, todavía tienes dos más con las que continuar jugando. Ahora expandiremos la apariencia del juego añadiendo [animaciones e interpolaciones](/es/docs/Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens).

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Win_the_game", "Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens")}}
