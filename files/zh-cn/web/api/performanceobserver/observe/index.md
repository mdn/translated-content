---
title: PerformanceObserver：observe() 方法
slug: Web/API/PerformanceObserver/observe
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

**{{domxref("PerformanceObserver")}}** 的 **`observe()`** 方法用于观察传入的参数中指定的性能条目类型的集合。

请参阅 {{domxref("PerformanceEntry.entryType")}} 了解条目类型列表，并参阅 {{domxref("PerformanceObserver.supportedEntryTypes_static", "PerformanceObserver.supportedEntryTypes")}} 了解用户代理支持的条目类型列表。

当记录一个指定类型的性能条目时，在创建 {{domxref("PerformanceObserver")}} 时设置的回调函数会被调用。

## 语法

```js-nolint
observe(options)
```

### 参数

- `options`
  - : 具有以下可能成员的对象：
    - `buffered`
      - : 一个布尔标志，指示缓冲条目是否应排队到观察器的缓冲区中。必须只与 `type` 选项一起使用。
    - `durationThreshold`
      - : {{domxref("DOMHighResTimeStamp")}} 定义 {{domxref("PerformanceEventTiming")}} 条目的阈值。默认值为 104 毫秒，四舍五入到最接近的 8 毫秒。最低阈值为 16 毫秒。不可与 `entryTypes` 选项同时使用。
    - `entryTypes`
      - : 字符串数组，每个字符串指定一个要观察的性能条目类型。不能与 `type`、`buffered` 或 `durationThreshold` 选项一起使用。
        请参阅 {{domxref("PerformanceEntry.entryType")}} 以获取有效的性能条目类型名称列表。无法识别的类型将被忽略，但浏览器可能会向控制台输出警告消息以帮助开发者调试代码。如果没有找到有效类型，则 `observe()` 不起作用。

    - `type`
      - : 一个字符串，用于指定一种需要观察的性能条目类型。不能与 `entryTypes` 选项一起使用。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 观察多种性能条目类型

此示例创建了一个 `PerformanceObserver`，并监视 `observe()` 方法中 `entryTypes` 选项指定的 `"mark"` 和 `"measure"` 条目类型。

```js
const observer = new PerformanceObserver((list, obj) => {
  list.getEntries().forEach((entry) => {
    // 处理“mark”和“measure”事件
  });
});
observer.observe({ entryTypes: ["mark", "measure"] });
```

### 观察单个性能条目类型

以下示例使用 `buffered` 和 `type` 配置项检索缓冲事件并订阅资源加载计时事件（{{domxref("PerformanceResourceTiming")}}）的最新条目。每当你需要配置观察器以使用 `buffered` 或 `durationThreshold` 选项时，应使用 `type` 而不是 `entryType`。否则无法同时收集多种性能条目类型。

```js
const observer = new PerformanceObserver((list, obj) => {
  list.getEntries().forEach((entry) => {
    // 处理“resource”事件
  });
});
observer.observe({ type: "resource", buffered: true });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
