---
title: 球板和操控
slug: Games/Tutorials/2D_breakout_game_pure_JavaScript/Player_paddle_and_controls
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Game_over")}}

这是[使用纯 JavaScript 创建打砖块游戏教程](/zh-CN/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript) 11 个步骤中的**第 4 步**。我们已经让球移动并从墙壁上反弹，但这很快就变得无聊了——没有任何交互！我们需要引入游戏玩法，所以在本文中，我们将创建一个可以移动并用来击球的球板。

## 渲染球板

球和球板都需要图像、位置、尺寸、碰撞箱以及绘制逻辑。我们可以通过 `GameObject` 基类来共享这些内容。将现有的 `Ball` 类替换为以下两个类：

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

`origin` 定义了图像上哪个点放在 `pos` 位置，其值是相对于图像宽度和高度的比例。默认值 `(0.5, 0.5)` 会将图像的中心放在那里。基类还定义了一个空的 `onCollide()` 方法，以确保所有对象都具有这个方法。如果某个对象不对碰撞做出响应——例如球板——它就可以继承这个默认方法。

`Ball` 从 `GameObject` 继承了构造函数、`preload()`、`hitbox` 和 `draw()`。它还添加了初始位置、速度、`move()`，以及上一节中的 `onCollide()` 响应逻辑。

现在，在 `Ball` 下方添加一个 `Paddle` 类：

```js
class Paddle extends GameObject {
  origin = { x: 0.5, y: 1 };
  constructor(url, ctx) {
    super(url, ctx);
    this.pos = { x: ctx.canvas.width / 2, y: ctx.canvas.height - 5 };
  }
}
```

`super(url, ctx)` 调用会运行共享的构造函数，设置球板的图像和绘图上下文。然后，球板会设置自己的初始位置。我们可以使用 `canvas.width` 和 `canvas.height` 的值，将球板放在我们想要的位置：`canvas.width / 2` 正好位于屏幕中央。在本例中，游戏世界与画布的大小相同，但在横向卷轴游戏等其他类型的游戏中，游戏世界会更大，你可以调整它来创造有趣的效果。

> [!NOTE]
> 将 `origin.y` 设置为 `1` 后，在绘制球板和计算其顶部边缘时，我们减去的是 `this.size.h`，而不是 `this.size.h / 2`。这意味着 `paddle.pos.y` 表示的是球板*底部*边缘的 y 坐标，而不是其中心的 y 坐标。这样，我们就能更方便地控制球板相对于画布底部边缘的位置。

下载[球板图像](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/paddle.png)，并将其保存在你的 `/img` 文件夹中。紧接着创建球的代码创建球板：

```js
const paddle = new Paddle("img/paddle.png", ctx);
```

还要将 `paddle` 添加到 `Promise.all()` 中的数组里：

```js
Promise.all([ball, paddle].map((obj) => obj.preload())).then(() =>
  requestAnimationFrame(update),
);
```

并在现有的 `ball.draw()` 调用之后添加以下代码：

```js
paddle.draw();
```

现在，球板已经位于我们想要的位置。接下来，为了让球从球板上反弹，我们必须实现它们之间的碰撞物理逻辑。

## 添加物理效果

> [!NOTE]
> 这里的讲解比教程的其他部分推进得更快，因为这部分工作正是 [Phaser](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls) 这样的框架会替我们完成的。通常，你不需要自己实现任何物理逻辑，只需将球板注册为碰撞体即可。

与墙壁不同，球板是一个有限大小的矩形，因此球可能撞到它的任意一条边（甚至是角），而在极少数情况下，如果球的速度足够快，它甚至可能穿过球板。我们不会在移动球后检查是否发生重叠，而是实现*连续碰撞检测*，计算球在两帧之间首次接触表面的时刻，这样就不会丢失关于首先接触了哪个表面的信息。

我们将把碰撞计算放在一个可复用的函数中，以便将它用于球板，以及后续的砖块。这个函数接收一个 `moving` 碰撞箱和一个 `obstacle` 碰撞箱，判断 `moving` 对象是否会在 `dt` 时间内与 `obstacle` 发生碰撞；如果会，还会告诉我们碰撞发生的时间和位置。

我们不必像在 `handleWallCollisions` 中那样逐一计算移动对象四条边的位置，而是可以将障碍物的区域扩展一个移动对象的宽度和高度，从而把移动对象简化为一个点——它的左上角。

![一个矩形沿对角线移动，直到其底部边缘接触障碍物。它的左上角在同一时刻到达扩展后的障碍物区域。](continuous-collision-detection.svg)

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

大部分逻辑都在嵌套的 `checkFace()` 函数中。它接收 `axis`、`direction` 和 `coordinate` 参数，用内法向量的形式描述障碍物四个面中的一个。例如，`"x", 1, left` 表示左侧边缘，因为沿 x 轴正方向的向量会垂直于该表面，并指向对象内部。

