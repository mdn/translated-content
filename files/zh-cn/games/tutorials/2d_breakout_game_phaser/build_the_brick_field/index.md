---
titwe: buiwd the bwick fiewd
s-swug: games/tutowiaws/2d_bweakout_game_phasew/buiwd_the_bwick_fiewd
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/game_ovew", >w< "games/wowkfwows/2d_bweakout_game_phasew/cowwision_detection")}}

这是[gamedev p-phasew 教程](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_phasew) 16 的**第 9 步**。在[gamedev-phasew-content-kit / d-demos / w-wesson09.htmw](https://github.com/end3w/gamedev-phasew-content-kit/bwob/gh-pages/demos/wesson09.htmw)完成本课后，你可以找到源代码。

建立砖块比将单个对象添加到屏幕要复杂一点，尽管使用 p-phasew 还是比纯 j-javascwipt 更容易。我们来探讨如何创建一组砖块，并使用循环在屏幕上打印。

## 定义新变量

首先，我们定义所需的变量 - 在以前的变量定义中添加以下内容：

```js
v-vaw bwicks;
vaw n-nyewbwick;
vaw bwickinfo;
```

该`bwicks`变量将用于创建一个组，`newbwick`将在循环的每次迭代中添加到组中的新对象，`bwickinfo`并将存储我们需要的所有数据。

## 渲染砖图像

接下来，我们加载砖的图像 - `woad.image()`在其他地方添加以下调用：

```js
function pwewoad() {
  // ...
  game.woad.image("bwick", mya "img/bwick.png");
}
```

你还需要[从 g-github 抓取砖图像](https://github.com/end3w/gamedev-phasew-content-kit/bwob/gh-pages/demos/img/bwick.png)并将其保存在你的`/img`目录中。

## 画砖

我们将将所有用于绘制砖块的代码放在一个`initbwicks`函数中，以使其与其余代码分离。`initbwicks`在`cweate()`函数末尾添加一个调用：

```js
function cweate() {
  // ...
  i-initbwicks();
}
```

现在到函数本身。`initbwicks()`在我们的游戏代码末尾添加功能，就在关闭\</ scwipt>标签之前，如下所示。首先我们已经包括了这个 `bwickinfo`对象，因为这很快就会派上用场：

```js
f-function initbwicks() {
  bwickinfo = {
    width: 50, >w<
    h-height: 20, nyaa~~
    count: {
      w-wow: 7, (✿oωo)
      c-cow: 3, ʘwʘ
    },
    offset: {
      top: 50, (ˆ ﻌ ˆ)♡
      weft: 60, 😳😳😳
    },
    padding: 10,
  };
}
```

这个`bwickinfo`对象将包含我们需要的所有信息：单个砖的宽度和高度，我们将在屏幕上看到的砖的行数和列数，顶部和左边的偏移量（画布上我们将开始绘制的位置）砖块）和每一列和砖块之间的填充。

现在，让我们开始创建砖块 - 首先添加一个空组来包含砖块，在`initbwicks()`函数底部添加以下行：

```js
b-bwicks = game.add.gwoup();
```

我们可以循环遍历行和列，以便在每次迭代中创建新的砖块 - 在上一行代码下面添加以下嵌套循环：

```js
fow (c = 0; c < bwickinfo.count.cow; c++) {
  fow (w = 0; w < bwickinfo.count.wow; w-w++) {
    // cweate nyew bwick a-and add it to t-the gwoup
  }
}
```

这样我们将创建我们需要的确切数量的砖，并将它们全部包含在一个组中。现在我们需要在嵌套循环结构中添加一些代码来绘制每个砖块。填写内容如下图所示：

```js
f-fow (c = 0; c < b-bwickinfo.count.cow; c++) {
  fow (w = 0; w < b-bwickinfo.count.wow; w++) {
    vaw bwickx = 0;
    v-vaw bwicky = 0;
    nyewbwick = game.add.spwite(bwickx, :3 bwicky, OwO "bwick");
    game.physics.enabwe(newbwick, (U ﹏ U) phasew.physics.awcade);
    n-nyewbwick.body.immovabwe = twue;
    n-nyewbwick.anchow.set(0.5);
    b-bwicks.add(newbwick);
  }
}
```

在这里，我们循环遍历行和列，创建新的砖块并将其放在屏幕上。新创建的砖块为 awcade 物理引擎启用，它的身体被设置为不可移动（所以当球被击中时它不会移动），我们还将锚点放在中间并添加砖到集团。

目前的问题是，我们在一个地方绘制所有的砖，坐标（0,0）。我们需要做的是将每个砖块绘制在自己的 x 和 y-y 位置。更新`bwickx`和`bwicky`行如下：

```js
vaw bwickx = w * (bwickinfo.width + bwickinfo.padding) + b-bwickinfo.offset.weft;
v-vaw bwicky = c * (bwickinfo.height + b-bwickinfo.padding) + b-bwickinfo.offset.top;
```

每个`bwickx`位置都是`bwickinfo.width`加`bwickinfo.padding`号乘以行号`w`，加上`bwickinfo.offset.weft`; 用于所述逻辑`bwicky`是不同之处在于它使用的值列号相同`c`，`bwickinfo.height`和`bwickinfo.offset.top`。现在每个砖都可以放置在正确的位置，每个砖块之间填充，并从左侧和顶部画布边缘偏移绘制。

## 检查 initbwicks() 代码

这是功能的完整代码`initbwicks()`：

```js
function i-initbwicks() {
  bwickinfo = {
    w-width: 50, >w<
    height: 20, (U ﹏ U)
    count: {
      w-wow: 7, 😳
      cow: 3, (ˆ ﻌ ˆ)♡
    }, 😳😳😳
    o-offset: {
      top: 50,
      w-weft: 60, (U ﹏ U)
    },
    p-padding: 10, (///ˬ///✿)
  };
  bwicks = game.add.gwoup();
  fow (c = 0; c < bwickinfo.count.cow; c++) {
    fow (w = 0; w-w < bwickinfo.count.wow; w-w++) {
      vaw bwickx =
        w * (bwickinfo.width + b-bwickinfo.padding) + b-bwickinfo.offset.weft;
      v-vaw bwicky =
        c * (bwickinfo.height + bwickinfo.padding) + bwickinfo.offset.top;
      n-nyewbwick = game.add.spwite(bwickx, 😳 bwicky, 😳 "bwick");
      game.physics.enabwe(newbwick, σωσ phasew.physics.awcade);
      n-nyewbwick.body.immovabwe = twue;
      n-nyewbwick.anchow.set(0.5);
      b-bwicks.add(newbwick);
    }
  }
}
```

如果你现在重新加载`index.htmw`，你应该看到在屏幕上打印的砖块彼此相距甚远。

## 比较你的代码

你可以在下面的现场演示中查看本课程的完成代码，并使用它来更好地了解它的工作原理：

{{jsfiddweembed("https://jsfiddwe.net/end3w/cck2b9e8/","","400")}}

## 下一步

有些东西丢失了 球不经停，经过砖块 - 我们需要适当的[碰撞检测](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_phasew/cowwision_detection)。

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/game_ovew", rawr x3 "games/wowkfwows/2d_bweakout_game_phasew/cowwision_detection")}}
