---
title: 自定义时间测量 API
slug: Web/API/Performance_API/User_timing
---

{{DefaultAPISidebar("自定义时间测量 API")}}

**`User Timing`**接口允许开发者在浏览器性能时间线中创建针对特定应用的 {{domxref("DOMHighResTimeStamp","时间戳")}}。有两种自定义时间测量事件类型："`mark`" {{domxref("PerformanceEntry.entryType","事件类型")}}和"`measure`" {{domxref("PerformanceEntry.entryType","事件类型")}}。

`mark` 事件可以指定任意的名字并且可以在放在应用的任何位置，`measure` 事件也可以指定为任意的名字，但是需要放在两个 mark 之间，所以它实际上是两个 mark 的中间点。

此文档提供了对 `mark` 和 `measure` {{domxref("PerformanceEntry.entryType","性能事件类型")}}的概览，包括四个拓展了 {{domxref("Performance")}} 接口的 `User Timing` 方法。

## 性能`标记`

性能 **`标记`** 是一个由应用创建并指定名称的{{domxref("PerformanceEntry","性能条目")}}。这个标记是浏览器性能时间线上的一个{{domxref("DOMHighResTimeStamp","时间戳")}}。

### 创建一个性能`标记`

{{domxref("Performance.mark","performance.mark()")}}方法被用来创建一个性能标记。这个方法需要一个参数，标记的名称（例如`performance.mark("mark-1")`）。

`标记的`{{domxref("PerformanceEntry","性能入口")}}包含以下属性值：

- {{domxref("PerformanceEntry.entryType","entryType")}} - 设置为"`mark`".
- {{domxref("PerformanceEntry.name","name")}} - 设置为创建该标记时"`name`"参数传入的值
- {{domxref("PerformanceEntry.startTime","startTime")}} - 设置为`标记`被取消时的{{domxref("DOMHighResTimeStamp","时间戳")}}。
- {{domxref("PerformanceEntry.duration","duration")}} - 设置为"`0`"（一个没有时间间隔的标记）

### 检索一个性能`标记`

{{domxref("Performance")}}接口有三个方法可以用来检索标记：

- {{domxref("Performance.getEntries","performance.getEntries()")}}
  - : 返回性能时间线上的所有{{domxref("PerformanceEntry","性能条目")}}。通过筛选{{domxref("PerformanceEntry.entryType","entryType")}}属性为"`mark`"的条目来获取所有`标记`条目。
- {{domxref("Performance.getEntriesByType","performance.getEntriesByType(entryType)")}}
  - : 返回性能事件线上具有指定`entryType`的{{domxref("PerformanceEntry","性能条目")}}，通过将`entryType`设置为"`mark`"来获取所有标记条目。
- {{domxref("Performance.getEntriesByName","performance.getEntriesByName(name, entryType)")}}
  - : 返回性能时间线上具有指定`name`和`entryType`的{{domxref("PerformanceEntry","性能条目")}} 。将`entryType`设置为"`mark`"来获得所有的标记条目（通过指定`name`来检索更具体的条目)。

### 移除性能`标记`

想要从性能事件线上移除一个特定标记，调用`performance.clearMarks(name)`，`name`是想要移除的标记的名称。如果这个方法被调用时没有传入任何参数，那么性能时间线上所有标记类型的条目都会被移除。

## 性能`测量`

**`measure`**事件同样由程序指定名称，但是它被放在两个标记之间因此实际上是两个标记间的中间点。

### 创建一个性能`测量`

`测量`通过调用`performance.measure(measureName, startMarkName, endMarkName)`来创建，`measureName`指定了该测量的名称，`startMarkName`和`endMarkName`分别指定了性能时间线上该测量前后的两个标记的名称。

`测量`{{domxref("PerformanceEntry","性能条目")}}包含以下属性值：

- {{domxref("PerformanceEntry.entryType","entryType")}} - 设置为"`measure`".
- {{domxref("PerformanceEntry.name","name")}} - 设置为测量被创建时"`name`"参数给定的值
- {{domxref("PerformanceEntry.startTime","startTime")}} - 设置为`measure()`被调用时的 {{domxref("DOMHighResTimeStamp","时间戳")}}。
- {{domxref("PerformanceEntry.duration","duration")}} - 设置为该测量间隔{{domxref("DOMHighResTimeStamp")}}（即结束标记时间戳减去开始标记时间戳的差值)。

### 检索性能`测量`

{{domxref("Performance")}}接口有三个方法可以检索一个测量：

- {{domxref("Performance.getEntries","performance.getEntries()")}}
  - : 返回性能时间线上所有的{{domxref("PerformanceEntry","性能条目")}}。通过筛选{{domxref("PerformanceEntry.entryType","entryType")}}属性为"`measure`"的条目来获取所有`测量`条目。
- {{domxref("Performance.getEntriesByType","performance.getEntriesByType(entryType)")}}
  - : 返回性能事件线上指定`entryType`的{{domxref("PerformanceEntry","性能条目")}}，通过将`entryType`设置为"`measure`"来获取所有的测量条目。
- {{domxref("Performance.getEntriesByName","performance.getEntriesByName(name, entryType)")}}
  - : 返回性能时间线上具有指定 `name`和`entryType`的{{domxref("PerformanceEntry","性能项目")}}，将`entryType`设置为"`measure`"来获取所有测量条目（通过指定`name`参数来检索更具体的条目)。

### 移除性能`测量`

想要从性能时间线上移除一个测量，调用`performance.clearMeasures(name)`，`name` 是要移除的测量的名称。如果该方法被调用时没有传入任何参数，那么性能时间线上所有的测量都会被移除。

## 互操作性

如{{domxref("Performance")}}接口的[浏览器兼容性](/zh-CN/docs/Web/API/Performance#Browser_compatibility)表所示，`User Timing` 方法被大多数桌面和移动浏览器（唯一的例外是桌面 Safari 和移动版 Safari，[Safari Technology Preview 24 已经支持该方法](https://developer.apple.com/safari/technology-preview/release-notes/#r24))。

想要测试你的浏览器是否支持该 API，运行[`perf-api-support`](https://mdn.github.io/dom-examples/performance-apis/perf-api-support.html)程序。

## 相关内容

- [User Timing Standard](https://w3c.github.io/user-timing/); W3C Editor's Draft
- [CanIUse data](http://caniuse.com/#search=user-timing)
- [A Primer for Web Performance Timing APIs](http://siusin.github.io/perf-timing-primer/); Xiaoqian Wu; W3C Editor's Draft
