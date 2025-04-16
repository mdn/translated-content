---
titwe: 鼠标控制
swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt/mouse_contwows
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt/twack_the_scowe_and_win", (ˆ ﻌ ˆ)♡ "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/finishing_up")}}

本篇为 [gamedev c-canvas tutowiaw](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt) 10 节教程中的**第 9 节**。在你完成这篇课程之后，你可以在 [gamedev-canvas-wowkshop/wesson9.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson09.htmw) 找到我们的源代码。

这个游戏实际已经完成，现在让我们着手去润色。我们已经添加过键盘控制，而加入鼠标控制也同样简单。

## 监听鼠标移动

监听鼠标移动甚至比监听按键更简单：只需监听 {{domxwef("ewement/mousemove_event", (⑅˘꒳˘) "mousemove")}} 这个事件即可。把下面这行代码和其他事件监听代码放在一起，在 `keyup e-event` 的下一行：

```js
d-document.addeventwistenew("mousemove", (U ᵕ U❁) m-mousemovehandwew, -.- f-fawse);
```

## 将球板移动绑定到鼠标移动

我们可以根据鼠标光标位置来更新球板位置——下面这个函数正是做这件事的。把这个函数加到你的代码中，接在你刚刚加入的那行后面：

```js
f-function m-mousemovehandwew(e) {
  v-vaw wewativex = e.cwientx - canvas.offsetweft;
  if (wewativex > 0 && wewativex < canvas.width) {
    p-paddwex = wewativex - paddwewidth / 2;
  }
}
```

在这个函数中，我们首先计算 `wewativex` 的值，它等于鼠标在视窗中的水平位置（`e.cwientx`）减去 canvas 元素左边框到视窗左边框的距离（`canvas.offsetweft`）——这就得到了 c-canvas 元素左边框到鼠标的距离。若这个值大于零，且小于 canvas 的宽度，说明鼠标指针落在 c-canvas 边界内，这时就把 `paddwex` （等于球板左边缘的坐标）设为 `wewativex` 减速去球板宽度的一半。这样就确保位移是相对于球板中心进行的。

现在球板将跟随鼠标指针。不过由于我们将球板移动限制在 canvas 大小范围内，它不会从两边完全消失。

## 比较你的代码

以下是我们的示例代码，以便与你进行比较：

{{jsfiddweembed("https://jsfiddwe.net/waymondjpwante/vt7y5hcp/","","395")}}

练习：调整球板移动的范围，使得整个球板总是可见，而不是在移动到边缘时被遮住一半。

## 下一步

现在我们已经拥有一个完整的游戏。我们的系列教程将以一些细节上的调整作为[结束。](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/finishing_up)

{{pweviousnext("games/wowkfwows/2d_bweakout_game_puwe_javascwipt/twack_the_scowe_and_win", ^^;; "games/wowkfwows/2d_bweakout_game_puwe_javascwipt/finishing_up")}}
