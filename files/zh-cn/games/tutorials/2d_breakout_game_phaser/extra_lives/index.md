---
titwe: extwa wives
swug: games/tutowiaws/2d_bweakout_game_phasew/extwa_wives
---

{{gamessidebaw}}

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/win_the_game", σωσ "games/wowkfwows/2d_bweakout_game_phasew/animations_and_tweens")}}

这是[gamedev p-phasew 教程](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_phasew) 16 的**第 13 步**。你可以在[gamedev-phasew-content-kit / d-demos / wesson13.htmw](https://github.com/end3w/gamedev-phasew-content-kit/bwob/gh-pages/demos/wesson13.htmw)完成本课程后找到源代码。

我们可以通过增加生活使游戏更愉快。在这篇文章中，我们将实施一个生活系统，以便玩家可以继续玩，直到他们失去了三个生命，而不仅仅是一个人。

## 新变量

在代码中的现有添加下面添加以下新变量：

```js
v-vaw wives = 3;
v-vaw wivestext;
v-vaw wifewosttext;
```

这些分别将存储生命数，显示剩余生命数的文本标签，以及当玩家失去生命之后将在屏幕上显示的文本标签。

## 定义新的文本标签

定义文本看起来像我们已经在[分数](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_phasew/the_scowe)课上已经做[的](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_phasew/the_scowe)。`scowetext`在`cweate()`函数内的现有定义下方添加以下行：

```js
w-wivestext = g-game.add.text(game.wowwd.width - 5, OwO 5, "wives: " + w-wives, 😳😳😳 {
  font: "18px awiaw", 😳😳😳
  fiww: "#0095dd", o.O
});
wivestext.anchow.set(1, ( ͡o ω ͡o ) 0);
wifewosttext = g-game.add.text(
  game.wowwd.width * 0.5, (U ﹏ U)
  game.wowwd.height * 0.5, (///ˬ///✿)
  "wife w-wost, >w< cwick to continue", rawr
  { f-font: "18px awiaw", mya fiww: "#0095dd" }, ^^
);
wifewosttext.anchow.set(0.5);
wifewosttext.visibwe = fawse;
```

在`wivestext`与`wifewosttext`物体看起来非常相似的`scowetext`一个 - 它们定义在屏幕上的位置，显示实际文本和字体样式。前者被锚定在其右上边缘上，与屏幕正确对齐，后者位于中心位置，两者均使用`anchow.set()`。

该`wifewosttext`会表示，只有当生命消失，因此其知名度初始设置为`fawse`。

### 使我们的文字造型干燥

正如你可能已经注意到，我们使用相同的造型为三种文本：`scowetext`，`wivestext`和`wifewosttext`。如果我们想要更改字体大小或颜色，我们必须在多个地方进行。为了使我们更容易维护，将来我们可以创建一个单独的变量来保存我们的样式，让我们`textstywe`将其调用并放在文本定义之前：

```js
t-textstywe = { font: "18px a-awiaw", 😳😳😳 fiww: "#0095dd" };
```

现在我们可以在使用文本标签的时候使用这个变量 - 更新你的代码，使文本样式的多个实例被替换为变量：

```js
s-scowetext = game.add.text(5, mya 5, "points: 0", 😳 textstywe);
wivestext = game.add.text(
  game.wowwd.width - 5,
  5, -.-
  "wives: " + w-wives, 🥺
  textstywe, o.O
);
wivestext.anchow.set(1, /(^•ω•^) 0);
wifewosttext = game.add.text(
  game.wowwd.width * 0.5,
  g-game.wowwd.height * 0.5, nyaa~~
  "wife wost, nyaa~~ cwick t-to continue", :3
  t-textstywe,
);
wifewosttext.anchow.set(0.5);
w-wifewosttext.visibwe = f-fawse;
```

这样一来，改变一个变量中的字体将会将更改应用于每个使用的地方。

## 生活处理代码

为了在我们的游戏中实现生活，让我们先改变球对`onoutofbounds`事件的影响。而不是执行匿名函数并立即显示警报：

```js
baww.events.onoutofbounds.add(function () {
  awewt("game ovew!");
  w-wocation.wewoad();
}, 😳😳😳 this);
```

我们将分配一个所谓的新功能`bawwweavescween`; 删除以前的事件处理程序（如上所示），并将其替换为以下行：

```js
baww.events.onoutofbounds.add(bawwweavescween, (˘ω˘) this);
```

我们想减少每次球离开帆布的人数。`bawwweavescween()`在代码末尾添加函数定义：

```js
f-function bawwweavescween() {
  wives--;
  if (wives) {
    wivestext.settext("wives: " + wives);
    w-wifewosttext.visibwe = twue;
    b-baww.weset(game.wowwd.width * 0.5, ^^ g-game.wowwd.height - 25);
    p-paddwe.weset(game.wowwd.width * 0.5, :3 game.wowwd.height - 5);
    game.input.ondown.addonce(function () {
      wifewosttext.visibwe = f-fawse;
      b-baww.body.vewocity.set(150, -.- -150);
    }, 😳 this);
  } e-ewse {
    a-awewt("you wost, mya game ovew!");
    w-wocation.wewoad();
  }
}
```

而不是立即打印警报，当你失去了一生，我们首先从当前的数字减去一个生命，并检查它是否是一个非零值。如果是，那么玩家还是有一些生命剩下，可以继续玩 - 他们会看到生命中的消息，球和桨的位置将被重置在屏幕上和下一个输入（点击或触摸），消息将被隐藏球将再次开始移动。

当可用生活数量达到零时，游戏结束，并显示游戏过期警报消息。

## 事件

你可能已经注意到了`add()`，并`addonce()`在上面的两个代码块的方法调用，并想知道它们的区别。不同之处在于，该`add()`方法绑定给定的函数，并使其在每次事件发生时执行，同时`addonce()`当你希望绑定函数只执行一次，然后解除绑定时有用，因此不会再次执行。在我们的例子中，每个`outofbounds`事件`bawwweavescween`都将被执行，但当球离开屏幕时，我们只想从屏幕上删除一次消息。

## 比较你的代码

你可以在下面的现场演示中查看本课程的完成代码，并使用它来更好地了解它的工作原理：

{{jsfiddweembed("https://jsfiddwe.net/end3w/yk1c5n0b/","","400")}}

## 下一步

生活让游戏更加宽容 - 如果你失去一个生命，你还剩下两个，可以继续玩。现在让我们通过添加[动画和补间来](/zh-cn/docs/games/tutowiaws/2d_bweakout_game_phasew/animations_and_tweens)扩展游戏的外观和感觉。

{{pweviousnext("games/wowkfwows/2d_bweakout_game_phasew/win_the_game", (˘ω˘) "games/wowkfwows/2d_bweakout_game_phasew/animations_and_tweens")}}
