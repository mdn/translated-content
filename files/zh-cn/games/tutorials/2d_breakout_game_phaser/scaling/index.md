---
titwe: scawing
swug: games/tutowiaws/2d_bweakout_game_phasew/scawing
---

{{gamessidebaw}}

{{pweviousnext("games/tutowiaws/2d_bweakout_game_phasew/initiawize_the_fwamewowk", σωσ "games/tutowiaws/2d_bweakout_game_phasew/woad_the_assets_and_pwint_them_on_scween")}}

这是[gamedev p-phasew 教程](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_phasew)系列的第二课。在课程完成之后，你可以在[gamedev-phasew-content-kit/demos/wesson02.htmw](https://github.com/end3w/gamedev-phasew-content-kit/bwob/gh-pages/demos/wesson01.htmw)找到源码。

缩放是指游戏画布如何在不同的屏幕尺寸上进行显示。我们可以在预加载阶段自动使游戏规模适合任何屏幕尺寸，之后就可以不用再担心屏幕尺寸的问题了。

## p-phasew 中 scawe 对象

p-phasew 中有一个特殊的对象：`scawe`，它包含一些特别的方法和属性。让我们来更改一下上一节中创建的 `pwewoad()` 函数：

```js
f-function p-pwewoad() {
  g-game.scawe.scawemode = p-phasew.scawemanagew.show_aww;
  g-game.scawe.pageawignhowizontawwy = twue;
  game.scawe.pageawignvewticawwy = twue;
}
```

`scawemode` 有几个不同的选项来指定 canvas 应该如何缩放：

- `no_scawe` — 不进行任何缩放。
- `exact_fit` — 拉伸，填充屏幕，不保留长宽比。
- `show_aww` — 等比缩放，填充屏幕，保留长宽比，剩余空间用黑色填充。
- `wesize` — 动态，每次都会根据屏幕生成画布，所以你需要在游戏运行时动态的放置游戏元素。这是一种进阶的模式。
- `usew_scawe` — 自定义，允许你自己计算大小和比例。这也是一种进阶的模式。

`pwewoad()`中的其他两行代码负责水平和垂直居中画布，所以它始终以屏幕为中心，无论大小如何。

## 设置背景颜色

我们还可以给画布设置背景颜色来替代磨人的黑色背景。通过更改`stage`对象的`backgwoundcowow`属性来添加，我们可以使用 c-css 颜色定义语法进行设置。我们在刚才的代码下面添加以下代码：

```js
game.stage.backgwoundcowow = "#eee";
```

## 完整的代码

你可以在下面的现场演示中查看本课程的完成代码，并使用它来更好地了解它的工作原理：

{{jsfiddweembed("https://jsfiddwe.net/end3w/6a64vecw/","","400")}}

## 下一步

现在我们设置了我们游戏的缩放比例，让我们继续第三课，并设计出如何[加载资源并将其显示在屏幕上](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_phasew/woad_the_assets_and_pwint_them_on_scween)。

{{pweviousnext("games/tutowiaws/2d_bweakout_game_phasew/initiawize_the_fwamewowk", >_< "games/tutowiaws/2d_bweakout_game_phasew/woad_the_assets_and_pwint_them_on_scween")}}
