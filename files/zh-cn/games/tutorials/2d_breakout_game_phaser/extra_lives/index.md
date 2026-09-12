---
title: 额外生命
slug: Games/Tutorials/2D_breakout_game_Phaser/Extra_lives
l10n:
  sourceCommit: 1a0be468b9e7c88a09ea3438a81341c4f6a619a6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Win_the_game", "Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens")}}

这是 [Gamedev Phaser 教程](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser) 16 个步骤中的**第 13 步**。在本文中，我们将实现一个生命系统，让玩家失去 3 条生命之前都能继续游戏，而不是仅失去一条生命后就结束，从而延长游戏乐趣。

## 新属性

在代码中现有属性的下方添加以下新属性：

```js
class ExampleScene extends Phaser.Scene {
  // ……前面的属性定义……
  lives = 3;
  livesText;
  lifeLostText;
  // ……类的其余部分……
}
```

它们分别存储生命数量、显示剩余生命数量的文本标签，以及玩家失去一条生命时显示在屏幕上的文本标签。

## 定义新的文本标签

文本的定义方式与我们在[得分](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/The_score)课程中所做的类似。在 `create()` 方法内现有的 `scoreText` 定义下方添加以下代码：

```js
this.livesText = this.add.text(this.scale.width - 5, 5, `生命：${this.lives}`, {
  font: "18px Arial",
  fill: "#0095dd",
});
this.livesText.setOrigin(1, 0);
this.lifeLostText = this.add.text(
  this.scale.width * 0.5,
  this.scale.height * 0.5,
  "失去生命，点击继续",
  { font: "18px Arial", fill: "#0095dd" },
);
this.lifeLostText.setOrigin(0.5, 0.5);
this.lifeLostText.visible = false;
```

`this.livesText` 和 `this.lifeLostText` 对象与 `this.scoreText` 很相似：它们定义了屏幕上的位置、要显示的文本和字体样式。前者通过 `setOrigin` 将锚点设在右上边缘，以与屏幕正确对齐；后者则居中显示。

`lifeLostText` 只会在失去生命时显示，因此其初始可见性设为 `false`。

### 消除文本样式的重复

你可能已经注意到，`scoreText`、`livesText` 和 `lifeLostText` 三个文本都使用了相同的样式。若要修改字体大小或颜色，就必须在多处修改。为了便于将来维护，可以创建一个单独的变量来存储样式。我们将它命名为 `textStyle`，并放在文本定义之前：

```js
const textStyle = { font: "18px Arial", fill: "#0095dd" };
```

现在可以在设置文本标签样式时使用这个变量。请更新代码，以变量替换多处重复的文本样式：

```js
this.scoreText = this.add.text(5, 5, "得分：0", textStyle);

this.livesText = this.add.text(
  this.scale.width - 5,
  5,
  `生命：${this.lives}`,
  textStyle,
);
this.livesText.setOrigin(1, 0);
this.lifeLostText = this.add.text(
  this.scale.width * 0.5,
  this.scale.height * 0.5,
  "失去生命，点击继续",
  textStyle,
);
this.lifeLostText.setOrigin(0.5, 0.5);
this.lifeLostText.visible = false;
```

这样，只需更改一个变量中的字体设置，就会应用到所有使用它的地方。

## 处理生命值的代码

要在游戏中实现生命值，先修改球越过边界时的行为。不要立即重新开始游戏：

```js
if (ballIsOutOfBounds) {
  // 游戏结束逻辑
  location.reload();
}
```

而是调用一个名为 `ballLeaveScreen()` 的新方法。删除上面所示的代码，替换为以下代码：

```js
if (ballIsOutOfBounds) {
  this.ballLeaveScreen();
}
```

我们希望每次球离开画布时都减少一条生命。在 `ExampleScene` 类的末尾添加 `ballLeaveScreen()` 方法定义：

```js
class ExampleScene extends Phaser.Scene {
  // ...
  ballLeaveScreen() {
    this.lives--;
    if (this.lives > 0) {
      this.livesText.setText(`生命：${this.lives}`);
      this.lifeLostText.visible = true;
      this.ball.body.reset(this.scale.width * 0.5, this.scale.height - 25);
      this.input.once(
        "pointerdown",
        () => {
          this.lifeLostText.visible = false;
          this.ball.body.setVelocity(150, -150);
        },
        this,
      );
    } else {
      // 游戏结束逻辑
      location.reload();
    }
  }
}
```

失去一条生命时，我们不会立刻显示警告，而是先从当前生命数中减去一条，并检查它是否仍大于零。若大于零，玩家还有生命可以继续游戏：他们会看到失去生命的提示，球和板子的位置会在屏幕上重置；下一次输入（点击或触摸）后，提示会隐藏，球会再次开始移动。

当可用生命数降至零时，游戏结束，并显示游戏结束提示。

## 事件

你可能注意到了上方代码块中的 `once` 方法调用，并想知道它的作用。`once()` 是 Phaser 的事件监听器：它会监听指定事件的下一次发生（本例中为指针按下事件），触发后便自动移除自身。这意味着在调用 `once` 后，回调中的代码只会运行一次。这正符合我们的需求：玩家点击或触摸屏幕后，只需隐藏一次失去生命提示，并重新启动球的运动。

## 比较你的代码

以下是到目前为止应得到的实时运行效果。要查看其源代码，请点击“运行”按钮。

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

  lives = 3;
  livesText;
  lifeLostText;

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

    const textStyle = { font: "18px Arial", fill: "#0095dd" };
    this.scoreText = this.add.text(5, 5, "得分：0", textStyle);

    this.livesText = this.add.text(
      this.scale.width - 5,
      5,
      `生命：${this.lives}`,
      textStyle,
    );
    this.livesText.setOrigin(1, 0);
    this.lifeLostText = this.add.text(
      this.scale.width * 0.5,
      this.scale.height * 0.5,
      "失去生命，点击继续",
      textStyle,
    );
    this.lifeLostText.setOrigin(0.5, 0.5);
    this.lifeLostText.visible = false;
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
      this.ballLeaveScreen();
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

  ballLeaveScreen() {
    this.lives--;
    if (this.lives > 0) {
      this.livesText.setText(`生命：${this.lives}`);
      this.lifeLostText.visible = true;
      this.ball.body.reset(this.scale.width * 0.5, this.scale.height - 25);
      this.input.once(
        "pointerdown",
        () => {
          this.lifeLostText.visible = false;
          this.ball.body.setVelocity(150, -150);
        },
        this,
      );
    } else {
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

生命机制让游戏变得容错率更高：失去一条生命后，你仍有两条生命可以继续游戏。接下来，让我们通过添加[动画和补间](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens)来丰富游戏的视觉与质感。

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Win_the_game", "Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens")}}
