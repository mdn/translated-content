---
title: The score
slug: Games/Tutorials/2D_breakout_game_Phaser/The_score
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Collision_detection", "Games/Workflows/2D_Breakout_game_Phaser/Win_the_game")}}

Este es el paso **11º** de 16 del tutorial de [Gamedev Phaser](/es/docs/Games/Workflows/2D_Breakout_game_Phaser). Puedes encontrar el código fuente tal y como quedaría al completar la lección en [Gamedev-Phaser-Content-Kit/demos/lesson11.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson11.html).

Tener puntuación puede hacer el juego más interesante — puedes intentar batir tu mejor puntuación, a la de tus amigos. En este artículo añadiremos un sistema de puntuación al juego.

Usaremos una variable separada para almacenar la puntuación y el método `text()` de Phaser para mostrarla en la pantalla.

## Nuevas variables

Añade dos nuevas variables justo después de la definición de las anteriores:

```js
// ...
var scoreText;
var score = 0;
```

## Añadir el texto de puntuación a la pantalla del juego

Ahora añade esta línea al final de la función `create()`:

```js
scoreText = game.add.text(5, 5, "Points: 0", {
  font: "18px Arial",
  fill: "#0095DD",
});
```

El método `text()` puede tomar cuatro parámetros:

- Las coordenadas x e y dónde escribir el texto.
- El texto que se mostrará.
- El estilo de la fuente con la que se representará el texto.

El último parámetro se parece mucho a los estilos de CSS. En nuestro caso, el texto de la puntuación será azul, con un tamaño de 18 pixeles y usará como estilo de fuente Arial.

## Actualizar el juego cuando los ladrillos se han destruido

Incrementaremos el número de puntos cada vez que la pelota golpee en un ladrillo y actualizaremos el `scoreText` para mostrar la puntuación actual. Esto, lo podremos hacer usando el método `setText()` — añade las dos siguientes líneas a la función `ballHitBrick()`:

```js
function ballHitBrick(ball, brick) {
  brick.kill();
  score += 10;
  scoreText.setText("Points: " + score);
}
```

Eso es todo por ahora — recarga tu `index.html` y comprueba que la puntuación se actualiza por cada golpe al ladrillo.

## Compare su código

Puede comprobar el código terminado de esta lección en la demo que aparece a continuación, y jugar para entender mejor cómo funciona el juego:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/n8o6rhrf/","","400")}}

## Próximos pasos

Ya tenemos un sistema de puntuación, pero para qué sirve jugar y mantener la puntuación si no se puede ganar. Veremos cómo podemos añadir la victoria, permitiendonos así ganar el juego.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Collision_detection", "Games/Workflows/2D_Breakout_game_Phaser/Win_the_game")}}
