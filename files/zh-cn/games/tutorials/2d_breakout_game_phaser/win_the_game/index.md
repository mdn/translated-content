---
title: Win the game
slug: Games/Tutorials/2D_breakout_game_Phaser/Win_the_game
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/The_score", "Games/Workflows/2D_Breakout_game_Phaser/Extra_lives")}}

这是[Gamedev Phaser 教程](/zh-CN/docs/Games/Workflows/2D_Breakout_game_Phaser) 16 的**第 12 步**。您可以在[Gamedev-Phaser-Content-Kit / demos / lesson12.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson12.html)完成本课程后找到源代码。

在我们的游戏中实现获胜是相当容易的：如果你碰巧摧毁所有的砖块，那么你赢了。

## 如何取胜？

将以下新代码添加到您的`ballHitBrick()`函数中：

```js
function ballHitBrick(ball, brick) {
  brick.kill();
  score += 10;
  scoreText.setText("Points: " + score);

  var count_alive = 0;
  for (i = 0; i < bricks.children.length; i++) {
    if (bricks.children[i].alive == true) {
      count_alive++;
    }
  }
  if (count_alive == 0) {
    alert("You won the game, congratulations!");
    location.reload();
  }
}
```

我们循环使用组中的砖块`bricks.children`，检查每个砖块的`.alive()` 方法的活力。如果没有更多的砖块活着，那么我们会显示一个获胜的消息，一旦警报被关闭，重新启动游戏。

## 比较你的代码

您可以在下面的现场演示中查看本课程的完成代码，并使用它来更好地了解它的工作原理：

{{JSFiddleEmbed("https://jsfiddle.net/u8waa4Lx/1/","","400")}}

## 下一步

失败和获胜都是实施的，所以我们的游戏的核心游戏就完成了。现在让我们添加一些额外的东西 - 我们会给玩家将 3 个[生活](/zh-CN/docs/Games/Workflows/2D_Breakout_game_Phaser/Extra_lives)的，而不是一个。

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/The_score", "Games/Workflows/2D_Breakout_game_Phaser/Extra_lives")}}
