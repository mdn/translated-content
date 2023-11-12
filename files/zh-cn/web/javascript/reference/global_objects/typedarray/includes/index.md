---
title: TypedArray.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/includes
---

{{JSRef}}

**`includes()`** 方法判断类型化数组中是否含有特定元素，并相应返回 `true` 或者 `false`，这个方法的算法和 {{jsxref("Array.prototype.includes()")}} 相同。_TypedArray_ 是这里的[类型化数组类型](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_对象)之一。

## 语法

```js-nolint
includes(searchElement)
includes(searchElement, fromIndex)
```

### 参数

- `searchElement`
  - : 要搜索的元素。
- `fromIndex`
  - : 可选，数组中的位置，在这里开始搜索 `searchElement`；默认为 0。

### 返回值

{{jsxref("Boolean")}}。

## 示例

```js
var uint8 = new Uint8Array([1, 2, 3]);
uint8.includes(2); // true
uint8.includes(4); // false
uint8.includes(3, 3); // false

// NaN 的处理（仅仅对 Float32 和 Float64 为 true）
new Uint8Array([NaN]).includes(NaN); // false，因为 NaN 传递给构造器时转换为 0
new Float32Array([NaN]).includes(NaN); // true;
new Float64Array([NaN]).includes(NaN); // true;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
