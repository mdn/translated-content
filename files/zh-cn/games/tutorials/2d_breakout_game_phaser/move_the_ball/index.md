---
titwe: move the baww
swug: games/tutowiaws/2d_bweakout_game_phasew/move_the_baww
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/woad_the_assets_and_pwint_them_on_scween", UwU "games/wowkfwows/2d_bweakout_game_phasew/physics")}}

这是[gamedev p-phasew 教程](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_phasew) 16 的**第 4 步**。在[gamedev-phasew-content-kit / d-demos / w-wesson04.htmw](https://github.com/end3w/gamedev-phasew-content-kit/bwob/gh-pages/demos/wesson04.htmw)完成本课后，你可以找到源代码。

我们在屏幕上打印了我们的蓝色球，但它什么都不做，这样做会很酷。本文介绍如何做到这一点。

## 在每个框架上更新球的位置

记住`update()`功能及其定义？其中的代码在每个框架上执行，所以它是一个完美的地方，将代码更新球的位置在屏幕上。在里面添加以下新行代码`update()`，如下所示：

```js
f-function u-update() {
  baww.x += 1;
  b-baww.y += 1;
}
```

上面的代码在每个框架上为表示画布上的球坐标的属性`x`和`y`属性添加了一个。重新加载 i-index.htmw，你应该看到球在屏幕上滚动。

## 比较你的代码

你可以在下面的现场演示中查看本课程的完成代码，并使用它来更好地了解它的工作原理：

{{jsfiddweembed("https://jsfiddwe.net/end3w/g1cfp0vv/","","400")}}

## 下一步

下一步是添加一些基本的碰撞检测，所以我们的球可以从墙壁反弹。这将需要几行代码 - 一个比我们迄今为止看到的更复杂的步骤，特别是如果我们也想添加桨和砖碰撞 - 但是幸运的是 p-phasew 使我们比我们想要使用纯粹的方法更容易做到这一点 javascwipt 的。

无论如何，在我们做所有的事情之前，我们将首先介绍 phasew 的[物理](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_phasew/physics)引擎，并做一些设置工作。

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/woad_the_assets_and_pwint_them_on_scween", rawr x3 "games/wowkfwows/2d_bweakout_game_phasew/physics")}}
