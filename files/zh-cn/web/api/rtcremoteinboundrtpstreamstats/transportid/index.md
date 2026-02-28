---
title: RTCRemoteInboundRtpStreamStats：transportId 属性
short-title: transportId
slug: Web/API/RTCRemoteInboundRtpStreamStats/transportId
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

{{domxref("RTCRemoteInboundRtpStreamStats")}} 字典的 **`transportId`** 属性是用于唯一标识与此 RTP 流底层传输相关联的 {{domxref("RTCTransportStats")}} 统计对象的字符串。

将 `RTCRemoteInboundRtpStreamStats` 与 `RTCTransportStats` 对象相关联的方法是遍历 {{domxref("RTCStatsReport")}}，查找那些其 `RTCRemoteInboundRtpStreamStats.transportId` 等于 {{domxref("RTCTransportStats.id")}} 的统计对象。

## 值

包含被检查以生成与此 RTP 流相关联的 {{domxref("RTCTransportStats")}} 对象的 {{domxref("RTCTransportStats.id","id")}} 的字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
