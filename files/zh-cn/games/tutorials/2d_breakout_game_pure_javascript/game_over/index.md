---
title: 游戏结束
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field")}}

这是 [Gamedev Canvas tutorial](/zh-CN/docs/Games/Workflows/Breakout_game_from_scratch)教程的第五章。您可以在完成本课程后在这里[Gamedev-Canvas-workshop/lesson5.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson05.html)找到源代码。

看球从墙上反弹，并能够移动球盘是很有趣的。但除此之外，游戏什么都不做，也没有任何进展或最终目标。从游戏的角度来看，我们需要一个 game over。失败的逻辑很简单。如果你的球拍错过了球，并且球到达屏幕的底部边缘，那么游戏就结束了。

## 实现游戏失败

让我们在代码中实现，下面是第三章里的一段代码，让球从墙上反弹：

```js
if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
  dx = -dx;
}

if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
  dy = -dy;
}
```

我们不需要让球从四面墙上反弹，应该只允许三个 - 左，上，右。击中底部墙将结束游戏。我们将编辑第二个 if 代码块，这是一个 if else 块，当球碰撞到画布的底部边缘时，它会触发我们的“游戏结束”状态。现在我们将保持简单，显示一条警告消息，并通过重新加载页面重新开始游戏。

第一步，把您最开始使用的 `setInterval()` 函数

```js
setInterval(draw, 10);
```

替换成：

```js
var interval = setInterval(draw, 10);
```

然后将第二个 if 块替换为以下内容：

```js
if (y + dy < ballRadius) {
  dy = -dy;
} else if (y + dy > canvas.height - ballRadius) {
  alert("GAME OVER");
  document.location.reload();
}
```

## 让球拍接住球

本课中最后要做的是在球和球拍之间创建一些碰撞检测，以便它可以反弹并返回到游戏区域。最简单的方法是检查球的中心是否在球拍的左边和右边之间。再次更新您修改的代码的最后一位（第二个 if 块），如下所示：

```js
if (y + dy < ballRadius) {
  dy = -dy;
} else if (y + dy > canvas.height - ballRadius) {
  if (x > paddleX && x < paddleX + paddleWidth) {
    dy = -dy;
  } else {
    alert("GAME OVER");
    document.location.reload();
  }
}
```

如果球击中画布的底部边缘，我们需要检查它是否碰到球拍。如果是的话，就像你所期望的那样反弹。如果没有，那么游戏就像以前一样结束。

## 代码对比

这里是完整例子，对比一下代码吧！

{{JSFiddleEmbed("https://jsfiddle.net/end3r/z4zy79fo/","","320")}}

> **备注：** 当球碰到球拍时，让球移动得更快

## 下一步

到目前为止，我们的表现相当不错，游戏变得更有趣，并且现在你可以输了！但它仍然缺少一些东西。让我们继续前进到第六章 - [建造砖块](/zh-CN/docs/Games/Workflows/Breakout_game_from_scratch/Build_the_brick_field) - 并创造一些砖块来消灭它们。

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field")}}
