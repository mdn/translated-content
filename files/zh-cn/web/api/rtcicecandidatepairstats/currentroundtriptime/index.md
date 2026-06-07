---
title: RTCIceCandidatePairStats：currentRoundTripTime 属性
short-title: currentRoundTripTime
slug: Web/API/RTCIceCandidatePairStats/currentRoundTripTime
l10n:
  sourceCommit: 2c2b213b9a7d391732c94dd35928edf9ff34d8ed
---

{{APIRef("WebRTC")}}

{{domxref("RTCIceCandidatePairStats")}} 字典的 **`currentRoundTripTime`** 属性指示数据从当前对等点发送到远程对等点，并通过由这对 {{Glossary("ICE")}} 候选者描述的连接返回所花费的秒数。

## 值

表示在该 `RTCIceCandidatePairStats` 对象提供的统计信息的那一候选者对所描述的连接的往返时间（单位为秒）的数字。

该值是通过观察从向远程对等点发送最近的 {{Glossary("STUN")}} 请求到接收到对该请求的响应之间经过的时间来计算的。该信息可能来自正在进行的 STUN 连接检查，也可能来自于最初建立连接时发出的确认请求。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
