---
title: Using the Web Animations API
slug: Web/API/Web_Animations_API/Using_the_Web_Animations_API
---

{{DefaultAPISidebar("Web Animations")}}

web 动画 API 可以让我们用 JavaScript 写动画并且控制动画。本文将通过有趣的 demo 和教学，以有趣的方式开启您对这片爱丽丝仙境的探索。

## 认识 Web 动画 API

[Web 动画 API](/zh-CN/docs/Web/API/Web_Animations_API)将浏览器动画引擎向开发者打开，并由 JavaScript 进行操作。这些 API 被设计成 [CSS Animations](/zh-CN/docs/Web/CSS/CSS_animations) and [CSS Transitions](/zh-CN/docs/Web/CSS/CSS_transitions)的接口，未来会对这些 API 做补充以丰富更多的功能。它是对网络上动画化的支持最有效的方式之一，让浏览器进行自己的内部，不需要 hacks，或者强迫，或者{{domxref("Window.requestAnimationFrame()")}}。

通过 Web 动画 API，我们可以将交互式动画从样式表移动到 JavaScript，将表现与行为分开。我们不再需要依赖 DOM 重的技术，如将 CSS 属性和范围类写入元素来控制播放方向。与纯粹的声明式 CSS 不同，JavaScript 还允许我们动态地将属性值设置为持续时间。对于构建自定义动画库和创建交互式动画，Web 动画 API 可能是完成工作的完美工具。让我们看看它能做什么！

## 浏览器兼容情况

