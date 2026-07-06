---
title: 从墙壁反弹
slug: Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls
l10n:
  sourceCommit: 4483da6501d1c735a0e1ac1e95775e2fe1766dc3
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Physics", "Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls")}}

这是 [Gamedev Phaser 教程](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser) 16 个步骤中的**第 6 步**。现在已经介绍了物理效果，我们可以开始在游戏中实现碰撞检测——首先我们来看看墙壁。

## 从世界边界反弹

让球从墙壁反弹的最简单方法是告诉框架，我们要将 {{htmlelement("canvas")}} 元素的边界视为墙壁，不让球移出边界。在 Phaser 中，可以使用 `setCollideWorldBounds()` 方法轻松实现这一点。在现有的 `this.ball.body.setVelocity()` 方法调用之后添加此行：

```js
this.ball.body.setCollideWorldBounds(true, 1, 1);
```

`true` 告诉 Phaser 启用与世界边界的碰撞检测，而两个 `1` 分别是 x 轴和 y 轴上的反弹系数。这意味着当球碰到墙壁时，它会以碰到墙壁之前的相同速度反弹。再次尝试重新加载 index.html——现在你应该会看到球从所有墙壁反弹，并在画布区域内移动。

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
  ball;

  preload() {
    this.load.setBaseURL(
      "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser",
    );

    this.load.image("ball", "ball.png");
  }
  create() {
    this.ball = this.add.sprite(50, 50, "ball");
    this.physics.add.existing(this.ball);
    this.ball.body.setVelocity(150, 150);
    this.ball.body.setCollideWorldBounds(true, 1, 1);
  }
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
  physics: {
    default: "arcade",
  },
};

const game = new Phaser.Game(config);
```

{{EmbedLiveSample("比较你的代码", "", 480, , , , , "allow-modals")}}

## 下一步

现在开始看起来更像是一个游戏了，但我们还无法以任何方式操控它——是时候介绍[玩家挡板和操控](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls)了。

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Physics", "Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls")}}
