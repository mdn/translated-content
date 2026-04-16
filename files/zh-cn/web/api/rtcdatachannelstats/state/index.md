---
title: RTCDataChannelStats：state 属性
short-title: state
slug: Web/API/RTCDataChannelStats/state
l10n:
  sourceCommit: 7e6058c754c6d38bc15a16cf8e65f1e31139f05b
---

{{APIRef("WebRTC")}}

`RTCDataChannelStats` 字典的 **`state`** 属性返回一个指示数据通道底层数据连接的 {{domxref("RTCDataChannel.readyState","readyState")}} 的字符串：`connecting`、`open`、`closing` 或 `closed`。

请注意，该属性是必需的。

## 值

包含与关联数据通道的 {{domxref("RTCDataChannel.readyState")}} 属性相同的值的字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("RTCDataChannel.readyState")}}
