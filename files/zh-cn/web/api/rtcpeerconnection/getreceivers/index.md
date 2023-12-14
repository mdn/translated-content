---
title: RTCPeerConnection.getReceivers()
slug: Web/API/RTCPeerConnection/getReceivers
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

**`RTCPeerConnection.getReceivers()`** 方法返回一个 {{domxref("RTCRtpReceiver")}} 对象的数组，每个 RTCRtpReceiver 对象代表了一个 RTP receiver。每个 RTP receiver 管理在一个 {{domxref("RTCPeerConnection")}} 上的 {{domxref("MediaStreamTrack")}} 的数据的接收与解码。

## 语法

```plain
var receivers = rtcPeerConnection.getReceivers();
```

### 返回值

一个 {{domxref("RTCRtpReceiver")}} 数组，一个对象就是连接上的一个轨道（track）。若连接上没有 RTP receiver，则数组为空。

规范没有定义返回的 RTCRtpReceiver 实例的顺序，所以两次调用 `getReceivers()` 返回的顺序可能是不同的。

## 例子

待定

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebRTC](/zh-CN/docs/Web/API/WebRTC_API)
- {{domxref("RTCRtpSender")}}
