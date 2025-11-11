---
title: TypedArray[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.species
---

**`TypedArray[Symbol.species]`** 静态访问器属性返回用于构造类型化数组方法返回值的构造函数。

## 语法

```js-nolint
TypedArray[Symbol.species]
```

## 描述

`species` 访问器属性返回[类型化数组](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects)对象的构造函数。子类的构造函数可能会覆盖它来修改构造函数的赋值。

## 示例

`species` 属性返回默认的构造函数，对于给定的[类型化数组](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_对象)对象，它是类型化数组构造函数之一：

```js
Int8Array[Symbol.species]; // function Int8Array()
Uint8Array[Symbol.species]; // function Uint8Array()
Float32Array[Symbol.species]; // function Float32Array()
```

在派生的集合对象中（也就是你自己定义的类型化数组`MyTypedArray`），`MyTypedArray` 的 species 是 `MyTypedArray` 构造器。但是，你可能希望覆盖它，以便在你的派生类方法中返回[类型化数组](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_对象)的基类对象：

```js
class MyTypedArray extends Uint8Array {
  // 将 MyTypedArray species 覆盖为 Uint8Array 基类构造函数
  static get [Symbol.species]() {
    return Uint8Array;
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("TypedArray")}}
- {{jsxref("Symbol.species")}}
