---
title: Math
slug: Web/JavaScript/Reference/Global_Objects/Math
---

{{JSRef}}

**`Math`** 是一个内置对象，它拥有一些数学常数属性和数学函数方法。`Math` 不是一个函数对象。

`Math` 用于 {{jsxref("Number")}} 类型。它不支持 {{jsxref("BigInt")}}。

## 描述

与其他全局对象不同的是，`Math` 不是一个构造器。`Math` 的所有属性与方法都是静态的。引用圆周率的写法是 `Math.PI`，调用正余弦函数的写法是 `Math.sin(x)`，`x` 是要传入的参数。`Math` 的常量是使用 JavaScript 中的全精度浮点数来定义的。

## 静态属性

- {{jsxref("Math.E")}}
  - : 欧拉数，即自然对数的底数，约等于 `2.718`。
- {{jsxref("Math.LN2")}}
  - : `2` 的自然对数，约等于 `0.693`。
- {{jsxref("Math.LN10")}}
  - : `10` 的自然对数，约等于 `2.303`。
- {{jsxref("Math.LOG2E")}}
  - : 以 `2` 为底的 `E` 的对数，约等于 `1.443`。
- {{jsxref("Math.LOG10E")}}
  - : 以 `10` 为底的 `E` 的对数，约等于 `0.434`。
- {{jsxref("Math.PI")}}
  - : 圆周率，一个圆的周长和直径之比，约等于 `3.14159`。
- {{jsxref("Math.SQRT1_2")}}
  - : 二分之一 ½ 的平方根，同时也是 `2` 的平方根的倒数 <math><mfrac><mn>1</mn><mrow><msqrt><mn>2</mn><mrow></mrow></msqrt></mrow></mfrac></math>，约等于 `0.707`。
- {{jsxref("Math.SQRT2")}}
  - : `2` 的平方根，约等于 `1.414`。

## 方法

> [!NOTE]
> 需要注意的是，三角函数 `sin()`、`cos()`、`tan()`、`asin()`、`acos()`、`atan()` 和 `atan2()` 返回的值是*弧度*而非角度。若要转换，弧度除以 `(Math.PI / 180)` 即可转换为角度，同理，角度乘以这个数则能转换为弧度。

> [!NOTE]
> 需要注意的是，很多 `Math` 函数都有一个精度，而且这个精度在不同实现中也是不相同的。这意味着不同的浏览器会给出不同的结果，甚至，在不同的系统或架构下，相同的 JS 引擎也会给出不同的结果！

- {{jsxref("Global_Objects/Math/abs", "Math.abs(<var>x</var>)")}}
  - : 返回一个数的绝对值。
- {{jsxref("Global_Objects/Math/acos", "Math.acos(<var>x</var>)")}}
  - : 返回一个数的反余弦值。
- {{jsxref("Global_Objects/Math/acosh", "Math.acosh(<var>x</var>)")}}
  - : 返回一个数的反双曲余弦值。
- {{jsxref("Global_Objects/Math/asin", "Math.asin(<var>x</var>)")}}
  - : 返回一个数的反正弦值。
- {{jsxref("Global_Objects/Math/asinh", "Math.asinh(<var>x</var>)")}}
  - : 返回一个数的反双曲正弦值。
- {{jsxref("Global_Objects/Math/atan", "Math.atan(<var>x</var>)")}}
  - : 返回一个数的反正切值。
- {{jsxref("Global_Objects/Math/atanh", "Math.atanh(<var>x</var>)")}}
  - : 返回一个数的反双曲正切值。
- {{jsxref("Global_Objects/Math/atan2", "Math.atan2(<var>y</var>, <var>x</var>)")}}
  - : 返回 `y/x` 的反正切值。
- {{jsxref("Global_Objects/Math/cbrt", "Math.cbrt(<var>x</var>)")}}
  - : 返回一个数的立方根。
- {{jsxref("Global_Objects/Math/ceil", "Math.ceil(<var>x</var>)")}}
  - : 返回大于一个数的最小整数，即一个数向上取整后的值。
- {{jsxref("Global_Objects/Math/clz32", "Math.clz32(<var>x</var>)")}}
  - : 返回一个 32 位整数的前导零的数量。
