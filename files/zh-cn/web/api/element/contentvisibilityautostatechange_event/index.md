---
title: '元素: contentvisibilityautostatechange 事件'
slug: Web/API/Element/contentvisibilityautostatechange_event
---

{{APIRef("CSS Containment")}}{{SeeCompatTable}}

当使用了 {{cssxref("content-visibility", "content-visibility: auto")}} 的元素，浏览器对这些元素 是否与用户相关 且 是否可跳过其内容 [CSS containment](/zh-CN/docs/Web/CSS/CSS_Containment)的判定发生变化时， contentvisibilityautostatechange 事件就会被触发。

当元素渲染时，若浏览器判定元素与用户不相关，用户代理可跳过元素的渲染，包括布局和绘制，这可以显著提高页面渲染速度。{{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} 事件为应用程序的代码提供了一种方法来启动或停止渲染过程（例如在 {{htmlelement("canvas")}} 上绘制），从而提升性能。

请注意，即使从视图中隐藏，元素内容仍将保持语义相关（例如，辅助技术用户），因此不应使用此回调结果作为参考来跳过重要的语义 DOM 更新。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理程序属性。

```js
addEventListener("contentvisibilityautostatechange", (event) => {});
contentvisibilityautostatechange = (event) => {};
```

> **备注:** 事件的类型为 {{domxref("ContentVisibilityAutoStateChangeEvent")}}.

## 示例

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

## 浏览器兼容性

{{Compat}}

## 参见

- [contentvisibilityautostatechange](/zh-CN/docs/Web/API/Element/contentvisibilityautostatechange_event)
- [CSS containment](/zh-CN/docs/Web/CSS/CSS_Containment)
- [content-visibility](/zh-CN/docs/Web/CSS)
- [contain](/zh-CN/docs/Web/CSS)
