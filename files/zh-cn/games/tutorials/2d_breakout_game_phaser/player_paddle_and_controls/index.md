---
title: 玩家挡板和操控
slug: Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls", "Games/Tutorials/2D_breakout_game_Phaser/Game_over")}}

这是[使用 Phaser 创建打砖块游戏教程](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser) 12 个步骤中的**第 5 步**。现在球已经可以移动并从墙壁反弹，但很快就会让人觉得无聊——没有交互！我们需要引入游戏玩法，因此在本文中，我们将创建一个可以移动并用来击球的挡板。

## 渲染挡板

从框架的角度来看，挡板与球非常相似——我们需要添加一个属性来表示它，加载相应的图像资源，然后让它发挥作用。

### 加载挡板

首先，在 `ball` 属性之后添加游戏中要使用的 `paddle` 属性：

```js
class ExampleScene extends Phaser.Scene {
  ball;
  paddle;
  // ...
}
```

然后，在 `preload` 方法中添加以下新的 `load.image()` 调用，加载 `paddle` 图像：

```js
class ExampleScene extends Phaser.Scene {
  // ...
  preload() {
    this.load.image("ball", "img/ball.png");
    this.load.image("paddle", "img/paddle.png");
  }
  // ...
}
```

别忘了，此时你应该下载[挡板图像](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/paddle.png)，并将其保存到 `/img` 文件夹中。

### 渲染挡板并启用物理系统

接下来，我们将在 `create()` 方法中添加以下 `add.sprite()` 调用来初始化挡板——将它添加到方法的最底部：

```js
this.paddle = this.add.sprite(
  this.scale.width * 0.5,
  this.scale.height - 5,
  "paddle",
);
```

我们可以使用 `scale.width` 和 `scale.height` 的值，将挡板准确地放在想要的位置：`this.scale.width * 0.5` 就是屏幕的正中央。在我们的示例中，世界与画布大小相同，但对于横向卷轴游戏等其他类型的游戏，世界会更大，你可以调整它来创造有趣的效果。

你会注意到，此时重新加载 `index.html`，挡板会位于屏幕的最底部，位置太低了。为什么？因为计算位置所用的原点默认位于对象的中心。我们可以将原点改为挡板水平方向的中点、垂直方向的底部，这样就更容易将它放置在底部边缘。在刚才添加的代码之后添加以下一行：

```js
this.paddle.setOrigin(0.5, 1);
```

现在挡板已经位于我们想要的位置。为了让它与球发生碰撞，我们还需要为挡板启用物理系统。继续在 `create()` 方法的底部添加以下一行：

```js
this.physics.add.existing(this.paddle);
```

现在框架就可以在每一帧进行碰撞检测了。要启用挡板与球之间的碰撞检测，请在 `update()` 方法中添加 `collide()` 方法调用，如下所示：

```js
class ExampleScene extends Phaser.Scene {
  // ...
  update() {
    this.physics.collide(this.ball, this.paddle);
  }
}
```

第一个参数是我们关注的对象之一——球，第二个参数则是另一个对象——挡板。这段代码可以运行，但效果不完全符合预期——当球击中挡板时，挡板会掉出屏幕！我们只希望球从挡板反弹，而挡板保持在原位。我们可以将挡板的 `body` 设置为不可移动，这样它就不会在被球击中时移动。为此，请在 `create()` 方法的底部添加以下一行：

```js
this.paddle.body.setImmovable(true);
```

你还会注意到，球击中挡板后会开始水平移动，而不是反弹回去。要解决这个问题，我们还需要设置球本身的反弹系数（之前已经通过 `setCollideWorldBounds()` 设置了与墙壁碰撞时的反弹系数）。在 `create()` 方法中，紧接着 `ball.body.setCollideWorldBounds(true, 1, 1)` 那一行添加以下代码（我们希望将球的所有配置放在一起）：

```js
this.ball.body.setBounce(1);
```

现在它就能按预期工作了。

## 操控挡板

接下来的问题是我们还不能移动挡板。为了解决这个问题，我们可以使用系统的默认输入（根据平台使用鼠标或触摸），并将挡板的位置设置为 `input` 的位置。在 `update()` 方法中添加以下一行：

```js
this.paddle.x = this.input.x;
```

现在每一帧中，挡板的 `x` 位置都会根据输入的 `x` 位置进行调整。不过，游戏开始时，挡板并不位于中间，因为输入位置尚未定义。为了解决这个问题，我们可以在输入位置尚未定义时，将默认位置设为屏幕中间。将刚才添加的代码更新为：

```js
this.paddle.x = this.input.x || this.scale.width * 0.5;
```

如果你还没有这样做，请重新加载 `index.html` 并试试看！

## 定位球

挡板已经按预期工作了，现在让我们把球放在挡板上。这个过程与定位挡板非常相似——我们需要将球放在屏幕水平方向的中间、垂直方向的底部，并与底部留出一点距离。为了将球准确地放在想要的位置，我们会让原点位于球的正中央。找到现有的 `this.ball = this.add.sprite(...)` 那一行，将其替换为以下代码：

```js
this.ball = this.add.sprite(
  this.scale.width * 0.5,
  this.scale.height - 25,
  "ball",
);
```

速度几乎保持不变——我们只是将第二个参数的值从 150 改为 -150，这样球就会在游戏开始时向上移动，而不是向下移动。找到现有的 `this.ball.body.setVelocity()` 那一行，将其更新为：

```js
this.ball.body.setVelocity(150, -150);
```

现在球会从挡板的正中央开始移动。

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

  preload() {
    this.load.setBaseURL(
      "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser",
    );

    this.load.image("ball", "ball.png");
    this.load.image("paddle", "paddle.png");
  }
  create() {
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

我们可以移动挡板，并让球从挡板反弹了，但如果球仍然会从屏幕底部边缘反弹，这又有什么意义呢？让我们引入失败机制——也就是[游戏结束](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser/Game_over)逻辑。

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls", "Games/Tutorials/2D_breakout_game_Phaser/Game_over")}}
