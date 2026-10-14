---
title: Botones
slug: Games/Tutorials/2D_breakout_game_pure_JavaScript/Buttons
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Animations_and_tweens", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Randomizing_gameplay")}}

Este es el **paso 10** de los 11 del [tutorial para crear un juego Breakout con JavaScript puro](/es/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript). En lugar de empezar el juego de inmediato, podemos dejar esa decisión al jugador añadiendo un botón "Start" que pueda pulsar. Veamos cómo hacerlo.

## Nuevas variables

Necesitaremos una variable booleana que indique si el juego ha empezado y un `AbortController` para quitar los detectores de eventos del botón cuando empiece. Añade estas líneas debajo de tus otras variables de nivel superior:

```js
let playing = false;
const buttonControls = new AbortController();
```

## Añadir el botón al juego

Podemos cargar la hoja de sprites del botón igual que cargamos la animación de tambaleo de la pelota. Añade una clase `Button` después de las demás clases de objetos del juego:

```js
class Button extends GameObject {
  size = { w: 120, h: 40 };
  frame = 0;
  constructor(url, ctx) {
    super(url, ctx);
    this.pos = { x: ctx.canvas.width / 2, y: ctx.canvas.height / 2 };
  }
}
```

El botón está centrado en el canvas. Su propiedad `frame` selecciona la imagen normal (0), al pasar el puntero por encima (1) o pulsada (2).

El método `draw()` calcula la columna y la fila del fotograma en la hoja de sprites y dibuja solo ese fotograma, como hicimos con la pelota.

