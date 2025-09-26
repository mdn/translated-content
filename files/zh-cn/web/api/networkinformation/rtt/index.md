---
title: NetworkInformation：rtt 属性
slug: Web/API/NetworkInformation/rtt
l10n:
  sourceCommit: 8bb6752a4d3ed3d54ab681636d16602e6bf1d74d
---

{{apiref("Network Information API")}} {{AvailableInWorkers}}

{{domxref("NetworkInformation")}} 接口的 **`rtt`** 只读属性返回当前连接的估计有效往返时间，四舍五入到最接近的 25 毫秒的倍数。该值基于最近观察到的最近活动连接上的应用层 RTT 测量值。它不包括与私有地址空间建立的连接。如果没有可用的最新测量数据，则该值基于底层连接技术的属性。

## 值

一个数值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("RTT")}}
