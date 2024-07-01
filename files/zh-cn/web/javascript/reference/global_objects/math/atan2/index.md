---
title: Math.atan2()
slug: Web/JavaScript/Reference/Global_Objects/Math/atan2
---

{{JSRef}}

## 概述

**`Math.atan2()`** 返回从原点 (0,0) 到 (x,y) 点的线段与 x 轴正方向之间的平面角度 (弧度值)，也就是 Math.atan2(y,x)

## 语法

```plain
Math.atan2(y, x)
```

## 参数

- `y, x`
  - : 数值

## 描述

`atan2` 方法返回一个 -pi 到 pi 之间的数值，表示点 (x, y) 对应的偏移角度。这是一个逆时针角度，以弧度为单位，正 X 轴和点 (x, y) 与原点连线 之间。注意此函数接受的参数：先传递 y 坐标，然后是 x 坐标。

`atan2` 接受单独的 x 和 y 参数，而 `atan` 接受两个参数的比值。

由于 `atan2` 是 `Math` 的静态方法，所以应该像这样使用：`Math.atan2()`，而不是作为你创建的 `Math` 实例的方法。

## 示例

### 示例：使用 `Math.atan2`

```js
Math.atan2(90, 15) // 1.4056476493802699
Math.atan2(15, 90) // 0.16514867741462683

Math.atan2( ±0, -0 )               // ±PI.
Math.atan2( ±0, +0 )               // ±0.
Math.atan2( ±0, -x )               // ±PI for x > 0.
Math.atan2( ±0, x )                // ±0 for x > 0.
Math.atan2( -y, ±0 )               // -PI/2 for y > 0.
Math.atan2( y, ±0 )                // PI/2 for y > 0.
Math.atan2( ±y, -Infinity )        // ±PI for finite y > 0.
Math.atan2( ±y, +Infinity )        // ±0 for finite y > 0.
Math.atan2( ±Infinity, x )         // ±PI/2 for finite x.
Math.atan2( ±Infinity, -Infinity ) // ±3*PI/4.
Math.atan2( ±Infinity, +Infinity ) // ±PI/4.
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
