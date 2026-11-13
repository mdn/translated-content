---
title: Animaciones y tweens
slug: Games/Tutorials/2D_breakout_game_pure_JavaScript/Animations_and_tweens
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Extra_lives", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Buttons")}}

Este es el **paso 9** de los 11 del [tutorial para crear un juego Breakout con JavaScript puro](/es/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript). Veremos cómo implementar animaciones y tweens en nuestro juego para que se vea más vistoso y vivo. Esto dará como resultado una experiencia mejor y más entretenida.

## Animaciones

Una animación de sprites consiste en tomar una hoja de sprites y mostrar los sprites uno tras otro. Como ejemplo, haremos que la pelota se tambalee cuando choque con algo.

Antes que nada, [descarga la hoja de sprites](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/wobble.png) y guárdala en tu directorio `/img`.

Reemplaza la URL de la imagen de la pelota por la URL de la hoja de sprites:

```js
const ball = new Ball("img/wobble.png", ctx);
```

En la clase `Ball`, añade un `size` explícito para que `GameObject.preload()` no use las dimensiones de toda la hoja de sprites como tamaño de la pelota. Añade también propiedades para la secuencia de fotogramas y el tiempo transcurrido desde que empezó la animación:

```js
class Ball extends GameObject {
  size = { w: 20, h: 20 };
  wobbleFrames = [0, 1, 0, 2, 0, 1, 0, 2, 0];
  wobbleTime = null;
  // ... propiedades y métodos existentes ...
}
```

La secuencia de fotogramas hace referencia a los tres sprites por sus posiciones: 0, 1 y 2. Un `wobbleTime` de `null` significa que no se está reproduciendo ninguna animación, así que mostramos el fotograma 0.

## Reproducir la animación

Añade los siguientes métodos a `Ball`, conservando sus métodos `move()` y `onCollide()` existentes:

```js
class Ball extends GameObject {
  // ...
  playWobble() {
    this.wobbleTime = 0;
  }
  updateAnimation(dt) {
    if (this.wobbleTime === null) {
      return;
    }
    this.wobbleTime += dt;
    if (this.wobbleTime >= this.wobbleFrames.length * (1 / 24)) {
      this.wobbleTime = null;
    }
  }
  draw() {
    const frame =
      this.wobbleTime === null
        ? 0
        : this.wobbleFrames[Math.floor(this.wobbleTime / (1 / 24))];
    const { left, top } = this.hitbox;
    this.ctx.drawImage(
      this.asset,
      frame * this.size.w,
      0,
      this.size.w,
      this.size.h,
      left,
      top,
      this.size.w,
      this.size.h,
    );
  }
}
```

El método `playWobble()` inicia la animación, o la reinicia si ya se está reproduciendo. El método `updateAnimation()` la hace avanzar usando el tiempo transcurrido en segundos. Reproducimos la animación a 24 fotogramas por segundo, así que cada fotograma dura `1 / 24` segundos.

El método `draw()` sobrescrito usa la forma de nueve argumentos de {{domxref("CanvasRenderingContext2D/drawImage", "ctx.drawImage()")}}. Los cuatro primeros números después de la imagen seleccionan un rectángulo de la hoja de sprites; los cuatro últimos indican la posición y el tamaño de ese rectángulo en el canvas.

## Aplicar la animación cuando la pelota golpea la paleta

Añade un método `onCollide()` a `Paddle` para iniciar la animación de la pelota cuando el sistema de colisiones informe de un golpe:

```js
class Paddle extends GameObject {
  // ...
  onCollide() {
    ball.playWobble();
  }
}
```

La animación se reproduce cada vez que la pelota golpea la paleta. Si crees que el juego se verá mejor, también puedes llamar a `ball.playWobble()` dentro del método `onCollide()` del ladrillo.

## Tweens

Mientras que las animaciones de sprites muestran fotogramas uno tras otro, los tweens animan de forma suave las propiedades de un objeto del mundo del juego, como el ancho o la opacidad.

