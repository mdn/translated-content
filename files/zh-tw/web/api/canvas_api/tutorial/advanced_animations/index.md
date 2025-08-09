---
title: 進階動畫
slug: Web/API/Canvas_API/Tutorial/Advanced_animations
l10n:
  sourceCommit: 02724e050873ff160217f3980e6eb8c2d356fdc9
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_animations", "Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas")}}

在上一章中，我們製作了一些[基本動畫](/zh-TW/docs/Web/API/Canvas_API/Tutorial/Basic_animations)，並了解了讓物件移動的方法。在這一部分，我們將更深入地探討運動本身，並加入一些物理效果，使我們的動畫更加進階。

## 繪製一顆球

我們將使用一顆球來進行動畫研究，因此讓我們先將這顆球繪製到畫布上。以下程式碼將為我們設置好環境。

```html
<canvas id="canvas" width="600" height="300"></canvas>
```

如往常一樣，我們需要先取得繪圖上下文。為了繪製球，我們將建立一個 `ball` 物件，其中包含屬性和一個 `draw()` 方法，用於將其繪製到畫布上。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const ball = {
  x: 100,
  y: 100,
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

ball.draw();
```

這裡沒有什麼特別之處，這顆球實際上是一個簡單的圓形，並透過 {{domxref("CanvasRenderingContext2D.arc()", "arc()")}} 方法繪製出來。

## 加入速度

現在我們有了一顆球，準備加入一個基本動畫，就像我們在本教學的[上一章](/zh-TW/docs/Web/API/Canvas_API/Tutorial/Basic_animations)中學到的一樣。同樣地，{{domxref("window.requestAnimationFrame()")}} 幫助我們控制動畫。透過將速度向量加入位置，球開始移動。在每一幀中，我們也會使用 {{domxref("CanvasRenderingContext2D.clearRect", "clear", "", 1)}} 方法清除畫布，以移除前幾幀的舊圓形。

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

## 邊界

如果沒有任何邊界碰撞測試，我們的球很快就會跑出畫布。我們需要檢查球的 `x` 和 `y` 位置是否超出畫布的範圍，並反轉速度向量的方向。為此，我們在 `draw` 方法中加入以下檢查：

```js
if (
  ball.y + ball.vy > canvas.height - ball.radius ||
  ball.y + ball.vy < ball.radius
) {
  ball.vy = -ball.vy;
}
if (
  ball.x + ball.vx > canvas.width - ball.radius ||
  ball.x + ball.vx < ball.radius
) {
  ball.vx = -ball.vx;
}
```

### 第一個範例

讓我們看看目前的效果。

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

  if (
    ball.y + ball.vy > canvas.height - ball.radius ||
    ball.y + ball.vy < ball.radius
  ) {
    ball.vy = -ball.vy;
  }
  if (
    ball.x + ball.vx > canvas.width - ball.radius ||
    ball.x + ball.vx < ball.radius
  ) {
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

#### 結果

將滑鼠移入畫布以開始動畫。

{{EmbedLiveSample("第一個範例", "610", "340")}}

## 加速度

為了讓運動更加真實，你可以像這樣調整速度：

```js
ball.vy *= 0.99;
ball.vy += 0.25;
```

這會在每一幀中減緩垂直速度，最終使球僅在地板上彈跳。

### 第二個範例

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

  if (
    ball.y + ball.vy > canvas.height - ball.radius ||
    ball.y + ball.vy < ball.radius
  ) {
    ball.vy = -ball.vy;
  }
  if (
    ball.x + ball.vx > canvas.width - ball.radius ||
    ball.x + ball.vx < ball.radius
  ) {
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

#### 結果

{{EmbedLiveSample("第二個範例", "610", "340")}}

## 拖尾效果

到目前為止，我們一直使用 {{domxref("CanvasRenderingContext2D.clearRect", "clearRect")}} 方法來清除前幀。如果你將此方法替換為半透明的 {{domxref("CanvasRenderingContext2D.fillRect", "fillRect")}}，可以輕鬆創建拖尾效果。

```js
ctx.fillStyle = "rgb(255 255 255 / 30%)";
ctx.fillRect(0, 0, canvas.width, canvas.height);
```

### 第三個範例

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
  ctx.fillStyle = "rgb(255 255 255 / 30%)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  ball.vy *= 0.99;
  ball.vy += 0.25;

  if (
    ball.y + ball.vy > canvas.height - ball.radius ||
    ball.y + ball.vy < ball.radius
  ) {
    ball.vy = -ball.vy;
  }
  if (
    ball.x + ball.vx > canvas.width - ball.radius ||
    ball.x + ball.vx < ball.radius
  ) {
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

#### 結果

{{EmbedLiveSample("第三個範例", "610", "340")}}

## 加入滑鼠控制

為了讓球能夠跟隨滑鼠，我們可以使用 [`mousemove`](/zh-TW/docs/Web/API/Element/mousemove_event) 事件。例如，使用 [`click`](/zh-TW/docs/Web/API/Element/click_event) 事件釋放球，讓它再次彈跳。

### 第四個範例

#### HTML

```html
<canvas id="canvas" style="border: 1px solid" width="600" height="300"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let raf;
let running = false;

const ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 1,
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

function clear() {
  ctx.fillStyle = "rgb(255 255 255 / 30%)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function draw() {
  clear();
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;

  if (
    ball.y + ball.vy > canvas.height - ball.radius ||
    ball.y + ball.vy < ball.radius
  ) {
    ball.vy = -ball.vy;
  }
  if (
    ball.x + ball.vx > canvas.width - ball.radius ||
    ball.x + ball.vx < ball.radius
  ) {
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener("mousemove", (e) => {
  if (!running) {
    clear();
    ball.x = e.clientX;
    ball.y = e.clientY;
    ball.draw();
  }
});

canvas.addEventListener("click", (e) => {
  if (!running) {
    raf = window.requestAnimationFrame(draw);
    running = true;
  }
});

canvas.addEventListener("mouseout", (e) => {
  window.cancelAnimationFrame(raf);
  running = false;
});

ball.draw();
```

#### 結果

使用滑鼠移動球，並點擊釋放它。

{{EmbedLiveSample("第四個範例", "610", "340")}}

## 打磚塊遊戲

這一短章僅解釋了一些用於創建進階動畫的技術。還有許多其他技術！例如，加入一個板子和一些磚塊，將此範例轉變為[打磚塊遊戲](<https://zh.wikipedia.org/wiki/Breakout_(遊戲)>)。查看我們的[遊戲開發](/zh-TW/docs/Games)區域，了解更多與遊戲相關的文章。

## 參見

- {{domxref("window.requestAnimationFrame()")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_animations", "Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas")}}
