---
title: HTMLVideoElement.requestPictureInPicture()
slug: Web/API/HTMLVideoElement/requestPictureInPicture
tags:
  - API
  - Experimental
  - HTML DOM
  - HTMLVideoElement
  - Media
  - Method
  - Picture-in-Picture
  - Picture-in-Picture API
  - Reference
  - Video
  - pip
browser-compat: api.HTMLVideoElement.requestPictureInPicture
---
{{ APIRef("HTML DOM") }}

 **{{domxref("HTMLVideoElement")}}** 接口提供的 **`requestPictureInPicture()`** 方法会发出异步请求，并以画中画的模式显示视频。

该方法不能保证视频进入画中画。 如果授予了进入画中画的权限， 则将返回一个 {{jsxref("Promise")}}，最终完成后将收到一个 {{domxref("HTMLVideoElement.enterpictureinpicture_event", "enterpictureinpicture")}} 事件， 来表示它现在处于画中画状态。

## 语法

```js
requestPictureInPicture()
```

### 返回值

{{domxref("PictureInPictureWindow")}} 对象将由 {{jsxref("Promise")}} 最终完成后获得。可以用于监听用户何时调整该浮动窗口的大小。

## 示例

本示例请求视频进入画中画模式，并设置事件监听以处理窗口大小的调整。

```js
function enterPictureInPicture() {
  videoElement.requestPictureInPicture()
    .then(pictureInPictureWindow => {
      pictureInPictureWindow.addEventListener("resize", () => onPipWindowResize(), false);
    })
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("video")}} 元素
- {{DOMxRef("HTMLVideoElement.autoPictureInPicture")}}
- {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
- {{DOMxRef("Document.pictureInPictureEnabled")}}
- {{DOMxRef("Document.exitPictureInPicture()")}}
- {{DOMxRef("Document.pictureInPictureElement")}}
- {{CSSxRef(":picture-in-picture")}}
