---
title: PerformanceLongTaskTiming
slug: Web/API/PerformanceLongTaskTiming
l10n:
  sourceCommit: 04301fa08caba25ce0fc17ea80e35383aa3361c0
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

**`PerformanceLongTaskTiming`** 接口提供了关于占用 UI 线程 50 毫秒或更长时间的任务的信息。

## 描述

会阻塞主线程 50 毫秒或更长时间的长任务会导致以下问题（除其他问题外）：

- {{glossary("Time to interactive", "可交互时间（TTI）")}}延迟。
- 严重不稳定的输入延迟。
- 严重不稳定的事件回调延迟。
- 卡顿的动画和活动效果。

长任务是指主 UI 线程连续忙碌 50 毫秒或更长时间的任何不间断时段。常见示例包括：

- 长时间运行的事件处理程序。
- 耗时的布局重排和其他重渲染操作。
- 浏览器在事件循环的不同轮次之间执行的、耗时超过 50 毫秒的操作。

长任务所指的“肇事浏览上下文容器”（简称“容器”），即任务发生所在的顶级页面、{{HTMLElement("iframe")}}、{{HTMLElement("embed")}} 或 {{HTMLElement("object")}}。

对于未发生在顶级页面内的任务，以及为了确定哪个容器导致了该长时间任务，{{domxref("TaskAttributionTiming")}} 接口提供了 `containerId`、`containerName` 和 `containerSrc` 属性，这些属性可能提供有关任务来源的更多信息。

`PerformanceLongTaskTiming` 继承自 {{domxref("PerformanceEntry")}}。

{{InheritanceDiagram}}

## 实例属性

该接口通过以下限定方式，扩展了以下适用于长任务计时性能条目类型的 {{domxref("PerformanceEntry")}} 属性：

- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回一个 {{domxref("DOMHighResTimeStamp")}}，表示任务开始到结束之间的经过时间，精度为 1 毫秒。
- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - ：始终返回 `"longtask"`
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - ：返回以下字符串之一，指代可归因于该长任务的浏览上下文或框架：
    - `"cross-origin-ancestor"`
    - `"cross-origin-descendant"`
    - `"cross-origin-unreachable"`
    - `"multiple-contexts"`
    - `"same-origin-ancestor"`
    - `"same-origin-descendant"`
    - `"same-origin"`
    - `"self"`
    - `"unknown"`
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回一个 {{domxref("DOMHighResTimeStamp")}}，表示任务开始的时间。

该接口还支持以下属性：

- {{domxref("PerformanceLongTaskTiming.attribution")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 返回一个 {{domxref("TaskAttributionTiming")}} 实例序列。

## 实例方法

- {{domxref("PerformanceLongTaskTiming.toJSON()")}} {{Experimental_Inline}}
  - : 返回 `PerformanceLongTaskTiming` 对象的 JSON 表示。

## 示例

### 获取长任务

要获取长任务的计时信息，请创建一个 {{domxref("PerformanceObserver")}} 实例，然后调用其 [`observe()`](/zh-CN/docs/Web/API/PerformanceObserver/observe) 方法，并将 `"longtask"` 作为 [`type`](/zh-CN/docs/Web/API/PerformanceEntry/entryType) 选项的值。此外，还需要将 `buffered` 设置为 `true`，以便获取用户代理在构建文档时缓冲的长时间任务。随后，`PerformanceObserver` 对象的回调函数将被调用，并传入一个包含 `PerformanceLongTaskTiming` 对象的列表，你可以对这些对象进行分析。

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry);
  });
});

observer.observe({ type: "longtask", buffered: true });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("TaskAttributionTiming")}}
