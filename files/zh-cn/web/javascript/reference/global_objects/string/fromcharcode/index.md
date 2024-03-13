---
title: String.fromCharCode()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCharCode
---

{{JSRef}}

**`String.fromCharCode()`** 静态方法返回由指定的 UTF-16 码元序列创建的字符串。

{{EmbedInteractiveExample("pages/js/string-fromcharcode.html","shorter")}}

## 语法

```js-nolint
String.fromCharCode(num1)
String.fromCharCode(num1, num2)
String.fromCharCode(num1, num2, /* …, */ numN)
```

### 参数

- `numN`
  - : 一个介于 `0` 和 `65535`（`0xFFFF`）之间的数字，表示一个 UTF-16 码元。大于 `0xFFFF` 的数字会被截断为最后的 16 位。不进行有效性检查。

### 返回值

一个长度为 `N` 的字符串，由 `N` 个指定的 UTF-16 码元组成。

## 描述

因为 `fromCharCode()` 是 `String` 的静态方法，所以始终使用 `String.fromCharCode()` 来调用它，而不是作为你创建的 `String` 值的方法。

Unicode 码位的范围是从 `0` 到 `1114111`（`0x10FFFF`）。`charCodeAt()` 总是返回一个小于 `65536` 的值，因为较高的码位由*一对* 16 位代理伪字符组成。因此，为了生成一个值大于 `65535` 的完整字符，需要提供两个码元（就好像操作一个包含两个字符的字符串）。有关 Unicode 的信息，请参阅 [UTF-16 字符、Unicode 码位和字素簇](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_字符、unicode_码位和字素簇)。

由于 `fromCharCode()` 仅适用于 16 位的值（与 `\u` 转义序列相同），因此需要使用代理对来返回补充字符。例如，`String.fromCharCode(0xd83c, 0xdf03)` 和 `"\ud83c\udf03"` 都返回码位 `U+1F303` "Night with Stars"。虽然补充码位值（例如 `0x1f303`）与表示它的两个代理值（例如 `0xd83c` 和 `0xdf03`）之间存在数学关系，但每次使用补充码位时都需要额外的步骤来计算或查找代理对值。出于这个原因，使用 {{jsxref("String.fromCodePoint()")}} 更方便，它可以根据实际的码位值返回补充字符。例如，`String.fromCodePoint(0x1f303)` 返回码位 `U+1F303` "Night with Stars"。

## 示例

### 使用 fromCharCode()

在 UTF-16 中，BMP 字符使用单个码元：

```js
String.fromCharCode(65, 66, 67); // 返回 "ABC"
String.fromCharCode(0x2014); // 返回 "—"
String.fromCharCode(0x12014); // 也返回 "—"；数字 1 被截断并忽略
String.fromCharCode(8212); // 也返回 "—"；8212 是 0x2014 的十进制表示
```

在 UTF-16 中，补充字符需要两个码元（即一个代理对）：

```js
String.fromCharCode(0xd83c, 0xdf03); // 码位 U+1F303 "Night with
String.fromCharCode(55356, 57091); // Stars" == "\uD83C\uDF03"

String.fromCharCode(0xd834, 0xdf06, 0x61, 0xd834, 0xdf07); // "\uD834\uDF06a\uD834\uDF07"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
