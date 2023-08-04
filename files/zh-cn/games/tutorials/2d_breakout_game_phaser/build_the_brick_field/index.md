---
title: Build the brick field
slug: Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Game_over", "Games/Workflows/2D_Breakout_game_Phaser/Collision_detection")}}

这是[Gamedev Phaser 教程](/zh-CN/docs/Games/Workflows/2D_Breakout_game_Phaser) 16 的**第 9 步**。在[Gamedev-Phaser-Content-Kit / demos / lesson09.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson09.html)完成本课后，您可以找到源代码。

建立砖块比将单个对象添加到屏幕要复杂一点，尽管使用 Phaser 还是比纯 JavaScript 更容易。我们来探讨如何创建一组砖块，并使用循环在屏幕上打印。

## 定义新变量

首先，我们定义所需的变量 - 在以前的变量定义中添加以下内容：

```js
var bricks;
var newBrick;
var brickInfo;
```

该`bricks`变量将用于创建一个组，`newBrick`将在循环的每次迭代中添加到组中的新对象，`brickInfo`并将存储我们需要的所有数据。

## 渲染砖图像

接下来，我们加载砖的图像 - `load.image()`在其他地方添加以下调用：

```js
function preload() {
  // ...
  game.load.image("brick", "img/brick.png");
}
```

您还需要[从 Github 抓取砖图像](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/img/brick.png)并将其保存在您的`/img`目录中。

## 画砖

我们将将所有用于绘制砖块的代码放在一个`initBricks`函数中，以使其与其余代码分离。`initBricks`在`create()`函数末尾添加一个调用：

```js
function create() {
  // ...
  initBricks();
}
```

现在到函数本身。`initBricks()`在我们的游戏代码末尾添加功能，就在关闭\</ script>标签之前，如下所示。首先我们已经包括了这个 `brickInfo`对象，因为这很快就会派上用场：

```js
function initBricks() {
  brickInfo = {
    width: 50,
    height: 20,
    count: {
      row: 7,
      col: 3,
    },
    offset: {
      top: 50,
      left: 60,
    },
    padding: 10,
  };
}
```

这个`brickInfo`对象将包含我们需要的所有信息：单个砖的宽度和高度，我们将在屏幕上看到的砖的行数和列数，顶部和左边的偏移量（画布上我们将开始绘制的位置）砖块）和每一列和砖块之间的填充。

现在，让我们开始创建砖块 - 首先添加一个空组来包含砖块，在`initBricks()`函数底部添加以下行：

```js
bricks = game.add.group();
```

我们可以循环遍历行和列，以便在每次迭代中创建新的砖块 - 在上一行代码下面添加以下嵌套循环：

```js
for (c = 0; c < brickInfo.count.col; c++) {
  for (r = 0; r < brickInfo.count.row; r++) {
    // create new brick and add it to the group
  }
}
```

这样我们将创建我们需要的确切数量的砖，并将它们全部包含在一个组中。现在我们需要在嵌套循环结构中添加一些代码来绘制每个砖块。填写内容如下图所示：

```js
for (c = 0; c < brickInfo.count.col; c++) {
  for (r = 0; r < brickInfo.count.row; r++) {
    var brickX = 0;
    var brickY = 0;
    newBrick = game.add.sprite(brickX, brickY, "brick");
    game.physics.enable(newBrick, Phaser.Physics.ARCADE);
    newBrick.body.immovable = true;
    newBrick.anchor.set(0.5);
    bricks.add(newBrick);
  }
}
```

在这里，我们循环遍历行和列，创建新的砖块并将其放在屏幕上。新创建的砖块为 Arcade 物理引擎启用，它的身体被设置为不可移动（所以当球被击中时它不会移动），我们还将锚点放在中间并添加砖到集团。

目前的问题是，我们在一个地方绘制所有的砖，坐标（0,0）。我们需要做的是将每个砖块绘制在自己的 x 和 y 位置。更新`brickX`和`brickY`行如下：

```js
var brickX = r * (brickInfo.width + brickInfo.padding) + brickInfo.offset.left;
var brickY = c * (brickInfo.height + brickInfo.padding) + brickInfo.offset.top;
```

每个`brickX`位置都是`brickInfo.width`加`brickInfo.padding`号乘以行号`r`，加上`brickInfo.offset.left`; 用于所述逻辑`brickY`是不同之处在于它使用的值列号相同`c`，`brickInfo.height`和`brickInfo.offset.top`。现在每个砖都可以放置在正确的位置，每个砖块之间填充，并从左侧和顶部画布边缘偏移绘制。

## 检查 initBricks() 代码

这是功能的完整代码`initBricks()`：

```js
function initBricks() {
  brickInfo = {
    width: 50,
    height: 20,
    count: {
      row: 7,
      col: 3,
    },
    offset: {
      top: 50,
      left: 60,
    },
    padding: 10,
  };
  bricks = game.add.group();
  for (c = 0; c < brickInfo.count.col; c++) {
    for (r = 0; r < brickInfo.count.row; r++) {
      var brickX =
        r * (brickInfo.width + brickInfo.padding) + brickInfo.offset.left;
      var brickY =
        c * (brickInfo.height + brickInfo.padding) + brickInfo.offset.top;
      newBrick = game.add.sprite(brickX, brickY, "brick");
      game.physics.enable(newBrick, Phaser.Physics.ARCADE);
      newBrick.body.immovable = true;
      newBrick.anchor.set(0.5);
      bricks.add(newBrick);
    }
  }
}
```

如果您现在重新加载`index.html`，您应该看到在屏幕上打印的砖块彼此相距甚远。

## 比较你的代码

您可以在下面的现场演示中查看本课程的完成代码，并使用它来更好地了解它的工作原理：

{{JSFiddleEmbed("https://jsfiddle.net/end3r/cck2b9e8/","","400")}}

## 下一步

有些东西丢失了 球不经停，经过砖块 - 我们需要适当的[碰撞检测](/zh-CN/docs/Games/Workflows/2D_Breakout_game_Phaser/Collision_detection)。

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Game_over", "Games/Workflows/2D_Breakout_game_Phaser/Collision_detection")}}
