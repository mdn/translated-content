---
title: RTCIceCandidatePairStats：bytesDiscardedOnSend 属性
short-title: bytesDiscardedOnSend
slug: Web/API/RTCIceCandidatePairStats/bytesDiscardedOnSend
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

{{domxref("RTCIceCandidatePairStats")}} 字典的 **`bytesDiscardedOnSend`** 属性返回因套接字错误而丢弃的总字节数。

例如，当套接字已满时尝试发送数据包可能会导致这些错误。

## 值

表示由于套接字错误而丢弃的总字节数的整数值。该数值按 {{rfc("3550","", "6.4.1")}} 中定义的方式计算得出。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
