---
title: Window：pagehide 事件
slug: Web/API/Window/pagehide_event
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{APIRef("HTML DOM")}}

当浏览器从展示会话历史中的另一个页面过程中隐藏当前页面时，会向 {{domxref("Window")}} 发送 **`pagehide`** 事件。

例如，当用户点击浏览器的后退按钮时，在显示前一个页面之前，当前页面会接收到一个 `pagehide` 事件。

## 语法

在诸如 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 的方法中使用事件名，或者设置事件处理器属性。

```js
addEventListener("pagehide", (event) => {});
onpagehide = (event) => {};
```

## 事件类型

{{domxref("PageTransitionEvent")}}。从 {{domxref("Event")}} 继承。

{{InheritanceDiagram("PageTransitionEvent")}}

## 事件属性

- {{domxref("PageTransitionEvent.persisted")}} {{ReadOnlyInline}}
  - : 指示文档是否正在从缓存中加载。

## 事件处理器别名

除了在 `Window` 接口上之外，`onpagehide` 事件处理器属性也在以下目标上可用：

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## 使用说明

与 [`unload`](/zh-CN/docs/Web/API/Window/unload_event) 和 [`beforeunload`](/zh-CN/docs/Web/API/Window/beforeunload_event) 事件一样，此事件并未得到浏览器的可靠触发，特别是在移动设备上。例如，在以下场景中根本不会触发 `pagehide` 事件：

1. 移动端用户访问你的网页。
2. 用户随后切换到另一个应用程序。
3. 后来，用户从应用管理器中关闭了浏览器。

然而，与 `unload` 和 `beforeunload` 事件不同，此事件与[回退或前进缓存](https://web.developers.google.cn/articles/bfcache)（bfcache）兼容，因此向此事件添加监听器不会阻止页面被纳入 bfcache 中。

表示用户会话结束的最佳事件是 [`visibilitychange`](/zh-CN/docs/Web/API/Document/visibilitychange_event) 事件。在不支持 `visibilitychange` 的浏览器中，`pagehide` 事件是次佳的替代方案。

如果你特别想要检测页面卸载事件，`pagehide` 事件是最佳选项。

有关此事件如何与页面生命周期中其他事件相关的更多信息，请参阅[页面生命周期 API](https://developer.chrome.google.cn/docs/web-platform/page-lifecycle-api) 指南。

## 示例

在此示例中，建立了一个事件处理器来监听 `pagehide` 事件，并在页面被持久化以便重用时执行特殊处理。

```js
window.addEventListener(
  "pagehide",
  (event) => {
    if (event.persisted) {
      /* 页面没有被丢弃，因此可以在以后重复使用 */
    }
  },
  false,
);
```

这里也可以通过在 {{domxref("Window")}} 上的 `onpagehide` 事件处理器属性来编写：

```js
window.onpagehide = (event) => {
  if (event.persisted) {
    /* 页面没有被丢弃，因此可以在以后重复使用 */
  }
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Window.pageshow_event", "pageshow")}} 事件。
- [页面生命周期 API](https://developer.chrome.google.cn/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) 提供了在 web 应用程序中处理页面生命周期行为的最佳实践指南。
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle)：是一个 JavaScript 库，用于处理跨浏览器的页面生命周期行为不一致问题。
- [回退或前进缓存](https://web.developers.google.cn/articles/bfcache)解释了什么是回退或前进缓存，以及它对各种页面生命周期事件的影响。
