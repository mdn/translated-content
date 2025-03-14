---
title: 基本的なアニメーション
slug: Web/API/Canvas_API/Tutorial/Basic_animations
l10n:
  sourceCommit: 005cc1fd55aadcdcbd9aabbed7d648a275f8f23a
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Compositing", "Web/API/Canvas_API/Tutorial/Advanced_animations")}}

私たちが {{HTMLElement("canvas")}} 要素の操作に JavaScript を使うのは、とても簡単にインタラクティブなアニメーションを作成できるからです。本章では、いくつかの基本的なアニメーションで、その概要をつかんでいきます。

おそらく最大の制約は、キャンバスに図形を一度描画すると、その状態が維持されることです。アニメーションさせる場合にも、移動する部分と以前に描いた部分をすべて再描画する必要があります。複雑なフレームの再描画には時間がかかり、パフォーマンスは、実行しているコンピューターの速度に大きく依存します。

## 基本的なアニメーションの手順

フレームを描画させる手順は、このようになります。

1. **キャンバスをクリアする**
   描画する図形が（たとえば、背景画像のように）キャンバス全体を埋めない限り、以前に描画した図形をすべてクリアする必要があります。最も簡単な方法は、{{domxref("CanvasRenderingContext2D.clearRect", "clearRect()")}} メソッドを使うことです。
2. **キャンバスの状態を保存する**
   キャンバスの状態に影響を与える設定（スタイル、変形など）を変更していて、フレームを描画するたびに元の状態を使用したい場合は、その状態を保存する必要があります。
3. **アニメ―ションさせる図形を描画する**
   実際に、フレームの描画を行います。
4. **キャンバスの状態を復元する**
   状態を保存した場合は、新しいフレームを描画する前に状態を復元します。

## アニメーションの制御

図形は、キャンバスのメソッドを直接使用するか、カスタム関数を呼び出すことによって描画されます。通常は、スクリプトの実行が終了したときにのみ、これらの結果がキャンバスに表示されます。たとえば、`for` ループ内からアニメーションを実行することはできません。

つまり、一定の期間ごとに描画関数を実行する方法が必要です。このようなアニメーションを制御するには、 2 つの方法があります。

### スケジュールの更新

まず、{{domxref("setInterval()")}}、{{domxref("setTimeout()")}} があります。それから、{{domxref("window.requestAnimationFrame()")}} 関数があります。これらは、特定の関数を一定時間で呼び出すために使用できます。

- {{domxref("setInterval()")}}
  - : `function` で指定した関数を `delay` ミリ秒ごとに繰り返し実行します。
- {{domxref("setTimeout()")}}
  - : `function` で指定した関数を `delay` ミリ秒後に実行します。
- {{domxref("Window.requestAnimationFrame()", "requestAnimationFrame(callback)")}}
  - : アニメーションを実行することをブラウザーに通知し、次の再描画の前にアニメーションを更新するため、ブラウザーが指定の関数を呼び出すように要求します。

ユーザーの操作が必要ない場合は、提供されたコードを繰り返し実行する `setInterval()` 関数が利用できます。ゲームを作成したい場合、キーボードまたはマウスのイベントを使用したアニメーションを制御するためには `setTimeout()` が利用できます。{{domxref("EventTarget/addEventListener", "addEventListener()")}} を用いてイベントリスナーを設定することで、ユーザーの操作を取得し、アニメーション関数を実行します。

> [!NOTE]
> 以下の例では、{{domxref("window.requestAnimationFrame()")}} メソッドを使用してアニメーションを制御します。`requestAnimationFrame` メソッドは、フレームを描画する準備ができた時にシステムがアニメーションフレームを呼び出すことで、よりスムーズで効率的な方法でアニメーションを提供します。通常、コールバック回数は 1 秒あたり 60 回となり、バックグラウンドタブで実行している場合は、レートが低くなることがあります。特にゲームのアニメーションループの詳細については、[ゲーム開発](/ja/docs/Games)の[ビデオゲームの解剖学](/ja/docs/Games/Anatomy)を参照してください。

## アニメーションする太陽系

この例は、太陽系の小さなモデルをアニメーションさせます。

### HTML

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

### JavaScript

