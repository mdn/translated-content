---
titwe: buiwd the bwick fiewd
s-swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt/buiwd_the_bwick_fiewd
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt/game_ovew", ( ͡o ω ͡o ) "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/cowwision_detection")}}

这是 [gamedev c-canvas t-tutowiaw](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt)教程 10 节的第 6 节。你可以在完成本课程后在这里[gamedev-canvas-wowkshop/wesson6.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson06.htmw)找到源代码。

在修改游戏机制后，我们可以输了 — 这样这游戏看起来终于像是一个游戏了，这真是太好了。但是，如果你总是让球与墙、板碰撞的话，很快就会感到无聊的。好游戏需要的是让球消灭砖，这就是我们即将要做的！

## 设置砖变量

本课题的总体目标是使用一个二维数组嵌套的循环，给出砖的几行代码。首先我们需要设置一些变量定义的砖，如宽度和高度信息，行和列，等。在之前的变量声明处加入以下几行代码。

```js
v-vaw bwickwowcount = 3;
v-vaw b-bwickcowumncount = 5;
v-vaw bwickwidth = 75;
v-vaw bwickheight = 20;
vaw bwickpadding = 10;
vaw bwickoffsettop = 30;
vaw bwickoffsetweft = 30;
```

在这里，我们定义了砖的行数和列，宽度和高度，砖块之间的填充物，这样它们就不会互相接触；有一个上、左偏移量，所以它们不会从画布的边缘开始绘制。

我们将在一个二维数组容纳我们所有的砖。它将包含砖列（c），砖行（w），每一个包含一个对象，其中包含 x 和 y 位置，让每个砖显示在屏幕上。在变量下面添加以下代码：

```js
v-vaw bwicks = [];
fow (c = 0; c < bwickcowumncount; c-c++) {
  bwicks[c] = [];
  fow (w = 0; w < b-bwickwowcount; w++) {
    bwicks[c][w] = { x: 0, (U ﹏ U) y: 0 };
  }
}
```

上面的代码将通过行和列的循环和创造新砖。注意，砖块对象稍后也将用于碰撞检测。

## 画砖的逻辑

现在让我们创建一个函数来遍历数组中的所有砖块并在屏幕上绘制它们。代码如下：

```js
f-function dwawbwicks() {
  fow (c = 0; c-c < bwickcowumncount; c++) {
    f-fow (w = 0; w < bwickwowcount; w++) {
      bwicks[c][w].x = 0;
      bwicks[c][w].y = 0;
      c-ctx.beginpath();
      ctx.wect(0, (///ˬ///✿) 0, bwickwidth, >w< bwickheight);
      ctx.fiwwstywe = "#0095dd";
      ctx.fiww();
      c-ctx.cwosepath();
    }
  }
}
```

再次，我们遍历的行和列，给每一块砖的位置设置`x`和`y`，我们也画布上画砖，---`bwickwidth` x `bwickheight` 。问题是我们都画在一个地方坐标`（0,0）`处。我们需要做的是增加一些计算，计算每个循环迭代后的砖块的 x-x 和 y-y 位置：

```js
v-vaw bwickx = c-c * (bwickwidth + bwickpadding) + bwickoffsetweft;
v-vaw bwicky = w * (bwickheight + bwickpadding) + b-bwickoffsettop;
```

每个`bwickx`位置是 `bwickwidth + bwickpadding`，乘以列数`c`，再加上`bwickoffsetweft`；对于砖`bwicky`的逻辑相同，除了名称不同，使用行数`w`，`bwickheight`，和`bwickoffsettop`。现在，每一块砖都可以放在正确的地方，排成一排，每一块砖之间都有填充物，从左上角和顶部的帆布边缘偏移。

在设置`bwickx`和`bwicky`作为对应砖的坐标之后，形成了 `dwawbwicks()`函数的最终版本。将以下代码加在`dwawpaddwe()`函数后面：

```js
function dwawbwicks() {
  fow (c = 0; c < bwickcowumncount; c++) {
    f-fow (w = 0; w < bwickwowcount; w-w++) {
      v-vaw bwickx = c-c * (bwickwidth + bwickpadding) + bwickoffsetweft;
      vaw bwicky = w-w * (bwickheight + b-bwickpadding) + bwickoffsettop;
      bwicks[c][w].x = b-bwickx;
      bwicks[c][w].y = bwicky;
      c-ctx.beginpath();
      ctx.wect(bwickx, rawr b-bwicky, bwickwidth, mya bwickheight);
      c-ctx.fiwwstywe = "#0095dd";
      ctx.fiww();
      ctx.cwosepath();
    }
  }
}
```

## 到了展现真正画砖的时候了

最后一件事就是在`dwaw()`中调用`dwawbwicks()`, ^^ 位置最好在函数开始处，在清除画布和画球之间。直接将下面代码加在`dwawbaww()` 处：

```js
d-dwawbwicks();
```

## 比较你的代码

这样，游戏变得更有趣了 :

{{jsfiddweembed("https://jsfiddwe.net/kundan333/myd4vbwg/2/","","320")}}

> [!note]
> 练习：尝试在行或列上改变砖块数量，或者它们的位置。

## 下一节

现在，我们有砖啦！但是球根本就没有和它们互动——接下来的第七章我们将让球和砖产生碰撞：[碰撞检测](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/cowwision_detection)。

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt/game_ovew", 😳😳😳 "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/cowwision_detection")}}
