---
title: RTCRemoteOutboundRtpStreamStats：roundTripTimeMeasurements 属性
short-title: roundTripTimeMeasurements
slug: Web/API/RTCRemoteOutboundRtpStreamStats/roundTripTimeMeasurements
l10n:
  sourceCommit: 8bb665b943fa480ea22b22135f58d97c0caca316
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

{{domxref("RTCRemoteOutboundRtpStreamStats")}} 字典的 **`roundTripTimeMeasurements`** 属性是表示当前[同步源（SSRC）](/zh-CN/docs/Web/API/RTCRemoteOutboundRtpStreamStats/ssrc)接收到的有效往返时间测量值的总数的正整数。

该计数可用作衡量往返时间测量数据可用性和可靠性的指标。

## 值

表示有效往返时间测量的次数的正整数。

该值是 SSRC 接收到的 _RTCP 发送方报告_（_SR_）的数量，SR 报告包含“自上次 RR 的延迟（DLRR）”字段，你可从中推导出有效的往返时间（根据 {{rfc("3611","DLRR 报告块", "4.5")}}）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
