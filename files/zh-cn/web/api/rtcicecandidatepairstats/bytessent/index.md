---
title: RTCIceCandidatePairStats：bytesSent 属性
short-title: bytesSent
slug: Web/API/RTCIceCandidatePairStats/bytesSent
l10n:
  sourceCommit: 2c2b213b9a7d391732c94dd35928edf9ff34d8ed
---

{{APIRef("WebRTC")}}

{{domxref("RTCIceCandidatePairStats")}} 字典的 **`bytesSent`** 属性表示在此候选对描述的连接上，迄今为止发送的有效载荷字节总数。

## 值

表示在此候选对描述的连接上迄今为止发送的字节总数的整数。

该数值只会统计数据字节；填充、标头等开销将不计入其中。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("RTCIceCandidatePairStats.bytesReceived")}}
