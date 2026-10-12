---
title: La paleta del jugador y los controles
slug: Games/Tutorials/2D_breakout_game_pure_JavaScript/Player_paddle_and_controls
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Game_over")}}

Este es el **paso 4** de los 11 del [tutorial para crear un juego Breakout con JavaScript puro](/es/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript). Ya tenemos la pelota moviéndose y rebotando en las paredes, pero enseguida se vuelve aburrido: ¡no hay interactividad! Necesitamos una forma de introducir la jugabilidad, así que en este artículo crearemos una paleta que se pueda mover y con la que golpear la pelota.

## Dibujar la paleta

Tanto la pelota como la paleta necesitan una imagen, una posición, un tamaño, una caja de colisión (_hitbox_) y lógica de dibujo. Podemos compartir todo esto mediante una clase base `GameObject`. Reemplaza la clase `Ball` existente por estas dos clases:

```js
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
  pos = { x: 50, y: 50 };
  vel = { x: 150, y: 150 };
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
```

El `origin` define qué punto de la imagen se coloca en `pos`, como fracción de su ancho y su alto. El valor predeterminado `(0.5, 0.5)` coloca ahí el centro. La clase base también define un método `onCollide()` vacío para asegurarse de que todos los objetos tengan uno. Si un objeto no reacciona a las colisiones, como la paleta, puede heredar este método predeterminado.

`Ball` hereda de `GameObject` el constructor, `preload()`, `hitbox` y `draw()`. Añade su posición inicial, su velocidad, `move()` y la respuesta `onCollide()` de la lección anterior.

Ahora añade una clase `Paddle` debajo de `Ball`:

```js
class Paddle extends GameObject {
  origin = { x: 0.5, y: 1 };
  constructor(url, ctx) {
    super(url, ctx);
    this.pos = { x: ctx.canvas.width / 2, y: ctx.canvas.height - 5 };
  }
}
```

La llamada a `super(url, ctx)` ejecuta el constructor compartido para configurar la imagen y el contexto de dibujo de la paleta. Después, la paleta establece su posición inicial. Podemos usar los valores `canvas.width` y `canvas.height` para colocar la paleta exactamente donde queremos: `canvas.width / 2` queda justo en el centro de la pantalla. En nuestro caso, el mundo es igual que el canvas, pero en otros tipos de juegos, como los de desplazamiento lateral, el mundo será más grande, y puedes experimentar con él para crear efectos interesantes.

> [!NOTE]
> Con `origin.y` establecido en `1`, restamos `this.size.h` en lugar de `this.size.h / 2` al dibujar la paleta y calcular su borde superior. Esto significa que `paddle.pos.y` representa la posición y del borde _inferior_ de la paleta, en lugar de su centro. Así podemos controlar más cómodamente la posición de la paleta respecto al borde inferior del canvas.

Descarga la [imagen de la paleta](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/paddle.png) y guárdala en tu carpeta `/img`. Crea la paleta justo después de la pelota:

```js
const paddle = new Paddle("img/paddle.png", ctx);
```

Añade también `paddle` al array dentro de `Promise.all()`:

```js
Promise.all([ball, paddle].map((obj) => obj.preload())).then(() =>
  requestAnimationFrame(update),
);
```

Y añade lo siguiente después de la llamada a `ball.draw()` que ya existe:

```js
paddle.draw();
```

Ahora la paleta está colocada justo donde queremos. A continuación, para que la pelota rebote en la paleta, tenemos que implementar la física de colisión entre ambas.

## Añadir la física

> [!NOTE]
> Aquí avanzamos más rápido que en el resto del tutorial, porque esta parte es justo la que un framework como [Phaser](/es/docs/Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls) hace por nosotros. Normalmente no implementarías nada de la física y solo tendrías que registrar la paleta como un objeto colisionable.

