---
title: MediaStream.getAudioTracks()
slug: Web/API/MediaStream/getAudioTracks
---

{{APIRef("Media Capture and Streams")}}

{{domxref("MediaStream")}} 接口下的 **_`getAudioTracks()`_** 方法会返回一个包含
[`track set`](https://www.w3.org/TR/mediacapture-streams/#track-set) 流中所有
{{domxref("MediaStreamTrack.kind")}} 为 `audio` 的 {{domxref("MediaStreamTrack")}} 对象序列。

## 语法

```js-nolint
getAudioTracks()
```

### 参数

无

### 返回值

{{domxref("MediaStreamTrack")}} 对象数组，包含流中所有的音轨。音轨的 {{domxref("MediaStreamTrack.kind", "kind")}} 值为 `audio`
。如果流中不包含音轨，则数组为空。

> **备注：** 数组中返回的顺序并不是由规范定义的，事实上，每次调用 `getAudioTracks()` 的结果都可能有所不同。

更早版本的本 API 中，包含一个用做列表中每个音频类型的 `AudioStreamTrack` 接口；现在已被合并至 {{domxref("MediaStreamTrack")}} 主接口中。

## 示例

本示例使用 {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} 获取视频流中的网络摄像机的音频和视频，并将媒体流绑定到 {{HTMLElement("video")}}
元素，然后设置一个计时器，计时器到期时会停止在该媒体流中找到的第一个音轨。

```js
navigator.mediaDevices
  .getUserMedia({ audio: true, video: true })
  .then((mediaStream) => {
    document.querySelector("video").srcObject = mediaStream;
    // Stop the audio stream after 5 seconds
    setTimeout(() => {
      const tracks = mediaStream.getAudioTracks();
      tracks[0].stop();
    }, 5000);
  });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
