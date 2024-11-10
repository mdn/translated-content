---
title: MediaStream Recording API
slug: Web/API/MediaStream_Recording_API
---

{{DefaultAPISidebar("MediaStream Recording")}}

**MediaStream Recording API** 有时简称为 _Media Recording API_ 或者 _MediaRecorder API_，与[媒体捕捉与媒体流 API](/zh-CN/docs/Web/API/Media_Capture_and_Streams_API) 和 [WebRTC API](/zh-CN/docs/Web/API/WebRTC_API) 密切相关。MediaStream Recording API 使得捕获通过 {{domxref("MediaStream")}} 或者{{domxref("HTMLMediaElement")}} 对象产生的用于分析、加工或者保存到硬盘的数据成为可能。它也非常容易让人们使用。

## 基本概念

MediaStream Recording API 由一个主接口{{domxref("MediaRecorder")}}组成，这个接口负责的所有工作是从{{domxref("MediaStream")}}获取数据并将其传递给你进行处理。数据通过一系列 {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}} 事件传递，这些数据已经成为你创建 `MediaRecorder` 时所声明的格式。然后，你可以进一步处理数据，或者根据需要将其写入文件。

### 录制过程概述

记录一个流的过程是非常容易的：

1. 建立一个 {{domxref("MediaStream")}}或者{{domxref("HTMLMediaElement")}} (以 {{HTMLElement("audio")}} 或 {{HTMLElement("video")}} 元素的形式) 来充当媒体数据的源。
2. 创建一个 {{domxref("MediaRecorder")}} 对象，指定源以及任何有需求的选项 (比如容器的 MIME 类型或它轨道所需的比特率).
3. 给 {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}} 事件设置{{domxref("MediaRecorder.ondataavailable")}} 事件处理函数; 会在数据可利用时候调用。
4. 一旦媒体源播放，你已经准备好录制，使用 {{domxref("MediaRecorder.start()")}} 开始录制。
5. {{domxref("MediaRecorder.dataavailable_event", "dataavailable")}} 事件处理函数正如你所愿的在每次数据准备好时调用; 这个事件有一个值为包含媒体数据的{{domxref("Blob")}} 类型的 `data` 属性。你可以强制 `dataavailable` 事件发生，因此会给你传递最新的声音以至于可以让你过滤、保存或者做一些其他的事情。
6. 当源媒体停止播放时候，录制自动结束。
7. 你可以随时结束录制通过使用 {{domxref("MediaRecorder.stop()")}}.

> [!NOTE]
> 单单使用包含已经录制好媒体切片的{{domxref("Blob")}}s 将大可不能单独播放。媒体在重放之前需要重新组装。

如果在录制过程中出错，[`error`](/zh-CN/docs/Web/API/Element/error_event) 事件将会传给`MediaRecorder`. 你可以设置{{domxref("MediaRecorder.onerror", "onerror")}}去监听 `error` 事件。

例子中，我们使用 Canvas 作为{{domxref("MediaStream")}}的源，在 9 秒后停止录音。

```js
var canvas = document.querySelector("canvas");

// Optional frames per second argument.
var stream = canvas.captureStream(25);
var recordedChunks = [];

console.log(stream);
var options = { mimeType: "video/webm; codecs=vp9" };
mediaRecorder = new MediaRecorder(stream, options);

mediaRecorder.ondataavailable = handleDataAvailable;
mediaRecorder.start();

function handleDataAvailable(event) {
  console.log("data-available");
  if (event.data.size > 0) {
    recordedChunks.push(event.data);
    console.log(recordedChunks);
    download();
  } else {
    // ...
  }
}
function download() {
  var blob = new Blob(recordedChunks, {
    type: "video/webm",
  });
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  a.href = url;
  a.download = "test.webm";
  a.click();
  window.URL.revokeObjectURL(url);
}

// demo: to download after 9sec
setTimeout((event) => {
  console.log("stopping");
  mediaRecorder.stop();
}, 9000);
```

### 检查 and 控制记录器的状态

