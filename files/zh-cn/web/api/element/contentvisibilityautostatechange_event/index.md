---
title: 元素：contentvisibilityautostatechange 事件
slug: Web/API/Element/contentvisibilityautostatechange_event
---

{{APIRef("CSS Containment")}}{{SeeCompatTable}}

**`contentvisibilityautostatechange`** 事件会在设置了 {{cssxref("content-visibility", "content-visibility: auto")}} 的元素开始或不再[与用户相关](/zh-CN/docs/Web/CSS/CSS_Containment#与用户相关)，或[跳过它的内容](/zh-CN/docs/Web/CSS/CSS_Containment#跳过内容)时触发。

在元素不再与用户相关时（在开始和结束事件之间），用户代理会跳过元素的渲染，包括布局和绘制。这可以显著提高页面渲染速度。{{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} 事件为应用程序提供了一种在不需要渲染过程时启动或停止该过程（例如在 {{htmlelement("canvas")}} 上绘制）的方法，从而提升了性能。

请注意，即使在视图中隐藏，元素的内容仍将保持语义相关（例如使用辅助技术的用户），所以不应使用此事件来跳过重要的语义 DOM 的更新。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("contentvisibilityautostatechange", (event) => {});
contentvisibilityautostatechange = (event) => {};
```

> **备注：** 事件的类型为 {{domxref("ContentVisibilityAutoStateChangeEvent")}}。

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

- {{domxref("ContentVisibilityAutoStateChangeEvent")}}
- [CSS Containment](/zh-CN/docs/Web/CSS/CSS_Containment)
- {{cssxref("content-visibility")}} 属性
- {{cssxref("contain")}} 属性
