---
title: 基本的动画
slug: Web/API/Canvas_API/Tutorial/Basic_animations
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Compositing", "Web/API/Canvas_API/Tutorial/Advanced_animations")}}

由于我们是用 JavaScript 去操控 {{HTMLElement("canvas")}} 对象，这样要实现一些交互动画也是相当容易的。在本章中，我们将看看如何做一些基本的动画。

可能最大的限制就是图像一旦绘制出来，它就是一直保持那样了。如果需要移动它，我们不得不对所有东西（包括之前的）进行重绘。重绘是相当费时的，而且性能很依赖于电脑的速度。

## 动画的基本步骤

你可以通过以下的步骤来画出一帧：

1. **清空 canvas**
   除非接下来要画的内容会完全充满 canvas（例如背景图），否则你需要清空所有。最简单的做法就是用 `clearRect` 方法。
2. **保存 canvas 状态**
   如果你要改变一些会改变 canvas 状态的设置（样式，变形之类的），又要在每画一帧之时都是原始状态的话，你需要先保存一下。
3. **绘制动画图形（animated shapes）**
   这一步才是重绘动画帧。
4. **恢复 canvas 状态**
   如果已经保存了 canvas 的状态，可以先恢复它，然后重绘下一帧。

## 操控动画

在 canvas 上绘制内容是用 canvas 提供的或者自定义的方法，而通常，我们仅仅在脚本执行结束后才能看见结果，比如说，在 for 循环里面做完成动画是不太可能的。

因此，为了实现动画，我们需要一些可以定时执行重绘的方法。有两种方法可以实现这样的动画操控。首先可以通过 `setInterval` 和 `setTimeout` 方法来控制在设定的时间点上执行重绘。

### 有安排地更新画布

首先，可以用{{domxref("window.setInterval()")}}, {{domxref("window.setTimeout()")}},和{{domxref("window.requestAnimationFrame()")}}来设定定期执行一个指定函数。

- {{domxref("WindowTimers.setInterval", "setInterval(function, delay)")}}
  - : 当设定好间隔时间后，function 会定期执行。
- {{domxref("WindowTimers.setTimeout", "setTimeout(function, delay)")}}
  - : 在设定好的时间之后执行函数
- {{domxref("Window.requestAnimationFrame()", "requestAnimationFrame(callback)")}}
  - : 告诉浏览器你希望执行一个动画，并在重绘之前，请求浏览器执行一个特定的函数来更新动画。

如果你并不需要与用户互动，你可以使用 setInterval() 方法，它就可以定期执行指定代码。如果我们需要做一个游戏，我们可以使用键盘或者鼠标事件配合上 setTimeout() 方法来实现。通过设置事件监听，我们可以捕捉用户的交互，并执行相应的动作。

> **备注：** 下面的例子，采用 {{domxref("window.requestAnimationFrame()")}}实现动画效果。这个方法提供了更加平缓并更加有效率的方式来执行动画，当系统准备好了重绘条件的时候，才调用绘制动画帧。一般每秒钟回调函数执行 60 次，也有可能会被降低。想要了解更多关于动画循环的信息，尤其是游戏，可以在[Game development zone](/zh-CN/docs/Games) 参考这篇文章 [Anatomy of a video game](/zh-CN/docs/Games/Anatomy)。

## 太阳系的动画

这个例子里面，我会做一个小型的太阳系模拟动画。

```js
var sun = new Image();
var moon = new Image();
var earth = new Image();
function init() {
  sun.src = "canvas_sun.png";
  moon.src = "canvas_moon.png";
  earth.src = "canvas_earth.png";
  window.requestAnimationFrame(draw);
}

function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  ctx.globalCompositeOperation = "destination-over";
  ctx.clearRect(0, 0, 300, 300); // clear canvas

  ctx.fillStyle = "rgba(0,0,0,0.4)";
  ctx.strokeStyle = "rgba(0,153,255,0.4)";
  ctx.save();
  ctx.translate(150, 150);

  // Earth
  var time = new Date();
  ctx.rotate(
    ((2 * Math.PI) / 60) * time.getSeconds() +
      ((2 * Math.PI) / 60000) * time.getMilliseconds(),
  );
  ctx.translate(105, 0);
  ctx.fillRect(0, -12, 50, 24); // Shadow
  ctx.drawImage(earth, -12, -12);

  // Moon
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
  ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
  ctx.stroke();

  ctx.drawImage(sun, 0, 0, 300, 300);

  window.requestAnimationFrame(draw);
}

init();
```

