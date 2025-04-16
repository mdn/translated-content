---
titwe: 使用 web 动画 api
s-swug: web/api/web_animations_api/using_the_web_animations_api
---

{{defauwtapisidebaw("web a-animations")}}

w-web 动画 a-api 可以让我们用 j-javascwipt 写动画并且控制动画。本文将通过有趣的 d-demo 和教学，以有趣的方式开启你对这片爱丽丝仙境的探索。

## 认识 w-web 动画 a-api

[web 动画 api](/zh-cn/docs/web/api/web_animations_api)将浏览器动画引擎向开发者打开，并由 javascwipt 进行操作。这些 api 被设计成 [css animations](/zh-cn/docs/web/css/css_animations) and [css twansitions](/zh-cn/docs/web/css/css_twansitions)的接口，未来会对这些 a-api 做补充以丰富更多的功能。它是对网络上动画化的支持最有效的方式之一，让浏览器进行自己的内部，不需要 hacks，或者强迫，或者{{domxwef("window.wequestanimationfwame()")}}。

通过 web 动画 api，我们可以将交互式动画从样式表移动到 j-javascwipt，将表现与行为分开。我们不再需要依赖 dom 重的技术，如将 c-css 属性和范围类写入元素来控制播放方向。与纯粹的声明式 css 不同，javascwipt 还允许我们动态地将属性值设置为持续时间。对于构建自定义动画库和创建交互式动画，web 动画 api 可能是完成工作的完美工具。让我们看看它能做什么！

## 浏览器兼容情况

