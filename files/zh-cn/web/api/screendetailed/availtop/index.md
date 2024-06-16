---
title: Screen.availTop
slug: Web/API/ScreenDetailed/availTop
---

{{ ApiRef() }}

### 概述

浏览器窗口在屏幕上的可占用空间上边距离屏幕上边界的像素值。

### 语法

```plain
iAvail = window.screen.availTop
```

### 示例

```plain
setY = window.screen.height - window.screen.availTop;
setX = window.screen.width - window.screen.availLeft;
window.moveTo(setX, setY);
```

### 备注

大多数情况下，该属性返回 0。

### 规范

DOM Level 0。不属于任何规范。
