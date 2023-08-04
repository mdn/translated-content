---
title: TypedArray.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf
---

{{JSRef}}

**`indexOf()`** 方法返回在类型数组中可以找到给定元素的第一个索引，如果不存在，则返回 -1。方法具有与 {{jsxref("Array.prototype.indexOf()")}} 相同的算法。TypedArray 是这里的[类型化数组类型](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects)之一。

## 语法

```js-nolint
indexOf(searchElement)
indexOf(searchElement, fromIndex)
```

### 参数

- `searchElement`
  - : 需要在类型化数组中定位的元素
- `fromIndex`
  - : 搜索的起始下标。如果下标大于等于类型化数组长度，则返回 -1，意思是类型化数组不会被搜索。如果提供的下标值是负数，则被当做距离类型化数组尾部的偏移。注：如果提供的下标是负数，类型化数组仍然从前到后搜索。如果计算出来的下标小于 0，则会搜索整个类型化数组。默认为 0（搜索整个类型化数组）。

### 返回值

数组中元素的第一个下标；没有找到则返回**-1** 。

## 描述

`indexOf`使用[严格相等](/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Using_the_Equality_Operators) （由 === 或三等号运算符使用的相同方法）比较`searchElement`和类型化数组的元素。

## 示例

```js
let uint8 = new Uint8Array([2, 5, 9]);
uint8.indexOf(2); // 0
uint8.indexOf(7); // -1
uint8.indexOf(9, 2); // 2
uint8.indexOf(2, -1); // -1
uint8.indexOf(2, -3); // 0
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
- {{jsxref("Array.prototype.indexOf()")}}
