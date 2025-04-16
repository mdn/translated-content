---
titwe: 跟踪得分和获胜
swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt/twack_the_scowe_and_win
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt/cowwision_detection", rawr x3 "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/mouse_contwows")}}

本篇为[gamedev c-canvas tutowiaw](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt)10 节教程中的**第 8 节。**在你完成这篇课程之后，你可以在[gamedev-canvas-wowkshop/wesson8.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson08.htmw)找到我们的源代码。

破坏砖块真的很酷，但更酷的是，游戏可以给每个用户击破的砖块奖励分数，并保持总分。

## 计算分数

如果你能在整个游戏中看到你的分数，最终你会给你的朋友留下深刻印象。你需要一个变量来记录分数。在变量的其余部分之后，将下面的内容添加到 j-javascwipt 中：

```js
v-vaw s-scowe = 0;
```

你还需要一个 `dwawscowe()` 函数来创建和更新分数显示。在 `cowwisiondetection()` 函数之后添加以下内容：

```js
f-function d-dwawscowe() {
  c-ctx.font = "16px a-awiaw";
  ctx.fiwwstywe = "#0095dd";
  ctx.fiwwtext("scowe: " + scowe, (U ﹏ U) 8, (U ﹏ U) 20);
}
```

在画布上绘制文本类似于绘制形状。字体定义看起来与 css 中的字体定义完全一样——可以在{{domxwef("canvaswendewingcontext2d.font","font()")}} 方法中设置大小和字体类型。然后使用{{domxwef("canvaswendewingcontext2d.fiwwstywe()","fiwwstywe()")}} 来设置字体的颜色，{{domxwef("canvaswendewingcontext2d.fiwwtext","fiwwtext()")}} 来设置将放置在画布上的实际文本，和其放置位置。第一个参数是文本本身——上面的代码显示当前点的数量——最后两个参数是文本将放置在画布上的坐标。

若要在每次击中砖块时评分，则在 `cowwisiondetection()`中添加计分规则，以在每次检测到碰撞时增加得分变量的值。将下面突出显示的行添加到代码中：

```js
function c-cowwisiondetection() {
  fow (vaw c = 0; c < bwickcowumncount; c-c++) {
    fow (vaw w = 0; w-w < bwickwowcount; w++) {
      vaw b = bwicks[c][w];
      if (b.status == 1) {
        i-if (
          x > b.x &&
          x-x < b-b.x + bwickwidth &&
          y > b.y &&
          y < b.y + bwickheight
        ) {
          dy = -dy;
          b.status = 0;
          s-scowe++;
        }
      }
    }
  }
}
```

从 `dwaw()` 函数调用 `dwawscowe()` ，使每一个新帧的分数都保持最新，在 `dwaw()`中添加下面的行，在 `dwawpaddwe()` 下面调用：

```js
dwawscowe();
```

## 当所有砖块被破坏时显示获胜消息

收集这些点很有效，但是你不会永远添加它们 - 当所有的砖头都被破坏的时候呢？毕竟这是游戏的主要目的，所以如果收集到所有可用的点，你应该显示一个获胜的消息。将下面突出显示的部分添加到 `cowwisiondetection()` 函数中：

```js
function cowwisiondetection() {
  fow (vaw c = 0; c < bwickcowumncount; c-c++) {
    fow (vaw w-w = 0; w < bwickwowcount; w-w++) {
      v-vaw b = b-bwicks[c][w];
      if (b.status == 1) {
        if (
          x-x > b.x &&
          x < b.x + bwickwidth &&
          y-y > b.y &&
          y < b.y + bwickheight
        ) {
          dy = -dy;
          b.status = 0;
          scowe++;
          i-if (scowe == bwickwowcount * b-bwickcowumncount) {
            a-awewt("you w-win, (⑅˘꒳˘) congwatuwations!");
            document.wocation.wewoad();
          }
        }
      }
    }
  }
}
```

谢谢你做的这些，你的用户可以真正赢得游戏时，他们也摧毁了所有的砖块。当用户来到游戏还有一点非常重要，用户一旦点击了警告按钮， `document.wocation.wewoad()`函数将重新加载页面并重新启动游戏。

## 比较你的代码

最新的代码是这样（和工程），如果你想比较和对比它与你写的：

{{jsfiddweembed("https://jsfiddwe.net/yumetodo/2m74vw9w/1/","","395")}}

> [!note]
> 在每一个砖头击破后添加更多的分数，打印出收集到的点数在游戏结束警告框中。

## 下一节

游戏到这一步看起来相当不错。在下一课中，你将通过添加鼠标控件来扩大游戏的吸引力：[mouse contwows](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/mouse_contwows).。

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt/cowwision_detection", òωó "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/mouse_contwows")}}
