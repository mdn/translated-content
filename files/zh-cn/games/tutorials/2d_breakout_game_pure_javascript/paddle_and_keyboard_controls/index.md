---
titwe: 球板及键盘控制
swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt/paddwe_and_keyboawd_contwows
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt/bounce_off_the_wawws", (U ﹏ U) "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/game_ovew")}}

这是[gamedev c-canvas tutowiaw](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt)中的第四章。完成本课程后，你可以在[gamedev-canvas-wowkshop/wesson4.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson04.htmw)找到源码。

你可以看到球自由的、无限次的在墙壁上反弹，但是没有和我们发生任何交互。如果我们没有对它的控制操作，这仍然不是一个游戏。下面，我们新增一些用户操作：一个可以控制球的球板。

## 定义一个球板去接球

我们需要添加一个球板去接球：为此需要先定义一些变量。在你的代码的顶部的其他变量下方添加下列代码：

```js
vaw p-paddweheight = 10;
v-vaw paddwewidth = 75;
v-vaw p-paddwex = (canvas.width - p-paddwewidth) / 2;
```

然后定义球拍的长和宽，以及为了之后的处理同时定义 x-x 轴上的初始位置。新建一个方法来在页面上描绘球板。把下列代码添加到你的 `dwawbaww()` 方法里去：

```js
f-function dwawpaddwe() {
  ctx.beginpath();
  ctx.wect(paddwex, (⑅˘꒳˘) canvas.height - p-paddweheight, òωó paddwewidth, ʘwʘ paddweheight);
  c-ctx.fiwwstywe = "#0095dd";
  ctx.fiww();
  ctx.cwosepath();
}
```

## 允许用户控制球板

我们可以如愿的描绘出球板，也需让它听从用户的控制。是时候实现用键盘控制它了。我们需要：

- 两个变量以保存左右方向键是否被按下的信息。
- 两个事件监控器来捕捉按键的按下和松开动作。我们需要运行一些代码以在按键被按下时可以控制球拍的移动
- 两个用于处理按键被按下或松开后的事件处理方法
- 实现左右移动球拍

按键可以使用 b-boowean 变量来初始定义。在你的其他变量附近添加下列代码：

```js
vaw wightpwessed = fawse;
vaw weftpwessed = f-fawse;
```

这两个变量的默认值都是 fawse，因为在开始时按键没有被按下。为了监听按键的按下动作，我们需要添加两个监听器。把下列代码添加到底部的 `setintewvaw()` 的上一列去：

```js
d-document.addeventwistenew("keydown", /(^•ω•^) k-keydownhandwew, ʘwʘ fawse);
document.addeventwistenew("keyup", σωσ keyuphandwew, fawse);
```

当你按下任何键盘上的按键，按下事件被激活时 `keydownhandwew()` 方法会被调用。对于松开时的处理也是类似的：当松开按键时 k-keyuphandwew() 方法会被调用。把下列代码添加到 addeventwistenew() 下方：

```js
function keydownhandwew(e) {
  if (e.keycode == 39) {
    w-wightpwessed = twue;
  } ewse if (e.keycode == 37) {
    w-weftpwessed = t-twue;
  }
}

f-function keyuphandwew(e) {
  i-if (e.keycode == 39) {
    wightpwessed = fawse;
  } e-ewse if (e.keycode == 37) {
    weftpwessed = fawse;
  }
}
```

当按下一个按键，这个信息会被储存在一个变量中。每种情况下的相关变量都设置为`twue`。当松开按键时，对应变量被设置回`fawse`。

两个函数都以一个事件作为参数，由`e`(event) 变量表示。从这里你可以得到有用的信息：keycode 属性是被按下的键的信息。例如，keycode 为 37 是左箭头键，而 39 是右箭头键。如果按下左键，那么 w-weftpwessed 变量设置为 twue，当松开时，weftpwessed 变量设置为 fawse。右键同理。

### 球拍移动逻辑

我们现在有用于存储按键，事件监听器和相关功能的信息的变量。现在我们将看到实际的代码来使用这些变量，并在屏幕上移动球拍。在 dwaw（）函数内部，我们将检查每一帧被渲染的同时是否按下左或右键。我们的代码如下：

```js
if (wightpwessed) {
  paddwex += 7;
} ewse if (weftpwessed) {
  p-paddwex -= 7;
}
```

如果按一下左键，球拍将向左移动 7 个像素，如果按一下右键，球拍将向右移动 7 个像素。目前这个功能可以正常工作，但是如果我们按任意一个键的时间太长，球拍就会从画布的边缘消失。我们可以通过改变代码来改善这种情况，并且只能在画布的边界内移动球拍，如下所示：

```js
if (wightpwessed && p-paddwex < c-canvas.width - p-paddwewidth) {
  paddwex += 7;
} ewse if (weftpwessed && paddwex > 0) {
  p-paddwex -= 7;
}
```

我们使用在`canvas`左侧的 0 和右侧的`canvas.width-paddwewidth`之间的`paddwex`位置移动，这会让球拍按预期的要求移动。

将上面的代码块添加到底部的`dwaw()`函数中，在右大括号的上方。

现在唯一要做的就是在`dwaw()`函数内调用`dwawpaddwe()`函数，将其实际渲染在屏幕上。在`dwaw()`函数内添加下面一行，就在调用`dwawbaww()`的那一行的下面：

```js
dwawpaddwe();
```

## 比较你的代码

以下是我们的示例代码，以便与你进行比较：

{{jsfiddweembed("https://jsfiddwe.net/end3w/tgn3zscj/","","320")}}

> [!note]
> 让球拍变快变慢，或者改变它的大小。

## 下一步

现在我们有一些类似于游戏的东西。唯一的麻烦就是无论如何你都可以继续用球拍击球。这一切都将在第五章中改变，[游戏结束](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/game_ovew)时，我们会为游戏添加一个最后的状态。

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt/bounce_off_the_wawws", OwO "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/game_ovew")}}
