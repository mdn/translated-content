---
title: 발전된 애니메이션
slug: Web/API/Canvas_API/Tutorial/Advanced_animations
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_animations", "Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas")}}

마지막 챕터에서 우리는 몇가지 [간단한 애니메이션들](/ko/docs/Web/API/Canvas_API/Tutorial/Basic_animations)을 만들었고 이제 이것들을 어떻게 움직이게 하는지 안다. 이 챕터에서 우리는 각각의 모션들을 자세히 살펴보고 애니메이션을 더 발전시키기 위해 몇가지 물리 동작을 추가할 것이다.

## 공 그리기

우리는 애니메이션 공부를 위해 공을 사용할 것이다. 먼저 캔버스에 공을 그려보자. 다음 코드를 통해 준비해보자.

```html
<canvas id="canvas" width="600" height="300"></canvas>
```

언제나처럼, 우리는 context를 먼저 그려야 한다. 공을 그리기 위해 우리는 캔버스에 그림을 그리기 위한 프로퍼티와 `draw()` 메소드를 가진 `ball` 오브젝트를 생성할 것이다.

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

특이할 건 없다. 이공은 사실상 간단한 원이고 그리는 방법은 다음{{domxref("CanvasRenderingContext2D.arc()", "arc()")}} 메소드에서 참고할 수 있다.

## 속도 추가하기

우리한테는 이제 공이 있다. 이제 이 튜토리얼 [마지막 챕터](/ko/docs/Web/API/Canvas_API/Tutorial/Basic_animations)에서 배웠던 것과 같은 기본 애니메이션을 추가할 준비가 되었다. 다시 한 번, 애니메이션 컨트롤은 {{domxref("window.requestAnimationFrame()")}}가 도와주 것이다. 공은 위치에 속도 벡터를 추가하여 움직일 수 있게 된다. 각각의 프레임에, 우리는{{domxref("CanvasRenderingContext2D.clearRect", "clear", "", 1)}}를 캔버스에 주어 오래된 원을 이전 프래임에서 지운다.

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

## 경계

경계 충돌 테스트의 필요 없이 우리가 만든 공은 캔버스 밖으로 빠르게 빠져나갈 것입니다. 우리는 공의 `x` 와 `y` 위치가 캔버스 차원을 빠져나갔는지 체크해서 방향과 속도를 바꿔주어야 합니다. 그러기 위해서 우리는 `draw` 메소드에 다음 확인사항을 추가할 것입니다.:

```js
if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
  ball.vy = -ball.vy;
}
if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
  ball.vx = -ball.vx;
}
```

### First demo

이제 동작을 확인해 봅시다. 시작하려먼 마우스를 캔버스 안으로 움직여 주세요.

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

{{EmbedLiveSample("First_demo", "610", "310")}}

## 가속

움직임을 좀 더 리얼하게 만들기 위해, 우리는 속도를 다음과 같이 줄 겁니다. 예를 들어:

```js
ball.vy *= 0.99;
ball.vy += 0.25;
```

이것은 각 프레임의 세로 속도를 줄여주어, 공이 결국 바닥에서 튀게 만듭니다.

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

## 후행 효과

지금까지 우리는 {{domxref("CanvasRenderingContext2D.clearRect", "clearRect")}}메소드를 사용해서 이전 프레임을 지웠다. 만약 당신이 {{domxref("CanvasRenderingContext2D.fillRect", "fillRect")}}르 사용하여 약간 투명도를 준다면, 쉽게 후행 효과(Trailing effect)를 만들 수 있을 것이다.

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

## 마우스 컨트롤 추가하기

공을 컨트롤 하기 위해, 우리는 [`mousemove`](/ko/docs/Web/API/Element/mousemove_event) 이벤트를 사용하여 마우스를 따라오게 할 것이다. [`click`](/ko/docs/Web/API/Element/click_event) 이벤트를 통해 공을 놓으면 다시 공이 튀도록 할 것이다.

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

마우스로 공을 움직이고, 클릭을 통해 놓아보자.

{{EmbedLiveSample("Adding_mouse_control", "610", "310")}}

## Breakout

이 짧은 챕터는 발전된 애니메이션을 만들기 위한 조금의 기술을 설명했다. 여기에 더 많은 것들이 있다! 노나 벽돌을 추가해서 이 튜토리얼을 [Breakout](http://en.wikipedia.org/wiki/Breakout_%28video_game%29) 으로 발전시키는 건 어떨까? [Game development](/ko/docs/Games)에서 게임에 관련된 글들을 찾아보자.

## 더보기

- {{domxref("window.requestAnimationFrame()")}}
- [Efficient animation for web games](/ko/docs/Games/Techniques)

{{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_animations", "Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas")}}
