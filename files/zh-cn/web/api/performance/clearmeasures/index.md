---
title: Performance.clearMeasures()
slug: Web/API/Performance/clearMeasures
---

{{APIRef("User Timing API")}}

**`clearMeasures()`** 方法可以从浏览器的性能入口缓存区中移除声明的度量衡。如果这个方法被调用时没有传入参数，则所有 {{domxref("PerformanceEntry.entryType","entry type")}} 标记值为"`measure`" 的{{domxref("PerformanceEntry","性能实体")}}将被从性能入口缓存区中移除。

{{AvailableInWorkers}}

## 语法

```js-nolint
clearMeasures()
clearMeasures(name)
```

### 参数

- name {{optional_inline}}
  - : 用于表述时间戳名称的 {{domxref("DOMString")}}。如果没有提供这个参数，则所有 {{domxref("PerformanceEntry.entryType","entry type")}} 标记值为"`measure`" 的{{domxref("PerformanceEntry","性能实体")}}将被移除。

### 返回值

无

## 示例

下面的两个例子演示了 `clearMeasures()` 的用法。

```js
function clear_measure(name) {
  if (performance.clearMeasures === undefined) {
    console.log("performance.clearMeasures Not supported");
    return;
  }
  // 根据给定的 name 移除所有标记类型为 "measure" 的性能入口
  performance.clearMeasures(name);
}
function clear_all_measures() {
  if (performance.clearMeasures === undefined) {
    console.log("performance.clearMeasures Not supported");
    return;
  }
  // 移除性能缓存区中所有标记类型为 "measure" 的性能入口
  performance.clearMeasures();
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
