---
title: Player paddle and controls
slug: Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Bounce_off_the_walls", "Games/Workflows/2D_Breakout_game_Phaser/Game_over")}}

这是[Gamedev Phaser 教程](/zh-CN/docs/Games/Workflows/2D_Breakout_game_Phaser) 16 的**第 7 步**。您可以在[Gamedev-Phaser-Content-Kit / demos / lesson07.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson07.html)完成本课程后找到源代码。

我们有球从墙上移动并弹跳，但它很快变得无聊 - 没有互动！我们需要一种介绍游戏的方法，所以在这篇文章中，我们将创建一个桨来移动并击中球。

## 渲染桨

从框架的角度看，桨非常类似于球 - 我们需要添加一个变量来表示它，加载相关的图像资源，然后做出魔法。

### 装载桨

首先，添加`paddle`我们将在我们的游戏中使用的`ball`变量，就在变量之后：

```js
var paddle;
```

然后，在该`preload`功能中，`paddle`通过添加以下新`load.image()`调用来加载图像：

```js
function preload() {
  // ...
  game.load.image("ball", "img/ball.png");
  game.load.image("paddle", "img/paddle.png");
}
```

### 添加桨图形

所以我们不要忘记，在这一点上，你应该从 Github 抓住这个[图形](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/img/paddle.png)，并保存在你的`/img`文件夹中。

### 渲染桨用物理引擎

接下来，我们将通过`add.sprite()`在`create()`函数中添加以下调用来初始化我们的桨，将其添加到底部：

```js
paddle = game.add.sprite(
  game.world.width * 0.5,
  game.world.height - 5,
  "paddle",
);
```

我们可以使用`world.width`和`world.height`值来将桨定位到我们想要的位置：`game.world.width*0.5`将在屏幕中间。在我们这个例子中，世界和画布是一样的，但是对于其他类型的游戏，例如侧滚滚，这个世界会变大，你可以修改它来创造有趣的效果。

你会注意到，如果你`index.html`在这一点上重新加载，那么桨是目前不完全在中间的。为什么？因为计算位置的锚总是从对象的左上角开始。我们可以改变它，使锚在桨的宽度的中间和它的高度的底部，所以更容易将其定位在底部边缘。添加以下新行以下的行：

```js
paddle.anchor.set(0.5, 1);
```

桨现在位于我们想要的地方。现在，为了使它与球碰撞，我们必须为桨提供物理效果。继续添加以下新行，再次在`create()`函数的底部：

```js
game.physics.enable(paddle, Phaser.Physics.ARCADE);
```

现在，魔法可以开始发生 - 该框架可以在每个框架上检查碰撞检测。要启用桨和球之间的碰撞检测，请将`collide()`方法添加到如下`update()`功能中：

```js
function update() {
  game.physics.arcade.collide(ball, paddle);
}
```

第一个参数是我们感兴趣的对象之一 - 球 - 第二个是另一个，桨。这有效，但不如我们预期的那样 - 当球击中桨时，桨从屏幕上掉下来！我们想要的就是球从跳板上跳起来，而桨子停在同一个地方。我们可以将`body`桨设置成`immovable`球，所以当球击中它时不会移动。为此，请在`create()`函数底部添加以下行：

```js
paddle.body.immovable = true;
```

现在它按预期工作。

## 控制桨

接下来的问题是我们不能移动桨。要做到这一点，我们可以使用系统的默认输入（鼠标或触摸，取决于平台），并将桨位置设置到位置的`input`位置。将以下新行添加到`update()`函数中，如下所示：

```js
function update() {
  game.physics.arcade.collide(ball, paddle);
  paddle.x = game.input.x;
}
```

现在在每个新的一帧上，桨的`x`位置将根据输入的`x`位置进行调整，但是当我们开始游戏时，桨的位置不在中间。这是因为输入位置尚未定义。要修复，我们可以将默认位置（如果输入位置尚未定义）设置为屏幕中间。更新上一行如下：

```js
paddle.x = game.input.x || game.world.width * 0.5;
```

如果您还没有这样做，请重新加载`index.html`并尝试！

## 定位球

我们有桨按预期工作，所以我们把球放在上面。它非常类似于定位桨 - 我们需要将其放置在屏幕中间水平和垂直的底部，与底部有一点偏移。要按照我们想要的方式放置它，我们将把锚定位到球的正中间。找到现有的行，并将其替换为以下两行：`ball = game.add.sprite( ... )`

```js
ball = game.add.sprite(game.world.width * 0.5, game.world.height - 25, "ball");
ball.anchor.set(0.5);
```

速度保持不变 - 我们只是将第二个参数的值从 150 改为 -150，所以球将通过向上移动而不是下降来开始游戏。查找现有`ball.body.velocity.set( ... )`行并将其更新为以下内容：

```js
ball.body.velocity.set(150, -150);
```

现在球将从桨的中间开始。

## 比较你的代码

您可以在下面的现场演示中查看本课程的完成代码，并使用它来更好地了解它的工作原理：

{{JSFiddleEmbed("https://jsfiddle.net/end3r/ogqza0ye/","","400")}}

## 下一步

我们可以移动桨，并将球反弹，但是如果球从屏幕的底部边缘反弹，那又有什么意义？我们来介绍丢失的可能性 - 也称为[游戏](/zh-CN/docs/Games/Workflows/2D_Breakout_game_Phaser/Game_over)逻辑。

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Bounce_off_the_walls", "Games/Workflows/2D_Breakout_game_Phaser/Game_over")}}
