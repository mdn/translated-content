---
title: String.prototype.trim()
slug: Web/JavaScript/Reference/Global_Objects/String/Trim
---

{{JSRef}}

**`trim()`** 方法从字符串的两端清除空格，返回一个新的字符串，而不修改原始字符串。此上下文中的空格是指所有的空白字符（空格、tab、不换行空格等）以及所有行终止符字符（如 LF、CR 等）。

{{EmbedInteractiveExample("pages/js/string-trim.html")}}

## 语法

```js-nolint
trim()
```

### 返回值

一个表示 `str` 去掉了开头和结尾的空白字符后的新字符串。

如果 `str` 的开头和结尾都没有空白字符，仍然会返回一个新字符串（本质上是 `str` 的副本），而不会抛出异常。

要返回一个只从一端删除空白字符的新字符串，可以使用 {{jsxref("String.prototype.trimStart()", "trimStart()")}} 或 {{jsxref("String.prototype.trimEnd()", "trimEnd()")}}。

## 示例

### 使用 `trim()`

下面的例子显示小写字符串 `'foo'`：

```js
const orig = "   foo  ";
console.log(orig.trim()); // 'foo'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("String.prototype.trimStart()")}}
- {{jsxref("String.prototype.trimEnd()")}}
