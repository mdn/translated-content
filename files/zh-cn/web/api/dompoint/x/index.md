---
title: DOMPoint.x
slug: Web/API/DOMPoint/x
---

{{APIRef("DOM")}}

**`DOMPoint`** 的 x 属性表示该点的水平坐标。通常， `x` 的正值表示右边，负值表示左边，除非改变了默认的轴方向。

## 语法

```plain
var xPos = DOMPoint.x;
```

### 值

双精度浮点值，表示该点的 x 坐标值。这个值的类型并没有严格限制，意味着它可以是 {{jsxref("NaN")}} 或 {{jsxref("Infinity", "±Infinity")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他坐标属性：{{domxref("DOMPoint.y", "y")}}，{{domxref("DOMPoint.z", "z")}}，透视值 {{domxref("DOMPoint.w", "w")}}.
