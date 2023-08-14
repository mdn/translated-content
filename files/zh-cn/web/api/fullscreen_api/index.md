---
title: 全屏 API
slug: Web/API/Fullscreen_API
---

{{DefaultAPISidebar("Fullscreen API")}}

**`全屏 API`** 为使用用户的整个屏幕展现网络内容提供了一种简单的方式，并且在不需要时退出全屏模式。这种 API 让你可以简单地控制浏览器，使得一个元素与其子元素，如果存在的话，可以占据整个屏幕，并在此期间，从屏幕上隐藏所有的浏览器用户界面以及其他应用。

可以在[全屏 API 指南](/zh-CN/docs/Web/API/Fullscreen_API/Guide)这篇文章了解更多细节。

> **备注：** 当前并不是所有的浏览器都支持该 API，大多数浏览器需要使用供应商前缀或者尚未实现该规范。下面的浏览器兼容性表 [Browser compatibility](#browser_compatibility) 可以看到各个浏览器对此的支持（你也可以使用 [Fscreen](https://github.com/rafrex/fscreen) 来提供跨浏览器 API 访问）。

## 接口

全屏 API 没有它自己的接口实现。相反，它提供了一些其他接口以供实现全屏所需的方法、属性、事件处理函数。接下来会列出所有细节。

## 方法

全屏 API 在 {{DOMxRef("Document")}} 和 {{DOMxRef("Element")}} 接口中增加了一些方法，可用于允许打开关闭全屏模式。

### Document 中的方法

- {{DOMxRef("Document.exitFullscreen()")}}
  - : 用于请求从全屏模式切换到窗口模式，会返回一个 {{jsxref("Promise")}}，会在全屏模式完全关闭的时候被置为 resolved 状态。

### Element 中的方法

- {{DOMxRef("Element.requestFullscreen()")}}
  - : 请求浏览器（user agent）将特定元素（甚至延伸到它的后代元素）置为全屏模式，隐去屏幕上的浏览器所有 UI 元素，以及其他应用。返回一个 {{jsxref("Promise")}}，并会在全屏模式被激活的时候变成 resolved 状态。

## 属性

_{{DOMxRef("Document")}} 提供了可以用于判断是否支持和启用全屏模式的属性，也能得知现在是否处在全屏模式、哪一个元素在使用屏幕等信息。_

- {{DOMxRef("DocumentOrShadowRoot.fullscreenElement")}}
  - : `fullscreenElement` 属性提供了当前在 DOM（或者 shadow DOM）里被展示为全屏模式的 {{DOMxRef("Element")}}，如果这个值为 `null`，文档不处于全屏模式。
- {{DOMxRef("Document.fullscreenEnabled")}}

  - : `fullscreenEnabled` 属性提供了启用全屏模式的可能性。当它的值是 `false` 的时候，表示全屏模式不可用（可能的原因有 `"fullscreen"` 特性不被允许，或全屏模式不被支持等）。

### 事件处理程序

Fullscreen API 定义了两个事件，可用于检测全屏模式的打开和关闭，以及在全屏和窗口模式之间切换过程中发生的错误。_{{DOMxRef("Document")}}_ 和 _{{DOMxRef("Element")}}_ 接口提供了这些事件的事件处理函数。

> **备注：** 这些事件处理函数特性不可以当成 HTML 内容属性来使用。换句话说，你无法在 HTML 内容中为 [`fullscreenchange`](/zh-CN/docs/Web/API/Document/fullscreenchange_event) 和 [`fullscreenerror`](/zh-CN/docs/Web/API/Document/fullscreenerror_event) 指定事件处理程序，你必须通过 JavaScript 代码添加它们。

#### Document 上的事件处理程序

- {{DOMxRef("Document.onfullscreenchange")}}
  - : [`fullscreenchange`](/zh-CN/docs/Web/API/Document/fullscreenchange_event) 事件的处理程序，当进入全屏或退出全屏时，事件将被发送到{{DOMxRef("Document")}}上。此处理程序仅在整个文档全屏模式更改时有效。
- {{DOMxRef("Document.onfullscreenerror")}}
  - : [`fullscreenerror`](/zh-CN/docs/Web/API/Document/fullscreenerror_event) 事件的处理程序，当进入全屏或退出全屏出错时，事件将被发送到 {{DOMxRef("Document")}} 上，仅对整个文档的全屏模式更改出错时候有效。

#### Element 上的事件处理程序

- {{DOMxRef("Element.onfullscreenchange")}}
  - : 当全屏事件发生时，该事件会被发送到该元素，表明该元素进入或退出全屏模式
- {{DOMxRef("Element.onfullscreenerror")}}
  - : [`fullscreenerror`](/zh-CN/docs/Web/API/Document/fullscreenerror_event) 事件的处理程序，当指定的 {{DOMxRef("Element")}} 改变全屏模式时候出现错误，该事件将被发送到指定的 {{DOMxRef("Element")}} 上。

### 废弃属性

- {{DOMxRef("Document.fullscreen")}} {{Deprecated_Inline}}

  - : 一个布尔值，文档内任意一个元素以全屏模式程序时该值为`true`，否则为 `false`。

    > **备注：** 请改用 {{DOMxRef("ShadowRoot")}} 或 {{DOMxRef("Document")}} 上的 {{DOMxRef("Document.fullscreenElement", "fullscreenElement")}} 属性；如果它不是 null，则它是就是当前在全屏模式下显示的元素。

## 事件

全屏 API 定义了两个事件：1.可用来检测全屏模式何时打开和关闭。2.在全屏模式和窗口模式之间切换过程中何时发生错误。

- [`fullscreenchange`](/zh-CN/docs/Web/API/Document/fullscreenchange_event)
  - : 当全屏或退出全屏时发送消息给（监听的）的 {{DOMxRef("Document")}} 或 {{DOMxRef("Element")}} 。
- [`fullscreenerror`](/zh-CN/docs/Web/API/Document/fullscreenerror_event)
  - : 当全屏或退出全屏是发生了错误时，将错误消息发送给（监听的）的 {{DOMxRef("Document")}} 或 {{DOMxRef("Element")}} 。

## Dictionaries

- {{DOMxRef("FullscreenOptions")}}
  - : 在调用 {{DOMxRef("Element.requestFullscreen", "requestFullscreen()")}} 时可以设置选项。

## 访问控制

全屏模式可由功能策略（ [Feature Policy](/zh-CN/docs/Web/HTTP/Feature_Policy)）控制。全屏模式功能由字符串“full screen”标识，默认的允许列表值为“self”，这意味着在顶级文档上下文 以及 从与顶级文档相同的源加载的嵌套上下文中允许使用全屏模式。

请参阅使用功能策略（[Feature Policy](/zh-CN/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)）以了解有关使用功能策略控制对 API 的访问的更多信息。

## 使用说明

用户通过按 <kbd>ESC</kbd> 键（或 <kbd>F11</kbd>）即可退出全屏模式，而不是等着站点或应用的代码来做这件事。确定你在你的用户界面里提供合适的界面元素来告知用户这个可选项。

> **备注：** 当处在全屏模式中，浏览其他页面，切换标签页，或者切换到其他应用（例如使用 <kbd>Alt</kbd>-<kbd>Tab</kbd>）也会导致退出全屏模式。

## 示例

在这个例子中，网页中显示了一个视频。按下 <kbd>Enter</kbd> 键让用户在视频的窗口显示和全屏显示之间切换。

[查看在线演示](https://mdn.github.io/dom-examples/fullscreen-api/index.html)

### 监听 <kbd>Enter</kbd> 键

当页面加载时，这段代码会运行，设置一个事件监听器以监听 <kbd>Enter</kbd> 键。

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

当用户按下 <kbd>Enter</kbd> 键时，这段代码会被调用，像上面看到的那样。

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

这段代码首先检查 [`document`](/zh-CN/docs/Web/API/Document) 的 `fullscreenElement` 属性的值（亦要检查带有前缀 `moz`、`ms`、`webkit`）。如果其为 `null`，文档当前处于窗口模式中，所以我们需要切换到全屏模式。通过调用 [`element.requestFullscreen()`](/zh-CN/docs/Web/API/Element/requestFullscreen)，可以切换到全屏模式。

如果全屏模式已经激活（`fullscreenElement` 不为 `null`），我们可以调用 [`document.exitFullscreen()`](/zh-CN/docs/Web/API/Document/exitFullscreen)（或其前缀化的版本，这取决于你使用的浏览器）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using fullscreen mode](/zh-CN/docs/Web/API/Fullscreen_API)
- {{ domxref("Element.requestFullscreen()") }}
- {{ domxref("Document.exitFullscreen()") }}
- {{ domxref("Document.fullscreen") }}
- {{ domxref("Document.fullscreenElement") }}
- {{ cssxref(":fullscreen") }}, {{cssxref("::backdrop")}}
- [`allowfullscreen`](/zh-CN/docs/Web/HTML/Element/iframe#allowfullscreen)
