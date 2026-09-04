---
title: 游戏结束
slug: Games/Tutorials/2D_breakout_game_Phaser/Game_over
l10n:
  sourceCommit: 4483da6501d1c735a0e1ac1e95775e2fe1766dc3
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls", "Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field")}}

这是 [Gamedev Phaser 教程](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser) 16 个步骤中的**第 8 步**。为了让游戏更加有趣，我们可以引入失败机制——如果你没有在球到达屏幕底部边缘之前击中它，游戏就会结束。

## 如何失败

为了提供失败机制，我们将禁用球与屏幕底部边缘的碰撞。在 `create()` 方法最顶部添加以下代码：

```js
this.physics.world.checkCollision.down = false;
```

这会让三面墙（顶部、左侧和右侧）将球弹回，但第四面墙（底部）会消失，如果板子没有接住球，球就会掉出屏幕。我们需要一种方法来检测这种情况并采取相应的操作。在 `update()` 方法的底部添加以下几行：

```js
const ballIsOutOfBounds = !Phaser.Geom.Rectangle.Overlaps(
  this.physics.world.bounds,
  this.ball.getBounds(),
);
if (ballIsOutOfBounds) {
  // 游戏结束逻辑
  alert("游戏结束！");
  location.reload();
}
```

添加这些代码行后，将检查球是否越过了世界（在我们的示例中是画布）的边界，然后显示警告。当你点击出现的警告框时，页面会重新加载，让你可以再次游玩。

> [!NOTE]
> 这里的用户体验相当粗糙，因为 [`alert()`](/zh-CN/docs/Web/API/Window/alert) 会显示系统对话框并阻塞游戏。在真正的游戏中，你可能会想使用 {{HTMLElement("dialog")}} 设计自己的模态对话框。
>
> 此外，我们稍后会添加一个[“开始”按钮](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/Buttons)，但在这里，我们的游戏会在页面加载后立即开始，因此你可能还没开始玩就已经“失败”了。为了避免烦人的对话框，从现在起我们会移除 `alert()` 调用。

## 比较你的代码

这是到目前为止你应该得到的实时运行效果。要查看其源代码，请点击“运行”按钮。

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
  paddle;

  preload() {
    this.load.setBaseURL(
      "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser",
    );

    this.load.image("ball", "ball.png");
    this.load.image("paddle", "paddle.png");
  }
  create() {
    this.physics.world.checkCollision.down = false;

    this.ball = this.add.sprite(
      this.scale.width * 0.5,
      this.scale.height - 25,
      "ball",
    );
    this.physics.add.existing(this.ball);
    this.ball.body.setVelocity(150, -150);
    this.ball.body.setCollideWorldBounds(true, 1, 1);
    this.ball.body.setBounce(1);

    this.paddle = this.add.sprite(
      this.scale.width * 0.5,
      this.scale.height - 5,
      "paddle",
    );
    this.paddle.setOrigin(0.5, 1);
    this.physics.add.existing(this.paddle);
    this.paddle.body.setImmovable(true);
  }
  update() {
    this.physics.collide(this.ball, this.paddle);
    this.paddle.x = this.input.x || this.scale.width * 0.5;
    const ballIsOutOfBounds = !Phaser.Geom.Rectangle.Overlaps(
      this.physics.world.bounds,
      this.ball.getBounds(),
    );
    if (ballIsOutOfBounds) {
      // 游戏结束逻辑
      location.reload();
    }
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
  physics: {
    default: "arcade",
  },
};

const game = new Phaser.Game(config);
```

{{EmbedLiveSample("比较你的代码", "", 480, , , , , "allow-modals")}}

## 下一步

现在基本玩法已经就位，让我们通过引入可击碎的砖块来让游戏更有趣——是时候[构建砖块区域](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field)了。

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls", "Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field")}}
