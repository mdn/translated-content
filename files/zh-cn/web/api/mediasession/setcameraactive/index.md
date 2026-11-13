---
title: MediaSession：setCameraActive() 方法
short-title: setCameraActive()
slug: Web/API/MediaSession/setCameraActive
l10n:
  sourceCommit: 624bbdcb7d9beace299a4fa0d3ddcd8f6732cd90
---

{{APIRef("Media Session API")}}

{{domxref("MediaSession")}} 接口的 **`setCameraActive()`** 方法用于向用户代理指示用户的摄像头是否处于活跃状态。

在 `navigator` 对象的 {{domxref("navigator.mediaSession", "mediaSession")}} 对象上调用此方法。

注意：摄像头的状态不在 {{domxref("MediaSession")}} 本身中跟踪，必须单独跟踪。

## 语法

```js-nolint
setCameraActive(active)
```

### 参数

- `active`
  - : 一个布尔值，表示摄像头是否被认为是活跃的。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

以下示例展示了如何更新当前 {{domxref('MediaSession')}} 的摄像头活跃状态，并通过 {{domxref("MediaSession.setActionHandler", "setActionHandler()")}} 设置摄像头状态切换的事件处理器。

```js
let cameraActive = false;

navigator.mediaSession.setCameraActive(cameraActive);

navigator.mediaSession.setActionHandler("togglecamera", () => {
  cameraActive = !cameraActive;
  navigator.mediaSession.setCameraActive(cameraActive);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
