---
title: RTCTransportStats：iceRole 属性
short-title: iceRole
slug: Web/API/RTCTransportStats/iceRole
l10n:
  sourceCommit: bec7ef59277e752985de0ee963c86f6e8e4b3400
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

{{domxref("RTCTransportStats")}} 字典的 **`iceRole`** 属性是指示传输所承担的 ICE 角色（控制端代理的角色，或被控制端代理的角色）的字符串。

该值与底层 {{domxref("RTCDtlsTransport.iceTransport")}} 的 {{domxref("RTCIceTransport.role")}} 属性相同。

## 值

字符串，其值可以是以下值之一：`controlled`、`controlling` 或 `unknown`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
