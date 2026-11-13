---
title: Rebotar en las paredes
slug: Games/Tutorials/2D_breakout_game_pure_JavaScript/Bounce_off_the_walls
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Move_the_ball", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Player_paddle_and_controls")}}

Este es el **paso 3** de los 11 del [tutorial para crear un juego Breakout con JavaScript puro](/es/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript). Ahora que ya introdujimos la física del movimiento, podemos empezar a implementar la detección de colisiones en el juego. Primero veremos las paredes.

## Rebotar en los límites del mundo

La [ley de la reflexión](<https://es.wikipedia.org/wiki/Reflexión_(física)>) nos dice que, en un mundo ideal, cuando una pelota choca con una superficie plana como una pared, rebota: la componente de la velocidad perpendicular a la pared se invierte, mientras que la componente paralela a la pared se conserva. Por ejemplo, si la pelota choca con el límite inferior mientras se mueve hacia abajo a la derecha, debería rebotar y moverse hacia arriba a la derecha.

Podemos implementar esta lógica como otro método de `Ball`. Este método recibe dos indicadores booleanos que indican si la pelota chocó con una pared vertical, con una horizontal o con ambas (en cuyo caso rebota por el mismo camino por el que llegó).

```js
class Ball {
  // …
  onCollide({ x, y }) {
    if (x) {
      this.vel.x = -this.vel.x;
    }
    if (y) {
      this.vel.y = -this.vel.y;
    }
  }
}
```

Haremos la detección de colisiones justo después de actualizar la posición. El movimiento de la pelota se actualizará así, suponiendo que se mueve directamente hacia la izquierda con `vx = -1`:

1. Fotograma 1: en `x = 1`, `vx = -1`
2. Fotograma 2: en `x = 0`; se detecta una colisión, así que la velocidad pasa a ser `vx = 1`
3. Fotograma 3: en `x = 1`, `vx = 1`

> [!NOTE]
> En el fotograma 2, es posible que `x` sea menor que 0, por ejemplo si `vx = -2`, de modo que la pelota se superpone con la pared. Como esto no dura más de unos pocos fotogramas, la mayoría de los motores de juegos lo toleran, porque simplifica mucho los cálculos. También puedes ajustar la posición de la pelota para evitar la superposición, por ejemplo, estableciendo `x = 0` siempre que `x <= 0`.

La lógica esencial es la siguiente:

```js
const x = hittingLeftBoundary || hittingRightBoundary;
const y = hittingTopBoundary || hittingBottomBoundary;
if (x || y) {
  ball.onCollide({ x, y });
}
```

Solo tenemos que reemplazar cada una de las variables de las condiciones por las expresiones adecuadas. Tomemos como ejemplo el límite izquierdo. Su coordenada `x` es 0, lo que significa que, siempre que el borde izquierdo de la pelota tenga una coordenada `x` menor o igual que 0 y se esté moviendo hacia la izquierda, sabemos que ha chocado con el límite.

> [!NOTE]
> Imagina lo siguiente: la pelota se mueve hacia la izquierda, se superpone con la pared (la coordenada `x` es negativa) e invierte la dirección. Sin embargo, el siguiente fotograma ocurre tan rápido que la pelota todavía no ha salido del todo de la pared (la coordenada `x` sigue siendo negativa). Sin esta condición, se dispararía otra colisión y la dirección se invertiría de nuevo. Esto se conoce como [collision jitter](https://docs.flatredball.com/flatredball/tutorials/code-tutorials/collision-jitter) (temblor por colisión), un error habitual en los juegos, sobre todo en los antiguos que no usan motores de juegos consolidados. Lo resolvemos añadiendo la condición "se mueve hacia la izquierda"; también puede resolverse implementando el "ajuste para evitar la superposición" mencionado antes.

Para obtener el borde izquierdo de la pelota, tenemos que restar la mitad de su ancho a la posición del centro, igual que hacemos para obtener las coordenadas de `drawImage()`.

```js
const hittingLeftBoundary = ball.pos.x - ball.size.w / 2 <= 0 && ball.vel.x < 0;
```

Las implementaciones de los otros tres límites quedan como ejercicio; recuerda que el límite derecho tiene una coordenada `x` igual a `canvas.width`, mientras que los límites superior e inferior tienen coordenadas `y` de 0 y `canvas.height`, respectivamente.

> [!NOTE]
> Aquí aproximamos la pelota como un cuadrado centrado en `ball.pos`, de tamaño `ball.size.w` por `ball.size.h` (que son las dimensiones de la imagen PNG), porque es más fácil calcular la superposición de cuadrados que la de formas geométricas arbitrarias. Esto se conoce como _hitbox_ (caja de colisión). Un objeto también puede tener muchas hitboxes si su geometría es compleja. Como nuestro recurso PNG no tiene relleno, la hitbox basada en la imagen circunscribe con bastante precisión el círculo dibujado, salvo por el espacio sobrante en las cuatro esquinas. Cuanto más complejo sea el objeto, más difícil es crear un conjunto de hitboxes preciso sin perder rendimiento.

## Incorporar el manejo de colisiones

Mantenemos la detección de colisiones fuera de los objetos, porque la mayoría de las colisiones ocurren entre dos objetos y, además, puede que queramos controlar cuándo y cómo se producen. La clase `Ball` solo se encarga de proporcionar la `hitbox` y la respuesta `onCollide()`. Implementamos `hitbox` como un getter:

```js
class Ball {
  // …
  get hitbox() {
    return {
      left: this.pos.x - this.size.w / 2,
      right: this.pos.x + this.size.w / 2,
      top: this.pos.y - this.size.h / 2,
      bottom: this.pos.y + this.size.h / 2,
    };
  }
}
```

El getter calcula los bordes a partir de la posición y el tamaño actuales de la pelota cada vez que leemos `ball.hitbox`. Así evitamos guardar un segundo conjunto de coordenadas que tendríamos que actualizar cada vez que la pelota se mueve.

Ahora añade el manejador de colisiones fuera de la clase. Recibe un objeto que expone `hitbox`, `vel` y `onCollide()`, junto con el ancho y el alto del mundo:

```js
function handleWallCollisions(object, width, height) {
  const hitbox = object.hitbox;
  const hittingLeftBoundary = hitbox.left <= 0 && object.vel.x < 0;
  const hittingRightBoundary = hitbox.right >= width && object.vel.x > 0;
  const hittingTopBoundary = hitbox.top <= 0 && object.vel.y < 0;
  const hittingBottomBoundary = hitbox.bottom >= height && object.vel.y > 0;

  const x = hittingLeftBoundary || hittingRightBoundary;
  const y = hittingTopBoundary || hittingBottomBoundary;
  if (x || y) {
    object.onCollide({ x, y });
  }
}
```

Dentro de la función principal `update()`, llama al manejador justo después de `ball.move()`:

```js
ball.move(dt);
handleWallCollisions(ball, canvas.width, canvas.height);
```

Ahora el bucle del juego mueve la pelota, gestiona las colisiones con las paredes y después la dibuja. El algoritmo de colisiones actual es muy sencillo y permite la "penetración temporal" mencionada antes. Más adelante, cuando añadamos más objetos, mejoraremos este algoritmo.

## Compara tu código

Esto es lo que deberías tener hasta ahora, funcionando en vivo. Para ver su código fuente, haz clic en el botón "Play".

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
  get hitbox() {
    return {
      left: this.pos.x - this.size.w / 2,
      right: this.pos.x + this.size.w / 2,
      top: this.pos.y - this.size.h / 2,
      bottom: this.pos.y + this.size.h / 2,
    };
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
  onCollide({ x, y }) {
    if (x) {
      this.vel.x = -this.vel.x;
    }
    if (y) {
      this.vel.y = -this.vel.y;
    }
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
  handleWallCollisions(ball, canvas.width, canvas.height);

  ctx.fillStyle = "#eeeeee";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ball.draw();

  requestAnimationFrame(update);
}

function handleWallCollisions(object, width, height) {
  const hitbox = object.hitbox;
  const hittingLeftBoundary = hitbox.left <= 0 && object.vel.x < 0;
  const hittingRightBoundary = hitbox.right >= width && object.vel.x > 0;
  const hittingTopBoundary = hitbox.top <= 0 && object.vel.y < 0;
  const hittingBottomBoundary = hitbox.bottom >= height && object.vel.y > 0;

  const x = hittingLeftBoundary || hittingRightBoundary;
  const y = hittingTopBoundary || hittingBottomBoundary;
  if (x || y) {
    object.onCollide({ x, y });
  }
}
```

{{EmbedLiveSample("compara tu código", "", 480, , , , , "allow-modals")}}

## Próximos pasos

Esto ya empieza a parecerse más a un juego, pero todavía no podemos controlarlo de ninguna forma. Ya es hora de introducir la [paleta del jugador y los controles](/es/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Player_paddle_and_controls).

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Move_the_ball", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Player_paddle_and_controls")}}
