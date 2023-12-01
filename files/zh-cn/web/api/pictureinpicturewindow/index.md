---
title: PictureInPictureWindow
slug: Web/API/PictureInPictureWindow
---

{{APIRef("Picture-in-Picture API")}}

**`PictureInPictureWindow`**接口是一个对象，它可以通过编程的方式获得浮动视频窗口的宽度和高度，并调整浮动视频窗口的大小。

使用{{domxref("HTMLVideoElement.requestPictureInPicture()")}}返回一个具有此接口的 promise 值

## 属性

_`PictureInPictureWindow` 接口不继承任何属性。_

- {{domxref("PictureInPictureWindow.width")}} {{ReadOnlyInline}}
  - : 获取浮动视频窗宽度。
- {{domxref("PictureInPictureWindow.height")}} {{ReadOnlyInline}}
  - : 获取浮动视频窗高度。

## Methods

_The `PictureInPictureWindow` interface doesn't inherit any methods._

## Events

**The `PictureInPictureWindow` interface doesn't inherit any events.**

- {{domxref("PictureInPictureWindow.resize_event", "PictureInPictureWindow.resize")}}
  - : Sent to a {{DOMxRef("PictureInPictureWindow")}} when the floating video window is resized. The associated event handler is {{domxref("PictureInPictureWindow.onresize")}}.

## Examples

Given a `<button>` and a `<video>`, clicking the button will make the video enter the picture-in-picture mode; we then attach an event to print the floating video window dimensions to the console.

```js
const button = document.querySelector("button");
const video = document.querySelector("video");

function printPipWindowDimensions(evt) {
  const pipWindow = evt.target;
  console.log(
    `The floating window dimensions are: ${pipWindow.width}x${pipWindow.height}px`,
  );
  // will print:
  // The floating window dimensions are: 640x360px
}

button.onclick = function () {
  video.requestPictureInPicture().then((pictureInPictureWindow) => {
    pictureInPictureWindow.onresize = printPipWindowDimensions;
  });
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("Picture-in-Picture_API")}}
