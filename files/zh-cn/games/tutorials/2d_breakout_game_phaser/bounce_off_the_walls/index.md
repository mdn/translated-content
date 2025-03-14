---
title: Bounce off the walls
slug: Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Physics", "Games/Workflows/2D_Breakout_game_Phaser/Player_paddle_and_controls")}}

这是[Gamedev Phaser 教程](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser)的**第 6 步**。在[Gamedev-Phaser-Content-Kit / demos / lesson06.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson06.html)完成本课后，你可以找到源代码。

现在已经介绍了物理引擎，我们可以开始在游戏中实现碰撞检测 - 首先我们来看看墙壁。

## 反弹边界

让我们的球从墙壁上弹起的最简单的方法是告诉框架，我们想要将 [`<canvas>`](/zh-CN/docs/Web/HTML/Element/canvas) 元素的边界视为墙壁，而不是让球移过它们。在 Phaser 中，可以使用该 `collideWorldsBound` 属性轻松实现。在现有 `game.physics.enable()` 方法调用之后添加此行：

```js
ball.body.collideWorldBounds = true;
```

现在球将停在屏幕的边缘，而不是消失，但它不会弹起。为了使这种情况发生，我们必须设置它的 bounciness。在上一行下面添加以下行：

```js
ball.body.bounce.set(1);
```

再次尝试重新加载 index.html - 现在你应该看到球从墙壁上弹起并在画布区域内移动。

## 比较你的代码

你可以在下面的现场演示中查看本课程的完成代码，并使用它来更好地了解它的工作原理：

{{JSFiddleEmbed("https://jsfiddle.net/end3r/dcw36opz/","","400")}}

## 下一步

现在开始看起来更像是一个游戏，但是我们无法以任何方式控制它 - 现在是介绍[玩家挡板和控制的时候了](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls)。

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Physics", "Games/Workflows/2D_Breakout_game_Phaser/Player_paddle_and_controls")}}
