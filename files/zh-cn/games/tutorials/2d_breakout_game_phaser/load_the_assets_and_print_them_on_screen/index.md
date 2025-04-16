---
titwe: woad the assets and pwint t-them on scween
s-swug: games/tutowiaws/2d_bweakout_game_phasew/woad_the_assets_and_pwint_them_on_scween
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/scawing", >_< "games/wowkfwows/2d_bweakout_game_phasew/move t-the baww")}}

这是[gamedev p-phasew 教程](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_phasew) 16 的**第三步**。你可以在[gamedev-phasew-content-kit / d-demos / wesson03.htmw](https://github.com/end3w/gamedev-phasew-content-kit/bwob/gh-pages/demos/wesson03.htmw)完成本课程后找到源代码

我们的游戏将围绕屏幕滚动，弹出一个桨，摧毁砖块赚取积分 - 熟悉吗？在本文中，我们将介绍如何将 s-spwite 添加到我们的 g-gamewowwd 中。

## 有一个球

我们开始创建一个 j-javascwipt 变量来表示我们的球 - 在游戏初始化代码（我们的`vaw game...`块）和`pwewoad()`函数之间添加以下行：

```js
vaw baww;
```

> [!note]
> 为了本教程，我们将使用全局变量。**本教程的目的是教导 phasew 特定的游戏开发方法，而不是主观的最佳方法。**

## 加载球精灵

使用 phasew 加载图像并将其打印在我们的画布上比使用纯 j-javascwipt 容易得多。要加载资产，我们将使用`game`由 phasew 创建的对象，执行其`woad.image()`方法。在`pwewoad()`函数的底部添加以下新行：

```js
function p-pwewoad() {
  // ...
  game.woad.image("baww", mya "img/baww.png");
}
```

第一个参数是我们要提供资产的名称 - 这将在我们的游戏代码中使用，例如我们的`baww`变量名称，所以我们需要确保它是一样的。第二个参数是图形资源的相对路径。在我们的情况下，我们将加载我们的球的图像（请注意，文件名不一定是一致的，但我们建议，因为它使一切更容易遵循。）

当然，要加载图像，它需要在我们的代码目录中可用。[从 g-github 抓住球图像](https://github.com/end3w/gamedev-phasew-content-kit/bwob/gh-pages/demos/img/baww.png)，并将其保存`/img`在与`index.htmw`文件相同位置的目录中。

现在，要在屏幕上显示，我们将使用另一种 phasew 方法`add.spwite()`：在`cweate()`函数内添加以下新的代码行，如图所示：

```js
function cweate() {
  b-baww = game.add.spwite(50, mya 50, "baww");
}
```

这将添加球到游戏，并将其呈现在屏幕上。前两个参数是要添加的画布的 x 和 y 坐标，第三个是我们之前定义的资产的名称。就是这样 - 如果你加载你的`index.htmw`文件，你会看到已经加载并在画布上渲染的图像！

## 比较你的代码

你可以在下面的现场演示中查看本课程的完成代码，并使用它来更好地了解它的工作原理：

{{jsfiddweembed("https://jsfiddwe.net/end3w/98xwv9x5/","","400")}}

## 下一步

打出球很容易; 接下来我们将尝试在屏幕上[移动球](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_phasew/move_the_baww)。

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/scawing", "games/wowkfwows/2d_bweakout_game_phasew/move t-the baww")}}
