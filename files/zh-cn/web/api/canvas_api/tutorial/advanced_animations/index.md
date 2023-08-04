---
title: 高级动画
slug: Web/API/Canvas_API/Tutorial/Advanced_animations
---

{{DefaultAPISidebar("Canvas API")}} {{ PreviousNext("Web/API/Canvas_API/Tutorial/Basic_animations", "Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas")}}

在上一章，我们制作了[基本动画](/zh-CN/docs/Web/Guide/HTML/Canvas_tutorial/Basic_animations)以及逐步了解了让物件移动的方法。在这一部分，我们将会对运动有更深的了解并学会添加一些符合物理的运动以让我们的动画更加高级。

## 绘制小球

我们将会画一个小球用于动画学习，所以首先在画布上画一个球。下面的代码帮助我们建立画布。

```html
<canvas id="canvas" width="600" height="300"></canvas>
```

跟平常一样，我们需要先画一个 context（画布场景）。为了画出这个球，我们又会创建一个包含一些相关属性以及 `draw()` 函数的 `ball` 对象，来完成绘制。

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var ball = {
  x: 100,
  y: 100,
  radius: 25,
  color: "blue",
  draw: function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

ball.draw();
```

这里并没有什么特别的。小球实际上是一个简单的圆形，在{{domxref("CanvasRenderingContext2D.arc()", "arc()")}} 函数的帮助下画出。

## 添加速率

现在我们有了一个小球，正准备添加一些基本动画，正如我们[上一章](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Basic_animations)所学的。又是这样，{{domxref("window.requestAnimationFrame()")}} 再一次帮助我们控制动画。小球依旧依靠添加速率矢量进行移动。在每一帧里面，我们依旧用{{domxref("CanvasRenderingContext2D.clearRect", "clear", "", 1)}} 清理掉之前帧里旧的圆形。

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var raf;

var ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: "blue",
  draw: function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener("mouseover", function (e) {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener("mouseout", function (e) {
  window.cancelAnimationFrame(raf);
});

ball.draw();
```

## 边界

若没有任何的碰撞检测，我们的小球很快就会超出画布。我们需要检查小球的 x 和 y 位置是否已经超出画布的尺寸以及是否需要将速度矢量反转。为了这么做，我们把下面的检查代码添加进 `draw` 函数：

```js
if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
  ball.vy = -ball.vy;
}
if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
  ball.vx = -ball.vx;
}
```

### 首个示例

让我们看看现今它变得如何。

#### HTML

```html
<canvas id="canvas" style="border: 1px solid" width="600" height="300"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let raf;

const ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: "blue",
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;

  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener("mouseover", (e) => {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener("mouseout", (e) => {
  window.cancelAnimationFrame(raf);
});

ball.draw();
```

#### 结果

移动你的鼠标到画布里开启动画。

{{EmbedLiveSample("首个示例", "610", "340")}}

## 加速度

为了让动作更真实，你可以像这样处理速度，例如：

```js
ball.vy *= 0.99;
ball.vy += 0.25;
```

这会逐帧减少垂直方向的速度，所以小球最终将只会在地板上弹跳。

### 第二个示例

#### HTML

```html
<canvas id="canvas" style="border: 1px solid" width="600" height="300"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let raf;

const ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: "blue",
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  ball.vy *= 0.99;
  ball.vy += 0.25;

  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener("mouseover", (e) => {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener("mouseout", (e) => {
  window.cancelAnimationFrame(raf);
});

ball.draw();
```

#### 结果

{{EmbedLiveSample("第二个示例", "610", "340")}}

## 长尾效果

现在，我们使用的是 {{domxref("CanvasRenderingContext2D.clearRect", "clearRect")}} 函数帮我们清除前一帧动画。若用一个半透明的 {{domxref("CanvasRenderingContext2D.fillRect", "fillRect")}} 函数取代之，就可轻松制作长尾效果。

```js
ctx.fillStyle = "rgba(255,255,255,0.3)";
ctx.fillRect(0, 0, canvas.width, canvas.height);
```

### 第三个示例

#### HTML

```html
<canvas id="canvas" style="border: 1px solid" width="600" height="300"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let raf;

const ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: "blue",
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

function draw() {
  ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  ball.vy *= 0.99;
  ball.vy += 0.25;

  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener("mouseover", (e) => {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener("mouseout", (e) => {
  window.cancelAnimationFrame(raf);
});

ball.draw();
```

#### 结果

{{EmbedLiveSample("第三个示例", "610", "340")}}

## 添加鼠标控制

为了更好地控制小球，我们可以用 [`mousemove`](/zh-CN/docs/Web/Reference/Events/mousemove)事件让它跟随鼠标活动。下面例子中，[click](/zh-CN/docs/Web/Events/click) 事件会释放小球然后让它重新跳起。

```html hidden
<canvas id="canvas" style="border: 1px solid" width="600" height="300"></canvas>
```

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var raf;
var running = false;

var ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 1,
  radius: 25,
  color: "blue",
  draw: function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

function clear() {
  ctx.fillStyle = "rgba(255,255,255,0.3)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function draw() {
  clear();
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;

  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener("mousemove", function (e) {
  if (!running) {
    clear();
    ball.x = e.offsetX;
    ball.y = e.offsetY;
    ball.draw();
  }
});

canvas.addEventListener("click", function (e) {
  if (!running) {
    raf = window.requestAnimationFrame(draw);
    running = true;
  }
});

canvas.addEventListener("mouseout", function (e) {
  window.cancelAnimationFrame(raf);
  running = false;
});

ball.draw();
```

用你的鼠标移动小球，点击可以释放。

{{EmbedLiveSample("添加鼠标控制", "610", "310")}}

## Breakout

本短文仅仅解释了一小部分的创建高级动画的技巧。其实还有更多！试试添加一个球拍，一些砖块，然后将这个例子弄成一个 [Breakout](http://en.wikipedia.org/wiki/Breakout_%28video_game%29)（译者注：打砖块游戏）如何？查看我们的[游戏开发](/zh-CN/docs/Games)区去查阅更多相关文章。

## 参考

- {{domxref("window.requestAnimationFrame()")}}
- [网页动画高效开发](/zh-CN/docs/Games/Techniques/Efficient_animation_for_web_games)

{{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_animations", "Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas")}}
