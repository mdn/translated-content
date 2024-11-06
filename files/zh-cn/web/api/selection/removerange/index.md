---
title: Selection.removeRange()
slug: Web/API/Selection/removeRange
---

{{ ApiRef() }}

### 概述

将一个区域从选区中移除。

### 语法

```plain
sel.removeRange(range)
```

### 参数

- _`range`_
  - : Range 对象将从选区当中移除。

### Examples

```plain
/* 通过设计一段 js 代码，我们可以获得多个区域，
 * 这段代码可以移除除了第一个区域之外的所有区域。
 *（此代码在 Chrome 中不生效，因为 Chrome 当中只能
 * 选择一个选区，哎我为什么要在 Mozilla 的网站上
 * 说这个？译者注）*/

s = window.getSelection();
if(s.rangeCount > 1) {
 for(var i = 1; i < s.rangeCount; i++) {
  s.removeRange(s.getRangeAt(i));
 }
}
```
