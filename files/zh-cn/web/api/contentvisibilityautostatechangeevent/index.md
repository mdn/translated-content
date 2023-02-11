---
title: ContentVisibilityAutoStateChangeEvent
slug: Web/API/ContentVisibilityAutoStateChangeEvent
---

{{APIRef("CSS Containment")}}{{SeeCompatTable}}

**`ContentVisibilityAutoStateChangeEvent`** 实现了 [CSS Containment Module Level 2](https://www.w3.org/TR/css-contain-2/#content-visibility-auto-state-changed) {{domxref("element/contentvisibilityautostatechanged_event"，"contentvisibilityautostatechanged")}} 接口，对于设置了 `content-visibility: auto` [relevant to the
user](https://www.w3.org/TR/css-contain-2/#relevant-to-the-user) 的css属性的元素，元素所呈现(渲染)的状态被相关属性或其他业务逻辑触发的变化而进一步随之变化的时候， `contentvisibilityautostatechanged`将被触发。

这样做的用意是想帮助开发人员更好地控制，以及明确何时去停止或开始渲染，用户代理跳过元素的渲染，包括布局和绘制。
这可以显著提高页面渲染速度。{{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}}
为应用程序的代码提供了一种在不需要渲染过程时启动或停止渲染过程（例如在｛{{htmlelement("canvas")}}上绘制）的方法，从而提升了性能。

**Note:** 在过去的提案中我们曾使用 `contentvisibilityautostatechanged`为命名，但在最新的提案中，我们将其更名为 `contentvisibilityautostatechange`。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("ContentVisibilityAutoStateChangeEvent.ContentVisibilityAutoStateChangeEvent", "ContentVisibilityAutoStateChangeEvent()")}} {{Experimental_Inline}}。
  - : 构造一个 `ContentVisibilityAutoStateChangeEvent` 实例对象。

## 实例属性

从其父级{{DOMxRef("Event")}}继承属性。

- {{domxref("ContentVisibilityAutoStateChangeEvent.skipped", "skipped")}} {{ReadOnlyInline}} {{Experimental_Inline}}。
- : 如果用户代理正在跳过元素的呈现，则返回 “true” ，否则返回 “false” 。

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

## 相关链接

- [contentvisibilityautostatechange](/zh-CN/docs/Web/API/Element/contentvisibilityautostatechange_event)
- [CSS containment](/zh-CN/docs/Web/CSS/CSS_Containment)
- [content-visibility](/zh-CN/docs/Web/CSS)
- [contain](/zh-CN/docs/Web/CSS)
