---
title: TypedArray.prototype.with()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/with
l10n:
  sourceCommit: a815a95e4ab4adf391d8a7bc66a3abbce1a686d8
---

{{jsxref("TypedArray")}} 实例的 **`with()`** 方法是使用[方括号表示法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors#方括号表示法)修改指定索引值的[复制方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#复制方法和修改方法)版本。它会返回一个新的类型化数组，其指定索引处的元素值会被新值替换。该方法的算法与 {{jsxref("Array.prototype.with()")}} 相同。

## 语法

```js-nolint
arrayInstance.with(index, value)
```

### 参数

- `index`
  - : 要修改的数组索引（从 0 开始），[会被转换为整数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#整数转换)。
- `value`
  - : 要分配给指定索引的任何值。

### 返回值

一个新的类型化数组，其中位于 `index` 处的元素已被 `value` 替换。

### 异常

- {{jsxref("RangeError")}}
  - : `index >= array.length` 或 `index < -array.length` 时抛出。

## 描述

详情请参见 {{jsxref("Array.prototype.with()")}}。该方法不是通用的，只能在类型化数组实例上调用。

## 示例

### 使用 with()

```js
const arr = new Uint8Array([1, 2, 3, 4, 5]);
console.log(arr.with(2, 6)); // Uint8Array [1, 2, 6, 4, 5]
console.log(arr); // Uint8Array [1, 2, 3, 4, 5]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `TypedArray.prototype.with` 的 Polyfill](https://github.com/zloirock/core-js#change-array-by-copy)
- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Guide/Typed_arrays)指南
- {{jsxref("TypedArray.prototype.toReversed()")}}
- {{jsxref("TypedArray.prototype.toSorted()")}}
- {{jsxref("TypedArray.prototype.at()")}}
- {{jsxref("Array.prototype.with()")}}
