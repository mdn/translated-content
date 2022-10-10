---
title: TimeRanges.length
slug: Web/API/TimeRanges/length
---

{{APIRef("DOM")}}

只读属性 **`TimeRanges.length`** 返回对象中时间范围的个数。

## 语法

```plain
length = TimeRanges.length;
```

## 示例

假定页面中存在一个 ID 为“myVideo”的 video 元素：

```js
var v = document.GetElementById("myVideo");

var buf = v.buffered;

var numRanges = buf.length;

if (buf.length == 1) {
  // Only one range
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
