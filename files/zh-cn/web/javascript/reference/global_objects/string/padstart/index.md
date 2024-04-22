---
title: String.prototype.padStart()
slug: Web/JavaScript/Reference/Global_Objects/String/padStart
---

{{JSRef}}

**`padStart()`** 方法用另一个字符串填充当前字符串（如果需要会重复填充），直到达到给定的长度。填充是从当前字符串的开头开始的。

{{EmbedInteractiveExample("pages/js/string-padstart.html")}}

## 语法

```js-nolint
padStart(targetLength)
padStart(targetLength, padString)
```

### 参数

- `targetLength`
  - : 当前 `str` 填充后的长度。如果该值小于或等于 `str.length`，则会直接返回当前 `str`。
- `padString` {{optional_inline}}
  - : 用于填充当前 `str` 的字符串。如果 `padString` 太长，无法适应 `targetLength`，则会从末尾被截断。默认值为 Unicode“空格”字符（U+0020）。

### 返回值

在开头填充 `padString` 直到达到给定的 `targetLength` 所形成的 {{jsxref("String")}}。

## 示例

### 简单示例

```js
"abc".padStart(10); // "       abc"
"abc".padStart(10, "foo"); // "foofoofabc"
"abc".padStart(6, "123465"); // "123abc"
"abc".padStart(8, "0"); // "00000abc"
"abc".padStart(1); // "abc"
```

### 将数字转换为固定长度的字符串

```js
// JavaScript version of: (unsigned)
// printf "%0*d" width num
function leftFillNum(num, targetLength) {
  return num.toString().padStart(targetLength, "0");
}

const num = 123;
console.log(leftFillNum(num, 5)); // "00123"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `String.prototype.padStart` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.padEnd()")}}
