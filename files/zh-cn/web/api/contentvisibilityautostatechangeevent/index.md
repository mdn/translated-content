---
title: ContentVisibilityAutoStateChangeEvent
slug: Web/API/ContentVisibilityAutoStateChangeEvent
page-type: web-api-interface
tags:
  - Interface
  - Reference
  - Experimental
browser-compat: api.ContentVisibilityAutoStateChangeEvent
---

{{APIRef("CSS Containment")}}{{SeeCompatTable}}

**`ContentVisibilityAutoStateChangeEvent`** 实现了 [CSS Containment Module Level 2](https://www.w3.org/TR/css-contain-2/#content-visibility-auto-state-changed) {{domxref("element/contentvisibilityautostatechanged_event","contentvisibilityautostatechanged")}} event 接口， 可以适用于任何使用了 {{cssxref("content-visibility", "content-visibility: auto")}} 的节点

如果使用了`content-visibility: auto`[relevant to the
user](https://www.w3.org/TR/css-contain-2/#relevant-to-the-user)，当元素的呈现状态由于任何使元素与用户相关的属性而发生变化时，该事件将在元素上触发。

这样做的用意是想帮助开发人员更好地控制，以及明确何时去停止或开始渲染，以响应用户代理停止或开始渲染content-visibility子树。
例如，开发人员可能希望在用户去渲染仍未呈现的元素时，停止其他脚本更新（例如画布更新）。
重要的是要注意，由于content-visibility: auto子树元素在语义上保持相关，因此此类子树中的更新仍应继续发生，但允许以降低的优先级发生。这确保了诸如在页面中查找和辅助技术等功能可以访问合理更新的内容。

**Note:** 在过去的提案中我们曾使用 `contentvisibilityautostatechanged`为命名，但在最新的提案中，我们将其更名为 `contentvisibilityautostatechange`

{{InheritanceDiagram}}

## 构造函数

- {{domxref("ContentVisibilityAutoStateChangeEvent.ContentVisibilityAutoStateChangeEvent", "ContentVisibilityAutoStateChangeEvent()")}} {{Experimental_Inline}}
  - : 构造一个 `ContentVisibilityAutoStateChangeEvent` 实例e.

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

// Call this when the canvas updates need to start.
function startCanvasUpdates(canvas) {
  // …
}

// Call this when the canvas updates need to stop.
function stopCanvasUpdates(canvas) {
  // …
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- The {{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} event
- [CSS Containment](/zh-CN/docs/Web/CSS/CSS_Containment)
- The {{cssxref("content-visibility")}} property
- The {{cssxref("contain")}} property
