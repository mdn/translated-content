---
title: "RangeError: argument is not a valid code point"
slug: Web/JavaScript/Reference/Errors/Not_a_valid_code_point
---

JavaScript 异常“Invalid code point”会在 {{jsxref("String.fromCodePoint()")}} 方法与 {{jsxref("NaN")}} 值、负整数（-1）、非整数（5.4）或大于 0x10FFFF（1114111）的值一起使用时抛出。

## 错误信息

```plain
RangeError: Invalid code point -1 (V8-based)
RangeError: -1 is not a valid code point (Firefox)
RangeError: Arguments contain a value that is out of range of code points (Safari)
```

## 错误类型

{{jsxref("RangeError")}}

## 什么地方出错了？

{{jsxref("String.fromCodePoint()")}} 方法在被传入 {{jsxref("NaN")}} 值、负整数（-1）、非整数（5.4）或大于 0x10FFFF 的值时抛出该错误。

[码位](https://zh.wikipedia.org/wiki/码位)（code point）是 Unicode 代码空间中的数值，即范围为 `0` 到 `0x10FFFF` 的整数。

## 示例

### 无效的示例

```js example-bad
String.fromCodePoint("_"); // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1); // RangeError
String.fromCodePoint(3.14); // RangeError
String.fromCodePoint(3e-2); // RangeError
String.fromCodePoint(NaN); // RangeError
```

### 有效的示例

```js example-good
String.fromCodePoint(42); // "*"
String.fromCodePoint(65, 90); // "AZ"
String.fromCodePoint(0x404); // 'Є' (U+0404)
String.fromCodePoint(0x2f804); // '你' (U+2F804)
String.fromCodePoint(194564); // '你'
String.fromCodePoint(0x1d306, 0x61, 0x1d307); // '𝌆a𝌇'
```

## 参见

- {{jsxref("String.fromCodePoint()")}}
