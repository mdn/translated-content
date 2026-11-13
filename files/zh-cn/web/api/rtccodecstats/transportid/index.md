---
title: RTCCodecStats：transportId 属性
short-title: transportId
slug: Web/API/RTCCodecStats/transportId
l10n:
  sourceCommit: 667d3fc3409c0524a1fb97a7f3d784606d12f48d
---

{{APIRef("WebRTC")}}

{{domxref("RTCCodecStats")}} 字典的 **`transportId`** 属性是表示编解码器正在使用的传输的唯一标识符字符串。

你可以通过将 `RTCCodecStats.transportId` 与 {{domxref("RTCTransportStats.id")}} 值进行匹配，来关联编解码器和相关的传输统计信息。

## 值

可以唯一标识匹配的 {{domxref("RTCTransportStats")}} 对象的 `id` 的字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
