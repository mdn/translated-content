---
title: ContentVisibilityAutoStateChangeEvent：skipped 属性
short-title: skipped
slug: Web/API/ContentVisibilityAutoStateChangeEvent/skipped
---

{{APIRef("CSS Containment")}}

若用户代理[跳过元素内容](/zh-CN/docs/Web/CSS/CSS_containment#跳过其内容)，则 {{DOMXref("ContentVisibilityAutoStateChangeEvent")}} 接口的只读属性 `skipped` 返回 `true`，否则返回 `false`。

## 值

布尔值。若用户代理[跳过元素内容](/zh-CN/docs/Web/CSS/CSS_containment#跳过其内容)则返回 `true`，否则返回 `false`。

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

- {{DOMXref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} 事件
- [CSS 局限](/zh-CN/docs/Web/CSS/CSS_containment)
- {{CSSXref("content-visibility")}} 属性
- {{CSSXref("contain")}} 属性