```js
const sun = new Image();
const moon = new Image();
const earth = new Image();
function init() {
  sun.src = "canvas_sun.png";
  moon.src = "canvas_moon.png";
  earth.src = "canvas_earth.png";
  window.requestAnimationFrame(draw);
}

function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  ctx.globalCompositeOperation = "destination-over";
  ctx.clearRect(0, 0, 300, 300); // clear canvas

  ctx.fillStyle = "rgb(0 0 0 / 40%)";
  ctx.strokeStyle = "rgb(0 153 255 / 40%)";
  ctx.save();
  ctx.translate(150, 150);

  // 地球
  const time = new Date();
  ctx.rotate(
    ((2 * Math.PI) / 60) * time.getSeconds() +
      ((2 * Math.PI) / 60000) * time.getMilliseconds(),
  );
  ctx.translate(105, 0);
  ctx.fillRect(0, -12, 40, 24); // 影
  ctx.drawImage(earth, -12, -12);

  // 月
  ctx.save();
  ctx.rotate(
    ((2 * Math.PI) / 6) * time.getSeconds() +
      ((2 * Math.PI) / 6000) * time.getMilliseconds(),
  );
  ctx.translate(0, 28.5);
  ctx.drawImage(moon, -3.5, -3.5);
  ctx.restore();

  ctx.restore();

  ctx.beginPath();
  ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // 地球の軌道
  ctx.stroke();

  ctx.drawImage(sun, 0, 0, 300, 300);

  window.requestAnimationFrame(draw);
}

init();
```

### 結果

{{EmbedLiveSample("An_animated_solar_system", "310", "340")}}

## アニメ―ションする時計

この例は、アニメーションする時計で現在時間を表示します。

### HTML

```html
<canvas id="canvas" width="150" height="150">現在時刻</canvas>
```

### JavaScript

```js
function clock() {
  const now = new Date();
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.save();
  ctx.clearRect(0, 0, 150, 150);
  ctx.translate(75, 75);
  ctx.scale(0.4, 0.4);
  ctx.rotate(-Math.PI / 2);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "white";
  ctx.lineWidth = 8;
  ctx.lineCap = "round";

  // 文字盤の時
  ctx.save();
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore();

  // 文字盤の分
  ctx.save();
  ctx.lineWidth = 5;
  for (let i = 0; i < 60; i++) {
    if (i % 5 !== 0) {
      ctx.beginPath();
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();

  const sec = now.getSeconds();
  // スイープ秒針の時計を表示するには、次のようにしてください。
  // const sec = now.getSeconds() + now.getMilliseconds() / 1000;
  const min = now.getMinutes();
  const hr = now.getHours() % 12;

  ctx.fillStyle = "black";

  // 画像の説明を書きこむ
  canvas.innerText = `現在時刻: ${hr}:${min}`;

  // Write Hours
  ctx.save();
  ctx.rotate(
    (Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec,
  );
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();

  // 分針
  ctx.save();
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(112, 0);
  ctx.stroke();
  ctx.restore();

  // 秒針
  ctx.save();
  ctx.rotate((sec * Math.PI) / 30);
  ctx.strokeStyle = "#D40000";
  ctx.fillStyle = "#D40000";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(83, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fillStyle = "rgb(0 0 0 / 0%)";
  ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = "#325FA2";
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();

  ctx.restore();

  window.requestAnimationFrame(clock);
}

window.requestAnimationFrame(clock);
```

### 結果

> [!NOTE]
> 時計は 1 秒に 1 回しか更新されませんが、アニメーション画像は 1 秒間に 60 フレーム（またはウェブブラウザーの表示リフレッシュレート）で更新されます。
> 秒針をスイープさせて時計を表示するには、上記の `const sec` の定義をコメントアウトされたバージョンと置き換えてください。

{{EmbedLiveSample("An_animated_clock", "180", "200")}}

## ループする風景

