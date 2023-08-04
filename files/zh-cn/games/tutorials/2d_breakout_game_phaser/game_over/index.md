---
title: Game over
slug: Games/Tutorials/2D_breakout_game_Phaser/Game_over
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Player_paddle_and_controls", "Games/Workflows/2D_Breakout_game_Phaser/Build_the_brick_field")}}

这是[Gamedev Phaser 教程](/zh-CN/docs/Games/Workflows/2D_Breakout_game_Phaser) 16 的**第 8 步**。在[Gamedev-Phaser-Content-Kit / demos / lesson08.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson08.html)完成本课后，您可以找到源代码。

为了使游戏更有趣，我们可以引入失去的能力 - 如果在到达屏幕底部边缘之前没有击球，那么这个游戏将会结束。

## 如何输

为了提供丢失的能力，我们将禁用球与屏幕底部的碰撞。在`create()`函数内添加下面的代码; 刚刚定义球的属性就好了：

```js
game.physics.arcade.checkCollision.down = false;
```

这将使三个墙壁（顶部，左侧和右侧）弹回球，但是第四个（底部）将消失，如果桨错过，则球从屏幕上脱落。我们需要一种方法来检测并相应地采取行动。在以前的新的下方添加以下行：

```js
ball.checkWorldBounds = true;
ball.events.onOutOfBounds.add(function () {
  alert("Game over!");
  location.reload();
}, this);
```

添加这些行将使得球检查世界（在我们的例子中是画布）边界并执行绑定到`onOutOfBounds`事件的函数。当您点击生成的警报时，页面将被重新加载，以便您可以再次播放。

## 比较你的代码

您可以在下面的现场演示中查看本课程的完成代码，并使用它来更好地了解它的工作原理：

{{JSFiddleEmbed("https://jsfiddle.net/end3r/436bckb7/","","400")}}

## 下一步

现在的基本游戏就是让我们通过引入砖块来更有趣的是 - 现在是[建造砖块](/zh-CN/docs/Games/Workflows/2D_Breakout_game_Phaser/Build_the_brick_field)的时候了。

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Player_paddle_and_controls", "Games/Workflows/2D_Breakout_game_Phaser/Build_the_brick_field")}}
