---
title: String.prototype.charAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charAt
---

{{JSRef}}

{{jsxref("String")}} 的 **`charAt()`** 方法返回一个由给定索引处的单个 UTF-16 码元构成的新字符串。

`charAt()` 方法总是将字符串作为 [UTF-16 码元](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_字符、unicode_码位和字素簇)序列进行索引，因此它可能会返回孤项代理。要获取给定索引处的完整 Unicode 码位，请使用 {{jsxref("String.prototype.codePointAt()")}} 和 {{jsxref("String.fromCodePoint()")}}。

{{EmbedInteractiveExample("pages/js/string-charat.html", "shorter")}}

## 语法

```js-nolint
charAt(index)
```

### 参数

- `index`
  - : 要返回的字符的索引，从零开始。会被[转换为整数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#整数转换)——`undefined` 会被转换为 0。

### 返回值

返回一个字符串，该字符串表示指定 `index` 处的字符（恰好是一个 UTF-16 码元）。如果 `index` 超出了 `0` – `str.length - 1` 的范围，`charAt()` 将返回一个空字符串。

## 描述

字符串中的字符从左到右进行索引。第一个字符的索引为 `0`，字符串中最后一个字符的索引为 `str.length - 1`。

Unicode 码位的范围从 `0` 到 `1114111` (`0x10FFFF`)。`charAt()` 方法总是返回一个其值小于 `65536` 的字符，因为更高的码位是由*一对* 16 位代理伪字符表示的。因此，为了获取值大于 `65535` 的完整字符，需要检索不仅是 `charAt(i)`，还要检索 `charAt(i + 1)`（就像操作一个由两个字符组成的字符串一样），或者使用 {{jsxref("String/codePointAt", "codePointAt(i)")}} 和 {{jsxref("String.fromCodePoint()")}} 代替。有关 Unicode 的信息，请参阅 [UTF-16 字符、Unicode 码位和字素簇](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_字符、unicode_码位和字素簇)。

`charAt()` 和使用[方括号表示法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors#方括号表示法)访问指定索引处的字符非常相似。它们的主要区别在于：

- `charAt()` 尝试将 `index` 转换为整数，而方括号表示法不会，直接使用 `index` 作为属性名。
- 如果 `index` 超出范围，`charAt()` 返回一个空字符串，而方括号表示法返回 `undefined`。

## 示例

### 使用 charAt()

下例输出字符串 `"Brave new world"` 不同位置处的字符：

```js
const anyString = "Brave new world";
console.log(`在索引 0 处的字符为 '${anyString.charAt()}'`);
// 没有提供索引，使用 0 作为默认值

console.log(`在索引 0 处的字符为 '${anyString.charAt(0)}'`);
console.log(`在索引 1 处的字符为 '${anyString.charAt(1)}'`);
console.log(`在索引 2 处的字符为 '${anyString.charAt(2)}'`);
console.log(`在索引 3 处的字符为 '${anyString.charAt(3)}'`);
console.log(`在索引 4 处的字符为 '${anyString.charAt(4)}'`);
console.log(`在索引 999 处的字符为 '${anyString.charAt(999)}'`);
```

上面代码的输出为：

```
在索引 0 处的字符为 'B'

在索引 0 处的字符为 'B'
在索引 1 处的字符为 'r'
在索引 2 处的字符为 'a'
在索引 3 处的字符为 'v'
在索引 4 处的字符为 'e'
在索引 999 处的字符为 ''
```

`charAt()` 可能会返回孤项代理，这些代理项不是有效的 Unicode 字符。

```js
const str = "𠮷𠮾";
console.log(str.charAt(0)); // "\ud842"，这不是有效的 Unicode 字符
console.log(str.charAt(1)); // "\udfb7"，这不是有效的 Unicode 字符
```

要获取给定索引处的完整 Unicode 码位，请使用按 Unicode 码位拆分的索引方法，例如 {{jsxref("String.prototype.codePointAt()")}} 和将字符串[展开为 Unicode 码位数组](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator)。

```js
const str = "𠮷𠮾";
console.log(String.fromCodePoint(str.codePointAt(0))); // "𠮷"
console.log([...str][0]); // "𠮷"
```

> **备注：** 避免使用 `charAt()` 重新实现上述解决方案。检测孤项代理及其配对很复杂，而内置 API 可能更高效，因为它们直接使用字符串的内部表示形式。如有必要，请安装上述 API 的 polyfill。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("String.fromCodePoint()")}}
- [JavaScript 有一个关于 Unicode 的问题——Mathias Bynens](https://mathiasbynens.be/notes/javascript-unicode)
