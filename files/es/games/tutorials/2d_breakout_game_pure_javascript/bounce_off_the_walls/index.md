---
title: Rebota en las paredes
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Mueve_la_bola", "Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Control_pala_y_teclado")}}

Este es el **tercer** paso de 10 del [tutorial Canvas para el desarrollo de juegos](/es/docs/Games/Workflows/Breakout_game_from_scratch). Puedes encontrar el código fuente y pegarle un vistazo después de completar esta lección [Gamedev-Canvas-workshop/lesson3.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson03.html).

Es agradable ver nuestra bola moviéndose, pero desaparece rápidamente de la pantalla, limitando la diversión que podemos tener con ella. Para superar esto, implementaremos una detección de colisión muy simple (que se explicará [más adelante](/es/docs/Games/Workflows/Breakout_game_from_scratch/Collision_detection) con más detalle) para hacer que la pelota rebote en los cuatro bordes del Canvas.

## Detección de colisión simple

Para detectar la colisión verificamos si la bola está tocando (chocando con) la pared y si es así, cambiaremos la dirección de su movimiento en consecuencia.

Para facilitar los cálculos, definamos una variable llamada `ballRadius` que mantendrá el radio del círculo dibujado y se utilizará para los cálculos. Añade esto a tu código, en algún lugar por debajo de las declaraciones de variables existentes:

```js
var ballRadius = 10;
```

Ahora actualice la línea que dibuja la bola dentro de la funcion drawBall() a esto:

```js
ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
```

### Rebotando arriba y abajo

Hay cuatro paredes para rebotar la pelota - vamos a centrarnos en la de arriba en primer lugar. Tendremos que comprobar, en cada fotograma, si la pelota está tocando el borde superior del Canvas - si es así, invertiremos el movimiento de la bola para que empiece a moverse en la dirección opuesta y se mantenga dentro de los límites visibles. Recordando que el sistema de coordenadas comienza desde la parte superior izquierda, podemos llegar a algo como esto:

```js
if (y + dy < 0) {
  dy = -dy;
}
```

Si el valor de y de la posición de la bola es menor que cero, cambie la dirección del movimiento en el eje y, estableciéndolo igual a sí mismo, invertido. Si la pelota se movía hacia arriba con una velocidad de 2 píxeles por fotograma, ahora se moverá "arriba" con una velocidad de -2 píxeles, lo que en realidad equivale a bajar a una velocidad de 2 píxeles por fotograma.

El código anterior se ocuparía de que la pelota rebote desde el borde superior, así que ahora vamos a pensar en el borde inferior:

```js
if (y + dy > canvas.height) {
  dy = -dy;
}
```

Si la posición y de la pelota es mayor que la altura del canvas (recuerde que contamos los valores y desde la parte superior izquierda, de modo que el borde superior empieza en 0 y el borde inferior está en 480 píxeles, la altura del canvas), entonces rebota del borde inferior invirtiendo el movimiento del eje y como antes.

Podríamos fusionar esas dos sentencias en una para ahorrar código:

```js
if (y + dy > canvas.height || y + dy < 0) {
  dy = -dy;
}
```

Si cualquiera de las dos afirmaciones es verdadera, invierte el movimiento de la pelota.

### Rebotando en la izquierda y derecha

Tenemos el borde superior e inferior cubiertos, así que pensemos en los de izquierda y derecha. Es muy similar en realidad, todo lo que tienes que hacer es repetir las declaraciones de x en lugar de y:

```js
if (x + dx > canvas.width || x + dx < 0) {
  dx = -dx;
}

if (y + dy > canvas.height || y + dy < 0) {
  dy = -dy;
}
```

En este punto, debe insertar el bloque de código anterior en la función draw(), justo antes de la llave de cierre.

### ¡La pelota sigue desapareciendo en la pared!

Prueba tu código en este punto, y te quedarás impresionado - ¡ahora tenemos una pelota que rebotó en los cuatro bordes del canvas! Pero tenemos otro problema sin embargo - cuando la bola golpea cada pared se hunde en ella levemente antes de cambiar la dirección:

![](ball-in-wall.png)

Esto es porque estamos calculando el punto de colisión de la pared y el centro de la bola, mientras que deberíamos hacerlo por su circunferencia. La bola debe rebotar justo después de que toca la pared, no cuando ya está a medio camino en la pared, así que vamos a ajustar nuestras declaraciones un poco para incluir eso. Actualice el último código que agregó, a esto:

```js
if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
  dx = -dx;
}
if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
  dy = -dy;
}
```

Cuando la distancia entre el centro de la bola y el borde de la pared es exactamente igual que el radio de la pelota, cambiará la dirección del movimiento. Restando el radio de un ancho del eje y añadiéndolo al otro nos da la impresión de una adecuada detección de colisiones - la pelota rebota de las paredes como debería hacerlo.

## Compara tu código

Chequea el código acabado para esta parte con el tuyo, y juega:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/redj37dc/","","370")}}

> **Nota:** cambia el color de la bola a un color al azar, cada vez que golpea una pared.

## Siguientes pasos

Ahora hemos llegado al punto donde nuestra pelota se mueve y permanece en el tablero de juego. En el capítulo cuarto, veremos la implementación del control de una pala - vea [Control de Pala y teclado](/es/docs/Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Control_pala_y_teclado).

{{PreviousNext("Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Mueve_la_bola", "Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Control_pala_y_teclado")}}
