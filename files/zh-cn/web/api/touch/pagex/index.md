---
title: Touch.pageX
slug: Web/API/Touch/pageX
---

{{ ApiRef() }}

### 概述

触点相对于 HTML 文档左边沿的的 X 坐标。和 `clientX` 属性不同，这个值是相对于整个 html 文档的坐标，和用户滚动位置无关。因此当存在水平滚动的偏移时，这个值包含了水平滚动的偏移。

### 语法

```plain
var x = touchItem.pageX;
```

### 返回值

- `x`
  - : 触点相对于 HTML 文档左边沿的的 X 坐标。当存在水平滚动的偏移时，这个值包含了水平滚动的偏移。

### 标准定义

[Touch Events Specification](http://www.w3.org/TR/touch-events/)

### 相关链接

- {{ domxref("Touch.pageY") }}
- {{ domxref("Touch.screenX") }}
- {{ domxref("Touch.clientX") }}
