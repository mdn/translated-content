---
title: 赢得游戏
slug: Games/Tutorials/2D_breakout_game_Phaser/Win_the_game
l10n:
  sourceCommit: 4483da6501d1c735a0e1ac1e95775e2fe1766dc3
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/The_score", "Games/Tutorials/2D_breakout_game_Phaser/Extra_lives")}}

这是 [Gamedev Phaser 教程](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser) 16 个步骤中的**第 12 步**。在我们的游戏中实现获胜非常简单：如果你摧毁了所有砖块，那么你就赢了。

## 如何获胜？

将以下新代码添加到你的 `update()` 方法中：

```js
class ExampleScene extends Phaser.Scene {
  // ...
  update() {
    // ...
    if (this.bricks.countActive() === 0) {
      alert("你赢得了游戏，恭喜！");
      location.reload();
    }
  }
  // ...
}
```

我们使用 `this.bricks` 的 `countAlive()` 方法，统计仍然存在的砖块数量。如果没有存在的砖块了，那么我们就显示获胜消息，并在警告框被关闭后重新开始游戏。

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
  scoreText;
  score = 0;

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

    this.scoreText = this.add.text(5, 5, "Points: 0", {
      font: "18px Arial",
      color: "#0095dd",
    });
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
    if (this.bricks.countActive() === 0) {
      alert("你赢得了游戏，恭喜！");
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
    this.score += 10;
    this.scoreText.setText(`得分：${this.score}`);
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

失败和获胜都已经实现，所以我们游戏的核心玩法已经完成。现在来添加一些额外内容——我们会给玩家三条[生命](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/Extra_lives)，而不是一条。

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/The_score", "Games/Tutorials/2D_breakout_game_Phaser/Extra_lives")}}
