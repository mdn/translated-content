---
title: PerformanceTiming.connectEnd
slug: Web/API/PerformanceTiming/connectEnd
---

{{APIRef("Navigation Timing")}}

**`PerformanceTiming.connectEnd`** 这个只读属性返回一个无符号长整型，它以毫秒为单位，代表了网络链接建立的时间节点。如果传输层报告了错误或者链接又被重新建立，则采用最后一次链接建立的时间。如果链接是长久的，那么这个值等同于{{domxref("PerformanceTiming.fetchStart")}}。链接被认为打开以所有的链接握手，SOCKS 认证结束为标志。

## Syntax

```plain
time = performanceTiming.connectEnd;
```

## 规范

因为 [Navigation Timing 规范](https://w3c.github.io/navigation-timing/#obsolete)已被弃用，此特性不再有望成为标准。请使用 {{domxref("PerformanceNavigationTiming")}} 接口代替。

## 浏览器兼容性

{{Compat}}

## See also

- 参见 {{domxref("PerformanceTiming")}} 接口。
