---
title: Screen.availLeft
slug: Web/API/ScreenDetailed/availLeft
---

{{ ApiRef() }}

### 概述

返回浏览器可用空间左边距离屏幕（系统桌面）左边界的距离。

### 语法

```plain
iAvail = window.screen.availLeft
```

### 示例

```plain
setY = window.screen.height - window.screen.availTop;
setX = window.screen.width - window.screen.availLeft;
window.moveTo(setX, setY);
```

### 备注

大多数情况下，该属性返回 0。

如果你在有两个屏幕的电脑上使用该属性，在右侧屏幕计算该属性值时，返回左侧屏幕的宽度（单位：像素），也即左侧屏幕左边界的 X 坐标。

在 Windows 中，该属性值取决于哪个屏幕被设为主屏幕，返回相对于主屏幕左边界的 X 坐标。就是说，即使主屏幕不是左侧的屏幕，它的左边界的 X 坐标也是返回 0。如果副屏幕在主屏幕的左侧，则它拥有负的 X 坐标。

\[1] \[2] - 左屏幕 _availLeft_ 返回 **0**，右侧的屏幕返回左侧屏幕的宽度

\[2] \[1] - 左侧屏幕 _availLeft_ 返回该屏幕的 **-width**，右侧屏幕返回 **0**

### 规范

DOM Level 0。不属于任何规范。
