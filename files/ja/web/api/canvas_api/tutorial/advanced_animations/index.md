---
title: 高度なアニメーション
slug: Web/API/Canvas_API/Tutorial/Advanced_animations
l10n:
  sourceCommit: 02724e050873ff160217f3980e6eb8c2d356fdc9
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_animations", "Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas")}}

前の章では、いくつかの[基本的なアニメーション](/ja/docs/Web/API/Canvas_API/Tutorial/Basic_animations)を作成して、物の動かし方を学びました。このパートでは、 運動そのものをより詳細に見て、 アニメーションをより高度にするための物理を追加していきましょう。

## ボールの描画

アニメーションの勉強のために、ボールを使おうと思うので、最初にボールをキャンバス上に描きましょう。以下のコードで設定します。

```html
<canvas id="canvas" width="600" height="300"></canvas>
```

普通通り、まず描画コンテキストが必要になります。ボールを描くため、 `ball` オブジェクトを作成して、プロパティと、キャンバスにボールを描くための `draw()` メソッドを持つようにします。

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

ここでは特別なことはなく、ボールは本当に単純な円で、{{domxref("CanvasRenderingContext2D.arc()", "arc()")}} メソッドの助けを借りて描かれています。

## 速度の追加

ボールができたので、このチュートリアルの[前の章](/ja/docs/Web/API/Canvas_API/Tutorial/Basic_animations)で学んだような、基本的なアニメーションを追加する準備ができたことになります。ここでも {{domxref("window.requestAnimationFrame()")}} がアニメーションを制御するのに役立っています。ボールは、位置に速度ベクトルを追加することで移動します。また、フレームごとに {{domxref("CanvasRenderingContext2D.clearRect", "clear", "", 1)}} キャンバスに以前のフレームから古い円を削除しています。

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

## 境界

境界で衝突テストを行わないと、ボールはすぐにキャンバスから飛び出してしまいます。ボールの `x` と `y` の位置がキャンバスの寸法から外れているかどうかをチェックし、速度ベクトルの向きを反転させる必要があります。そのために、`draw` メソッドに次のようなチェックを追加します。

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

### 最初のデモ

ここまでで実際にどのように見えるか見てみましょう。

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

キャンバスにマウスを移動するとアニメーションを開始します。

{{EmbedLiveSample("最初のデモ", "610", "340")}}

## 加速

動きをよりリアルにするために、例えばこんな風に移動量を変化させることができます。

```js
ball.vy *= 0.99;
ball.vy += 0.25;
```

これにより、フレームごとに垂直方向の速度が遅くなり、最終的にボールは床の上でバウンドするだけになります。

### 第 2 のデモ

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

{{EmbedLiveSample("第 2 のデモ", "610", "340")}}

## 後引き効果

これまで、前のフレームをクリアするときは {{domxref("CanvasRenderingContext2D.clearRect", "clearRect")}} メソッドを使用していました。このメソッドを半透明の {{domxref("CanvasRenderingContext2D.fillRect", "fillRect")}} に置き換えると、簡単に後引き効果を作ることができます。

```js
ctx.fillStyle = "rgb(255 255 255 / 30%)";
ctx.fillRect(0, 0, canvas.width, canvas.height);
```

### 第 3 のデモ

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

{{EmbedLiveSample("第 3 のデモ", "610", "340")}}

## マウス制御の追加

ボールに対してちょっとした制御をするために、たとえば [`mousemove`](/ja/docs/Web/API/Element/mousemove_event) イベントを使用してボールにマウスを追いかけさせるようなことができます。[`click`](/ja/docs/Web/API/Element/click_event) イベントでボールを解放して、またバウンドさせることもできます。

### 第 4 のデモ

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

マウスでボールを動かし、クリックでボールを放します。

{{EmbedLiveSample("第 4 のデモ", "610", "340")}}

## ブロック崩し

この短い章では、より高度なアニメーションを作成するためのテクニックをいくつか説明するだけです。他にもたくさんあります。パドルやレンガを追加して、このデモを[ブロック崩し](https://ja.wikipedia.org/wiki/ブロックくずし)ゲームにするのはどうでしょうか？[ゲーム開発](/ja/docs/Games)領域では、ゲーム関連の記事を多数掲載しています。

## 関連情報

- {{domxref("window.requestAnimationFrame()")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_animations", "Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas")}}
