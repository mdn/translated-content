---
title: Control de la pala y el teclado
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Bounce_off_the_walls", "Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Fin_del_juego")}}

Este es el **cuarto** de los 10 pasos del [Tutorial de Canvas para el desarrollo de juegos](/es/docs/Games/Workflows/Breakout_game_from_scratch). Puedes encontrar el código fuente como debería quedar después de completar la lección en [Gamedev-Canvas-workshop/lesson4.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson04.html).

La bola está rebotando en las paredes libremente y puedes estar mirándola toda la vida, pero, ahora mismo, no hay interactividad. ¡No es un juego si no puedes controlarlo! Vamos a añadirle la interacción del usuario: una paleta.

## Definir una paleta para golpear la bola

Necesitamos una paleta para golpear la bola. Empezamos por definir variables para conseguirlo. Añade las variables siguientes en la parte de arriba de tu código, junto a las que ya tenías:

```js
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;
```

paddleHeight servirá para definir la altura de la paleta, paddleWidth la anchura y paddleX la posición en el eje X en la que empieza a dibujarse. Definimos una función que dibujará la paleta en la pantalla. Añade este código justo después de la función `drawBall()`:

```js
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
```

## Permitir que el usuario controle la paleta

Podemos dibujar la paleta donde queramos, pero debería responder a las acciones del usuario. Ha llegado la hora de implementar algunos controles de teclado. Vamos a necesitar:

- Dos variables para guardar la información sobre si se ha pulsado el botón izquierdo o el derecho.
- Dos funciones (event listeners) que respondan a los eventos `keydown` y `keyup` (pulsar tecla, liberar tecla). Queremos que se ejecute algún código para manejar la paleta cuando se pulsen los botones.
- Dos funciones que manejen los eventos `keydown` y `keyup` que se ejecutarán cuando se pulsen los botones.
- La habilidad de mover la paleta a la izquierda y a la derecha

Empezaremos por definir las variables que nos dirán si se ha pulsado un botón. Añade estas líneas donde has definido las demás variables:

```js
var rightPressed = false;
var leftPressed = false;
```

Las dos las inicializamos con el valor `false` porque al principio no están pulsados los botones. Para "escuchar" las pulsaciones de las teclas necesitamos definir dos "escuchadores de eventos" (event listeners). Añade las líneas siguientes justo antes de `setInterval()` al final de tu código:

```js
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
```

Cuando ocurra el evento `keydown` al pulsar cualquier tecla del teclado, la función `keyDownHandler()` se ejecutará. Cuando se liberará la tecla pulsada, se ejecutará la función `keyUpHandler()`. Añade esto después de las líneas del `addEventListener()` que acababas de escribir:

```js
function keyDownHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = true;
  } else if (e.keyCode == 37) {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = false;
  } else if (e.keyCode == 37) {
    leftPressed = false;
  }
}
```

Cuando pulsamos una tecla se ejecuta keyDownHandler(e), que pone en la variable "e" los datos que necesitamos. Efectivamente, e.keyCode nos va a decir qué tecla se ha pulsado. Si vale 37 es porque se ha pulsado la "flecha izquierda" del teclado. El código 39 representa a la "flecha derecha".

Pues bien, cuando se pulsará la "flecha izquierda" pondremos leftPressed a true.

Cuando se liberará la "flecha izquierda" pondremos leftPressed a false.

De igual forma procederá el programa con la "flecha derecha", detectando el código 39 y dando los valores oportunos a la variable rightPressed.

### La lógica del movimiento de la paleta

Ya tenemos las variables que contienen la información sobre las teclas pulsadas, los escuchadores de eventos y las funciones relevantes. Ahora vamos a ocuparnos del código que utilizará todo eso y moverá la paleta en la pantalla. Dentro de la función `draw()` comprobaremos si está pulsada la flecha izquierda o la derecha cada vez que se dibuje un fotograma. Nuestro código podría tener este aspecto:

```js
if (rightPressed) {
  paddleX += 7;
} else if (leftPressed) {
  paddleX -= 7;
}
```

Si se pulsa la flecha izquierda, la paleta se moverá 7 píxeles a la izquierda. Si se pulsa la flecha derecha, se moverá 7 píxeles a la derecha. Aunque esto funciona bien, la paleta desaparece en los laterales del terreno de juego si mantenemos pulsada una tecla demasiado tiempo. Podemos mejorar esto para que se mueva dentro de los límites del canvas, cambiando el código así:

```js
if (rightPressed && paddleX < canvas.width - paddleWidth) {
  paddleX += 7;
} else if (leftPressed && paddleX > 0) {
  paddleX -= 7;
}
```

La posición paddleX que estamos utilizando variará entre 0 para la lado izquierdo y `canvas.width-paddleWidth` para el lado derecho, que es justo lo que queremos.

Añade el código anterior dentro de la función `draw(), al final`, justo antes de la llave que cierra.

Lo único que nos falta por hacer es llamar a la función `drawPaddle()` desde dentro de la función `draw()` para que dibuje la paleta dentro en la pantalla. Añade la línea siguiente dentro de `draw()`, justo antes de la línea que llama a la función `drawBall()`:

```js
drawPaddle();
```

## Compara tu código

Aquí está el código que funciona, para que lo compares con el tuyo:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/tgn3zscj/","","320")}}

> **Nota:** haz que la paleta se mueva más deprisa o más despacio, o cambia su tamaño.

## Pasos siguientes

Ahora mismo tenemos algo que parece un juego. El único problema es que todo lo que puedes hacer es golpear la bola con la paleta toda la vida (en realidad, ni siquiera la golpeas). Todo esto cambiará en el quinto capítulo, [Fin del juego](/es/docs/Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Fin_del_juego), cuando añadiremos un estado de "Game Over".

{{PreviousNext("Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Bounce_off_the_walls", "Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Fin_del_juego")}}
