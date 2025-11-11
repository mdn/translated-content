---
title: PerformanceTiming.domInteractive
slug: Web/API/PerformanceTiming/domInteractive
---

{{APIRef("Navigation Timing")}}

## 概要

**`PerformanceTiming.domInteractive`** 是一个返回代表一个时刻的 `unsigned long long` 型只读属性，为在主文档的解析器结束工作，即 {{domxref("Document.readyState")}} 改变为 `'interactive'` 并且相当于 [`readystatechange`](/zh-CN/docs/Web/API/Document/readystatechange_event) 事件被触发之时的 Unix 毫秒时间戳。

这个属性被用于测量用户感受的加载网页的速度。然而，如果脚本被屏蔽发生，而不是被异步加载或者使用了自定义的 Web 字体，这里有一些警告可能会发生。在使用这个值作为网页加载用户体验的媒介时，请务必[检查一下你是否处于以上的情况](https://www.stevesouders.com/blog/2015/08/07/dominteractive-is-it-really/)。

## 语法

```plain
time = performanceTiming.domInteractive;
```

## 规范

因为 [Navigation Timing 规范](https://w3c.github.io/navigation-timing/#obsolete)已被弃用，此特性不再有望成为标准。请使用 {{domxref("PerformanceNavigationTiming")}} 接口代替。

## 浏览器兼容性

{{Compat}}

## 参见

- 它属于 {{domxref("PerformanceTiming")}} 接口。
- 文章 "[domInteractive: is it? really?](https://www.stevesouders.com/blog/2015/08/07/dominteractive-is-it-really/)" 解释了什么时候你可以使用这个属性作为加载网页的用户体验的代理。
