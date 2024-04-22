---
title: HTMLVideoElement：requestPictureInPicture() 方法
slug: Web/API/HTMLVideoElement/requestPictureInPicture
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("Picture-in-Picture API")}}

**{{domxref("HTMLVideoElement")}}** 接口提供的 **`requestPictureInPicture()`** 方法会发出异步请求，并以画中画的模式显示视频。

该方法不能保证视频进入画中画。如果授予了进入画中画的权限，则返回的 {{jsxref("Promise")}} 会兑现，且视频将收到一个 {{domxref("HTMLVideoElement.enterpictureinpicture_event", "enterpictureinpicture")}} 事件，来表示它现在处于画中画状态。

## 语法

```js-nolint
requestPictureInPicture()
```

### 参数

无。

### 返回值

{{jsxref("Promise")}}，会兑现一个可用于监听用户何时调整该浮动窗口的大小的 {{domxref("PictureInPictureWindow")}} 对象。

### 异常

- `NotSupportedError` {{domxref("DOMException")}}
  - : 如果该特性不受支持（例如，被用户偏好设置或平台限制禁用），则抛出该异常。
- `SecurityError` {{domxref("DOMException")}}
  - : 如果该功能被[权限策略](/zh-CN/docs/Web/HTTP/Permissions_Policy)阻止，则抛出该异常。
- `InvalidStateError` {{domxref("DOMException")}}
  - : 如果视频元素的 `readState` 为 `HAVE_NOTHING`，或者视频元素没有视频轨道，或者视频元素的 `disablePictureInPicture` 属性为 `true`，则抛出该异常。
- `NotAllowedError` {{domxref("DOMException")}}
  - : 如果 `document.pictureInPictureElement` 为 `null` 且文档没有{{Glossary("transient activation", "瞬态激活")}}，则抛出错误。

## 安全

需要[瞬态用户激活](/zh-CN/docs/Web/Security/User_activation)。用户必须与页面或 UI 元素进行交互，才能使用此特性。

## 示例

本示例请求视频进入画中画模式，并设置事件监听以处理窗口大小的调整。

```js
function enterPictureInPicture() {
  videoElement.requestPictureInPicture().then((pictureInPictureWindow) => {
    pictureInPictureWindow.addEventListener(
      "resize",
      () => onPipWindowResize(),
      false,
    );
  });
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("video")}} 元素
- {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
- {{DOMxRef("Document.pictureInPictureEnabled")}}
- {{DOMxRef("Document.exitPictureInPicture()")}}
- {{DOMxRef("Document.pictureInPictureElement")}}
- {{CSSxRef(":picture-in-picture")}}
