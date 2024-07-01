---
title: Расширенные анимации
slug: Web/API/Canvas_API/Tutorial/Advanced_animations
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_animations", "Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas")}}

В предыдущей главе мы сделали несколько [базовых анимаций](/ru/docs/Web/API/Canvas_API/Tutorial/Basic_animations) и узнали, как можно двигать вещи. В этой части мы более подробно рассмотрим само движение и собираемся добавить некоторую физику, чтобы сделать наши анимации более продвинутыми.

## Рисование мяча

Мы собираемся использовать шар для наших анимационных исследований, поэтому давайте сначала нарисуем этот шар на `canvas`. Нам нужен следующий код.

```html
<canvas id="canvas" width="600" height="300"></canvas>
```

Как обычно, нам нужен контекст рисования. Чтобы нарисовать шар, мы создадим объект `ball`, который содержит свойства и метод `draw()` , чтобы нарисовать его на `canvas`.

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

Здесь нет ничего особенного, шар на самом деле представляет собой простой круг и рисуется с помощью метода {{domxref("CanvasRenderingContext2D.arc()", "arc()")}}.

## Добавление скорости

Теперь, когда у нас есть шар, мы готовы добавить базовую анимацию, как мы узнали из последней [главы](/ru/docs/Web/API/Canvas_API/Tutorial/Basic_animations) этого урока. Опять же, {{domxref("window.requestAnimationFrame()")}} помогает нам контролировать анимацию. Мяч перемещается, добавляя вектор скорости в положение. Для каждого кадра мы также {{domxref("CanvasRenderingContext2D.clearRect", "очищаем", "", 1)}} холст, чтобы удалить старые круги из предыдущих кадров.

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

## Границы

Без какого-либо граничного коллизионного тестирования наш мяч быстро выбегает из холста. Нам нужно проверить, не находятся ли `x` и `y` положения шара вне размеров холста и не инвертируют направление векторов скорости. Для этого мы добавим следующие проверки в метод `draw` :

```js
if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
  ball.vy = -ball.vy;
}
if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
  ball.vx = -ball.vx;
}
```

### Первое демо

Посмотрим, как он выглядит в действии. Переместите мышь на холст, чтобы запустить анимацию.

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

{{EmbedLiveSample("Первое_демо", "610", "310")}}

## Ускорение

Чтобы сделать движение более реальным, вы можете играть со скоростью, например так:

```js
ball.vy *= 0.99;
ball.vy += 0.25;
```

Это замедляет вертикальную скорость каждого кадра, так что мяч будет просто отскакивать от пола в конце.

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

{{EmbedLiveSample("Second_demo", "610", "310")}}

## Скользящий эффект

До сих пор мы использовали метод {{domxref("CanvasRenderingContext2D.clearRect", "clearRect")}}, когда очищали предыдущий кадр. Если заменить этот метод на {{domxref("CanvasRenderingContext2D.fillRect", "fillRect")}} с полу-прозрачным стилем, можно легко создать эффект скольжения.

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

{{EmbedLiveSample("Third_demo", "610", "310")}}

## Добавление управления мышью

Чтобы получить некоторый контроль над мячом, мы можем заставить его следовать за нашей мышью, например, с помощью события [`mousemove`](/ru/docs/Web/Reference/Events/mousemove). Событие [`click`](/ru/docs/Web/Events/click) отпускает мяч и позволяет ему снова прыгать.

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

Переместите шар с помощью мыши и отпустите его одним щелчком.

{{EmbedLiveSample("Добавление_управления_мышью", "610", "310")}}

## Breakout(арканоид)

В этой короткой главе описаны некоторые приёмы создания продвинутой анимации. Как насчёт того, что бы добавить доску, кирпичи и превратить это демо в игру Breakout(в Росси более известный клон этой игры - арканоид)? Посетите [Game development](/ru/docs/Games) чтобы узнать больше об играх.

## Смотрите также

- {{domxref("window.requestAnimationFrame()")}}
- [Efficient animation for web games](/ru/docs/Games/Techniques/Efficient_animation_for_web_games)

{{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_animations", "Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas")}}
