---
title: 碰撞检测
slug: Games/Tutorials/2D_breakout_game_Phaser/Collision_detection
l10n:
  sourceCommit: 4483da6501d1c735a0e1ac1e95775e2fe1766dc3
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field", "Games/Tutorials/2D_breakout_game_Phaser/The_score")}}

这是 [Gamedev Phaser 教程](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser) 16 个步骤中的**第 10 步**。接下来要处理的是球和砖块之间的碰撞检测。幸运的是，我们可以使用物理引擎来检查单个对象之间（例如球和球拍）的碰撞，也可以检查一个对象与一组对象之间的碰撞。

## 砖块与球的碰撞检测

物理引擎让一切简单得多，我们只需添加两小段代码。首先，在 `update()` 方法中添加一行，用于检测球和砖块之间的碰撞，如下所示：

```js
class ExampleScene extends Phaser.Scene {
  // ...
  update() {
    this.physics.collide(this.ball, this.paddle);
    this.physics.collide(this.ball, this.bricks, (ball, brick) =>
      this.hitBrick(ball, brick),
    );
    this.paddle.x = this.input.x || this.scale.width * 0.5;
    // ...
  }
  // ...
}
```

球的位置会与组中所有砖块的位置进行计算。第三个可选参数是在发生碰撞时执行的函数。Phaser 调用该函数时会传入两个参数：第一个是我们明确传给 `collide` 方法的球，第二个是 `bricks` 组中与球发生碰撞的那一块砖。这里我们在名为 `hitBrick()` 的方法中实现相应行为。在 `ExampleScene` 类的末尾、结束花括号 `}` 之前创建这个新方法，如下所示：

```js
class ExampleScene extends Phaser.Scene {
  // ...
  hitBrick(ball, brick) {
    brick.destroy();
  }
}
```

就这样！重新加载代码，你应该会看到新的碰撞检测如预期般运行。

如果使用[纯 JavaScript](/zh-CN/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection)，你可能会以为需要自行编写更多计算代码来实现碰撞检测。这正是使用框架的好处：你可以把许多枯燥的代码交给 Phaser，专注于制作游戏中更有趣的部分。

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
  paddle;
  bricks;

  preload() {
    this.load.setBaseURL(
      "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser",
    );

    this.load.image("ball", "ball.png");
    this.load.image("paddle", "paddle.png");
    this.load.image("brick", "brick.png");
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

    this.initBricks();
  }
  update() {
    this.physics.collide(this.ball, this.paddle);
    this.physics.collide(this.ball, this.bricks, (ball, brick) =>
      this.hitBrick(ball, brick),
    );

    this.paddle.x = this.input.x || this.scale.width * 0.5;
    const ballIsOutOfBounds = !Phaser.Geom.Rectangle.Overlaps(
      this.physics.world.bounds,
      this.ball.getBounds(),
    );
    if (ballIsOutOfBounds) {
      // 游戏结束的逻辑
      location.reload();
    }
  }

  initBricks() {
    const bricksLayout = {
      width: 50,
      height: 20,
      count: {
        row: 3,
        col: 7,
      },
      offset: {
        top: 50,
        left: 60,
      },
      padding: 10,
    };

    this.bricks = this.add.group();
    for (let c = 0; c < bricksLayout.count.col; c++) {
      for (let r = 0; r < bricksLayout.count.row; r++) {
        const brickX =
          c * (bricksLayout.width + bricksLayout.padding) +
          bricksLayout.offset.left;
        const brickY =
          r * (bricksLayout.height + bricksLayout.padding) +
          bricksLayout.offset.top;

        const newBrick = this.add.sprite(brickX, brickY, "brick");
        this.physics.add.existing(newBrick);
        newBrick.body.setImmovable(true);
        this.bricks.add(newBrick);
      }
    }
  }

  hitBrick(ball, brick) {
    brick.destroy();
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

现在我们已经可以击中砖块并将其移除，这为游戏玩法增加了不错的内容。如果能统计被摧毁的砖块，并据此增加[得分](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/The_score)，就更好了。

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field", "Games/Tutorials/2D_breakout_game_Phaser/The_score")}}
