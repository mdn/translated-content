---
title: Physics
slug: Games/Tutorials/2D_breakout_game_Phaser/Physics
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Move_the_ball", "Games/Workflows/2D_Breakout_game_Phaser/Bounce_off_the_walls")}}

这是[Gamedev Phaser 教程](/zh-CN/docs/Games/Workflows/2D_Breakout_game_Phaser) 16 的**第 5 步**。您可以在[Gamedev-Phaser-Content-Kit / demos / lesson05.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson05.html)完成本课程后找到源代码

为了在我们的游戏中的对象之间进行正确的碰撞检测，我们将需要物理学; 本文将向您介绍 Phaser 中的可用内容，以及演示典型的简单设置。

## 添加物理效果

Phaser 与三个不同的物理引擎（Arcade Physics，P2 和 Ninja Physics）捆绑在一起，第四个选项 Box2D 可作为商业插件使用。对于像我们这样的简单游戏，我们可以使用 Arcade Physics 引擎。我们不需要任何重的几何计算 - 毕竟只是一个球从墙壁和砖块弹起来。

首先，让我们在游戏中初始化 Arcade Physics 引擎。`physics.startSystem()`在`create`函数开头添加方法（使其成为函数内的第一行），如下所示：

```js
game.physics.startSystem(Phaser.Physics.ARCADE);
```

接下来，我们需要为物理系统启用我们的球 - 默认情况下，Phaser 对象物理不启用。在`create()`函数底部添加以下行：

```js
game.physics.enable(ball, Phaser.Physics.ARCADE);
```

接下来，如果我们要在屏幕上移动我们的球，我们可以设置`velocity`它`body`。再次添加以下行`create()`：

```js
ball.body.velocity.set(150, 150);
```

## 删除我们以前的更新说明

记得删除添加值的我们的老方法`x`，并`y`从`update()`功能：

```js
function update() {
  ball.x += 1;
  ball.y += 1;
}
```

我们正在使用物理引擎正确处理。

## 最终代码检查

最新的代码应该如下所示：

```js
var ball;

function preload() {
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
  game.stage.backgroundColor = "#eee";
  game.load.image("ball", "img/ball.png");
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  ball = game.add.sprite(50, 50, "ball");
  game.physics.enable(ball, Phaser.Physics.ARCADE);
  ball.body.velocity.set(150, 150);
}

function update() {}
```

尝试重新加载`index.html`- 球应该在给定的方向上不断移动。目前，物理引擎的重力和摩擦力设定为零。增加重力将导致球落下，同时摩擦力最终会停止球。

## 物理效果趣味

你可以用物理学来做更多的事情，例如添加`ball.body.gravity.y = 100;`你将设置球的垂直重力。因此，它将向上发射，但是由于重力的作用而下降。

这种功能只是冰山一角 - 有各种功能和变量可以帮助您操纵物理对象。查看官方[物理文档，](http://phaser.io/docs#physics)并使用[Arcade](http://phaser.io/examples/v2/category/arcade-physics)和[P2](http://phaser.io/examples/v2/category/p2-physics)物理系统查看大量示例。

## 比较你的代码

您可以在下面的现场演示中查看本课程的完成代码，并使用它来更好地了解它的工作原理：

{{JSFiddleEmbed("https://jsfiddle.net/end3r/bjto9nj8/","","400")}}

## 下一步

现在我们可以转到下一课，看看如何让球[从墙上弹起](/zh-CN/docs/Games/Workflows/2D_Breakout_game_Phaser/Bounce_off_the_walls)。

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Move_the_ball", "Games/Workflows/2D_Breakout_game_Phaser/Bounce_off_the_walls")}}
