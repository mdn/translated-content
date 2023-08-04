---
title: Animations and tweens
slug: Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Extra_lives", "Games/Workflows/2D_Breakout_game_Phaser/Buttons")}}

这是[Gamedev Phaser 教程](/zh-CN/docs/Games/Workflows/2D_Breakout_game_Phaser) 16 的**第 14 步**。您可以在[Gamedev-Phaser-Content-Kit / demos / lesson14.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson14.html)完成本课程后找到源代码。

为了使游戏看起来更加多汁和活泼，我们可以使用动画和补间。这将导致更好，更有趣的体验。让我们来探讨如何在游戏中实现 Phaser 动画和补间。

## 动画

在 Phaser，动画中，涉及从外部来源获取 spritesheet 并依次显示 sprites。作为一个例子，当碰到一些东西时，我们会让球摇摆。

首先，[从 Github 抓取 spritesheet](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/img/wobble.png)并将其保存在您的`/img`目录中。

接下来，我们将加载 spritesheet - 将以下行放在`preload()`函数的底部：

```js
game.load.spritesheet("ball", "img/wobble.png", 20, 20);
```

而不是加载单个图像的球，我们可以加载整个 spritesheet - 不同图像的集合。我们将按顺序显示精灵，创造动画的幻觉。该`spritesheet()`方法的两个额外的表格确定给定 spritesheet 文件中每个单个框架的宽度和高度，指示程序如何切割以获取单个框架。

## 加载动画

接下来，进入你的 create() 函数，找到加载球精灵的行，下面的调用`animations.add()`如下所示：

```js
ball = game.add.sprite(50, 250, "ball");
ball.animations.add("wobble", [0, 1, 0, 2, 0, 1, 0, 2, 0], 24);
```

要向对象添加动画，我们使用该`animations.add()`方法，其中包含以下参数

- 我们为动画选择的名称
- 一个数组，定义在动画过程中显示帧的顺序。如果您再次查看`wobble.png`图像，您会看到有三个框架。Phaser 提取它们并将它们存储在数组中 - 位置 0，1 和 2.上面的数组表示我们显示帧 0，然后是 1，然后是 0 等。
- 帧速率，以 fps 为单位。由于我们以 24fps 运行动画，有 9 帧，动画每秒将显示三次以下。

## 当球击中桨时应用动画

在`arcade.collide()`处理球和桨（第一行内部`update()`，见下文）之间的碰撞的方法调用中，我们可以添加一个额外的参数，该参数指定每次发生碰撞时执行的功能，与该`ballHitBrick()`功能相同。更新内部的第一行`update()`，如下所示：

```js
function update() {
  game.physics.arcade.collide(ball, paddle, ballHitPaddle);
  game.physics.arcade.collide(ball, bricks, ballHitBrick);
  paddle.x = game.input.x || game.world.width * 0.5;
}
```

然后我们可以创建`ballHitPaddle()`函数（具有`ball`和`paddle`作为默认参数），在调用时播放摆动动画。在结束`</script>`标签之前添加以下方法：

```js
function ballHitPaddle(ball, paddle) {
  ball.animations.play("wobble");
}
```

每次球击中桨时都会播放动画。你也可以`animations.play()`在`ballHitBrick()`函数内添加调用，如果你觉得它会使游戏看起来更好。

## 补间

而动画依次播放外部精灵，补间游戏中物体的属性平滑，如宽度或不透明度。

让我们在游戏中增加一个补间，使砖块在被球击中时顺利消失。转到您的`ballhitBrick()`功能，找到您的`brick.kill();`行，并将其替换为以下内容：

```js
var killTween = game.add.tween(brick.scale);
killTween.to({ x: 0, y: 0 }, 200, Phaser.Easing.Linear.None);
killTween.onComplete.addOnce(function () {
  brick.kill();
}, this);
killTween.start();
```

让我们来看看这里，看看这里发生了什么：

1. 当定义一个新的补间时，你必须指定哪些属性将被补间 - 在我们的例子中，而不是在被球击中时立即隐藏砖块，我们将把它们的宽度和高度缩放到零，所以它们将很好地消失。最后，我们使用该`add.tween()`方法，指定`brick.scale`为参数，因为这是我们想要补间。
2. 该`to()`方法定义补间结束时对象的状态。它需要一个包含所选参数的期望结束值的对象（比例取尺度值，1 为大小的 100％，0 为大小的 0％等），补间的时间（以毫秒为单位）以及使用的宽松类型补间。
3. 我们还将添加可选的`onComplete`事件处理程序，该处理程序定义了在补间程序完成时要执行的函数。
4. 最后一件事是立即开始补间`start()`。

这是补间定义的扩展版本，但是我们也可以使用速记语法：

```js
game.add
  .tween(brick.scale)
  .to({ x: 2, y: 2 }, 500, Phaser.Easing.Elastic.Out, true, 100);
```

这个补间将使用弹性宽松在半秒内将砖的比例翻倍，将自动启动，延迟 100 毫秒。

## 比较你的代码

您可以在下面的现场演示中查看本课程的完成代码，并使用它来更好地了解它的工作原理：

{{JSFiddleEmbed("https://jsfiddle.net/end3r/9o4pakrb/","","400")}}

## 下一步

动画和 tweens 看起来很不错，但我们可以添加更多的我们的游戏 - 在下一节我们将看看处理[按钮](/zh-CN/docs/Games/Workflows/2D_Breakout_game_Phaser/Buttons)输入。

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Extra_lives", "Games/Workflows/2D_Breakout_game_Phaser/Buttons")}}
