---
title: Element：contentvisibilityautostatechange 事件
short-title: contentvisibilityautostatechange
slug: Web/API/Element/contentvisibilityautostatechange_event
---

{{APIRef("CSS Containment")}}{{SeeCompatTable}}

**`contentvisibilityautostatechange`** 事件会在设置了 {{cssxref("content-visibility", "content-visibility: auto")}} 的元素开始或不再[与用户相关](/zh-CN/docs/Web/CSS/CSS_containment#与用户相关)，且正在[跳过其内容](/zh-CN/docs/Web/CSS/CSS_containment#跳过其内容)时触发。

在元素不再与用户相关时（在开始和结束事件之间），用户代理会跳过元素的渲染（包括布局和绘制），这可以显著提高页面渲染速度。{{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} 事件为应用代码在不需要时开始或停止渲染过程（如在 {{HTMLElement("canvas")}} 上绘画）提供了便利，进而节约了处理能力。

注意因为元素内容即使被隐藏不可见也仍将保持语义相关性（例如使用辅助技术的用户），所以不应使用此事件跳过重要的 DOM 语义更新。

## 语法

在 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("contentvisibilityautostatechange", (event) => {});
oncontentvisibilityautostatechange = (event) => {};
```

> **备注：** 事件的类型为 {{domxref("ContentVisibilityAutoStateChangeEvent")}}。

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

- {{domxref("ContentVisibilityAutoStateChangeEvent")}}
- [CSS 局限](/zh-CN/docs/Web/CSS/CSS_containment)
- {{cssxref("content-visibility")}} 属性
- {{cssxref("contain")}} 属性