```html hidden
<canvas id="canvas" width="300" height="300"></canvas>
```

{{EmbedLiveSample("太阳系的动画", "310", "310", "canvas_animation1.png")}}

## 动画时钟

这个例子实现一个动态时钟，可以显示当前时间。

```js
function clock() {
  var now = new Date();
  var ctx = document.getElementById("canvas").getContext("2d");
  ctx.save();
  ctx.clearRect(0, 0, 150, 150);
  ctx.translate(75, 75);
  ctx.scale(0.4, 0.4);
  ctx.rotate(-Math.PI / 2);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "white";
  ctx.lineWidth = 8;
  ctx.lineCap = "round";

  // Hour marks
  ctx.save();
  for (var i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore();

  // Minute marks
  ctx.save();
  ctx.lineWidth = 5;
  for (i = 0; i < 60; i++) {
    if (i % 5 != 0) {
      ctx.beginPath();
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();

  var sec = now.getSeconds();
  var min = now.getMinutes();
  var hr = now.getHours();
  hr = hr >= 12 ? hr - 12 : hr;

  ctx.fillStyle = "black";

  // write Hours
  ctx.save();
  ctx.rotate(
    hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) * sec,
  );
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();

  // write Minutes
  ctx.save();
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(112, 0);
  ctx.stroke();
  ctx.restore();

  // Write seconds
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
  ctx.fillStyle = "rgba(0,0,0,0)";
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

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

{{EmbedLiveSample("动画时钟", "180", "180", "canvas_animation2.png")}}

## 循环全景照片

在这个例子中，会有一个自左向右滑动的全景图。我们使用了在维基百科中找到的[尤塞米提国家公园的图片](capitan_meadows,_yosemite_national_park.jpg)，当然你可以随意找一张任何尺寸大于 canvas 的图片。

```js
var img = new Image();

// User Variables - customize these to change the image being scrolled, its
// direction, and the speed.

img.src = "capitan_meadows,_yosemite_national_park.jpg";
var CanvasXSize = 800;
var CanvasYSize = 200;
var speed = 30; // lower is faster
var scale = 1.05;
var y = -4.5; // vertical offset

// Main program

var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;

img.onload = function () {
  imgW = img.width * scale;
  imgH = img.height * scale;

  if (imgW > CanvasXSize) {
    // image larger than canvas
    x = CanvasXSize - imgW;
  }
  if (imgW > CanvasXSize) {
    // image width larger than canvas
    clearX = imgW;
  } else {
    clearX = CanvasXSize;
  }
  if (imgH > CanvasYSize) {
    // image height larger than canvas
    clearY = imgH;
  } else {
    clearY = CanvasYSize;
  }

  // get canvas context
  ctx = document.getElementById("canvas").getContext("2d");

  // set refresh rate
  return setInterval(draw, speed);
};

