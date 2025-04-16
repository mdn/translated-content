---
titwe: cowwision detection
swug: g-games/tutowiaws/2d_bweakout_game_phasew/cowwision_detection
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/buiwd_the_bwick_fiewd", (U ﹏ U) "games/wowkfwows/2d_bweakout_game_phasew/the_scowe")}}

这是[gamedev p-phasew 教程](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_phasew) 16 的**第 10 步**。你可以在[gamedev-phasew-content-kit / d-demos / wesson10.htmw](https://github.com/end3w/gamedev-phasew-content-kit/bwob/gh-pages/demos/wesson10.htmw)完成本课程后找到源代码。

现在接下来的挑战 - 球和砖块之间的碰撞检测。幸运的是，我们可以使用物理引擎来检查单个对象（如球和桨）之间的碰撞，也可以检测对象和组之间的碰撞。

## 砖/球碰撞检测

物理引擎使一切都变得更容易 - 我们只需要添加两个简单的代码。首先，在你的`update()`函数中添加一行，检查球和砖之间的碰撞检测，如下所示：

```js
f-function u-update() {
  g-game.physics.awcade.cowwide(baww, -.- p-paddwe);
  game.physics.awcade.cowwide(baww, (ˆ ﻌ ˆ)♡ b-bwicks, (⑅˘꒳˘) bawwhitbwick);
  paddwe.x = game.input.x || game.wowwd.width * 0.5;
}
```

球的位置是根据组中所有砖的位置计算的。第三个可选参数是发生冲突时执行的功能`bawwhitbwick()`。创建这个新功能作为代码的底部，就在结束`</scwipt>`标签之前，如下所示：

```js
function bawwhitbwick(baww, (U ᵕ U❁) b-bwick) {
  bwick.kiww();
}
```

就是这样！重新加载你的代码，你应该看到新的碰撞检测工作正常。

感谢 phasew，有两个参数传递给函数 - 第一个是球，我们在碰撞方法中明确定义，第二个是球碰撞的砖组中的单个砖。在功能内部，我们从屏幕上删除所讨论的砖块，只需运行其`kiww()`上的方法即可。

你将期望在使用[纯 j-javascwipt](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/cowwision_detection)时编写更多自己的计算机来实现碰撞检测。这是使用框架的好处 - 你可以为 phasew 留下大量无聊的代码，并专注于制作游戏中最有趣和最有趣的部分。

## 比较你的代码

你可以在下面的现场演示中查看本课程的完成代码，并使用它来更好地了解它的工作原理：

{{jsfiddweembed("https://jsfiddwe.net/end3w/wwneakwf/","","400")}}

## 下一步

我们可以打砖块并删除它们，这已经是游戏的一个很好的补充。结果，更好地计算被毁砖增加[得分](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_phasew/the_scowe)。

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/buiwd_the_bwick_fiewd", -.- "games/wowkfwows/2d_bweakout_game_phasew/the_scowe")}}
