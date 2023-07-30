---
title: 全屏指南
slug: Web/API/Fullscreen_API/Guide
---

{{DefaultAPISidebar("Fullscreen API")}}

本文主要说明如何使用全屏 API 将给定元素设置为全屏模式，以及如何检测浏览器何时进入或退出全屏模式。

## 激活全屏模式

对于一个你想要以全屏模式展示的元素（例如 {{ HTMLElement("video") }}），你通过调用它的 {{ domxref("Element.requestFullscreen()") }} 方法就能简单地激活它的全屏模式。

我们来看看 {{HTMLElement("video")}} 这个元素：

```html
<video controls id="myvideo">
  <source src="somevideo.webm"></source>
  <source src="somevideo.mp4"></source>
</video>
```

我们可以用下面的代码让视频进入全屏模式：

```js
var elem = document.getElementById("myvideo");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
}
```

这段代码会在调用 `requestFullscreen()` 方法之前先检验它是否存在。

### 显示差异

值得留意的是，目前 Gecko 和 WebKit 的实现之间的关键差异：Gecko 自动为元素添加了 CSS 规则，使其拉伸以填满屏幕： "`width: 100%; height: 100%`"。WebKit 没有这样做，相反地，它将全屏元素居中，不改变大小，而屏幕的其他部分为黑色。为了在 Webkit 中获得相同的全屏行为，你需要自行为元素添加 CSS "`width: 100%; height: 100%;`"：

```css
#myvideo:-webkit-full-screen {
  width: 100%;
  height: 100%;
}
```

另一方面，如果你尝试在在 Gecko 上模拟 WebKit 的行为，你需要把你想要呈现的元素放在另一个实际调整为全屏幕的元素中，并使用 CSS 规则调整内部的元素，从而达到你想要的样式。

### 通知

当成功进入全屏模式时，包含该元素的文档会收到一个 [`fullscreenchange`](/zh-CN/docs/Web/API/Document/fullscreenchange_event) 事件。当退出全屏模式时，文档会再一次收到 [`fullscreenchange`](/zh-CN/docs/Web/API/Document/fullscreenchange_event) 事件。注意此 [`fullscreenchange`](/zh-CN/docs/Web/API/Document/fullscreenchange_event) 事件，不管在文档进入和退出全屏模式时，都不会提供任何信息，但如果文档的 {{DOMxRef("document.fullscreenElement", "fullscreenElement")}} 为非空（`null`），即处于全屏模式中。

### 当全屏请求失败时

