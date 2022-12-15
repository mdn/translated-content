---
title: 'SyntaxError: "x" is not a legal ECMA-262 octal constant'
slug: Web/JavaScript/Reference/Errors/Bad_octal
---

{{jsSidebar("Errors")}}

## 信息

```plain
Warning: SyntaxError: 08 is not a legal ECMA-262 octal constant.
Warning: SyntaxError: 09 is not a legal ECMA-262 octal constant.
```

## 错误类型

仅在 [strict mode](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode) 下出现 {{jsxref("SyntaxError")}} 警告。

## 哪里出错了？

十进制字面量可以以零作为开始 (`0`)，后面跟着其他十进制数，但是假如前导 0 之后的所有数字都小于 8，那么这个数就会被解析为一个八进制的数。因为 08 和 09 不是这样的，所以 JavaScript 会发出警告。

请注意，不推荐使用八进制字面值和八进制转义序列，并会产生另外的弃用警告。在 ECMAScript 6 和更高版本里，语法使用前导零后跟小写或大写拉丁字母“O”（0o 或 0O）。更多信息请查看 [lexical grammar](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#Octal)。

> **备注：** 现在仅 **firefox** 会产生此错误。

## 示例

### 无效的八进制数

```js example-bad
"use strict";
08;
09;
// SyntaxError: 08 is not a legal ECMA-262 octal constant
// SyntaxError: octal literals and octal escape sequences are deprecated
```

### 有效的八进制数

Use a leading zero followed by the letter "o";

```js example-good
0O755;
0o644;
```

## 相关链接

- [Lexical grammar](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#Octal)
