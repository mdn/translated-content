---
title: Mover la pelota
slug: Games/Tutorials/2D_breakout_game_pure_JavaScript/Move_the_ball
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Initialize_the_canvas", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Bounce_off_the_walls")}}

Este es el **paso 2** de los 11 del [tutorial para crear un juego Breakout con JavaScript puro](/es/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript). En este artículo veremos cómo añadir sprites a nuestro mundo de juego. Nuestro juego tendrá una pelota que rueda por la pantalla, rebota en una paleta y destruye ladrillos para ganar puntos.

Manejar la pelota implica dos pasos: cargar el recurso de la pelota y dibujarlo en la posición correcta mientras se mueve. Técnicamente, vamos a pintar la pelota en la pantalla, borrarla y volver a pintarla en una posición ligeramente distinta en cada fotograma para dar la impresión de movimiento, igual que funciona el movimiento en el cine.

## Definir un bucle de dibujo

Para actualizar constantemente el dibujo del canvas en cada fotograma, necesitamos definir una función de dibujo que se ejecute una y otra vez, con un conjunto distinto de valores de las variables cada vez para cambiar la posición de los sprites, etc.

Puede que quieras usar {{domxref("Window.setInterval", "setInterval()")}} para programar que la función se ejecute cada pocos milisegundos (por ejemplo, 10, lo que serían 100 fotogramas por segundo). Funciona, pero causa problemas:

1. Los temporizadores no son exactos, así que no puedes dar por hecho que la función se llamará exactamente a intervalos de 10 milisegundos.
2. Si tu función de dibujo es lenta y tarda más de 10 milisegundos en pintar el fotograma, se perderá el siguiente ciclo, y estos retrasos se acumulan, lo que hace que el tiempo del juego se desincronice con el tiempo real.

Aun así, puedes usar `setInterval` (o `setTimeout`), que tiene la ventaja de que permite configurar la tasa de fotogramas, pero tendrás que implementar cierta lógica para regular los tiempos de espera y evitar los problemas anteriores. Para simplificar, usaremos {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}}, que hace que el navegador llame automáticamente a la función de dibujo la próxima vez que pueda volver a pintar. La función recibe una marca de tiempo que nos indica cuánto tiempo ha pasado desde el último fotograma, así que podemos decidir la distancia que debería haber recorrido la pelota mientras tanto.

Reemplaza el contenido de tu archivo `script.js` por lo siguiente:

```js
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

requestAnimationFrame(update);

function update(timestamp) {
  ctx.fillStyle = "#eeeeee";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // sigue añadiendo cosas aquí...

  requestAnimationFrame(update);
}
```

Ahora el juego ya se ejecuta en un bucle cuando recargas el HTML. Sin embargo, todavía no hemos definido ninguna parte móvil, así que aún no tiene ningún efecto visible.

## Cargar el sprite de la pelota

Todos nuestros objetos del juego (pelota, paleta y ladrillos) se implementarán como clases, para que puedan encapsular su estado y exponer su comportamiento.

Nuestra pelota estará representada por una imagen PNG. Usaremos {{domxref("CanvasRenderingContext2D/drawImage", "ctx.drawImage()")}} para dibujar el PNG en el canvas. Entre los muchos tipos de datos de entrada que acepta, usaremos un {{domxref("HTMLImageElement")}}, porque se encarga automáticamente de obtener y decodificar la imagen.

> [!NOTE]
> Por supuesto, puedes dibujar un círculo relleno directamente en el canvas con {{domxref("CanvasRenderingContext2D/arcTo", "ctx.arcTo()")}} y {{domxref("CanvasRenderingContext2D/fill", "ctx.fill()")}}, pero en un juego real tu pelota probablemente sea más compleja que un simple círculo, así que tarde o temprano querrás usar una imagen aparte de todos modos.

Primero define la clase:

