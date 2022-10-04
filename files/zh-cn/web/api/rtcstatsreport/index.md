---
title: RTCStatsReport
slug: Web/API/RTCStatsReport
---

{{APIRef("WebRTC")}}

**`RTCStatsReport`** 接口提供了通过调用 {{domxref("RTCPeerConnection.getStats()")}}, {{domxref("RTCRtpReceiver.getStats()")}}，和 {{domxref("RTCRtpSender.getStats()")}} 这三个方法之一所获得的统计报告。该统计报告包含统计类别字符串名称到包含相应统计数据的对象的映射。

在 {{domxref("RTCPeerConnection")}} 上调用 `getStats()` 可以指定是希望获取连接上的出站，入站还是所有流的统计信息。 `getStats()` 的 {{domxref("RTCRtpReceiver")}} 和 {{domxref("RTCRtpSender")}} 版本仅返回可用于调用它们的传入或传出流的统计信息。

## 统计对象

对于每种统计信息类别，都有一个字典，字典的属性提供相关信息。

### 所有统计类别共有的属性

所有 WebRTC 统计对象都基于 {{domxref("RTCStats")}} 字典，该字典提供了最基本的信息：时间戳，统计类型字符串和唯一标识数据源的 ID：

{{page("/en-US/docs/Web/API/RTCStats", "Properties")}}

### 统计类别

{{domxref("RTCStats.type", "type")}} 给出了对象所代表的统计类别的名称，以及如何查找所需的特定数据类型。统计类别名称是枚举类 {{domxref("RTCStatsType")}} 的成员，如下所示：

{{page("/en-US/docs/Web/API/RTCStatsType", "Values")}}

## 使用 RTCStatsReport

_... 即将到来 ..._

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [WebRTC API](/zh-CN/docs/Web/API/WebRTC_API)
- {{domxref("RTCPeerConnection")}}
- {{domxref("RTCPeerConnection.getStats()")}}, {{domxref("RTCRtpReceiver.getStats()")}}, and {{domxref("RTCRtpSender.getStats()")}}