function draw() {
  ctx.clearRect(0, 0, clearX, clearY); // clear the canvas

  // if image is <= Canvas Size
  if (imgW <= CanvasXSize) {
    // reset, start from beginning
    if (x > CanvasXSize) {
      x = -imgW + x;
    }
    // draw additional image1
    if (x > 0) {
      ctx.drawImage(img, -imgW + x, y, imgW, imgH);
    }
    // draw additional image2
    if (x - imgW > 0) {
      ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
    }
  }

  // image is > Canvas Size
  else {
    // reset, start from beginning
    if (x > CanvasXSize) {
      x = CanvasXSize - imgW;
    }
    // draw aditional image
    if (x > CanvasXSize - imgW) {
      ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
    }
  }
  // draw image
  ctx.drawImage(img, x, y, imgW, imgH);
  // amount to move
  x += dx;
}
```

```html hidden
<canvas id="canvas" width="800" height="200"></canvas>
```

下方就是是图片在其中滑动的 {{HTMLElement("canvas")}}。需要注意的是这里定义的 width 和 height 必须与 JavaScript 代码中的变量值`CanvasXZSize`和`CanvasYSize`保持一致。

```
<canvas id="canvas" width="800" height="200"></canvas>
```

{{EmbedLiveSample("循环全景照片", "830", "230")}}

## 鼠标追踪动画

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <script>
      var cn;
      //= document.getElementById('cw');
      var c;
      var u = 10;
      const m = {
        x: innerWidth / 2,
        y: innerHeight / 2,
      };
      window.onmousemove = function (e) {
        m.x = e.clientX;
        m.y = e.clientY;
      };
      function gc() {
        var s = "0123456789ABCDEF";
        var c = "#";
        for (var i = 0; i < 6; i++) {
          c += s[Math.ceil(Math.random() * 15)];
        }
        return c;
      }
      var a = [];
      window.onload = function myfunction() {
        cn = document.getElementById("cw");
        c = cn.getContext("2d");

        for (var i = 0; i < 10; i++) {
          var r = 30;
          var x = Math.random() * (innerWidth - 2 * r) + r;
          var y = Math.random() * (innerHeight - 2 * r) + r;
          var t = new ob(
            innerWidth / 2,
            innerHeight / 2,
            5,
            "red",
            Math.random() * 200 + 20,
            2,
          );
          a.push(t);
        }
        //cn.style.backgroundColor = "#700bc8";

        c.lineWidth = "2";
        c.globalAlpha = 0.5;
        resize();
        anim();
      };
      window.onresize = function () {
        resize();
      };
      function resize() {
        cn.height = innerHeight;
        cn.width = innerWidth;
        for (var i = 0; i < 101; i++) {
          var r = 30;
          var x = Math.random() * (innerWidth - 2 * r) + r;
          var y = Math.random() * (innerHeight - 2 * r) + r;
          a[i] = new ob(
            innerWidth / 2,
            innerHeight / 2,
            4,
            gc(),
            Math.random() * 200 + 20,
            0.02,
          );
        }
        //  a[0] = new ob(innerWidth / 2, innerHeight / 2, 40, "red", 0.05, 0.05);
        //a[0].dr();
      }
      function ob(x, y, r, cc, o, s) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.cc = cc;
        this.theta = Math.random() * Math.PI * 2;
        this.s = s;
        this.o = o;
        this.t = Math.random() * 150;

        this.o = o;
        this.dr = function () {
          const ls = {
            x: this.x,
            y: this.y,
          };
          this.theta += this.s;
          this.x = m.x + Math.cos(this.theta) * this.t;
          this.y = m.y + Math.sin(this.theta) * this.t;
          c.beginPath();
          c.lineWidth = this.r;
          c.strokeStyle = this.cc;
          c.moveTo(ls.x, ls.y);
          c.lineTo(this.x, this.y);
          c.stroke();
          c.closePath();
        };
      }
      function anim() {
        requestAnimationFrame(anim);
        c.fillStyle = "rgba(0,0,0,0.05)";
        c.fillRect(0, 0, cn.width, cn.height);
        a.forEach(function (e, i) {
          e.dr();
        });
      }
    </script>
    <style>
      #cw {
        position: fixed;
        z-index: -1;
      }

      body {
        margin: 0;
        padding: 0;
        background-color: rgba(0, 0, 0, 0.05);
      }
    </style>
  </head>
  <body>
    <canvas id="cw"></canvas>
    qwerewr
  </body>
</html>
```

### Output

{{EmbedLiveSample("鼠标追踪动画", "500", "500")}}

## 其他例子

- [Advanced animations](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Advanced_animations)
  - : 我们将在下一章看到一些先进的动画技术和物理现象。

{{PreviousNext("Web/API/Canvas_API/Tutorial/Compositing", "Web/API/Canvas_API/Tutorial/Advanced_animations")}}
