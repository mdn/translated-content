---
title: Construye el muro de ladrillos
slug: Games/Tutorials/2D_breakout_game_pure_JavaScript/Build_the_brick_field
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Game_over", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Track_the_score_and_win")}}

Este es el **6.º paso** de los 11 del [tutorial para crear un juego Breakout con JavaScript puro](/es/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript). Veamos cómo crear un grupo de ladrillos, dibujarlos en la pantalla con un bucle y eliminarlos cuando la pelota los golpea. Construir el muro de ladrillos es un poco más complicado que añadir un solo objeto a la pantalla.

## Dibujar los ladrillos

Todos los ladrillos usan la misma imagen, así que podemos crearla y decodificarla una sola vez y compartirla entre ellos. Añade un mapa estático `assets` y un campo `url` a `GameObject`, y sustituye su constructor y su método `preload()`:

```js
class GameObject {
  static assets = new Map();
  url;
  // …
  constructor(url, ctx) {
    this.url = url;
    this.ctx = ctx;
  }
  async preload() {
    if (!GameObject.assets.has(this.url)) {
      const asset = new Image();
      asset.src = this.url;
      GameObject.assets.set(
        this.url,
        asset.decode().then(() => asset),
      );
    }
    this.asset = await GameObject.assets.get(this.url);
    if (this.size.w === undefined) {
      this.size.w = this.asset.width;
      this.size.h = this.asset.height;
    }
  }
  // …
}
```

La caché asocia cada URL con una promesa que se resuelve con la imagen decodificada. La primera llamada a `preload()` para una URL crea la imagen y empieza a decodificarla; las llamadas posteriores esperan a la misma promesa y reciben la misma imagen. Cada objeto sigue teniendo su propia posición y su propio tamaño.

Al igual que `Ball` y `Paddle`, `Brick` también se basa en la clase `GameObject`. Un ladrillo no tiene posición ni tamaño predeterminados, y hay que indicarlos explícitamente en el constructor. Como los ladrillos tienen dimensiones explícitas, podemos usar los parámetros adicionales `dWidth` y `dHeight` de {{domxref("CanvasRenderingContext2D/drawImage", "ctx.drawImage()")}}, que escala automáticamente la imagen si todavía no tiene las dimensiones deseadas.

```js
class Brick extends GameObject {
  constructor(url, ctx, x, y, w, h) {
    super(url, ctx);
    this.pos = { x, y };
    this.size = { w, h };
  }
  draw() {
    const { left, top } = this.hitbox;
    this.ctx.drawImage(this.asset, left, top, this.size.w, this.size.h);
  }
}
```

También tienes que [descargar la imagen del ladrillo](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/brick.png) y guardarla en tu directorio `/img`.

Pondremos todo el código para dibujar los ladrillos dentro de una función `initBricks`, para mantenerlo separado del resto del código. Añade una llamada a `initBricks` debajo de `colliders.push(paddle);`:

```js
// …
const paddle = new Paddle("img/paddle.png", ctx);
colliders.push(paddle);
const bricks = initBricks();
// …
```

Y asegúrate de que el juego espere a que los ladrillos se precarguen antes de empezar, añadiendo `, ...bricks` al array dentro de `Promise.all()`. Estas llamadas comparten la promesa de decodificación almacenada en caché, así que la imagen del ladrillo solo se decodifica una vez.

Ahora vamos con la función en sí. Añade la función `initBricks` al final del archivo `script.js`. Para empezar, añadimos el objeto `bricksLayout`, que nos será útil muy pronto:

```js
function initBricks() {
  const bricksLayout = {
    width: 50,
    height: 20,
    count: {
      row: 3,
      col: 7,
    },
    offset: {
      top: 50,
      left: 60,
    },
    padding: 10,
  };
  const bricks = [];
  // sigue añadiendo código aquí...
  return bricks;
}
```

Este `bricksLayout` contiene toda la información que necesitamos: el ancho y el alto de un solo ladrillo, el número de filas y columnas de ladrillos que veremos en la pantalla, el desplazamiento superior e izquierdo (la posición del canvas donde empezamos a dibujar los ladrillos) y el espacio de separación entre cada fila y columna de ladrillos.

Ahora, empecemos a crear los ladrillos en sí. Podemos recorrer las filas y las columnas para crear un ladrillo nuevo en cada iteración; añade el siguiente bucle anidado debajo de la línea de código anterior:

```js
for (let c = 0; c < bricksLayout.count.col; c++) {
  for (let r = 0; r < bricksLayout.count.row; r++) {
    const brickX =
      c * (bricksLayout.width + bricksLayout.padding) +
      bricksLayout.offset.left;
    const brickY =
      r * (bricksLayout.height + bricksLayout.padding) +
      bricksLayout.offset.top;

    const newBrick = new Brick(
      "img/brick.png",
      ctx,
      brickX,
      brickY,
      bricksLayout.width,
      bricksLayout.height,
    );
    bricks.push(newBrick);
  }
}
```

