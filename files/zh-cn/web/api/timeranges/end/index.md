---
title: TimeRanges.end()
slug: Web/API/TimeRanges/end
---

{{APIRef("DOM")}}

返回指定时间范围的结束偏移量。

## 语法

```plain
endTime = TimeRanges.end(index)
```

### 参数

- `index` 想要检索的时间范围的索引值。

### 异常

- INDEX_SIZE_ERR
  - : 如果不存在指定索引值的时间范围，抛出 `DOMException` 异常。

## 示例

假定页面中存在一个 ID 为“myVideo”的 video 元素：

```js
var v = document.getElementById("myVideo");

var buf = v.buffered;

var numRanges = buf.length;

if (buf.length == 1) {
  // only one range
  if (buf.start(0) == 0 && buf.end(0) == v.duration) {
    // The one range starts at the beginning and ends at
    // the end of the video, so the whole thing is loaded
  }
}
```

这个例子演示了如何通过 `TimeRanges` 来判断 video 是否已经完全加载。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