Vamos a añadir un tween a nuestro juego para que los ladrillos desaparezcan de forma suave cuando la pelota los golpee. Seguimos necesitando quitar cada ladrillo de `bricks` y de `colliders` justo después de golpearlo, para que no se pueda volver a golpear ni a puntuar. Para seguir dibujándolo durante el tween, añade un array aparte junto a `bricks`:

```js
const disappearingBricks = [];
```

Reemplaza la clase `Brick` por lo siguiente:

```js
class Brick extends GameObject {
  shrinkTime = 0;
  constructor(url, ctx, x, y, w, h) {
    super(url, ctx);
    this.pos = { x, y };
    this.size = { w, h };
  }
  draw() {
    const scale = 1 - Math.min(this.shrinkTime / 0.2, 1);
    const width = this.size.w * scale;
    const height = this.size.h * scale;
    this.ctx.drawImage(
      this.asset,
      this.pos.x - width / 2,
      this.pos.y - height / 2,
      width,
      height,
    );
  }
  onCollide() {
    bricks.splice(bricks.indexOf(this), 1);
    colliders.splice(colliders.indexOf(this), 1);
    disappearingBricks.push(this);
    score += 10;
  }
}
```

La propiedad `shrinkTime` registra cuánto tiempo lleva encogiéndose el ladrillo, en segundos. Queremos que el tween dure 0,2 segundos, así que al dividirla entre 0,2 obtenemos el progreso de 0 a 1. Si restamos ese progreso a 1, obtenemos una escala que disminuye de forma lineal desde el tamaño completo hasta cero. Las coordenadas de dibujo mantienen la imagen que se encoge centrada en la posición original del ladrillo.

Ahora, después de quitar el ladrillo de la jugabilidad, se sigue registrando en `disappearingBricks` para poder animarlo.

## Actualizar y dibujar los efectos

Reemplaza `update()` por lo siguiente para hacer avanzar ambos efectos en cada fotograma:

```js
function update(timestamp) {
  const dt = lastTimestamp === null ? 0 : (timestamp - lastTimestamp) / 1000;
  lastTimestamp = timestamp;

  ball.updateAnimation(dt);
  for (let i = disappearingBricks.length - 1; i >= 0; i--) {
    const brick = disappearingBricks[i];
    brick.shrinkTime += dt;
    if (brick.shrinkTime >= 0.2) {
      disappearingBricks.splice(i, 1);
    }
  }
  moveBall(dt);

  // código de dibujo...
  for (const brick of disappearingBricks) {
    brick.draw();
  }
  drawStatus();

  if (bricks.length === 0 && disappearingBricks.length === 0) {
    alert("¡Ganaste el juego, felicidades!");
    location.reload();
    return;
  }

  requestAnimationFrame(update);
}
```

Hacemos avanzar los efectos existentes antes de mover la pelota, para que las animaciones que inician las colisiones de este fotograma empiecen en el tiempo cero. Recorremos `disappearingBricks` hacia atrás al quitar los tweens terminados, para que quitar elementos no desplace los índices de los elementos que aún no hemos visitado. El dibujo se hace después de estas actualizaciones e incluye tanto los ladrillos intactos como los que están desapareciendo.

La condición de victoria ahora espera a que ambos arrays estén vacíos, para que el último ladrillo termine de encogerse antes de que aparezca el mensaje de victoria. La condición `bricks.length > 0` que ya existe en `moveBall()` detiene la pelota una vez que se han golpeado todos los ladrillos, mientras que el bucle de dibujo sigue funcionando para terminar los tweens.

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
let score = 0;
let lives = 3;
let showLifeLostText = false;
const disappearingBricks = [];

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
  size = { w: 20, h: 20 };
  wobbleFrames = [0, 1, 0, 2, 0, 1, 0, 2, 0];
  wobbleTime = null;
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
  playWobble() {
    this.wobbleTime = 0;
  }
  updateAnimation(dt) {
    if (this.wobbleTime === null) {
      return;
    }
    this.wobbleTime += dt;
    if (this.wobbleTime >= this.wobbleFrames.length * (1 / 24)) {
      this.wobbleTime = null;
    }
  }
  draw() {
    const frame =
      this.wobbleTime === null
        ? 0
        : this.wobbleFrames[Math.floor(this.wobbleTime / (1 / 24))];
    const { left, top } = this.hitbox;
    this.ctx.drawImage(
      this.asset,
      frame * this.size.w,
      0,
      this.size.w,
      this.size.h,
      left,
      top,
      this.size.w,
      this.size.h,
    );
  }
}

