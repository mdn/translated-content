---
title: TimeRanges：length 属性
slug: Web/API/TimeRanges/length
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("DOM")}}

**`TimeRanges.length`** 只读属性返回该对象中时间范围的数量。

## 值

一个数字。

## 示例

给定一个 ID 为“myVideo”的 video 元素：

```js
const v = document.getElementById("myVideo");

const buf = v.buffered;

const numRanges = buf.length;

if (buf.length === 1) {
  // 只有一个范围
  if (buf.start(0) === 0 && buf.end(0) === v.duration) {
    // 这个范围从视频的开始处开始，一直到结尾结束，因此整个视频都会被加载
  }
}
```

这个示例检查了时间范围，并判断视频的全部内容是否已经加载完成。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
