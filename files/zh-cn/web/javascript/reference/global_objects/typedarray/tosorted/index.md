---
title: TypedArray.prototype.toSorted()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toSorted
l10n:
  sourceCommit: e46c58e6ed948e8c35c206762eb14a2e68616ed1
---

{{JSRef}}

{{jsxref("TypedArray")}} 实例的 **`toSorted()`** 方法是 {{jsxref("TypedArray/sort", "sort()")}} 方法的[拷贝](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#复制方法和修改方法)版本。它返回一个按升序排列元素的新类型化数组。此方法与 {{jsxref("Array.prototype.toSorted()")}} 使用相同的算法，不同之处在于它默认按数值排序，而不是按字符串排序。

## 语法

```js-nolint
toSorted()
toSorted(compareFn)
```

### 参数

- `compareFn` {{optional_inline}}

  - : 一个确定元素顺序的函数。如果忽略，该类型化数组的元素将按照数值大小进行排序。更多信息请参阅 {{jsxref("TypedArray/sort", "sort()")}}。

### 返回值

一个按升序排列元素的新类型化数组。

## 描述

详情请参见 {{jsxref("Array.prototype.toSorted()")}}。该方法不是通用的，只能在类型化数组实例上调用。

## 示例

### 数组排序

更多示例，请参阅 {{jsxref("Array.prototype.sort()")}} 方法。

```js
const numbers = new Uint8Array([40, 1, 5, 200]);
const numberSorted = numbers.toSorted();
console.log(numberSorted); // Uint8Array [ 1, 5, 40, 200 ]
// 与普通数组不同，排序数字时不需要提供比较函数。
console.log(numbers); // Uint8Array [ 40, 1, 5, 200 ]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `TypedArray.prototype.toSorted` 的 Polyfill](https://github.com/zloirock/core-js#change-array-by-copy)
- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)指南
- {{jsxref("TypedArray.prototype.sort()")}}
- {{jsxref("TypedArray.prototype.toReversed()")}}
- {{jsxref("TypedArray.prototype.with()")}}
- {{jsxref("Array.prototype.toSorted()")}}