class Paddle extends GameObject {
  origin = { x: 0.5, y: 1 };
  constructor(url, ctx) {
    super(url, ctx);
    this.pos = { x: ctx.canvas.width / 2, y: ctx.canvas.height - 5 };
  }
  onCollide() {
    ball.playWobble();
  }
}

class Brick extends GameObject {
  shrinkTime = 0;
  constructor(url, ctx, x, y, w, h) {
    super(url, ctx);
    this.pos = { x, y };
    this.size = { w, h };
  }
  draw() {
    const scale = 1 - Math.min(this.shrinkTime / 0.2, 1);
    const width = this.size.w * scale;
    const height = this.size.h * scale;
    this.ctx.drawImage(
      this.asset,
      this.pos.x - width / 2,
      this.pos.y - height / 2,
      width,
      height,
    );
  }
  onCollide() {
    bricks.splice(bricks.indexOf(this), 1);
    colliders.splice(colliders.indexOf(this), 1);
    disappearingBricks.push(this);
    score += 10;
  }
}

const ball = new Ball(
  "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/wobble.png",
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

  ball.updateAnimation(dt);
  for (let i = disappearingBricks.length - 1; i >= 0; i--) {
    const brick = disappearingBricks[i];
    brick.shrinkTime += dt;
    if (brick.shrinkTime >= 0.2) {
      disappearingBricks.splice(i, 1);
    }
  }
  moveBall(dt);

  ctx.fillStyle = "#eeeeee";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  paddle.draw();
  for (const brick of bricks) {
    brick.draw();
  }
  for (const brick of disappearingBricks) {
    brick.draw();
  }
  drawStatus();

  if (bricks.length === 0 && disappearingBricks.length === 0) {
    alert("¡Ganaste el juego, felicidades!");
    location.reload();
    return;
  }

  requestAnimationFrame(update);
}

function drawStatus() {
  ctx.font = "18px Arial";
  ctx.fillStyle = "#0095dd";
  ctx.textBaseline = "top";
  ctx.textAlign = "left";
  ctx.fillText(`Puntos: ${score}`, 5, 5);

  ctx.textAlign = "right";
  ctx.fillText(`Vidas: ${lives}`, canvas.width - 5, 5);

  if (showLifeLostText) {
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
      "Vida perdida, haz clic para continuar",
      canvas.width / 2,
      canvas.height / 2,
    );
  }
}

function ballLeaveScreen() {
  lives--;
  if (lives === 0) {
    // Lógica de fin del juego
    location.reload();
    return;
  }

  paddle.pos.x = canvas.width / 2;
  ball.pos.x = paddle.pos.x;
  ball.pos.y = paddle.hitbox.top - ball.size.h / 2;
  ball.vel = { x: 0, y: 0 };
  showLifeLostText = true;
  canvas.addEventListener(
    "pointerdown",
    () => {
      showLifeLostText = false;
      ball.vel = { x: 150, y: -150 };
      lastTimestamp = null;
    },
    { once: true },
  );
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
  while (dt > 0 && bricks.length > 0) {
    // Evita invocar el getter repetidamente
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
      ballLeaveScreen();
      return;
    }

    if (contacts.length === 0) {
      break;
    }
    // Ajusta la posición al punto de contacto para evitar errores de coma flotante
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

Las animaciones y los tweens se ven muy bien, pero podemos añadir aún más cosas a nuestro juego: en la siguiente sección veremos cómo gestionar la entrada de [botones](/es/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Buttons).

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Extra_lives", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Buttons")}}
