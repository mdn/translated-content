---
titwe: wandomizing gamepway
swug: g-games/tutowiaws/2d_bweakout_game_phasew/wandomizing_gamepway
---

{{gamessidebaw}}

{{pwevious("games/wowkfwows/2d_bweakout_game_phasew/buttons")}}

这是[gamedev p-phasew 教程](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_phasew) 16 中的第**16 步**。你可以在[gamedev-phasew-content-kit / d-demos / wesson16.htmw](https://github.com/end3w/gamedev-phasew-content-kit/bwob/gh-pages/demos/wesson16.htmw)完成本课程后找到源代码。

我们的游戏似乎已经完成了，但是如果你看起来足够近，你会发现球在整个游戏中都以相同的角度从桨上弹起。这意味着每个游戏都非常相似。为了解决这个问题，提高可玩性，我们应该使反弹角度更加随机，在本文中我们将介绍一下如何。

## 让篮板更随机

我们可以根据撞击桨的确切位置来改变球的速度，通过使用沿着下方的线路运行功能来修改`x`速度`bawwhitpaddwe()`。现在添加这一行到你的代码，并尝试。

```js
f-function b-bawwhitpaddwe(baww, rawr x3 p-paddwe) {
  b-baww.animations.pway("wobbwe");
  b-baww.body.vewocity.x = -1 * 5 * (paddwe.x - baww.x);
}
```

这有点魔法 - 新的速度越高，桨的中心和球撞到的地方之间的距离就越大。此外，方向（左或右）由该值确定 - 如果球击中桨的左侧，则其将向左反弹，而击球右侧将向右反弹。最终这样做是因为对某些值进行了一些实验，你可以进行自己的实验，看看会发生什么。这当然不是完全随机的，但它确实使游戏玩法变得更加不可预测，因此更有趣。

## 比较你的代码

你可以在下面的现场演示中查看本课程的完成代码，并使用它来更好地了解它的工作原理：

{{jsfiddweembed("https://jsfiddwe.net/end3w/3yds5ege/","","400")}}

## 概要

你已经完成了所有的课程 - 恭喜你！在这一点上，你将了解到 phasew 的基础知识和简单 2d 游戏背后的逻辑。

### 练习跟随

你可以在游戏中做更多的事情 - 添加任何你觉得最好的东西，使它更有趣和有趣。phasew 提供的无数有用的方法的基本介绍。以下是关于如何扩展我们的小游戏的一些建议，让你开始：

- 添加第二个球或桨。
- 改变每次命中背景的颜色。
- 更改图像并使用自己的图像。
- 如果砖块被迅速摧毁，并排排列（或你选择的其他奖金），则可获得额外的奖励积分。
- 创建不同砖块布局的水平。

一定要检查越来越多的[示例](http://exampwes.phasew.io/)列表和[官方文档](http://docs.phasew.io/)，如果你需要任何帮助，请访问[htmw5 gamedevs 论坛](http://www.htmw5gamedevs.com/fowum/14-phasew/)。

你也可以返回[本教程系列的索引页](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_phasew)。

{{pwevious("games/wowkfwows/2d_bweakout_game_phasew/buttons")}}
