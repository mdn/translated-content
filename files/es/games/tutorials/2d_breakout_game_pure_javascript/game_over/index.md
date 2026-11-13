---
title: Fin del juego
slug: Games/Tutorials/2D_breakout_game_pure_JavaScript/Game_over
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Player_paddle_and_controls", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Build_the_brick_field")}}

Este es el **paso 5** de los 11 del [tutorial para crear un juego Breakout con JavaScript puro](/es/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript). Para que el juego sea más interesante, podemos introducir la posibilidad de perder: si no golpeas la pelota antes de que llegue al borde inferior de la pantalla, se acaba el juego.

## Cómo perder

Para que se pueda perder, desactivaremos la colisión de la pelota con el borde inferior de la pantalla. Elimina la última entrada de la lista `colliders`: `{ hitbox: { ...baseWallHitbox, top: canvas.height } }`.

Así, las tres paredes (superior, izquierda y derecha) harán rebotar la pelota, pero la cuarta (la inferior) desaparecerá, y la pelota podrá caer fuera de la pantalla si la paleta no la alcanza. Necesitamos una forma de detectarlo y actuar en consecuencia. Añade las siguientes líneas a `moveBall()`, justo después de `dt -= hitTime`:

```js
const ballIsOutOfBounds = ball.hitbox.bottom > canvas.height;
if (ballIsOutOfBounds) {
  // Lógica de fin del juego
  alert("¡Fin del juego!");
  location.reload();
  return;
}
```

Estas líneas comprueban si la pelota sobresale de los límites del mundo (en nuestro caso, el canvas) y, en ese caso, muestran una alerta. Cuando hagas clic en la alerta, la página se recargará y podrás volver a jugar.

> [!NOTE]
> La experiencia de usuario aquí es bastante mejorable, porque [`alert()`](/es/docs/Web/API/Window/alert) muestra un cuadro de diálogo del sistema y bloquea el juego. En un juego real, probablemente querrías diseñar tu propio cuadro de diálogo modal con {{HTMLElement("dialog")}}.
>
> Además, más adelante añadiremos un [botón "Start"](/es/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Buttons), pero por ahora nuestro juego empieza en cuanto se carga la página, así que puedes "perder" incluso antes de empezar a jugar. Para evitar ese molesto cuadro de diálogo, a partir de ahora quitaremos la llamada a `alert()`.

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
  asset;
  ctx;
  size = { w: undefined, h: undefined };
  pos = { x: 0, y: 0 };
  origin = { x: 0.5, y: 0.5 };
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

const ball = new Ball(
  "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/ball.png",
  ctx,
);
const paddle = new Paddle(
  "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/paddle.png",
  ctx,
);
colliders.push(paddle);

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

Promise.all([ball, paddle].map((obj) => obj.preload())).then(() => {
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
      // Lógica de fin del juego
      location.reload();
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
```

{{EmbedLiveSample("compara tu código", "", 480, , , , , "allow-modals")}}

## Próximos pasos

Ahora que la mecánica básica del juego está lista, hagámosla más interesante añadiendo ladrillos que romper: es hora de [construir el muro de ladrillos](/es/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Build_the_brick_field).

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Player_paddle_and_controls", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Build_the_brick_field")}}
