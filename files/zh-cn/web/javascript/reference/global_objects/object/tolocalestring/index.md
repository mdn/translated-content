---
title: Object.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toLocaleString
---

**`toLocaleString()`** 方法返回一个表示对象的字符串。该方法旨在由派生对象重写，以达到其特定于语言环境的目的。

{{InteractiveExample("JavaScript Demo: Object.prototype.tolocalestring()")}}

```js interactive-example
const date1 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

console.log(date1.toLocaleString("ar-EG"));
// Expected output: "٢٠‏/١٢‏/٢٠١٢ ٤:٠٠:٠٠ ص"

const number1 = 123456.789;

console.log(number1.toLocaleString("de-DE"));
// Expected output: "123.456,789"
```

## 语法

```js-nolint
toLocaleString()
```

### 参数

没有参数。但是，重写此方法的所有对象最多只能接受两个参数，分别对应于 `locales` 和 `options`，例如 {{jsxref("Date.prototype.toLocaleString")}}。这些参数位置不应该用于任何其他目的。

### 返回值

调用 `this.toString()` 的返回值。

## 描述

所有继承 `Object.prototype`（也就是说，除了 [`null` 原型对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object#null_原型对象)）的对象都继承了 `toLocaleString()` 方法。{{jsxref("Object")}} 的 `toLocaleString` 返回调用 {{jsxref("Object/toString", "this.toString()")}} 的结果。

提供此方法是为了给对象一个通用的 `toLocaleString` 方法，即使不是所有对象都会使用它。在核心语言中，这些内置对象重写了 `toLocaleString` 以提供特定于语言环境的格式：

- {{jsxref("Array")}}：{{jsxref("Array.prototype.toLocaleString()")}}
- {{jsxref("Number")}}：{{jsxref("Number.prototype.toLocaleString()")}}
- {{jsxref("Date")}}：{{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("TypedArray")}}：{{jsxref("TypedArray.prototype.toLocaleString()")}}
- {{jsxref("BigInt")}}：{{jsxref("BigInt.prototype.toLocaleString()")}}

## 示例

### 使用基本的 toLocaleString() 方法

基本的 `toLocaleString()` 方法只是简单地调用 `toString()`。

```js
const obj = {
  toString() {
    return "My Object";
  },
};
console.log(obj.toLocaleString()); // "My Object"
```

### Array 重写的 toLocaleString()

{{jsxref("Array.prototype.toLocaleString()")}} 用于将数组值打印成字符串，通过调用每个元素的 `toLocaleString()` 方法，并使用特定于语言环境的分隔符拼接。例如：

```js
const testArray = [4, 7, 10];

const euroPrices = testArray.toLocaleString("fr", {
  style: "currency",
  currency: "EUR",
});
// "4,00 €,7,00 €,10,00 €"
```

### Date 重写的 toLocaleString()

{{jsxref("Date.prototype.toLocaleString()")}} 用于打印成更适合特定语言环境的日期显示。例如：

```js
const testDate = new Date();
// "Fri May 29 2020 18:04:24 GMT+0100 (British Summer Time)"

const deDate = testDate.toLocaleString("de");
// "29.5.2020, 18:04:24"

const frDate = testDate.toLocaleString("fr");
// "29/05/2020, 18:04:24"
```

### Number 重写的 toLocaleString()

{{jsxref("Number.prototype.toLocaleString()")}} 用于打印成更适合特定语言环境的数字显示，例如使用正确的分隔符。例如：

```js
const testNumber = 2901234564;
// "2901234564"

const deNumber = testNumber.toLocaleString("de");
// "2.901.234.564"

const frNumber = testNumber.toLocaleString("fr");
// "2 901 234 564"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Object.prototype.toString()")}}
