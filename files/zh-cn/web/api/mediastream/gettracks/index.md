---
title: MediaStream：getTracks() 方法
slug: Web/API/MediaStream/getTracks
l10n:
  sourceCommit: d8a660f63ae6e2e8a1dba567c1398f72a09f9658
---

{{APIRef("Media Capture and Streams")}}

{{domxref("MediaStream")}} 接口的 **`getTracks()`** 方法返回一个包含当前媒体流的[轨道集合](https://www.w3.org/TR/mediacapture-streams/#dfn-track-set)中所有 {{domxref("MediaStreamTrack")}} 对象（不论其 {{domxref("MediaStreamTrack.kind")}} 是什么）的序列。

## 语法

```js-nolint
getTracks()
```

### 参数

无。

### 返回值

{{domxref("MediaStreamTrack")}} 对象的数组。

## 示例

```js
navigator.mediaDevices
  .getUserMedia({ audio: false, video: true })
  .then((mediaStream) => {
    document.querySelector("video").srcObject = mediaStream;
    // 在 5 秒后停止媒体流
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
