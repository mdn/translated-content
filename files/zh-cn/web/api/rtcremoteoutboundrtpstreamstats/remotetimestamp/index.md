---
title: RTCRemoteOutboundRtpStreamStats：remoteTimestamp 属性
short-title: remoteTimestamp
slug: Web/API/RTCRemoteOutboundRtpStreamStats/remoteTimestamp
l10n:
  sourceCommit: ffe914fa3268cbc0d84648d156d19c7df3a587b9
---

{{APIRef("WebRTC")}}

{{domxref("RTCRemoteOutboundRtpStreamStats")}} 接口的 **`remoteTimestamp`** 属性返回表示远程对等端发送这些统计信息的时间的时间戳。这与 `timestamp` 不同，后者表示本地生成或接收统计信息的时间。

## 值

表示远程对等端发送这些统计信息时的时间戳的 {{domxref("DOMHighResTimeStamp")}}。这与 `timestamp` 的值不同，后者给出的是本地对等端生成或接收统计信息的时间。

如果该属性存在，则其来源于 {{Glossary("RTCP")}} 发送方报告（SR）块，反映了消息发送时远程对等端的时钟。需要注意的是，这意味着该时钟可能未与本地时钟同步，并且当前时间以及时钟的运行速率在一定程度上可能存在差异。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
