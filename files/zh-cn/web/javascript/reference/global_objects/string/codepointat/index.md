---
title: String.prototype.codePointAt()
slug: Web/JavaScript/Reference/Global_Objects/String/codePointAt
---

{{JSRef}}

{{jsxref("String")}} 的 **`codePointAt()`** 方法返回一个非负整数，该整数是从给定索引开始的字符的 Unicode 码位值。请注意，索引仍然基于 UTF-16 码元，而不是 Unicode 码位。

{{InteractiveExample("shorter")}}

```js interactive-example
const icons = '☃★♲';

console.log(icons.codePointAt(1));
// Expected output: "9733"

```

## 语法

```js-nolint
codePointAt(index)
```

### 参数

- `index`
  - : 需要返回的字符的（从零开始的）索引。会被[转换为整数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#整数转换)——`undefined` 会转换为 0。

### 返回值

一个非负整数，表示给定 `index` 处字符的码位值。

- 如果 `index` 超出了 `0` – `str.length - 1` 的范围，`codePointAt()` 返回 {{jsxref("undefined")}}。
- 如果 `index` 处的元素是一个 UTF-16 前导代理（leading surrogate），则返回代理*对*的码位。
- 如果 `index` 处的元素是一个 UTF-16 后尾代理（trailing surrogate），则*只*返回后尾代理的码元。

## 描述

字符串中的字符从左到右进行索引。第一个字符的索引为 `0`，而字符串 `str` 中最后一个字符的索引为 `str.length - 1`。

Unicode 码位范围从 `0` 到 `1114111`（`0x10FFFF`）。在 UTF-16 中，每个字符串索引是一个取值范围为 `0` – `65535` 的码元。较高的码位由一个由*一对* 16 位代理伪字符表示。因此，`codePointAt()` 返回的码位可能跨越两个字符串索引。有关 Unicode 的信息，请参阅 [UTF-16 字符、Unicode 码位和字素簇](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_字符、unicode_码位和字素簇)。

## 示例

### 使用 codePointAt()

```js
"ABC".codePointAt(0); // 65
"ABC".codePointAt(0).toString(16); // 41

"😍".codePointAt(0); // 128525
"\ud83d\ude0d".codePointAt(0); // 128525
"\ud83d\ude0d".codePointAt(0).toString(16); // 1f60d

"😍".codePointAt(1); // 56845
"\ud83d\ude0d".codePointAt(1); // 56845
"\ud83d\ude0d".codePointAt(1).toString(16); // de0d

"ABC".codePointAt(42); // undefined
```

### 在循环中使用 codePointAt()

因为使用字符串索引进行循环会导致同一码位被访问两次（一次是前导代理，一次是后尾代理），而第二次调用 `codePointAt()` 时*只*返回后尾代理项，所以最好避免使用索引进行循环。

```js example-bad
const str = "\ud83d\udc0e\ud83d\udc71\u2764";

for (let i = 0; i < str.length; i++) {
  console.log(str.codePointAt(i).toString(16));
}
// '1f40e'、'dc0e'、'1f471'、'dc71'、'2764'
```

相反，可以使用 [`for...of`](/zh-CN/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_语句) 语句或[字符串展开语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)，这两种方法都会调用字符串的 [`[Symbol.iterator]()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)，从而按照码位进行迭代。然后，可以使用 `codePointAt(0)` 获取每个元素的码位值。

```js
for (const codePoint of str) {
  console.log(codePoint.codePointAt(0).toString(16));
}
// '1f40e'、'1f471'、'2764'

[...str].map((cp) => cp.codePointAt(0).toString(16));
// ['1f40e', '1f471', '2764']
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `String.prototype.codePointAt` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.charAt()")}}
