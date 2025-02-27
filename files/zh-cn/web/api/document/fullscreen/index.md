---
title: Document：fullscreen 属性
slug: Web/API/Document/fullscreen
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Fullscreen API")}}{{Deprecated_Header}}

过时的 {{domxref("Document")}} 接口的 **`fullscreen`** 只读属性表明页面当前是否以全屏模式显示内容。

尽管这个属性是只读的，但如果修改它，即使在严格模式下也不会抛出错误；它的 `setter` 方法是空操作将被忽略。

> [!NOTE]
> 由于该属性已被弃用，你可以通过检查 {{DOMxRef("Document.fullscreenElement")}} 是否不为 `null` 来确定页面是否处于全屏模式。

## 值

返回一个布尔值，如果页面当前在全屏模式下显示元素，则为 `true`；否则为 `false`。

## 示例

这个简单的函数使用过时的 `fullscreen` 属性报告当前是否激活了全屏模式。

```js
function isDocumentInFullScreenMode() {
  return document.fullscreen;
}
```

另一方面，下面的示例使用当前的 `fullscreenElement` 属性来确定同样的事情：

```js
function isDocumentInFullScreenMode() {
  return document.fullscreenElement !== null;
}
```

如果 `fullscreenElement` 不为 `null`，则返回 `true`，表示全屏模式正处于生效状态。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [全屏 API](/zh-CN/docs/Web/API/Fullscreen_API)
- [全屏指南](/zh-CN/docs/Web/API/Fullscreen_API/Guide)
- {{DOMxRef("Document.fullscreenEnabled")}}
