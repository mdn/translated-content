---
title: 'RangeError: argument is not a valid code point'
slug: Web/JavaScript/Reference/Errors/Not_a_codepoint
---

{{jsSidebar("Errors")}}

## 错误信息

```plain
RangeError: {0} is not a valid code point (Firefox)
RangeError: Invalid code point {0} (Chrome)
```

## 错误类型

{{jsxref("RangeError")}}

## 什么地方出错了？

{{jsxref("String.fromCodePoint()")}} 这个方法只能接受有效的码位（code point）。

码位（ [code point](https://en.wikipedia.org/wiki/Code_point)）是组成码空间（或代码页）的数值，范围是 0 到 0x10FFFF。

{{jsxref("NaN")}}，负整数（-1），非整数（3.14），或编号大于 0x10FFFF (1114111) 的字符，无法使用该方法。

## 范例

### 无效的例子

```js example-bad
String.fromCodePoint('_');      // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1);       // RangeError
String.fromCodePoint(3.14);     // RangeError
String.fromCodePoint(3e-2);     // RangeError
String.fromCodePoint(NaN);      // RangeError
```

### 有效的例子

```js example-good
String.fromCodePoint(42);       // "*"
String.fromCodePoint(65, 90);   // "AZ"
String.fromCodePoint(0x404);    // "\u0404"
String.fromCodePoint(0x2F804);  // "\uD87E\uDC04"
String.fromCodePoint(194564);   // "\uD87E\uDC04"
String.fromCodePoint(0x1D306, 0x61, 0x1D307) // "\uD834\uDF06a\uD834\uDF07"
```

## 相关链接

- {{jsxref("String.fromCodePoint()")}}
