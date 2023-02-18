---
title: ContentVisibilityAutoStateChangeEvent
slug: Web/API/ContentVisibilityAutoStateChangeEvent
---

{{APIRef("CSS Containment")}}{{SeeCompatTable}}

[CSS Containment Module Level 2](https://www.w3.org/TR/css-contain-2/#content-visibility-auto-state-changed) 的 **`ContentVisibilityAutoStateChangeEvent`** 接口是 {{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} 事件的对象，对于设置了 {{cssxref("content-visibility", "content-visibility: auto")}} 的元素，在元素开始或不再[与用户相关](/zh-CN/docs/Web/CSS/CSS_Containment#与用户相关)，或[跳过它的内容](/zh-CN/docs/Web/CSS/CSS_Containment#跳过内容)时会触发该事件。

在元素不再与用户相关时（在开始和结束事件之间），用户代理会跳过元素的渲染，包括布局和绘制。这可以显著提高页面渲染速度。{{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} 事件为应用程序提供了一种在不需要渲染过程时启动或停止该过程（例如在 {{htmlelement("canvas")}} 上绘制）的方法，从而提升了性能。

请注意，即使在视图中隐藏，元素的内容仍将保持语义相关（例如使用辅助技术的用户），所以不应使用此事件来跳过重要的语义 DOM 的更新。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("ContentVisibilityAutoStateChangeEvent.ContentVisibilityAutoStateChangeEvent", "ContentVisibilityAutoStateChangeEvent()")}} {{Experimental_Inline}}
  - : 构造一个新的 `ContentVisibilityAutoStateChangeEvent` 对象实例。

## 实例属性

_从其父接口 {{DOMxRef("Event")}} 继承属性。_

- {{domxref("ContentVisibilityAutoStateChangeEvent.skipped", "skipped")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 如果用户代理正在跳过元素的渲染，则返回 `true`，否则返回 `false`。

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

- {{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} 事件
- [CSS Containment](/zh-CN/docs/Web/CSS/CSS_Containment)
- {{cssxref("content-visibility")}} 属性
- {{cssxref("contain")}} 属性
