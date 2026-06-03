---
title: RTCTransportStats：type 属性
short-title: type
slug: Web/API/RTCTransportStats/type
l10n:
  sourceCommit: be0fee87cb391fb077053fc7ca7640b7e51d1da8
---

{{APIRef("WebRTC")}}

{{domxref("RTCTransportStats")}} 字典的 **`type`** 属性是一个值为 `"transport"` 的字符串。

通过遍历调用 {{domxref("RTCPeerConnection.getStats()")}} 所返回的 {{domxref("RTCStatsReport")}} 对象，你可以获得不同的统计信息。这一类型即指示了在特定迭代步骤中通过对象可获得的统计信息集合。值为 `"transport"` 则表示当前步骤中可用的统计信息即为 {{domxref("RTCTransportStats")}} 中定义的数据。

## 值

值为 `"transport"` 的字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
