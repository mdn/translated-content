---
title: ContentVisibilityAutoStateChangeEvent
slug: Web/API/ContentVisibilityAutoStateChangeEvent
---

{{APIRef("CSS Containment")}}{{SeeCompatTable}}

**`ContentVisibilityAutoStateChangeEvent`** 接口是 {{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} 事件的对象。对于设置了 {{cssxref("content-visibility", "content-visibility: auto")}} 的任意元素，在元素开始或不再[与用户相关](/zh-CN/docs/Web/CSS/CSS_containment#与用户相关)，且正在[跳过其内容](/zh-CN/docs/Web/CSS/CSS_containment#跳过其内容)时触发此事件。

在元素不再与用户相关时（在开始和结束事件之间），用户代理会跳过元素的渲染（包括布局和绘制），这可以显著提高页面渲染速度。{{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} 事件为应用代码在不需要时开始或停止渲染过程（如在 {{HTMLElement("canvas")}} 上绘画）提供了便利，进而节约了处理能力。

注意因为元素内容即使被隐藏不可见也仍将保持语义相关性（例如使用辅助技术的用户），所以不应使用此事件跳过重要的 DOM 语义更新。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("ContentVisibilityAutoStateChangeEvent.ContentVisibilityAutoStateChangeEvent", "ContentVisibilityAutoStateChangeEvent()")}}
  - : 创建新的 `ContentVisibilityAutoStateChangeEvent` 对象实例。

## 实例属性

_从其父接口 {{DOMxRef("Event")}} 继承属性。_

- {{domxref("ContentVisibilityAutoStateChangeEvent.skipped", "skipped")}} {{ReadOnlyInline}}
  - : 如果用户代理正在跳过元素的渲染则返回 `true`，否则返回 `false`。

## 示例

```js
const canvasElem = document.querySelector("canvas");

canvasElem.addEventListener("contentvisibilityautostatechange", stateChanged);
canvasElem.style.contentVisibility = "auto";

function stateChanged(event) {
  if (event.skipped) {
    stopCanvasUpdates(canvasElem);
  } else {
    startCanvasUpdates(canvasElem);
  }
}

// 在画布需要开始更新时调用此方法。
function startCanvasUpdates(canvas) {
  // …
}

// 在画布需要停止更新时调用此方法。
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
- [CSS 局限](/zh-CN/docs/Web/CSS/CSS_containment)
- {{cssxref("content-visibility")}} 属性
- {{cssxref("contain")}} 属性
