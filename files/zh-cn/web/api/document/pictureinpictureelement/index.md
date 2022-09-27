---
title: Document.pictureInPictureElement
slug: Web/API/Document/pictureInPictureElement
---

{{ApiRef("Fullscreen API")}}

只读属性 **`Document.pictureInPictureElement`** 返回当前文档中以画中画模式呈现的 {{ domxref("Element") }}，如果没有使用画中画模式，则返回 `null`。

尽管这个属性是只读的，但是即使它被修改（甚至是在严格模式下），也不会抛出错误；setter 是无操作的并且将会被忽略。

## 值

对于当前处在画中画模式 {{domxref("Element")}} 对象的引用；如果文档当前并未使用画中画模式，则返回值是 `null`。

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
- {{DOMxRef("HTMLVideoElement.autoPictureInPicture")}}
- {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
- {{DOMxRef("Document.pictureInPictureEnabled")}}
- {{DOMxRef("Document.exitPictureInPicture()")}}
- {{CSSxRef(":picture-in-picture")}}