Cada posición `brickX` se calcula como `bricksLayout.width` más `bricksLayout.padding`, multiplicado por el número de columna, `c`, más `bricksLayout.offset.left`; la lógica de `brickY` es idéntica, salvo que usa los valores del número de fila, `r`, `bricksLayout.height` y `bricksLayout.offset.top`. Ahora cada ladrillo puede colocarse en su sitio, con un espacio de separación entre ellos, y dibujarse con un desplazamiento respecto a los bordes izquierdo y superior del canvas.

Por último, podemos dibujar estos ladrillos en la pantalla dentro de la función `update()`. Añade lo siguiente debajo de la llamada a `paddle.draw()`:

```js
for (const brick of bricks) {
  brick.draw();
}
```

Si recargas `index.html` en este punto, deberías ver los ladrillos dibujados en la pantalla, a la misma distancia unos de otros.

## Detección de colisiones entre ladrillos y pelota

Pasemos al siguiente reto: la detección de colisiones entre la pelota y los ladrillos. Por suerte, ya implementamos un sistema de colisiones muy genérico, así que basta con conectar nuestros ladrillos a él.

Primero, registra cada ladrillo como colisionador, justo debajo de la llamada a `initBricks()`:

```js
const bricks = initBricks();
for (const brick of bricks) {
  colliders.push(brick);
}
```

Añade un método `onCollide()` a cada ladrillo, que lo elimina de las colecciones `bricks` y `colliders`:

```js
class Brick extends GameObject {
  // …
  onCollide() {
    bricks.splice(bricks.indexOf(this), 1);
    colliders.splice(colliders.indexOf(this), 1);
  }
}
```

El ladrillo tiene que desaparecer lo antes posible, para que la pelota no rebote en él.

¡Y eso es todo! Recarga tu código y deberías ver que la nueva detección de colisiones funciona tal como se esperaba.

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
  touch-action: none;
}
```

```js hidden
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
let lastTimestamp = null;

const baseWallHitbox = {
  left: -Infinity,
  right: Infinity,
  top: -Infinity,
  bottom: Infinity,
};

const colliders = [
  { hitbox: { ...baseWallHitbox, right: 0 } },
  { hitbox: { ...baseWallHitbox, left: canvas.width } },
  { hitbox: { ...baseWallHitbox, bottom: 0 } },
];

class GameObject {
  static assets = new Map();
  url;
  asset;
  ctx;
  size = { w: undefined, h: undefined };
  pos = { x: 0, y: 0 };
  origin = { x: 0.5, y: 0.5 };
  constructor(url, ctx) {
    this.url = url;
    this.ctx = ctx;
  }
  async preload() {
    if (!GameObject.assets.has(this.url)) {
      const asset = new Image();
      asset.src = this.url;
      GameObject.assets.set(
        this.url,
        asset.decode().then(() => asset),
      );
    }
    this.asset = await GameObject.assets.get(this.url);
    if (this.size.w === undefined) {
      this.size.w = this.asset.width;
      this.size.h = this.asset.height;
    }
  }
  get hitbox() {
    const left = this.pos.x - this.size.w * this.origin.x;
    const top = this.pos.y - this.size.h * this.origin.y;
    return {
      left,
      right: left + this.size.w,
      top,
      bottom: top + this.size.h,
    };
  }
  draw() {
    const { left, top } = this.hitbox;
    this.ctx.drawImage(this.asset, left, top);
  }
  onCollide() {}
}

