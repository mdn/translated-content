---
title: Math.SQRT1_2
slug: Web/JavaScript/Reference/Global_Objects/Math/SQRT1_2
---

{{JSRef("Global_Objects", "Math")}}

## 概述

**`Math.SQRT1_2`** 属性表示 1/2 的平方根，约为 0.707：

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.SQRT1_2</mi></mstyle><mo>=</mo><msqrt><mfrac><mn>1</mn><mn>2</mn></mfrac></msqrt><mo>=</mo><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac><mo>≈</mo><mn>0.707</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.SQRT1_2}} = \sqrt{\frac{1}{2}} = \frac{1}{\sqrt{2}} \approx 0.707</annotation></semantics></math>

{{js_property_attributes(0,0,0)}}

## 描述

由于 `SQRT1_2` 是 `Math` 对象的静态属性，所以应该像这样使用：`Math.SQRT1_2`，而不是作为你创建的 `Math` 实例的属性（`Math` 不是构造函数）。

## 示例

### 示例：使用 `SQRT1_2`

下面的函数返回 1/2 的平方根：

```js
function getRoot1_2() {
  return Math.SQRT1_2;
}

getRoot1_2(); // 0.7071067811865476
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- The {{jsxref("Global_Objects/Math", "Math")}} object it belongs to.
