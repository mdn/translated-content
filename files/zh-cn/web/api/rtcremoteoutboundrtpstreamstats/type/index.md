---
title: RTCRemoteOutboundRtpStreamStats：type 属性
short-title: type
slug: Web/API/RTCRemoteOutboundRtpStreamStats/type
l10n:
  sourceCommit: ffe914fa3268cbc0d84648d156d19c7df3a587b9
---

{{APIRef("WebRTC")}}

{{domxref("RTCRemoteOutboundRtpStreamStats")}} 字典的 **`type`** 属性是一个值为 `"remote-outbound-rtp"` 的字符串。

通过遍历对 {{domxref("RTCPeerConnection.getStats()")}} 的调用所返回的 {{domxref("RTCStatsReport")}} 对象，你可以获得不同的统计数据。`type` 表示在特定迭代步骤中可通过对象获取的统计信息集合。当其值为 `"remote-outbound-rtp"` 时，表示当前步骤中可用的统计信息即为 {{domxref("RTCRemoteOutboundRtpStreamStats")}} 中定义的数据。

## 值

值为 `"remote-outbound-rtp"` 的字符串。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