この例は、左から右へ風景写真をスクロールさせます。Wikipedia から[ヨセミテ国立公園の画像](https://commons.wikimedia.org/wiki/File:Capitan_Meadows,_Yosemite_National_Park.jpg?uselang=ja)を使いましたが、キャンバスよりも大きな任意の画像を使用できます。

### HTML

この HTML には、画像がスクロール表示される {{HTMLElement("canvas")}} が含まれます。ここで指定する幅と高さは、 JavaScript のコードにある変数 `canvasXSize` と `canvasYSize` の値と一致する必要があることに注意してください。

```html
<canvas id="canvas" width="800" height="200"
  >ヨセミテ国立公園、エル・キャピタンの麓の草原</canvas
>
```

### JavaScript

```js
const img = new Image();

// ユーザー変数。これらをカスタマイズすると、スクロールする画像、方向、速度を
// 変更することができます。
img.src = "capitan_meadows_yosemite_national_park.jpg";
const canvasXSize = 800;
const canvasYSize = 200;
const speed = 30; // 小さくすると速くなる
const scale = 1.05;
const y = -4.5; // 垂直オフセット

// メインプログラム
const dx = 0.75;
let imgW;
let imgH;
let x = 0;
let clearX;
let clearY;
let ctx;

img.onload = () => {
  imgW = img.width * scale;
  imgH = img.height * scale;

  if (imgW > canvasXSize) {
    // キャンバスより大きな画像
    x = canvasXSize - imgW;
  }

  // 画像の寸法がキャンバスより大きいかどうか調べる
  clearX = Math.max(imgW, canvasXSize);
  clearY = Math.max(imgH, canvasYSize);

  // キャンバスコンテキストの取得
  ctx = document.getElementById("canvas").getContext("2d");

  // リフレッシュレートの設定
  return setInterval(draw, speed);
};

function draw() {
  ctx.clearRect(0, 0, clearX, clearY); // キャンバスをクリア

  // 画像がキャンバスの大きさ以下の場合
  if (imgW <= canvasXSize) {
    // リセット、最初から始める
    if (x > canvasXSize) {
      x = -imgW + x;
    }

    // 追加の画像 1 を描画
    if (x > 0) {
      ctx.drawImage(img, -imgW + x, y, imgW, imgH);
    }

    // 追加の画像 2 を描画
    if (x - imgW > 0) {
      ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
    }
  } else {
    // 画像がキャンバスの大きさより大きい
    // リセット、最初から始める
    if (x > canvasXSize) {
      x = canvasXSize - imgW;
    }

    // 追加の画像を描画
    if (x > canvasXSize - imgW) {
      ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
    }
  }

  // 画像を描画
  ctx.drawImage(img, x, y, imgW, imgH);

  // 移動量
  x += dx;
}
```

### 結果

{{EmbedLiveSample("A_looping_panorama", "830", "250")}}

## マウス追跡アニメーション

### HTML

```html
<canvas id="cw"
  >画像上を移動するカーソルに続く、多色の消える光の流れを作成するアニメーション。
  画像上を移動されるカーソルに追従する多色の光の流れ
</canvas>
```

### CSS

```css
#cw {
  position: fixed;
  z-index: -1;
}

body {
  margin: 0;
  padding: 0;
  background-color: rgb(0 0 0 / 5%);
}
```

### JavaScript

```js
const canvas = document.getElementById("cw");
const context = canvas.getContext("2d");
context.globalAlpha = 0.5;

const cursor = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

let particlesArray = [];

generateParticles(101);
setSize();
anim();

addEventListener("mousemove", (e) => {
  cursor.x = e.clientX;
  cursor.y = e.clientY;
});

addEventListener(
  "touchmove",
  (e) => {
    e.preventDefault();
    cursor.x = e.touches[0].clientX;
    cursor.y = e.touches[0].clientY;
  },
  { passive: false },
);

addEventListener("resize", () => setSize());

function generateParticles(amount) {
  for (let i = 0; i < amount; i++) {
    particlesArray[i] = new Particle(
      innerWidth / 2,
      innerHeight / 2,
      4,
      generateColor(),
      0.02,
    );
  }
}

function generateColor() {
  let hexSet = "0123456789ABCDEF";
  let finalHexString = "#";
  for (let i = 0; i < 6; i++) {
    finalHexString += hexSet[Math.ceil(Math.random() * 15)];
  }
  return finalHexString;
}

function setSize() {
  canvas.height = innerHeight;
  canvas.width = innerWidth;
}

function Particle(x, y, particleTrailWidth, strokeColor, rotateSpeed) {
  this.x = x;
  this.y = y;
  this.particleTrailWidth = particleTrailWidth;
  this.strokeColor = strokeColor;
  this.theta = Math.random() * Math.PI * 2;
  this.rotateSpeed = rotateSpeed;
  this.t = Math.random() * 150;

  this.rotate = () => {
    const ls = {
      x: this.x,
      y: this.y,
    };
    this.theta += this.rotateSpeed;
    this.x = cursor.x + Math.cos(this.theta) * this.t;
    this.y = cursor.y + Math.sin(this.theta) * this.t;
    context.beginPath();
    context.lineWidth = this.particleTrailWidth;
    context.strokeStyle = this.strokeColor;
    context.moveTo(ls.x, ls.y);
    context.lineTo(this.x, this.y);
    context.stroke();
  };
}

function anim() {
  requestAnimationFrame(anim);

  context.fillStyle = "rgb(0 0 0 / 5%)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  particlesArray.forEach((particle) => particle.rotate());
}
```

### 結果

{{EmbedLiveSample("Mouse_following_animation", "500", "500")}}

## その他の例

- [高度なアニメーション](/ja/docs/Web/API/Canvas_API/Tutorial/Advanced_animations)
  - : 高度なアニメーション技術と物の動きについて見ていきます。

{{PreviousNext("Web/API/Canvas_API/Tutorial/Compositing", "Web/API/Canvas_API/Tutorial/Advanced_animations")}}
