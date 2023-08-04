---
title: Document.pictureInPictureEnabled
slug: Web/API/Document/pictureInPictureEnabled
---

{{APIRef("Picture-in-Picture API")}}

{{domxref("Document")}} 接口的只读属性 **`pictureInPictureEnabled`**，表示画中画模式是否可用。

除非 [Permissions-Policy](/zh-CN/docs/Web/HTTP/Headers/Permissions-Policy/picture-in-picture) 另有规定，否则画中画模式默认是可用的。

尽管这个属性是只读的，但是即使它被修改（甚至是在严格模式下），也不会抛出错误；setter 是无操作的并且将会被忽略。

## 值

一个布尔值，如果视频可以通过调用 {{domxref("HTMLVideoElement.requestPictureInPicture()")}} 进入画中画模式并在浮动窗口中播放，则为 `true`。如果画中画模式不可用，则值是 `false`。

## 示例

在此示例中，在 {{htmlElement("video")}} 元素试图进入画中画模式之前，会检查 `pictureInPictureEnabled` 的值，为避免在该功能不可用时调用。

```js
function requestPictureInPicture() {
  if (document.pictureInPictureEnabled) {
    videoElement.requestPictureInPicture();
  } else {
    console.log("Your browser cannot use picture-in-picture right now");
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
- {{DOMxRef("Document.exitPictureInPicture()")}}
- {{DOMxRef("Document.pictureInPictureElement")}}
- {{CSSxRef(":picture-in-picture")}}
