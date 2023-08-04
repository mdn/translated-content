---
title: TypedArray.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf
---

{{JSRef}}

**`lastIndexOf()`** 方法返回在类型数组中可以找到给定元素的最后一个索引，如果不存在，则返回 -1。方法具有与 {{jsxref("Array.prototype.lastIndexOf()")}} 相同的算法。TypedArray 是这里的[类型化数组类型](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects)之一。

## 语法

```js-nolint
lastIndexOf(searchElement)
lastIndexOf(searchElement, fromIndex)
```

### 参数

- `searchElement`
  - : 需要在类型化数组中定位的元素
- `fromIndex`
  - : 可选。反向搜索的起始下标。默认为数组的长度，即会搜索整个类型化数组。如果下标大于等于类型化数组长度，会搜索整个类型化数组。如果是负数，则被当做距离类型化数组尾部的偏移。注：如果提供的下标是负数，类型化数组仍然从后到前搜索。如果计算出来的下标小于 0，则会返回 -1，即不会搜索类型化数组。

### 返回值

数组中元素的最后一个下标；没有找到则返回 **-1** 。

## 描述

`lastIndexOf`使用[严格相等](/zh-CN/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Using_the_Equality_Operators) （由 === 或三等号运算符使用的相同方法）比较`searchElement`和类型化数组的元素。

## 示例

```js
var uint8 = new Uint8Array([2, 5, 9, 2]);
uint8.lastIndexOf(2); // 3
uint8.lastIndexOf(7); // -1
uint8.lastIndexOf(2, 3); // 3
uint8.lastIndexOf(2, 2); // 0
uint8.lastIndexOf(2, -2); // 0
uint8.lastIndexOf(2, -1); // 3
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
