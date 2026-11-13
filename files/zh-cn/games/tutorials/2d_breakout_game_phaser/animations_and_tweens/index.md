---
title: 动画与补间
slug: Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens
l10n:
  sourceCommit: 6eae35bc64a49865a469ca29bc40e6993b9cb8cc
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Extra_lives", "Games/Tutorials/2D_breakout_game_Phaser/Buttons")}}

这是 [Gamedev Phaser 教程](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser) 16 个步骤中的**第 14 步**。我们将学习如何在游戏中实现 Phaser 动画和补间，让游戏画面更加生动，从而带来更优质、更有趣的体验。

## 动画

在 Phaser 中，可以从外部加载精灵表，并依次显示其中的帧来制作动画。例如，我们会让球在碰到物体时摆动。

首先，[获取精灵表](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/wobble.png)，并将其保存到你的 `/img` 目录中。

接下来，在 `preload()` 方法的末尾添加以下代码来加载精灵表：

```js
this.load.spritesheet("wobble", "img/wobble.png", {
  frameWidth: 20,
  frameHeight: 20,
});
```

我们加载的不再是球的单张图片，而是包含多张图片的精灵表。依次显示其中的图片，就能形成动画效果。`spritesheet()` 方法的额外参数指定了精灵表中每一帧的宽度和高度，让程序知道如何将图片切分为单独的帧。

## 加载动画

接下来，进入 `create()` 方法，找到加载和配置球精灵的代码块，在其下方添加 `anims.create()` 调用，如下所示：

```js
this.ball = this.add.sprite(
  this.scale.width * 0.5,
  this.scale.height - 25,
  "ball",
);
// ...
this.ball.anims.create({
  key: "wobble",
  frameRate: 24,
  frames: this.anims.generateFrameNumbers("wobble", {
    frames: [0, 1, 0, 2, 0, 1, 0, 2, 0],
  }),
});
```

要为对象添加动画，我们使用 `anims.create()` 方法，传入包含以下属性的对象：

- `key`：为动画选定的名称。
- `frameRate`：以每秒帧数（fps）表示的帧速率。这里的动画以 24 fps 播放，共有 9 帧，因此每秒会播放略少于三遍。
- `frames`：定义动画播放时帧的显示顺序的数组。再看看 `wobble.png`，你会发现它包含三帧。Phaser 会提取这些帧，并将它们的引用存储在数组的第 0、1 和 2 个位置。上面的数组表示依次显示第 0 帧、第 1 帧，再显示第 0 帧，依此类推。

## 当球击中球板时播放动画

在处理球与球板碰撞的 `physics.collide()` 调用中（即 `update()` 方法内的第一行，见下方），我们可以像处理 `hitBrick()` 方法那样，增加一个参数，指定每次碰撞时执行的函数。如下所示，更新 `update()` 方法中的第一行：

```js
class ExampleScene extends Phaser.Scene {
  // ...
  update() {
    this.physics.collide(this.ball, this.paddle, (ball, paddle) =>
      this.hitPaddle(ball, paddle),
    );
    this.physics.collide(this.ball, this.bricks, (ball, brick) =>
      this.hitBrick(ball, brick),
    );
    this.paddle.x = this.input.x || this.scale.width * 0.5;
    // ...
  }
  // ...
}
```

然后创建接收 `ball` 和 `paddle` 参数的 `hitPaddle()` 方法，在调用时播放摆动动画。将以下方法添加到 `hitBrick()` 方法的上方：

```js
class ExampleScene extends Phaser.Scene {
  // ...
  hitPaddle(ball, paddle) {
    this.ball.anims.play("wobble");
  }
  // ...
}
```

每当球击中球板时，动画就会播放。如果你觉得这样能让游戏看起来更好，也可以在 `hitBrick()` 方法中调用 `anims.play()`。

## 补间

动画会依次播放精灵表中的图像，而补间则会平滑地改变游戏世界中对象的属性，例如宽度或不透明度。

让我们添加一个补间，使砖块在被球击中后平滑消失。在 `hitBrick()` 方法中找到 `brick.destroy();`，并将其替换为以下代码：

```js
const destroyTween = this.tweens.add({
  targets: brick,
  ease: "Linear",
  repeat: 0,
  duration: 200,
  props: {
    scaleX: 0,
    scaleY: 0,
  },
  onComplete() {
    brick.destroy();
  },
});
destroyTween.play();
```

我们来看看这段代码的作用：

1. 定义补间时，需要指定目标对象的哪些属性要发生变化。这里我们希望砖块被球击中后不立即消失，而是将宽度和高度逐渐缩小到零。为此，我们调用 `tweens.add()`，将 `brick` 指定为 `targets`，并在 `props` 对象中指定要改变的 `scaleX` 和 `scaleY` 属性。
2. 还可以设置 `ease` 来指定缓动函数（这里是 `Linear`），用 `repeat` 指定补间的重复次数（`0` 表示不重复），并用 `duration` 指定补间完成所需的时间，单位为毫秒。
3. 可选的 `onComplete` 事件处理器定义了补间结束时执行的函数。
4. 最后，调用 `play()` 方法立即启动补间。

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
    this.load.spritesheet("wobble", "wobble.png", {
      frameWidth: 20,
      frameHeight: 20,
    });
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
    this.ball.anims.create({
      key: "wobble",
      frameRate: 24,
      frames: this.anims.generateFrameNumbers("wobble", {
        frames: [0, 1, 0, 2, 0, 1, 0, 2, 0],
      }),
    });

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
      `生命值：${this.lives}`,
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
    this.physics.collide(this.ball, this.paddle, (ball, paddle) =>
      this.hitPaddle(ball, paddle),
    );
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

  hitPaddle(ball, paddle) {
    this.ball.anims.play("wobble");
  }

  hitBrick(ball, brick) {
    const destroyTween = this.tweens.add({
      targets: brick,
      ease: "Linear",
      repeat: 0,
      duration: 200,
      props: {
        scaleX: 0,
        scaleY: 0,
      },
      onComplete() {
        brick.destroy();
      },
    });
    destroyTween.play();
    this.score += 10;
    this.scoreText.setText(`得分：${this.score}`);
  }

  ballLeaveScreen() {
    this.lives--;
    if (this.lives > 0) {
      this.livesText.setText(`生命值：${this.lives}`);
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

动画和补间让游戏画面更生动，但我们还可以继续完善游戏。在下一节中，我们将学习如何处理[按钮](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/Buttons)输入。

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Extra_lives", "Games/Tutorials/2D_breakout_game_Phaser/Buttons")}}
