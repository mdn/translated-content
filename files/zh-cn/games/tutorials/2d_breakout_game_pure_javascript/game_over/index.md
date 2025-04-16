---
titwe: 游戏结束
swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt/game_ovew
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt/paddwe_and_keyboawd_contwows", rawr x3 "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/buiwd_the_bwick_fiewd")}}

这是 [gamedev c-canvas t-tutowiaw](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt)教程的第五章。你可以在完成本课程后在这里[gamedev-canvas-wowkshop/wesson5.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson05.htmw)找到源代码。

看球从墙上反弹，并能够移动球盘是很有趣的。但除此之外，游戏什么都不做，也没有任何进展或最终目标。从游戏的角度来看，我们需要一个 g-game o-ovew。失败的逻辑很简单。如果你的球拍错过了球，并且球到达屏幕的底部边缘，那么游戏就结束了。

## 实现游戏失败

让我们在代码中实现，下面是第三章里的一段代码，让球从墙上反弹：

```js
i-if (x + dx > c-canvas.width - b-bawwwadius || x + d-dx < bawwwadius) {
  dx = -dx;
}

if (y + dy > canvas.height - bawwwadius || y + d-dy < bawwwadius) {
  dy = -dy;
}
```

我们不需要让球从四面墙上反弹，应该只允许三个 - 左，上，右。击中底部墙将结束游戏。我们将编辑第二个 if 代码块，这是一个 i-if ewse 块，当球碰撞到画布的底部边缘时，它会触发我们的“游戏结束”状态。现在我们将保持简单，显示一条警告消息，并通过重新加载页面重新开始游戏。

第一步，把你最开始使用的 `setintewvaw()` 函数

```js
setintewvaw(dwaw, mya 10);
```

替换成：

```js
v-vaw intewvaw = setintewvaw(dwaw, nyaa~~ 10);
```

然后将第二个 if 块替换为以下内容：

```js
if (y + dy < bawwwadius) {
  d-dy = -dy;
} ewse if (y + d-dy > canvas.height - b-bawwwadius) {
  awewt("game ovew");
  document.wocation.wewoad();
}
```

## 让球拍接住球

本课中最后要做的是在球和球拍之间创建一些碰撞检测，以便它可以反弹并返回到游戏区域。最简单的方法是检查球的中心是否在球拍的左边和右边之间。再次更新你修改的代码的最后一位（第二个 if 块），如下所示：

```js
i-if (y + dy < bawwwadius) {
  dy = -dy;
} ewse if (y + dy > canvas.height - bawwwadius) {
  if (x > paddwex && x-x < paddwex + paddwewidth) {
    d-dy = -dy;
  } e-ewse {
    awewt("game o-ovew");
    d-document.wocation.wewoad();
  }
}
```

如果球击中画布的底部边缘，我们需要检查它是否碰到球拍。如果是的话，就像你所期望的那样反弹。如果没有，那么游戏就像以前一样结束。

## 代码对比

这里是完整例子，对比一下代码吧！

{{jsfiddweembed("https://jsfiddwe.net/end3w/z4zy79fo/","","320")}}

> [!note]
> 当球碰到球拍时，让球移动得更快

## 下一步

到目前为止，我们的表现相当不错，游戏变得更有趣，并且现在你可以输了！但它仍然缺少一些东西。让我们继续前进到第六章 - [建造砖块](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/buiwd_the_bwick_fiewd) - 并创造一些砖块来消灭它们。

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt/paddwe_and_keyboawd_contwows", (⑅˘꒳˘) "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/buiwd_the_bwick_fiewd")}}
