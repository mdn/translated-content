---
title: String.prototype.toWellFormed()
slug: Web/JavaScript/Reference/Global_Objects/String/toWellFormed
---

{{JSRef}}

{{jsxref("String")}} 的 **`toWellFormed()`** 方法返回一个字符串，其中该字符串的所有[单独代理项](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_字符、unicode_码位和字素簇)都被替换为 Unicode 替换字符 U+FFFD。

## 语法

```js-nolint
toWellFormed()
```

### 返回值

新的字符串是原字符串的一个拷贝，其中所有的单独代理项被替换为 Unicode 替换字符 U+FFFD。如果 `str` [是格式正确的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/isWellFormed)，仍然会返回一个新字符串（本质上是 `str` 的一个拷贝）。

## 描述

JavaScript 中的字符串是 UTF-16 编码的。UTF-16 编码中有*代理对*的概念，这一概念在 [UTF-16 字符、Unicode 码位和字素簇](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_字符、unicode_码位和字素簇)部分有详细介绍。

`toWellFormed()` 迭代字符串的码元，并将任何单独代理项替换为 [Unicode 替换字符](<https://zh.wikipedia.org/wiki/特殊_(Unicode區段)>) U+FFFD `�`。这确保了返回的字符串格式正确并可用于期望正确格式字符串的函数，比如 {{jsxref("encodeURI")}}。由于引擎能够直接访问字符串的内部表示，与自定义实现相比 `toWellFormed()` 更高效。

当在某些上下文中使用格式不正确的字符串时，例如 {{domxref("TextEncoder")}}，它们会自动转换为使用相同替换字符的格式正确的字符串。当单独代理项被呈现时，它们也会呈现为替换字符（一个带有问号的钻石形状）。

## 示例

### 使用 toWellFormed()

```js
const strings = [
  // 单独的前导代理
  "ab\uD800",
  "ab\uD800c",
  // 单独的后尾代理
  "\uDFFFab",
  "c\uDFFFab",
  // 格式正确
  "abc",
  "ab\uD83D\uDE04c",
];

for (const str of strings) {
  console.log(str.toWellFormed());
}
// Logs:
// "ab�"
// "ab�c"
// "�ab"
// "c�ab"
// "abc"
// "ab😄c"
```

### 避免 encodeURI() 错误

如果传递的字符串格式不正确， {{jsxref("encodeURI")}} 会抛出错误。可以先通过使用 `toWellFormed()` 将字符串转换为格式正确的字符串来避免这种情况。

```js
const illFormed = "https://example.com/search?q=\uD800";

try {
  encodeURI(illFormed);
} catch (e) {
  console.log(e); // URIError: URI malformed
}

console.log(encodeURI(illFormed.toWellFormed())); // "https://example.com/search?q=%EF%BF%BD"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `String.prototype.toWellFormed` 的 polyfill](https://github.com/zloirock/core-js#well-formed-unicode-strings)
- {{jsxref("String.prototype.isWellFormed()")}}
- {{jsxref("String.prototype.normalize()")}}
