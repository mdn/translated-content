---
title: RTCDataChannelStats：bytesSent 属性
short-title: bytesSent
slug: Web/API/RTCDataChannelStats/bytesSent
l10n:
  sourceCommit: 7e6058c754c6d38bc15a16cf8e65f1e31139f05b
---

{{APIRef("WebRTC")}}

{{domxref("RTCDataChannelStats")}} 字典的 **`bytesSent`** 属性返回在关联的 {{domxref("RTCDataChannel")}} 上发送的总的有效负载字节数。

需要注意的是，该属性不会包括非有效载荷字节（例如用于成帧和在报头中使用的字节）。

## 值

表示在关联的数据通道上发送的总的有效负载字节数的正整数值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("RTCDataChannel")}}
