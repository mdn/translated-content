---
title: 全屏 API 指南
slug: Web/API/Fullscreen_API/Guide
l10n:
  sourceCommit: c17bd570e356cdf3e1abb4c2dfe1e57a2cfb5bc7
---

{{DefaultAPISidebar("Fullscreen API")}}

本文主要说明如何使用[全屏 API](/zh-CN/docs/Web/API/Fullscreen_API) 将给定元素设置为全屏模式，以及如何检测浏览器何时进入或退出全屏模式。

## 激活全屏模式

对于一个你想要以全屏模式展示的元素（例如 {{HTMLElement("video")}}），你可以通过调用它的 {{DOMxRef("Element.requestFullscreen", "requestFullscreen()")}} 方法激活它的全屏模式。

我们来看看 {{HTMLElement("video")}} 这个元素：

```html
<video controls id="my-video">
  <source src="somevideo.webm" />
  <source src="somevideo.mp4" />
</video>
```

我们可以用下面的代码让视频进入全屏模式：

```js
const elem = document.getElementById("my-video");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
}
```

这段代码会在调用 `requestFullscreen()` 方法之前先检验它是否存在。

一旦元素处于全屏模式，它将与 {{cssxref(":fullscreen")}} 匹配，从而为其赋予一些默认样式，例如占据整个屏幕。它也被放置在{{glossary("top layer", "顶层")}}中。

如果请求在全屏模式下显示多个元素，则它们都会由 {{cssxref(":fullscreen")}} 匹配，并且全部位于顶层。它们相互堆叠，最近请求的元素位于较旧的元素之上。最近请求的元素会显示并通过 {{domxref("Document.fullscreenElement")}} 返回。

### 通知

当成功进入全屏模式时，包含该元素的文档会收到一个 {{domxref("Element/fullscreenchange_event", "fullscreenchange")}} 事件。当退出全屏模式时，文档会再一次收到 {{domxref("Document/fullscreenchange_event", "fullscreenchange")}} 事件。注意此 {{domxref("Document/fullscreenchange_event", "fullscreenchange")}} 事件本身并不提供任何有关文档是否进入或退出全屏模式的信息，但如果文档具有非空的 {{DOMxRef("document.fullscreenElement", "fullscreenElement")}}，你就知道你处于全屏模式。

### 当全屏请求失败时

你并不总是可以进入全屏模式。例如 {{HTMLElement("iframe")}} 元素具有 [`allowfullscreen`](/zh-CN/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen) 属性，可选择是否允许将其内容以全屏模式显示。另外，几种特定的内容，比如窗体插件（windowed plug-ins），不能以全屏模式显示。尝试将不能以全屏模式显示的元素（或者此元素的父元素和后代元素）的时候，全屏请求将不起作用。而相应元素会收到一个 `fullscreenerror` 事件。当全屏请求失败时，Firefox 会在 Web 控制台上打印一条错误信息解释请求为什么失败。但是在 Chrome 和新版的 Opera 中，不会生成这样的警告。

> [!NOTE]
> 全屏请求必须在事件处理器中调用，否则将会被拒绝。

## 退出全屏模式

用户总是可以自行退出全屏模式；详见[你的用户想了解的信息](#你的用户想了解的信息)。你也可以以编程方式通过调用 {{DOMxRef("Document.exitFullscreen()")}} 方法来做到这点。

如果有多个元素处于全屏模式，调用 `exitFullscreen()` 只会退出最顶层的元素，并显示其下方的下一个元素。按 <kbd>Esc</kbd> 或 <kbd>F11</kbd> 可退出所有全屏元素。

## 其他信息

{{DOMxRef("Document")}} 提供了一些额外的信息，在开发全屏网络应用时会很有用：

- {{DOMxRef("Document.fullscreenElement")}} / {{DOMxRef("ShadowRoot.fullscreenElement")}}
  - : `fullscreenElement` 属性告诉你当前以全屏模式显示的元素 {{DOMxRef("Element")}} 。如果该值不为空，则文档（或影子 DOM）处于全屏模式。如果该值是空，则文档（或影子 DOM）不处于全屏模式。
- {{DOMxRef("Document.fullscreenEnabled")}}
  - : `fullscreenEnabled` 属性告诉你文档当前是否处于允许请求全屏模式的状态。

### 移动浏览器中的视口缩放

某些移动浏览器在全屏模式下会忽略视口元标记设置并阻止用户缩放；例如：“捏合缩放”手势可能对以全屏模式呈现的页面不起作用——即使在非全屏模式下，可以使用捏合缩放来缩放页面。

## 你的用户想了解的信息

你可能想确保使你的用户得知他可以按 <kbd>ESC</kbd> 键（或 <kbd>F11</kbd>）退出全屏模式。

此外，当处在全屏模式中，浏览其他页面、切换标签页、或者切换到其他应用（例如使用 <kbd>Alt</kbd>-<kbd>Tab</kbd>）也会导致退出全屏模式。

## 示例

在这个例子中，web 页面中显示了一个视频。按下 <kbd>Return</kbd> 或 <kbd>Enter</kbd> 键让用户在视频的窗口显示和全屏显示之间切换。

[查看实时运行示例](https://mdn.dev/archives/media/samples/domref/fullscreen.html)

### 监听 Enter 键

当页面加载完成时，这段代码可以设置一个事件监听器以监听 <kbd>Enter</kbd> 键。

```js
document.addEventListener(
  "keydown",
  (e) => {
    if (e.key === "Enter") {
      toggleFullScreen();
    }
  },
  false,
);
```

### 切换全屏模式

当用户按下 <kbd>Enter</kbd> 键时，这段代码会被调用，如上所示。

```js
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}
```

这段代码首先检查 {{DOMxRef("document")}} 的 `fullscreenElement` 属性的值。如果其为 `null`，文档当前处于窗口模式中，所以我们需要切换到全屏模式。通过调用 {{DOMxRef("Element.requestFullscreen()")}}，可以切换到全屏模式。

如果全屏模式已经激活（`fullscreenElement` 不为 `null`），我们可以调用 {{DOMxRef("document.exitFullscreen()")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用全屏模式](/zh-CN/docs/Web/API/Fullscreen_API)
- {{DOMxRef("Element.requestFullscreen()")}}
- {{DOMxRef("Document.exitFullscreen()")}}
- {{DOMxRef("Document.fullscreen")}}
- {{DOMxRef("Document.fullscreenElement")}}
- {{CSSxRef(":fullscreen")}}, {{CSSxRef("::backdrop")}}
- [`allowfullscreen`](/zh-CN/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)
