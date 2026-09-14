---
title: RTCCodecStats：type 属性
short-title: type
slug: Web/API/RTCCodecStats/type
l10n:
  sourceCommit: 667d3fc3409c0524a1fb97a7f3d784606d12f48d
---

{{APIRef("WebRTC")}}

{{domxref("RTCCodecStats")}} 字典的 **`type`** 属性是值为 `"codec"` 的字符串。

通过遍历调用 {{domxref("RTCPeerConnection.getStats()")}} 所返回的 {{domxref("RTCStatsReport")}} 对象，你可以获得不同的统计信息。这一类型即指示了在特定迭代步骤中通过对象可获得的统计信息集合。值为 `"codec"` 则表示当前步骤中可用的统计信息即为 {{domxref("RTCCodecStats")}} 中定义的数据。

## 值

值为 `"codec"` 的字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
