---
title: 构建砖块区域
slug: Games/Tutorials/2D_breakout_game_pure_JavaScript/Build_the_brick_field
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Game_over", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Track_the_score_and_win")}}

这是[使用纯 JavaScript 创建打砖块游戏教程](/zh-CN/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript) 11 个步骤中的**第 6 步**。我们将探索如何创建一组砖块、使用循环将它们绘制到屏幕上，并在球击中砖块时将其移除。构建砖块区域比向屏幕添加单个对象稍微复杂一些。

## 绘制砖块

所有砖块都使用同一张图像，因此我们可以只创建并解码一次，然后供它们共用。向 `GameObject` 添加静态 `assets` 映射和 `url` 字段，并替换它的构造函数和 `preload()` 方法：

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

缓存会将每个 URL 映射到一个解析为已解码图像的 promise。首次为某个 URL 调用 `preload()` 时，会创建图像并开始解码；后续调用会等待同一个 promise，并获取同一张图像。每个对象仍有自己的位置和尺寸。

与 `Ball` 和 `Paddle` 一样，`Brick` 也由 `GameObject` 类提供支持。砖块没有默认位置或尺寸，必须在构造函数中显式指定。由于砖块有明确的尺寸，我们可以使用 {{domxref("CanvasRenderingContext2D/drawImage", "ctx.drawImage()")}} 的额外参数 `dWidth` 和 `dHeight`；如果图像尺寸不符合所需尺寸，它会自动缩放图像。

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

你还需要[获取砖块图像](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/brick.png)，并将它保存到 `/img` 目录中。

我们会将绘制砖块的所有代码放入 `initBricks` 函数中，使其与其余代码分开。在 `colliders.push(paddle);` 下方调用 `initBricks`：

```js
// …
const paddle = new Paddle("img/paddle.png", ctx);
colliders.push(paddle);
const bricks = initBricks();
// …
```

还要确保游戏在开始前等待砖块完成预加载：在 `Promise.all()` 中的数组里添加 `, ...bricks`。这些调用会共用缓存的解码 promise，因此砖块图像只会被解码一次。

接下来编写这个函数。在 `script.js` 文件末尾添加 `initBricks` 函数。首先添加 `bricksLayout` 对象，它很快就会派上用场：

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
  // 在这里继续添加代码……
  return bricks;
}
```

`bricksLayout` 包含了我们需要的所有信息：单块砖的宽度和高度、屏幕上砖块的行数和列数、顶部和左侧偏移量（即在画布上开始绘制砖块的位置），以及砖块行列之间的间距。

现在开始创建砖块本身。我们可以遍历各行和各列，并在每次循环中创建一个新砖块——在上一段代码下方添加以下嵌套循环：

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

每个 `brickX` 的位置由 `bricksLayout.width` 与 `bricksLayout.padding` 之和乘以列索引 `c`，再加上 `bricksLayout.offset.left` 得出。`brickY` 的计算方式相同，只是使用行索引 `r`、`bricksLayout.height` 和 `bricksLayout.offset.top`。这样，每块砖都能放在正确的位置，砖块之间留有间距，并从 Canvas 的左边缘和上边缘偏移后绘制。

最后，我们可以在 `update()` 函数中将这些砖块绘制到屏幕上。在 `paddle.draw()` 调用下方添加以下代码：

```js
for (const brick of bricks) {
  brick.draw();
}
```

此时重新加载 `index.html`，你应该会看到砖块以均匀的间距绘制在屏幕上。

## 砖块与球的碰撞检测

接下来要实现球与砖块之间的碰撞检测。幸运的是，我们已经实现了一个通用性很强的碰撞系统，因此只需将砖块接入该系统即可。

首先，在 `initBricks()` 调用下方，将每个砖块注册为碰撞体：

```js
const bricks = initBricks();
for (const brick of bricks) {
  colliders.push(brick);
}
```

为每个砖块添加 `onCollide()` 方法，将砖块自身从 `bricks` 和 `colliders` 集合中移除：

```js
class Brick extends GameObject {
  // …
  onCollide() {
    bricks.splice(bricks.indexOf(this), 1);
    colliders.splice(colliders.indexOf(this), 1);
  }
}
```

必须尽快移除砖块，以免球再次从它反弹。

大功告成！重新加载代码，你应该会看到新的碰撞检测按预期工作。

## 比较你的代码

下面是目前应当实现的效果。点击“运行”按钮即可查看源代码。

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
    // 避免重复触发 getter
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
      // 游戏结束逻辑
      location.reload();
      return;
    }

    if (contacts.length === 0) {
      break;
    }
    // 将位置对齐到接触点，以避免浮点错误
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

{{EmbedLiveSample("比较你的代码", "", 480, , , , , "allow-modals")}}

## 下一步

我们现在可以击中并移除砖块，这已经为游戏玩法增添了不少乐趣。如果在所有砖块都被摧毁时还能[记录分数并获胜](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/Track_the_score_and_win)，那就更好了。

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Game_over", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Track_the_score_and_win")}}