你也可以使用 `MediaRecorder` 对象的属性去决定录制过程的状态，用 {{domxref("MediaRecorder.pause", "pause()")}} 和 {{domxref("MediaRecorder.resume", "resume()")}} 方法暂停或者继续媒体源的录制。

如果你需要检查一个特殊的 MIME 类型是否被支持，使用{{domxref("MediaRecorder.isTypeSupported()")}}.

### 检查潜在的输入源

如果你的目标是记录摄像头或麦克风输入，你可能希望在构建 `MediaRecorder` 之前检查可用的输入设备。这时，你需要调用 {{domxref("MediaDevices.enumerateDevices", "navigator.mediaDevices.enumerateDevices()")}} 来得到可使用的媒体设备。你可以检查此列表，发现潜在的设备，甚至在有需要的时候过滤掉设备。

在这块代码中，`enumerateDevices()` 被用来检查可利用的设备，找到那些音频输入设备，创建{{HTMLElement("option")}} 元素，之后添加到{{HTMLElement("select")}}元素，代表输入源选择器 .

```js
navigator.mediaDevices.enumerateDevices().then(function (devices) {
  devices.forEach(function (device) {
    let menu = document.getElementById("inputdevices");
    if (device.kind == "audioinput") {
      let item = document.createElement("option");
      item.innerHTML = device.label;
      item.value = device.deviceId;
      menu.appendChild(item);
    }
  });
});
```

类似的代码可以用来让用户限制他们希望使用的设备。

### 更多信息

更多关于 MediaStream Recording API 的使用，查看 [Using the MediaStream Recording API](/zh-CN/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API), 这个显示了如何使用 API 来记录音频剪辑。另一篇文章，[Recording a media element](/zh-CN/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element), 介绍了如何从 {{HTMLElement("audio")}} 或{{HTMLElement("video")}} 元素 接收信息流和如何使用接收到的信息流（这个案例中，接收、存到硬盘）。

## 参考

- {{domxref("BlobEvent")}}
  - : Each time a chunk of media data is finished being recorded, it's delivered to consumers in {{domxref("Blob")}} form using a {{domxref("BlobEvent")}} of type `dataavailable`.
- {{domxref("MediaRecorder")}}
  - : The primary interface that implements the MediaStream Recording API.
- {{domxref("MediaRecorderErrorEvent")}}
  - : The interface that represents errors thrown by the MediaStream Recording API. Its {{domxref("MediaRecorderErrorEvent.error", "error")}} property is a {{domxref("DOMException")}} that specifies that error occurred.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- [Using the MediaStream Recording API](/zh-CN/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Recording a media element](/zh-CN/docs/Web/API/MediaStream_Recording_API/Recording_a_media_element)
- [simpl.info MediaStream Recording demo](https://simpl.info/mediarecorder/), by [Sam Dutton](https://twitter.com/sw12)
- {{domxref("navigator.mediaDevices.getUserMedia()")}}
- [HTML5’s Media Recorder API in Action on Chrome and Firefox](https://addpipe.com/blog/mediarecorder-api/)
- [MediaRecorder polyfill](https://github.com/ai/audio-recorder-polyfill) for Safari and Edge
- [TutorRoom](https://github.com/chrisjohndigital/TutorRoom): HTML5 video capture/playback/download using getUserMedia and the MediaRecorder API ([source on GitHub](https://github.com/chrisjohndigital/TutorRoom))
- [FingerSpell](https://www.fingerspell.org/): Sign Language Fingerspelling practice using getUserMedia and the MediaRecorder API to create and download recordings, MediaRecorder API supported desktop browsers only [(source on GitHub](https://github.com/chrisjohndigital/CameraCaptureJS))
- [Simple video recording demo](https://codepen.io/anon/pen/gpmPzm)
- [Advanced media stream recorder sample](https://quickblox.github.io/javascript-media-recorder/sample/)
- [OpenLang](https://github.com/chrisjohndigital/OpenLang): HTML5 video language lab web application using MediaDevices and the MediaStream Recording API for video recording ([source on GitHub](https://github.com/chrisjohndigital/OpenLang))
