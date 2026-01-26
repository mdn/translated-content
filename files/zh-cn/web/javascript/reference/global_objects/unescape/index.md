---
title: unescape()
slug: Web/JavaScript/Reference/Global_Objects/unescape
l10n:
  sourceCommit: cb8b34d86ff9326a72c421dcf4430b450e6c8d5d
---

{{Deprecated_Header}}

> [!NOTE]
> `unescape()` 是由浏览器实现的非标准函数，其仅针对跨引擎兼容性而进行了标准化。并不要求所有的 JavaScript 引擎都实现它，并且可能无法在所有地方都正常工作。如果可能的话，请使用 {{jsxref("decodeURIComponent()")}} 或 {{jsxref("decodeURI()")}}。

**`unescape()`** 函数计算一个新的字符串，将其中的十六进制转义序列替换为它们所代表的字符。转义序列可能是由 {{jsxref("escape()")}} 等函数引入的。

## 语法

```js-nolint
unescape(str)
```

### 参数

- `str`
  - : 要解码的字符串。

### 返回值

一个其中的某些字符已被解码的新的字符串。

## 描述

`unescape` 函数是全局对象的函数属性。

`unescape()` 函数将任何转移序列替换为它所代表的字符。具体来说，它将任何形式为 `%XX` 或 `%uXXXX`（其中 `X` 代表一个十六进制数字）的转义序列替换为十六进制值为 `XX`/`XXXX` 的字符。如果转义序列无效（例如，如果 `%` 后面跟着一个或未跟十六进制数字），则保持不变。

> [!NOTE]
> 该函数主要用于 [URL 编码](https://zh.wikipedia.org/wiki/百分号编码)，其部分基于 {{rfc(1738)}} 中的转义格式。`unescape()` 函数*不会*对字符串字面量中的[转义序列](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#转义序列)进行求值。你可以将 `\xXX` 替换为 `%XX`，将 `\uXXXX` 替换为 `%uXXXX`，以获得一个可以被 `unescape()` 处理的字符串。

## 示例

### 使用 unescape()

```js
unescape("abc123"); // "abc123"
unescape("%E4%F6%FC"); // "äöü"
unescape("%u0107"); // "ć"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `unescape` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("decodeURI")}}
- {{jsxref("decodeURIComponent")}}
- {{jsxref("escape")}}
