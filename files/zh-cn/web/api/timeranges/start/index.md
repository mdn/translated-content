---
title: TimeRanges：start() 方法
short-title: start()
slug: Web/API/TimeRanges/start
l10n:
  sourceCommit: c1cb822be8f98ffb74da278fa1a01dc27d3a57b9
---

{{APIRef("DOM")}}

{{domxref("TimeRanges")}} 接口的 **`start()`** 方法会返回指定时间范围开始的时间偏移量（以秒为单位）。

## 语法

```js-nolint
start(index)
```

### 参数

- `index`
  - : 要返回起始时间的范围编号。

### 返回值

一个数字。

### 异常

- `IndexSizeError` {{domxref("DOMException")}}
  - : 如果指定的索引没有对应的时间范围，会抛出异常。

## 示例

给定一个 ID 为“myVideo”的视频元素：

```js
const v = document.getElementById("myVideo");

const buf = v.buffered;

const numRanges = buf.length;

if (buf.length === 1) {
  // 只有一个时间范围
  if (buf.start(0) === 0 && buf.end(0) === v.duration) {
    // 这个时间范围覆盖了视频开始到视频结束，因此可知整个视频已加载完成。
  }
}
```

此示例会遍历时间范围，以检查整个视频是否已加载完成。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
