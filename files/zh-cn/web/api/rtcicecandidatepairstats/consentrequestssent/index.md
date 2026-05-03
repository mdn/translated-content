---
title: RTCIceCandidatePairStats：consentRequestsSent 属性
short-title: consentRequestsSent
slug: Web/API/RTCIceCandidatePairStats/consentRequestsSent
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

{{domxref("RTCIceCandidatePairStats")}} 字典的 **`consentRequestsSent`** 属性表示在该候选对上发送的同意请求总数。

如果该对中的任一或两个对等方通过[网络地址转换](/zh-CN/docs/Web/API/WebRTC_API/Protocols#nat)（NAT）访问互联网，则另一方需要定期向 NAT 防火墙发送 [NAT 会话遍历实用程序（STUN）](/zh-CN/docs/Web/API/WebRTC_API/Protocols#stun)请求，以请求允许流量通过的同意。该属性将统计请求的数量。

{{rfc("7675")}} 提供了有关 NAT 和同意的更多信息。

## 值

表示发送到候选对中对等方的同意请求总数的整数。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
