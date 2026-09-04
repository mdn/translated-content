---
title: Array[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/Array/Symbol.species
---

**`Array[Symbol.species]`** 静态访问器属性返回构造函数，构造函数用于构造数组方法返回值。

> [!WARNING]
> `[Symbol.species]` 的存在允许执行任意代码，这可能会产生安全漏洞。它还会使某些优化变得更加困难。引擎开发者正在[调查是否要移除此特性](https://github.com/tc39/proposal-rm-builtin-subclassing)。如果可能，请避免依赖它。现代数组方法，如 {{jsxref("Array/toReversed", "toReversed()")}}，不使用 `[Symbol.species]` 且始终返回一个新的 `Array` 基类实例。

## 语法

```js-nolint
Array[Symbol.species]
```

### 返回值

`get [Symbol.species]` 被调用的构造函数（`this`）的值。该返回值用于构造创建新数组的数组方法的返回值。

## 描述

`[Symbol.species]` 访问器属性返回 `Array` 对象的默认构造函数。子类的构造函数可能会覆盖并改变构造函数的赋值。默认实现基本上是这样的：

```js
// 以下是一个用于说明的假设底层实现
class Array {
  static get [Symbol.species]() {
    return this;
  }
}
```

由于这种多态实现，派生子类的 `[Symbol.species]` 默认情况下也会返回构造函数本身。

```js
class SubArray extends Array {}
SubArray[Symbol.species] === SubArray; // true
```

调用不会改变现有数组但会返回新数组实例的数组方法时（例如 [`filter()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 和 [`map()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)），将访问数组的 `constructor[Symbol.species]`。返回的构造函数将用于构造数组方法的返回值。这使得在技术上使数组方法返回与数组无关的对象成为可能。

```js
class NotAnArray {
  constructor(length) {
    this.length = length;
  }
}

const arr = [0, 1, 2];
arr.constructor = { [Symbol.species]: NotAnArray };
arr.map((i) => i); // NotAnArray { '0': 0, '1': 1, '2': 2, length: 3 }
arr.filter((i) => i); // NotAnArray { '0': 1, '1': 2, length: 0 }
arr.concat([1, 2]); // NotAnArray { '0': 0, '1': 1, '2': 2, '3': 1, '4': 2, length: 5 }
```

## 示例

### 普通对象中的 species

`[Symbol.species]` 属性返回默认构造函数，对于 `Array` 来说，它就是 `Array` 构造函数。

```js
Array[Symbol.species]; // [Function: Array]
```

### 派生对象中的 species

在自定义 `Array` 子类的实例中（例如 `MyArray`），`MyArray` 的 species 是 `MyArray` 构造函数。不过，你可能想要重写这个方法，以便在派生类方法中返回父级 `Array` 对象：

```js
class MyArray extends Array {
  // 重写 MyArray 的 species 属性到父类 Array 的构造函数
  static get [Symbol.species]() {
    return Array;
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`Array[Symbol.species]` 的 Polyfill 和 `core-js` 中所有受影响的 `Array` 方法对 `Symbol.species` 的支持](https://github.com/zloirock/core-js#ecmascript-array)
- [索引集合](/zh-CN/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Symbol.species")}}
