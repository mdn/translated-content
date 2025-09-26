---
title: DOMPoint.z
slug: Web/API/DOMPoint/z
---

{{APIRef("DOM")}}

**`DOMPoint`** 的 **`z`** 属性表示该点的深度坐标。 `z` 值为 0 表示屏幕平面，正值表示从屏幕前面向靠近用户的方向延伸，负值表示从屏幕后面向远离用户的方向延伸，除非改变了默认的轴方向。

## 语法

```plain
var zPos = DOMPoint.z;
```

### 值

双精度浮点值，表示该点的 z 坐标值。这个值的类型并没有严格限制，意味着它可以是 {{jsxref("NaN")}} 或 {{jsxref("Infinity", "±Infinity")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他坐标属性：{{domxref("DOMPoint.x", "x")}}， {{domxref("DOMPoint.y", "y")}}，透视值 {{domxref("DOMPoint.w", "w")}}。
