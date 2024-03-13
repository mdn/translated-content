---
title: String.prototype.startsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/startsWith
---

{{JSRef}}

{{jsxref("String")}} 的 **`startsWith()`** 方法用来判断当前字符串是否以另外一个给定的子字符串开头，并根据判断结果返回 `true` 或 `false`。

{{EmbedInteractiveExample("pages/js/string-startswith.html")}}

## 语法

```js-nolint
startsWith(searchString)
startsWith(searchString, position)
```

### 参数

- `searchString`
  - : 要在该字符串开头搜索的子串。不能是[正则表达式](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#正则表达式的特殊处理)。所有不是正则表达式的值都会被[强制转换为字符串](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#字符串强制转换)，因此省略它或传递 `undefined` 将导致 `startsWith()` 搜索字符串 `"undefined"`，这应该不是你想要的结果。
- `position` {{optional_inline}}
  - : `searchString` 期望被找到的起始位置（即 `searchString` 的第一个字符的索引）。默认为 `0`。

### 返回值

如果给定的字符在字符串的开头被找到（包括当 `searchString` 是空字符串时），则返回 **`true`**；否则返回 **`false`**。

### 异常

- {{jsxref("TypeError")}}
  - : 如果 `searchString` 是[正则表达式](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#正则表达式的特殊处理)，则抛出该异常。

## 描述

这个方法能够让你确定一个字符串是否以另一个字符串开头。这个方法区分大小写。

## 示例

### 使用 startsWith()

```js
const str = "To be, or not to be, that is the question.";

console.log(str.startsWith("To be")); // true
console.log(str.startsWith("not to be")); // false
console.log(str.startsWith("not to be", 10)); // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `String.prototype.startsWith` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.endsWith()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
