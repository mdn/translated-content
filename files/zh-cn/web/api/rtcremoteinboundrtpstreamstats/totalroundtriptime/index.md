---
title: RTCRemoteInboundRtpStreamStats：totalRoundTripTime 属性
short-title: totalRoundTripTime
slug: Web/API/RTCRemoteInboundRtpStreamStats/totalRoundTripTime
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

{{domxref("RTCRemoteInboundRtpStreamStats")}} 字典的 **`totalRoundTripTime`** 属性返回自会话开始以来所有往返时间（RTT）测量值的累计总和（单位：秒）。

单个往返时间基于 RTCP 接收报告（RR）中的 RTCP 时间戳计算得出，因此需要 DLSR 值不为 0。平均 RTT 可通过将 `totalRoundTripTime` 除以 {{domxref("RTCRemoteInboundRtpStreamStats.roundTripTimeMeasurements","roundTripTimeMeasurements")}} 计算得出。

## 值

表示会话的总往返时间的数值（单位：秒）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{rfc("3550","RR：接收方报告 RTCP 数据包", "6.4.2")}}
