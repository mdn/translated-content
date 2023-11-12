---
title: TypedArray.prototype.fill()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/fill
---

{{JSRef}}

`fill() 方法将`类型化数组中的从起始索引到终止索引内的全部元素。这个方法的算法和 {{jsxref("Array.prototype.fill()")}} 相同。_TypedArray_ 是这里的[类型化数组类型](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects)之一。

## 语法

```js-nolint
fill(value)
fill(value, start)
fill(value, start, end)
```

### 参数

- `value`
  - : 用来填充类型化数组元素的值。
- `start`
  - : 可选参数。起始索引，默认值为 0。
- `end`
  - : 可选参数。终止索引（填充范围不包含此索引），默认值为 `this.length`。

### 返回值

修改后的类型化数组。

## 描述

将被元素填充的区间是 \[`start`, `end`)。

**`fill`** 方法接受三个参数 `value`，`start` 以及 `end`。`start` 和 `end` 参数是可选的，默认值分别为 `0` 和 `this.length`。

如果 `start` 参数是负值，它会被视为 `length+start`，其中 `length` 是类型化数组的长度。如果 `end` 参数是负值，它会被视为 `length+end`。

## 示例

```js
new Uint8Array([1, 2, 3]).fill(4); // Uint8Array [4, 4, 4]
new Uint8Array([1, 2, 3]).fill(4, 1); // Uint8Array [1, 4, 4]
new Uint8Array([1, 2, 3]).fill(4, 1, 2); // Uint8Array [1, 4, 3]
new Uint8Array([1, 2, 3]).fill(4, 1, 1); // Uint8Array [1, 2, 3]
new Uint8Array([1, 2, 3]).fill(4, -3, -2); // Uint8Array [4, 2, 3]
```

## 兼容实现

由于并没有一个名为 _TypedArray_ 的全局变量，我们必须“按需添加”兼容实现。请配合{{jsxref("Array.prototype.fill()")}}的兼容实现使用以下的“兼容实现”

```js
// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.fill
if (!Uint8Array.prototype.fill) {
  Uint8Array.prototype.fill = Array.prototype.fill;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关

- {{jsxref("Array.prototype.fill()")}}
