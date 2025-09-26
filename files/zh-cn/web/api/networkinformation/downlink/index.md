---
title: NetworkInformation：downlink 属性
slug: Web/API/NetworkInformation/downlink
l10n:
  sourceCommit: 895129fb017e0bb86c61f688d99ac4c5c75f4934
---

{{APIRef("Network Information API")}} {{AvailableInWorkers}}

{{domxref("NetworkInformation")}} 接口的 **`downlink`** 只读属性返回有效带宽估计值（以 Mb/s 为单位），舍入到最接近的 25Kb/s 的整数倍。该值基于最近监测的保持活跃连接的应用层吞吐量，排除了到私有地址空间的连接。当缺少最近的带宽测量数据时，该属性由底层连接技术属性决定。

## 值

一个数值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Downlink")}}