A diferencia de las paredes, la paleta es un rectángulo finito, así que se la puede golpear desde cualquiera de sus cuatro bordes (o incluso en una esquina) y, en el rarísimo caso de que la pelota vaya lo bastante rápido, incluso se la puede atravesar. En lugar de comprobar si hay superposición después de mover la pelota, implementaremos la _detección continua de colisiones_, que calcula el primer instante en que la pelota entra en contacto con la superficie entre fotogramas, para que nunca perdamos la información de qué superficie se toca primero.

Pondremos el cálculo de la colisión en una función reutilizable para poder usarla con la paleta y, más adelante, con los ladrillos. Recibirá una caja de colisión `moving` y una caja de colisión `obstacle`, y nos dirá si se espera que el objeto `moving` choque con `obstacle` dentro de `dt` y, en ese caso, cuándo y dónde.

En lugar de calcular la posición de los cuatro lados del objeto en movimiento uno por uno, como hicimos con `handleWallCollisions`, podemos reducir el objeto en movimiento a un único punto (su esquina superior izquierda) ampliando la región del obstáculo en un ancho y un alto del objeto en movimiento.

![Un rectángulo se mueve en diagonal hasta que su borde inferior toca un obstáculo. Su esquina superior izquierda alcanza el obstáculo ampliado en el mismo instante.](continuous-collision-detection.svg)

```js
function getCollision(moving, velocity, obstacle, dt) {
  const width = moving.right - moving.left;
  const height = moving.bottom - moving.top;
  const movingPos = { x: moving.left, y: moving.top };
  const left = obstacle.left - width;
  const right = obstacle.right;
  const top = obstacle.top - height;
  const bottom = obstacle.bottom;
  const hit = { time: dt, x: null, y: null };

  function checkFace(axis, direction, coordinate, min, max) {
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

  checkFace("x", 1, left, top, bottom);
  checkFace("x", -1, right, top, bottom);
  checkFace("y", 1, top, left, right);
  checkFace("y", -1, bottom, left, right);

  return hit.x === null && hit.y === null ? null : hit;
}
```

La mayor parte de la lógica está dentro de la función anidada `checkFace()`. Recibe los parámetros `axis`, `direction` y `coordinate`, que representan una de las cuatro caras del obstáculo como un vector normal que apunta hacia dentro. Por ejemplo, `"x", 1, left` representa el borde izquierdo, porque un vector en la dirección positiva del eje x es perpendicular a esa superficie y apunta hacia el interior del objeto.

En una superficie vertical, el tiempo hasta el contacto es la distancia horizontal dividida entre la velocidad horizontal. Después calculamos la posición vertical de la pelota en ese momento para comprobar si golpea la superficie o pasa por encima o por debajo de ella (y, por lo tanto, no hay colisión real). Las superficies horizontales funcionan igual, con los ejes intercambiados. La función `checkFace()` conserva el primer contacto dentro de `dt`.

El resultado de `getCollision()` es `null` si no hay contacto; en caso contrario, contiene el momento del contacto y la coordenada de la esquina superior izquierda que se debe usar en cada eje en el que hay colisión. Por ejemplo, golpear una cara vertical da una coordenada `x`, mientras que `y` sigue siendo `null`. Si el golpe es exactamente en una esquina, se establecen las dos coordenadas.

Ahora solo tenemos que llamar a `getCollision()` entre la pelota y todo aquello con lo que pueda chocar. Incluso podemos implementar las paredes como obstáculos normales, para no necesitar una lógica aparte. La lista `colliders` contiene objetos con una propiedad `hitbox`, para que cada vez que llamemos a `getCollision()` podamos obtener el valor más reciente de `hitbox` activando el getter de `GameObject`, en lugar de guardar una copia del momento en que se añadió a la lista.

```js
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
  { hitbox: { ...baseWallHitbox, top: canvas.height } },
];
```

Justo después de crear la paleta, registra también `paddle`:

```js
colliders.push(paddle);
```