默认情况下，Firefox 48+ 和 Chrome 36+ 中提供了本文中讨论的基本 Web 动画 API 功能。Webkit 和 Edge 已经将 API 移动到各自的待办事项列表中，但是直到我们看到所有浏览器都有完整的支持，所以有一个便于维护的 polyfill（ [handy maintained polyfill](https://github.com/web-animations/web-animations-js)）可以测试功能支持，并在必要时添加它。

## 用 web 动画 API 写 css 动画

学习 Web 动画 API 的更为熟悉的方法之一是从大多数网络开发人员开始使用以前的 CSS 动画。CSS 动画有一个熟悉的语法，很好地分解为演示目的。

### The CSS version

这是一个用 CSS 写的滚动动画，显示爱丽丝落下通向仙境的兔子洞 (see the full [code on Codepen](http://codepen.io/rachelnabors/pen/QyOqqW)):

[![Alice Tumbling down the rabbit's hole.](tumbling-alice_optimized.gif)](http://codepen.io/rachelnabors/pen/rxpmJL)

请注意背景的移动，爱丽丝的旋转，以及她的颜色偏移变化。本教程我们将仅仅关注爱丽丝。这是控制爱丽丝动画的简化的 CSS：

```css
#alice {
  animation: aliceTumbling infinite 3s linear;
}

@keyframes aliceTumbling {
  0% {
    color: #000;
    transform: rotate(0) translate3D(-50%, -50%, 0);
  }
  30% {
    color: #431236;
  }
  100% {
    color: #000;
    transform: rotate(360deg) translate3D(-50%, -50%, 0);
  }
}
```

这样可以以恒定的（线性 linear）速率在 3 秒内改变爱丽丝的颜色和变换的旋转，并无限循环。在 [@keyframes](/zh-CN/docs/Web/CSS/@keyframes) 块中，我们可以看到每个循环（约 0.9 秒）的 30％，Alice 的颜色从黑色变为深红色，然后在循环结束时再次返回。

### Moving it to JavaScript

现在让我们尝试使用 Web 动画 API 创建相同的动画。

#### Representing keyframes

我们首先要做的是创建一个对应于我们的 CSS @keyframes 块的关键帧对象：

```js
var aliceTumbling = [
  { transform: "rotate(0) translate3D(-50%, -50%, 0)", color: "#000" },
  { color: "#431236", offset: 0.3 },
  { transform: "rotate(360deg) translate3D(-50%, -50%, 0)", color: "#000" },
];
```

这里我们使用一个包含多个对象的数组。每个对象代表原始 CSS 中的一个键。然而，与 CSS 不同，Web 动画 API 不需要明确地告知每个键出现的动画的百分比。它将根据您给出的按键数量自动将动画划分为相等的部分。这意味着具有三个键的关键帧对象将通过动画的每个循环的方式播放中间键，除非另有说明。

当我们想要明确地设置一个键与其他键的偏移量时，我们可以直接在对象中指定一个偏移量，并与逗号分隔。在上面的例子中，为了确保爱丽丝的颜色变化为 30％而不是 50％，我们给它的偏移量为 0.3。

必须至少指定两个关键帧（表示动画序列的开始和结束状态）.如果您的关键帧列表只有一个条目，{{domxref("Element.animate()")}} 将抛出不支持的异常报错。

所以要回顾一下，除非你指定一个键上的偏移量，否则键的默认值是等间隔的。方便吗？

#### 表示时间属性

我们还需要创建一个定时属性的对象 (an {{domxref("AnimationEffectTimingProperties")}} object) 对应于爱丽丝动画中的值：

```js
var aliceTiming = {
  duration: 3000,
  iterations: Infinity,
};
```

你会注意到这里有一些差异，如何在 CSS 中表示等价的值：

- 一个，持续时间是毫秒，而不是秒 - 3000 不是 3 秒.。像{{domxref("WindowTimers.setTimeout()")}} 和{{domxref("Window.requestAnimationFrame()")}}, Web 动画 API 只支持毫秒。
- The other thing you'll notice is that it's `iterations`, not `iteration-count`.

> **备注：** CSS 动画中使用的属性值与 Web 动画中使用的属性值存在一些小的差异。比如，Web 动画中不能使用字符串“infinite”，而是使用 Javascript 的关键字 Infinity。以及我们用 `easing` 来代替`timing-function`。我们不必在这列出`easing`的值，因为不像在 CSS 动画里，默认的"[animation-timing-function](/zh-CN/docs/Web/CSS/animation-timing-function)"是`ease`。页面动画 API 的默认 easing 是`linear`— 而这就是我们想要的。

#### 整合这些特性

是时候把这些特性结合到一起运用了 {{domxref("Element.animate()")}} :

```js
document.getElementById("alice").animate(aliceTumbling, aliceTiming);
```

And boom: the animation starts playing (see the finished [version on Codepen](http://codepen.io/rachelnabors/pen/rxpmJL)).

可以在可以使用 CSS 动画化的任何 DOM 元素上调用 animate() 方法。它可以用几种方式写成。我们可以直接像这样传递他们的值，而不需要为关键帧和时间属性创建对象：

```js
document.getElementById("alice").animate(
  [
    { transform: "rotate(0) translate3D(-50%, -50%, 0)", color: "#000" },
    { color: "#431236", offset: 0.3 },
    { transform: "rotate(360deg) translate3D(-50%, -50%, 0)", color: "#000" },
  ],
  {
    duration: 3000,
    iterations: Infinity,
  },
);
```

更重要的是，如果我们只想指定动画的持续时间，而不是其迭代（默认动画迭代一次），我们可以单独传递毫秒：

```js
document.getElementById("alice").animate(
  [
    { transform: "rotate(0) translate3D(-50%, -50%, 0)", color: "#000" },
    { color: "#431236", offset: 0.3 },
    { transform: "rotate(360deg) translate3D(-50%, -50%, 0)", color: "#000" },
  ],
  3000,
);
```

## 使用 play()，pause()，reverse() 和 playbackRate 控制播放

虽然我们可以使用 Web 动画 API 编写 CSS 动画，其中 API 真正派上用场的是操纵动画的播放。Web 动画 API 提供了一些控制播放的有用方法。让我们来看看在 Growing / Shrinking Alice 游戏中暂停和播放动画（请查看 Codepen 的完整代码 [full code on Codepen](http://codepen.io/rachelnabors/pen/PNYGZQ)）：

[![Playing the growing and shrinking game with Alice.](growing-shrinking_article_optimized.gif)](http://codepen.io/rachelnabors/pen/PNYGZQ?editors=0010)

在这个游戏中，爱丽丝有一个动画，使她从小到大，我们通过一个瓶子和一个蛋糕控制。这两个都有自己的动画。

### 暂停和启动动画

稍后我们会再讨论爱丽丝的动画，但现在我们来看看蛋糕的动画：

```js
var nommingCake = document
  .getElementById("eat-me_sprite")
  .animate(
    [{ transform: "translateY(0)" }, { transform: "translateY(-80%)" }],
    {
      fill: "forwards",
      easing: "steps(4, end)",
      duration: aliceChange.effect.timing.duration / 2,
    },
  );
```

{{domxref("Element.animate()")}} 方法会在调用后立即执行。为了防止蛋糕在用户有机会点击之前进食自己，我们调用 {{domxref("Animation.pause()")}} ，如下：

```js
nommingCake.pause();
```

我们可以运行 {{domxref("Animation.play()")}} 方法：

```js
nommingCake.play();
```

特别地，我们想将其链接到爱丽丝的动画，所以当蛋糕被吃掉时，她变得更大。我们可以通过以下功能来实现：

```js
var growAlice = function () {
  // Play Alice's animation.
  aliceChange.play();

  // Play the cake's animation.
  nommingCake.play();
};
```

当用户握住鼠标或者在触摸屏上按住他们的手指在蛋糕上时，我们现在可以调用 growAlice 来使所有动画发挥作用：

```js
cake.addEventListener("mousedown", growAlice, false);
cake.addEventListener("touchstart", growAlice, false);
```

### 其他有用的方法

除了暂停和播放，我们可以使用以下动画方法：

- {{domxref("Animation.finish()")}} 动画结束。
- {{domxref("Animation.cancel()")}} 终止动画。
- {{domxref("Animation.reverse()")}} 反向播放动画。相当于设置动画播放速度（{{domxref("Animation.playbackRate")}}）为负值，并播放。

让我们先来看一下 playbackRate——一个负值的播放速度将导致一个动画反向播放。当爱丽丝从瓶中喝酒时，她越来越小。这是因为瓶子将动画的播放速度从 1 更改为 -1：

```js
var shrinkAlice = function () {
  aliceChange.playbackRate = -1;
  aliceChange.play();
};

bottle.addEventListener("mousedown", shrinkAlice, false);
bottle.addEventListener("touchstart", shrinkAlice, false);
```

在[爱丽丝镜中奇遇记](https://zh.wikipedia.org/wiki/愛麗絲鏡中奇遇)中，爱丽丝旅行到一个世界，她必须在场景中跑步——而且以两倍的速度快速前进！在红女王比赛的例子中，爱丽丝和红女王正在场景中跑步（查看 [Codepen 上的完整代码](https://codepen.io/rachelnabors/pen/PNGGaV)）：

[![Alice and the Red Queen race to get to the next square in this game.](red-queen-race_optimized.gif)](https://codepen.io/rachelnabors/pen/PNGGaV)

因为小孩子很容易疲惫不堪，不像自动机棋子，爱丽丝不断减速。我们已经通过在动画播放时设置了一个衰减代码：

```js
setInterval(function () {
  // Make sure the playback rate never falls below .4
  if (redQueen_alice.playbackRate > 0.4) {
    redQueen_alice.playbackRate *= 0.9;
  }
}, 3000);
```

但是通过点击或点击来敦促他们使他们通过乘以播放速度来加快速度：

```js
var goFaster = function () {
  redQueen_alice.playbackRate *= 1.1;
};

document.addEventListener("click", goFaster);
document.addEventListener("touchstart", goFaster);
```

背景元素还具有播放时间，当您点击或点击时，它们会受到影响。当 Alice 和 Red Queen 跑两倍的时候会发生什么？当你让他们放慢时会发生什么？

## 获取动画信息

想象其他方式我们可以使用 playbackRate，例如通过让他们减慢整个网站的动画来改善具有前庭障碍的用户的无障碍。这不可能在 CSS 中重新计算每个 CSS 规则的持续时间，但是通过 Web 动画 API，我们可以使用即将到来的（在浏览器中不支持！）{{domxref("document.getAnimations()")}}方法 循环遍历页面上的每个动画，并将它们的播放速度减半：

```js
document.getAnimations().forEach(function (animation) {
  animation.playbackRate *= 0.5;
});
```

使用 Web 动画 API，您需要更改的只是一个小的属性！

另一件与 CSS 动画有关的难点就是创建依赖于其他动画提供的值。例如，在“成长和收缩爱丽丝”游戏的例子中，您可能会注意到蛋糕的持续时间有些奇怪：

```js
duration: aliceChange.effect.timing.duration / 2;
```

要了解这里发生了什么，让我们来看看 Alice 的动画：

```js
var aliceChange = document
  .getElementById("alice")
  .animate(
    [
      { transform: "translate(-50%, -50%) scale(.5)" },
      { transform: "translate(-50%, -50%) scale(2)" },
    ],
    {
      duration: 8000,
      easing: "ease-in-out",
      fill: "both",
    },
  );
```

爱丽丝的动画让她的尺寸在 8 秒内从一半到两倍。然后我们暂停她：

```js
aliceChange.pause();
```

如果我们在动画开始时已经把她暂停了，那么她的全部尺寸将从一半开始，就像她已经把整个瓶子都喝完了一样！我们想把动画的“播放头”放在中间，这样她就在半途了。我们可以通过将她的 {{domxref("Animation.currentTime")}} 设置为 4 秒，如下所示：

```js
aliceChange.currentTime = 4000;
```

但是在制作这个动画的时候，我们可能会改变爱丽丝的持续时间。如果我们将她的 `currentTime` 设置为动态的，它不会更好吗？所以我们不必一次做两个更新？我们实际上可以通过引用 aliceChange 的 {{domxref("Animation.effect")}} 属性来实现，该属性返回一个包含 Alice 上所有效果细节的对象：

```js
aliceChange.currentTime = aliceChange.effect.timing.duration / 2;
```

`effect` 让我们能够访问动画的关键帧和时间对象——`aliceChange.effect.timing` 指向 Alice 的时间对象（其类型为 {{domxref("AnimationEffectTimingReadOnly")}}）——这包含她的 {{domxref("AnimationEffectTimingReadOnly.duration")}}。我们可以将她的持续时间分成两半，以获得她动画时间轴的中点，使她成为正常的高度。现在，我们可以在任何一个方向扭转和播放动画，使她变小或变大！

当设置蛋糕和瓶子的持续时间时，我们可以做同样的事情：

```js
var drinking = document
  .getElementById("liquid")
  .animate([{ height: "100%" }, { height: "0" }], {
    fill: "forwards",
    duration: aliceChange.effect.timing.duration / 2,
  });
drinking.pause();
```

现在，所有三个动画只有一个持续时间，我们可以从一个地方容易地改变。

我们还可以使用 Web 动画 API 来确定动画当前的时间。当你用尽蛋糕吃或者清空瓶子时，游戏就结束了。哪个角色扮演者取决于爱丽丝在她的动画中有多远，无论她是否变得太大，不能进入小门太小，无法达到打开门的钥匙。我们可以弄清楚她是否在动画的大端或小端，让她的动画当前时间 ([`currentTime`](/zh-CN/docs/Web/API/Animation/currentTime)) 被她的 activeDuration 分成：

```js
var endGame = function() {

  // get Alice's timeline's playhead location
  var alicePlayhead = aliceChange.currentTime;
  var aliceTimeline = aliceChange.effect.activeDuration;

  // stops Alice's and other animations
  stopPlayingAlice();

  // depending on which third it falls into
  var aliceHeight = alicePlayhead/aliceTimeline;

  if (aliceHeight <= .333){
    // Alice got smaller!
    ...

  } else if (aliceHeight >= .666) {
    // Alice got bigger!
    ...

  } else {
    // Alice didn't change significantly
    ...

  }
}
```

> **备注：** `getAnimations()` and `effect` are not fully supported as of this writing, but the polyfill does support them today.

## Callbacks and promises

CSS 动画和转换有自己的事件侦听器，这些也可以通过 Web 动画 API：

- [`onfinish`](/zh-CN/docs/Web/API/Animation/onfinish) is the event handler for the `finish` event and can be triggered manually with [`finish()`](/zh-CN/docs/Web/API/Animation/finish).
- [`oncancel`](/zh-CN/docs/Web/API/Animation/oncancel) is the event handler for the `cancel` event and can be triggers with [`cancel()`](/zh-CN/docs/Web/API/Animation/cancel).

在这里，我们为蛋糕，瓶子和爱丽丝设置回调来触发 endGame 功能：

```js
// When the cake or runs out...
nommingCake.onfinish = endGame;
drinking.onfinish = endGame;

// ...or Alice reaches the end of her animation
aliceChange.onfinish = endGame;
```

Prefer promises? The Web Animations API also specifies two promises: [`onfinish`](/zh-CN/docs/Web/API/Animation/onfinish) and [`oncancel`](/zh-CN/docs/Web/API/Animation/oncancel).

> **备注：** These promises are not fully supported as of this writing.

## 结论

这些是 Web 动画 API 的基本功能，其中大部分功能已在最新版本的 Firefox 和 Chrome 中得到支持。到目前为止，您应该准备好在浏览器中“跳下兔子洞”，动画制作动画实验！如果您正在使用 API 并要共享，请尝试使用#WAAPI 主题标签。我们将会观看并且将编写更多的教程来涵盖更多的功能，支持传播！

## See also

- The [full suite of Alice in Wonderland demos](http://codepen.io/collection/bpEza/) on CodePen for you to play with, fork, and share
- [Animating like you just don’t care with Element.animate](https://hacks.mozilla.org/2016/08/animating-like-you-just-dont-care-with-element-animate/) — a great article to read that explains more on the background of the Web Animations API, and why it is more performant than other web animation methods
- [web-animations-js](https://github.com/web-animations/web-animations-js) — the Web Animations API polyfill
