---
title: Performance.mark()
slug: Web/API/Performance/mark
---

{{APIRef("User Timing API")}}

**`mark()`** 方法在浏览器的性能缓冲区中使用给定名称添加一个{{domxref("DOMHighResTimeStamp","timestamp(时间戳)")}} _。_

*应用*定义的时间戳可以通过 {{domxref("Performance")}} 接口的一个 `getEntries*()` 方法 ({{domxref("Performance.getEntries","getEntries()")}}, {{domxref("Performance.getEntriesByName","getEntriesByName()")}} 或者 {{domxref("Performance.getEntriesByType","getEntriesByType()")}}) 检索到。

`标记` 的 {{domxref("PerformanceEntry","performance entry")}}将具有以下属性值：

- {{domxref("PerformanceEntry.entryType","entryType")}} - 设置为 "`mark`".
- {{domxref("PerformanceEntry.name","name")}} - 设置为 mark 被创建时给出的 "name"。
- {{domxref("PerformanceEntry.startTime","startTime")}} - 设置为 `mark()` 方法被调用时的 {{domxref("DOMHighResTimeStamp","timestamp")}} 。
- {{domxref("PerformanceEntry.duration","duration")}} - 设置为 "`0`" (标记没有持续时间).

如果这个方法被指定的 `name` 已经存在于{{domxref("PerformanceTiming")}} 接口，会抛出一个{{jsxref("SyntaxError")}}错误。

## 语法

```js-nolint
mark(name)
mark(name, markOptions)
```

### 参数

- name
  - : 一个表示标记名称的{{domxref("DOMString")}}。

### 返回值

无

## 实例

下面的示例演示如何使用 `mark()` 来创建和检索{{domxref("PerformanceMark")}}条目。

```js
// 创建一些标记。
performance.mark("squirrel");
performance.mark("squirrel");
performance.mark("monkey");
performance.mark("monkey");
performance.mark("dog");
performance.mark("dog");

// 获取所有的 PerformanceMark 条目。
const allEntries = performance.getEntriesByType("mark");
console.log(allEntries.length);
// 6

// 获取所有的 "monkey" PerformanceMark 条目。
const monkeyEntries = performance.getEntriesByName("monkey");
console.log(monkeyEntries.length);
// 2

// 删除所有标记。
performance.clearMarks();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