- {{jsxref("Global_Objects/Math/cos", "Math.cos(<var>x</var>)")}}
  - : 返回一个数的余弦值。
- {{jsxref("Global_Objects/Math/cosh", "Math.cosh(<var>x</var>)")}}
  - : 返回一个数的双曲余弦值。
- {{jsxref("Global_Objects/Math/exp", "Math.exp(<var>x</var>)")}}
  - : 返回欧拉常数的参数次方，`E^x`，其中 `x` 为参数，`E` 是欧拉常数（2.718...，自然对数的底数）。
- {{jsxref("Global_Objects/Math/expm1", "Math.expm1(<var>x</var>)")}}
  - : 返回 `exp(x) - 1` 的值。
- {{jsxref("Global_Objects/Math/floor", "Math.floor(<var>x</var>)")}}
  - : 返回小于一个数的最大整数，即一个数向下取整后的值。
- {{jsxref("Global_Objects/Math/fround", "Math.fround(<var>x</var>)")}}
  - : 返回最接近一个数的[单精度浮点型](https://zh.wikipedia.org/wiki/%E5%96%AE%E7%B2%BE%E5%BA%A6%E6%B5%AE%E9%BB%9E%E6%95%B8)表示。
- {{jsxref("Global_Objects/Math/hypot", "Math.hypot([<var>x</var>[, <var>y</var>[, …]]])")}}
  - : 返回其所有参数平方和的平方根。
- {{jsxref("Global_Objects/Math/imul", "Math.imul(<var>x</var>, <var>y</var>)")}}
  - : 返回 32 位整数乘法的结果。
- {{jsxref("Global_Objects/Math/log", "Math.log(<var>x</var>)")}}
  - : 返回一个数的自然对数（㏒e，即 ㏑）。
- {{jsxref("Global_Objects/Math/log1p", "Math.log1p(<var>x</var>)")}}
  - : 返回一个数加 1 的和的自然对数（㏒e，即 ㏑）。
- {{jsxref("Global_Objects/Math/log10", "Math.log10(<var>x</var>)")}}
  - : 返回一个数以 10 为底数的对数。
- {{jsxref("Global_Objects/Math/log2", "Math.log2(<var>x</var>)")}}
  - : 返回一个数以 2 为底数的对数。
- {{jsxref("Global_Objects/Math/max", "Math.max([<var>x</var>[, <var>y</var>[, …]]])")}}
  - : 返回零到多个数值中最大值。
- {{jsxref("Global_Objects/Math/min", "Math.min([<var>x</var>[, <var>y</var>[, …]]])")}}
  - : 返回零到多个数值中最小值。
- {{jsxref("Global_Objects/Math/pow", "Math.pow(<var>x</var>, <var>y</var>)")}}
  - : 返回一个数的 y 次幂。
- {{jsxref("Global_Objects/Math/random", "Math.random()")}}
  - : 返回一个 0 到 1 之间的伪随机数。
- {{jsxref("Global_Objects/Math/round", "Math.round(<var>x</var>)")}}
  - : 返回四舍五入后的整数。
- {{jsxref("Global_Objects/Math/sign", "Math.sign(<var>x</var>)")}}
  - : 返回一个数的符号，得知一个数是正数、负数还是 0。
- {{jsxref("Global_Objects/Math/sin", "Math.sin(<var>x</var>)")}}
  - : 返回一个数的正弦值。
- {{jsxref("Global_Objects/Math/sinh", "Math.sinh(<var>x</var>)")}}
  - : 返回一个数的双曲正弦值。
- {{jsxref("Global_Objects/Math/sqrt", "Math.sqrt(<var>x</var>)")}}
  - : 返回一个数的平方根。
- {{jsxref("Global_Objects/Math/tan", "Math.tan(<var>x</var>)")}}
  - : 返回一个数的正切值。
- {{jsxref("Global_Objects/Math/tanh", "Math.tanh(<var>x</var>)")}}
  - : 返回一个数的双曲正切值。
- `Math.toSource()`
  - : 返回字符串 `"Math"`。
- {{jsxref("Global_Objects/Math/trunc", "Math.trunc(<var>x</var>)")}}
  - : 返回一个数的整数部分，直接去除其小数点及之后的部分。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Number")}}
