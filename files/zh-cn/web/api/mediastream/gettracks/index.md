---
title: MediaStream.getTracks()
slug: Web/API/MediaStream/getTracks
---

{{APIRef("Media Capture and Streams")}}{{SeeCompatTable}}

{{domxref("MediaStream")}} 接口的**`getTracks()`** 方法会返回一个包含 [`track set`](https://www.w3.org/TR/mediacapture-streams/#track-set) 流中所有 {{domxref("MediaStreamTrack")}} 对象的序列，序列内容与{{domxref("MediaStreamTrack.kind")}} 无关。

## 语法

```js-nolint
getTracks()
```

### 参数

无

### 返回值

{{domxref("MediaStreamTrack")}} 对象的数组

## 示例

```js
navigator.mediaDevices
  .getUserMedia({ audio: false, video: true })
  .then((mediaStream) => {
    document.querySelector("video").srcObject = mediaStream;
    // Stop the stream after 5 seconds
    setTimeout(() => {
      const tracks = mediaStream.getTracks();
      tracks[0].stop();
    }, 5000);
  });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
