---
title: Touch.radiusX
slug: Web/API/Touch/radiusX
---

{{ ApiRef() }}

### 概述

能够包围用户和触摸平面的接触面的最小椭圆的水平轴 (X 轴) 半径。这个值的单位和 `screenX` 相同。

这个属性和 {{ domxref("Touch.radiusY") }} 、{{ domxref("Touch.rotationAngle") }} 一起，描述了用户和触摸平面的接触面。这在面向非精确触摸设备 (由手指直接操作的触摸屏) 开发时非常有用。这些值描述了一个尽可能接近实际接触面 (例如用户的指尖) 的椭圆。

### 语法

```plain
var xRadius = touchItem.radiusX;
```

### 返回值

- `xRadius`
  - : 能够包围用户和触摸平面的接触面的最小椭圆的水平轴 (X 轴) 半径。

### 标准定义

[Touch Events Specification](https://www.w3.org/TR/touch-events/)

### 相关链接

- {{ domxref("Touch.radiusY") }}
- {{ domxref("Touch.rotationAngle") }}
- {{ domxref("Touch.force") }}
