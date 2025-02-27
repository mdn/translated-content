---
title: ArrayBuffer[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/Symbol.species
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

**`ArrayBuffer[Symbol.species]`** 静态访问器属性返回用于构造数组缓冲区方法返回值的构造函数。

> **警告：** `[Symbol.species]` 的存在允许任意代码执行，并可能产生安全漏洞。这也使某些优化变得更加困难。引擎实现者正在[调查是否删除此特性](https://github.com/tc39/proposal-rm-builtin-subclassing)。如果可能的话，请避免依赖它。

## 语法

```js-nolint
ArrayBuffer[Symbol.species]
```

### 返回值

调用 `get [Symbol.species]` 的构造函数（`this`）的值。该返回值被用于构造创建新的数组缓冲区的数组缓冲区方法的返回值。

## 描述

`[Symbol.species]` 访问器属性返回 `ArrayBuffer` 对象的默认构造函数。子类构造函数可以重写它来更改构造函数赋值。基本的默认实现是：

```js
// 用于说明的假设基础实现
class ArrayBuffer {
  static get [Symbol.species]() {
    return this;
  }
}
```

由于这种多态实现，派生子类的 `@species` 也将默认返回构造函数本身。

```js
class SubArrayBuffer extends ArrayBuffer {}
SubArrayBuffer[Symbol.species] === SubArrayBuffer; // true
```

当调用不会修改现有对象，而是返回一个新的数组缓冲区实例数组缓冲区方法（例如，[`slice()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice)）时，对象的 `constructor[Symbol.species]` 将被访问。返回的构造函数将用于构造该数组缓冲区方法的返回值。

## 示例

### 普通对象中的 species

`[Symbol.species]` 属性返回默认构造函数，即 `ArrayBuffer` 构造函数。

```js
ArrayBuffer[Symbol.species]; // function ArrayBuffer()
```

### 派生对象中的 species

在一个自定义的 `ArrayBuffer` 子类实例中，例如 `MyArrayBuffer`，`MyArrayBuffer` 的 `species` 是 `MyArrayBuffer` 构造函数。但是，你可能希望重写它，以便在派生类方法中返回父类 `ArrayBuffer` 对象：

```js
class MyArrayBuffer extends ArrayBuffer {
  // 重写 MyArrayBuffer species 来返回父类 ArrayBuffer 构造函数
  static get [Symbol.species]() {
    return ArrayBuffer;
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("ArrayBuffer")}}
- {{jsxref("Symbol.species")}}
