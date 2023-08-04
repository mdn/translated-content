---
title: get TypedArray[@@species]
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/@@species
---

{{JSRef}}

**`TypedArray[@@species]`** 访问器属性返回[类型化数组](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects)的构造器。

## 语法

```plain
TypedArray[Symbol.species]

其中 TypedArray 是下列类型之一：

Int8Array
Uint8Array
Uint8ClampedArray
Int16Array
Uint16Array
Int32Array
Uint32Array
Float32Array
Float64Array
```

## 描述

`species` 访问器属性返回[类型化数组](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects)对象的构造器。子类的构造器可能会覆盖它来修改构造器的赋值。

## 示例

`species` 属性返回默认的构造器函数，对于给定的[类型化数组](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects)对象，它是类型化数组构造器之一：

```js
Int8Array[Symbol.species]; // function Int8Array()
Uint8Array[Symbol.species]; // function Uint8Array()
Float32Array[Symbol.species]; // function Float32Array()
```

在派生的集合对象中（也就是你自己定义的类型化数组`MyTypedArray`）， `MyTypedArray` 的 species 是 `MyTypedArray` 构造器。但是，你可能希望覆盖它，以便在你的派生类方法中返回[类型化数组](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects)的基类对象：

```js
class MyTypedArray extends Uint8Array {
  // 将 MyTypedArray species 覆盖为 Uint8Array 基类构造器
  static get [Symbol.species]() {
    return Uint8Array;
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{jsxref("TypedArray")}}
- {{jsxref("Symbol.species")}}
