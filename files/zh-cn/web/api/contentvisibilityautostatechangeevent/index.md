---
title: ContentVisibilityAutoStateChangeEvent
slug: Web/API/ContentVisibilityAutoStateChangeEvent
---

{{APIRef("CSS Containment")}}{{SeeCompatTable}}

**`ContentVisibilityAutoStateChangeEvent`** 实现了 [CSS Containment Module Level 2](https://www.w3.org/TR/css-contain-2/#content-visibility-auto-state-changed) {{domxref("element/contentvisibilityautostatechanged_event"，"contentvisibilityautostatechanged")}} 接口，对于设置了 `content-visibility: auto` [relevant to the
user](https://www.w3.org/TR/css-contain-2/#relevant-to-the-user) 的css属性的元素，元素所呈现(渲染)的状态被相关属性或其他业务逻辑触发的变化而进一步随之变化的时候， `contentvisibilityautostatechanged`将被触发。

这样做的用意是想帮助开发人员更好地控制，以及明确何时去停止或开始渲染，以达到更细致的介入 停止或开始渲染子树节点。
例如，开发人员可能希望在用户去渲染仍未呈现的元素时，停止其他脚本更新（比如画布更新）。
重要的是要注意，由于content-visibility: auto子树元素在语义上保持相关，因此此类子树节点中的更新仍应继续生效，但优先级会降低。这确保了类似于在页面中查找和辅助技术等功能可以访问到更为合理正确的更新的内容。

**Note:** 在过去的提案中我们曾使用 `contentvisibilityautostatechanged`为命名，但在最新的提案中，我们将其更名为 `contentvisibilityautostatechange`。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("ContentVisibilityAutoStateChangeEvent.ContentVisibilityAutoStateChangeEvent", "ContentVisibilityAutoStateChangeEvent()")}} {{Experimental_Inline}}
  - : 构造一个 `ContentVisibilityAutoStateChangeEvent` 实例。

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
