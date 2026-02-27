---
title: RTCTransportStats：dtlsState 属性
short-title: dtlsState
slug: Web/API/RTCTransportStats/dtlsState
l10n:
  sourceCommit: 185acd0fe4bd6d0f4a5c6d79fa46b1b748d09ea1
---

{{APIRef("WebRTC")}}

{{domxref("RTCTransportStats")}} 字典的 **`dtlsState`** 属性是表示底层 {{domxref("RTCDtlsTransport")}} 的当前状态的字符串。

该属性值与对应的 {{domxref("RTCDtlsTransport.state")}} 属性相同。

## 值

字符串，其值可以是以下值之一：`new`、`connecting`、`connected`、`closed`、`failed`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
