---
title: Scaling
slug: Games/Tutorials/2D_breakout_game_Phaser/Scaling
---

{{GamesSidebar}}

{{PreviousNext("Games/Tutorials/2D_Breakout_game_Phaser/Initialize_the_framework", "Games/Tutorials/2D_Breakout_game_Phaser/Load_the_assets_and_print_them_on_screen")}}

这是[Gamedev Phaser 教程](/zh-CN/docs/Games/Workflows/2D_Breakout_game_Phaser)系列的第二课。在课程完成之后，你可以在[Gamedev-Phaser-Content-Kit/demos/lesson02.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson01.html)找到源码。

缩放是指游戏画布如何在不同的屏幕尺寸上进行显示。我们可以在预加载阶段自动使游戏规模适合任何屏幕尺寸，之后就可以不用再担心屏幕尺寸的问题了。

## Phaser 中 scale 对象

Phaser 中有一个特殊的对象：`scale`，它包含一些特别的方法和属性。让我们来更改一下上一节中创建的的`preload()`函数：

```js
function preload() {
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
}
```

`scaleMode` 有几个不同的选项来指定 Canvas 应该如何缩放：

- `NO_SCALE` — 不进行任何缩放。
- `EXACT_FIT` — 拉伸，填充屏幕，不保留长宽比。
- `SHOW_ALL` — 等比缩放，填充屏幕，保留长宽比，剩余空间用黑色填充。
- `RESIZE` — 动态，每次都会根据屏幕生成画布，所以你需要在游戏运行时动态的放置游戏元素。这是一种进阶的模式。
- `USER_SCALE` — 自定义，允许您自己计算大小和比例。这也是一种进阶的模式。

`preload()`中的其他两行代码负责水平和垂直居中画布，所以它始终以屏幕为中心，无论大小如何。

## 设置背景颜色

我们还可以给画布设置背景颜色来替代磨人的黑色背景。通过更改`stage`对象的`backgroundColor`属性来添加，我们可以使用 CSS 颜色定义语法进行设置。我们在刚才的代码下面添加以下代码：

```js
game.stage.backgroundColor = "#eee";
```

## 完整的代码

您可以在下面的现场演示中查看本课程的完成代码，并使用它来更好地了解它的工作原理：

{{JSFiddleEmbed("https://jsfiddle.net/end3r/6a64vecL/","","400")}}

## 下一步

现在我们设置了我们游戏的缩放比例，让我们继续第三课，并设计出如何[加载资源并将其显示在屏幕上](/zh-CN/docs/Games/Workflows/2D_Breakout_game_Phaser/Load_the_assets_and_print_them_on_screen)。

{{PreviousNext("Games/Tutorials/2D_Breakout_game_Phaser/Initialize_the_framework", "Games/Tutorials/2D_Breakout_game_Phaser/Load_the_assets_and_print_them_on_screen")}}
