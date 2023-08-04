---
title: Touch.pageY
slug: Web/API/Touch/pageY
---

{{ ApiRef() }}

### 概述

触点相对于 HTML 文档上边沿的的 Y 坐标。和 `clientY` 属性不同，这个值是相对于整个 html 文档的坐标，和用户滚动位置无关。因此当存在垂直滚动的偏移时，这个值包含了垂直滚动的偏移。

### 语法

```plain
var y = touchItem.pageY;
```

### 返回值

- `y`
  - : 触点相对于 HTML 文档上边沿的的 Y 坐标。当存在垂直滚动的偏移时，这个值包含了垂直滚动的偏移。

### 标准定义

[Touch Events Specification](http://www.w3.org/TR/touch-events/)

### 相关链接

- {{ domxref("Touch.pageX") }}
- {{ domxref("Touch.screenY") }}
- {{ domxref("Touch.clientY") }}