对于垂直表面，接触所需的时间等于水平距离除以水平速度。然后，我们计算球在该时刻的垂直位置，以检查它是撞到了表面，还是从表面上方或下方经过（因此并没有实际发生碰撞）。水平表面的处理方式相同，只需交换坐标轴。`checkFace()` 函数会保留 `dt` 时间内最早的接触。

如果没有接触，`getCollision()` 的结果为 `null`；否则，结果包含接触时间，以及在每个发生碰撞的轴上应使用的左上角坐标。例如，撞到垂直表面时会得到一个 `x` 坐标，而 `y` 仍为 `null`。如果恰好撞到角点，则两个坐标都会被设置。

现在，我们只需要对球与所有它可能碰撞的对象调用 `getCollision()`。我们甚至可以将墙壁实现为普通障碍物，这样就不需要单独的一套逻辑了。`colliders` 列表包含具有 `hitbox` 属性的对象，因此每次调用 `getCollision()` 时，都可以通过触发 `GameObject` 上的 getter 来获取最新的 `hitbox` 值，而不是存储对象刚加入列表时的快照。

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

在创建球板之后，立即将 `paddle` 也注册进去：

```js
colliders.push(paddle);
```

接下来，将旧的 `handleWallCollisions()` 函数替换为 `moveBall()` 函数。它负责协调碰撞处理，反复调用 `getCollision()` 并移动球，直到指定的 `dt` 时间耗尽。每次循环中，它都会找到球接下来将撞到的障碍物（`hit.time` 最小），将球移动到接触点，调用碰撞响应逻辑，然后继续处理剩余时间。

```js
function moveBall(dt) {
  while (dt > 0) {
    // 避免反复触发 getter
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
    // 将位置校正到接触点，以避免浮点误差
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
> 这个循环可能会在一帧内处理大量碰撞，从而导致卡顿。有时，人们会限制一帧内允许处理的碰撞次数，并在达到上限后丢弃剩余的 `dt`。这样可以让游戏更快地重绘，但会导致对象移动得更慢。

在 `update()` 中，将对 `ball.move()` 和 `handleWallCollisions()` 的调用替换为对 `moveBall()` 的调用：

```js
const dt = lastTimestamp === null ? 0 : (timestamp - lastTimestamp) / 1000;
lastTimestamp = timestamp;
moveBall(dt);
```

这套计算假定球一开始位于画布内部，且不与任何碰撞体重叠，并且碰撞体在每次调用 `moveBall()` 期间保持静止。

## 控制球板

接下来的问题是我们还无法移动球板。为了解决这个问题，我们可以使用系统的指针输入（鼠标或触摸，具体取决于平台），并将球板的位置设置为指针所在的位置。

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

指针的 `clientX` 是相对于视口测量的。我们减去画布左侧边缘的位置，再将结果缩放到画布的绘图坐标系中，因为 CSS 可能会让画布以不同的尺寸显示。然后，我们更新 `paddle.pos.x`，并确保整个球板都位于画布内部。在指针移动之前，球板会停留在构造函数设置的中心位置。尺寸检查会忽略球板图像加载完成之前的输入。

为了允许触摸拖动而不滚动页面，请在画布的 CSS 规则中添加以下声明：

```css
canvas {
  /* … */
  touch-action: none;
}
```

如果你还没有这样做，请重新加载你的 `index.html` 并试一试！

## 定位球

球板已经按预期工作了，接下来让我们把球放在它上面。在两个资源都加载完成后，我们可以利用它们的碰撞箱和尺寸，将球的底部边缘放在球板的顶部边缘。更新 `Ball` 类：

```js
class Ball extends GameObject {
  pos = { x: undefined, y: undefined };
  vel = { x: 150, y: -150 };
  // …
}
```

水平速度保持不变。我们将垂直速度从 `150` 改为 `-150`，让球一开始向上移动，而不是向下。我们无法提前知道球的位置，因为要把它放在球板上方，就必须先加载球板。将现有的 `Promise.all()` 代码块替换为以下内容：

```js
Promise.all([ball, paddle].map((obj) => obj.preload())).then(() => {
  ball.pos.x = paddle.pos.x;
  ball.pos.y = paddle.hitbox.top - ball.size.h / 2;
  requestAnimationFrame(update);
});
```

现在，球会从球板的正中间出发。

## 比较你的代码

下面是你到目前为止应该得到的代码，示例可以实时运行。要查看源代码，请点击“播放”（Play）按钮。

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
    // 避免反复触发 getter
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
    // 将位置校正到接触点，以避免浮点误差
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

{{EmbedLiveSample("比较你的代码", "", 480, , , , , "allow-modals")}}

## 下一步

我们可以移动球板，并让球从上面反弹，但如果球无论如何都会从屏幕底部边缘弹回来，这又有什么意义呢？让我们引入输掉游戏的可能性——也就是[游戏结束](/zh-CN/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Game_over)逻辑。

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Game_over")}}
