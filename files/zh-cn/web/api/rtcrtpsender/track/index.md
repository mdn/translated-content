---
title: RTCRtpSender：track 属性
short-title: track
slug: Web/API/RTCRtpSender/track
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("WebRTC")}}

{{domxref("RTCRtpSender")}} 接口的 **`track`** 只读属性返回一个由 `RTCRtpSender` 处理的 {{domxref("MediaStreamTrack")}}。

## 值

表示与 `RTCRtpSender` 关联的媒体的 {{domxref("MediaStreamTrack")}} 对象。如果发送方未关联任何轨道，则该值为 `null`，此时发送方不传输任何内容。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
