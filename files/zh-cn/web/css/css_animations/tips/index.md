---
title: CSS Animations tips and tricks
slug: Web/CSS/CSS_animations/Tips
---

{{CSSRef}}

CSS 动画使得您能够实现一些难以置信的效果点缀您的页面或者应用程序。然而，有些您想实现的东西表现的并不浅显易懂，或者没法使您立马想到一种聪明的解决办法。这篇文章集合一个一些温馨贴士和技巧，从而帮助您更轻松地工作，这其中包括了如何使一个已经停止的动画重新开始播放。

## 重新播放动画

[CSS 动画](/zh-CN/docs/Web/CSS/CSS_animations)的规范并没有提供使得动画重新激活的方法。在元素上调用`resetAnimation()` 并不生效，您也不能直接通过设置元素的 {{cssxref("animation-play-state")}}使得动画重新“跑起来”。事实上，你必须使用一些技巧使得已经停止的动画重新播放。

这有一种我们认为足够稳定和可靠的方法推荐给您。

### HTML

首先，让我们定义一个我们想要添加动画的元素{{HTMLElement("div")}} 以及一个“播放”或“重播”动画的按钮。

```html
<div class="box"></div>

<div class="runButton">Click me to run the animation</div>
```

### CSS

现在我们将使用 CSS 定义动画本身。为了简洁，有些并不重要的 CSS（如“播放”按钮的样式）并没有显示在这里。

```css hidden
.runButton {
  cursor: pointer;
  width: 300px;
  border: 1px solid black;
  font-size: 16px;
  text-align: center;
  margin-top: 12px;
  padding-top: 2px;
  padding-bottom: 4px;
  color: white;
  background-color: darkgreen;
  font:
    14px "Open Sans",
    "Arial",
    sans-serif;
}
```

```css
@keyframes colorchange {
  0% {
    background: yellow;
  }
  100% {
    background: blue;
  }
}

.box {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}

.changing {
  animation: colorchange 2s;
}
```

这里有两个类。`"box"` 类基本表述了 box 的外观，它不包含任何动画信息。动画的细节包含在`"changing"` 类，它描述了名为 `"colorchange"` 的 {{cssxref("@keyframes")}} 应该这持续两秒的时间段播放动画。

注意，正因为如此，这个 box 在这里不触发任何动画效果，因此他不会动起来。

### JavaScript

接下来我们将看看 JavaScript 的部分如何工作。这里关键的部分在 `play()` 方法中，他在用户点击“播放”按钮时被触发。

```js
function play() {
  document.querySelector(".box").className = "box";
  window.requestAnimationFrame(function (time) {
    window.requestAnimationFrame(function (time) {
      document.querySelector(".box").className = "box changing";
    });
  });
}
```

这看起来有点奇怪，不是么？这是因为重新播放动画的唯一方法是删除动画效果，让文档重新计算样式以使得它知道您已经设置了它，然后再将动画效果加回该元素。要实现这个，我们必须更具创造性。

这里是`play()` 方法被调用时发生的事情：

1. box 的 CSS 类列表被重置为 `"box"`。这么做的效果是移除了在这个 box 上的其他类属性，包括处理动画的 `"changing"` 类。换句话说，我们从 box 元素上删除了动画效果。然而，改变类属性列表在样式被重新计算完成或者发生刷新事件之前并不会生效。
2. 为了确保样式被重新计算我们使用 {{domxref("window.requestAnimationFrame()")}}，同时设置了一个回调。我们的回调在下一次重绘页面之前被调用。问题是由于它在重绘之前被调用，而此时样式还没有被真正重新计算。
3. 我们的回调聪明地调用了 `requestAnimationFrame()` 方法！这一次，回调在下一次重绘之前被调用，这发生在样式被重新计算之后。回调在 box 元素上添加 `"changing"` 类，使得重绘后重新触发动画。

当然，我们同样需要在“播放”按钮上添加事件处理方法使其生效：

```js
document.querySelector(".runButton").addEventListener("click", play, false);
```

### 结果

{{ EmbedLiveSample('重新播放动画', 320, 160) }}

## 参见

- [Using CSS transitions](/zh-CN/docs/Web/Guide/CSS/Using_CSS_transitions)
- {{domxref("Window.requestAnimationFrame()")}}
