---
title: Document.exitFullscreen()
slug: Web/API/Document/exitFullscreen
---

{{ApiRef("Fullscreen API")}}

**`Document.exitFullscreen()`** 方法用于让当前文档退出全屏模式（原文表述不准确，详见备注）。调用这个方法会让文档回退到上一个调用{{domxref("Element.requestFullscreen()")}}方法进入全屏模式之前的状态。

> **备注：** 如果一个元素 A 在请求进去全屏模式之前，已经存在其他元素处于全屏状态，当这个元素 A 退出全屏模式之后，之前的元素仍然处于全屏状态。浏览器内部维护了一个全屏元素栈用于实现这个目的。

## 语法

```
document.exitFullscreen();
```

## 示例

```js
// 点击切换全屏模式
document.onclick = function (event) {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- [Using full-screen mode](/zh-CN/DOM/Using_full-screen_mode)
- {{ domxref("Element.requestFullscreen()") }}
- {{ domxref("Document.exitFullscreen()") }}
- {{ domxref("Document.fullscreen") }}
- {{ domxref("Document.fullscreenElement") }}
- {{ cssxref(":fullscreen") }}
- [`allowfullscreen`](/zh-CN/docs/Web/HTML/Element/iframe#allowfullscreen)
