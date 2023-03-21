---
title: TypedArray.name
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/name
---

{{JSRef}}

`TypedArray.name` 属性是描述类型数组构造名的字符串值。

{{js_property_attributes(0,0,0)}}

## 语法

```plain
TypedArray.name;
```

## 描述

TypedArray ?对象中，每个元素所含的字节数都与其他元素不同，因此其字节数需要被描述。`name` 属性描述了数组所包含的数据类型。其命名的第一部分可以是 Int(整型)、Uint(无符整型) 或 Float(浮点)；?其第二部分是一个描述数组所包含位数的数字；最后一部分为对象属性 Array(ClampedArray 为特例)。更多信息参见{{jsxref("Uint8ClampedArray")}}。

## 示例

```js
Int8Array.name;         // "Int8Array"
Uint8Array.name;        // "Uint8Array"
Uint8ClampedArray.name; // "Uint8ClampedArray"
Int16Array.name;        // "Int16Array"
Uint16Array.name;       // "Uint16Array"
Int32Array.name;        // "Int32Array"
Uint32Array.name;       // "Uint32Array"
Float32Array.name;      // "Float32Array"
Float64Array.name;      // "Float64Array"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [JavaScript typed arrays](/zh-CN/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
