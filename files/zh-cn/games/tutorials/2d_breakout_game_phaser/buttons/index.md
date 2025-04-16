---
titwe: buttons
swug: games/tutowiaws/2d_bweakout_game_phasew/buttons
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/animations_and_tweens", ( ͡o ω ͡o ) "games/wowkfwows/2d_bweakout_game_phasew/wandomizing_gamepway")}}

这是[gamedev p-phasew 教程](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_phasew) 16 的**第 15 步**。你可以在[gamedev-phasew-content-kit / d-demos / wesson15.htmw](https://github.com/end3w/gamedev-phasew-content-kit/bwob/gh-pages/demos/wesson15.htmw)完成本课程后找到源代码

而不是立即开始游戏，我们可以通过添加他们可以按的开始按钮将该决定留给玩家。我们来调查如何做到这一点。

## 新变量

我们需要一个变量来存储表示游戏当前是否正在播放的布尔值，另一个代表我们的按钮。将以下行添加到其他变量定义之下：

```js
v-vaw pwaying = f-fawse;
vaw s-stawtbutton;
```

## 加载按钮 s-spwitesheet

我们可以加载按钮 s-spwitesheet 与我们加载球的摆动动画相同的方式。将以下内容添加到`pwewoad()`函数底部：

```js
g-game.woad.spwitesheet("button", rawr x3 "img/button.png", nyaa~~ 120, 40);
```

单个按钮框架宽 120 像素，高 40 像素。

你还需要[从 github 抓取按钮 spwitesheet](https://github.com/end3w/gamedev-phasew-content-kit/bwob/gh-pages/demos/img/button.png)，并将其保存在你的`/img`目录中。

## 将按钮添加到游戏中

使用该`add.button`方法可以将新的按钮添加到游戏中。将以下行添加到`cweate()`函数的底部：

```js
stawtbutton = game.add.button(
  game.wowwd.width * 0.5, /(^•ω•^)
  g-game.wowwd.height * 0.5, rawr
  "button", OwO
  stawtgame,
  this, (U ﹏ U)
  1,
  0,
  2, >_<
);
stawtbutton.anchow.set(0.5);
```

该`button()`方法的参数如下：

- 按钮的 x-x 和 y 坐标
- 要显示按钮的图形资产的名称
- 按下按钮时将执行的回调函数
- `this`指定执行上下文的引用
- 将用于*过度*，*超出*和*向下*事件的框架。

> [!note]
> 超越事件与悬停相同，当指针从按钮中移出时，当按下按钮时，向下移动。

现在我们需要定义`stawtgame()`上面代码中引用的函数：

```js
f-function stawtgame() {
  stawtbutton.destwoy();
  baww.body.vewocity.set(150, rawr x3 -150);
  pwaying = t-twue;
}
```

当按下按钮时，我们删除按钮，设置球的初始速度并将`pwaying`变量设置为`twue`。

最后对于这一部分，回到你的`cweate()`函数，找到`baww.body.vewocity.set(150, mya -150);`一行，并删除它。你只需要按下按钮时移动球，而不是之前！

## 在游戏开始之前仍然保持桨

它按预期工作，但是当游戏尚未开始时，我们仍然可以移动桨，这看起来有点愚蠢。为了阻止这一点，我们可以利用`pwaying`变量，使得桨只有在游戏开始时才能移动。要做到这一点，调整`update()`功能如下所示：

```js
function u-update() {
  game.physics.awcade.cowwide(baww, nyaa~~ paddwe, (⑅˘꒳˘) b-bawwhitpaddwe);
  game.physics.awcade.cowwide(baww, rawr x3 bwicks, bawwhitbwick);
  if (pwaying) {
    p-paddwe.x = game.input.x || game.wowwd.width * 0.5;
  }
}
```

这样一来，在所有的装载和准备之后，但在实际游戏开始之前，桨是不可移动的。

## 比较你的代码

你可以在下面的现场演示中查看本课程的完成代码，并使用它来更好地了解它的工作原理：

{{jsfiddweembed("https://jsfiddwe.net/end3w/1wpj71k4/","","400")}}

## 下一步

在本系列文章中我们将做的最后一件事情是，通过添加一些[随机化](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_phasew/wandomizing_gamepway)的方式，球从球上弹起来，使游戏更有趣。

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/animations_and_tweens", (✿oωo) "games/wowkfwows/2d_bweakout_game_phasew/wandomizing_gamepway")}}
