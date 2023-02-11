---
title: contentvisibilityautostatechange event
slug: Web/API/Element/contentvisibilityautostatechange event
---

{{APIRef("CSS Containment")}}{{SeeCompatTable}}

contentvisibilityautostatechange 事件会在设置了 `content-visibility`, `content-visibility: auto` 的元素上触发。

当元素渲染时，不相关的事件触发了显示状态的变化时，用户会跳过元素的渲染代理后续逻辑，包括布局和绘制，这可以显着提高页面渲染速度。此事件为应用程序的代码提供了一种方法来启动或停止渲染过程（例如在`canvas` 上绘制，从而提高性能。

请注意，即使从视图中隐藏，元素内容仍将保持语义相关（例如，辅助技术用户），因此不应使用此信号来跳过重要的语义 DOM 更新。

## 语法

使用如下两种方式可进行监听

```js
addEventListener("contentvisibilityautostatechange", (event) => {});
contentvisibilityautostatechange = (event) => {};
```

> **Note:** 事件的类型为 {{domxref("ContentVisibilityAutoStateChangeEvent")}}.

## Examples

```js
const canvasElem = document.querySelector('canvas');

canvasElem.addEventListener('contentvisibilityautostatechange', stateChanged);
canvasElem.style.contentVisibility = "auto";

function stateChanged(event) {
  if (event.skipped) {
    stopCanvasUpdates(canvasElem);
  } else {
    startCanvasUpdates(canvasElem);
  }
}

// 画布需要更新时调用此方法
function startCanvasUpdates(canvas) {
  // … 
}

// 画布暂停更新时调用此方法
function stopCanvasUpdates(canvas) {
  // …
}
```

## 规范

{{Specifications}}

## 浏览器兼容

{{Compat}}

## 相关链接

- [contentvisibilityautostatechange](/zh-CN/docs/Web/API/Element/contentvisibilityautostatechange_event)
- [CSS containment](/zh-CN/docs/Web/CSS/CSS_Containment)
- [content-visibility](/zh-CN/docs/Web/CSS)
- [contain](/zh-CN/docs/Web/CSS)
