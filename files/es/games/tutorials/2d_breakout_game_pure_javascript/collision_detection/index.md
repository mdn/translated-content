---
title: Detección de colisiones
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Construye_grupo_bloques", "Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Track_the_score_and_win")}}

Este es el **séptimo** paso de los 10 del juego ["Gamedev Canvas tutorial"](/es/docs/Games/Workflows/Breakout_game_from_scratch). Puedes encontrar el código como deberá quedar después de completar la leción en [Gamedev-Canvas-workshop/lesson7.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson07.html).

Ya tenemos los ladrillos en la pantalla pero el juego todavía no es muy interesante, porque la bola los atraviesa. Tenemos que pensar una manera de detectar colisiones para que la bola pueda rebotar en los ladrillos y romperlos.

Nosotros decidimos cómo implementar esto, por supuesto, pero puede ser complicado calcular si la bola está tocando el rectángulo o no, porque no hay funciones del &#x3C;canvas> que sirvan para saberlo. En este tutorial vamos a hacerlo de la manera más fácil que existe: comprobaremos si el centro de la bola está tocando (colisionando) con cualquiera de los ladrillos. No siempre funcionará a la perfección y hay formas de detectar colisiones más sofisticadas que funcionan mejor, pero no nos interesa verlas porque estamos aprendiendo y tenemos que hacer las cosas fáciles.

## Una función para detectar colisiones

Para lograr nuestro objetivo vamos a definir una función que, con un bucle, recorrerá todos los ladrillos y comparará la posición de cada uno con la posición de la bola, cada vez que se dibuje un fotograma. Para que el código sea más legible definiremos la variable "b" que almacenará el objeto ladrillo en cada vuelta de bucle:

```js
function collisionDetection() {
  for (c = 0; c < brickColumnCount; c++) {
    for (r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r];
      // calculations
    }
  }
}
```

Si el centro de la bola está dentro de las coordenadas de uno de nuestros ladrillos, cambiaremos la dirección de la bola. Se cumplirá que el centro de la bola está dentro de ladrillo si se cumplen al mismo tiempo estas cuatro condiciones:

- La posición "x" de la bola es mayor que la posición "x" del ladrillo
- La posición "x" de la bola es menor que la posición del ladrillo más el ancho del ladrillo
- La posición "y" de la bola es mayor que la posición "y" del ladrillo.
- La posición "y" de la bola es menor que la posición del ladrillo más su altura.

Traducimos esto a JavaScript:

```js
function collisionDetection() {
  for (c = 0; c < brickColumnCount; c++) {
    for (r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r];
      if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
        dy = -dy;
      }
    }
  }
}
```

Añade lo anterior a tu código, debajo de la función `keyUpHandler()`.

## Hacer que los ladrillos desaparezcan cuando reciben un golpe

El código anterior funcionará correctamente y la bola cambiará de dirección. El problema es que los ladrillos siguen donde están. Tenemos que imaginar una forma de ocuparnos de los que ya hemos golpeado con la bola. Podemos hacerlo añadiendo un parámetro extra para indicar si queremos pintar cada ladrillo en la pantalla o no. En la parte del código donde inicializamos los ladrillos, añadiremos una propiedad `status` a cada ladrillo. Cambia tu código fijándote en la línea que está resaltada:

```js
var bricks = [];
for (c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}
```

A continuación consultaremos el "status" de cada ladrillo para saber si lo tenemos que dibujar o no. Si "status" vale 1, lo dibujaremos. Si vale 0, no lo dibujaremos porque habrá sido golpeado por la bola. Actualiza tu función `drawBricks()` para que quede así:

```js
function drawBricks() {
  for (c = 0; c < brickColumnCount; c++) {
    for (r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status == 1) {
        var brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
        var brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}
```

## Actualizar el "status" en la función de detección de colisiones

Ahora tenemos que ocuparnos del valor de "status" en la función `collisionDetection()`: si el ladrillo está activo (status 1) comprobaremos si hay colisión. Si hay colisión, pondremos el "status" de ese ladrillo a 0 para no volver a pintarlo. Actualiza `collisionDetection()` así:

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
        }
      }
    }
  }
}
```

## Activar la función de detección de colisiones

Ya sólo falta llamar a la función `collisionDetection()` desde la función `draw()`. Añade la línea siguiente dentro de `draw()` function, justo después de la llamada a `drawPaddle()`:

```js
collisionDetection();
```

## Compara tu código

Ahora se comprueban las colisiones cada vez que se dibuja un fotograma. Concretamente, miramos si la bola colisiona con cada ladrillo. ¡Ahora ya podemos romper ladrillos! :-

{{JSFiddleEmbed("https://jsfiddle.net/kundan333/myd4vbwg/5/","","320")}}

> **Nota:** cambia el color de la bola cada vez que choque con un ladrillo.

## Pasos siguientes

Definitivamente, lo estamos consiguiendo. ¡Adelanteeee! En el capítulo octavo nos ocuparemos de la [Puntuación y fin del juego ganando](/es/docs/Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Track_the_score_and_win).

{{PreviousNext("Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Construye_grupo_bloques", "Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Track_the_score_and_win")}}
