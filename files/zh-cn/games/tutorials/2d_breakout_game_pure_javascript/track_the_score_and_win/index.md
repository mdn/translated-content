---
title: 跟踪得分和获胜
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Collision_detection", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}

本篇为[Gamedev Canvas tutorial](/zh-CN/docs/Games/Workflows/Breakout_game_from_scratch)10 节教程中的**第 8 节。**在你完成这篇课程之后，你可以在[Gamedev-Canvas-workshop/lesson8.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson08.html)找到我们的源代码。

破坏砖块真的很酷，但更酷的是，游戏可以给每个用户击破的砖块奖励分数，并保持总分。

## 计算分数

如果你能在整个游戏中看到你的分数，最终你会给你的朋友留下深刻印象。你需要一个变量来记录分数。在变量的其余部分之后，将下面的内容添加到 JavaScript 中：

```js
var score = 0;
```

您还需要一个 `drawScore()` 函数来创建和更新分数显示。在 `collisionDetection()` 函数之后添加以下内容：

```js
function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: " + score, 8, 20);
}
```

在画布上绘制文本类似于绘制形状。字体定义看起来与 CSS 中的字体定义完全一样——可以在{{domxref("CanvasRenderingContext2D.font","font()")}} 方法中设置大小和字体类型。然后使用{{domxref("CanvasRenderingContext2D.fillStyle()","fillStyle()")}} 来设置字体的颜色，{{domxref("CanvasRenderingContext2D.fillText","fillText()")}} 来设置将放置在画布上的实际文本，和其放置位置。第一个参数是文本本身——上面的代码显示当前点的数量——最后两个参数是文本将放置在画布上的坐标。

若要在每次击中砖块时评分，则在 `collisionDetection()`中添加计分规则，以在每次检测到碰撞时增加得分变量的值。将下面突出显示的行添加到代码中：

```js
function collisionDetection() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r];
      if (b.status == 1) {
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          y > b.y &&
          y < b.y + brickHeight
        ) {
          dy = -dy;
          b.status = 0;
          score++;
        }
      }
    }
  }
}
```

从 `draw()` 函数调用 `drawScore()` ，使每一个新帧的分数都保持最新，在 `draw()`中添加下面的行，在 `drawPaddle()` 下面调用：

```js
drawScore();
```

## 当所有砖块被破坏时显示获胜消息

收集这些点很有效，但是你不会永远添加它们 - 当所有的砖头都被破坏的时候呢？毕竟这是游戏的主要目的，所以如果收集到所有可用的点，你应该显示一个获胜的消息。将下面突出显示的部分添加到 `collisionDetection()` 函数中：

```js
function collisionDetection() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r];
      if (b.status == 1) {
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          y > b.y &&
          y < b.y + brickHeight
        ) {
          dy = -dy;
          b.status = 0;
          score++;
          if (score == brickRowCount * brickColumnCount) {
            alert("YOU WIN, CONGRATULATIONS!");
            document.location.reload();
          }
        }
      }
    }
  }
}
```

谢谢你做的这些，你的用户可以真正赢得游戏时，他们也摧毁了所有的砖块。当用户来到游戏还有一点非常重要，用户一旦点击了警告按钮， `document.location.reload()`函数将重新加载页面并重新启动游戏。

## 比较你的代码

最新的代码是这样（和工程），如果你想比较和对比它与你写的：

{{JSFiddleEmbed("https://jsfiddle.net/yumetodo/2m74vr9r/1/","","395")}}

> **备注：** 在每一个砖头击破后添加更多的分数，打印出收集到的点数在游戏结束警告框中。

## 下一节

游戏到这一步看起来相当不错。在下一课中，您将通过添加鼠标控件来扩大游戏的吸引力：[Mouse controls](/zh-CN/docs/Games/Workflows/Breakout_game_from_scratch/Mouse_controls).。

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Collision_detection", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}