A continuación, reemplaza la antigua función `handleWallCollisions()` por la función `moveBall()`. Esta coordina el manejo de las colisiones: llama repetidamente a `getCollision()` y hace avanzar la pelota hasta que transcurre el `dt` indicado. En cada vuelta, busca el siguiente obstáculo (u obstáculos) con el que chocará la pelota (el de menor `hit.time`), mueve la pelota justo hasta el punto de contacto, llama a las respuestas a la colisión y continúa con el tiempo restante.

```js
function moveBall(dt) {
  while (dt > 0) {
    // Evitar activar el getter repetidamente
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
```

> [!NOTE]
> Este bucle podría llegar a procesar muchas colisiones en un mismo fotograma, lo que provocaría un retraso. A veces se limita el número de colisiones permitidas en un fotograma y se descarta el `dt` restante al alcanzar ese límite, lo que permite volver a pintar el juego antes, pero hace que el objeto se mueva más despacio.

Dentro de `update()`, reemplaza las llamadas a `ball.move()` y `handleWallCollisions()` por una llamada a `moveBall()`:

```js
const dt = lastTimestamp === null ? 0 : (timestamp - lastTimestamp) / 1000;
lastTimestamp = timestamp;
moveBall(dt);
```

Este cálculo supone que la pelota empieza dentro del canvas sin superponerse con ningún objeto colisionable, y que los objetos colisionables no se mueven durante cada llamada a `moveBall()`.

## Controlar la paleta

El siguiente problema es que no podemos mover la paleta. Para solucionarlo, podemos usar la entrada de puntero del sistema (ratón o pantalla táctil, según la plataforma) y colocar la paleta donde esté el puntero.

```js
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
```

El `clientX` del puntero se mide respecto al viewport. Restamos el borde izquierdo del canvas y escalamos el resultado a las coordenadas de dibujo del canvas, porque el CSS puede mostrar el canvas con un tamaño distinto. Después actualizamos `paddle.pos.x`, manteniendo toda la paleta dentro del canvas. Hasta que el puntero se mueve, la paleta se queda en la posición central que le asigna su constructor. La comprobación del tamaño ignora la entrada que llega antes de que se cargue la imagen de la paleta.

Para permitir arrastrar con el dedo sin que se desplace la página, añade esta declaración a la regla CSS del canvas:

```css
canvas {
  /* … */
  touch-action: none;
}
```

Si todavía no lo has hecho, ¡recarga tu `index.html` y pruébalo!

## Colocar la pelota

La paleta ya funciona como esperábamos, así que coloquemos la pelota sobre ella. Cuando se hayan cargado los dos recursos, podemos usar sus cajas de colisión y sus dimensiones para colocar el borde inferior de la pelota en el borde superior de la paleta. Actualiza la clase `Ball`:

```js
class Ball extends GameObject {
  pos = { x: undefined, y: undefined };
  vel = { x: 150, y: -150 };
  // …
}
```

La velocidad horizontal sigue igual. Cambiamos la velocidad vertical de `150` a `-150` para que la pelota empiece moviéndose hacia arriba en lugar de hacia abajo. No podemos conocer la posición de antemano, porque tenemos que ponerla encima de la paleta, y para eso primero hay que cargar la paleta. Reemplaza el bloque `Promise.all()` existente por lo siguiente:

```js
Promise.all([ball, paddle].map((obj) => obj.preload())).then(() => {
  ball.pos.x = paddle.pos.x;
  ball.pos.y = paddle.hitbox.top - ball.size.h / 2;
  requestAnimationFrame(update);
});
```

Ahora la pelota empezará justo desde el centro de la paleta.

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
  { hitbox: { ...baseWallHitbox, top: canvas.height } },
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
    // Evitar activar el getter repetidamente
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
```

{{EmbedLiveSample("compara tu código", "", 480, , , , , "allow-modals")}}

## Próximos pasos

Ya podemos mover la paleta y hacer que la pelota rebote en ella, pero ¿de qué sirve si de todos modos la pelota rebota en el borde inferior de la pantalla? Introduzcamos la posibilidad de perder, también conocida como la lógica de [fin del juego](/es/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Game_over).

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Game_over")}}