```js
class Button extends GameObject {
  // …
  draw() {
    const columns = Math.floor(this.asset.width / this.size.w);
    const { left, top } = this.hitbox;
    this.ctx.drawImage(
      this.asset,
      (this.frame % columns) * this.size.w,
      Math.floor(this.frame / columns) * this.size.h,
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

Crea el botón debajo de las definiciones de la pelota, la paleta y los ladrillos:

```js
const startButton = new Button("img/button.png", ctx);
```

También tienes que [descargar la hoja de sprites del botón](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_pure_JavaScript/button.png) y guardarla en tu directorio `/img`.

En `update()`, añade lo siguiente después de `drawStatus()` para mostrar el botón hasta que empiece el juego:

```js
if (!playing) {
  startButton.draw();
}
```

## Gestionar la entrada del botón

Gestionar la entrada del botón es un poco engorroso, porque trabajamos con un canvas en lugar de con elementos HTML nativos. Tenemos que implementar a mano la comprobación del área de impacto, la animación y la gestión de eventos.

El método `containsPointer()` convierte las coordenadas del puntero en coordenadas del canvas y después comprueba si están dentro del área de impacto:

```js
class Button extends GameObject {
  // …
  containsPointer(event) {
    const bounds = this.ctx.canvas.getBoundingClientRect();
    const x =
      ((event.clientX - bounds.left) * this.ctx.canvas.width) / bounds.width;
    const y =
      ((event.clientY - bounds.top) * this.ctx.canvas.height) / bounds.height;
    const { left, right, top, bottom } = this.hitbox;
    return x >= left && x <= right && y >= top && y <= bottom;
  }
}
```

Añade una función `initButtonControls()` al final del script, que registrará los detectores de eventos de puntero que controlan el botón. Todo lo que sigue en esta sección, salvo que se indique lo contrario, se añadirá al cuerpo de esta función.

```js
function initButtonControls() {
  // Añade el código aquí
}
```

Empieza definiendo `options`, que contiene la `signal` que se usa para quitar estos detectores una vez que empieza el juego. Registra también el ID del puntero para que solo el puntero que pulsó el botón pueda activarlo.

```js
const options = { signal: buttonControls.signal };
let pressedPointer = null;
```

Salir del botón restablece el índice del fotograma (lo que devuelve el botón a su aspecto predeterminado). Soltar una pulsación fuera del botón la cancela. Estos gestos se pueden hacer de varias formas, así que añádelos como funciones reutilizables.

```js
function resetFrame(event) {
  if (pressedPointer === null || pressedPointer === event.pointerId) {
    startButton.frame = 0;
  }
}
function cancelPress(event) {
  if (event.pointerId === pressedPointer) {
    pressedPointer = null;
    resetFrame(event);
  }
}
```

A continuación, define el manejador de `pointermove`. Su función es establecer el índice del fotograma (es decir, cambiar el aspecto del botón) si el puntero está encima. Si ya hay un puntero pulsado, los demás punteros se ignoran y no cuentan como un paso por encima adicional.

```js
canvas.addEventListener(
  "pointermove",
  (event) => {
    if (pressedPointer !== null && pressedPointer !== event.pointerId) {
      return;
    }
    if (startButton.containsPointer(event)) {
      startButton.frame = pressedPointer === null ? 1 : 2;
    } else {
      resetFrame(event);
    }
  },
  options,
);
```

A continuación, define el manejador de `pointerdown`. Su función también es establecer el índice del fotograma con el aspecto de pulsado, y además registrar `pressedPointer`. Esto solo ocurre si no hay ningún otro puntero pulsado en ese momento y, en el caso de un ratón o un dispositivo similar, si se trata de un clic izquierdo. La captura del puntero permite que el canvas siga recibiendo eventos de puntero aunque el puntero salga de sus límites.

```js
canvas.addEventListener(
  "pointerdown",
  (event) => {
    if (
      event.button !== 0 ||
      pressedPointer !== null ||
      !startButton.containsPointer(event)
    ) {
      return;
    }
    pressedPointer = event.pointerId;
    startButton.frame = 2;
    canvas.setPointerCapture(event.pointerId);
  },
  options,
);
```

A continuación, define el manejador de `pointerup`. Su función es iniciar realmente el juego, pero solo si el puntero se soltó mientras seguía encima del botón; de lo contrario, la pulsación se considera cancelada.

```js
canvas.addEventListener(
  "pointerup",
  (event) => {
    if (event.pointerId !== pressedPointer) {
      return;
    }
    if (startButton.containsPointer(event)) {
      pressedPointer = null;
      startGame();
    } else {
      cancelPress(event);
    }
  },
  options,
);
```

Por último, que el puntero salga del canvas, un gesto nativo de cancelación del puntero o la pérdida de la captura del puntero establecida por el detector de `pointerdown` deberían provocar el restablecimiento o la cancelación. Estos eventos no se filtran por el área de impacto, porque también tienen que limpiar las pulsaciones que salen del botón.

```js
canvas.addEventListener("pointerleave", resetFrame, options);
canvas.addEventListener("pointercancel", cancelPress, options);
canvas.addEventListener("lostpointercapture", cancelPress, options);
```

Registramos estos detectores solo después de cargar los recursos. Reemplaza la llamada a preload existente por la siguiente, que también carga la imagen del botón:

```js
Promise.all(
  [ball, paddle, ...bricks, startButton].map((obj) => obj.preload()),
).then(() => {
  ball.pos.x = paddle.pos.x;
  ball.pos.y = paddle.hitbox.top - ball.size.h / 2;
  initButtonControls();
  requestAnimationFrame(update);
});
```

## Empezar el juego

Ahora tenemos que definir la función `startGame()` a la que hace referencia el código anterior:

```js
function startGame() {
  buttonControls.abort();
  ball.vel = { x: 150, y: -150 };
  playing = true;
  lastTimestamp = null;
}
```

Cuando se pulsa el botón, quitamos todos los detectores del botón, establecemos la velocidad inicial de la pelota y ponemos la propiedad `playing` en `true`. También restablecemos `lastTimestamp` para que la primera actualización de movimiento no incluya el tiempo anterior a soltar el botón.

Para terminar esta sección, vuelve a tu clase `Ball`, busca la línea `vel = { x: 150, y: -150 }` y reemplázala por `vel = { x: 0, y: 0 }`. ¡Solo quieres que la pelota se mueva cuando se pulse el botón, no antes!

## Mantener la paleta quieta antes de que empiece el juego

Funciona como esperábamos, pero todavía podemos mover la paleta cuando el juego aún no ha empezado, y eso queda un poco raro. Para evitarlo, podemos aprovechar la propiedad `playing` y hacer que la paleta solo se pueda mover cuando el juego haya empezado. Para ello, añade `!playing` a la condición de guarda del detector de `pointermove` de la paleta que ya existe, así:

```js
if (!playing || paddle.size.w === undefined) {
  return;
}
```

Así, la paleta queda inmóvil después de que todo se haya cargado y preparado, pero antes de que empiece el juego de verdad.

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
let playing = false;
const buttonControls = new AbortController();
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
  vel = { x: 0, y: 0 };
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

class Button extends GameObject {
  size = { w: 120, h: 40 };
  frame = 0;
  constructor(url, ctx) {
    super(url, ctx);
    this.pos = { x: ctx.canvas.width / 2, y: ctx.canvas.height / 2 };
  }
  containsPointer(event) {
    const bounds = this.ctx.canvas.getBoundingClientRect();
    const x =
      ((event.clientX - bounds.left) * this.ctx.canvas.width) / bounds.width;
    const y =
      ((event.clientY - bounds.top) * this.ctx.canvas.height) / bounds.height;
    const { left, right, top, bottom } = this.hitbox;
    return x >= left && x <= right && y >= top && y <= bottom;
  }
  draw() {
    const columns = Math.floor(this.asset.width / this.size.w);
    const { left, top } = this.hitbox;
    this.ctx.drawImage(
      this.asset,
      (this.frame % columns) * this.size.w,
      Math.floor(this.frame / columns) * this.size.h,
      this.size.w,
      this.size.h,
      left,
      top,
      this.size.w,
      this.size.h,
    );
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

const startButton = new Button(
  "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/button.png",
  ctx,
);

canvas.addEventListener("pointermove", (event) => {
  if (!playing || paddle.size.w === undefined) {
    return;
  }
  const bounds = canvas.getBoundingClientRect();
  const x = ((event.clientX - bounds.left) * canvas.width) / bounds.width;
  paddle.pos.x = Math.max(
    paddle.size.w / 2,
    Math.min(canvas.width - paddle.size.w / 2, x),
  );
});

Promise.all(
  [ball, paddle, ...bricks, startButton].map((obj) => obj.preload()),
).then(() => {
  ball.pos.x = paddle.pos.x;
  ball.pos.y = paddle.hitbox.top - ball.size.h / 2;
  initButtonControls();
  requestAnimationFrame(update);
});

function startGame() {
  buttonControls.abort();
  ball.vel = { x: 150, y: -150 };
  playing = true;
  lastTimestamp = null;
}

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
  if (!playing) {
    startButton.draw();
  }

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

function initButtonControls() {
  const options = { signal: buttonControls.signal };
  let pressedPointer = null;

  function resetFrame(event) {
    if (pressedPointer === null || pressedPointer === event.pointerId) {
      startButton.frame = 0;
    }
  }
  function cancelPress(event) {
    if (event.pointerId === pressedPointer) {
      pressedPointer = null;
      resetFrame(event);
    }
  }

  canvas.addEventListener(
    "pointermove",
    (event) => {
      if (pressedPointer !== null && pressedPointer !== event.pointerId) {
        return;
      }
      if (startButton.containsPointer(event)) {
        startButton.frame = pressedPointer === null ? 1 : 2;
      } else {
        resetFrame(event);
      }
    },
    options,
  );
  canvas.addEventListener(
    "pointerdown",
    (event) => {
      if (
        event.button !== 0 ||
        pressedPointer !== null ||
        !startButton.containsPointer(event)
      ) {
        return;
      }
      pressedPointer = event.pointerId;
      startButton.frame = 2;
      canvas.setPointerCapture(event.pointerId);
    },
    options,
  );
  canvas.addEventListener(
    "pointerup",
    (event) => {
      if (event.pointerId !== pressedPointer) {
        return;
      }
      if (startButton.containsPointer(event)) {
        pressedPointer = null;
        startGame();
      } else {
        cancelPress(event);
      }
    },
    options,
  );
  canvas.addEventListener("pointerleave", resetFrame, options);
  canvas.addEventListener("pointercancel", cancelPress, options);
  canvas.addEventListener("lostpointercapture", cancelPress, options);
}
```

{{EmbedLiveSample("compara tu código", "", 480, , , , , "allow-modals")}}

## Próximos pasos

Lo último que haremos en esta serie de artículos es hacer que la jugabilidad sea aún más interesante añadiendo algo de [aleatoriedad](/es/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Randomizing_gameplay) a la forma en que la pelota rebota en la paleta.

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Animations_and_tweens", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Randomizing_gameplay")}}