```js
class Ball {
  asset;
  ctx;
  size = { w: undefined, h: undefined };
  constructor(url, ctx) {
    this.asset = new Image();
    this.asset.src = url;
    this.ctx = ctx;
  }
  async preload() {
    await this.asset.decode();
    if (this.size.w === undefined) {
      this.size.w = this.asset.width;
      this.size.h = this.asset.height;
    }
  }
}
```

El constructor {{domxref("HTMLImageElement/Image", "Image()")}} crea un `HTMLImageElement` sin añadirlo al DOM (no vamos a mostrar el propio elemento `<img>`, solo lo usaremos para pintar en el canvas). La asignación a {{domxref("HTMLImageElement/src", "src")}} inicia la solicitud de la imagen `ball.png`. La función `preload()` llama a {{domxref("HTMLImageElement/decode", "decode()")}}, que devuelve una promesa que se cumple cuando la imagen correspondiente se ha obtenido y decodificado correctamente. Cuando eso ocurre, podemos guardar las dimensiones de la imagen para cálculos posteriores.

Reemplaza la llamada `requestAnimationFrame(update);` que está encima de la definición de la función `update` por lo siguiente:

```js
const ball = new Ball("img/ball.png", ctx);

Promise.all([ball].map((obj) => obj.preload())).then(() =>
  requestAnimationFrame(update),
);
```

Llamamos a `Promise.all([ball].map((obj) => obj.preload()))`, que obtiene una única promesa que se cumple cuando todos los recursos se precargan correctamente. Cuando eso ocurre, empezamos a dibujar con `requestAnimationFrame(update)`.

Por supuesto, para cargar la imagen, esta debe estar disponible en el directorio de tu código. [Descarga la imagen de la pelota de nuestro sitio de recursos](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/ball.png) y guárdala en un directorio `/img`, en la misma ubicación que tu archivo `index.html`.

Ahora, para mostrarla en la pantalla, llamamos a `drawImage()` y le pasamos tanto la imagen `ball` como las coordenadas x e y del canvas donde queremos añadirla. Añade lo siguiente a tu clase `Ball`:

```js
class Ball {
  // …
  draw() {
    this.ctx.drawImage(this.asset, 50 - this.size.w / 2, 50 - this.size.h / 2);
  }
}
```

> [!NOTE]
> Las coordenadas que pasas a `drawImage()` son las de la _esquina superior izquierda_ de la imagen. En la práctica, suele ser más cómodo seguir el _centro_ de los objetos, para que todas las direcciones se puedan procesar de la misma forma (sobre todo para la [detección de colisiones](/es/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Bounce_off_the_walls)). Por eso, indicamos las coordenadas deseadas para el _centro_ de la pelota como `(50, 50)` y restamos `width / 2` y `height / 2` para obtener la ubicación correspondiente de la esquina superior izquierda.

¡Eso es todo! Si cargas tu archivo `index.html`, verás la imagen ya cargada y dibujada en el canvas.

## Actualizar la posición de la pelota en cada fotograma

Por ahora, cada llamada a `ball.draw()` pinta la pelota exactamente en el mismo lugar, así que la pelota parece inmóvil. Podemos mantener campos de estado separados que sigan la posición y la velocidad del centro de la pelota. Justo debajo de las declaraciones de campos existentes en `class Ball`, añade las definiciones de `pos` y `vel`, y reemplaza el método `draw()` para que use esas coordenadas:

```js
class Ball {
  // …
  size = { w: undefined, h: undefined };
  pos = { x: 50, y: 50 };
  vel = { x: 150, y: 150 };
  // …
  draw() {
    this.ctx.drawImage(
      this.asset,
      this.pos.x - this.size.w / 2,
      this.pos.y - this.size.h / 2,
    );
  }
}
```

La velocidad se establece en 150 píxeles por segundo en ambos ejes. Actualizaremos la posición de la pelota en cada llamada a `update()`. Tenemos que calcular cuánto desplazarla desde la última posición, con la fórmula `dx = vx * dt`, donde `vx` es su velocidad en el eje x y `dt` es el tiempo transcurrido desde la última llamada a `update()`. Como la función `update()` recibe cada vez un `timestamp`, podemos compararlo con el de la iteración anterior para obtener `dt`. Añade lo siguiente a la clase:

