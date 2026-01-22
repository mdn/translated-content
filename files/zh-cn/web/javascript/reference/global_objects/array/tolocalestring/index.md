---
title: Array.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toLocaleString
---

**`toLocaleString()`** 方法返回一个字符串，表示数组中的所有元素。每个元素通过调用它们自己的 `toLocaleString` 方法转换为字符串，并且使用特定于语言环境的字符串（例如逗号“,”）分隔开。

{{InteractiveExample("JavaScript Demo: Array.toLocaleString()", "shorter")}}

```js interactive-example
const array1 = [1, "a", new Date("21 Dec 1997 14:12:00 UTC")];
const localeString = array1.toLocaleString("en", { timeZone: "UTC" });

console.log(localeString);
// Expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary
```

## 语法

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### 参数

- `locales` {{optional_inline}}
  - : 带有 BCP 47 语言标签的字符串，或者此类字符串的数组。对于 `locales` 参数的一般形式和说明，可以参见 [`Intl` 主页面的参数说明](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_参数)。
- `options` {{optional_inline}}
  - : 一个具有配置属性的对象。对于数字，请参见 {{jsxref("Number.prototype.toLocaleString()")}}；对于日期，请参见 {{jsxref("Date.prototype.toLocaleString()")}}。

### 返回值

一个字符串，表示数组中的所有元素。

## 描述

`Array.prototype.toLocaleString` 方法遍历数组内容，并使用提供的 `locales` 和 `options` 参数调用每个元素的 `toLocaleString` 方法，通过由实现定义的分隔符（例如逗号“,”）将转换后的字符串拼接起来。请注意，该方法本身不会使用这两个参数——它只是将其传递给每个元素的 `toLocaleString()`。分隔符的选择取决于主机当前的语言环境，而不是 `locales` 参数。

如果一个元素是 `undefined`、`null`，它会被转换为空字符串，而不是 `"null"` 或者 `"undefined"`。

当用于[稀疏数组](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections#稀疏数组)时，`toLocaleString()` 方法迭代时会把空槽当作 `undefined` 一样处理它。

`toLocaleString()` 方法是[通用的](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#通用数组方法)。它只期望 `this` 值具有 `length` 属性和整数键属性。

## 示例

### 使用 locales 和 options

数组元素通过使用它们的 `toLocaleString` 方法转换为字符串。

- `Object`：{{jsxref("Object.prototype.toLocaleString()")}}
- `Number`：{{jsxref("Number.prototype.toLocaleString()")}}
- `Date`：{{jsxref("Date.prototype.toLocaleString()")}}

始终显示 `prices` 数组中字符串和数字的货币符号：

```js
const prices = ["￥7", 500, 8123, 12];
prices.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });

// "￥7,￥500,￥8,123,￥12"
```

更多示例请参见 [`Intl.NumberFormat`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) 和 [`Intl.DateTimeFormat`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) 页面。

### 在稀疏数组中使用 toLocaleString()

`toLocaleString()` 将空槽视为 `undefined` ，并生成一个额外的分隔符：

```js
console.log([1, , 3].toLocaleString()); // '1,,3'
```

### 在非数组对象中使用 toLocaleString()

`toLocaleString()` 方法读取 `this` 的 `length` 属性，然后访问每个整数索引。

```js
const arrayLike = {
  length: 3,
  0: 1,
  1: 2,
  2: 3,
};
console.log(Array.prototype.toLocaleString.call(arrayLike));
// 1,2,3
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [索引集合](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("TypedArray.prototype.toLocaleString()")}}
- {{jsxref("Intl")}}
- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Object.prototype.toLocaleString()")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
