---
title: Document：pictureInPictureEnabled 属性
slug: Web/API/Document/pictureInPictureEnabled
l10n:
  sourceCommit: 04ebe57066db2cff350018649bdb15b2a10c67ba
---

{{APIRef("Picture-in-Picture API")}}

{{domxref("Document")}} 接口的 **`pictureInPictureEnabled`** 只读属性表示画中画模式是否可用。

除非[权限策略](/zh-CN/docs/Web/HTTP/Headers/Permissions-Policy/picture-in-picture)另有指定，否则画中画模式默认是可用的。

尽管这个属性是只读的，但是即使它被修改（甚至是在严格模式下），也不会抛出错误；setter 是无操作的并且将会被忽略。

## 值

一个布尔值，如果视频可以通过调用 {{domxref("HTMLVideoElement.requestPictureInPicture()")}} 进入画中画模式并在浮动窗口中播放，则为 `true`。如果画中画模式不可用，则值为 `false`。

## 示例

在此示例中，在 {{htmlElement("video")}} 元素试图进入画中画模式之前，会检查 `pictureInPictureEnabled` 的值，为避免在该功能不可用时调用。

```js
function requestPictureInPicture() {
  if (document.pictureInPictureEnabled) {
    videoElement.requestPictureInPicture();
  } else {
    console.log("你的浏览器目前无法使用画中画功能");
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
