---
title: String.length
slug: Web/JavaScript/Reference/Global_Objects/String/length
---

{{JSRef("Global_Objects", "String")}}

## 概述

**length** 属性表示一个字符串的长度。

## 描述

该属性返回字符串中字符编码单元的数量。JavaScript 使用 [UTF-16](https://zh.wikipedia.org/wiki/UTF-16) 编码，该编码使用一个 16 比特的编码单元来表示大部分常见的字符，使用两个代码单元表示不常用的字符。因此 length 返回值可能与字符串中实际的字符数量不相同。

空字符串的 `length` 为 0。

静态属性 **String.length** 返回 1。

## 示例

```js
var x = "Mozilla";
var empty = "";

console.log("Mozilla is " + x.length + " code units long");
/* "Mozilla is 7 code units long" */

console.log("The empty string is has a length of " + empty.length);
/* "The empty string is has a length of 0" */
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [JavaScript String.length and Internationalizing Web Applications](http://developer.teradata.com/blog/jasonstrimpel/2011/11/javascript-string-length-and-internationalizing-web-applications)
