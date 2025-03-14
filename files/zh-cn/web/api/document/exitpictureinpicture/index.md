---
title: Document：exitPictureInPicture() 方法
slug: Web/API/Document/exitPictureInPicture
l10n:
  sourceCommit: 4cbb657f882495b1cd18cbbaa8d1c5237bce4eb8
---

{{APIRef("Picture-in-Picture API")}}

{{domxref("Document")}} 接口的 **`exitPictureInPicture()`** 方法请求退出以画中画模式浮动在此文档中播放的视频，来恢复屏幕之前的状态。这通常与先前调用的 {{domxref("HTMLVideoElement.requestPictureInPicture()")}} 相反。

## 语法

```js-nolint
exitPictureInPicture()
```

### 参数

无。

### 返回值

一个 {{jsxref("Promise")}}，在{{Glossary("user agent", "用户代理")}}退出画中画模式时兑现。如果在尝试退出全屏模式时发生错误，将会调用 promise 的 `catch()` 处理程序。

### 异常

- `InvalidStateError` {{domxref("DOMException")}}
  - : 如果 `document.pictureInPictureElement` 为 `null`，则抛出该异常。

## 示例

此示例使当前文档在鼠标点击按钮时退出画中画模式。

```js
document.onclick = (event) => {
  if (document.pictureInPictureElement) {
    document
      .exitPictureInPicture()
      .then(() => console.log("文档已退出画中画模式"))
      .catch((err) => console.error(err));
  } else {
    video.requestPictureInPicture();
  }
};
```

注意，如果你想要跟踪页面上正在以画中画模式播放的视频，你应该在 {{DOMxRef("HTMLVideoElement")}} 元素上监听 `enterpictureinpicture` 和 `exitpictureinpicture` 事件。或者，你可以检查 {{DOMxRef("Document.pictureInPictureElement")}} 元素是否引用了当前的 {{DOMxRef("HTMLVideoElement")}} 元素。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}}
- {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
- {{DOMxRef("Document.pictureInPictureEnabled")}}
- {{DOMxRef("Document.pictureInPictureElement")}}
- {{CSSxRef(":picture-in-picture")}}
- [画中画事件](/zh-CN/docs/Web/API/Picture-in-Picture_API#事件)
