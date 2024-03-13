---
title: DOMPoint.y
slug: Web/API/DOMPoint/y
---

{{APIRef("DOM")}}

**`DOMPoint`** 的 **`y`** 属性表示该点的垂直坐标。`y` 值增加表示向下偏移，减小表示向上偏移，除非改变了默认轴方向。

## 语法

```plain
var yPos = DOMPoint.y;
```

### 值

双精度浮点值，表示该点的 y 坐标值。这个值的类型并没有严格限制，意味着它可以是 {{jsxref("NaN")}} 或 {{jsxref("Infinity", "±Infinity")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他坐标属性： {{domxref("DOMPoint.x", "x")}}, {{domxref("DOMPoint.z", "z")}}, 透视值 {{domxref("DOMPoint.w", "w")}}。
