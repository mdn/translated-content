---
title: 用户计时
slug: Web/API/Performance_API/User_timing
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{DefaultAPISidebar("Performance API")}}

用户计时是性能 API 的组成部分，允许使用浏览器性能时间轴中的[高精度时间戳](/zh-CN/docs/Web/API/DOMHighResTimeStamp)来测量应用程序的性能。计时性能条目分为两类：

- {{domxref("PerformanceMark")}} 条目是可命名的标记，可在应用程序的任意位置添加。
- {{domxref("PerformanceMeasure")}} 条目是两个标记之间的时间测量值。

## 什么是用户计时？

浏览器会向其性能时间轴提供特定信息（称为*性能条目*）。例如，[资源计时 API](/zh-CN/docs/Web/API/Performance_API/Resource_timing) 提供的条目可确定获取图像等资源所需的时间。

然而，浏览器无法感知应用程序内部的具体操作。例如当用户点击按钮或执行特定任务时，浏览器无法提供高精度性能测量。用户计时 API 作为浏览器性能时间线的扩展，可帮助测量并记录应用程序专属的性能数据。

相较于调用 {{jsxref("Date.now()")}} 或 {{domxref("performance.now()")}}，该 API 的优势在于可为标记命名，并能与性能工具良好集成。浏览器开发者工具可在性能面板中显示这些标记，该功能还兼容其他性能 API（如 {{domxref("PerformanceObserver")}} 对象）。

### 添加性能标记

要开始测量应用程序功能的性能，第一步是在代码的关键位置添加具名性能标记。理想情况下，需要遍历整个代码库，确定关键路径和重要任务，确保这些任务能够快速执行。

{{domxref("Performance.mark","performance.mark()")}} 方法用于创建 {{domxref("PerformanceMark")}}。该方法接受一个参数——标记的 `name`，如下例所示：

```js
// 放置在登录开始的代码
performance.mark("login-started");

// 放置在登录结束的代码
performance.mark("login-finished");
```

如果 `name` 参数不够用，`mark()` 支持通过配置对象进行扩展，可以在其中将附加信息放入 `detail` 属性（该属性可接受任意类型数据）。同时也可根据需要设置不同的 `startTime`。如下代码所示，`startTime` 被设置为 `12.5`，而 `detail` 则提供了额外信息（如使用的 HTML 元素）。

```js
performance.mark("login-started", {
  startTime: 12.5,
  detail: { htmlElement: myElement.id },
});
```

## 测量标记之间的时间间隔

现在已在应用程序中添加了标记，可以测量标记之间的耗时了。

{{domxref("Performance.measure()")}} 方法用于创建 {{domxref("PerformanceMeasure")}} 对象。该方法接受 `name` 参数（用于标识测量项）以及两个标记点 `start` 和 `end`（用于确定测量区间）。以下示例创建名为 `"login-duration"` 的测量项，用于记录登录流程的起止时间差。

该对象的 `duration` 属性会自动计算结束标记时间戳减去开始标记时间戳的值。可将此值记录日志或发送至分析接口。

```js
const loginMeasure = performance.measure(
  "login-duration",
  "login-started",
  "login-finished",
);

console.log(loginMeasure.duration);
```

{{domxref("Performance.measure()")}} 方法也可通过选项对象进行配置，因此可以执行更高级的测量，或通过 `detail` 属性提供额外信息。

例如，可通过 [`click` 事件](/zh-CN/docs/Web/API/Element/click_event)中的 [`event.timestamp`](/zh-CN/docs/Web/API/Event/timeStamp) 属性精确获取用户点击登录按钮的时间点，并将其与 UI 更新时刻（此处为 `"login-finished"` 标记）进行时间差测量。

```js
loginButton.addEventListener("click", (clickEvent) => {
  fetch(loginURL).then((data) => {
    renderLoggedInUser(data);

    const marker = performance.mark("login-finished");

    performance.measure("login-click", {
      detail: { htmlElement: myElement.id },
      start: clickEvent.timeStamp,
      end: marker.startTime,
    });
  });
});
```

## 观察性能测量值

获取自定义性能指标通知的首选方式是使用 {{domxref("PerformanceObserver")}} 对象。性能观察器允许被动地订阅实时发生的性能标记和指标。

```js
function perfObserver(list, observer) {
  list.getEntries().forEach((entry) => {
    if (entry.entryType === "mark") {
      console.log(`${entry.name} 的起始时间：${entry.startTime}`);
    }
    if (entry.entryType === "measure") {
      console.log(`${entry.name} 的耗时：${entry.duration}`);
    }
  });
}
const observer = new PerformanceObserver(perfObserver);
observer.observe({ entryTypes: ["measure", "mark"] });
```

有关更多信息，请参阅 {{domxref("PerformanceObserver")}}。

## 获取标记和测量值

浏览器的性能时间轴中包含多种不同的性能条目。其中部分由浏览器自动添加，部分则可能由你的代码添加，例如上文示例中的登录标记和测量值。

要获取特定时间点的性能标记和测量值，{{domxref("Performance")}} 接口提供了如下所示的三种方法：

> [!NOTE]
> 以下方法不会通知有关新性能标记的信息，仅能获取在调用这些方法时已创建的标记。
> 有关如何通过 {{domxref("PerformanceObserver")}} 接收新指标可用通知，请参阅上文[观察性能测量值](#观察性能测量值)章节。通常，使用性能观察器是获取性能标记和测量值的首选方式。

使用 {{domxref("Performance.getEntries","performance.getEntries()")}} 方法可获取所有的性能条目，可根据需求进行过滤。

```js
const entries = performance.getEntries();
entries.forEach((entry) => {
  if (entry.entryType === "mark") {
    console.log(`${entry.name} 的起始时间：${entry.startTime}`);
  }
  if (entry.entryType === "measure") {
    console.log(`${entry.name} 的耗时：${entry.duration}`);
  }
});
```

使用 {{domxref("Performance.getEntriesByType","performance.getEntriesByType(entryType)")}} 方法可获取已按类型过滤的性能条目。

```js
const marks = performance.getEntriesByType("mark");
marks.forEach((entry) => {
  console.log(`${entry.name} 的起始时间：${entry.startTime}`);
});

const measures = performance.getEntriesByType("measure");
measures.forEach((entry) => {
  console.log(`${entry.name} 的耗时：${entry.duration}`);
});
```

使用 {{domxref("Performance.getEntriesByName","performance.getEntriesByName(name, entryType)")}} 方法可通过名称获取特定的标记或测量值。

```js
// 记录所有名为“debug-marks”的标记
const debugMarks = performance.getEntriesByName("debug-mark", "mark");
debugMarks.forEach((entry) => {
  console.log(`${entry.name} 的起始时间：${entry.startTime}`);
});
```

## 移除标记和测量值

要清理所有性能标记或度量，或仅清理特定条目，可使用以下方法：

- [`performance.clearMarks()`](/zh-CN/docs/Web/API/Performance/clearMarks)
- [`performance.clearMeasures()`](/zh-CN/docs/Web/API/Performance/clearMeasures)

```js
// 清理所有标记
performance.clearMarks();

// 移除名为“myMarker”的标记
performance.clearMarks("myMarker");

// 清理所有测量值
performance.clearMeasures();

// 移除名为“myMeasure”的测量值
performance.clearMeasures("myMeasure");
```

## 参见

- {{domxref("Performance")}}
- {{domxref("PerformanceMark")}}
- {{domxref("PerformanceMeasure")}}
- {{domxref("PerformanceEntry")}}
- {{domxref("PerformanceObserver")}}