你并不总是可以进入全屏模式。例如 {{HTMLElement("iframe")}} 元素具有 [`allowfullscreen`](/zh-CN/docs/Web/HTML/Element/iframe#allowfullscreen) 属性，可选择是否将其内容以全屏模式显示。另外，几种特定的内容，比如窗体插件（windowed plug-ins），不能以全屏模式显示。尝试将不能以全屏模式显示的元素（或者此元素的父元素和后代元素）的时候，全屏请求是无效的。而相应元素会收到一个 `mozfullscreenerror` 事件。当全屏请求失败时，Firefox 会在 Web 控制台上打一条错误信息解释请求为什么失败。但是在 Chrome 和新版的 Opera 中，不会生成这样的警告。

> **备注：** 全屏请求必须在事件处理函数中调用，否则将会被拒绝。

## 退出全屏模式

用户总是可以自行退出全屏模式；详见 [Things your users want to know](#things_your_users_want_to_know)。你也可以以编程方式通过调用 {{DOMxRef("Document.exitFullscreen()")}} 方法来做到这点。

## 其他信息

{{DOMxRef("Document")}} 提供了一些额外的信息，在开发全屏网络应用时会很有用：

- {{DOMxRef("DocumentOrShadowRoot.fullscreenElement")}}
  - : `fullscreenElement` 属性可以告诉你当前以全屏模式显示的元素 {{DOMxRef("Element")}} 。若此项非空，文档处于全屏模式中，否则不在。
- {{DOMxRef("Document.fullscreenEnabled")}}
  - : `fullscreenEnabled` 属性可以告诉你文档当前是否为允许请求进入全屏幕模式的状态。

## 你的用户想了解的信息

你可能想确保使你的用户得知他可以按 <kbd>ESC</kbd> 键 (或 <kbd>F11</kbd>) 退出全屏模式。

此外，当处在全屏模式中，浏览其他页面、切换标签页、或者切换到其他应用 (例如使用 <kbd>Alt</kbd>-<kbd>Tab</kbd>) 也会导致退出全屏模式。

## 示例

在这个例子中，网页中显示了一个视频。按下 <kbd>Return</kbd> 或 <kbd>Enter</kbd> 键让用户在视频的窗口显示和全屏显示之间切换。

[View Live Examples](https://mdn.dev/archives/media/samples/domref/fullscreen.html)

### 监听 <kbd>Enter</kbd> 键

当页面加载完成时，这段代码可以设置一个事件监听器以监听 <kbd>Enter</kbd> 键。

```js
document.addEventListener(
  "keydown",
  function (e) {
    if (e.keyCode == 13) {
      toggleFullScreen();
    }
  },
  false,
);
```

### 切换全屏模式

当用户按下 <kbd>Enter</kbd> 键时，这段代码会被调用，像上面示例看到的那样。

```js
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
```

这段代码首先检查 {{DOMxRef("document")}} 的`fullscreenElement` 属性的值（亦要检查带有前缀 `moz`、`ms`、`webkit`）。如果其为 `null`，文档当前处于窗口模式中，所以我们需要切换到全屏模式。通过调用{{DOMxRef("element.requestFullscreen()")}}，可以切换到全屏模式。

如果全屏模式已经激活 (`fullscreenElement` 不为 `null`)，我们可以调用 {{DOMxRef("document.exitFullscreen()")}}（或其前缀化的版本，这取决于你使用的浏览器）。

## 前缀

> **备注：** 现在，只有 Firefox 64 和 Chrome 71 支持无前缀。

目前并不是所有的浏览器都实现了 API 的无前缀版本（你可以使用 [Fscreen](https://github.com/rafrex/fscreen) 获取跨浏览器全屏 API），这里有一份表格总结了前缀和它们之间的命名区别：

| Standard                                                 | WebKit (Safari) / Blink (Chrome & Opera) / Edge | Gecko (Firefox)          | Internet Explorer       |
| -------------------------------------------------------- | ----------------------------------------------- | ------------------------ | ----------------------- |
| {{DOMxRef("Document.fullscreen")}} {{Deprecated_Inline}} | `webkitIsFullScreen`                            | `mozFullScreen`          | -                       |
| {{DOMxRef("Document.fullscreenEnabled")}}                | `webkitFullscreenEnabled`                       | `mozFullScreenEnabled`   | `msFullscreenEnabled`   |
| {{DOMxRef("DocumentOrShadowRoot.fullscreenElement")}}    | `webkitFullscreenElement`                       | `mozFullScreenElement`   | `msFullscreenElement`   |
| {{DOMxRef("Document.onfullscreenchange")}}               | `onwebkitfullscreenchange`                      | `onmozfullscreenchange`  | `onMSFullscreenChange`  |
| {{DOMxRef("Document.onfullscreenerror")}}                | `onwebkitfullscreenerror`                       | `onmozfullscreenerror`   | `onMSFullscreenError`   |
| {{DOMxRef("Document.exitFullscreen()")}}                 | `webkitExitFullscreen()`                        | `mozCancelFullScreen()`  | `msExitFullscreen()`    |
| {{DOMxRef("Element.requestFullscreen()")}}               | `webkitRequestFullscreen()`                     | `mozRequestFullScreen()` | `msRequestFullscreen()` |

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 扩展链接

- [全屏 API](/zh-CN/docs/Web/API/Fullscreen_API)
- {{DOMxRef("Element.requestFullscreen()")}}
- {{DOMxRef("Document.exitFullscreen()")}}
- {{DOMxRef("Document.fullscreen")}}
- {{DOMxRef("Document.fullscreenElement")}}
- {{CSSxRef(":fullscreen")}}, {{CSSxRef("::backdrop")}}
- [`allowfullscreen`](/zh-CN/docs/Web/HTML/Element/iframe#allowfullscreen)
