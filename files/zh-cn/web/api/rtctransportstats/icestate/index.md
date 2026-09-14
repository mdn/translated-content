---
title: RTCTransportStats：iceState 属性
short-title: iceState
slug: Web/API/RTCTransportStats/iceState
l10n:
  sourceCommit: bec7ef59277e752985de0ee963c86f6e8e4b3400
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

{{domxref("RTCTransportStats")}} 字典的 **`iceState`** 属性是表示底层 {{domxref("RTCIceTransport")}} 的当前 ICE 状态的字符串。

该属性值与对应的 {{domxref("RTCIceTransport.state")}} 属性相同。

## 值

字符串，取值可以是以下值之一：`new`、`checking`、`connected`、`completed`、`disconnected`、`failed` 或 `closed`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
