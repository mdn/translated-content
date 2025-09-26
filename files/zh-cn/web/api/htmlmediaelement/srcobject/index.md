---
title: HTMLMediaElement：srcObject 属性
slug: Web/API/HTMLMediaElement/srcObject
l10n:
  sourceCommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLMediaElement")}} 接口的 **`srcObject`** 属性设定或返回一个对象，这个对象提供了一个与 {{domxref("HTMLMediaElement")}} 关联的媒体源。

该对象可以是一个 {{domxref("MediaStream")}}、一个 {{domxref("MediaSource")}}、一个 {{domxref("Blob")}} 或者一个 {{domxref("File")}} 类型（该类型继承自 `Blob`）。

> [!NOTE]
> 截至 2020 年 3 月，仅有 Safari 浏览器完全支持 `srcObject`，只能使用 `MediaSource`、`MediaStream`、`Blob` 和 `File` 对象作为其值。其他浏览器仅支持 `MediaStream` 对象；在它们跟进支持之前，可以考虑回退到使用 {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} 来创建 URL，并将其赋给 {{domxref("HTMLMediaElement.src")}}（下文会有示例）。另外，自 108 版本起，Chromium 支持通过将从 worker 传输过来的 `MediaSource` 对象的 {{domxref("MediaSourceHandle")}} 实例赋值给 `srcObject`，来连接一个专用 worker。

## 值

一个 {{domxref('MediaStream')}}、{{domxref('MediaSource')}}、{{domxref('Blob')}} 或 {{domxref('File')}} 对象（具体支持请参见兼容性表格）。

## 使用说明

媒体源规范的较早版本要求使用 {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} 来创建一个对象 URL，然后将 {{domxref("HTMLMediaElement.src", "src")}} 设置为该 URL。现在，你可以直接将 `srcObject` 设置为 {{domxref("MediaStream")}}。

## 示例

### 基础示例

在此示例中，来自摄像头的 {{domxref("MediaStream")}} 被赋值给了新创建的 {{HTMLElement("video")}} 元素。

```js
const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
const video = document.createElement("video");
video.srcObject = mediaStream;
```

在此示例中，新创建的 {{domxref('MediaSource')}} 被赋值给了新创建的 {{HTMLElement("video")}} 元素。

```js
const mediaSource = new MediaSource();
const video = document.createElement("video");
video.srcObject = mediaSource;
```

### 支持回退到 src 属性

以下示例支持需创建对象 URL 并将其赋值给 `src` 的较旧浏览器版本，以防止 `srcObject` 不受支持。

首先，来自摄像头的 {{domxref("MediaStream")}} 被赋值给新创建的 {{HTMLElement("video")}} 元素，并为旧版浏览器提供了回退支持。

```js
const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
const video = document.createElement("video");
if ("srcObject" in video) {
  video.srcObject = mediaStream;
} else {
  // 避免在新版浏览器中使用此方法，因为它即将被淘汰。
  video.src = URL.createObjectURL(mediaStream);
}
```

其次，将新创建的 {{domxref('MediaSource')}} 赋值给新创建的 {{HTMLElement("video")}} 元素，并为旧版浏览器以及尚不直接支持 {{domxref('MediaSource')}} 分配的浏览器提供了回退方案。

```js
const mediaSource = new MediaSource();
const video = document.createElement("video");
// 旧版浏览器可能不支持 srcObject 属性。
if ("srcObject" in video) {
  try {
    video.srcObject = mediaSource;
  } catch (err) {
    if (err.name !== "TypeError") {
      throw err;
    }
    // 即便它们支持，也可能仅限于支持 MediaStream
    video.src = URL.createObjectURL(mediaSource);
  }
} else {
  video.src = URL.createObjectURL(mediaSource);
}
```

### 在 worker 中构建 `MediaSource` 并将其传递给主线程以进行播放

{{domxref("MediaSource.handle")}} 属性可以在专用 worker 内部访问，然后通过 {{domxref("DedicatedWorkerGlobalScope.postMessage()", "postMessage()")}} 调用，将得到的 {{domxref("MediaSourceHandle")}} 对象传输到创建该 worker 的线程（本示例中为主线程）：

```js
// 在专用 worker 内部
let mediaSource = new MediaSource();
let handle = mediaSource.handle;
// 将句柄转移给创建 worker 的上下文
postMessage({ arg: handle }, [handle]);

mediaSource.addEventListener("sourceopen", () => {
  // 在创建 SourceBuffers 并用获取的媒体内容填充它们之前，请等待 MediaSource 上的 sourceopen 事件——直到 MediaSource 附加到 HTMLMediaElement。并且其 readyState 变为“open”，MediaSource 才会接受 SourceBuffer 的创建。
});
```

在主线程中，我们通过 {{domxref("Worker.message_event", "message")}} 事件处理器接收句柄，通过 {{htmlelement("video")}} 中的 {{domxref("HTMLMediaElement.srcObject")}} 属性将其附着到该元素上，并调用 {{domxref("HTMLMediaElement.play()", "play")}} 方法播放视频：

```js
worker.addEventListener("message", (msg) => {
  let mediaSourceHandle = msg.data.arg;
  video.srcObject = mediaSourceHandle;
  video.play();
});
```

> [!NOTE]
> {{domxref("MediaSourceHandle")}} 无法成功传输到共享 worker 或 service worker。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
