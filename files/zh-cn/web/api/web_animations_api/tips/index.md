---
title: 有关 Web 动画 API 的贴士和技巧
slug: Web/API/Web_Animations_API/Tips
l10n:
  sourceCommit: 5d6aafadb9fc5e5c6f0f46975942a5642ba2f615
---

{{DefaultAPISidebar("Web Animations")}}

CSS 动画使得你能够实现一些难以置信的效果点缀你的文档或应用程序。然而，有些你想实现的东西表现的并不浅显易懂，或者没法使你立马想到一种聪明的解决办法。这篇文章收集了一些我们发现的贴士和技巧，希望可以帮助你更轻松地工作，这其中包括了如何使一个已经停止的动画重新开始播放。

## 重新播放动画

[CSS 动画](/zh-CN/docs/Web/CSS/Guides/Animations)的规范并没有提供使得动画重新激活的方法。在动画结束后，你不能直接通过将元素的 {{cssxref("animation-play-state")}} 设置为 `"running"` 来使动画重新“跑起来”。相反，你必须使用 JavaScript 来使已经停止的动画重新播放。

这里有一种足够稳定和可靠的方法。

### HTML

首先，让我们定义一个我们想要添加动画的 {{HTMLElement("div")}} 以及一个“播放”或“重播”动画的按钮。

```html
<div class="box"></div>
<button class="runButton">播放动画</button>
```

### CSS

现在，我们使用 CSS 来定义盒子的样式。

```css
.box {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  margin-bottom: 1rem;
}
```

### JavaScript

接下来我们将看看 JavaScript 的部分如何工作。当用户点击播放按钮时，`playAnimation()` 方法会被调用。但是我们不使用 {{cssxref("@keyframes")}} at 规则，而是[使用 JavaScript 来定义关键帧](/zh-CN/docs/Web/API/Web_Animations_API/Keyframe_Formats)。

```js
const box = document.querySelector(".box");
const button = document.querySelector(".runButton");

/*
  等价于以下 CSS @keyframes

  @keyframes colorChange {
    0% {
      background-color: grey;
    }
    100% {
      background-color: lime;
    }
  }
*/
const colorChangeFrames = { backgroundColor: ["grey", "lime"] };

function playAnimation() {
  box.animate(colorChangeFrames, 4000);
}
```

`playAnimation` 方法会调用盒子的 {{domxref("Element.animate()")}} 方法来播放动画。`animate()` 方法接受一个关键帧对象或关键帧对象数组以及动画和动画选项作为参数。在这个示例中，我们为这个方法传递了 `colorChangeFrames` 关键帧对象和动画持续时间。

当然，我们同样需要在播放按钮上添加事件处理器使其生效：

```js
button.addEventListener("click", playAnimation);
```

### 结果

{{ EmbedLiveSample("重新播放动画", "100%", "160") }}

## 等待动画的完成

在上面的示例中，如果在动画完成之前点击了播放按钮，当前的动画将会突然停止，并且动画将从 `0%` 或 `from` 开始关键帧重新开始。如果你想要在开始新动画之前等待当前动画迭代完成，我们可以在动画播放时禁用 `run` 按钮，然后根据 [`finish`](/zh-CN/docs/Web/API/Animation/finish) 事件重新启用它。或者，如果我们想要使得动画可以多次迭代，我们可以检查元素上是否正在播放动画，并在动画播放时为每次按钮点击自增 `animation-iteration` 的计数。

在这个示例中，我们更新了 `playAnimation()` 方法，使其在点击时禁用按钮，并监听 `finish` 事件以重新启用按钮。

```html hidden
<div class="box"></div>
<button class="runButton">播放动画</button>
```

```css hidden
.box {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  margin-bottom: 1rem;
}
```

```js hidden
const box = document.querySelector(".box");
const button = document.querySelector(".runButton");
const colorChangeFrames = { backgroundColor: ["grey", "lime"] };

button.addEventListener("click", playAnimation);
```

```js
function playAnimation() {
  button.setAttribute("disabled", true);
  const anim = box.animate(colorChangeFrames, 4000);

  anim.addEventListener("finish", (event) => {
    button.removeAttribute("disabled");
  });
}
```

{{ EmbedLiveSample("等待动画的完成", "100%", "160") }}

这里的代码会禁用按钮并开始动画。当动画完成时，按钮会重新启用。

## 动画的层叠上下文

在播放 CSS 动画时，动画的属性会表现得好像它们被包含在 [`will-change`](/zh-CN/docs/Web/CSS/Reference/Properties/will-change) 属性声明中一样。任何会创建层叠上下文的属性，如果被标记为 `will-change`，则会使元素接收一个新的层叠上下文。

对于 [`animation-fill-mode: forwards`](/zh-CN/docs/Web/CSS/Reference/Properties/animation-fill-mode#forwards)（以及 `both`），动画属性在动画结束后仍保持其最终关键帧的状态。所以属性会保持 `will-change` 状态，因此如果在动画期间创建了新的层叠上下文，并且在动画结束后仍然存在，则目标元素在动画结束后保留层叠上下文。

## 参见

- [Web 动画 API](/zh-CN/docs/Web/API/Web_Animations_API)
- [动画接口](/zh-CN/docs/Web/API/Animation/Animation)
- [CSS 动画](/zh-CN/docs/Web/CSS/Guides/Animations)模块
