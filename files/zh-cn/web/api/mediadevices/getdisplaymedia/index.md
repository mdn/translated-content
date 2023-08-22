---
title: MediaDevices.getDisplayMedia()
slug: Web/API/MediaDevices/getDisplayMedia
---

{{DefaultAPISidebar("Screen Capture API")}}

这个 {{domxref("MediaDevices")}} 接口的 **`getDisplayMedia()`** 方法提示用户去选择和授权捕获展示的内容或部分内容（如一个窗口）在一个{{domxref("MediaStream")}} 里。然后，这个媒体流可以通过使用 [MediaStream Recording API](/zh-CN/docs/Web/API/MediaStream_Recording_API) 被记录或者作为[WebRTC](/zh-CN/docs/Web/API/WebRTC_API) 会话的一部分被传输。

去 [Using the Screen Capture API](/zh-CN/docs/Web/API/Screen_Capture_API/Using_Screen_Capture) 查找更多详情和例子。

## 语法

```plain
var promise = navigator.mediaDevices.getDisplayMedia(constraints);
```

### 参数

- `constraints` {{optional_inline}}
  - : 一个可选的{{domxref("MediaStreamConstraints")}}对象，它指定了返回的{{domxref("MediaStream")}}的要求。因为`getDisplayMedia()`需要视频轨道，所以即使`constraints` 对象没有明确请求视频轨道，返回的流也会有一个。

### 返回值

一个被解析为 {{domxref("MediaStream")}} 的 {{jsxref("Promise")}}，其中包含一个视频轨道。视频轨道的内容来自用户选择的屏幕区域以及一个可选的音频轨道。

> **备注：** 浏览器对音频的支持程度各不相同，既取决于是否支持，也取决于音频源。点击 [浏览器兼容性](#浏览器兼容性) 来查看各个浏览器的支持性。

### 异常

来自返回的 promise 的拒绝是通过将{{domxref("DOMException")}}错误对象传递给 promise 的失败处理程序来进行的。可能的错误是：

- `AbortError` ［中止错误］
  - : 发生了与以下任何其他异常不匹配的错误或故障。
- `InvalidStateError` ［拒绝错误］
  - : 调用 `getDisplayMedia()` 的 context 中的 {{domxref("document")}} 不是完全激活的; 例如，也许它不是最前面的标签。
- `NotAllowedError` ［拒绝错误］
  - : 用户拒绝授予访问屏幕区域的权限，或者不允许当前浏览实例访问屏幕共享。
- `NotFoundError` ［找不到错误］
  - : 没有可用于捕获的屏幕视频源。
- `NotReadableError` ［无法读取错误］
  - : 用户选择了屏幕，窗口，标签或其他屏幕数据源，但发生了硬件或操作系统级别错误或锁定，从而预先占用了共享所选源。
- `OverconstrainedError` ［转换错误］
  - : 创建流后，由于无法生成兼容的流导致应用指定的 `constraints` 失效。
- `TypeError` ［类型错误］
  - : 指定的 `constraints` 包括调用 `getDisplayMedia()` 时不允许的`constraints`。这些不受支持的`constraints`是 `advanced` 的，任何约束又有一个名为 `min` 或 `exact` 的成员。

## 示例

在下面的示例中，我们创建了一个 `startCapture()` 方法，该方法在给定由 `displayMediaOptions` 参数指定的一组选项的情况下启动屏幕捕获。选项以 {{domxref("MediaStreamConstraints")}}对象的形式指定，该对象指定首选流配置和从中捕获视频的显示表面

```js
async function startCapture(displayMediaOptions) {
  let captureStream = null;

  try {
    captureStream =
      await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
  } catch (err) {
    console.error("Error: " + err);
  }
  return captureStream;
}
```

这里使用 {{jsxref("await")}} 来进行异步等待 `getDisplayMedia()`来进行 {{domxref("MediaStream")}}解析，其中包含指定选项所请求的显示内容。之后，流被返回给调用者以供其使用，可能是使用 {{domxref("RTCPeerConnection.addTrack()")}}添加到 WebRTC 调用来从流中添加视频轨道。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- [Screen Capture API](/zh-CN/docs/Web/API/Screen_Capture_API)
- [Using the Screen Capture API](/zh-CN/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Media Capture and Streams API](/zh-CN/docs/Web/API/Media_Streams_API)
- [WebRTC API](/zh-CN/docs/Web/API/WebRTC_API)
- {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}: Capturing media from a camera and/or microphone
