---
title: String.fromCodePoint()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
---

{{JSRef}}

**`String.fromCodePoint()`** 静态方法将根据指定的码位序列返回一个字符串。

{{EmbedInteractiveExample("pages/js/string-fromcodepoint.html","shorter")}}

## 语法

```js-nolint
String.fromCodePoint(num1)
String.fromCodePoint(num1, num2)
String.fromCodePoint(num1, num2, /* …, */ numN)
```

### 参数

- `numN`
  - : 一个介于 `0` 和 `0x10FFFF`（包括两者）之间的整数，表示一个 Unicode 码位。

### 返回值

通过使用指定的码位序列创建的字符串。

### 异常

- {{jsxref("RangeError")}}
  - : 如果 `numN` 不是整数、小于 `0` 或者在转换为数字后大于 `0x10FFFF`，则会抛出该异常。

## 说明

`fromCodePoint()` 是 `String` 的静态方法，因此始终使用 `String.fromCodePoint()` 调用它，而不是作为你创建的 `String` 值的方法。

Unicode 码位范围从 `0` 到 `1114111`（`0x10FFFF`）。在 UTF-16 中，每个字符串索引是一个取值范围为 `0` 到 `65535` 的码元。较高的码位由一对 16 位代理伪字符表示。因此，`fromCodePoint()` 可能返回一个字符串，其在 UTF-16 码元中的 [`length`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/length) 大于传递的参数个数。有关 Unicode 的更多信息，请参阅 [UTF-16 字符、Unicode 码位和字素簇](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_字符、unicode_码位和字素簇)。

## 示例

### 使用 fromCodePoint()

有效输入：

```js
String.fromCodePoint(42); // "*"
String.fromCodePoint(65, 90); // "AZ"
String.fromCodePoint(0x404); // "\u0404" === "Є"
String.fromCodePoint(0x2f804); // "\uD87E\uDC04"
String.fromCodePoint(194564); // "\uD87E\uDC04"
String.fromCodePoint(0x1d306, 0x61, 0x1d307); // "\uD834\uDF06a\uD834\uDF07"
```

无效输入：

```js
String.fromCodePoint("_"); // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1); // RangeError
String.fromCodePoint(3.14); // RangeError
String.fromCodePoint(3e-2); // RangeError
String.fromCodePoint(NaN); // RangeError
```

### 与 fromCharCode() 的比较

`String.fromCharCode()` 方法无法通过指定其码位来返回补充字符（即码位 `0x010000` 至 `0x10FFFF`）。相反，它需要使用 UTF-16 代理对来返回补充字符：

```js
String.fromCharCode(0xd83c, 0xdf03); // 码位 U+1F303（夜晚与星星）=== "\uD83C\uDF03"
String.fromCharCode(55356, 57091);
```

另一方面，`String.fromCodePoint()` 可以通过指定其码位（相当于 UTF-32 码元）返回 4 个字节的补充字符，以及更常见的 2 个字节的 BMP 字符：

```js
String.fromCodePoint(0x1f303); // 或十进制数 127747
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `String.fromCodePoint` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
