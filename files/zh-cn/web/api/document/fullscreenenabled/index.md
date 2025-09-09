---
title: Document：fullscreenEnabled 属性
slug: Web/API/Document/fullscreenEnabled
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("Fullscreen API")}}

{{domxref("Document")}} 接口上的只读属性 **`fullscreenEnabled`** 表明全屏模式是否可用。

全屏模式仅适用于不包含任何窗口化插件的页面，或者页面中的所有 {{HTMLElement("iframe")}} 元素都设置了 [`allowfullscreen`](/zh-CN/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen) 属性。

尽管这个属性是只读的，但如果修改它，即使在严格模式下也不会抛出错误；它的 `setter` 方法是空操作将被忽略。

## 值

一个布尔值，如果调用 {{domxref("Element.requestFullscreen()")}} 能进入全屏模式，则为 `true`。如果全屏模式不可用，则该值为 `false`。

## 示例

在下面的示例中，在 {{htmlElement("video")}} 元素尝试请求全屏模式之前，检查 `fullscreenEnabled` 的值，以避免在不可用时调用 {{domxref("Element.requestFullscreen()")}} 方法。

```js
function requestFullscreen() {
  if (document.fullscreenEnabled) {
    videoElement.requestFullscreen();
  } else {
    console.log("你的浏览器现在无法使用全屏模式");
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [全屏 API](/zh-CN/docs/Web/API/Fullscreen_API)
- [全屏指南](/zh-CN/docs/Web/API/Fullscreen_API/Guide)
- {{domxref("Element.requestFullscreen()")}}
- {{domxref("Document.exitFullscreen()")}}
- {{domxref("Document.fullscreenElement")}}
- {{cssxref(":fullscreen") }} 和 {{cssxref("::backdrop")}}
- {{HTMLElement("iframe")}} [`allowfullscreen`](/zh-CN/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen) 属性
