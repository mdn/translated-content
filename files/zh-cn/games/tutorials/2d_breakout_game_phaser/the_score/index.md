---
title: 记分
slug: Games/Tutorials/2D_breakout_game_Phaser/The_score
l10n:
  sourceCommit: 4483da6501d1c735a0e1ac1e95775e2fe1766dc3
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Collision_detection", "Games/Tutorials/2D_breakout_game_Phaser/Win_the_game")}}

这是 [Gamedev Phaser 教程](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser) 16 个步骤中的**第 11 步**。在本文中，我们会给游戏添加一个记分系统。记分也可以让游戏更有趣——你可以尝试打破自己或朋友的最高分。

我们将使用一个单独的属性来存储分数，并用 Phaser 的 `text()` 方法将其显示在屏幕上。

## 新属性

在之前定义的属性后面添加两个新属性：

```js
class ExampleScene extends Phaser.Scene {
  // ……之前的属性定义……
  scoreText;
  score = 0;
  // ……类的其余部分……
}
```

## 将得分文本添加到游戏显示中

现在在 `create()` 方法的末尾添加这一行：

```js
this.scoreText = this.add.text(5, 5, "得分：0", {
  font: "18px Arial",
  color: "#0095dd",
});
```

`text()` 方法可以接受四个参数：

- 用于绘制文本的 x 和 y 坐标。
- 将要渲染的实际文本。
- 用于渲染文本的字体样式。

最后一个参数看起来很像 CSS 样式。在我们的例子中，得分文本将显示为蓝色，大小为 18 像素，并使用 Arial 字体。

## 当砖块被摧毁时更新得分

每当球击中砖块时，我们都会增加分数，并更新 `scoreText` 来显示当前得分。这可以通过 `setText()` 方法完成——将下面看到的两行新代码添加到 `hitBrick()` 方法中：

```js
class ExampleScene extends Phaser.Scene {
  // ...
  hitBrick(ball, brick) {
    brick.destroy();
    this.score += 10;
    this.scoreText.setText(`得分：${this.score}`);
  }
}
```

现在就完成了——重新加载你的 `index.html`，并检查每次击中砖块时得分都会更新。

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

我们现在有了一个得分系统，但是如果你无法获胜，那么玩游戏和记录分数又有什么意义呢？让我们看看如何添加胜利状态，让我们可以[赢得游戏](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/Win_the_game)。

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Collision_detection", "Games/Tutorials/2D_breakout_game_Phaser/Win_the_game")}}
