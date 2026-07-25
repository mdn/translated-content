---
title: 物理系统
slug: Games/Tutorials/2D_breakout_game_Phaser/Physics
l10n:
  sourceCommit: 4483da6501d1c735a0e1ac1e95775e2fe1766dc3
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball", "Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls")}}

这是 [Gamedev Phaser 教程](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser) 16 个步骤中的**第 5 步**。为了在游戏对象之间进行正确的碰撞检测，我们需要用到物理系统；本文将向你介绍 Phaser 中可用的内容，并演示一种典型的简单设置。

## 添加物理系统

Phaser 捆绑了三个不同的物理引擎——Arcade Physics、Impact Physics 和 Matter.js Physics——第四个选项 Box2D 则以商业插件的形式提供。对于我们这样的简单游戏，可以使用 Arcade Physics 引擎。我们不需要复杂的几何计算——毕竟，这只是一个球从墙壁和砖块上反弹的游戏。

首先，在游戏中配置 Arcade Physics 引擎。将 `physics` 属性添加到 `config` 对象中，如下所示：

```js
const config = {
  // ...
  physics: {
    default: "arcade",
  },
};
```

接下来，我们需要为小球启用物理系统——Phaser 对象默认不启用物理系统。在 `create()` 方法底部添加以下行：

```js
this.physics.add.existing(this.ball);
```

接下来，如果我们想让球在屏幕上移动，可以在它的 `body` 上设置 `velocity`。继续在 `create()` 底部添加以下行：

```js
this.ball.body.setVelocity(150, 150);
```

## 删除先前的更新指令

记得从 `update()` 方法中删除先前给 `x` 和 `y` 添加值的方式，也就是将它恢复为空状态：

```js
class ExampleScene extends Phaser.Scene {
  // ...
  update() {}
}
```

现在，我们会使用物理引擎正确处理这一点。

尝试重新加载 `index.html`。目前，物理引擎没有重力或摩擦力，因此球会以恒定速度沿给定方向移动。

## 玩转物理系统

你可以用物理系统做更多事情。例如，在 `create()` 中添加 `this.ball.body.gravity.y = 500;`，就会设置球的垂直重力。尝试将速度改为 `this.ball.body.setVelocity(150, -150);`，你会看到球向上发射，然后因重力向下拉动而落下。

这种功能只是冰山一角——有各种函数和变量可以帮助你操纵物理对象。查看官方的[物理系统文档](https://docs.phaser.io/phaser/concepts/physics/arcade)，并参阅使用 Arcade 和 Matter.js 物理系统的[大量示例](https://phaser.io/examples/v3.85.0/physics)。

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

现在我们可以转到下一课，看看如何让球[从墙壁反弹](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls)。

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball", "Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls")}}
