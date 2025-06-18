---
title: MediaRecorder()
slug: Web/API/MediaRecorder/MediaRecorder
---

{{APIRef("MediaStream Recording")}}

**`MediaRecorder()`** 构造函数会创建一个对指定的 {{domxref("MediaStream")}} 进行录制的 {{domxref("MediaRecorder")}} 对象

## 语法

```js-nolint
new MediaRecorder(stream)
new MediaRecorder(stream, options)
```

### 参数

- **`stream`**
  - : {{domxref("MediaStream")}} 将要录制的流。它可以是来自于使用 {{domxref("MediaDevices.getUserMedia", "navigator.mediaDevices.getUserMedia()")}} 创建的流或者来自于 {{HTMLElement("audio")}}, {{HTMLElement("video")}} 以及 {{HTMLElement("canvas")}} DOM 元素。
- **`options`** {{optional_inline}}

  - : 一个字典对象，它可以包含下列属性：

    - `mimeType`: 为新构建的 `MediaRecorder` 指定录制容器的 MIME 类型。在应用中通过调用 {{domxref("MediaRecorder.isTypeSupported()")}} 来检查浏览器是否支持此种`mimeType` .
    - `audioBitsPerSecond`: 指定音频的比特率。
    - `videoBitsPerSecond`: 指定视频的比特率。
    - `bitsPerSecond`: 指定音频和视频的比特率。此属性可以用来指定上面两个属性。如果上面两个属性只有其中之一和此属性被指定，则此属性可以用于设定另外一个属性。

    > [!NOTE]
    > 如果视频和/或音频的比特率没有指定，视频默认采用的比特率是 2.5Mbps，但音频的默认比特率并不固定，音频的默认比特率根据采样率和轨道数自适应。

## 例子

此例展示了如果对指定的流创建一个音频比特率为 128kbps，视频比特率为 2.5Mbps 的媒体录制器。被录制的媒体数据会以 MP4 格式封装 (因此你若获取这些媒体数据片段，并存放到磁盘上去，你就会得到一个 mp4 文件).

```js
...


if (navigator.mediaDevices.getUserMedia) {
  var constraints = { audio: true, video: true };
  var chunks = [];

  var onSuccess = function(stream) {
    var options = {
      audioBitsPerSecond : 128000,
      videoBitsPerSecond : 2500000,
      mimeType : 'video/mp4'
    }
    var mediaRecorder = new MediaRecorder(stream,options);
    m = mediaRecorder;

...
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 更多信息

- [Using the MediaRecorder API](/zh-CN/docs/Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API)
- [Web Dictaphone](https://mdn.github.io/web-dictaphone/): MediaRecorder + getUserMedia + Web Audio API visualization demo, by [Chris Mills](https://twitter.com/chrisdavidmills) ([source on Github](https://github.com/mdn/web-dictaphone/).)
- [simpl.info MediaStream Recording demo](https://simpl.info/mediarecorder/), by [Sam Dutton](https://twitter.com/sw12).
- {{domxref("Navigator.mediaDevices.getUserMedia()")}}
