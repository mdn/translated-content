---
title: Math.PI
slug: Web/JavaScript/Reference/Global_Objects/Math/PI
---

{{JSRef("Global_Objects", "Math")}}

## 概述

**`Math.PI`** 表示一个圆的周长与直径的比例，约为 3.14159：

<math><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.PI</mi></mstyle><mo>=</mo><mi>π</mi><mo>≈</mo><mn>3.14159</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.PI}} = \pi \approx 3.14159</annotation></semantics></math>

{{js_property_attributes(0,0,0)}}

## 描述

由于 `PI` 是 `Math` 的静态属性，所以应该像这样使用：`Math.PI`，而不是作为你创建的 `Math` 实例的属性（`Math` 不是构造函数）。

## 示例

### 使用 `Math.PI`

下面的函数使用 Math.PI 计算给定半径的圆周长：

```js
function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}

calculateCircumference(1); // 6.283185307179586
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- The {{jsxref("Global_Objects/Math", "Math")}} object it belongs to.
