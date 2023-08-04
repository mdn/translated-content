---
title: 球板及键盘控制
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over")}}

这是[Gamedev Canvas tutorial](/zh-CN/docs/Games/Workflows/Breakout_game_from_scratch)中的第四章。完成本课程后，你可以在[Gamedev-Canvas-workshop/lesson4.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson04.html)找到源码。

你可以看到球自由的、无限次的在墙壁上反弹，但是没有和我们发生任何交互。如果我们没有对它的控制操作，这仍然不是一个游戏。下面，我们新增一些用户操作：一个可以控制球的球板。

## 定义一个球板去接球

我们需要添加一个球板去接球：为此需要先定义一些变量。在你的代码的顶部的其他变量下方添加下列代码：

```js
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;
```

然后定义球拍的长和宽，以及为了之后的处理同时定义 x 轴上的初始位置。新建一个方法来在页面上描绘球板。把下列代码添加到你的 `drawBall()` 方法里去：

```js
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
```

## 允许用户控制球板

我们可以如愿的描绘出球板，也需让它听从用户的控制。是时候实现用键盘控制它了。我们需要：

- 两个变量以保存左右方向键是否被按下的信息。
- 两个事件监控器来捕捉按键的按下和松开动作。我们需要运行一些代码以在按键被按下时可以控制球拍的移动
- 两个用于处理按键被按下或松开后的事件处理方法
- 实现左右移动球拍

按键可以使用 boolean 变量来初始定义。在你的其他变量附近添加下列代码：

```js
var rightPressed = false;
var leftPressed = false;
```

这两个变量的默认值都是 false，因为在开始时按键没有被按下。为了监听按键的按下动作，我们需要添加两个监听器。把下列代码添加到底部的 `setInterval()` 的上一列去：

```js
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
```

当你按下任何键盘上的按键，按下事件被激活时 `keyDownHandler()` 方法会被调用。对于松开时的处理也是类似的：当松开按键时 keyUpHandler() 方法会被调用。把下列代码添加到 addEventListener() 下方：

```js
function keyDownHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = true;
  } else if (e.keyCode == 37) {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = false;
  } else if (e.keyCode == 37) {
    leftPressed = false;
  }
}
```

当按下一个按键，这个信息会被储存在一个变量中。每种情况下的相关变量都设置为`true`。当松开按键时，对应变量被设置回`false`。

两个函数都以一个事件作为参数，由`e`(event) 变量表示。从这里你可以得到有用的信息：keyCode 属性是被按下的键的信息。例如，keyCode 为 37 是左箭头键，而 39 是右箭头键。如果按下左键，那么 leftPressed 变量设置为 true，当松开时，leftPressed 变量设置为 false。右键同理。

### 球拍移动逻辑

我们现在有用于存储按键，事件监听器和相关功能的信息的变量。现在我们将看到实际的代码来使用这些变量，并在屏幕上移动球拍。在 draw（）函数内部，我们将检查每一帧被渲染的同时是否按下左或右键。我们的代码如下：

```js
if (rightPressed) {
  paddleX += 7;
} else if (leftPressed) {
  paddleX -= 7;
}
```

如果按一下左键，球拍将向左移动 7 个像素，如果按一下右键，球拍将向右移动 7 个像素。目前这个功能可以正常工作，但是如果我们按任意一个键的时间太长，球拍就会从画布的边缘消失。我们可以通过改变代码来改善这种情况，并且只能在画布的边界内移动球拍，如下所示：

```js
if (rightPressed && paddleX < canvas.width - paddleWidth) {
  paddleX += 7;
} else if (leftPressed && paddleX > 0) {
  paddleX -= 7;
}
```

我们使用在`Canvas`左侧的 0 和右侧的`canvas.width-paddleWidth`之间的`paddleX`位置移动，这会让球拍按预期的要求移动。

将上面的代码块添加到底部的`draw()`函数中，在右大括号的上方。

现在唯一要做的就是在`draw()`函数内调用`drawPaddle()`函数，将其实际渲染在屏幕上。在`draw()`函数内添加下面一行，就在调用`drawBall()`的那一行的下面：

```js
drawPaddle();
```

## 比较你的代码

以下是我们的示例代码，以便与您进行比较：

{{JSFiddleEmbed("https://jsfiddle.net/end3r/tgn3zscj/","","320")}}

> **备注：** 让球拍变快变慢，或者改变它的大小。

## 下一步

现在我们有一些类似于游戏的东西。唯一的麻烦就是无论如何你都可以继续用球拍击球。这一切都将在第五章中改变，[游戏结束](/zh-CN/docs/Games/Workflows/Breakout_game_from_scratch/Game_over)时，我们会为游戏添加一个最后的状态。

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over")}}
