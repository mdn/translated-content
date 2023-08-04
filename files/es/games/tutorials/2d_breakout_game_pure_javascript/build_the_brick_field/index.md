---
title: Construye el muro de ladrillos
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Fin_del_juego", "Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Deteccion_colisiones")}}

Este es el **sexto** paso de 10 del [Tutorial del Lienzo (Canvas) para desarrollar juegos (Gamedev Canvas Tutorial)](/es/docs/Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro). Puedes encontrar el código fuente como debería quedar tras completar esta lección en [Gamedev-Canvas-workshop/lesson6.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson06.html).

Hemos cambiado la mecánica del juego y ahora ya podemos perder. Esto es genial porque significa que el juego finalmente se comporta como un juego. Sin embargo, pronto resultará aburrido si todo lo que puedes conseguir es hacer rebotar la pelota en las paredes y en la pala. Lo que el juego necesitamos es romper ladrillos con la bola. Ahora vamos a dibujar los ladrillos.

## Declarar e inicializar las variables de los ladrillos

El propósito principal de esta lección consiste en escribir unas pocas líneas de código para los ladrillos, utilizando un bucle anidado que recorra una matriz bidimensional. Pero, antes, necesitamos preparar unas variables que definan la información sobre los ladrillos, como su ancho y alto, filas y columnas, etc. Añade estas líneas a tu programa, debajo de las otras variables que has definido antes:

```js
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
```

Aquí hemos definido el número de filas (Row) y columnas (Column) de ladrillos, su ancho (Width) y alto (Height), el hueco entre los ladrillos para que no se toquen (Padding), y un margen superior (Top) e izquierdo (Left) para que no se dibujen tocando los bordes.

Guardaremos nuestros ladrillos en una matriz bidimensional que contendrá las columnas (c) de los ladrillos. Cada columna contendrá, a su vez, toda la fila (r) de ladrillos. Cada ladrillo se va a representar con un objeto con las posiciones "x" e "y" en las que se dibujará. Añade esto detrás de las definiciones de las variables:

```js
var bricks = [];
for (c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0 };
  }
}
```

El código anterior pasará por las filas y las columnas y creará los ladrillos. TEN EN CUENTA que esos objetos que representan a los ladrillos también se utilizarán para detectar colisiones más adelante.

Por si no lo terminas de entender... bricks\[0]\[0] es el primer ladrillo (columna 0, fila 0) y se dibujará en "x" 0 e "y" 0. El siguiente ladrillo será el brick\[0]\[1] (columna 0, fila 1) y se dibujará también en (0,0). Así, continuaremos hasta el final de la primera columna, que será el ladrillo bricks\[0]\[2] porque hay 3 filas, de la 0 a la 2. Terminará así el bucle de dentro y seguirá el de fuera, valiendo ahora la "c" 1. Seguiremos recorriendo bricks\[] hasta llegar a bricks\[2]\[4], que es el último ladrillo.

## Dibujar los bloques

Ahora vamos a crear una función para recorrer todos los bloques de la matriz y dibujarlos en la pantalla:

```js
function drawBricks() {
  for (c = 0; c < brickColumnCount; c++) {
    for (r = 0; r < brickRowCount; r++) {
      bricks[c][r].x = 0;
      bricks[c][r].y = 0;
      ctx.beginPath();
      ctx.rect(0, 0, brickWidth, brickHeight);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }
  }
}
```

Viene a ser lo mismo de antes, sólo que hemos añadido ctx.rect() para dibujar un rectángulo por cada ladrillo, además de otras llamadas a funciones para que, efectivamente, se dibuje el rectángulo.

Cada ladrillo se dibujará en la posición (0, 0), tendrá un ancho brickWidth y un alto de brickHeight.

Estupendo pero... ¡estamos dibujando todos los ladrillos en el mismo sitio! ¡Eso no puede ser!

Vamos a calcular en qué posición "x" e "y" se tiene que dibujar cada ladrillo así:

```js
var brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
var brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
```

El primer ladrillo se dibujará arriba a la izquierda, concretamente en (brickoffsetLeft, brickOffsetTop), porque c y r valen 0.

El siguiente ladrillo (columna 0, fila 1) se dibujará más abajo.

Intenta hacer tú mismo los cálculos y verás cómo cada ladrillo de la misma columna se dibujará más abajo o más arriba según en qué fila se encuentre.

También verás cómo cada ladrillo de la misma fila se dibujará más a la izquierda o a la derecha según en qué columna se encuentre.

Vamos a terminar la función drawBricks() para que quede así:

```js
function drawBricks() {
  for (c = 0; c < brickColumnCount; c++) {
    for (r = 0; r < brickRowCount; r++) {
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
```

## Dibujar los bloques (ahora sí)

Lo estamos haciendo muy bien, pero si has probado te habrás dado cuenta de que no se dibuja nada. ¿Qué es lo que falla?

Pues, sencillamente, que tenemos definida la función drawBricks() pero no la llamamos desde ningún sitio.

Añade drawBricks() dentro de draw(), justo antes de drawBall ():

```js
drawBricks();
```

## Compara tu código

Compara tu código con este:

{{JSFiddleEmbed("https://jsfiddle.net/kundan333/myd4vbwg/2/","","320")}}

> **Nota:** Prueba a cambiar el número de bloques por fila o columna, o sus posiciones (utiliza las variables que definiste al principio de este capítulo).

## Pasos siguientes

¡Así que ahora tenemos ladrillos! Un gran avance pero... la pelota no los rompe, simplemente los atraviesa. En el siguiente capítulo lo arreglaremos: [Detección de colisiones](/es/docs/Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Deteccion_colisiones).

{{PreviousNext("Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Fin_del_juego", "Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Deteccion_colisiones")}}
