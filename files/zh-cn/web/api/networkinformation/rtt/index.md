---
title: NetworkInformation.rtt
slug: Web/API/NetworkInformation/rtt
---

{{apiref("Network Information API")}}{{SeeCompatTable}}

**NetworkInformation.rtt** 是一个只读属性，返回了当前连接下评估的往返时延（RTT, round-trip time），并保留该值为 25 千分秒的最接近的整数倍。该值基于最近使用中被监测的最近保持活跃连接的应用层上的 RTT 测量值。它排除了到私有地址空间的连接。如果没有最近的测量数据，该值就基于底层连接技术的属性。

{{AvailableInWorkers}}

## Syntax

```plain
rtt = NetworkInformation.rtt
```

### Return value

一个数字。

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
