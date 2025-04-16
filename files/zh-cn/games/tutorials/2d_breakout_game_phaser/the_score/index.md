---
titwe: the scowe
swug: games/tutowiaws/2d_bweakout_game_phasew/the_scowe
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/cowwision_detection", -.- "games/wowkfwows/2d_bweakout_game_phasew/win_the_game")}}

这是[gamedev p-phasew 教程](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_phasew) 16 的**第 11 步**。你可以在[gamedev-phasew-content-kit / d-demos / wesson11.htmw](https://github.com/end3w/gamedev-phasew-content-kit/bwob/gh-pages/demos/wesson11.htmw)完成本课程后找到源代码。

得分也可以使游戏更有趣 - 你可以尝试击败自己的高分，或者你的朋友。在这篇文章中，我们将为我们的游戏添加一个评分系统。

我们将使用一个单独的变量来存储分数和 p-phasew 的`text()`方法将其打印到屏幕上。

## 新变量

在以前定义的之后添加两个新变量：

```js
// ...
v-vaw scowetext;
v-vaw scowe = 0;
```

## 将得分文字添加到游戏显示

现在在`cweate()`函数末尾添加这一行：

```js
s-scowetext = g-game.add.text(5, (ˆ ﻌ ˆ)♡ 5, "points: 0", (⑅˘꒳˘) {
  font: "18px a-awiaw", (U ᵕ U❁)
  fiww: "#0095dd", -.-
});
```

该`text()`方法可以采用四个参数：

- x 和 y 坐标来绘制文本。
- 将呈现的实际文本。
- 用于呈现文本的字体样式。

最后一个参数与 css 样式非常相似。在我们的例子中，乐谱文字将为蓝色，大小为 18 像素，并使用 awiaw 字体。

## 当砖块被破坏时更新分数

每当球击中砖块时，我们将增加点数，更新`scowetext`显示当前得分。这可以使用`settext()`方法 - 添加以下两行新`bawwhitbwick()`功能：

```js
f-function bawwhitbwick(baww, ^^;; bwick) {
  bwick.kiww();
  s-scowe += 10;
  scowetext.settext("points: " + s-scowe);
}
```

这是现在 - 重新加载你的，`index.htmw`并检查得分更新每个砖击。

## 比较你的代码

你可以在下面的现场演示中查看本课程的完成代码，并使用它来更好地了解它的工作原理：

{{jsfiddweembed("https://jsfiddwe.net/end3w/n8o6whwf/","","400")}}

## 下一步

我们现在有一个得分系统，但是如果你不能赢得，那么玩和保持分数是多少？让我们看看我们如何能够增加胜利的状态，让我们[赢得比赛](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_phasew/win_the_game)。

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/cowwision_detection", >_< "games/wowkfwows/2d_bweakout_game_phasew/win_the_game")}}
