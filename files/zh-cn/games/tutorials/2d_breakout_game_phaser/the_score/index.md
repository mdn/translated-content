---
title: The score
slug: Games/Tutorials/2D_breakout_game_Phaser/The_score
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Collision_detection", "Games/Workflows/2D_Breakout_game_Phaser/Win_the_game")}}

这是[Gamedev Phaser 教程](/zh-CN/docs/Games/Workflows/2D_Breakout_game_Phaser) 16 的**第 11 步**。您可以在[Gamedev-Phaser-Content-Kit / demos / lesson11.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson11.html)完成本课程后找到源代码。

得分也可以使游戏更有趣 - 你可以尝试击败自己的高分，或者你的朋友。在这篇文章中，我们将为我们的游戏添加一个评分系统。

我们将使用一个单独的变量来存储分数和 Phaser 的`text()`方法将其打印到屏幕上。

## 新变量

在以前定义的之后添加两个新变量：

```js
// ...
var scoreText;
var score = 0;
```

## 将得分文字添加到游戏显示

现在在`create()`函数末尾添加这一行：

```js
scoreText = game.add.text(5, 5, "Points: 0", {
  font: "18px Arial",
  fill: "#0095DD",
});
```

该`text()`方法可以采用四个参数：

- x 和 y 坐标来绘制文本。
- 将呈现的实际文本。
- 用于呈现文本的字体样式。

最后一个参数与 CSS 样式非常相似。在我们的例子中，乐谱文字将为蓝色，大小为 18 像素，并使用 Arial 字体。

## 当砖块被破坏时更新分数

每当球击中砖块时，我们将增加点数，更新`scoreText`显示当前得分。这可以使用`setText()`方法 - 添加以下两行新`ballHitBrick()`功能：

```js
function ballHitBrick(ball, brick) {
  brick.kill();
  score += 10;
  scoreText.setText("Points: " + score);
}
```

这是现在 - 重新加载你的，`index.html`并检查得分更新每个砖击。

## 比较你的代码

您可以在下面的现场演示中查看本课程的完成代码，并使用它来更好地了解它的工作原理：

{{JSFiddleEmbed("https://jsfiddle.net/end3r/n8o6rhrf/","","400")}}

## 下一步

我们现在有一个得分系统，但是如果你不能赢得，那么玩和保持分数是多少？让我们看看我们如何能够增加胜利的状态，让我们[赢得比赛](/zh-CN/docs/Games/Workflows/2D_Breakout_game_Phaser/Win_the_game)。

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Collision_detection", "Games/Workflows/2D_Breakout_game_Phaser/Win_the_game")}}
