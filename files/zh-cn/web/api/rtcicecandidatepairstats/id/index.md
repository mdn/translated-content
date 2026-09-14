---
title: RTCIceCandidatePairStats：id 属性
short-title: id
slug: Web/API/RTCIceCandidatePairStats/id
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

{{domxref("RTCIceCandidatePairStats")}} 字典的 **`id`** 属性是用于唯一标识该对象所提供统计信息的对象的字符串。

通过使用 `id`，你可以将此统计信息对象与其他对象关联起来，以便监视给定 WebRTC 对象（例如 {{domxref("RTCPeerConnection")}} 或 {{domxref("RTCDataChannel")}}）的统计信息随时间的变化。

## 值

用于唯一标识该 `RTCIceCandidatePairStats` 对象所提供统计信息的对象的字符串。

ID 字符串的格式未在规范中定义，因此你不能可靠地对字符串的内容做出任何假设，也不能假设给定对象类型的字符串格式将保持不变。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
