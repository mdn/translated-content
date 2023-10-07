---
title: Math.atanh()
slug: Web/JavaScript/Reference/Global_Objects/Math/atanh
---

{{JSRef}}

**`Math.atanh()`** 函数返回一个数值反双曲正切值，即：

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>∊</mo><mrow><mo>(</mo><mrow><mo>-</mo><mn>1</mn><mo>,</mo><mn>1</mn></mrow><mo>)</mo></mrow><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.atanh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="thinmathspace">arctanh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> the unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">tanh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \in \left( -1, 1 \right), \mathtt{\operatorname{Math.atanh}(x)} = \operatorname{arctanh}(x) = \text{ the unique } \; y \; \text{such that} \; \tanh(y) = x</annotation></semantics></math>

## 语法

```plain
Math.atanh(x)
```

### 参数

- `x`
  - : 一个数值

## 描述

由于 `atanh()` 是 `Math 的静态方法`,所以应该像这样使用：`Math.atanh()`，而不是作为你创建的 `Math` 实例的方法（`Math 不是一个构造函数`）。

## 示例

### 使用 `Math.atanh()`

```js
Math.atanh(-2); // NaN
Math.atanh(-1); // -Infinity
Math.atanh(0); // 0
Math.atanh(0.5); // 0.5493061443340548
Math.atanh(1); // Infinity
Math.atanh(2); // NaN
```

对于大于 1 或是小于－1 的值，函数返回 {{jsxref("NaN")}} 。

## Polyfill

For \left|x\right| < 1, we have \operatorname {artanh} (x) = \frac{1}{2}\ln \left( \frac{1 + x}{1 - x} \right) so this can be emulated by the following function:

```js
Math.atanh =
  Math.atanh ||
  function (x) {
    return Math.log((1 + x) / (1 - x)) / 2;
  };
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}
