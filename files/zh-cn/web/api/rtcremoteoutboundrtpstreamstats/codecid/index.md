---
title: RTCRemoteOutboundRtpStreamStats：codecId 属性
short-title: codecId
slug: Web/API/RTCRemoteOutboundRtpStreamStats/codecId
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

{{domxref("RTCRemoteOutboundRtpStreamStats")}} 字典的 **`codecId`** 属性是一个字符串，可用于唯一标识被检查以生成此 {{Glossary("RTP")}} 流对应的 {{domxref("RTCCodecStats")}} 数据的对象。

通过遍历 {{domxref("RTCStatsReport")}} 中满足 `RTCRemoteOutboundRtpStreamStats.codecId` 等于 {{domxref("RTCCodecStats.id")}} 的元素来查找统计对象，进而可以将 `RTCRemoteOutboundRtpStreamStats` 和 `RTCCodecStats` 对象关联起来。

## 值

包含需要检查统计信息的 RTP 流所对应的 {{domxref("RTCCodecStats")}} 对象的 {{domxref("RTCCodecStats.id","id")}} 字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
