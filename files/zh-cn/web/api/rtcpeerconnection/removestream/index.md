---
title: RTCPeerConnection.removeStream()
slug: Web/API/RTCPeerConnection/removeStream
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

**`RTCPeerConnection.removeStream()`** 方法用来移除本地音频或视频的 {{domxref("媒体流")}} 。如果已经发生交互，远程主机可能需要使用一个新的媒体流。

当 {{domxref("RTCPeerConnection.signalingState", "signalingState")}} 的值为 `"closed"` 时，将抛出`InvalidStateError` 异常。当 {{domxref("RTCPeerConnection.signalingState", "signalingState")}} 值为 `"stable"` 时，将触发 {{domxref("RTCPeerConnection")}} 的 {{DOMxRef("RTCPeerConnection/negotiationneeded_event", "negotiationneeded")}} 事件。

## 语法

```plain
pc.removeStream(mediaStream);
```

_此方法没有返回值。_

### 参数

- _mediaStream_
  - : 是 {{domxref("MediaStream")}} 类型的表示要移除的媒体流

## 示例

```js
var pc, videoStream;
navigator.getUserMedia({video: true}, function(stream) {
  pc = new RTCPeerConnection();
  videoStream = stream;
  pc.addStream(stream);
}
document.getElementById("closeButton").addEventListener("click", function(event) {
  pc.removeStream(videoStream);
  pc.close();
}, false);
```

## 浏览器兼容性

{{Compat}}

## 参见

- [WebRTC](/zh-CN/docs/Web/API/WebRTC_API)
