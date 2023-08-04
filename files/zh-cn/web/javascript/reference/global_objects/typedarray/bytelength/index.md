---
title: TypedArray.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/byteLength
---

{{JSRef}}

**`byteLength`** 访问器属性表示类型化数组的长度（字节数）。

## 语法

```plain
typedarray.byteLength
```

## 描述

`byteLength` 是一个访问器属性，它的 set 访问器函数是 `undefined`，意思是你只能够读取这个属性。它的值在 _TypedArray_ 构造时建立，不能被修改。如果 _TypedArray_ 没有指定 `byteOffset` 或者 `length`，会返回所引用的 `ArrayBuffer` 的 `length`。_TypedArray_ 是这里的 [TypedArray 对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects)之一。

## 示例

### 使用 `byteLength` 属性

```js
var buffer = new ArrayBuffer(8);

var uint8 = new Uint8Array(buffer);
uint8.byteLength; // 8 (符合 buffer 的 byteLength)

var uint8 = new Uint8Array(buffer, 1, 5);
uint8.byteLength; // 5 (在 Uint8Array 构造时指定)

var uint8 = new Uint8Array(buffer, 2);
uint8.byteLength; // 6 (根据被构造的 Uint8Array 的 offset)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
