---
title: PictureInPictureWindow
slug: Web/API/PictureInPictureWindow
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Picture-in-Picture API")}}

**`PictureInPictureWindow`** 接口表示一个能够以编程方式获取浮动视频窗口的 **`width`** 和 **`height`** 和 **`resize event`** 的对象。

通过使用 {{domxref("HTMLVideoElement.requestPictureInPicture()")}} 函数返回的 promise 值，可以获得此接口的对象。

{{InheritanceDiagram}}

## 实例属性

_`PictureInPictureWindow` 接口不继承任何属性。_

- {{domxref("PictureInPictureWindow.width")}} {{ReadOnlyInline}}
  - : 获取浮动视频窗口的宽度。
- {{domxref("PictureInPictureWindow.height")}} {{ReadOnlyInline}}
  - : 获取浮动视频窗口的高度。

## 实例方法

_`PictureInPictureWindow` 接口不继承任何方法。_

## 事件

_`PictureInPictureWindow` 接口不继承任何事件。_

- {{domxref("PictureInPictureWindow.resize_event", "resize")}}
  - : 当浮动视频窗口的大小改变时，发送给 `PictureInPictureWindow`。

## 示例

给定一个 `<button>` 和一个 `<video>`，点击按钮会使视频进入画中画模式；接着我们添加一个事件，将浮动视频窗口的尺寸输出到控制台。

```js
const button = document.querySelector("button");
const video = document.querySelector("video");

function printPipWindowDimensions(evt) {
  const pipWindow = evt.target;
  console.log(`浮动窗口的尺寸为：${pipWindow.width}x${pipWindow.height}px`);
  // 将会打印：
  // 浮动窗口的尺寸为：640x360px
}

button.onclick = () => {
  video.requestPictureInPicture().then((pictureInPictureWindow) => {
    pictureInPictureWindow.onresize = printPipWindowDimensions;
  });
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{DOMxRef("Picture-in-Picture_API", "画中画 API", "", 1)}}
