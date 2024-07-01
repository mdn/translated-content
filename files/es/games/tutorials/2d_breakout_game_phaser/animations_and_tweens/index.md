---
title: Animaciones e interpolaciones
slug: Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Extra_lives", "Games/Workflows/2D_Breakout_game_Phaser/Buttons")}}

Este es el paso **14** de 16 del tutorial [Gamedev Phaser](/es/docs/Games/Workflows/2D_Breakout_game_Phaser). Puedes encontrar el código fuente tal y cómo quedaría al completar la lección en [Gamedev-Phaser-Content-Kit/demos/lesson14.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson14.html).

Para hacer el juego más vistoso y vivo, podemos usar animaciones e interpolaciones. Esto provocará una experencia de juego mejor y más entretenida. Exploraremos cómo implementar animaciones e interpolaciones Phaser en nuestro juego.

## Animaciones

En Phaser, las animaciones implican tomar una hoja de sprites externa y mostrar los sprites de forma secuencial. Como ejemplo, haremos que una bola se tambalee cuando toque algo.

En primer lugar toma la hoja de sprites de Github y guardala en el directorio `/img`.

A continuación, cargaremos la hoja de cálculo : coloca la siguiente linea en la parte inferior de su función `preload()`:

```js
game.load.spritesheet("ball", "img/wobble.png", 20, 20);
```

En lugar de cargar una sola imagen de la bola, podemos cargar toda la hoja de cálculo, una colección de imágenes diferentes. Mostraremos los sprites de forma secuencial para crear la ilusión de animación. Los dos parámetros adicionales del método `spritesheet()` determinan el ancho y la altura de cada fotograma en el archivo de spritesheet dado, indicando al programa cómo cortarlo para obtener los marcos individuales.

## Cargando la animación

A continuación ve a tu función create(), encuentra la linea que carga el sprite de la bola, y debajo coloca la linea que llama a `animations.add()` que se muestra a continuación:

```js
ball = game.add.sprite(50, 250, "ball");
ball.animations.add("wobble", [0, 1, 0, 2, 0, 1, 0, 2, 0], 24);
```

Para añadir una animación al objeto usaremos el método `animations.add()`, que contiene los siguientes parámetros:

- El nombre que elegimos para la animación.
- Una matriz que define el orden en que se muestran los cuadros durante la animación. Si miras de nuevo la imagen `wobble.png`, verás que hay tres marcos. Phaser extrae estos y almacena las referencias en una matriz: posiciones 0,1, y 2. La matriz anterior dice que estamos mostrando los fotogramas 0, luego 1, después 0, etc.
- La tasa de frames, en fps. Ya que estamos ejecutando la animación en 24fps y hay 9 cuadros, la animación se mostrará tres veces por segundo.

## Aplicando la animación cuando la pelota golpea el remo

En la llamada al método `arcade.collide()` que maneja la colisión entre la pelota y la paleta (la primera linea dentro de `update()`, ver abajo) podemos agregar un parámetro adicional que especifica una función que se ejecutará cada vez que ocurra la colisión, de la misma manera que la función `ballHitBrick()`. Actualiza la primera linea dentro de `update()` como se muestra a continuación:

```js
function update() {
  game.physics.arcade.collide(ball, paddle, ballHitPaddle);
  game.physics.arcade.collide(ball, bricks, ballHitBrick);
  paddle.x = game.input.x || game.world.width * 0.5;
}
```

Luego podemos crear la función `ballHitPaddle()` (con `ball` y `paddle` como parámetros por defecto), reproduciendo la animación de oscilación cuando se llama. Añade la función justo antes de la etiqueta de cierre `</script>`:

```js
function ballHitPaddle(ball, paddle) {
  ball.animations.play("wobble");
}
```

La animación se muestra cada vez que la pelota golpea la paleta. También puedes agregar la llamada a `animations.play()` dentro de la función `ballHitBrick()`, si crees que el juego se verá mejor.

## Interpolaciones

Mientras que las animaciones reproducen sprites externos secuencialmente, las interpolaciones animan suavemente las propiedades de un objeto en el mundo del juego como el ancho o la opacidad.

Agreguemos una interpolación a nuestro juego para hacer que los ladrillos desaparezcan suavemente cuando son golpeados por la pelota. Ve a la función `ballhitBrick()`, busca la linea `brick.kill();` , y reemplazala por lo siguiente:

```js
var killTween = game.add.tween(brick.scale);
killTween.to({ x: 0, y: 0 }, 200, Phaser.Easing.Linear.None);
killTween.onComplete.addOnce(function () {
  brick.kill();
}, this);
killTween.start();
```

Veamos esto para que puedas saber lo que está pasando:

1. Al definir una nueva interpolación, debes especificar qué propiedad se interpolará; en nuestro caso, en lugar de ocultar los ladrillos instantáneamente cuando la bola los golpea, haremos que su ancho y altura se ajusten a cero, por lo que desaparecerán. Al final usamos el método, `add.tween()`, especificando `brick.scale` como el argumento, ya que esto es lo que queremos interpolar.
2. El método `to()` define el estado del objeto al final de la interpolación. Toma un objeto que contenga los valores finales deseados del parámetro elegido (la escala toma un valor de escala, 1 es 100% del tamaño, 0 es 0% del tamaño, etc.), el tiempo de interpolación en milisegundos y el tipo de interpolación.
3. También añadiremos el controlador de eventos opcional `onComplete`, que define una función que se ejecutará cuando finalice la interpolación.
4. Lo último que debe hacer es iniciar la interpolación de inmediato utilizando `start()`.

Esa es la versión expandida de la definición de interpolación, pero también podemos usar la sintaxis abreviada:

```js
game.add
  .tween(brick.scale)
  .to({ x: 2, y: 2 }, 500, Phaser.Easing.Elastic.Out, true, 100);
```

Esta interpolación duplicará la escala del ladrillo en medio segundo con el uso de Elastic easing, se iniciará automáticamente, y tendrá un retardo de 100 milisegundos.

## Compara tu código

Puedes comprobar el código final de esta lección en la demo de abajo, y probarlo para entender mejor cómo funciona:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/9o4pakrb/","","400")}}

## Próximos pasos

Las animaciones y las interpolaciones se ven muy bien, pero podemos agregar más a nuestro juego. En la siguiente lección veremos cómo manejar los botones.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Extra_lives", "Games/Workflows/2D_Breakout_game_Phaser/Buttons")}}
