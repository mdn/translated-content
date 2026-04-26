---
title: RTCInboundRtpStreamStats：keyFramesDecoded 属性
short-title: keyFramesDecoded
slug: Web/API/RTCInboundRtpStreamStats/keyFramesDecoded
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

{{domxref("RTCInboundRtpStreamStats")}} 字典的 **`keyFramesDecoded`** 属性表示在该 RTP 媒体流中成功解码的关键帧总数。例如，这包括 VP8（{{rfc("6386")}}）中的关键帧或 H.264（{{rfc("6184")}}）中的 IDR 帧。

请注意，增量帧的数量是通过从总帧数中减去该值计算得出的（{{domxref("RTCInboundRtpStreamStats.framesDecoded","framesDecoded")}} - `keyFramesEncoded`）。

> [!NOTE]
> 对于音频流而言该属性是未定义的。

## 值

一个正整数。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
