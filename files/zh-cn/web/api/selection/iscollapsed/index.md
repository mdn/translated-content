---
title: Selection.isCollapsed
slug: Web/API/Selection/isCollapsed
---

{{ ApiRef() }}

### 概述

返回一个布尔值用于描述选区的起始点和终止点是否位于一个位置（即是否框选了，译者注）。

### 用法

```plain
sel.isCollapsed
```

### 注意

即使是一个被折叠了的选区，其 rangeCount 的结果也可能大于 0。sel.getRangeAt(0) 会在选区被折叠的情况下返回一个值。
