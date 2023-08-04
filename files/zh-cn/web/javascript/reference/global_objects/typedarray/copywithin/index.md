---
title: TypedArray.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin
---

{{JSRef}}

**`copyWithin()`** 方法将数组中元素的序列复制到以 `target` 起始的位置。拷贝的副本取自第二个参数（`start`）和第三个参数（`end`）的下标位置。`end` 参数是可选的，默认为数组长度。该方法与 {{jsxref("Array.prototype.copyWithin")}} 的算法相同。_TypedArray_ 指的是这里的 [类型化数组类型](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects) 之一。

## 语法

```plain
typedarray.copyWithin(target, start[, end = this.length])
```

### 参数

- `target`
  - : 目标起始位置的下标，复制元素到这里。
- `start`
  - : 源起始位置的下标，在这里开始复制元素。
- `end {{optional_inline}}`
  - : 可选。源终止位置的下标，在这里停止复制元素。

### 返回值

修改后的类型化数组。

## 描述

更多信息请见 {{jsxref("Array.prototype.copyWithin")}}。

这个方法取代了实验性的 {{jsxref("TypedArray.prototype.move()")}}。

## 示例

```js
var buffer = new ArrayBuffer(8);
var uint8 = new Uint8Array(buffer);
uint8.set([1, 2, 3]);
console.log(uint8); // Uint8Array [ 1, 2, 3, 0, 0, 0, 0, 0 ]
uint8.copyWithin(3, 0, 3);
console.log(uint8); // Uint8Array [ 1, 2, 3, 1, 2, 3, 0, 0 ]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{jsxref("TypedArray")}}
