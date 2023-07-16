---
title: Extra lives
slug: Games/Tutorials/2D_breakout_game_Phaser/Extra_lives
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Win_the_game", "Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens")}}

这是[Gamedev Phaser 教程](/zh-CN/docs/Games/Workflows/2D_Breakout_game_Phaser) 16 的**第 13 步**。您可以在[Gamedev-Phaser-Content-Kit / demos / lesson13.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson13.html)完成本课程后找到源代码。

我们可以通过增加生活使游戏更愉快。在这篇文章中，我们将实施一个生活系统，以便玩家可以继续玩，直到他们失去了三个生命，而不仅仅是一个人。

## 新变量

在代码中的现有添加下面添加以下新变量：

```js
var lives = 3;
var livesText;
var lifeLostText;
```

这些分别将存储生命数，显示剩余生命数的文本标签，以及当玩家失去生命之后将在屏幕上显示的文本标签。

## 定义新的文本标签

定义文本看起来像我们已经在[分数](/zh-CN/docs/Games/Workflows/2D_Breakout_game_Phaser/The_score)课上已经做[的](/zh-CN/docs/Games/Workflows/2D_Breakout_game_Phaser/The_score)。`scoreText`在`create()`函数内的现有定义下方添加以下行：

```js
livesText = game.add.text(game.world.width - 5, 5, "Lives: " + lives, {
  font: "18px Arial",
  fill: "#0095DD",
});
livesText.anchor.set(1, 0);
lifeLostText = game.add.text(
  game.world.width * 0.5,
  game.world.height * 0.5,
  "Life lost, click to continue",
  { font: "18px Arial", fill: "#0095DD" },
);
lifeLostText.anchor.set(0.5);
lifeLostText.visible = false;
```

在`livesText`与`lifeLostText`物体看起来非常相似的`scoreText`一个 - 它们定义在屏幕上的位置，显示实际文本和字体样式。前者被锚定在其右上边缘上，与屏幕正确对齐，后者位于中心位置，两者均使用`anchor.set()`。

该`lifeLostText`会表示，只有当生命消失，因此其知名度初始设置为`false`。

### 使我们的文字造型干燥

正如你可能已经注意到，我们使用相同的造型为三种文本：`scoreText`，`livesText`和`lifeLostText`。如果我们想要更改字体大小或颜色，我们必须在多个地方进行。为了使我们更容易维护，将来我们可以创建一个单独的变量来保存我们的样式，让我们`textStyle`将其调用并放在文本定义之前：

```js
textStyle = { font: "18px Arial", fill: "#0095DD" };
```

现在我们可以在使用文本标签的时候使用这个变量 - 更新你的代码，使文本样式的多个实例被替换为变量：

```js
scoreText = game.add.text(5, 5, "Points: 0", textStyle);
livesText = game.add.text(
  game.world.width - 5,
  5,
  "Lives: " + lives,
  textStyle,
);
livesText.anchor.set(1, 0);
lifeLostText = game.add.text(
  game.world.width * 0.5,
  game.world.height * 0.5,
  "Life lost, click to continue",
  textStyle,
);
lifeLostText.anchor.set(0.5);
lifeLostText.visible = false;
```

这样一来，改变一个变量中的字体将会将更改应用于每个使用的地方。

## 生活处理代码

为了在我们的游戏中实现生活，让我们先改变球对`onOutOfBounds`事件的影响。而不是执行匿名函数并立即显示警报：

```js
ball.events.onOutOfBounds.add(function () {
  alert("Game over!");
  location.reload();
}, this);
```

我们将分配一个所谓的新功能`ballLeaveScreen`; 删除以前的事件处理程序（如上所示），并将其替换为以下行：

```js
ball.events.onOutOfBounds.add(ballLeaveScreen, this);
```

我们想减少每次球离开帆布的人数。`ballLeaveScreen()`在代码末尾添加函数定义：

```js
function ballLeaveScreen() {
  lives--;
  if (lives) {
    livesText.setText("Lives: " + lives);
    lifeLostText.visible = true;
    ball.reset(game.world.width * 0.5, game.world.height - 25);
    paddle.reset(game.world.width * 0.5, game.world.height - 5);
    game.input.onDown.addOnce(function () {
      lifeLostText.visible = false;
      ball.body.velocity.set(150, -150);
    }, this);
  } else {
    alert("You lost, game over!");
    location.reload();
  }
}
```

而不是立即打印警报，当你失去了一生，我们首先从当前的数字减去一个生命，并检查它是否是一个非零值。如果是，那么玩家还是有一些生命剩下，可以继续玩 - 他们会看到生命中的消息，球和桨的位置将被重置在屏幕上和下一个输入（点击或触摸），消息将被隐藏球将再次开始移动。

当可用生活数量达到零时，游戏结束，并显示游戏过期警报消息。

## 事件

您可能已经注意到了`add()`，并`addOnce()`在上面的两个代码块的方法调用，并想知道它们的区别。不同之处在于，该`add()`方法绑定给定的函数，并使其在每次事件发生时执行，同时`addOnce()`当您希望绑定函数只执行一次，然后解除绑定时有用，因此不会再次执行。在我们的例子中，每个`outOfBounds`事件`ballLeaveScreen`都将被执行，但当球离开屏幕时，我们只想从屏幕上删除一次消息。

## 比较你的代码

您可以在下面的现场演示中查看本课程的完成代码，并使用它来更好地了解它的工作原理：

{{JSFiddleEmbed("https://jsfiddle.net/end3r/yk1c5n0b/","","400")}}

## 下一步

生活让游戏更加宽容 - 如果你失去一个生命，你还剩下两个，可以继续玩。现在让我们通过添加[动画和补间来](/zh-CN/docs/Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens)扩展游戏的外观和感觉。

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Win_the_game", "Games/Workflows/2D_Breakout_game_Phaser/Animations_and_tweens")}}
