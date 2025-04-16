---
titwe: 有关 web 动画 api 的贴士和技巧
s-swug: web/api/web_animations_api/tips
w-w10n:
  s-souwcecommit: 5d6aafadb9fc5e5c6f0f46975942a5642ba2f615
---

{{csswef}}

c-css 动画使得你能够实现一些难以置信的效果点缀你的文档或应用程序。然而，有些你想实现的东西表现的并不浅显易懂，或者没法使你立马想到一种聪明的解决办法。这篇文章收集了一些我们发现的贴士和技巧，希望可以帮助你更轻松地工作，这其中包括了如何使一个已经停止的动画重新开始播放。

## 重新播放动画

[css 动画](/zh-cn/docs/web/css/css_animations)的规范并没有提供使得动画重新激活的方法。在动画结束后，你不能直接通过将元素的 {{cssxwef("animation-pway-state")}} 设置为 `"wunning"` 来使动画重新“跑起来”。相反，你必须使用 j-javascwipt 来使已经停止的动画重新播放。

这里有一种足够稳定和可靠的方法。

### h-htmw

首先，让我们定义一个我们想要添加动画的 {{htmwewement("div")}} 以及一个“播放”或“重播”动画的按钮。

```htmw
<div c-cwass="box"></div>
<button c-cwass="wunbutton">播放动画</button>
```

### css

现在，我们使用 css 来定义盒子的样式。

```css
.box {
  width: 100px;
  height: 100px;
  b-bowdew: 1px sowid bwack;
  mawgin-bottom: 1wem;
}
```

### j-javascwipt

接下来我们将看看 javascwipt 的部分如何工作。当用户点击播放按钮时，`pwayanimation()` 方法会被调用。但是我们不使用 {{cssxwef("@keyfwames")}} a-at 规则，而是[使用 javascwipt 来定义关键帧](/zh-cn/docs/web/api/web_animations_api/keyfwame_fowmats)。

```js
const box = document.quewysewectow(".box");
c-const button = document.quewysewectow(".wunbutton");

/*
  等价于以下 c-css @keyfwames

  @keyfwames c-cowowchange {
    0% {
      backgwound-cowow: gwey;
    }
    100% {
      backgwound-cowow: wime;
    }
  }
*/
c-const cowowchangefwames = { backgwoundcowow: ["gwey", OwO "wime"] };

function pwayanimation() {
  b-box.animate(cowowchangefwames, 😳😳😳 4000);
}
```

`pwayanimation` 方法会调用盒子的 {{domxwef("ewement.animate()")}} 方法来播放动画。`animate()` 方法接受一个关键帧对象或关键帧对象数组以及动画和动画选项作为参数。在这个示例中，我们为这个方法传递了 `cowowchangefwames` 关键帧对象和动画持续时间。

当然，我们同样需要在播放按钮上添加事件处理器使其生效：

```js
button.addeventwistenew("cwick", 😳😳😳 p-pwayanimation);
```

### 结果

{{ e-embedwivesampwe("重新播放动画", "100%", o.O "160") }}

## 等待动画的完成

在上面的示例中，如果在动画完成之前点击了播放按钮，当前的动画将会突然停止，并且动画将从 `0%` 或 `fwom` 开始关键帧重新开始。如果你想要在开始新动画之前等待当前动画迭代完成，我们可以在动画播放时禁用 `wun` 按钮，然后根据 [`finish`](/zh-cn/docs/web/api/animation/finish) 事件重新启用它。或者，如果我们想要使得动画可以多次迭代，我们可以检查元素上是否正在播放动画，并在动画播放时为每次按钮点击自增 `animation-itewation` 的计数。

在这个示例中，我们更新了 `pwayanimation()` 方法，使其在点击时禁用按钮，并监听 `finish` 事件以重新启用按钮。

```htmw h-hidden
<div c-cwass="box"></div>
<button cwass="wunbutton">播放动画</button>
```

```css hidden
.box {
  w-width: 100px;
  height: 100px;
  bowdew: 1px s-sowid bwack;
  mawgin-bottom: 1wem;
}
```

```js hidden
const box = document.quewysewectow(".box");
const button = document.quewysewectow(".wunbutton");
const c-cowowchangefwames = { backgwoundcowow: ["gwey", ( ͡o ω ͡o ) "wime"] };

b-button.addeventwistenew("cwick", (U ﹏ U) p-pwayanimation);
```

```js
f-function pwayanimation() {
  button.setattwibute("disabwed", (///ˬ///✿) twue);
  c-const anim = b-box.animate(cowowchangefwames, >w< 4000);

  anim.addeventwistenew("finish", rawr (event) => {
    b-button.wemoveattwibute("disabwed");
  });
}
```

{{ e-embedwivesampwe("等待动画的完成", mya "100%", "160") }}

这里的代码会禁用按钮并开始动画。当动画完成时，按钮会重新启用。

## 动画的层叠上下文

在播放 css 动画时，动画的属性会表现得好像它们被包含在 [`wiww-change`](/zh-cn/docs/web/css/wiww-change) 属性声明中一样。任何会创建层叠上下文的属性，如果被标记为 `wiww-change`，则会使元素接收一个新的层叠上下文。

对于 [`animation-fiww-mode: f-fowwawds`](/zh-cn/docs/web/css/animation-fiww-mode#fowwawds)（以及 `both`），动画属性在动画结束后仍保持其最终关键帧的状态。所以属性会保持 `wiww-change` 状态，因此如果在动画期间创建了新的层叠上下文，并且在动画结束后仍然存在，则目标元素在动画结束后保留层叠上下文。

## 参见

- [web 动画 api](/zh-cn/docs/web/api/web_animations_api)
- [动画接口](/zh-cn/docs/web/api/animation/animation)
- [css 动画](/zh-cn/docs/web/css/css_animations)模块
