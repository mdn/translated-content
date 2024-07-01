---
title: String.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/String/at
---

{{JSRef}}

**`at()`** 方法接受一个整数值，并返回一个新的 {{jsxref('String')}}，该字符串由位于指定偏移量处的单个 UTF-16 码元组成。该方法允许正整数和负整数。负整数从字符串中的最后一个字符开始倒数。

{{EmbedInteractiveExample("pages/js/string-at.html")}}

## 语法

```js-nolint
at(index)
```

### 参数

- `index`
  - : 要返回的字符串字符的索引（位置）。当传递负数时，支持从字符串末端开始的相对索引；也就是说，如果使用负数，返回的字符将从字符串的末端开始倒数。

### 返回值

由位于指定位置的单个 UTF-16 码元组成的 {{jsxref('String')}}。如果找不到指定的索引，则返回 {{jsxref('undefined')}} 。

## 示例

### 返回字符串的最后一个字符

以下示例提供了一个函数，该函数返回指定字符串中的最后一个字符。

```js
// 返回给定字符串的最后一个字符的函数
function returnLast(arr) {
  return arr.at(-1);
}

let invoiceRef = "myinvoice01";

console.log(returnLast(invoiceRef));
// Logs: '1'

invoiceRef = "myinvoice02";

console.log(returnLast(invoiceRef));
// Logs: '2'
```

### 方法对比

下面我们通过比较不同的方法来实现选择 {{jsxref('String')}} 的倒数第二个字符。尽管以下所有方法都是有效的，但它们凸显了 `at()` 方法的简洁性和可读性。

```js
const myString = "Every green bus drives fast.";

// 使用 length 属性和 charAt() 方法
const lengthWay = myString.charAt(myString.length - 2);
console.log(lengthWay); // 't'

// 使用 slice() 方法
const sliceWay = myString.slice(-2, -1);
console.log(sliceWay); // 't'

// 使用 at() 方法
const atWay = myString.at(-2);
console.log(atWay); // 't'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中的 `String.prototype.at` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [at() 方法的 polyfill](https://github.com/tc39/proposal-relative-indexing-method#polyfill).
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
- {{jsxref("String.prototype.split()")}}
