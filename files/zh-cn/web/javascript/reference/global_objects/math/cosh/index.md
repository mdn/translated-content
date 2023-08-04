---
title: Math.cosh()
slug: Web/JavaScript/Reference/Global_Objects/Math/cosh
---

{{JSRef}}

**`Math.cosh()`** 函数返回数值的双曲余弦函数，可用 {{jsxref("Math.E", "constant e", "", 1)}} 表示：

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mo lspace="0em" rspace="thinmathspace">Math.cosh(x)</mo></mstyle><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><msup><mi>e</mi><mrow><mo>-</mo><mi>x</mi></mrow></msup></mrow><mn>2</mn></mfrac></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.cosh(x)}} = \frac{e^x + e^{-x}}{2}</annotation></semantics></math>

## Syntax

```plain
Math.cosh(x)
```

### 参数

- `x`
  - : 数值。

## 描述

由于`cosh()` 是 Math 的静态函数，只需通过`Math.cosh()` 调用，而不用通过创建 Math 对象来调用。

## 示例

### 使用 `Math.cosh()`

```js
Math.cosh(0); // 1
Math.cosh(1); // 1.5430806348152437
Math.cosh(-1); // 1.5430806348152437
```

## Polyfill

可通过 {{jsxref("Math.exp()")}} 函数模拟实现：

```js
Math.cosh =
  Math.cosh ||
  function (x) {
    return (Math.exp(x) + Math.exp(-x)) / 2;
  };
```

或只调用一次 {{jsxref("Math.exp()")}} 函数：

```js
Math.cosh =
  Math.cosh ||
  function (x) {
    var y = Math.exp(x);
    return (y + 1 / y) / 2;
  };
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Math.acosh()")}} {{experimental_inline}}
- {{jsxref("Math.asinh()")}} {{experimental_inline}}
- {{jsxref("Math.atanh()")}} {{experimental_inline}}
- {{jsxref("Math.sinh()")}} {{experimental_inline}}
- {{jsxref("Math.tanh()")}} {{experimental_inline}}
