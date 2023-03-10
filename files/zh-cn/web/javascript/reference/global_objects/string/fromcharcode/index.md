---
title: String.fromCharCode()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCharCode
---

{{JSRef}}

静态 **`String.fromCharCode()`** 方法返回由指定的 UTF-16 代码单元序列创建的字符串。

{{EmbedInteractiveExample("pages/js/string-fromcharcode.html")}}

## 语法

```plain
String.fromCharCode(num1[, ...[, numN]])
```

### 参数

- `num1, ..., numN`
  - : 一系列 UTF-16 代码单元的数字。范围介于 `0` 到 `65535`（`0xFFFF`）之间。大于 `0xFFFF` 的数字将被截断。不进行有效性检查。

### 返回值

一个长度为 `N` 的字符串，由 `N` 个指定的 UTF-16 代码单元组成。

## 描述

该方法返回一个字符串，而不是一个 {{jsxref("String")}} 对象。

由于 `fromCharCode()` 是 {{jsxref("String")}} 的静态方法，所以应该像这样使用：`String.fromCharCode()`，而不是作为你创建的 {{jsxref("String")}} 对象的方法。

### 返回补充字符

在 UTF-16 中，绝大部分常用的字符可以用一个 16 位的值表示（即一个代码单元）。然而，有一类字符叫 Base Multilingual Plane (BMP)，是所有可寻址的 Unicode 码点的 1/17th。剩下的码点，从范围 `65536` (`0x010000`) 到 `1114111` (`0x10FFFF`) 被称之为补充字符。在 UTF-16 中，补充字符也叫代理（surrogates），用两个 16 位代码单元表示，它是有目的被保留下来的。两个代理（surrogates）形成一个有效组合，也叫代理对，可以用来表示一个补充字符。

因为 `fromCharCode()` 只作用于 16 位的值 (跟 `\u` 转义序列一样)，为了返回一个补充字符，一个代理对是必须的。例如，`String.fromCharCode(0xD83C, 0xDF03)` 和 `\uD83C\uDF03` 返回码点 `U+1F303` "Night with Stars"。

While there is a mathematical relationship between the supplementary code point value (e.g. `0x1F303`) and both surrogate values that represent it (e.g., `0xD83C` and `0xDF03`), it does require an extra step to either calculate or look up the surrogate pair values every time a supplementary code point is to be used. 因此，使用 {{jsxref("String.fromCodePoint()")}}（ES2015 标准下的一个方法）更方便，这个方法允许你基于真实的码点返回补充字符。例如 `String.fromCodePoint(0x1F303)` 返回码点 `U+1F303` "Night with Stars"。

## 示例

### 使用 `fromCharCode()`

在 UTF-16 中，BMP 字符使用一个代码单元：

```js
String.fromCharCode(65, 66, 67);   // 返回 "ABC"
String.fromCharCode(0x2014);       // 返回 "—"
String.fromCharCode(0x12014);      // 也是返回 "—"; 数字 1 被剔除并忽略
String.fromCharCode(8212);         // 也是返回 "—"; 8212 是 0x2014 的十进制表示
```

[完整的 UTF 16 表格](https://asecuritysite.com/coding/asc2).
在 UTF-16 中，补充字符需要两个代码单元（即一个代理对）：

```js
String.fromCharCode(0xD83C, 0xDF03); // Code Point U+1F303 "Night with
String.fromCharCode(55356, 57091);   // Stars" == "\uD83C\uDF03"

String.fromCharCode(0xD834, 0xDF06, 0x61, 0xD834, 0xDF07); // "\uD834\uDF06a\uD834\uDF07"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.prototype.codePointAt()")}}
