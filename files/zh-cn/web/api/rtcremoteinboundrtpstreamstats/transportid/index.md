---
title: RTCRemoteInboundRtpStreamStats：transportId 属性
short-title: transportId
slug: Web/API/RTCRemoteInboundRtpStreamStats/transportId
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

{{domxref("RTCRemoteInboundRtpStreamStats")}} 字典的 **`transportId`** 属性是用于唯一标识与此 RTP 流底层传输相关联的 {{domxref("RTCTransportStats")}} 统计对象的字符串。

通过遍历 {{domxref("RTCStatsReport")}} 中满足 `RTCRemoteInboundRtpStreamStats.transportId` 与 {{domxref("RTCTransportStats.id")}} 相等的元素，你可以获取到若干统计对象，进而能将 `RTCRemoteInboundRtpStreamStats` 和 `RTCCodecStats` 对象关联起来。

## 值

包含被检查以生成与此 RTP 流相关联的 {{domxref("RTCTransportStats")}} 对象的 {{domxref("RTCTransportStats.id","id")}} 的字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
