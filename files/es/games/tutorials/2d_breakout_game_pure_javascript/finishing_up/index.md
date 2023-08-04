---
title: Terminando
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up
---

{{GamesSidebar}}

{{Previous("Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Controles_raton")}}

Este es el último de los 10 pasos del [Gamedev Canvas tutorial](/es/docs/Games/Workflows/Breakout_game_from_scratch). Puedes encontrar el código fuente tal y como quedará al terminar esta lección en [Gamedev-Canvas-workshop/lesson10.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson10.html).

Siempre es posible mejorar cualquier juego que hagamos. Por ejemplo, podemos dar vidas al jugador. Así, aunque pierda la bola una o dos veces, todavía puede intentar derribar todo el muro. También podemos mejorar los aspectos gráficos.

## Dar vidas al jugador

Dar vidas es bastante sencillo. Primero, añade una variable para guardar el número de vidas que tiene en cada momento. Ponla después de las que ya tienes:

```js
var lives = 3;
```

Mostrar por pantalla el número de vidas es prácticamente lo mismo que mostrar el contador de puntos. Añade la función siguiente detrás de la función `drawScore()`:

```js
function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
}
```

En lugar de terminar el juego inmediatamente, restaremos una vida hasta que ya no quede ninguna. También podemos colocar la bola y la paleta en la posición inicial cuando el jugador empiece con la vida siguiente. En la función <code style="font-style: normal; font-weight: normal;">draw()</code> cambia las dos líneas siguientes...

```js
alert("GAME OVER");
document.location.reload();
```

... por estas otras:

```js
lives--;
if (!lives) {
  alert("GAME OVER");
  document.location.reload();
} else {
  x = canvas.width / 2;
  y = canvas.height - 30;
  dx = 2;
  dy = -2;
  paddleX = (canvas.width - paddleWidth) / 2;
}
```

Ahora, cuando la bola toca el fondo, restamos una vida. Si no queda ninguna, el jugador pierde y termina la partida. Si queda alguna, entonces colocamos la bola y la paleta en el centro, y hacemos que la bola vaya en la nueva dirección correcta y a la velocidad inicial.

### Sacar por pantalla el contador de vidas

Tienes que añadir una llamada a `drawLives()` dentro de `draw()` debajo de la llamada a `drawScore()`:

```js
drawLives();
```

## Mejorar el refresco con requestAnimationFrame()

Ahora vamos a ocuparnos de algo que no es particular de este juego, sino de la forma en la que se muestran las imágenes en pantalla.

{{domxref("window.requestAnimationFrame", "requestAnimationFrame")}} ayuda al navegador a refrescar la imagen mejor que con el método {{domxref("windowTimers.setInterval()", "setInterval()")}} que estamos utilizando. Cambia la línea siguiente...

```js
setInterval(draw, 10);
```

...por esta otra:

```js
draw();
```

Y, ahora, al final de la función draw(), justo antes de la llave que la cierra, añade la línea siguiente, que hará que la función `draw()` se llame a sí misma una y otra vez:

```js
requestAnimationFrame(draw);
```

Ahora draw() se ejecuta una y otra vez con un bucle `requestAnimationFrame()` pero, en lugar de hacerlo cada 10 milisegundos, dejamos que sea el navegadro quien decida cada cuánto tiempo. El navegador sincronizará el refresco, es decir, el número de fotogramas por segundo, a lo que sea capaz la máquina que está ejecutando el juego. De este modo la animación será más eficiente y más suave que el viejo método `setInterval()`.

## Compara tu código

Ya hemos terminado. ¡La versión final del juego está lista para publicar!

{{JSFiddleEmbed("https://jsfiddle.net/end3r/9temh0ta/","","320")}}

> **Nota:** cambia el número de vidas y el ángulo de la trayectoria de la bola cuando golpea la paleta.

## Game over - de momento!

Enhorabuena, has terminado todas las lecciones. Ya has aprendido las técnicas básicas de manipulación del \<canvas> y la lógica que hay detrás de los juegos 2D sencillos.

Ahora sería un buen momento para aprender a utilizar entornos de desarrollo (frameworks) y de continuar con el desarrollo de juegos. Puedes echar un vistazo a estas otra forma de realizar el mismo juego que has visto en [2D breakout game using Phaser](/es/docs/Games/Workflows/2D_breakout_game_Phaser), o de echar un vistazo al tutorial [Cyber Orb built in Phaser](/es/docs/Games/Workflows/HTML5_Gamedev_Phaser_Device_Orientation). También puedes leer el contenido de [Games section on MDN](/en/docs/Games) para inspirarte y seguir aprendiendo.

También puedes volve al [índice de este tutorial](/es/docs/Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro). ¡Diviértete programando!

{{Previous("Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Controles_raton")}}
