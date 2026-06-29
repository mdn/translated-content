---
title: RTCDataChannelStats：type 属性
short-title: type
slug: Web/API/RTCDataChannelStats/type
l10n:
  sourceCommit: 7e6058c754c6d38bc15a16cf8e65f1e31139f05b
---

{{APIRef("WebRTC")}}

{{domxref("RTCDataChannelStats")}} 字典的 **`type`** 属性是值为 `"data-channel"` 的字符串。

通过遍历调用 {{domxref("RTCPeerConnection.getStats()")}} 所返回的 {{domxref("RTCStatsReport")}} 对象，你可以获得不同的统计信息。这一类型即指示了在特定迭代步骤中通过对象可获得的统计信息集合。值为 `"data-channel"` 则表示当前步骤中可用的统计信息即为 {{domxref("RTCDataChannelStats")}} 中定义的数据。

## 值

值为 `"data-channel"` 的字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
