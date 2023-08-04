---
title: 为“弹球”示例添加新功能
slug: Learn/JavaScript/Objects/Adding_bouncing_balls_features
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Object_building_practice", "", "Learn/JavaScript/Objects")}}

在此次测验中，你需要将上一节中的“弹球”演示程序作为模板，添加一些新的有趣的功能。

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">预备知识：</th>
      <td>请确保完整学习本章所有内容后再开始测验。</td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>测试你对 JavaScript 对象和面向对象结构的理解。</td>
    </tr>
  </tbody>
</table>

## 开始

请先下载 [index.html](https://github.com/roy-tian/learning-area/blob/master/javascript/oojs/bouncing-balls/index.html)、[style.css](https://github.com/roy-tian/learning-area/blob/master/javascript/oojs/bouncing-balls/style.css) 和 [main.js](https://github.com/roy-tian/learning-area/blob/master/javascript/oojs/bouncing-balls/main.js) 三个文件。

> **备注：** 也可以使用 [JSBin](http://jsbin.com/) 或 [Glitch](https://glitch.com/) 这样的网站来进行测验。你可以选择其中一个将 HTML，CSS 和 JavaScript 粘贴过去。如果你的版本没有单独的 JavaScript / CSS 板块，可以把它们嵌入 HTML 页面内的 `<script>`/`<style>` 元素。

## 项目简介

我们的弹球 demo 很有趣，但是现在我们想让它更具有互动性，我们为它添加一个由玩家控制的“恶魔圈”，如果恶魔圈抓到弹球会把它会吃掉。我们还想测验你面向对象的水平，首先创建一个通用 `Shape()` 对象，然后由它派生出弹球和恶魔圈。最后，我们为 demo 添加一个计分器来记录剩下的球数。

程序最终会像这样：

```html hidden
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>弹球</title>
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

      p {
        position: absolute;
        margin: 0;
        top: 35px;
        right: 5px;
        color: #aaa;
      }
    </style>
  </head>

  <body>
    <h1>弹球</h1>
    <p></p>
    <canvas></canvas>

    <script>
      const BALLS_COUNT = 25;
      const BALL_SIZE_MIN = 10;
      const BALL_SIZE_MAX = 20;
      const BALL_SPEED_MAX = 7;

      class Shape {
        constructor(x, y, velX, velY, exists) {
          this.x = x;
          this.y = y;
          this.velX = velX;
          this.velY = velY;
          this.exists = exists;
        }
      }

      class Ball extends Shape {
        constructor(x, y, velX, velY, color, size, exists) {
          super(x, y, velX, velY, exists);

          this.color = color;
          this.size = size;
        }

        draw() {
          ctx.beginPath();
          ctx.fillStyle = this.color;
          ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
          ctx.fill();
        }

        update() {
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
        }

        collisionDetect() {
          for (let j = 0; j < balls.length; j++) {
            if (!(this === balls[j])) {
              const dx = this.x - balls[j].x;
              const dy = this.y - balls[j].y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < this.size + balls[j].size && balls[j].exists) {
                balls[j].color = this.color = randomColor();
              }
            }
          }
        }
      }

      class EvilCircle extends Shape {
        constructor(x, y, exists) {
          super(x, y, exists);

          this.velX = BALL_SPEED_MAX;
          this.velY = BALL_SPEED_MAX;
          this.color = "white";
          this.size = 10;
          this.setControls();
        }

        draw() {
          ctx.beginPath();
          ctx.strokeStyle = this.color;
          ctx.lineWidth = 3;
          ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
          ctx.stroke();
        }

        checkBounds() {
          if (this.x + this.size >= width) {
            this.x -= this.size;
          }

          if (this.x - this.size <= 0) {
            this.x += this.size;
          }

          if (this.y + this.size >= height) {
            this.y -= this.size;
          }

          if (this.y - this.size <= 0) {
            this.y += this.size;
          }
        }

        setControls() {
          window.onkeydown = (e) => {
            switch (e.key) {
              case "a":
              case "A":
              case "ArrowLeft":
                this.x -= this.velX;
                break;
              case "d":
              case "D":
              case "ArrowRight":
                this.x += this.velX;
                break;
              case "w":
              case "W":
              case "ArrowUp":
                this.y -= this.velY;
                break;
              case "s":
              case "S":
              case "ArrowDown":
                this.y += this.velY;
                break;
            }
          };
        }

        collisionDetect() {
          for (let j = 0; j < balls.length; j++) {
            if (balls[j].exists) {
              const dx = this.x - balls[j].x;
              const dy = this.y - balls[j].y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < this.size + balls[j].size) {
                balls[j].exists = false;
                count--;
                para.textContent = "还剩 " + count + " 个球";
              }
            }
          }
        }
      }

      const para = document.querySelector("p");
      const canvas = document.querySelector("canvas");
      const ctx = canvas.getContext("2d");

      const width = (canvas.width = window.innerWidth);
      const height = (canvas.height = window.innerHeight);

      const balls = [];
      let count = 0;

      const evilBall = new EvilCircle(
        random(0, width),
        random(0, height),
        true,
      );

      loop();

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

      function loop() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
        ctx.fillRect(0, 0, width, height);

        while (balls.length < BALLS_COUNT) {
          const size = random(BALL_SIZE_MIN, BALL_SIZE_MAX);
          const ball = new Ball(
            random(0 + size, width - size),
            random(0 + size, height - size),
            random(-BALL_SPEED_MAX, BALL_SPEED_MAX),
            random(-BALL_SPEED_MAX, BALL_SPEED_MAX),
            randomColor(),
            size,
            true,
          );
          balls.push(ball);
          count++;
          para.textContent = "还剩 " + count + " 个球";
        }

        for (let i = 0; i < balls.length; i++) {
          if (balls[i].exists) {
            balls[i].draw();
            balls[i].update();
            balls[i].collisionDetect();
          }
        }

        evilBall.draw();
        evilBall.checkBounds();
        evilBall.collisionDetect();

        requestAnimationFrame(loop);
      }
    </script>
  </body>
</html>
```

{{ EmbedLiveSample('项目简介', '100%', 480) }}

可以 [查看完成版本](https://roy-tian.github.io/learning-area/javascript/oojs/assessment/) 来获得更全面的体验。（别偷看源代码哦。）

## 步骤

以下各节介绍你需要完成的步骤。

### 创建我们的新对象

首先，改变你现有的构造器 `Ball()` 使其成为构造器 `Shape()` 并添加一个新的构造器 `Ball()` ：

1. 构造器 `Shape()` 应该像构造器 `Ball()` 那样的方式定义 `x`, `y`, `velX`, 和 `velY` 属性，但不包括 `color` 和 `size` 。
2. 还应该定义一个叫 `exists` 的新属性，用来标记球是否存在于程序中（没有被恶魔圈吃掉）。这应该是一个布尔型（(`true`/`false`）。
3. 构造器 `Ball()` 应该从构造器 `Shape()` 继承 `x`, `y`, `velX`, `velY`,和 `exists` 属性。
4. 构造器 `Ball()` 还应该像最初的构造器 `Ball()` 那样定义一个 `color` 和一个`size` 属性。
5. 请记得给构造器 `Ball()` 的`prototype` 和 `constructor` 属性设置适当的值。

`draw()`, `update()`, 和`collisionDetect()` 方法定义应保持不变。

你还需要为 `new Ball() { ... }` 构造器添加第五个参数—— `exists`，且值为 `true`。

到这里，尝试重新加载代码（运行程序），程序以及重新设计的对象都应该像之前那样工作。

### 定义恶魔圈 EvilCircle()

现在是时候来看看那个坏蛋了——恶魔圈 `EvilCircle()`! 我们的游戏中只会有一个恶魔圈，但我们仍然要使用继承自 `Shape()` 的构造器来定义它，这是为让你得到锻炼。之后你可能会想再添加一个由另一个玩家控制的恶魔圈到程序中，或者有几个电脑控制的恶魔圈。你可没法通过一个恶魔圈来掌管程序中的这个世界，但这个评估中就先只这么做吧。

`EvilCircle()` 构造器应该从`Shape()` 继承 `x`, `y`, 和 `exists` ，`velX` 和 `velY` 要恒为 20。

可以这样做：`Shape.call(this, x, y, 20, 20, exists);`

它还应该定义自己的一些属性，如：

- `color` —— `'white'`
- `size` —— `10`

再次记得给你的 `EvilCircle()` 构造器的传递的参数中定义你继承的属性，并且给`prototype` 和 `constructor` 属性设置适当的值。

### 定义 EvilCircle() 的方法

`EvilCircle()` 应该有以下四个方法：

#### `draw()`

这个方法和 `Ball()`'s `draw()` 方法有着相同的目的：它们把都是对象的实例画在画布上（canvas） 。它们实现的方式差不多，所以你可以先复制 `Ball.prototype.draw` 的定义。然后你需要做下面的修改：

- 我们不想让恶魔圈是实心的，而是一个圈或者说是环。你可以通过将 [`fillStyle`](/zh-CN/docs/Web/API/CanvasRenderingContext2D/fillStyle) 和 [`fill()`](/zh-CN/docs/Web/API/CanvasRenderingContext2D/fill) 修改为 [`strokeStyle`](/zh-CN/docs/Web/API/CanvasRenderingContext2D/strokeStyle) 和 [`stroke()`](/zh-CN/docs/Web/API/CanvasRenderingContext2D/stroke)而实现这个效果。
- 我们还想让这个圈更厚一点，从而使你能更好地辨认它。可以在调用 [`beginPath()`](/zh-CN/docs/Web/API/CanvasRenderingContext2D/beginPath) 的后面给 [`lineWidth`](/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineWidth) 赋值实现这个效果。（赋值为 3 就可以了）

#### `checkBounds()`

这个方法和 `Ball()` 的 `update()` 函数做相同的事情—— 查看恶魔圈是否将要超出屏幕的边界，并且禁止它超出。同样，你可以直接复制 `Ball.prototype.update` 的定义，但是你需要做一些修改：

- 删除最后两行 — 我们不想要在每一帧中自动的更新恶魔圈的位置，因为我们会以下面所述的方式移动它。
- 在 `if()` 语句中，如果检测为真（即小恶魔圈超出边界），我们不需要更新 `velX`/`velY`；取而代之的是，我们想要修改 `x`/`y` 的值，使恶魔圈稍微地弹回屏幕。增加或减去（根据实际判断）恶魔圈 `size` 的值即可实现。

#### `setControls()`

这个方法将会一个 `onkeydown` 的事件监听器给 `window` 对象，这样当特定的键盘按键按下的时候，我们就可以移动恶魔圈。下面的代码块应该放在方法的定义里：

```js
window.onkeydown = (e) => {
  switch (e.key) {
    case "a":
      this.x -= this.velX;
      break;
    case "d":
      this.x += this.velX;
      break;
    case "w":
      this.y -= this.velY;
      break;
    case "s":
      this.y += this.velY;
      break;
  }
};
```

所以当一个按键按下时，事件对象的 [key](/zh-CN/docs/Web/API/KeyboardEvent/key) 属性 就可以请求到按下的按键值。如果是代码中那四个指定的键值之一，那么恶魔圈将会左右上下的移动。

> **警告：** 英文页面中使用了事件对象的 [keyCode](/zh-CN/docs/Web/API/KeyboardEvent/keyCode) 属性，不推荐在新代码中使用该属性，应使用标准 [key](/zh-CN/docs/Web/API/KeyboardEvent/key) 属性代替。（详见介绍页面）

> **备注：** 这里的 `window.onkeydown` 用一个 [箭头函数](/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions) 代替了英文页面中的匿名函数，从而无需 `var _this = this`。

#### `collisionDetect()`

这个方法和 `Ball()`'s `collisionDetect()` 方法很相似，所以你可以从它那里复制过来作为新方法的基础。但有一些不同之处：

- 在外层的 `if` 语句中，你不需要再检验循环到的小球是否是当前 `collisionDetect()` 所在的对象 — 因为它不再是一个小球了，它是恶魔圈！而是检查小球是否存在（你可以通过哪个属性实现这个呢？）。如果小球不存在，说明它已经被恶魔圈吃掉了，那么就不需要再检测它是否与恶魔圈碰撞了。
- 在里层的 `if` 语句中，你不再需要在碰撞被检测到时去改变对象的颜色 — 而是需要将与恶魔圈发生碰撞的小球设置为不存在（再次提问，你觉得你该怎么实现呢？）。

### 把恶魔圈带到程序中

现在我们已经定义了恶魔圈，我们需要让它显示到我们的屏幕中。为了做这件事，你需要修改一下 `loop()` 函数：

- 首先，创建一个新的恶魔圈的对象实例（指定必需的参数），然后调用它的 `setControls()` 方法。这两件事你只需要做一次，不需要放在 loop 的循环中。
- 在你每一次遍历小球并调用 `draw()`, `update()`, 和 `collisionDetect()` 函数的地方进行修改，使这些函数只会在小球存在时被调用。
- 在每个 loop 的循环中调用恶魔圈实例的方法 `draw()`, `checkBounds()`, 和`collisionDetect()` 。

### 计算得分

为了计算得分，需按照以下步骤：

1. 在你的 HTML 文件中添加一个{{HTMLElement("p")}} 元素到 {{HTMLElement("h1")}} 元素的下面，其中包含文本 "还剩多少个球"。
2. 在你的 CSS 文件中，添加下面的代码到底部：

   ```css
   p {
     position: absolute;
     margin: 0;
     top: 35px;
     right: 5px;
     color: #aaa;
   }
   ```

3. 在你的 JavaScript 文件中，做下列的修改：

   - 创建一个变量存储段落的引用。
   - 以同样的方式在屏幕上显示小球的数量。
   - 增加球数并在每次将球添加到屏幕里时显示更新的球数量。
   - 减少球数并在每次恶魔吃球时显示更新的球数（因为被吃掉的球不存在了）

## 提示

- 这个评估非常具有挑战性。请仔细按照步骤慢慢来。
- 每完成一个阶段时，你可以保留程序的副本，这是一种有用的方式。这样当你发现你程序出了问题，你可以参考之前的代码。

## 评定

如果你将此评估作为有组织的课程的一部分，你可以将你的成果交给您的老师/导师进行评分。如果你是自学的，通过在 [Learning Area Discourse thread](https://discourse.mozilla-community.org/t/learning-web-development-marking-guides-and-questions/16294)，或者在 [Mozilla IRC](https://wiki.mozilla.org/IRC) 的 [#mdn](irc://irc.mozilla.org/mdn) IRC 频道上申请，你可以十分容易地得到评分指南。首先先尝试这个练习，作弊不会有任何收获。

{{PreviousMenuNext("Learn/JavaScript/Objects/Object_building_practice", "", "Learn/JavaScript/Objects")}}
