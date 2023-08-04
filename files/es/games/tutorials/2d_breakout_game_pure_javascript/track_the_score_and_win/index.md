---
title: Poner un contador y terminar ganando
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Deteccion_colisiones", "Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Controles_raton")}}

Este es el **octavo** capítulo de 10, del [Gamedev Canvas tutorial](/es/docs/Games/Workflows/Breakout_game_from_scratch). Puedes encontrar el código fuente como debería quedar tras este capítulo en [Gamedev-Canvas-workshop/lesson8.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson08.html).

Destruir los ladrillos mola, pero para que el juego sea aún mejor, podría dar puntos cada vez que el jugador rompe un ladrillo, y mostrar un contador.

## El contador

Si puedes ver el contador mientras juegas, puede que consigas impresionar a tus amigos. Necesitas una variable para guardar el contador. Añade esto a tu JavaScript, después de las otras definiciones de variables:

```js
var score = 0;
```

También necesitas una función `drawScore()` para enseñar el contador por pantalla. Añade esto después de la función `collisionDetection()`:

```js
function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: " + score, 8, 20);
}
```

Dibujar texto en el \<canvas> es similar a dibujar un círculo o cualquier otra figura. La definición del tipo de letra (fuente) se hace igual que en CSS, puedes fijar el tamaño y fuente con el método {{domxref("CanvasRenderingContext2D.font","font()")}} method. Despúes utilizas {{domxref("CanvasRenderingContext2D.fillStyle()","fillStyle()")}} para fijar el color y {{domxref("CanvasRenderingContext2D.fillText","fillText()")}} para escribir el texto y el lugar en el que se va a dibujar. El primer parámetro es el texto en si y los otros dos son las coordenadas.

Para sumar un punto cada vez que se rompe un ladrillo, añade la línea que está marcada aquí debajo:

```js
function collisionDetection() {
  for (c = 0; c < brickColumnCount; c++) {
    for (r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r];
      if (b.status == 1) {
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          y > b.y &&
          y < b.y + brickHeight
        ) {
          dy = -dy;
          b.status = 0;
          score++;
        }
      }
    }
  }
}
```

Llamando a `drawScore()` (dibujar contador) desde la función `draw()` hace que se muestre el contador actualizado en la pantalla. Añade la línea siguiente en `draw()`, justo debajo de la llamada a `drawPaddle()`:

```js
drawScore();
```

## Mostrar un mensaje de victoria cuando se hayan destruido todos los ladrillos

Lo de sumar puntos funciona, pero tiene un final. ¿Qué ocurrirá cuando no queden ladrillos? Precisamente ese es el principal objetivo del juego, tendrás que dibujar un mensaje de victoria. Añade las líneas marcadas a tu función `collisionDetection()`:

```js
function collisionDetection() {
  for (c = 0; c < brickColumnCount; c++) {
    for (r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r];
      if (b.status == 1) {
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          y > b.y &&
          y < b.y + brickHeight
        ) {
          dy = -dy;
          b.status = 0;
          score++;
          if (score == brickRowCount * brickColumnCount) {
            alert("YOU WIN, CONGRATULATIONS!");
            document.location.reload();
          }
        }
      }
    }
  }
}
```

Gracias a esto, los jugadores pueden ganar cuando rompen todos los ladrillos, que es muy importante. La función `document.location.reload()` vuelve a cargar la página y el juego empieza de nuevo, una vez se hace clic sobre el botón del alert().

## Compara tu código

Puedes comparar tu código con este:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/mvfkcydz/","","320")}}

> **Nota:** añade más puntos por ladrillo y muestra el contador cuando salga el alert() del final del juego con victoria.

## Pasos siguientes

El juego, ahora mismo, ya tiene buena pinta. En la siguiente lección conseguirás que sea más atractivo porque añadirás el [Control del ratón](/es/docs/Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Controles_raton).

{{PreviousNext("Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Deteccion_colisiones", "Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Controles_raton")}}
