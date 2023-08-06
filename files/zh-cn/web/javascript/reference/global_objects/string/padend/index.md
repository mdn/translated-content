---
title: String.prototype.padEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/padEnd
---

{{JSRef}}

**`padEnd()`** 方法会将当前字符串从末尾开始填充给定的字符串（如果需要会重复填充），直到达到给定的长度。填充是从当前字符串的末尾开始的。

{{EmbedInteractiveExample("pages/js/string-padend.html")}}

## 语法

```js-nolint
padEnd(targetLength)
padEnd(targetLength, padString)
```

### 参数

- `targetLength`
  - : 当前 `str` 填充后的长度。如果该值小于或等于 `str.length`，则会直接返回当前 `str`。
- `padString` {{optional_inline}}
  - : 用于填充当前 `str` 的字符串。如果 `padString` 太长，无法适应 `targetLength`，则会被截断：对于从左到右的语言，左侧的部分将会被保留；对于从右到左的语言，右侧的部分将会被保留。默认值为“ ” (`U+0020`)。

### 返回值

在当前 `str` 末尾填充 `padString` 直到达到给定的 `targetLength` 所形成的 {{jsxref("String")}}。

## 示例

### 使用 padEnd

```js
"abc".padEnd(10); // "abc       "
"abc".padEnd(10, "foo"); // "abcfoofoof"
"abc".padEnd(6, "123456"); // "abc123"
"abc".padEnd(1); // "abc"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `String.prototype.padEnd` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.padStart()")}}
