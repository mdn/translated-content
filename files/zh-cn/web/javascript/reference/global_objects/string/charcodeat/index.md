---
title: String.prototype.charCodeAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charCodeAt
---

{{JSRef}}

{{jsxref("String")}} 的 **`charCodeAt()`** 方法返回一个整数，表示给定索引处的 UTF-16 码元，其值介于 `0` 和 `65535` 之间。

`charCodeAt()` 方法总是将字符串当作 [UTF-16 码元](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_字符、unicode_码位和字素簇)序列进行索引，因此它可能返回单独代理项（lone surrogate）。如果要获取给定索引处的完整 Unicode 码位，请使用 {{jsxref("String.prototype.codePointAt()")}} 方法。

{{EmbedInteractiveExample("pages/js/string-charcodeat.html", "shorter")}}

## 语法

```js-nolint
charCodeAt(index)
```

### 参数

- `index`
  - : 要返回的字符的索引，从零开始。将被[转换为整数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#整数转换)——`undefined` 被转换为 0。

### 返回值

一个整数，介于 `0` 和 `65535` 之间，表示指定 `index` 处字符的 UTF-16 码元值。如果 `index` 超出了 `0` 到 `str.length - 1` 的范围，则 `charCodeAt()` 返回 {{jsxref("NaN")}}。

## 描述

字符串中的字符从左到右进行索引。第一个字符的索引为 `0`，而在名为 `str` 的字符串中，最后一个字符的索引为 `str.length - 1`。

Unicode 码位的范围是 `0` 到 `1114111`（`0x10FFFF`）。`charCodeAt()` 方法始终返回一个小于 `65536` 的值，因为更高的码位由*一对* 16 位代理伪字符（surrogate pseudo-character）来表示。因此，为了获取值大于 `65535` 的完整字符，不仅需要检索 `charCodeAt(i)`，而且还要使用 `charCodeAt(i + 1)`（就像操作具有两个字符的字符串一样），或者使用 {{jsxref("String/codePointAt", "codePointAt(i)")}} 方法。有关 Unicode 的信息，请参见 [UTF-16 字符、Unicode 码位和字素簇](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_字符、unicode_码位和字素簇)。

## 示例

### 使用 charCodeAt()

以下示例返回 `65`，即 A 的 Unicode 值。

```js
"ABC".charCodeAt(0); // 返回 65
```

`charCodeAt()` 可能会返回单独代理项，它们不是有效的 Unicode 字符。

```js
const str = "𠮷𠮾";
console.log(str.charCodeAt(0)); // 55362 或 d842，不是有效的 Unicode 字符
console.log(str.charCodeAt(1)); // 57271 或 dfb7，不是有效的 Unicode 字符
```

要获取给定索引处的完整 Unicode 码位，请使用 {{jsxref("String.prototype.codePointAt()")}} 方法。

```js
const str = "𠮷𠮾";
console.log(str.codePointAt(0)); // 134071
```

> **备注：** 避免使用 `charCodeAt()` 来重新实现 `codePointAt()`。从 UTF-16 代理到 Unicode 码位的转换相当复杂，而且 `codePointAt()` 可能更加高效，因为它直接使用字符串的内部表示形式。如果需要，可以安装一个 `codePointAt()` 的 polyfill。

以下是将一对 UTF-16 码元转换为 Unicode 码位的可能算法，改编自 [Unicode 常问问题](https://unicode.org/faq/utf_bom.html#utf16-3)：

```js
// 常量
const LEAD_OFFSET = 0xd800 - (0x10000 >> 10);
const SURROGATE_OFFSET = 0x10000 - (0xd800 << 10) - 0xdc00;

function utf16ToUnicode(lead, trail) {
  return (lead << 10) + trail + SURROGATE_OFFSET;
}
function unicodeToUTF16(codePoint) {
  const lead = LEAD_OFFSET + (codePoint >> 10);
  const trail = 0xdc00 + (codePoint & 0x3ff);
  return [lead, trail];
}

const str = "𠮷";
console.log(utf16ToUnicode(str.charCodeAt(0), str.charCodeAt(1))); // 134071
console.log(str.codePointAt(0)); // 134071
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.prototype.codePointAt()")}}
