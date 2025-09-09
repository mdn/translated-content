---
title: Touch.clientX
slug: Web/API/Touch/clientX
---

{{ ApiRef() }}

### 概述

返回触点相对于可见视区 ([visual viewport](https://www.quirksmode.org/mobile/viewports2.html)) 左边沿的 X 坐标。不包括任何滚动偏移。这个值会根据用户对可见视区的缩放行为而发生变化。

### 语法

```plain
var x = touchItem.clientX;
```

### 返回值

- `x`
  - : 触点相对于可见视区 ([visual viewport](https://www.quirksmode.org/mobile/viewports2.html)) 左边沿的 X 坐标。不包括任何滚动偏移。

### 标准定义

[Touch Events Specification](https://www.w3.org/TR/touch-events/)

### 相关链接

- {{ domxref("Touch.clientY") }}
- {{ domxref("Touch.screenX") }}
- {{ domxref("Touch.pageX") }}
