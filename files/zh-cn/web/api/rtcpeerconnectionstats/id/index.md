---
title: RTCPeerConnectionStats：id 属性
short-title: id
slug: Web/API/RTCPeerConnectionStats/id
l10n:
  sourceCommit: f11f0a8b40d9c41eeff21a88d6af00420808cbe6
---

{{APIRef("WebRTC")}}

{{domxref("RTCPeerConnectionStats")}} 字典的 **`id`** 属性是唯一标识该对象提供统计信息的对象的字符串。

通过使用 `id`，你可以将此统计对象与其他统计对象关联起来，从而监测指定 WebRTC 对象（例如 {{domxref("RTCPeerConnection")}} 或 {{domxref("RTCDataChannel")}}）在一段时间内的统计数据。

## 值

唯一标识该 `RTCPeerConnectionStats` 对象将提供统计信息的对象的字符串。

ID 字符串的格式并未由规范定义，因此你无法可靠地对字符串内容做出任何假设，也无法假设给定对象类型的字符串格式将保持不变。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
