---
title: RTCRemoteInboundRtpStreamStats：codecId 属性
short-title: codecId
slug: Web/API/RTCRemoteInboundRtpStreamStats/codecId
l10n:
  sourceCommit: 0496bb2fcef13172325e1cc25a5fc71410506557
---

{{APIRef("WebRTC")}}

{{domxref("RTCRemoteInboundRtpStreamStats")}} 字典的 **`codecId`** 属性是一个用于唯一标识需要获取统计数据的 {{Glossary("RTP")}} 流所对应的 {{domxref("RTCCodecStats")}} 对象的字符串。

通过遍历 {{domxref("RTCStatsReport")}} 中满足 `RTCRemoteInboundRtpStreamStats.codecId` 与 {{domxref("RTCCodecStats.id")}} 相等的元素，进而将 `RTCRemoteInboundRtpStreamStats` 和 `RTCCodecStats` 对象关联起来。

## 值

包含需要检查统计信息的 RTP 流所对应的 {{domxref("RTCCodecStats")}} 对象的 {{domxref("RTCCodecStats.id","id")}} 字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
