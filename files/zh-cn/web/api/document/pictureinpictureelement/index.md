---
title: Document：pictureInPictureElement 属性
slug: Web/API/Document/pictureInPictureElement
l10n:
  sourceCommit: 20e15ad6027f10c7bdd48f36776876cd1aa3a63c
---

{{APIRef("Picture-in-Picture API")}}

{{domxref("Document")}} 接口的 **`pictureInPictureElement`** 只读属性返回当前文档中以画中画模式呈现的 {{ domxref("Element") }}，如果没有使用画中画模式，则返回 `null`。

尽管这个属性是只读的，但是即使它被修改（甚至是在严格模式下），也不会抛出错误；setter 是无操作的并且将会被忽略。

## 值

对当前处于画中画模式的 {{domxref("Element")}} 对象的引用。

如果文档没有处于画中画模式的相关元素，则返回 `null`。例如，没有画中画元素，或者画中画元素来自 iframe 中。

## 示例

此示例展示了一个 `exitPictureInPicture()` 函数，该函数的运行由 `pictureInPictureElement` 的返回值决定。如果文档处于画中画模式（`pictureInPictureElement` 不是 `null`），[`Document.exitPictureInPicture()`](/zh-CN/docs/Web/API/Document/exitPictureInPicture) 将被运行以退出画中画模式。

```js
function exitPictureInPicture() {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}}
- {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
- {{DOMxRef("Document.pictureInPictureEnabled")}}
- {{DOMxRef("Document.exitPictureInPicture()")}}
- {{CSSxRef(":picture-in-picture")}}
