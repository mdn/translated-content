---
title: TypedArray.prototype.reverse()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/reverse
---

{{JSRef}}

**`reverse()`** 方法原地翻转类型化数组。类型化数组的第一个元素变为最后一个，最后一个变为第一个。这个方法的算法和 {{jsxref("Array.prototype.reverse()")}} 相同。_TypedArray_ 是这里的[类型化数组类型](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_对象)之一。

## 语法

```js-nolint
reverse()
```

### 返回值

翻转的数组。

## 示例

```js
var uint8 = new Uint8Array([1, 2, 3]);
uint8.reverse();

console.log(uint8); // Uint8Array [3, 2, 1]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Array.prototype.reverse()")}}
