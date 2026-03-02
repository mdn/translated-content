---
title: 媒体流图像捕获 API
slug: Web/API/MediaStream_Image_Capture_API
l10n:
  sourceCommit: 624bbdcb7d9beace299a4fa0d3ddcd8f6732cd90
---

{{DefaultAPISidebar("Image Capture API")}}

**媒体流图像捕获 API**（MediaStream Image Capture API）是用于从拍摄设备捕获图像或视频的 API。除了捕获数据之外，它还可以检索设备能力的信息，例如图像尺寸、是否支持消除红眼、是否有闪光灯以及这些功能当前的设置。相反地，该 API 允许在设备允许的限制范围内配置各项功能。

## 媒体流图像捕获的概念与用法

检索图像或视频流的过程如下所述。下面的示例代码改编自 [Chrome 的图片截取示例](https://googlechrome.github.io/samples/image-capture/)。

首先，调用 {{domxref("MediaDevices.getUserMedia()")}} 获取对设备的引用。下面的示例请求任何可用的视频设备，但 `getUserMedia()` 方法也允许请求更具体的能力。该方法返回一个会兑现为 {{domxref("MediaStream")}} 对象的 {{jsxref("Promise")}}。

```js
navigator.mediaDevices.getUserMedia({ video: true }).then((mediaStream) => {
  // 对媒体流进行操作
});
```

接下来，隔离媒体流中的视觉部分。通过调用 {{domxref("MediaStream.getVideoTracks()")}} 来完成。这会返回一个 {{domxref("MediaStreamTrack")}} 对象数组。下面的代码假定 `MediaStreamTrack` 数组中的第一个项是要使用的那个。也可以使用 `MediaStreamTrack` 对象的属性来选择所需的轨道。

```js
const track = mediaStream.getVideoTracks()[0];
```

此时，你可能希望在捕获图像之前配置设备能力。你可以在对轨道做任意操作之前调用轨道对象上的 {{domxref("MediaStreamTrack.applyConstraints","applyConstraints()")}}。

```js
let zoom = document.querySelector("#zoom");
const capabilities = track.getCapabilities();
// 检查是否支持缩放
if (!capabilities.zoom) {
  return;
}
track.applyConstraints({ advanced: [{ zoom: zoom.value }] });
```

最后，将 `MediaStreamTrack` 对象传递给 {{domxref("ImageCapture.ImageCapture()", "ImageCapture()")}} 构造函数。虽然 `MediaStream` 包含多种类型的轨道并提供多种检索方法，但如果传入的轨道的 {{domxref("MediaStreamTrack.kind")}} 不是 `"video"`，`ImageCapture` 构造函数会抛出类型为 `NotSupportedError` 的 {{domxref("DOMException")}}。

```js
let imageCapture = new ImageCapture(track);
```

## 接口

- {{domxref("ImageCapture")}}
  - : 通过有效的 {{domxref("MediaStreamTrack")}} 引用的拍摄设备捕获图像的接口。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("MediaStream")}}
- {{domxref("MediaStreamTrack")}}
