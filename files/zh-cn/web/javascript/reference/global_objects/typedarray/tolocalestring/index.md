---
title: TypedArray.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toLocaleString
---

{{JSRef}}

**`toLocaleString()`**方法返回一个字符串，表明该类型化数组的元素。这些元素被转化为字符串并由一个区域设置指定的分隔符（例如逗号“,”）分隔。这个方法与{{jsxref("Array.prototype.toLocaleString()")}}拥有相同的算法。同时，由于类型化数组的元素都是数，将每个元素转化为字符串的算法与{{jsxref("Number.prototype.toLocaleString()")}}是相同的。（类型化数组）的是[typed array types](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects)中的其中一个。

## 语法

```plain
typedarray.toLocaleString([locales [, options]]);
```

### 参数

{{page('/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat', 'Parameters')}}

### 返回值

一个字符串，表明该类型化数组内的元素。

## 例子

### 使用`toLocaleString`

```js
var uint = new Uint32Array([2000, 500, 8123, 12, 4212]);

uint.toLocaleString();
// 如果在 de-DE 区域设置下运行
// "2.000,500,8.123,12,4.212"

uint.toLocaleString('en-US');
// "2,000,500,8,123,12,4,212"

uint.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });
// "￥2,000,￥500,￥8,123,￥12,￥4,212"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Array.prototype.toLocaleString()")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
