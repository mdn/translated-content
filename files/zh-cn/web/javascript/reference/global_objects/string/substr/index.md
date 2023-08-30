---
title: String.prototype.substr()
slug: Web/JavaScript/Reference/Global_Objects/String/substr
---

{{JSRef}} {{deprecated_header}}

{{jsxref("String")}} 值的 **`substr()`** 方法返回该字符串的一部分，从指定的索引开始，然后扩展到给定数量的字符。

> **备注：** `substr()` 不属于 ECMAScript 主要规范——它在[附件 B: Web 浏览器的附加 ECMAScript 功能](https://tc39.es/ecma262/multipage/additional-ecmascript-features-for-web-browsers.html)中定义，这是非浏览器运行时的可选标准。因此，建议人们使用标准的 [`String.prototype.substring()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring) 和 [`String.prototype.slice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/slice) 方法，以便使他们的代码能够更好地、最大程度地跨平台。[`String.prototype.substring()` 页面](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring#substring_和_substr_之间的区别)对这三种方法进行了一些比较。

{{EmbedInteractiveExample("pages/js/string-substr.html")}}

## 语法

```js-nolint
substr(start)
substr(start, length)
```

### 参数

- `start`
  - : 返回子字符串中要包含的第一个字符的索引。
- `length` {{optional_inline}}
  - : 要提取的字符数。

### 返回值

一个包含给定字符串指定部分的新字符串。

## 描述

字符串的 `substr()` 方法从字符串中提取 `length` 字符，从 `start` 索引开始计数。

- 如果 `start >= str.length`，则返回空字符串。
- 如果 `start < 0`，则索引从字符串末尾开始计数。更准确地说，在这种情况下，子字符串从 `max(start + str.length, 0)` 开始。
- 如果省略 `start` 或其值为 {{jsxref("undefined")}}，则将其视为 `0`。
- 如果省略 `length` 或其值为 {{jsxref("undefined")}}，或者如果 `start + length >= str.length`，则 `substr()` 会提取字符到字符串末尾。
- 如果 `length < 0`，则返回空字符串。
- 对于 `start` 和 `length`，{{jsxref("NaN")}} 被视为 `0`。

尽管我们建议你避免使用 `substr()`，但是没有简单的方法可以将遗留代码中的 `substr()` 迁移到 `slice()` 或 `substring()`，而无需为 `substr()` 编写一个 polyfill。例如，当 `str = "01234", a = 1, l = -2` 时，`str.substr(a, l)`、`str.slice(a, a + l)` 和 `str.substring(a, a + l)` 都有不同的结果——`substr()` 返回空字符串，`slice()` 返回 `"123"`，而 `substring()` 返回 `"0"`。实际的重构路径取决于对 `a` 和 `l` 范围的了解。

## 示例

### 使用 substr()

```js
const aString = "Mozilla";

console.log(aString.substr(0, 1)); // 'M'
console.log(aString.substr(1, 0)); // ''
console.log(aString.substr(-1, 1)); // 'a'
console.log(aString.substr(1, -1)); // ''
console.log(aString.substr(-3)); // 'lla'
console.log(aString.substr(1)); // 'ozilla'
console.log(aString.substr(-20, 2)); // 'Mo'
console.log(aString.substr(20, 2)); // ''
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `String.prototype.substr` 的 Polyfill](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.slice()")}}
- {{jsxref("String.prototype.substring()")}}
