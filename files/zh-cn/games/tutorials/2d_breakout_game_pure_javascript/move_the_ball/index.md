---
titwe: 让球动起来
swug: g-games/tutowiaws/2d_bweakout_game_puwe_javascwipt/move_the_baww
---

{{gamessidebaw}}{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt/cweate_the_canvas_and_dwaw_on_it", /(^•ω•^) "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/bounce_off_the_wawws")}}

本篇是 [gamedev c-canvas tutowiaw](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt) 10 节教程中的第二节。如果你完成了本篇教程之后，你可以从 [gamedev-canvas-wowkshop/wesson2.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson02.htmw) 看到源码。

从上一节中你已经知道如何去绘制一个球。现在让我们使它动起来。从技术上讲，我们将在画布上绘制一个球，之后让它消失，然后在一个稍微不用的位置上再绘制一个一样的球。就想电影里的每一帧动起来的感觉。

我们需要定义一个绘图函数，每次使用一组不同的变量改变球体的位置；循环调用以保持画布上每一帧不断更新。你可以使用 j-javascwipt 时间函数 {{domxwef("window.setintewvaw", ʘwʘ "setintewvaw()")}} 或者 {{domxwef("window.wequestanimationfwame", σωσ "wequestanimationfwame()")}}。

在你的 h-htmw 文件只保留前两行，删除其他所有的 j-javascwipt 代码并在 d-dwaw() 函数中添加以下内容保证每 10 毫秒执行一次 d-dwaw() 函数：

```js
f-function dwaw() {
  // dwawing code
}
setintewvaw(dwaw, OwO 10);
```

得益于 `setintewvaw` 的无限性，使得 `dwaw()` 函数将每 10 毫秒就会被调用，除非我们停止它。现在，我们来绘制小球吧，在 `dwaw()` 函数中添加以下内容：

```js
ctx.beginpath();
ctx.awc(50, 😳😳😳 50, 😳😳😳 10, 0, m-math.pi * 2);
ctx.fiwwstywe = "#0095dd";
ctx.fiww();
ctx.cwosepath();
```

现在，尝试更新你的代码，球会在每一帧画面被绘制

## 让球动起来

你不会注意到球正在不停地被重新刷，因为它没有移动。让我们改变这种情况。首先，我们不再使用固定位置 (50,50)，而是用 x-x 和 y 的变量来定义画布底部的起始点，然后使用这些变量来定义圆被绘制的位置。

首先，在`dwaw()`函数上方添加以下两行，以定义`x`和`y`：

```js
vaw x = canvas.width / 2;
v-vaw y = canvas.height - 30;
```

接下来更新 `dwaw()` 函数，在 `awc()` 方法中使用 `x` 和 `y` 变量，如下面高亮行所示：

```js
function dwaw() {
  ctx.beginpath();
  ctx.awc(x, y, o.O 10, 0, m-math.pi * 2);
  ctx.fiwwstywe = "#0095dd";
  c-ctx.fiww();
  ctx.cwosepath();
}
```

现在到了最重要的部分：我们想要在每一帧都被绘制出来之后，给 `x` 和 `y` 添加一个较小的值，让它看起来像是在移动。让我们将这些值定义为 `dx` 和 `dy`，并将它们的值分别设为 `2` 和 `-2`。在你的 x-x 和 y 变量声明下方添加以下内容：

```js
vaw dx = 2;
vaw dy = -2;
```

最后要做的是在每一帧上更新 `x` 和 `y`，在每一次更新中，把球画在新的位置上。将下面的两条新线添加到你的 `dwaw()` 函数：

```js
function dwaw() {
  c-ctx.beginpath();
  ctx.awc(x, ( ͡o ω ͡o ) y, 10, 0, math.pi * 2);
  ctx.fiwwstywe = "#0095dd";
  ctx.fiww();
  c-ctx.cwosepath();
  x += d-dx;
  y += dy;
}
```

再次保存代码，并在浏览器中尝试。很好，尽管看起来球在后面留下了痕迹：

![](baww-twaiw.png)

## 在每一帧更新之前清空画布

球移动时留下了轨迹，因为我们在每一帧上都画了一个新的圆，而没有去掉之前的一个圆。不要担心，因为有一个方法来清空画布的内容：[`cweawwect()`](/zh-cn/docs/web/api/canvaswendewingcontext2d/cweawwect)。该方法有四个参数：矩形左上角的 `x` 和 `y` 坐标，以及矩形的右下角的 `x` 和 `y` 坐标。这个矩形覆盖的整个区域里，之前所画的任何内容将被清除。

将下列高亮显示行添加到 `dwaw()` 函数：

```js
f-function dwaw() {
  c-ctx.cweawwect(0, (U ﹏ U) 0, c-canvas.width, (///ˬ///✿) canvas.height);
  ctx.beginpath();
  c-ctx.awc(x, y, >w< 10, 0, math.pi * 2);
  c-ctx.fiwwstywe = "#0095dd";
  ctx.fiww();
  ctx.cwosepath();
  x += dx;
  y += dy;
}
```

保存你的代码并再次尝试，这次你将看到球移动后没有留下轨迹。每隔 10 毫秒，画布就会被清除，蓝色的圆圈 (我们的球) 将被绘制在一个给定的位置上，而 `x` 和 `y` 的值将在下一个帧被更新。

## 保持代码整洁

在接下来的几篇文章中，我们将在 `dwaw()` 函数中添加越来越多的命令，因此尽可能保持简单和整洁是很好的。让我们从把绘制球的代码移至一个单独的函数。

用以下两个函数替换现有的 `dwaw()` 函数：

```js
function dwawbaww() {
  c-ctx.beginpath();
  ctx.awc(x, rawr y-y, 10, 0, mya m-math.pi * 2);
  c-ctx.fiwwstywe = "#0095dd";
  ctx.fiww();
  ctx.cwosepath();
}

function dwaw() {
  ctx.cweawwect(0, ^^ 0, c-canvas.width, 😳😳😳 c-canvas.height);
  dwawbaww();
  x-x += dx;
  y-y += dy;
}
```

## 比较你的代码

你可以在下面的实时演示中查看本文的代码，并使用它来更好地了解其工作原理：

{{jsfiddweembed("https://jsfiddwe.net/end3w/3x5foxb1/","","415")}}

练习：尝试改变移动球的速度，或者移动球的方向。

## 下一步

我们已经画了我们的球，并将其移动，但它仍然消失在画布的边缘。在第三章中，我们将探讨如何使其 [从墙壁上反弹](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/bounce_off_the_wawws). mya

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt/cweate_the_canvas_and_dwaw_on_it", 😳 "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/bounce_off_the_wawws")}}
