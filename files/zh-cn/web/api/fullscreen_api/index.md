---
title: 全屏 API
slug: Web/API/Fullscreen_API
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{DefaultAPISidebar("Fullscreen API")}}

**全屏 API**（Fullscreen API）通过添加方法使特定的 {{DOMxRef("Element")}}（及其后代）以全屏模式呈现，并在不再需要时退出全屏模式。这使得使用用户的整个屏幕（在退出全屏模式之前去除所有浏览器用户界面元素和其他应用程序）来展示所需内容（例如在线游戏）成为可能。

参见文章[全屏 API 指南](/zh-CN/docs/Web/API/Fullscreen_API/Guide)了解如何使用该 API 的详细信息。

## 接口

_全屏 API 没有自己的接口。相反，它通过增强多个其他接口来添加所需的方法、属性和事件处理器，以提供全屏功能。这些接口在以下部分中列出。_

## 实例方法

全屏 API 向 {{DOMxRef("Document")}} 和 {{DOMxRef("Element")}} 接口添加了方法，以允许打开和关闭全屏模式。

### Document 接口的实例方法

- {{DOMxRef("Document.exitFullscreen()")}}
  - : 请求{{Glossary("user agent", "用户代理")}}从全屏模式切换回窗口模式。返回一个 {{jsxref("Promise")}}，其在全屏模式完全关闭后兑现。

### Element 接口的实例方法

- {{DOMxRef("Element.requestFullscreen()")}}
  - : 请求用户代理将指定元素（及其后代）置于全屏模式，移除所有浏览器的用户界面元素以及所有其他应用程序。返回一个 {{jsxref("Promise")}}，其在全屏模式激活后兑现。

## 实例属性

- {{DOMxRef("Document.fullscreenElement")}} / {{DOMxRef("ShadowRoot.fullscreenElement")}}
  - : `fullscreenElement` 属性告诉你当前在 DOM（或影子 DOM）中以全屏模式显示的 {{DOMxRef("Element")}}。如果为 `null`，则文档（或影子 DOM）没有处于全屏模式。
- {{DOMxRef("Document.fullscreenEnabled")}}
  - : `fullscreenEnabled` 属性告诉你是否可以启用全屏模式。如果由于任何原因（例如 `"fullscreen"` 特性不被允许，或不支持全屏模式）而无法启用全屏模式，此属性为 `false`。

### 过时属性

- {{DOMxRef("Document.fullscreen")}} {{Deprecated_Inline}}

  - : 一个布尔值，如果文档有一个当前正在以全屏模式显示的元素，则为 `true`；否则返回 `false`。

    > [!NOTE]
    > 请使用 {{DOMxRef("Document")}} 或 {{DOMxRef("ShadowRoot")}} 的 {{DOMxRef("Document.fullscreenElement", "fullscreenElement")}} 属性代替；如果它不为 `null`，则它是一个当前正在以全屏模式显示的 {{DOMxRef("Element")}}。

## 事件

- {{domxref("Element/fullscreenchange_event", "fullscreenchange")}}
  - : 当元素进入或退出全屏模式时发送给该 {{DOMxRef("Element")}}。
- {{domxref("Element/fullscreenerror_event", "fullscreenerror")}}
  - : 如果尝试将元素切换到或退出全屏模式时发生错误，则发送给该 `Element`。

## 控制访问

可以使用[权限策略](/zh-CN/docs/Web/HTTP/Permissions_Policy)控制全屏模式的可用性。全屏模式特性由字符串 `"fullscreen"` 标识，默认允许列表值为 `"self"`，这意味着在顶级文档上下文中以及从与最顶层文档相同的来源加载的嵌套浏览上下文中允许全屏模式。

## 使用说明

用户可以选择按 <kbd>ESC</kbd>（或 <kbd>F11</kbd>）键退出全屏模式，而不是等待站点或应用程序以编程方式退出全屏模式。确保在用户界面中提供适当的用户界面元素，告知用户此选项对他们可用。

> [!NOTE]
> 导航到另一页面、切换标签页或使用任何应用程序切换器（或 <kbd>Alt</kbd>-<kbd>Tab</kbd>）切换到另一个应用程序也会退出全屏模式。

## 示例

### 简单的全屏用法

在此示例中，视频在网页中呈现。按下 <kbd>Enter</kbd> 键可让用户在窗口和全屏展示视频之间切换。

[查看实时示例](https://mdn.github.io/dom-examples/fullscreen-api/index.html)

#### 监听 Enter 键

当页面加载时，此代码会被运行以设置监听 <kbd>Enter</kbd> 键的事件监听器。

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

#### 切换全屏模式

上述事件处理器在用户按下 <kbd>Enter</kbd> 键时调用此代码。

```js
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}
```

这首先查询 {{DOMxRef("Document", "document")}} 的 `fullscreenElement` 属性的值。在实际部署中，此时，你需要检查其前缀版本（例如 `mozFullScreenElement`、`msFullscreenElement` 或 `webkitFullscreenElement`）。如果值为 `null`，文档当前处于窗口模式，因此我们需要切换到全屏模式；否则，它是当前处于全屏模式的元素。切换到全屏模式通过在 {{HTMLElement("video")}} 元素上调用 {{DOMxRef("Element.requestFullscreen()")}} 来完成。

如果全屏模式已经激活（`fullscreenElement` 不为 `null`），我们在 `document` 上调用 {{DOMxRef("Document.exitFullscreen", "exitFullscreen()")}} 来关闭全屏模式。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{DOMxRef("Element.requestFullscreen()")}}
- {{DOMxRef("Document.exitFullscreen()")}}
- {{DOMxRef("Document.fullscreen")}}
- {{DOMxRef("Document.fullscreenElement")}}
- {{CSSxRef(":fullscreen")}}、{{CSSxRef("::backdrop")}}
- [`allowfullscreen`](/zh-CN/docs/Web/HTML/Element/iframe#allowfullscreen)
