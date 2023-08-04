---
title: TypedArray.BYTES_PER_ELEMENT
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT
---

{{JSRef("Global_Objects", "TypedArray", "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array")}}

## 概要

**`TypedArray.BYTES_PER_ELEMENT`** 属性代表了强类型数组中每个元素所占用的字节数。

{{js_property_attributes(0,0,0)}}

## 语法

```plain
TypedArray.BYTES_PER_ELEMENT;
```

## 描述

强类型数组对象用来解释为单个元素的字节数是不一样的。常量 `BYTES_PER_ELEMENT` 表示了特定强类型数组中每个元素所占用的字节数。

## 示例

```js
Int8Array.BYTES_PER_ELEMENT; // 1
Uint8Array.BYTES_PER_ELEMENT; // 1
Uint8ClampedArray.BYTES_PER_ELEMENT; // 1
Int16Array.BYTES_PER_ELEMENT; // 2
Uint16Array.BYTES_PER_ELEMENT; // 2
Int32Array.BYTES_PER_ELEMENT; // 4
Uint32Array.BYTES_PER_ELEMENT; // 4
Float32Array.BYTES_PER_ELEMENT; // 4
Float64Array.BYTES_PER_ELEMENT; // 8
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [JavaScript 强类型数组](/zh-CN/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