```js
class Ball {
  // …
  move(dt) {
    this.pos.x += this.vel.x * dt;
    this.pos.y += this.vel.y * dt;
  }
}
```

Este método suma el desplazamiento calculado a las coordenadas de la pelota en el canvas, en cada fotograma. Más adelante añadiremos más lógica a esta función, como la detección de colisiones.

Añade lo siguiente justo después de `const ctx`:

```js
let lastTimestamp = null;
```

Dentro de la función `update()`, ahora podemos llamar a `ball.move()` y a `ball.draw()` para que la clase se actualice a sí misma, mientras que la función `update()` solo lleva la cuenta del tiempo:

```js
const dt = lastTimestamp === null ? 0 : (timestamp - lastTimestamp) / 1000;
lastTimestamp = timestamp;
ball.move(dt);

ctx.fillStyle = "#eeeeee";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ball.draw();
```

En el primer fotograma, `lastTimestamp` es `null`, así que `dt` es cero y la pelota se queda en su posición inicial. En los fotogramas siguientes, `dt` es el tiempo transcurrido desde el fotograma anterior, en segundos. Las marcas de tiempo están en milisegundos, así que dividimos su diferencia entre 1000 para que coincida con las unidades de la velocidad.

Recarga `index.html` y deberías ver la pelota rodando por la pantalla.

> [!NOTE]
> El canvas no se borra automáticamente cada vez que se llama a `update()`. La posición anterior de la pelota desaparece porque volvemos a dibujar todo el fondo con `ctx.fillRect(0, 0, canvas.width, canvas.height)`, que se pinta encima de cualquier contenido existente. Si quitas esa línea, verás que la pelota deja un rastro.

## Compara tu código

Esto es lo que deberías tener hasta ahora, funcionando en vivo. Para ver su código fuente, haz clic en el botón "Play".

Si no ves la pelota, prueba a recargar la página: probablemente la pelota ya se salió de la pantalla.

```html hidden
<canvas id="game-canvas" width="480" height="320"></canvas>
```

```css hidden
* {
  padding: 0;
  margin: 0;
}

body {
  min-height: 100vh;
  display: grid;
  place-items: center;
}

canvas {
  display: block;
  width: min(100vw, 150vh);
  height: auto;
}
```

```js hidden
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
let lastTimestamp = null;

class Ball {
  asset;
  ctx;
  size = { w: undefined, h: undefined };
  pos = { x: 50, y: 50 };
  vel = { x: 150, y: 150 };
  constructor(url, ctx) {
    this.asset = new Image();
    this.asset.src = url;
    this.ctx = ctx;
  }
  async preload() {
    await this.asset.decode();
    if (this.size.w === undefined) {
      this.size.w = this.asset.width;
      this.size.h = this.asset.height;
    }
  }
  draw() {
    this.ctx.drawImage(
      this.asset,
      this.pos.x - this.size.w / 2,
      this.pos.y - this.size.h / 2,
    );
  }
  move(dt) {
    this.pos.x += this.vel.x * dt;
    this.pos.y += this.vel.y * dt;
  }
}

const ball = new Ball(
  "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/ball.png",
  ctx,
);

Promise.all([ball].map((obj) => obj.preload())).then(() =>
  requestAnimationFrame(update),
);

function update(timestamp) {
  const dt = lastTimestamp === null ? 0 : (timestamp - lastTimestamp) / 1000;
  lastTimestamp = timestamp;
  ball.move(dt);

  ctx.fillStyle = "#eeeeee";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ball.draw();

  requestAnimationFrame(update);
}
```

{{EmbedLiveSample("compara tu código", "", 480, , , , , "allow-modals")}}

## Próximos pasos

Ahora podemos pasar a la siguiente lección y ver cómo hacer que la pelota [rebote en las paredes](/es/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Bounce_off_the_walls).

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Initialize_the_canvas", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Bounce_off_the_walls")}}
