---
title: String.prototype.isWellFormed()
slug: Web/JavaScript/Reference/Global_Objects/String/isWellFormed
---

{{JSRef}}

{{jsxref("String")}} 值的 **`isWellFormed()`** 方法返回一个表示该字符串是否包含[单独代理项](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_字符、unicode_码位和字素簇)的布尔值。

## 语法

```js-nolint
isWellFormed()
```

### 返回值

如果字符串不包含单独代理项，返回 `true`，否则返回 `false`。

## 描述

JavaScript 中的字符串是 UTF-16 编码的。UTF-16 编码中有*代理对*的概念，这一概念在 [UTF-16 字符、Unicode 码位和字素簇](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_字符、unicode_码位和字素簇)部分有详细介绍。

`isWellFormed()` 让你能够测试一个字符串是否是格式正确的（即不包含单独代理项）。由于引擎能够直接访问字符串的内部表示，与自定义实现相比 `isWellFormed()` 更高效。如果你需要将字符串转换为格式正确的字符串，可以使用 {{jsxref("String/toWellFormed", "toWellFormed()")}} 方法。`isWellFormed()` 让你可以对格式正确和格式错误的字符串进行不同的处理，比如抛出一个错误或将其标记为无效。

## 示例

### 使用 isWellFormed()

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
  console.log(str.isWellFormed());
}
// 输出：
// false
// false
// false
// false
// true
// true
```

### 避免 encodeURI() 错误

如果传递的字符串格式不正确， {{jsxref("encodeURI")}} 会抛出错误。可以通过使用 `isWellFormed()` 在将字符串传递给 `encodeURI()` 之前测试字符串来避免这种情况。

```js
const illFormed = "https://example.com/search?q=\uD800";

try {
  encodeURI(illFormed);
} catch (e) {
  console.log(e); // URIError: URI malformed
}

if (illFormed.isWellFormed()) {
  console.log(encodeURI(illFormed));
} else {
  console.warn("Ill-formed strings encountered."); // Ill-formed strings encountered.
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `String.prototype.isWellFormed` 的 polyfill](https://github.com/zloirock/core-js#well-formed-unicode-strings)
- {{jsxref("String.prototype.toWellFormed()")}}
- {{jsxref("String.prototype.normalize()")}}
