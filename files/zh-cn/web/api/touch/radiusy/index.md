---
title: Touch.radiusY
slug: Web/API/Touch/radiusY
---

{{ ApiRef() }}

### 概述

能够包围用户和触摸平面的接触面的最小椭圆的垂直轴 (Y 轴) 半径。这个值的单位和 `screenY` 相同。

这个属性和 {{ domxref("Touch.radiusX") }}、{{ domxref("Touch.rotationAngle") }} 一起，描述了用户和触摸平面的接触面。这在面向非精确触摸设备 (由手指直接操作的触摸屏) 开发时非常有用。这些值描述了一个尽可能接近实际接触面 (例如用户的指尖) 的椭圆。

### 语法

```plain
var yRadius = touchItem.radiusY;
```

### 返回值

- `yRadius`
  - : 能够包围用户和触摸平面的接触面的最小椭圆的垂直轴 (Y 轴) 半径。

### 标准定义

[Touch Events Specification](https://www.w3.org/TR/touch-events/)

### 相关链接

- {{ domxref("Touch.radiusX") }}
- {{ domxref("Touch.rotationAngle") }}
- {{ domxref("Touch.force") }}
