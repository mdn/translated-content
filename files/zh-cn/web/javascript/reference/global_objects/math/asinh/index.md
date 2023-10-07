---
title: Math.asinh()
slug: Web/JavaScript/Reference/Global_Objects/Math/asinh
---

{{JSRef}}

**`Math.asinh()`** 返回一个数值的反双曲正弦值，即：

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.asinh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="thinmathspace">arsinh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> the unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">sinh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.asinh}(x)} = \operatorname{arsinh}(x) = \text{ the unique } \; y \; \text{such that} \; \sinh(y) = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-asinh.html")}}

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

由于 `asinh()` 是 `Math 的静态方法`,所以应该像这样使用：`Math.asinh()`，而不是作为你创建的 `Math` 实例的方法（`Math 不是一个构造函数`）。

## 示例

### 使用 `Math.asinh()`

```js
Math.asinh(1); // 0.881373587019543
Math.asinh(0); // 0
```

## Polyfill

As a quick and dirty hack the expression <math><semantics><mrow><mo lspace="0em" rspace="thinmathspace">arsinh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mrow><mo>(</mo><mrow><mi>x</mi><mo>+</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn></mrow></msqrt></mrow><mo>)</mo></mrow></mrow><annotation encoding="TeX">\operatorname {arsinh} (x) = \ln \left(x + \sqrt{x^{2} + 1} \right)</annotation></semantics></math> may be used directly for a coarse emulation by the following function:

```js
Math.asinh =
  Math.asinh ||
  function (x) {
    if (x === -Infinity) {
      return x;
    } else {
      return Math.log(x + Math.sqrt(x * x + 1));
    }
  };
```

Been formally correct it suffers from a number of issues related to floating point computations. Accurate result requires special handling of positive/negative, small/large arguments as it done e.g. in [glibc](https://sourceware.org/git/?p=glibc.git;a=blob;f=sysdeps/ieee754/dbl-64/s_asinh.c) or [GNU Scientific Library](http://git.savannah.gnu.org/cgit/gsl.git/tree/sys/invhyp.c).

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}
