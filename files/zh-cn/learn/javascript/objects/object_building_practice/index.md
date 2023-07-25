---
title: 实践对象构造
slug: Learn/JavaScript/Objects/Object_building_practice
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects/Adding_bouncing_balls_features", "Learn/JavaScript/Objects")}}

在前面的文章中，我们学习了 JavaScript 的面向对象理论和基本的语法知识，为之后的学习建立了良好的基础。这篇文章中我们将进行一次实战演练，通过构造 JavaScript 对象得到生动有趣的成果！

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>
        基本的计算机知识，了解 HTML 与 CSS 的基本概念，熟悉 JavaScript
        基本知识（请参阅
        <a href="/zh-CN/docs/Learn/JavaScript/First_steps">入门</a> 和
        <a href="/zh-CN/docs/Learn/JavaScript/Building_blocks">构建块结构</a
        >）和面向对象的 JavaScript（OOJS）基础（请参阅
        <a href="/zh-CN/docs/Learn/JavaScript/Objects/Basics">对象基础</a>）。
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>练习使用对象，在真实环境中应用面向对象开发技术。</td>
    </tr>
  </tbody>
</table>

## 弹跳吧！小彩球！

本文通过编写一个弹球 demo 来展示 JavaScript 中对象的重要性。我们的小球会在屏幕上弹跳，当它们碰到彼此时会变色。最终会像这样：

```html hidden
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <style>
      body {
        margin: 0;
        overflow: hidden;
        font-family: "PingFangSC-Regular", "微软雅黑", sans-serif;
        height: 100%;
      }
      h1 {
        font-size: 2rem;
        letter-spacing: -1px;
        position: absolute;
        margin: 0;
        top: -4px;
        right: 5px;
        color: transparent;
        text-shadow: 0 0 4px white;
      }
    </style>
  </head>

  <body>
    <h1>弹球</h1>
    <canvas></canvas>

    <script>
      const canvas = document.querySelector("canvas");
      const ctx = canvas.getContext("2d");

      const width = (canvas.width = window.innerWidth);
      const height = (canvas.height = window.innerHeight);

      function random(min, max) {
        const num = Math.floor(Math.random() * (max - min)) + min;
        return num;
      }

      function randomColor() {
        const color =
          "rgb(" +
          random(0, 255) +
          "," +
          random(0, 255) +
          "," +
          random(0, 255) +
          ")";
        return color;
      }

      function Ball(x, y, velX, velY, color, size) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
      }

      Ball.prototype.draw = function () {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
      };

      Ball.prototype.update = function () {
        if (this.x + this.size >= width) {
          this.velX = -this.velX;
        }

        if (this.x - this.size <= 0) {
          this.velX = -this.velX;
        }

        if (this.y + this.size >= height) {
          this.velY = -this.velY;
        }

        if (this.y - this.size <= 0) {
          this.velY = -this.velY;
        }

        this.x += this.velX;
        this.y += this.velY;
      };

      Ball.prototype.collisionDetect = function () {
        for (let j = 0; j < balls.length; j++) {
          if (this !== balls[j]) {
            const dx = this.x - balls[j].x;
            const dy = this.y - balls[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size) {
              balls[j].color = this.color = randomColor();
            }
          }
        }
      };

      let balls = [];

      while (balls.length < 25) {
        const size = random(10, 20);
        let ball = new Ball(
          random(0 + size, width - size),
          random(0 + size, height - size),
          random(-7, 7),
          random(-7, 7),
          randomColor(),
          size,
        );
        balls.push(ball);
      }

      function loop() {
        ctx.fillStyle = "rgba(0,0,0,0.25)";
        ctx.fillRect(0, 0, width, height);

        for (let i = 0; i < balls.length; i++) {
          balls[i].draw();
          balls[i].update();
          balls[i].collisionDetect();
        }

        requestAnimationFrame(loop);
      }

      loop();
    </script>
  </body>
</html>
```

{{ EmbedLiveSample('弹跳吧！小彩球！', '100%', 480) }}

这个实例将会利用 [Canvas API](/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics) 来在屏幕上画小球，还会用到 [requestAnimationFrame](/zh-CN/docs/Web/API/window/requestAnimationFrame) API 来使整个画面动起来 —— 我们并不要求你事先学习过这些 API 的相关知识，希望你完成这个练习之后会想去探索更多。这个过程中我们会用到一些漂亮的小东西并向你展示一些技巧，比如小球从墙上反弹，检查它们是否撞到了对方（也就是碰撞检测）。

## 让我们开始吧

