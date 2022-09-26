---
title: TypedArray.prototype.byteOffset
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset
---

{{JSRef}}

**`byteOffset`** 访问器属性表示类型化数组距离其{{jsxref("ArrayBuffer")}}起始位置的偏移（字节数）。

## 语法

```plain
typedarray.byteOffset
```

## 描述

`byteOffset` 是一个访问器属性，它的 set 访问器函数是`undefined`，意思是你只能够读取这个属性。它的值在*TypedArray*构造时建立，不能被修改。_TypedArray_ 是这里的 [TypedArray 对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects)之一。

## 示例

### 使用`byteOffset` 属性

```js
var buffer = new ArrayBuffer(8);

var uint8 = new Uint8Array(buffer);
uint8.byteOffset; // 0 (没有指定 oddfet)

var uint8 = new Uint8Array(buffer, 3);
uint8.byteOffset; // 3 (在构造 Uint8Array 时指定)
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- [JavaScript 类型化数组](/zh-CN/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
