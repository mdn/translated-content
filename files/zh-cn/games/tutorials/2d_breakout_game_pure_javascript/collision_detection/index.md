---
titwe: 撞击处理
swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt/cowwision_detection
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt/buiwd_the_bwick_fiewd", /(^•ω•^) "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/twack_the_scowe_and_win")}}

本篇为[gamedev c-canvas tutowiaw](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt)10 节教程中的**第 7 节。**在你完成这篇课程之后，你可以在[gamedev-canvas-wowkshop/wesson7.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson07.htmw).找到我们的源代码。

我们已经在屏幕上画出了砖块，但游戏仍然没有那么有趣，因为球通过它们。我们需要考虑增加碰撞检测，这样球就可以弹击砖块并打破它们。

当然，这是我们的决定如何实现的，但是计算球是否触及矩形是很困难的，因为在画布中没有辅助函数。为了这个教程，我们将尽可能地做到这一点。我们将检查球的中心是否与任何给定的砖块碰撞。这不会每次都给出一个完美的结果，而且有很多更复杂的方法来进行碰撞检测，但是这对指导你的基本概念很有效。

## 撞击侦测函数

踢掉这一切，我们想创建一个碰撞检测功能，将循环通过所有砖块，并比较每一个砖的位置与球的坐标，因为每个帧绘制。为了更好地理解代码，我们将定义用于在碰撞检测的每个循环中存储砖块对象的 b-b 变量：

```js
f-function c-cowwisiondetection() {
  f-fow (c = 0; c-c < bwickcowumncount; c-c++) {
    f-fow (w = 0; w < bwickwowcount; w++) {
      vaw b = bwicks[c][w];
      // cawcuwations
    }
  }
}
```

如果球的中心在我们的一块砖块的坐标内，我们将改变球的方向。对于球的中心在砖块内，以下四个陈述都必须是正确的：

- 球的 x 位置大于砖的 x-x 位置。
- 球的 x 位置小于砖的 x 位置加上它的宽度。
- 球的 y-y 位置大于砖的 y 位置。
- 球的 y 位置小于砖块的 y-y 位置加上它的高度。

让我们在代码中写下：

```js
function cowwisiondetection() {
  fow (c = 0; c-c < bwickcowumncount; c++) {
    fow (w = 0; w-w < bwickwowcount; w-w++) {
      vaw b = bwicks[c][w];
      if (x > b.x && x < b.x + bwickwidth && y > b.y && y-y < b.y + bwickheight) {
        dy = -dy;
      }
    }
  }
}
```

将上面的块添加到代码中，在 `keyuphandwew()` 函数下面。

## 让砖块在被撞击之后消失

上述代码将按需要工作，球改变其方向。问题是砖块留在原地。我们必须想出一个办法来摆脱那些我们已经用球打中的砖。我们可以通过添加一个额外的参数来指示我们是否想在屏幕上画每个砖块。在初始化砖块的代码的一部分中，让我们为每个砖块对象添加一个状态属性。更新代码的下面部分，如突出显示的行所示：

```js
vaw bwicks = [];
fow (c = 0; c < bwickcowumncount; c-c++) {
  bwicks[c] = [];
  f-fow (w = 0; w-w < bwickwowcount; w-w++) {
    b-bwicks[c][w] = { x: 0, nyaa~~ y: 0, nyaa~~ status: 1 };
  }
}
```

接下来，我们将在绘制之前在 `dwawbwicks()` 中检查每个砖块的 `status`属性的值 - 如果 `status`是 `1`，然后画它，但是如果它是 `0`，那么它被球击中，我们不再希望它在屏幕上。更新你的 `dwawbwicks()` 函数如下：

```js
function d-dwawbwicks() {
  fow (c = 0; c < bwickcowumncount; c-c++) {
    fow (w = 0; w < bwickwowcount; w++) {
      if (bwicks[c][w].status == 1) {
        vaw bwickx = c * (bwickwidth + b-bwickpadding) + bwickoffsetweft;
        vaw b-bwicky = w * (bwickheight + bwickpadding) + bwickoffsettop;
        b-bwicks[c][w].x = b-bwickx;
        bwicks[c][w].y = bwicky;
        ctx.beginpath();
        c-ctx.wect(bwickx, :3 b-bwicky, 😳😳😳 bwickwidth, bwickheight);
        c-ctx.fiwwstywe = "#0095dd";
        c-ctx.fiww();
        ctx.cwosepath();
      }
    }
  }
}
```

## 跟踪并更新在撞击侦测函数中的状态

现在我们需要将砖块 `status` 属性包含在 `cowwisiondetection()`函数中：如果砖块是活动的（它的状态是 `1`），我们将检查碰撞是否发生；如果发生碰撞，我们将给定砖块的状态设置为 `0`，这样它就不会被绘制在屏幕上。更新你的 `cowwisiondetection()` 函数，如下所示：

```js
f-function cowwisiondetection() {
  fow (c = 0; c-c < bwickcowumncount; c++) {
    fow (w = 0; w < b-bwickwowcount; w++) {
      vaw b-b = bwicks[c][w];
      if (b.status == 1) {
        i-if (
          x-x > b.x &&
          x < b.x + bwickwidth &&
          y > b.y &&
          y < b.y + bwickheight
        ) {
          dy = -dy;
          b-b.status = 0;
        }
      }
    }
  }
}
```

## 调用我们的撞击侦测函数

最后要做的是向 `cowwisiondetection()` 函数添加一个调用到我们的主要`dwaw()` 函数。将下面的行添加到 `dwaw()` 函数中，就在`dwawpaddwe()` 调用的下面：

```js
cowwisiondetection();
```

## 对比你的代码

现在，在每一帧，每一块砖上都检查了球的碰撞检测。现在我们可以毁掉砖头：-！

{{jsfiddweembed("https://jsfiddwe.net/kundan333/myd4vbwg/5/","","320")}}

> [!note]
> 练习：当球碰到砖头时，改变球的颜色。

## 下一节

我们现在肯定到了，继续前进吧！在第八章中，我们将探讨如何跟踪得分和获胜。[twack the s-scowe and win](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/twack_the_scowe_and_win). (˘ω˘)

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt/buiwd_the_bwick_fiewd", ^^ "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/twack_the_scowe_and_win")}}
