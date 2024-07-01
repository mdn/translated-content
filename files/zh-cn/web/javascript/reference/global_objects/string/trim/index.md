---
title: String.prototype.trim()
slug: Web/JavaScript/Reference/Global_Objects/String/trim
---

{{JSRef}}

{{jsxref("String")}} 的 **`trim()`** 方法会从字符串的两端移除空白字符，并返回一个新的字符串，而不会修改原始字符串。

要返回一个仅从一端修剪空白字符的新字符串，请使用 {{jsxref("String.prototype.trimStart()", "trimStart()")}} 或 {{jsxref("String.prototype.trimEnd()", "trimEnd()")}}。

{{EmbedInteractiveExample("pages/js/string-trim.html")}}

## 语法

```js-nolint
trim()
```

### 返回值

一个新的字符串，表示从 `str` 的开头和结尾去除空白字符后的结果。空白字符定义为[空白符](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#空白符)加上[行终止符](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#行终止符)。

如果 `str` 的开头和结尾都没有空白字符，仍然会返回一个新的字符串（实际上是 `str` 的副本）。

## 示例

### 使用 trim()

下面的示例从 `str` 的两端去除空白字符：

```js
const str = "   foo  ";
console.log(str.trim()); // 'foo'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("String.prototype.trimStart()")}}
- {{jsxref("String.prototype.trimEnd()")}}
