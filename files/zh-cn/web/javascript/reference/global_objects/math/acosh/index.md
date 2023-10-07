---
title: Math.acosh()
slug: Web/JavaScript/Reference/Global_Objects/Math/acosh
---

{{JSRef}}

**`Math.acosh()`** 函数返回一个数的反双曲余弦值，即：

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>≥</mo><mn>1</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.acosh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="thinmathspace">arcosh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> the unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>≥</mo><mn>0</mn><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">cosh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \geq 1, \mathtt{\operatorname{Math.acosh}(x)} = \operatorname{arcosh}(x) = \text{ 唯一的} \; y \geq 0 \; \text{使得} \; \cosh(y) = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-acosh.html")}}

## 语法

```js-nolint
Math.acosh(x)
```

### 参数

- `x`
  - : 一个数字。

### 返回值

返回给定数的反双曲余弦值，如果该数小于 **1** 则返回 {{jsxref("NaN")}}。

## 描述

因为 `acosh()` 是 `Math` 的静态方法，所以你应该通过 `Math.acosh()` 调用，而不是作为你创建的 `Math` 对象的方法（`Math` 不是构造函数）。

## 示例

### 使用 `Math.acosh()`

```js
Math.acosh(-1); // NaN
Math.acosh(0); // NaN
Math.acosh(0.5); // NaN
Math.acosh(1); // 0
Math.acosh(2); // 1.3169578969248166
```

当参数小于 1 时，`Math.acosh()` 将返回 {{jsxref("NaN")}}。

## 向下兼容

当 <math><semantics><mrow><mi>x</mi><mo>≥</mo><mn>1</mn></mrow><annotation encoding="TeX">x \geq 1</annotation></semantics></math> 时，都有 <math><semantics><mrow><mo lspace="0em" rspace="thinmathspace">arcosh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mrow><mo>(</mo><mrow><mi>x</mi><mo>+</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>-</mo><mn>1</mn></mrow></msqrt></mrow><mo>)</mo></mrow></mrow><annotation encoding="TeX">\operatorname {arcosh} (x) = \ln \left(x + \sqrt{x^{2} - 1} \right)</annotation></semantics></math> ，因此可以使用以下函数实现：

```js
Math.acosh =
  Math.acosh ||
  function (x) {
    return Math.log(x + Math.sqrt(x * x - 1));
  };
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}
