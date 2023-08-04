---
title: Number.isSafeInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
---

{{JSRef}}

**`Number.isSafeInteger()`** 方法用来判断传入的参数值是否是一个“安全整数”（safe integer）。

一个安全整数是一个符合下面条件的整数：

- 可以准确地表示为一个 IEEE-754 双精度数字，
- 其 IEEE-754 表示不能是舍入任何其他整数以适应 IEEE-754 表示的结果。.

比如，`2^53 - 1` 是一个安全整数，它能被精确表示，在任何 IEEE-754 舍入模式（rounding mode）下，没有其他整数舍入结果为该整数。作为对比，`2^53` 就不是一个安全整数，它能够使用 IEEE-754 表示，但是 `2^53 + 1` 不能使用 IEEE-754 直接表示，在就近舍入（round-to-nearest）和向零舍入中，会被舍入为 `2^53`。

安全整数范围为 `-(2^53 - 1)` 到 `2^53 - 1` 之间的整数，包含 `-(2^53 - 1)` 和 `2^53 - 1`。

## 语法

```plain
Number.isSafeInteger(testValue)
```

### 参数

- `testValue`
  - : 需要检测的参数。

### 返回值

一个{{jsxref("Boolean", "布尔值")}} 表示给定的值是否是一个安全整数（safe integer）。

## 示例

```js
Number.isSafeInteger(3); // true
Number.isSafeInteger(Math.pow(2, 53)); // false
Number.isSafeInteger(Math.pow(2, 53) - 1); // true
Number.isSafeInteger(NaN); // false
Number.isSafeInteger(Infinity); // false
Number.isSafeInteger("3"); // false
Number.isSafeInteger(3.1); // false
Number.isSafeInteger(3.0); // true
```

## Polyfill

```plain
Number.isSafeInteger = Number.isSafeInteger || function (value) {
   return Number.isInteger(value) && Math.abs(value) <= Number.MAX_SAFE_INTEGER;
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Number")}}
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
