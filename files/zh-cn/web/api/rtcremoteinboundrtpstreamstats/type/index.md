---
title: RTCRemoteInboundRtpStreamStats：type 属性
short-title: type
slug: Web/API/RTCRemoteInboundRtpStreamStats/type
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

{{domxref("RTCRemoteInboundRtpStreamStats")}} 字典的 **`type`** 属性是值为 `"remote-inbound-rtp"` 的字符串。

通过遍历调用 {{domxref("RTCPeerConnection.getStats()")}} 所返回的 {{domxref("RTCStatsReport")}} 对象，你可以获得不同的统计信息。这一类型指示了在特定迭代步骤中对象所提供的统计信息集合。若其值为 `"inbound-rtp"`，则表示当前步骤中可用的统计信息是 {{domxref("RTCRemoteInboundRtpStreamStats")}} 中定义的那些数据。

## 值

值为 `"inbound-rtp"` 的字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
