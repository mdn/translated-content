---
title: String.prototype.endsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/endsWith
---

{{JSRef}}

**`endsWith()`** 方法用于判断一个字符串是否以指定字符串结尾，如果是则返回 `true`，否则返回 `false`。

{{EmbedInteractiveExample("pages/js/string-endswith.html")}}

## 语法

```js-nolint
endsWith(searchString)
endsWith(searchString, endPosition)
```

### 参数

- `searchString`
  - : 要搜索的作为结尾的字符串，[不能是正则表达式](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#正则表达式的特殊处理)。所有非正则表达式的值都会被[强制转换为字符串](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#字符串强制转换)，因此如果该参数被省略或传入 `undefined`，`endsWith()` 方法会在字符串中搜索 `"undefined"`，这通常不是你想要的。
- `endPosition` {{optional_inline}}
  - : 预期找到 `searchString` 的末尾位置（即 `searchString` 最后一个字符的索引加 1）。默认为 `str.length`。

### 返回值

如果被检索字符串的末尾出现了指定的字符串（包括 `searchString` 为空字符串的情况），则返回 **`true`**；否则返回 **`false`**。

### 异常

- {{jsxref("TypeError")}}
  - : 如果 `searchString` [是一个正则表达式](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#正则表达式的特殊处理)，则会抛出。

## 描述

这个方法可以让你确定一个字符串是否以另一个字符串结尾。该方法区分大小写。

## 示例

### 使用 endsWith()

```js
const str = "生存还是毁灭，这是一个问题。";

console.log(str.endsWith("问题。")); // true
console.log(str.endsWith("毁灭")); // false
console.log(str.endsWith("毁灭", 6)); // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `String.prototype.endsWith` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.startsWith()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
