---
title: RTCVideoSourceStats：id 属性
short-title: id
slug: Web/API/RTCVideoSourceStats/id
l10n:
  sourceCommit: d32ba6a7c5a4c43029b92fab2e78e3bedc00b63c
---

{{APIRef("WebRTC")}}

{{domxref("RTCVideoSourceStats")}} 字典的 **`id`** 属性是唯一标识该对象提供统计信息的对象的字符串。

通过使用 `id`，你可以将此统计对象与其他统计对象关联起来，以便获取特定的 WebRTC 对象（例如 {{domxref("RTCPeerConnection")}} 或 {{domxref("RTCDataChannel")}}）随时间推移的统计信息。

## 值

唯一标识了该 `RTCVideoSourceStats` 对象提供统计信息的对象的字符串。

ID 字符串的格式并未由规范定义，因此你无法可靠地对字符串内容做出任何假设，也无法假设特定对象类型的字符串格式将保持不变。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
