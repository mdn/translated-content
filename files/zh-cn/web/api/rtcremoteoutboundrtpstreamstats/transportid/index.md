---
title: RTCRemoteOutboundRtpStreamStats：transportId 属性
short-title: transportId
slug: Web/API/RTCRemoteOutboundRtpStreamStats/transportId
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

{{domxref("RTCRemoteOutboundRtpStreamStats")}} 字典的 **`transportId`** 属性是一个用于唯一标识与此 RTP 流底层传输相关联的 {{domxref("RTCTransportStats")}} 统计对象的字符串。

通过遍历 {{domxref("RTCStatsReport")}} 中满足 `RTCRemoteOutboundRtpStreamStats.codecId` 等于 {{domxref("RTCTransportStats.id")}} 的元素来查找统计对象，进而可以将 `RTCRemoteOutboundRtpStreamStats` 和 `RTCTransportStats` 对象关联起来。

## 值

包含需要检查统计信息的 RTP 流所对应的 {{domxref("RTCTransportStats")}} 对象的 {{domxref("RTCTransportStats.id","id")}} 字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
