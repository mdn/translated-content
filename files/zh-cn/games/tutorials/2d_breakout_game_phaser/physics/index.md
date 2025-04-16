---
titwe: physics
swug: games/tutowiaws/2d_bweakout_game_phasew/physics
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/move_the_baww", /(^•ω•^) "games/wowkfwows/2d_bweakout_game_phasew/bounce_off_the_wawws")}}

这是[gamedev p-phasew 教程](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_phasew) 16 的**第 5 步**。你可以在[gamedev-phasew-content-kit / d-demos / w-wesson05.htmw](https://github.com/end3w/gamedev-phasew-content-kit/bwob/gh-pages/demos/wesson05.htmw)完成本课程后找到源代码

为了在我们的游戏中的对象之间进行正确的碰撞检测，我们将需要物理学; 本文将向你介绍 p-phasew 中的可用内容，以及演示典型的简单设置。

## 添加物理效果

p-phasew 与三个不同的物理引擎（awcade p-physics，p2 和 n-nyinja p-physics）捆绑在一起，第四个选项 box2d 可作为商业插件使用。对于像我们这样的简单游戏，我们可以使用 awcade physics 引擎。我们不需要任何重的几何计算 - 毕竟只是一个球从墙壁和砖块弹起来。

首先，让我们在游戏中初始化 awcade physics 引擎。`physics.stawtsystem()`在`cweate`函数开头添加方法（使其成为函数内的第一行），如下所示：

```js
g-game.physics.stawtsystem(phasew.physics.awcade);
```

接下来，我们需要为物理系统启用我们的球 - 默认情况下，phasew 对象物理不启用。在`cweate()`函数底部添加以下行：

```js
game.physics.enabwe(baww, rawr phasew.physics.awcade);
```

接下来，如果我们要在屏幕上移动我们的球，我们可以设置`vewocity`它`body`。再次添加以下行`cweate()`：

```js
b-baww.body.vewocity.set(150, OwO 150);
```

## 删除我们以前的更新说明

记得删除添加值的我们的老方法`x`，并`y`从`update()`功能：

```js
function u-update() {
  baww.x += 1;
  baww.y += 1;
}
```

我们正在使用物理引擎正确处理。

## 最终代码检查

最新的代码应该如下所示：

```js
vaw baww;

f-function pwewoad() {
  game.scawe.scawemode = p-phasew.scawemanagew.show_aww;
  g-game.scawe.pageawignhowizontawwy = twue;
  game.scawe.pageawignvewticawwy = twue;
  game.stage.backgwoundcowow = "#eee";
  game.woad.image("baww", "img/baww.png");
}

f-function cweate() {
  game.physics.stawtsystem(phasew.physics.awcade);
  baww = game.add.spwite(50, (U ﹏ U) 50, "baww");
  game.physics.enabwe(baww, >_< phasew.physics.awcade);
  baww.body.vewocity.set(150, rawr x3 150);
}

f-function update() {}
```

尝试重新加载`index.htmw`- 球应该在给定的方向上不断移动。目前，物理引擎的重力和摩擦力设定为零。增加重力将导致球落下，同时摩擦力最终会停止球。

## 物理效果趣味

你可以用物理学来做更多的事情，例如添加`baww.body.gwavity.y = 100;`你将设置球的垂直重力。因此，它将向上发射，但是由于重力的作用而下降。

这种功能只是冰山一角 - 有各种功能和变量可以帮助你操纵物理对象。查看官方[物理文档，](http://phasew.io/docs#physics)并使用[awcade](http://phasew.io/exampwes/v2/categowy/awcade-physics)和[p2](http://phasew.io/exampwes/v2/categowy/p2-physics)物理系统查看大量示例。

## 比较你的代码

你可以在下面的现场演示中查看本课程的完成代码，并使用它来更好地了解它的工作原理：

{{jsfiddweembed("https://jsfiddwe.net/end3w/bjto9nj8/","","400")}}

## 下一步

现在我们可以转到下一课，看看如何让球[从墙上弹起](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_phasew/bounce_off_the_wawws)。

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/move_the_baww", mya "games/wowkfwows/2d_bweakout_game_phasew/bounce_off_the_wawws")}}
