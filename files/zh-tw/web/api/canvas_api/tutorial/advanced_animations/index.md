---
title: Advanced animations
slug: Web/API/Canvas_API/Tutorial/Advanced_animations
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_animations", "Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas")}}

在上一章節，我們做了一些[基礎動畫](/zh-TW/docs/Web/API/Canvas_API/Tutorial/Basic_animations)且知道它的移動方式。在這部分我們更仔細的介紹它的動畫效果且並增加一些特效，使它看起來更高級。

## 畫一顆球

在這次的動畫練習中使用球來練習。照著下面的步驟完成 canvas 設定。

```html
<canvas id="canvas" width="600" height="300"></canvas>
```

照常理，先在 canvas 上需要先畫一顆球。創造一個 `ball` object，它包含的屬性和`draw()`的方法，使 canvas 可以在上面繪圖。

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

這裡沒什麼特別的，透過{{domxref("CanvasRenderingContext2D.arc()", "arc()")}}的方法，球事實上只是畫下簡單的圓。

## 添加速度

現在有了一顆球，準備添加基礎的動畫像我們從[上章節學到的課程](/zh-TW/docs/Web/API/Canvas_API/Tutorial/Basic_animations)。再次使用 {{domxref("Window.requestAnimationFrame()")}} 控制動畫。添加移動的向量速度使球移動到向量點。對於每個幀（frame），我們使用 {{domxref("CanvasRenderingContext2D.clearRect", "clear", "", 1)}} 來清除 canvas 舊的移動幀。

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

## 邊界

沒有任何邊界碰撞下，球很快就會跑出 canvas。這時需要確認球的 `x` and `y` 是否超出 canvas 尺寸，若超出則將球的向量顛倒。所以，我們添加了確認條件在`draw`方法:

```js
if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
  ball.vy = -ball.vy;
}
if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
  ball.vx = -ball.vx;
}
```

### 第一個示範

讓我們看看，看似很遠的行徑它如何行徑。移動你的滑鼠在 canvas，使動畫開始。

```html hidden
<canvas id="canvas" style="border: 1px solid" width="600" height="300"></canvas>
```

```js hidden
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

  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
  }

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

{{EmbedLiveSample("第一個示範", "610", "310")}}

## 加速性能

為了使移動看起來更真實，你可以照著範例改變速度:

```js
ball.vy *= 0.99;
ball.vy += 0.25;
```

這個使每個幀(frame)的垂直向量減少，所以球將只會在地板彈跳直到結束。

```html hidden
<canvas id="canvas" style="border: 1px solid" width="600" height="300"></canvas>
```

```js hidden
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

canvas.addEventListener("mouseover", function (e) {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener("mouseout", function (e) {
  window.cancelAnimationFrame(raf);
});

ball.draw();
```

{{EmbedLiveSample("加速性能", "610", "310")}}

## 追蹤效果

直到現在我們已經使用{{domxref("CanvasRenderingContext2D.clearRect", "clearRect")}}方法清除之前的幀(frames)。如果使用重置半透明{{domxref("CanvasRenderingContext2D.fillRect", "fillRect")}}這個方法，可以更淺顯的看出創造追蹤效果。

```js
ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
ctx.fillRect(0, 0, canvas.width, canvas.height);
```

```html hidden
<canvas id="canvas" style="border: 1px solid" width="600" height="300"></canvas>
```

```js hidden
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

canvas.addEventListener("mouseover", function (e) {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener("mouseout", function (e) {
  window.cancelAnimationFrame(raf);
});

ball.draw();
```

{{EmbedLiveSample("追蹤效果", "610", "310")}}

## 增加滑鼠控制

為了能控制球使它跟著滑鼠移動，在這個範例使用[`mousemove`](/zh-TW/docs/Web/API/Element/mousemove_event) 效果。當 [`click`](/zh-TW/docs/Web/API/Element/click_event) 事件觸發了這顆球，它又會開始彈跳。

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
  ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
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
    ball.x = e.clientX;
    ball.y = e.clientY;
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

用你的滑鼠移動這顆球且點擊鬆放它。

{{EmbedLiveSample("增加滑鼠控制", "610", "310")}}

## 突破性(遊戲)

這個小章節只有解釋一些創造高級動畫的技巧。這裡還有更多!如何增加槳,磚塊,到這個 到 [Breakout](http://en.wikipedia.org/wiki/Breakout_%28video_game%29) game demo 去看，有我們更[多遊戲研發](/zh-TW/docs/Games)的文章!

## 參見

- {{domxref("Window.requestAnimationFrame()")}}
- [Efficient animation for web games](/zh-TW/docs/Games/Techniques)

{{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_animations", "Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas")}}
