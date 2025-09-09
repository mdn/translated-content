---
title: Math.asinh()
slug: Web/JavaScript/Reference/Global_Objects/Math/asinh
---

{{JSRef}}

**`Math.asinh()`** 返回一个数值的反双曲正弦值，即：

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.asinh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="thinmathspace">arsinh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> the unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">sinh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.asinh}(x)} = \operatorname{arsinh}(x) = \text{ the unique } \; y \; \text{such that} \; \sinh(y) = x</annotation></semantics></math>

{{InteractiveExample("JavaScript Demo: Math.asinh()")}}

```js interactive-example
console.log(Math.asinh(1));
// Expected output: 0.881373587019543

console.log(Math.asinh(0));
// Expected output: 0

console.log(Math.asinh(-1));
// Expected output: -0.881373587019543

console.log(Math.asinh(2));
// Expected output: 1.4436354751788103
```

## 语法

```plain
Math.asinh(x)
```

### 参数

- `x`
  - : 一个数值。

### 返回值

返回指定数值的反双曲正弦值。

## 描述

由于 `asinh()` 是 `Math` 的静态方法，所以应该像这样使用：`Math.asinh()`，而不是作为你创建的 `Math` 实例的方法（`Math` 不是一个构造函数）。

## 示例

### 使用 `Math.asinh()`

```js
Math.asinh(-Infinity); // -Infinity
Math.asinh(-1); // -0.881373587019543
Math.asinh(-0); // -0
Math.asinh(0); // 0
Math.asinh(1); // 0.881373587019543
Math.asinh(Infinity); // Infinity
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Math.asinh` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}
