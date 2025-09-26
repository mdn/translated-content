---
title: TimeRanges
slug: Web/API/TimeRanges
---

{{APIRef("DOM")}}`TimeRanges` 接口用来表示一组时间范围，主要目的是跟踪供{{HTMLElement("audio")}} 和{{HTMLElement("video")}} 元素加载使用的媒体哪些部分已经被缓冲。

一个 `TimeRanges` 对象包括一个或多个时间范围，其中每个都由一个开始偏移量和结束偏移量指定。你可以将你想要检索的时间范围的索引值传递给 `start()` 和 `end()` 方法来引用每个时间范围。

术语"[normalized TimeRanges object](https://www.w3.org/TR/html5/the-iframe-element.html#normalized-timeranges-object)"指出这种对象中的范围时有序的，不重叠的，不为空并且不接触的（相邻范围被折叠成更大的范围）。

## 属性

- {{domxref("TimeRanges.length")}} {{ReadOnlyInline}}
  - : 返回一个 `unsigned long` 类型的数字。表示由 time range 对象表示的 time ranges 的数量。

## 方法

- {{domxref("TimeRanges.start()")}}
  - : 返回具有指定索引的范围的开始时间。
- {{domxref("TimeRanges.end()")}}
  - : 返回指定范围的结束时间。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
