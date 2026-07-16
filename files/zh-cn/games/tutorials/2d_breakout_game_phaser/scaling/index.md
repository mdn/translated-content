---
title: 缩放
slug: Games/Tutorials/2D_breakout_game_Phaser/Scaling
l10n:
  sourceCommit: 4483da6501d1c735a0e1ac1e95775e2fe1766dc3
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework", "Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen")}}

这是 [Gamedev Phaser 教程](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser) 16 个步骤中的**第 2 步**。我们将处理缩放，也就是游戏画布如何在不同的屏幕尺寸上进行缩放。我们可以在初始化期间配置 `scale`，让游戏缩放以适应任意屏幕尺寸，这样之后就不用再担心它了。

## Phaser 的 scale 对象

`config` 对象的 `scale` 属性让我们能够设置游戏画布的缩放方式。请像下面这样更新你的 `config` 对象：

```js
const config = {
  // ...
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};
```

`scale` 中的 `mode` 属性提供了几个不同的选项，用于指定画布的缩放方式：

- `NO_SCALE`——不进行任何缩放（默认值）。
- `ENVELOP`——自动调整宽度和高度，以在保持长宽比的同时覆盖整个目标区域。它可能会超出目标尺寸。
- `FIT`——在保持长宽比不变的情况下缩放画布，使其适应可用空间。根据长宽比的不同，它可能无法覆盖整个空间。
- `HEIGHT_CONTROLS_WIDTH`——根据高度调整画布宽度。
- `WIDTH_CONTROLS_HEIGHT`——根据宽度调整画布高度。
- `RESIZE`——调整画布的可见区域大小，使其适应所有可用的*父级*空间，而不考虑长宽比。
- `EXPAND`——像 RESIZE 模式一样调整画布的可见区域大小，使其适应所有可用的*父级*空间，并像 FIT 模式一样缩放画布尺寸，使其适合可见区域。

另一个属性 `autoCenter` 负责在水平和垂直方向上对齐画布元素，因此无论尺寸如何，它都会始终将画布居中显示在屏幕上。

## 添加自定义画布背景颜色

我们还可以给画布添加自定义背景颜色，这样它就不会一直保持黑色。配置对象为此提供了 `backgroundColor` 属性，可以使用 CSS 颜色定义语法进行设置。请将以下行添加到你的 `config` 对象中：

```js
const config = {
  // ...
  backgroundColor: "#eeeeee",
};
```

## 比较你的代码

以下是你目前应该得到的结果，可以实时运行。若要查看其源代码，请点击“运行”按钮。

```html hidden
<script src="https://cdnjs.cloudflare.com/ajax/libs/phaser/3.90.0/phaser.js"></script>
```

```css hidden
* {
  padding: 0;
  margin: 0;
}
```

```js hidden
class ExampleScene extends Phaser.Scene {
  preload() {}
  create() {}
  update() {}
}

const config = {
  type: Phaser.CANVAS,
  width: 480,
  height: 320,
  scene: ExampleScene,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  backgroundColor: "#eeeeee",
};

const game = new Phaser.Game(config);
```

{{EmbedLiveSample("比较你的代码", "", 480, , , , , "allow-modals")}}

## 下一步

现在我们已经设置好了游戏的缩放，让我们继续第三课，并弄清楚如何[加载资源并将其显示在屏幕上](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen)。

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework", "Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen")}}