首先下载 [bouncing-balls-start.zip](https://raw.githubusercontent.com/roy-tian/learning-area/master/javascript/oojs/bouncing-balls/bouncing-balls-start.zip)，其中包含以下三个文件：index.html、style.css 和 main.js。它们分别包含以下内容：

1. 一个非常简单的 HTML 文档，包括一个 `<h1>` 元素、一个{{HTMLElement("canvas")}} 元素来画小球，还有一些元素将 CSS 和 JavaScript 运用到我们的 HTML 中。
2. 一些非常简单的样式，主要是 `<h1>` 元素的样式和定位，另外还能使画面填充整个页面从而摆脱滚动条和边缘的空白（这样看起来非常简洁）
3. 一些 JavaScript 用来设置 `<canvas>` 元素，并提供我们要用到的基本函数。

脚本的第一部分是这样的：

```js
const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
```

这个脚本使用变量代指了 `<canvas>` 元素，然后对其调用 [`getContext()`](/zh-CN/docs/Web/API/HTMLCanvasElement/getContext) 从而我们获得一个开始画画的环境。存储以上操作结果的变量（`ctx`）是一个对象，直接代指画布上的一块允许我们绘制 2D 图形的区域。

接下来，我们设置 `width` 和 `height` 变量，并且让画布元素的宽和高（分别使用 `canvas.width` 和 `canvas.height` 表示）等于浏览器的宽和高（也就是网页显示的区域 — 可以从 {{domxref("Window.innerWidth")}} 和 {{domxref("Window.innerHeight")}}参数获得）。

你会看到我们在这里串联了多个赋值表达式在一起，这样能更快地设置变量——这是完全正确的。

原始脚本最后的部分如下：

```js
function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomColor() {
  return (
    "rgb(" +
    random(0, 255) +
    ", " +
    random(0, 255) +
    ", " +
    random(0, 255) +
    ")"
  );
}
```

第一个函数为我们生成一个 `min` 至 `max` 之间的随机整数，第二个函数为我们生成一个随机的颜色值。

## 为程序中的小球建立模型

我们的项目中会有很多小球在屏幕上跳来跳去。因此这些小球会以相同的方式运作，从而我们可以通过一个对象实例化它们。首先，我们将下面的构造器加入到代码的底部。

```js
function Ball(x, y, velX, velY, color, size) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
}
```

这个构造器中定义了每个小球需要的参数：

- `x` 和 `y` 坐标 —— 小球在屏幕上最开始时候的坐标。坐标的范围从 0（左上角）到浏览器视口的宽和高（右下角）。
- 水平和竖直速度（`velX` 和 `velY`）—— 我们会给每个小球一个水平和竖直速度。实际上，当我们让这些球开始运动时候，每过一帧都会给小球的 `x` 和 `y` 坐标加一次这些值。
- `color` —— 每一个小球会有自己的颜色。
- `size` —— 每一个小球会有自己的大小 — 也就是小球的半径，以像素为单位。

这里说明了小球的属性，那么方法呢？别忘了我们要让小球动起来。

### 画小球

首先给小球的原型加上 `draw()` 方法：

```js
Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};
```

通过使用这个函数，通过使用我们之前定义的 `ctx`对象 的方法，我们就可以让在屏幕上画出小球了。`ctx` 的内容区域就像是一张纸，现在我们就可以命令我们的笔画一点东西。

- 首先，我们使用 [`beginPath()`](/zh-CN/docs/Web/API/CanvasRenderingContext2D/beginPath) 来声明我们现在要开始在纸上画一个图形了。
- 然后，我们使用 [`fillStyle`](/zh-CN/docs/Web/API/CanvasRenderingContext2D/fillStyle) 来定义这个图形的颜色 — 这个值正是小球的颜色属性。
- 接下来，我们使用 [`arc()`](/zh-CN/docs/Web/API/CanvasRenderingContext2D/arc) 方法来在纸上画出一段圆弧。有这些参数：

  - `x` 和 `y` 是圆弧的中心的坐标 —— 也就是小球的中心坐标。
  - 圆弧的半径 —— 小球的半径。
  - 最后两个参数是开始和结束，也就是圆弧对应的夹角，单位以弧度表示。这里我们用的是 0 和 `2 * PI`，也就是 360 度（如果你设置成 0 和 `1 * PI`，则只会出现一个半圆，也就是 180 度）

- 最后，我们使用 [`fill()`](/zh-CN/docs/Web/API/CanvasRenderingContext2D/fill) 方法，也就是声明我们结束了以 `beginPath()` 开始的绘画，并且使用我们之前设置的颜色进行填充。

现在你已经可以测试你的对象了。

1. 保存代码，将 HTML 加载到浏览器中。
2. 打开浏览器中的 JavaScript 控制台，刷新页面，从而画布可以根据可视的区域调整自己的大小。
3. 通过下面的代码创建一个小球实例。

   ```js
   let testBall = new Ball(50, 100, 4, 4, "blue", 10);
   ```

4. 你可以调用实例的这些属性。

   ```js
   testBall.x;
   testBall.size;
   testBall.color;
   testBall.draw();
   ```

5. 当你键入最后一行的时候，你会在你的画布上看到一个小球被画出来了。

### 更新小球的数据

我们可以在一个固定位置画出小球，但是他们不会动，我们需要一个函数来更新一些东西。在 JavaScript 文件底部加上下面的代码，也就是给小球原型加上一个 update() 方法。

```js
Ball.prototype.update = function () {
  if (this.x + this.size >= width) {
    this.velX = -this.velX;
  }

  if (this.x - this.size <= 0) {
    this.velX = -this.velX;
  }

  if (this.y + this.size >= height) {
    this.velY = -this.velY;
  }

  if (this.y - this.size <= 0) {
    this.velY = -this.velY;
  }

  this.x += this.velX;
  this.y += this.velY;
};
```

函数的前四个部分用来检查小球是否碰到画布的边缘。如果碰到，我们反转小球的速度方向来让它向反方向移动。就比如说，如果小球正向上移动（正 `velY`），然后垂直速度发生改变，小球就向下移动（负 `velY`）。

在这四部分中，我们：

- 检查小球的 `x` 坐标是否大于画布的宽度（小球会从右边缘离开）。
- 检查小球的 `x` 坐标是否小于 0（小球会从左边缘离开）。
- 检查小球的 `y` 坐标是否大于画布的高度（小球会从下边缘离开）。
- 检查小球的 `y` 坐标是否小于 0（小球会从上边缘离开）。

在每种情况下，我们都会加上小球的半径，因为 `x`/`y` 坐标是小球中心的坐标，我们希望小球在其边界接触浏览器窗口的边界时反弹，而不是小球的一部分都不见了再返回。

最后两行，我们将 `velX` 的值加到 `x` 的坐标上，将 `velY` 的值加到 `y` 坐标上 —— 每次调用这个方法的时候小球就移动这么多。

暂时先这样做；让我们继续做一些动画！

## 让球动起来

现在就变得非常有趣了。我们在画布上加上一些小球，并且让他们动起来。

1. 首先我们需要一个地方储存小球，下面的数组会干这件事 —— 现在将它添加到你的代码底部：

   ```js
   let balls = [];

   while (balls.length < 25) {
     let size = random(10, 20);
     let ball = new Ball(
       // 为避免绘制错误，球至少离画布边缘球本身一倍宽度的距离
       random(0 + size, width - size),
       random(0 + size, height - size),
       random(-7, 7),
       random(-7, 7),
       randomColor(),
       size,
     );
     balls.push(ball);
   }
   ```

2. 几乎所有的动画效果都会用到一个运动循环，也就是每一帧都自动更新视图。这是大多数游戏或者其他类似项目的基础。
3. 现在将它添加到你的代码底部：

   ```js
   function loop() {
     ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
     ctx.fillRect(0, 0, width, height);

     for (let i = 0; i < balls.length; i++) {
       balls[i].draw();
       balls[i].update();
     }

     requestAnimationFrame(loop);
   }
   ```

   `loop()` 函数做了下面的事情：

   - 将整个画布的颜色设置成半透明的黑色。然后使用 `fillRect()`（这四个参数分别是起始的坐标、绘制的矩形的宽和高）画出一个填充满整个画布的矩形。这是在下一个视图画出来时用来遮住之前的视图的。如果不这样做得话，你就会在屏幕上看到一条蛇的形状而不是小球的运动了。用来填充的颜色设置成半透明的`rgba(0,0,0,0.25)`，也就是让之前的视图留下来一点点，从而你可以看到小球运动时的轨迹。如果你将 0.25 设置成 1 时，你就完全看不到了。试着改变其中的值查看造成的影响。
   - 当且仅当小球数量小于 25 时，将 `random()` 函数产生的数字传入新的小球实例从而创建一个新的小球，并且加入到数组中。因此当屏幕上有 25 个小球时，不会再出现更多小球。你可以改变这个值，从而看到不同小球个数造成的影响。如果你的电脑或者浏览器性能不怎么样的话，几千个小球的速度就会明显慢下来。
   - 遍历数组中的所有小球，并且让每个小球都调用 `draw()` 和 `update()` 函数来将自己画出来，并且再接下来的每一帧都按照其速度进行位置的更新。
   - 使用 `requestAnimationFrame()` 方法再运行一次函数 —— 当一个函数正在运行时传递相同的函数名，从而每隔一小段时间都会运行一次这个函数，这样我们可以得到一个平滑的动画效果。这主要是通过递归完成的 —— 也就是说函数每次运行的时候都会调用自己，从而可以一遍又一遍得运行。

4. 最后但是非常重要的是，加上下面这一行 —— 让动画开始运行的话我们需要调用这个函数。

   ```js
   loop();
   ```

完成这些基础的之后在浏览器打开测试一下！

## 添加碰撞检测

现在会更加有趣，给我们的项目加上碰撞检测，从而小球会知道他们正在撞击其他的球。

1. 首先在 `update()` 方法后添加以下方法（即 `Ball.prototype.update` 的下面）。

   ```js
   Ball.prototype.collisionDetect = function () {
     for (let j = 0; j < balls.length; j++) {
       if (this !== balls[j]) {
         const dx = this.x - balls[j].x;
         const dy = this.y - balls[j].y;
         const distance = Math.sqrt(dx * dx + dy * dy);

         if (distance < this.size + balls[j].size) {
           balls[j].color = this.color = randomColor();
         }
       }
     }
   };
   ```

   这个方法有一点点复杂，如果不理解的话不必过分担心，下面是对它的解释：

   - 对于每个小球，我们都要检查其他的小球是否和当前这个小球相撞了。为了达到此目的，我们构造另外一个 `for` 循环来遍历 `balls[]` 数组中的小球。
   - 在循环里面，我们使用一个 `if` 语句来检查遍历的小球是否是当前的小球。我们不希望检测到一个小球撞到了自己！为了达到这个目的，我们需要检查当前小球 (即正在调用 `collisionDetect` 方法的球) 是否和被循环到的小球 (`for` 循环检测中的当前遍历所引用的球) 是不是同一个。我们使用 `!` 来否定判断，因此只有两个小球**不是**同一个时，条件判断中的代码才会运行。
   - 我们使用了一个常见的算法来检测两个小球是否相撞了，两个小球中心的距离是否小于两个小球的半径之和。这些会在 [2D 碰撞检测](/zh-CN/docs/Games/Techniques/2D_collision_detection) 介绍地更加详细。
   - 如果检测到了碰撞，会运行 `if` 语句中的代码。我们会将两个小球的颜色都设置成随机的一种。我们也可以将这步操作变得复杂一点，比如让两个小球弹开，那样需要植入更加复杂的代码。像这样的物理场景，有以下专门的库比如 [PhysicsJS](http://wellcaffeinated.net/PhysicsJS/)，[matter.js](http://brm.io/matter-js/)，[Phaser](http://phaser.io/) 等。

2. 我们也需要在每一帧动画中都调用这个函数，因此在 `balls[i].update()` 加上下面的代码：

   ```js
   balls[i].collisionDetect();
   ```

3. 保存文件，刷新浏览器，你就会看到小球在撞击时会变色！

> **备注：** 如果示例无法顺利执行，可参考我们的 [最终版本](https://github.com/roy-tian/learning-area/tree/master/javascript/oojs/bouncing-balls)，或者 [在线试用](https://roy-tian.github.io/learning-area/javascript/oojs/bouncing-balls/)。

## 概要

我们希望你玩得开心，编写出你自己的随机弹跳球的例子，在整个程序中使用各种对象和面向对象的技术！在你实际运用对象中能提供一些有用的帮助。

对象文章就到这里了。现在剩下的就是在下一节的对象评估中测试你的技能。

## 参见

- [Canvas tutorial](/zh-CN/docs/Web/API/Canvas_API/Tutorial) —— 2D canvas 初学者指南。
- [requestAnimationFrame()](/zh-CN/docs/Web/API/window/requestAnimationFrame)
- [2D 碰撞检测](/zh-CN/docs/Games/Techniques/2D_collision_detection)
- [3D 碰撞检测](/zh-CN/docs/Games/Techniques/3D_collision_detection)
- [纯 JavaScript 编写的 2D 消除游戏](/zh-CN/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) —— 一个很好的 2D 游戏开发初学者教程。
- [Phaser 编写的 2D 消除游戏](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser) —— JavaScript 游戏库构建 2D 游戏的基础知识。

{{PreviousMenuNext("Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects/Adding_bouncing_balls_features", "Learn/JavaScript/Objects")}}
