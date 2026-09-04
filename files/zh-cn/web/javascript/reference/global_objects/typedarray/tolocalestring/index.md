---
title: TypedArray.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toLocaleString
---

**`toLocaleString()`** 方法返回一个字符串，表示该类型化数组的元素。这些元素被转化为字符串并由一个区域设置指定的分隔符（例如逗号“,”）分隔。这个方法与 {{jsxref("Array.prototype.toLocaleString()")}} 拥有相同的算法。同时，由于类型化数组的元素都是数字，将每个元素转化为字符串的算法与 {{jsxref("Number.prototype.toLocaleString()")}} 是相同的。*类型化数组*需要是[类型化数组类型](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_对象)中的一种类型。

## 语法

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### 参数

`locales` 和 `options` 参数用于自定义函数的行为，并让应用程序指定应该使用的格式约定的语言。在忽略 `locales` 和 `options` 参数的实现中，使用的语言环境和返回的字符串形式完全取决于实现。

参见 {{jsxref("Intl/NumberFormat/NumberFormat", "Intl.NumberFormat()")}}
构造函数，以了解这些参数的详细信息，以及如何使用它们。

### 返回值

一个字符串，表示该类型化数组内的元素。

## 示例

### 使用 toLocaleString

```js
const uint = new Uint32Array([2000, 500, 8123, 12, 4212]);

uint.toLocaleString();
// 如果在 de-DE 区域设置下运行
// "2.000,500,8.123,12,4.212"

uint.toLocaleString("en-US");
// "2,000,500,8,123,12,4,212"

uint.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });
// "￥2,000,￥500,￥8,123,￥12,￥4,212"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Array.prototype.toLocaleString()")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
