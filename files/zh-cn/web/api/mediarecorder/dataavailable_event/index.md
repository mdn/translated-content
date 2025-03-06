---
title: MediaRecorder.ondataavailable
slug: Web/API/MediaRecorder/dataavailable_event
---

{{APIRef("MediaStream Recording")}}

**`MediaRecorder.ondataavailable`** 事件处理程序 (part of the [MediaStream 记录 API](/zh-CN/docs/Web/API/MediaStream_Recording_API)) 处理 `dataavailable` 事件，让你在响应运行代码{{domxref("Blob")}}数据被提供使用。

`dataavailable`当 MediaRecorder 将媒体数据传递到你的应用程序以供使用时，将触发该事件。数据在包含数据的{{domxref("Blob")}}对象中提供。这在四种情况下发生：

- 媒体流结束时，所有尚未传递到`ondataavailable`处理程序的媒体数据都将在单个{{domxref("Blob")}}中传递。
- 当调用{{domxref("MediaRecorder.stop()")}}时，自记录开始或`dataavailable`事件最后一次发生以来已捕获的所有媒体数据都将传递到{{domxref("Blob")}}中；此后，捕获结束。
- 调用{{domxref("MediaRecorder.requestData()")}} `dataavailable`时，将传递自记录开始或事件最后一次发生以来捕获的所有媒体数据；然后`Blob`创建一个新文件，并将媒体捕获继续到该 blob 中。
- 如果将`timeslice`属性传递到开始媒体捕获的{{domxref("MediaRecorder.start()")}}方法中，`dataavailable`则每`timeslice`毫秒触发一次事件。这意味着每个 Blob 都有特定的持续时间（最后一个 Blob 除外，后者可能更短，因为它将是自上次事件以来剩下的所有东西）。因此，如果该方法调用看起来像这样 - `recorder.start(1000);`-的`dataavailable`事件将媒体捕捉的每一秒发生火灾后，我们的事件处理程序将被称为与媒体数据的 BLOB 每秒即坚持一个第二长。你可以`timeslice`与{{domxref("MediaRecorder.stop()")}}和{{domxref("MediaRecorder.requestData()")}}一起使用，以产生多个相同长度的 Blob，以及其他较短的 Blob。

> [!NOTE]
> 包含媒体数据的 {{domxref("Blob")}} 在 `dataavailable` 事件的 `data` 属性中可用。

## 语法

在类似 {{domxref("EventTarget.addEventListener", "addEventListener()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
addEventListener("dataavailable", (event) => {});

ondataavailable = (event) => {};
```

## 示例

```js
const chunks = [];

mediaRecorder.onstop = (e) => {
  console.log("数据将在调用 MediaRecorder.stop() 后可用。");

  const audio = document.createElement("audio");
  audio.controls = true;
  const blob = new Blob(chunks, { type: mediaRecorder.mimeType });
  const audioURL = window.URL.createObjectURL(blob);
  audio.src = audioURL;
  console.log("录制停止");
};

mediaRecorder.ondataavailable = (e) => {
  chunks.push(e.data);
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 MediaStream 录制 API](/zh-CN/docs/Web/API/MediaStream_Recording_API)
- [Web](https://mdn.github.io/web-dictaphone/) Dictaphone：[Chris Mills 提供的](https://twitter.com/chrisdavidmills) MediaRecorder + getUserMedia + Web Audio API 可视化演示 ([在 Github 上提供](https://github.com/mdn/web-dictaphone/))。
- [simpl.info MediaStream 录制演示](https://simpl.info/mediarecorder/)，作者[Sam Dutton](https://twitter.com/sw12)。
- {{domxref("Navigator.getUserMedia")}}
