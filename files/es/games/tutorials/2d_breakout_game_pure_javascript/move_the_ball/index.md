---
title: Mueve la bola
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Create_the_Canvas_and_draw_on_it", "Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Bounce_off_the_walls")}}

Este es el segundo paso de los 10 del [tutorial de Canvas para el desarrollo de juegos](/es/docs/Games/Workflows/Breakout_game_from_scratch). Puedes encontrar el código fuente como debería quedar después de completar la lección en [Gamedev-Canvas-workshop/lesson2.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson02.html).

Ya sabes cómo dibujar una pelota, lo has aprendido en el artículo anterior. Ahora vamos a hacer que se mueva. Técnicamente, estaremos pintando la pelota en la pantalla, borrándola y luego pintándola de nuevo en una posición ligeramente diferente cada fotograma para dar la impresión de movimiento, igual que se hace en las películas.

## Definir un bucle de dibujo

Para actualizar el dibujo del lienzo en cada fotograma, necesitamos definir una función de dibujo que se ejecutará una y otra vez, cambiando una serie de variables para modificar la posición de cada personaje (sprite). Para que una misma función se ejecute una y otra vez puedes utilizar una función de sincronización de JavaScript, como {{domxref("WindowTimers.setInterval()", "setInterval()")}} or {{domxref("window.requestAnimationFrame()", "requestAnimationFrame()")}}.

Elimina todo el código JavaScript que tienes ahora mismo en de tu archivo HTML, excepto las dos primeras líneas, y añade lo siguiente debajo de ellas. La función draw() se ejecutará dentro de setInterval cada 10 milisegundos:

```js
function draw() {
  // código para dibujar
}
setInterval(draw, 10);
```

Gracias a la naturaleza infinita de setInterval, la función draw () se llamará cada 10 milisegundos por siempre, o hasta que lo detengamos. Ahora, vamos a dibujar la bola. A grega lo siguiente dentro de tu función draw ():

```js
ctx.beginPath();
ctx.arc(50, 50, 10, 0, Math.PI * 2);
ctx.fillStyle = "#0095DD";
ctx.fill();
ctx.closePath();
```

Prueba tu código actualizado ahora — la bola debería repintarse en cada fotograma (frame).

## Hacer que se mueva

Aunque la bola se está dibujando cada 10 milisegundos no se nota porque no hay movimiento, se dibuja una y otra vez en el mismo sitio.Vamos a cambiar eso. En primer lugar, en lugar de dibujar siempre en la posición (50, 50) definiremos un punto de inicio en la parte central inferior del lienzo en las variables llamadas x e y, a continuación, las utilizaremos para definir la posición en la que se dibuja el círculo.

Primero, agrega las dos líneas siguientes a la función draw (), para definir x e y:

```js
var x = canvas.width / 2;
var y = canvas.height - 30;
```

A continuación actualiza la función `draw()` para usar las variables x e y en el método {{domxref("CanvasRenderingContext2D.arc()","arc()")}}, como se muestra en la siguiente línea resaltada:

```js
function draw() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
```

Ahora viene la parte importante: queremos añadir un valor pequeño a x e y después de que cada fotograma se haya dibujado para que parezca que la pelota se está moviendo. Definamos estos valores pequeños como dx y dy, y establezcamos sus valores en 2 y -2 respectivamente. Agrega lo siguiente debajo de sus definiciones de variables x e y:

```js
var dx = 2;
var dy = -2;
```

Lo último que hay que hacer es actualizar x e y con nuestras variables dx y dy en cada fotograma, de modo que la bola será pintada en la nueva posición en cada actualización. Agrega las dos nuevas líneas siguientes indicadas a continuación a la función draw ():

```js
function draw() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
  x += dx;
  y += dy;
}
```

Guarda el código de nuevo y pruébalo en tu navegador. Esto funciona bien, aunque parece que la bola está dejando un rastro detrás de ella:

![](ball-trail.png)

## Borrar el lienzo antes de cada fotograma

La bola está dejando un rastro porque estamos pintando un nuevo círculo en cada fotograma sin borrar el anterior. No te preocupes, porque hay un método para borrar todo el contenido de lienzo: {{domxref("CanvasRenderingContext2D.clearRect ()", "clearRect ()")}}. Este método tiene cuatro parámetros: las coordenadas x e y de la esquina superior izquierda de un rectángulo y las coordenadas x e y de la esquina inferior derecha de un rectángulo. En todo el área definida por ese rectángulo se borrará cualquier cosa que se haya pintado antes.

Añade la siguiente nueva línea resaltada a la función draw():

```js
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
  x += dx;
  y += dy;
}
```

Guarda tu código y vuelve a probarlo. Esta vez verás el movimiento de la bola sin dejar rastro. Cada 10 milisegundos se borra todo el lienzo, se dibuja el círculo azul (nuestra pelota) en una posición determinada y los valores x e y se actualizan para el siguiente fotograma.

## Limpiar el código

Vamos a añadir más y más comandos a la función draw () en los próximos artículos, por lo que es bueno mantenerlo lo más simple y limpio posible. Comencemos moviendo el código de dibujo de la bola a una función separada.

Reemplaza la función draw() con las dos funciones siguientes:

```js
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  x += dx;
  y += dy;
}
```

## Compara tu código

Puedes comprobar el código terminado de este artículo en la demostración en vivo a continuación, y jugar con ella para entender mejor cómo funciona:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/3x5foxb1/","","415")}}

> **Nota:** intenta cambiar la velocidad de la bola en movimiento o la dirección hacia la que se mueve.

## Siguientes pasos

Hemos dibujado nuestra bola y hemos hecho que se mueva, pero cuando supera el borde del canvas, desaparece. En el tercer capítulo exploraremos como hacer que [rebote en las paredes](/es/docs/Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Bounce_off_the_walls).

{{PreviousNext("Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Create_the_Canvas_and_draw_on_it", "Games/Workflows/Famoso_juego_2D_usando_JavaScript_puro/Bounce_off_the_walls")}}
