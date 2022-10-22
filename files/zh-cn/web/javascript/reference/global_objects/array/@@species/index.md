---
title: get Array[@@species]
slug: Web/JavaScript/Reference/Global_Objects/Array/@@species
---

{{JSRef}}

**`Array[@@species]`** 访问器属性返回 `Array` 的构造函数。

## 语法

```js
Array[Symbol.species]
```

### 返回值

{{jsxref("Array")}} 的构造函数。

## 描述

`species` 访问器属性返回 `Array` 对象的默认构造函数。子类的构造函数可能会覆盖并改变构造函数的赋值。

## 示例

`species` 属性返回默认构造函数，它用于 `Array` 对象的构造函数 `Array`:

```js
Array[Symbol.species]; // function Array()
```

在继承类的对象中（例如你自定义的数组 `MyArray`），`MyArray` 的 `species` 属性返回的是 `MyArray` 这个构造函数。然而你可能想要覆盖它，以便在你继承的对象 `MyArray` 中返回父类的构造函数 `Array` :

```js
class MyArray extends Array {
  // 重写 MyArray 的 species 属性到父类 Array 的构造函数
  static get [Symbol.species]() { return Array; }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Polyfill of `Array[Symbol.species]` and support of `Symbol.species` in all affected `Array` methods in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array")}}
- {{jsxref("Symbol.species")}}
