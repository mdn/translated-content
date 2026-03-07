---
title: RTCVideoSourceStats：type 属性
short-title: type
slug: Web/API/RTCVideoSourceStats/type
l10n:
  sourceCommit: d32ba6a7c5a4c43029b92fab2e78e3bedc00b63c
---

{{APIRef("WebRTC")}}

{{domxref("RTCVideoSourceStats")}} 字典的 **`type`** 属性是一个值为 `media-source` 的字符串。

`media-source` 类型指示在调用 {{domxref("RTCRtpSender.getStats()")}} 或 {{domxref("RTCPeerConnection.getStats()")}} 方法时返回的 {{domxref("RTCStatsReport")}} 统计数据的类型是 {{domxref("RTCAudioSourceStats")}} 和 {{domxref("RTCVideoSourceStats")}} 其中之一。更进一步，你可以通过 {{domxref("RTCVideoSourceStats.kind", "kind")}} 属性继续细分统计数据类型（例如 `RTCVideoSourceStats` 会对应 `video`）。

## 值

值为 `media-source` 的字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
