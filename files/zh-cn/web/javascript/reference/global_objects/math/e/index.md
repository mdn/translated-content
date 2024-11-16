---
title: Math.E
slug: Web/JavaScript/Reference/Global_Objects/Math/E
---

{{JSRef}}

## 概述

**`Math.E`** 属性表示自然对数的底数（或称为基数），e，约等于 2.718。

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.E</mi></mstyle><mo>=</mo><mi>e</mi><mo>≈</mo><mn>2.718</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.E}} = e \approx 2.718</annotation></semantics></math>

{{js_property_attributes(0,0,0)}}

## 描述

由于 `E` 是 `Math` 对象的静态属性，所以应该像这样使用：`Math.E`，而不是作为你创建的 `Math` 实例对象的属性（`Math` 不是构造函数）。

## 示例

### 示例：使用 `Math.E`

下面的函数返回 e：

```js
function getNapier() {
  return Math.E;
}

getNapier(); // 2.718281828459045
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log1p()")}}