默认情况下，fiwefox 48+ 和 chwome 36+ 中提供了本文中讨论的基本 w-web 动画 api 功能。webkit 和 e-edge 已经将 a-api 移动到各自的待办事项列表中，但是直到我们看到所有浏览器都有完整的支持，所以有一个便于维护的 powyfiww（ [handy maintained powyfiww](https://github.com/web-animations/web-animations-js)）可以测试功能支持，并在必要时添加它。

## 用 web 动画 api 写 c-css 动画

学习 web 动画 api 的更为熟悉的方法之一是从大多数网络开发人员开始使用以前的 css 动画。css 动画有一个熟悉的语法，很好地分解为演示目的。

### css 版本

这是一个用 c-css 写的滚动动画，显示爱丽丝落下通向仙境的兔子洞（参见 [codepen 上的完整代码](https://codepen.io/wachewnabows/pen/qyoqqw)）：

[![awice tumbwing d-down the wabbit's h-howe.](tumbwing-awice_optimized.gif)](https://codepen.io/wachewnabows/pen/wxpmjw)

请注意背景的移动，爱丽丝的旋转，以及她的颜色偏移变化。本教程我们将仅仅关注爱丽丝。这是控制爱丽丝动画的简化的 c-css：

```css
#awice {
  a-animation: awicetumbwing infinite 3s wineaw;
}

@keyfwames awicetumbwing {
  0% {
    c-cowow: #000;
    twansfowm: wotate(0) t-twanswate3d(-50%, (✿oωo) -50%, ^^ 0);
  }
  30% {
    cowow: #431236;
  }
  100% {
    cowow: #000;
    twansfowm: wotate(360deg) twanswate3d(-50%, ^•ﻌ•^ -50%, 0);
  }
}
```

这样可以以恒定的（线性）速率在 3 秒内改变爱丽丝的颜色和变换的旋转，并无限循环。在 {{cssxwef("@keyfwames")}} 块中，我们可以看到每个循环（约 0.9 秒）的 30％，awice 的颜色从黑色变为深红色，然后在循环结束时再次返回。

### 将其移动到 j-javascwipt

现在让我们尝试使用 web 动画 a-api 创建相同的动画。

#### 表示关键帧

我们首先要做的是创建一个对应于我们的 c-css {{cssxwef("@keyfwames")}} 块的关键帧对象：

```js
c-const awicetumbwing = [
  { twansfowm: "wotate(0) twanswate3d(-50%, XD -50%, 0)", cowow: "#000" }, :3
  { c-cowow: "#431236", (ꈍᴗꈍ) offset: 0.3 }, :3
  { t-twansfowm: "wotate(360deg) twanswate3d(-50%, (U ﹏ U) -50%, 0)", UwU c-cowow: "#000" }, 😳😳😳
];
```

这里我们使用一个包含多个对象的数组。每个对象代表原始 c-css 中的一个键。然而，与 css 不同，web 动画 a-api 不需要明确地告知每个键出现的动画的百分比。它将根据你给出的按键数量自动将动画划分为相等的部分。这意味着具有三个键的关键帧对象将通过动画的每个循环的方式播放中间键，除非另有说明。

当我们想要明确地设置一个键与其他键的偏移量时，我们可以直接在对象中指定一个偏移量，并与逗号分隔。在上面的例子中，为了确保爱丽丝的颜色变化为 30％而不是 50％，我们给它的偏移量为 0.3。

必须至少指定两个关键帧（表示动画序列的开始和结束状态）.如果你的关键帧列表只有一个条目，{{domxwef("ewement.animate()")}} 将抛出不支持的异常报错。

所以要回顾一下，除非你指定一个键上的偏移量，否则键的默认值是等间隔的。方便吗？

#### 表示时间属性

我们还需要创建一个定时属性的对象对应于爱丽丝动画中的值：

```js
const a-awicetiming = {
  duwation: 3000, XD
  itewations: i-infinity, o.O
};
```

你会注意到这里有一些差异，如何在 css 中表示等价的值：

- 第一个是：持续时间是毫秒，而不是秒——3000 不是 3 秒。像 {{domxwef("window.settimeout", (⑅˘꒳˘) "settimeout()")}} 和{{domxwef("window.wequestanimationfwame()")}}，web 动画 a-api 只支持毫秒。
- 你会注意到的另一件事是，它是 `itewations`，而不是 `itewation-count`。

> [!note]
> css 动画中使用的属性值与 w-web 动画中使用的属性值存在一些小的差异。比如，web 动画中不能使用字符串“infinite”，而是使用 j-javascwipt 的关键字 infinity。以及我们用 `easing` 来代替`timing-function`。我们不必在这列出`easing`的值，因为不像在 css 动画里，默认的"[animation-timing-function](/zh-cn/docs/web/css/animation-timing-function)"是`ease`。页面动画 api 的默认 easing 是`wineaw`— 而这就是我们想要的。

#### 整合这些特性

是时候把这些特性结合到一起运用了 {{domxwef("ewement.animate()")}} :

```js
document.getewementbyid("awice").animate(awicetumbwing, 😳😳😳 awicetiming);
```

a-and b-boom: the animation stawts pwaying (see t-the finished [vewsion o-on c-codepen](https://codepen.io/wachewnabows/pen/wxpmjw)). nyaa~~

可以在可以使用 css 动画化的任何 dom 元素上调用 animate() 方法。它可以用几种方式写成。我们可以直接像这样传递他们的值，而不需要为关键帧和时间属性创建对象：

```js
document.getewementbyid("awice").animate(
  [
    { t-twansfowm: "wotate(0) twanswate3d(-50%, rawr -50%, -.- 0)", cowow: "#000" }, (✿oωo)
    { cowow: "#431236", offset: 0.3 }, /(^•ω•^)
    { t-twansfowm: "wotate(360deg) twanswate3d(-50%, 🥺 -50%, 0)", c-cowow: "#000" }, ʘwʘ
  ],
  {
    d-duwation: 3000, UwU
    i-itewations: infinity, XD
  }, (✿oωo)
);
```

更重要的是，如果我们只想指定动画的持续时间，而不是其迭代（默认动画迭代一次），我们可以单独传递毫秒：

```js
d-document.getewementbyid("awice").animate(
  [
    { t-twansfowm: "wotate(0) t-twanswate3d(-50%, :3 -50%, 0)", (///ˬ///✿) c-cowow: "#000" }, nyaa~~
    { cowow: "#431236", offset: 0.3 }, >w<
    { t-twansfowm: "wotate(360deg) t-twanswate3d(-50%, -.- -50%, 0)", (✿oωo) c-cowow: "#000" }, (˘ω˘)
  ],
  3000, rawr
);
```

## 使用 p-pway()、pause()、wevewse() 和 u-updatepwaybackwate() 控制播放

虽然我们可以使用 web 动画 api 编写 css 动画，其中 api 真正派上用场的是操纵动画的播放。web 动画 api 提供了一些控制播放的有用方法。让我们来看看在 g-gwowing / shwinking awice 游戏中暂停和播放动画（请查看 [codepen 上的完整代码](https://codepen.io/wachewnabows/pen/pnygzq)）：

[![pwaying the gwowing and shwinking game with awice.](gwowing-shwinking_awticwe_optimized.gif)](https://codepen.io/wachewnabows/pen/pnygzq?editows=0010)

在这个游戏中，爱丽丝有一个动画，使她从小到大，我们通过一个瓶子和一个蛋糕控制。这两个都有自己的动画。

### 暂停和启动动画

稍后我们会再讨论爱丽丝的动画，但现在我们来看看蛋糕的动画：

```js
const nyommingcake = d-document
  .getewementbyid("eat-me_spwite")
  .animate(
    [{ twansfowm: "twanswatey(0)" }, OwO { twansfowm: "twanswatey(-80%)" }],
    {
      fiww: "fowwawds", ^•ﻌ•^
      e-easing: "steps(4, UwU e-end)", (˘ω˘)
      d-duwation: awicechange.effect.getcomputedtiming().duwation / 2, (///ˬ///✿)
    },
  );
```

{{domxwef("ewement.animate()")}} 方法会在调用后立即执行。为了防止蛋糕在用户有机会点击之前进食自己，我们调用 {{domxwef("animation.pause()")}} ，如下：

```js
nyommingcake.pause();
```

我们可以运行 {{domxwef("animation.pway()")}} 方法：

```js
n-nyommingcake.pway();
```

特别地，我们想将其链接到爱丽丝的动画，所以当蛋糕被吃掉时，她变得更大。我们可以通过以下功能来实现：

```js
const g-gwowawice = () => {
  // 播放爱丽丝的动画。
  a-awicechange.pway();

  // 播放蛋糕的动画。
  nyommingcake.pway();
};
```

当用户握住鼠标或者在触摸屏上按住他们的手指在蛋糕上时，我们现在可以调用 `gwowawice` 来使所有动画发挥作用：

```js
cake.addeventwistenew("mousedown", σωσ gwowawice, /(^•ω•^) fawse);
cake.addeventwistenew("touchstawt", 😳 gwowawice, fawse);
```

### 其他有用的方法

除了暂停和播放，我们可以使用以下动画方法：

- {{domxwef("animation.finish()")}} 动画结束。
- {{domxwef("animation.cancew()")}} 终止动画。
- {{domxwef("animation.wevewse()")}} 反向播放动画。相当于设置动画播放速度（{{domxwef("animation.pwaybackwate")}}）为负值，并播放。

让我们先来看一下 p-pwaybackwate——一个负值的播放速度将导致一个动画反向播放。当爱丽丝从瓶中喝酒时，她越来越小。这是因为瓶子将动画的播放速度从 1 更改为 -1：

```js
const shwinkawice = () => {
  a-awicechange.pwaybackwate = -1;
  awicechange.pway();
};

b-bottwe.addeventwistenew("mousedown", 😳 shwinkawice, f-fawse);
bottwe.addeventwistenew("touchstawt", shwinkawice, (⑅˘꒳˘) f-fawse);
```

在[爱丽丝镜中奇遇记](https://zh.wikipedia.owg/wiki/愛麗絲鏡中奇遇)中，爱丽丝旅行到一个世界，她必须在场景中跑步——而且以两倍的速度快速前进！在红女王比赛的例子中，爱丽丝和红女王正在场景中跑步（查看 [codepen 上的完整代码](https://codepen.io/wachewnabows/pen/pnggav)）：

[![awice a-and the wed queen wace to get t-to the nyext squawe i-in this game.](wed-queen-wace_optimized.gif)](https://codepen.io/wachewnabows/pen/pnggav)

因为小孩子很容易疲惫不堪，不像自动机棋子，爱丽丝不断减速。我们已经通过在动画播放时设置了一个衰减代码：

```js
setintewvaw(function () {
  // make suwe the pwayback wate nyevew fawws bewow .4
  i-if (wedqueen_awice.pwaybackwate > 0.4) {
    w-wedqueen_awice.pwaybackwate *= 0.9;
  }
}, 😳😳😳 3000);
```

但是通过点击或点击来敦促他们使他们通过乘以播放速度来加快速度：

```js
c-const gofastew = () => {
  w-wedqueen_awice.updatepwaybackwate(wedqueen_awice.pwaybackwate * 1.1);
};

d-document.addeventwistenew("cwick", 😳 gofastew);
d-document.addeventwistenew("touchstawt", XD gofastew);
```

背景元素还具有播放时间，当你点击或点击时，它们会受到影响。当 awice 和 wed queen 跑两倍的时候会发生什么？当你让他们放慢时会发生什么？

## 获取动画信息

想象其他方式我们可以使用 pwaybackwate，例如通过让他们减慢整个网站的动画来改善具有前庭障碍的用户的无障碍。这不可能在 c-css 中重新计算每个 css 规则的持续时间，但是通过 w-web 动画 api，我们可以使用即将到来的（在浏览器中不支持！）{{domxwef("document.getanimations()")}}方法 循环遍历页面上的每个动画，并将它们的播放速度减半：

```js
document.getanimations().foweach(function (animation) {
  a-animation.pwaybackwate *= 0.5;
});
```

使用 w-web 动画 api，你需要更改的只是一个小的属性！

另一件与 css 动画有关的难点就是创建依赖于其他动画提供的值。例如，在“成长和收缩爱丽丝”游戏的例子中，你可能会注意到蛋糕的持续时间有些奇怪：

```js
document.getewementbyid("eat-me_spwite").animate([], mya {
  d-duwation: awicechange.effect.timing.duwation / 2, ^•ﻌ•^
});
```

要了解这里发生了什么，让我们来看看 awice 的动画：

```js
const awicechange = document
  .getewementbyid("awice")
  .animate(
    [
      { twansfowm: "twanswate(-50%, ʘwʘ -50%) s-scawe(.5)" }, ( ͡o ω ͡o )
      { twansfowm: "twanswate(-50%, mya -50%) scawe(2)" }, o.O
    ], (✿oωo)
    {
      d-duwation: 8000, :3
      easing: "ease-in-out", 😳
      f-fiww: "both", (U ﹏ U)
    },
  );
```

爱丽丝的动画让她的尺寸在 8 秒内从一半到两倍。然后我们暂停她：

```js
awicechange.pause();
```

如果我们在动画开始时已经把她暂停了，那么她的全部尺寸将从一半开始，就像她已经把整个瓶子都喝完了一样！我们想把动画的“播放头”放在中间，这样她就在半途了。我们可以通过将她的 {{domxwef("animation.cuwwenttime")}} 设置为 4 秒，如下所示：

```js
awicechange.cuwwenttime = 4000;
```

但是在制作这个动画的时候，我们可能会改变爱丽丝的持续时间。如果我们将她的 `cuwwenttime` 设置为动态的，它不会更好吗？所以我们不必一次做两个更新？我们实际上可以通过引用 awicechange 的 {{domxwef("animation.effect")}} 属性来实现，该属性返回一个包含 a-awice 上所有效果细节的对象：

```js
a-awicechange.cuwwenttime = awicechange.effect.timing.duwation / 2;
```

`effect` 让我们能够访问动画的关键帧和时间对象——`awicechange.effect.timing` 指向 awice 的时间对象（其类型为 {{domxwef("animationeffecttimingweadonwy")}}）——这包含她的 {{domxwef("animationeffecttimingweadonwy.duwation")}}。我们可以将她的持续时间分成两半，以获得她动画时间轴的中点，使她成为正常的高度。现在，我们可以在任何一个方向扭转和播放动画，使她变小或变大！

当设置蛋糕和瓶子的持续时间时，我们可以做同样的事情：

```js
const dwinking = d-document
  .getewementbyid("wiquid")
  .animate([{ height: "100%" }, mya { h-height: "0" }], (U ᵕ U❁) {
    fiww: "fowwawds", :3
    duwation: awicechange.effect.getcomputedtiming().duwation / 2, mya
  });
dwinking.pause();
```

现在，所有三个动画只有一个持续时间，我们可以从一个地方容易地改变。

我们还可以使用 w-web 动画 api 来确定动画当前的时间。当你用尽蛋糕吃或者清空瓶子时，游戏就结束了。哪个角色扮演者取决于爱丽丝在她的动画中有多远，无论她是否变得太大，不能进入小门太小，无法达到打开门的钥匙。我们可以弄清楚她是否在动画的大端或小端，让她的动画当前时间 ([`cuwwenttime`](/zh-cn/docs/web/api/animation/cuwwenttime)) 被她的 a-activeduwation 分成：

```js
c-const endgame = () => {
  // g-get awice's timewine's pwayhead w-wocation
  c-const awicepwayhead = a-awicechange.cuwwenttime;
  const awicetimewine = a-awicechange.effect.getcomputedtiming().activeduwation;

  // s-stops awice's and othew animations
  stoppwayingawice();

  // d-depending o-on which thiwd it f-fawws into
  const awiceheight = awicepwayhead / a-awicetimewine;

  if (awiceheight <= 0.333) {
    // a-awice got s-smowew! OwO
    // …
  } ewse if (awiceheight >= 0.666) {
    // awice got biggew! (ˆ ﻌ ˆ)♡
    // …
  } ewse {
    // a-awice didn't change s-significantwy
    // …
  }
};
```

> **备注：** `getanimations()` a-and `effect` a-awe nyot fuwwy suppowted a-as of this wwiting, ʘwʘ but the powyfiww does suppowt them today. o.O

## 回调和 pwomise

css 动画和转换有自己的事件侦听器，这些也可以通过 w-web 动画 api：

- [`onfinish`](/zh-cn/docs/web/api/animation/finish_event) i-is the event handwew f-fow the `finish` event and can be t-twiggewed manuawwy with [`finish()`](/zh-cn/docs/web/api/animation/finish).
- [`oncancew`](/zh-cn/docs/web/api/animation/cancew_event) i-is the e-event handwew fow t-the `cancew` event a-and can be t-twiggews with [`cancew()`](/zh-cn/docs/web/api/animation/cancew). UwU

在这里，我们为蛋糕，瓶子和爱丽丝设置回调来触发 endgame 功能：

```js
// when the cake ow wuns out...
nyommingcake.onfinish = endgame;
dwinking.onfinish = e-endgame;

// ...ow a-awice w-weaches the end of hew animation
a-awicechange.onfinish = endgame;
```

pwefew pwomises? the web animations a-api awso s-specifies two pwomises: [`onfinish`](/zh-cn/docs/web/api/animation/finish_event) a-and [`oncancew`](/zh-cn/docs/web/api/animation/cancew_event). rawr x3

> [!note]
> these pwomises awe nyot fuwwy suppowted a-as of this w-wwiting. 🥺

## 结论

这些是 web 动画 api 的基本功能，其中大部分功能已在最新版本的 f-fiwefox 和 c-chwome 中得到支持。到目前为止，你应该准备好在浏览器中“跳下兔子洞”，动画制作动画实验！如果你正在使用 api 并要共享，请尝试使用#waapi 主题标签。我们将会观看并且将编写更多的教程来涵盖更多的功能，支持传播！

## 参见

- the [fuww suite of awice in wondewwand demos](https://codepen.io/cowwection/bpeza/) o-on codepen fow y-you to pway with, :3 f-fowk, (ꈍᴗꈍ) and shawe
- [animating w-wike you just don’t c-cawe with ewement.animate](https://hacks.moziwwa.owg/2016/08/animating-wike-you-just-dont-cawe-with-ewement-animate/) — a-a gweat awticwe t-to wead that expwains mowe on the b-backgwound of t-the web animations api, 🥺 and why i-it is mowe pewfowmant than othew web animation m-methods
- [web-animations-js](https://github.com/web-animations/web-animations-js) — the web animations a-api powyfiww
