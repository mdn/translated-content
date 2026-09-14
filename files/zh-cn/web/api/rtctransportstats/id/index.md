---
title: RTCTransportStats：id 属性
short-title: id
slug: Web/API/RTCTransportStats/id
l10n:
  sourceCommit: be0fee87cb391fb077053fc7ca7640b7e51d1da8
---

{{APIRef("WebRTC")}}

{{domxref("RTCTransportStats")}} 字典的 **`id`** 属性是唯一标识该对象所对应统计信息的对象的字符串。

通过使用 `id`，你可以将此统计对象与其他统计对象关联起来，从而获取特定的 WebRTC 对象（例如 {{domxref("RTCDtlsTransport")}} 或 {{domxref("RTCPeerConnection")}}）随时间推移的统计信息。

## 值

唯一标识了该 `RTCTransportStats` 对象所对应统计信息的对象的字符串。

ID 字符串的格式并未由规范定义，因此你无法可靠地对字符串内容做出任何假设，也不能假定特定对象类型的字符串格式将保持不变。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
