---
title: TypedArray.prototype.buffer
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/buffer
---

{{JSRef}}

**`buffer`** 访问器属性表示由 _TypedArray_ 在构造期间引用的 {{jsxref("ArrayBuffer")}}。

## 语法

```plain
typedArray.buffer
```

## 描述

`buffer` 属性是一个访问器属性，它的 set 访问器函数是 `undefined`，意思是你只能够读取这个属性。它的值在 _TypedArray_ 构造时建立，不能被修改。_TypedArray_ 是这里的[类型化数组](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects)之一。

## 示例

### 使用 `buffer` 属性

```js
var buffer = new ArrayBuffer(8);
var uint16 = new Uint16Array(buffer);
uint16.buffer; // ArrayBuffer { byteLength: 8 }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