class Ball extends GameObject {
  pos = { x: undefined, y: undefined };
  vel = { x: 150, y: -150 };
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

class Paddle extends GameObject {
  origin = { x: 0.5, y: 1 };
  constructor(url, ctx) {
    super(url, ctx);
    this.pos = { x: ctx.canvas.width / 2, y: ctx.canvas.height - 5 };
  }
}

class Brick extends GameObject {
  constructor(url, ctx, x, y, w, h) {
    super(url, ctx);
    this.pos = { x, y };
    this.size = { w, h };
  }
  draw() {
    const { left, top } = this.hitbox;
    this.ctx.drawImage(this.asset, left, top, this.size.w, this.size.h);
  }
  onCollide() {
    bricks.splice(bricks.indexOf(this), 1);
    colliders.splice(colliders.indexOf(this), 1);
  }
}

const ball = new Ball(
  "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/ball.png",
  ctx,
);
const paddle = new Paddle(
  "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/paddle.png",
  ctx,
);
colliders.push(paddle);
const bricks = initBricks();
for (const brick of bricks) {
  colliders.push(brick);
}

canvas.addEventListener("pointermove", (event) => {
  if (paddle.size.w === undefined) {
    return;
  }
  const bounds = canvas.getBoundingClientRect();
  const x = ((event.clientX - bounds.left) * canvas.width) / bounds.width;
  paddle.pos.x = Math.max(
    paddle.size.w / 2,
    Math.min(canvas.width - paddle.size.w / 2, x),
  );
});

Promise.all([ball, paddle, ...bricks].map((obj) => obj.preload())).then(() => {
  ball.pos.x = paddle.pos.x;
  ball.pos.y = paddle.hitbox.top - ball.size.h / 2;
  requestAnimationFrame(update);
});

function update(timestamp) {
  const dt = lastTimestamp === null ? 0 : (timestamp - lastTimestamp) / 1000;
  lastTimestamp = timestamp;
  moveBall(dt);

  ctx.fillStyle = "#eeeeee";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  paddle.draw();
  for (const brick of bricks) {
    brick.draw();
  }

  requestAnimationFrame(update);
}

function getCollision(moving, velocity, obstacle, dt) {
  const width = moving.right - moving.left;
  const height = moving.bottom - moving.top;
  const movingPos = { x: moving.left, y: moving.top };
  const left = obstacle.left - width;
  const right = obstacle.right;
  const top = obstacle.top - height;
  const bottom = obstacle.bottom;
  const hit = { time: dt, x: null, y: null };

  function checkFace(axis, coordinate, min, max, direction) {
    if (velocity[axis] * direction <= 0) {
      return;
    }
    const time = (coordinate - movingPos[axis]) / velocity[axis];
    if (time < 0 || time > hit.time) {
      return;
    }
    const otherAxis = axis === "x" ? "y" : "x";
    const otherPosition = movingPos[otherAxis] + velocity[otherAxis] * time;
    if (otherPosition < min || otherPosition > max) {
      return;
    }
    if (time < hit.time) {
      hit.x = null;
      hit.y = null;
    }
    hit.time = time;
    hit[axis] = coordinate;
  }

  checkFace("x", left, top, bottom, 1);
  checkFace("x", right, top, bottom, -1);
  checkFace("y", top, left, right, 1);
  checkFace("y", bottom, left, right, -1);

  return hit.x === null && hit.y === null ? null : hit;
}

function moveBall(dt) {
  while (dt > 0) {
    // Evitar llamar al getter repetidamente
    const ballHitbox = ball.hitbox;
    let hitTime = dt;
    let hitX = null;
    let hitY = null;
    let contacts = [];

    for (const collider of colliders) {
      const hit = getCollision(ballHitbox, ball.vel, collider.hitbox, hitTime);
      if (hit === null) {
        continue;
      }
      if (hit.time < hitTime) {
        hitX = null;
        hitY = null;
        contacts = [];
      }
      hitTime = hit.time;
      hitX = hit.x ?? hitX;
      hitY = hit.y ?? hitY;
      contacts.push({ collider, hit });
    }

    ball.move(hitTime);
    dt -= hitTime;

    const ballIsOutOfBounds = ball.hitbox.bottom > canvas.height;
    if (ballIsOutOfBounds) {
      // Lógica de fin del juego
      location.reload();
      return;
    }

    if (contacts.length === 0) {
      break;
    }
    // Ajustar la posición al punto de contacto para evitar errores de coma flotante
    if (hitX !== null) {
      ball.pos.x = hitX + ball.size.w / 2;
    }
    if (hitY !== null) {
      ball.pos.y = hitY + ball.size.h / 2;
    }

    ball.onCollide({ x: hitX !== null, y: hitY !== null });
    for (const { collider, hit } of contacts) {
      collider.onCollide?.({ x: hit.x !== null, y: hit.y !== null });
    }
  }
}

function initBricks() {
  const bricksLayout = {
    width: 50,
    height: 20,
    count: {
      row: 3,
      col: 7,
    },
    offset: {
      top: 50,
      left: 60,
    },
    padding: 10,
  };
  const bricks = [];
  for (let c = 0; c < bricksLayout.count.col; c++) {
    for (let r = 0; r < bricksLayout.count.row; r++) {
      const brickX =
        c * (bricksLayout.width + bricksLayout.padding) +
        bricksLayout.offset.left;
      const brickY =
        r * (bricksLayout.height + bricksLayout.padding) +
        bricksLayout.offset.top;

      const newBrick = new Brick(
        "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/brick.png",
        ctx,
        brickX,
        brickY,
        bricksLayout.width,
        bricksLayout.height,
      );
      bricks.push(newBrick);
    }
  }
  return bricks;
}
```

{{EmbedLiveSample("compara tu código", "", 480, , , , , "allow-modals")}}

## Próximos pasos

Ya podemos golpear los ladrillos y eliminarlos, lo que de por sí es una buena mejora en la jugabilidad. Sería todavía mejor [llevar la cuenta de la puntuación y ganar](/es/docs/Games/Tutorials/2D_breakout_game_Phaser/Track_the_score_and_win) cuando se destruyan todos los ladrillos.

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Game_over", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Track_the_score_and_win")}}
