---
title: Element.onfullscreenerror
slug: Web/API/Element/fullscreenerror_event
---

{{ApiRef("Fullscreen API")}}

{{domxref("Element")}} 接口的 **`onfullscreenerror`** 属性是在{{domxref("Element")}} 过渡到或退出全屏模式发生错误后处理事件{{event("fullscreenerror")}}的事件处理程序。

## 语法

```plain
targetElement.onfullscreenerror = fullscreenErrorHandler;
```

### 值

一个处理事件{{event("fullscreenerror")}}的事件处理程序。

## 示例

本示例尝试不从用户发起的事件 (如点击事件{{event("click")}}或键盘事件{{event("keypress")}}) 处理程序来触发全屏，由于全屏模式只允许由用户主动输入触发，因此该操作会发生错误，从而导致{{domxref("Element")}}会触发{{event("fullscreenerror")}}事件传递给错误处理程序

```js
let elem = document.querySelector("video")}}

elem.onfullscreenerror = function ( event ) {
  displayWarning("Unable to switch into full-screen mode.");
};

//....

elem.requestFullscreen();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Fullscreen API](/zh-CN/docs/Web/API/Fullscreen_API)
- [Guide to the Fullscreen API](/zh-CN/docs/Web/API/Fullscreen_API/Guide)
- {{event("fullscreenerror")}}
- {{domxref("Element.onfullscreenchange")}}
- {{domxref("Document.onfullscreenerror")}}
