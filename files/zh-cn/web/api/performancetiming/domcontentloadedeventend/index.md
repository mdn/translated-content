---
title: PerformanceTiming.domContentLoadedEventEnd
slug: Web/API/PerformanceTiming/domContentLoadedEventEnd
---

{{APIRef("Navigation Timing")}}

**`PerformanceTiming.domContentLoadedEventEnd`** 为只读属性，返回一个无符号长整型数值（`unsigned long），以 UNIX 时间戳的形式表示一个时刻，这个时刻为所有需要尽早执行的脚本不管是否按顺序，都已经执行完毕。（译注：即 DOM Ready）`

## Syntax

```plain
time = performanceTiming.domContentLoadedEventEnd;
```

## 规范

因为 [Navigation Timing 规范](https://w3c.github.io/navigation-timing/#obsolete)已被弃用，此特性不再有望成为标准。请使用 {{domxref("PerformanceNavigationTiming")}} 接口代替。

## 浏览器兼容性

{{Compat}}

## See also

- 所属的 {{domxref("PerformanceTiming")}} 接口
