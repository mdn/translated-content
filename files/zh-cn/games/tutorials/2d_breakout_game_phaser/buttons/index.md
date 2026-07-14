---
title: 按钮
slug: Games/Tutorials/2D_breakout_game_Phaser/Buttons
l10n:
  sourceCommit: 6eae35bc64a49865a469ca29bc40e6993b9cb8cc
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens", "Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay")}}

这是 [Gamedev Phaser 教程](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser) 16 个步骤中的**第 15 步**。我们不必让游戏立即开始，而是可以添加一个玩家能点击的“开始”按钮，把是否开始游戏的决定交给玩家。让我们来看看怎么做。

## 新属性

我们需要一个属性来存储表示游戏当前是否正在进行的布尔值，还需要另一个属性来表示按钮。将以下代码行添加到其他属性定义的下方：

```js
class ExampleScene extends Phaser.Scene {
  // ... 之前的属性定义 ...
  playing = false;
  startButton;
  // ... 类的其余部分 ...
}
```

## 加载按钮精灵表

我们可以用加载球的摆动动画时相同的方式加载按钮精灵表。将以下代码添加到 `preload()` 方法的底部：

```js
this.load.spritesheet("button", "img/button.png", {
  frameWidth: 120,
  frameHeight: 40,
});
```

单个按钮帧宽 120 像素，高 40 像素。

你还需要[获取按钮精灵表](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/button.png)，并将其保存到你的 `/img` 目录中。

## 将按钮添加到游戏中

可以使用 `add.sprite` 方法将新按钮添加到游戏中。将以下代码行添加到 `create()` 方法的底部：

```js
this.startButton = this.add.sprite(
  this.scale.width * 0.5,
  this.scale.height * 0.5,
  "button",
  0,
);
```

除了我们传给其他 `add.sprite` 调用的参数（例如添加球和球拍时使用的参数）之外，这一次还会传入帧编号，也就是这里的 `0`。这表示精灵表的第一帧会用作按钮的初始外观。

为了让按钮响应鼠标点击等各种输入，我们需要在前面的 `add.sprite` 调用之后立即添加以下代码行：

```js
this.startButton.setInteractive();
this.startButton.on(
  "pointerover",
  () => {
    this.startButton.setFrame(1);
  },
  this,
);
this.startButton.on(
  "pointerdown",
  () => {
    this.startButton.setFrame(2);
  },
  this,
);
this.startButton.on(
  "pointerout",
  () => {
    this.startButton.setFrame(0);
  },
  this,
);
this.startButton.on(
  "pointerup",
  () => {
    this.startGame();
  },
  this,
);
```

首先，我们在按钮上调用 `setInteractive`，让它能够响应指针事件。然后，我们为按钮添加四个事件监听器：

- `pointerover`：当指针位于按钮上方时，将按钮的帧更改为 `1`，也就是精灵表的第二帧。
- `pointerdown`：当按钮被按下时，将按钮的帧更改为 `2`，也就是精灵表的第三帧。
- `pointerout`：当指针移出按钮时，将按钮的帧改回 `0`，也就是精灵表的第一帧。
- `pointerup`：当按钮被释放时，调用 `startGame` 方法来开始游戏。

现在，我们需要定义上面代码引用的 `startGame()` 方法：

```js
class ExampleScene extends Phaser.Scene {
  // ...
  startGame() {
    this.startButton.destroy();
    this.ball.body.setVelocity(150, -150);
    this.playing = true;
  }
}
```

当按钮被按下时，我们移除按钮，设置球的初始速度，并将 `playing` 属性设置为 `true`。

本节最后一步，回到你的 `create` 方法，找到 `this.ball.body.setVelocity(150, -150);` 这一行并删除它。我们只希望球在按钮被按下时移动，而不是在那之前移动！

## 在游戏开始前保持球拍静止

现在的效果已经符合预期，但游戏尚未开始时仍然可以移动球拍，这看起来有点奇怪。为了阻止这种情况，我们可以利用 `playing` 属性，让球拍只有在游戏开始后才能移动。为此，请像下面这样调整 `update()` 方法：

```js
class ExampleScene extends Phaser.Scene {
  // ...
  update() {
    // ...
    if (this.playing) {
      this.paddle.x = this.input.x || this.scale.width * 0.5;
    }
    // ...
  }
  // ...
}
```

这样一来，在所有内容都加载和准备完毕之后、真正开始游戏之前，球拍都无法移动。

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
    this.load.spritesheet("button", "button.png", {
      frameWidth: 120,
      frameHeight: 40,
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
      `生命：${this.lives}`,
      textStyle,
    );
    this.livesText.setOrigin(1, 0);
    this.lifeLostText = this.add.text(
      this.scale.width * 0.5,
      this.scale.height * 0.5,
      "失去一条生命，点击继续",
      textStyle,
    );
    this.lifeLostText.setOrigin(0.5, 0.5);
    this.lifeLostText.visible = false;

    this.startButton = this.add.sprite(
      this.scale.width * 0.5,
      this.scale.height * 0.5,
      "button",
      0,
    );
    this.startButton.setInteractive();
    this.startButton.on(
      "pointerover",
      () => {
        this.startButton.setFrame(1);
      },
      this,
    );
    this.startButton.on(
      "pointerdown",
      () => {
        this.startButton.setFrame(2);
      },
      this,
    );
    this.startButton.on(
      "pointerout",
      () => {
        this.startButton.setFrame(0);
      },
      this,
    );
    this.startButton.on(
      "pointerup",
      () => {
        this.startGame();
      },
      this,
    );
  }
  update() {
    this.physics.collide(this.ball, this.paddle, (ball, paddle) =>
      this.hitPaddle(ball, paddle),
    );
    this.physics.collide(this.ball, this.bricks, (ball, brick) =>
      this.hitBrick(ball, brick),
    );

    if (this.playing) {
      this.paddle.x = this.input.x || this.scale.width * 0.5;
    }

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

  startGame() {
    this.startButton.destroy();
    this.ball.body.setVelocity(150, -150);
    this.playing = true;
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
      // 游戏结束的逻辑
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

在本系列文章中我们要做的最后一件事是，为球从球拍上弹开的方式添加一些[随机性](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay)，让游戏玩法更加有趣。

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens", "Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay")}}
