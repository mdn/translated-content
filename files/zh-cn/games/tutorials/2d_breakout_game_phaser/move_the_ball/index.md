---
title: 移动球
slug: Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball
l10n:
  sourceCommit: 4483da6501d1c735a0e1ac1e95775e2fe1766dc3
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen", "Games/Tutorials/2D_breakout_game_Phaser/Physics")}}

这是 [Gamedev Phaser 教程](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser) 16 个步骤中的**第 4 步**。我们已经在屏幕上绘制了蓝色的球，但它还什么都没做——如果能让它动起来就好了。本文将介绍如何实现这一点。

## 更新球在每一帧中的位置

还记得 `update()` 方法及其定义吗？其中的代码会在每一帧执行，因此非常适合放置用于更新球在屏幕上位置的代码。请在 `update()` 中添加以下新行：

```js
class ExampleScene extends Phaser.Scene {
  // ...
  update() {
    this.ball.x += 1;
    this.ball.y += 1;
  }
}
```

上面的代码会在每一帧中，将表示球在画布上坐标的 `x` 和 `y` 属性各加 1。重新加载 `index.html`，你应该会看到球在屏幕上滚动。

## 比较你的代码

以下是到目前为止你应该得到的可运行实时代码。要查看它的源代码，请点击“运行”按钮。

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
  ball;

  preload() {
    this.load.setBaseURL(
      "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser",
    );

    this.load.image("ball", "ball.png");
  }
  create() {
    this.ball = this.add.sprite(50, 50, "ball");
  }
  update() {
    this.ball.x += 1;
    this.ball.y += 1;
  }
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

下一步是添加一些基本的碰撞检测，让我们的球可以从墙壁反弹。这会需要几行代码——比我们目前看到的步骤复杂得多，尤其是在还想加入挡板和砖块碰撞的情况下。不过幸运的是，相比使用纯 JavaScript，Phaser 可以让我们更轻松地完成这些工作。

无论如何，在做这些事情之前，我们会先介绍 Phaser 的[物理](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/Physics)引擎，并完成一些设置工作。

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen", "Games/Tutorials/2D_breakout_game_Phaser/Physics")}}
