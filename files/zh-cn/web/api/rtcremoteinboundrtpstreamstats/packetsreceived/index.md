---
title: RTCRemoteInboundRtpStreamStats：packetsReceived 属性
short-title: packetsReceived
slug: Web/API/RTCRemoteInboundRtpStreamStats/packetsReceived
l10n:
  sourceCommit: 8bb665b943fa480ea22b22135f58d97c0caca316
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

{{domxref("RTCRemoteInboundRtpStreamStats")}} 字典的 **`packetsReceived`** 属性返回远程端点从该流的[同步源（SSRC）](/zh-CN/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc)接收到的 {{Glossary("RTP")}} 数据包总数（包括重传的数据包）。

## 值

表示远程端点接收到的 RTP 数据包总数的正整数。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("RTCRemoteInboundRtpStreamStats.ssrc")}}
- {{domxref("RTCInboundRtpStreamStats.packetsReceived")}}
