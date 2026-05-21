---
title: RTCAudioSourceStats：type 属性
short-title: type
slug: Web/API/RTCAudioSourceStats/type
l10n:
  sourceCommit: d32ba6a7c5a4c43029b92fab2e78e3bedc00b63c
---

{{APIRef("WebRTC")}}

{{domxref("RTCVideoSourceStats")}} 字典的 **`type`** 属性是一个值为 `media-source` 的字符串。

`media-source` 类型指示遍历调用 {{domxref("RTCRtpSender.getStats()")}} 或 {{domxref("RTCPeerConnection.getStats()")}} 方法返回的 {{domxref("RTCStatsReport")}} 统计数据的类型是 {{domxref("RTCAudioSourceStats")}} 或 {{domxref("RTCVideoSourceStats")}}。更进一步，你可以通过 {{domxref("RTCVideoSourceStats.kind", "kind")}} 属性继续细分统计数据类型（例如 `RTCAudioSourceStats` 会对应 `audio`）。

## 值

值为 `media-source` 的字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
