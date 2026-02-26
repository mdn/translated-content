---
title: RTCRemoteOutboundRtpStreamStats：id 属性
short-title: id
slug: Web/API/RTCRemoteOutboundRtpStreamStats/id
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

{{domxref("RTCRemoteOutboundRtpStreamStats")}} 字典的 **`id`** 属性是唯一标识此对象所描述统计信息对应的对象的字符串。

通过使用 `id`，你可以将此统计对象与其他统计对象关联起来，从而获取指定 WebRTC 对象（例如 {{domxref("RTCPeerConnection")}} 或 {{domxref("RTCDataChannel")}}）一段时间内的统计数据。

## 值

唯一标识此 `RTCRemoteOutboundRtpStreamStats` 对象提供统计信息所对应的对象的字符串。

ID 字符串的格式并未由规范定义，因此你无法可靠地对字符串内容做出任何假设，也不能假定特定对象类型的字符串格式将保持不变。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
