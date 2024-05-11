---
title: TypedArray.prototype.sort()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/sort
---

{{JSRef}}

**`sort()`** 方法*原地*排序类型化数组的元素，并且返回类型化数组。这个方法的算法和{{jsxref("Array.prototype.sort()")}} 相同。_TypedArray_ 是这里的[类型化数组类型](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_对象) 之一。

## 语法

```js-nolint
sort()
sort(compareFn)
```

### 参数

- `compareFunction` {{optional_inline}}
  - : 指定定义排序顺序的函数

### 返回值

排序后的类型化数组。

## 示例

更多示例请参考 {{jsxref("Array.prototype.sort()")}} 方法。

```js
var numbers = new Uint8Array([40, 1, 5, 200]);
numbers.sort();
// Uint8Array [ 1, 5, 40, 200 ]
// 在这里，按数值排序数值时，
// 不需要比较函数。

var numbers = [40, 1, 5, 200];
numbers.sort();
// 将元素作为字符串来排序。
// [1, 200, 40, 5]

function compareNumbers(a, b) {
  return a - b;
}

numbers.sort(compareNumbers);
// [ 1, 5, 40, 200 ]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Array.prototype.sort()")}}
