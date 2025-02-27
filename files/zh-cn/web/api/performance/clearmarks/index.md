---
title: Performance.clearMarks()
slug: Web/API/Performance/clearMarks
---

{{APIRef("User Timing API")}}

**`clearMarks()`** 这个方法可以从浏览器的 performance entry 缓存中移除声明的标记。如果调用这个方法时没有传递参数，则所有带有{{domxref("PerformanceEntry.entryType","entry type")}}这类标记的{{domxref("PerformanceEntry","performance entries")}} 将从 performance entry 缓存区中被移除。

## 语法

```js-nolint
clearMarks()
clearMarks(name)
```

### 参数

- name {{optional_inline}}
  - : {{domxref("DOMString")}} 表示时间戳的名字，如果没有提供这个参数，则所有带有{{domxref("PerformanceEntry.entryType","entry type")}}这类标记的{{domxref("PerformanceEntry","performance entries")}} 将从 performance entry 缓存区中被移除。

### 返回值

无

## 示例

下面的例子演示 `clearMarks()` 的两种用法。

```js
function clear_mark(name) {
  if (performance.clearMarks === undefined) {
    console.log("performance.clearMarks Not supported");
    return;
  }
  //移除所有标记了此名称的 peformance entry
  performance.clearMarks(name);
}
function clear_all_marks() {
  if (performance.clearMarks === undefined) {
    console.log("performance.clearMarks Not supported");
    return;
  }
  //从 performance 缓冲区中移除所有标记的 performance entry
  performance.clearMarks();
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
