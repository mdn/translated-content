---
title: Buttons
slug: Games/Tutorials/2D_breakout_game_Phaser/Buttons
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens", "Games/Workflows/2D_Breakout_game_Phaser/Randomizing_gameplay")}}

这是[Gamedev Phaser 教程](/zh-CN/docs/Games/Workflows/2D_Breakout_game_Phaser) 16 的**第 15 步**。您可以在[Gamedev-Phaser-Content-Kit / demos / lesson15.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson15.html)完成本课程后找到源代码

而不是立即开始游戏，我们可以通过添加他们可以按的开始按钮将该决定留给玩家。我们来调查如何做到这一点。

## 新变量

我们需要一个变量来存储表示游戏当前是否正在播放的布尔值，另一个代表我们的按钮。将以下行添加到其他变量定义之下：

```js
var playing = false;
var startButton;
```

## 加载按钮 spritesheet

我们可以加载按钮 spritesheet 与我们加载球的摆动动画相同的方式。将以下内容添加到`preload()`函数底部：

```js
game.load.spritesheet("button", "img/button.png", 120, 40);
```

单个按钮框架宽 120 像素，高 40 像素。

您还需要[从 Github 抓取按钮 spritesheet](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/img/button.png)，并将其保存在您的`/img`目录中。

## 将按钮添加到游戏中

使用该`add.button`方法可以将新的按钮添加到游戏中。将以下行添加到`create()`函数的底部：

```js
startButton = game.add.button(
  game.world.width * 0.5,
  game.world.height * 0.5,
  "button",
  startGame,
  this,
  1,
  0,
  2,
);
startButton.anchor.set(0.5);
```

该`button()`方法的参数如下：

- 按钮的 x 和 y 坐标
- 要显示按钮的图形资产的名称
- 按下按钮时将执行的回调函数
- `this`指定执行上下文的引用
- 将用于*过度*，*超出*和*向下*事件的框架。

> **备注：** 超越事件与悬停相同，当指针从按钮中移出时，当按下按钮时，向下移动。

现在我们需要定义`startGame()`上面代码中引用的函数：

```js
function startGame() {
  startButton.destroy();
  ball.body.velocity.set(150, -150);
  playing = true;
}
```

当按下按钮时，我们删除按钮，设置球的初始速度并将`playing`变量设置为`true`。

最后对于这一部分，回到你的`create()`函数，找到`ball.body.velocity.set(150, -150);`一行，并删除它。你只需要按下按钮时移动球，而不是之前！

## 在游戏开始之前仍然保持桨

它按预期工作，但是当游戏尚未开始时，我们仍然可以移动桨，这看起来有点愚蠢。为了阻止这一点，我们可以利用`playing`变量，使得桨只有在游戏开始时才能移动。要做到这一点，调整`update()`功能如下所示：

```js
function update() {
  game.physics.arcade.collide(ball, paddle, ballHitPaddle);
  game.physics.arcade.collide(ball, bricks, ballHitBrick);
  if (playing) {
    paddle.x = game.input.x || game.world.width * 0.5;
  }
}
```

这样一来，在所有的装载和准备之后，但在实际游戏开始之前，桨是不可移动的。

## 比较你的代码

您可以在下面的现场演示中查看本课程的完成代码，并使用它来更好地了解它的工作原理：

{{JSFiddleEmbed("https://jsfiddle.net/end3r/1rpj71k4/","","400")}}

## 下一步

在本系列文章中我们将做的最后一件事情是，通过添加一些[随机化](/zh-CN/docs/Games/Workflows/2D_Breakout_game_Phaser/Randomizing_gameplay)的方式，球从球上弹起来，使游戏更有趣。

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens", "Games/Workflows/2D_Breakout_game_Phaser/Randomizing_gameplay")}}
