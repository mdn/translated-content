---
title: NetworkInformation.downlink
slug: Web/API/NetworkInformation/downlink
---

{{SeeCompatTable}}{{APIRef("Network Information API")}}

**`downlink`** 是 {{domxref("NetworkInformation")}} 接口的一个只读属性，返回以 Mb/s 为单位的有效带宽，并保留该值为 25kb/s 的最接近的整数倍。该值基于最近监测的保持活跃连接的应用层吞吐量，排除了到私有地址空间的连接。当缺少最近的带宽测量数据时，该属性由底层连接技术属性决定。

## Syntax

```plain
var downLink = NetworkInformation.downlink
```

### Value

{{jsxref("double")}} 双精度浮点数。

## Specifications

{{Specifications}}

## Browser Compatibility

{{Compat}}
