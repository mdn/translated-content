---
title: 构建砖块区域
slug: Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Game_over", "Games/Tutorials/2D_breakout_game_Phaser/Track_the_score_and_win")}}

这是[使用 Phaser 创建打砖块游戏教程](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser) 12 个步骤中的**第 7 步**。让我们探索如何创建一组砖块，通过循环将它们绘制到屏幕上，并在球击中它们时将其移除。构建砖块区域比向屏幕添加单个对象稍微复杂一些，不过使用 Phaser 实现可能比使用纯 JavaScript 更简单。

## 新属性

首先，在之前的属性定义下方添加新的 `bricks` 属性：

```js
class ExampleScene extends Phaser.Scene {
  // ……之前的属性定义……
  bricks;
  // ……类的其余部分……
}
```

`bricks` 属性将用于创建一组砖块，让我们可以同时管理多个砖块。

## 渲染砖块图像

接下来，加载砖块图像——在其他 `load.image()` 调用下方添加以下调用：

```js
class ExampleScene extends Phaser.Scene {
  // ...
  preload() {
    // ...
    this.load.image("brick", "img/brick.png");
  }
  // ...
}
```

你还需要[下载砖块图像](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/brick.png)，并将其保存在你的 `/img` 目录中。

## 绘制砖块

我们会将绘制砖块的所有代码放在 `initBricks` 方法中，使其与其余代码分离。在 `create()` 方法末尾添加对 `initBricks` 的调用：

```js
class ExampleScene extends Phaser.Scene {
  // ...
  create() {
    // ...
    this.initBricks();
  }
  // ...
}
```

现在来编写方法本身。在 `ExampleScene` 类的末尾、右花括号 `}` 之前添加 `initBricks` 方法，如下所示。首先，添加 `bricksLayout` 对象，它很快就会派上用场：

```js
class ExampleScene extends Phaser.Scene {
  // ...
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
  }
}
```

`bricksLayout` 保存了我们需要的所有信息：单个砖块的宽度和高度、屏幕上砖块的行数和列数、顶部和左侧的偏移量（开始绘制砖块的画布位置），以及各行和各列砖块之间的间距。

现在，让我们开始创建砖块本身——首先，在 `initBricks()` 方法底部添加以下行，创建一个空组来容纳砖块：

```js
this.bricks = this.add.group();
```

我们可以循环遍历行和列，在每次迭代中创建一个新砖块——在上一行代码下方添加以下嵌套循环：

```js
for (let c = 0; c < bricksLayout.count.col; c++) {
  for (let r = 0; r < bricksLayout.count.row; r++) {
    // 创建新砖块并将其添加到组中
  }
}
```

这样，我们就能创建所需数量的砖块，并将它们全部放在一个组中。现在，需要在嵌套循环结构中添加一些代码来绘制每个砖块。按如下所示填入内容：

```js
for (let c = 0; c < bricksLayout.count.col; c++) {
  for (let r = 0; r < bricksLayout.count.row; r++) {
    const brickX = 0;
    const brickY = 0;

    const newBrick = this.add.sprite(brickX, brickY, "brick");
    this.physics.add.existing(newBrick);
    newBrick.body.setImmovable(true);
    this.bricks.add(newBrick);
  }
}
```

这里，我们循环遍历行和列，创建新砖块并将其放在屏幕上。为新创建的砖块启用 Arcade 物理引擎，将其物理体设置为不可移动（这样它就不会在被球击中时移动），然后将其添加到组中。

目前的问题是，所有砖块都绘制在同一个位置，即坐标 (0, 0) 处。我们需要将每个砖块绘制在各自的 x 和 y 位置。按如下所示更新 `brickX` 和 `brickY` 所在的行：

```js
const brickX =
  c * (bricksLayout.width + bricksLayout.padding) + bricksLayout.offset.left;
const brickY =
  r * (bricksLayout.height + bricksLayout.padding) + bricksLayout.offset.top;
```

每个 `brickX` 位置的计算方式是：将 `bricksLayout.width` 与 `bricksLayout.padding` 相加，乘以列号 `c`，再加上 `bricksLayout.offset.left`。`brickY` 的计算逻辑相同，只是使用行号 `r`、`bricksLayout.height` 和 `bricksLayout.offset.top`。现在，每个砖块都能放在正确的位置，砖块之间留有间距，整个砖块区域与画布左侧和顶部边缘之间也留有偏移量。

此时重新加载 `index.html`，你应该能看到砖块已绘制到屏幕上，彼此之间的间距均匀。

## 砖块与球的碰撞检测

接下来是另一个挑战——检测球与砖块之间的碰撞。幸运的是，我们不仅可以使用物理引擎检查两个单独对象（例如球和球板）之间的碰撞，还可以检查对象与组之间的碰撞。

首先，在 `update()` 方法中添加一行代码，检测球与砖块之间的碰撞，如下所示：

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

这里会将球的位置与组中所有砖块的位置进行比较。第三个参数是可选的，用于指定发生碰撞时执行的函数。Phaser 调用此函数时会传入两个参数：第一个是球，也就是我们显式传给 `collide` 方法的对象；第二个是砖块组中与球发生碰撞的那个砖块。这里，我们在名为 `hitBrick()` 的方法中实现相应行为。在 `ExampleScene` 类的末尾、右花括号 `}` 之前创建这个新方法，如下所示：

```js
class ExampleScene extends Phaser.Scene {
  // ...
  hitBrick(ball, brick) {
    brick.destroy();
  }
}
```

这样就完成了！重新加载代码，你应该能看到新的碰撞检测按预期工作。

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
      // 游戏结束逻辑
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

现在我们已经可以击中并移除砖块，这让游戏玩法更加丰富。如果能[记录分数并在所有砖块被摧毁时获胜](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/Track_the_score_and_win)，游戏就会更有趣。

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Game_over", "Games/Tutorials/2D_breakout_game_Phaser/Track_the_score_and_win")}}
