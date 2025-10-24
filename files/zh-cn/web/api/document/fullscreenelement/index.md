---
title: Document：FullScreenElement 属性
slug: Web/API/Document/fullscreenElement
l10n:
  sourceCommit: c17bd570e356cdf3e1abb4c2dfe1e57a2cfb5bc7
---

{{ApiRef("Fullscreen API")}}

**`Document.fullscreenElement`** 只读属性返回当前页面中以全屏模式呈现的 {{domxref("Element")}}，如果当前页面未使用全屏模式，则返回 `null`。

尽管这个属性是只读的，但如果修改它，即使在严格模式下也不会抛出错误；它的 `setter` 方法是空操作将被忽略。

## 值

返回当前处于全屏模式的 {{domxref("Element")}} 对象；如果当前页面未使用全屏模式，则返回 `null`。如果有多个元素处于全屏模式下，则返回最顶层（最近请求）的元素。

## 示例

这个示例展示了一个名为 `isVideoInFullscreen()` 的函数，该函数查看 `fullscreenElement` 返回的值；如果文档处于全屏模式（`fullscreenElement` 不为 `null`）并且全屏元素的 {{domxref("Node.nodeName", "nodeName")}} 为 `VIDEO`，表示为 {{HTMLElement("video")}} 元素，则函数返回 `true`，表示视频处于全屏模式。

```js
function isVideoInFullscreen() {
  if (document.fullscreenElement?.nodeName === "VIDEO") {
    return true;
  }
  return false;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [全屏 API](/zh-CN/docs/Web/API/Fullscreen_API)
- [全屏 API 指南](/zh-CN/docs/Web/API/Fullscreen_API/Guide)
- {{domxref("Element.requestFullscreen()")}}
- {{domxref("Document.exitFullscreen()")}}
- {{domxref("Document.fullscreenEnabled")}}
- {{cssxref(":fullscreen")}} 和 {{cssxref("::backdrop")}}
- {{HTMLElement("iframe")}} [`allowfullscreen`](/zh-CN/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen) 属性
