---
title: Symbol.species
slug: Web/JavaScript/Reference/Global_Objects/Symbol/species
---

{{JSRef}}

知名的 **`Symbol.species`** 是个函数值属性，其被构造函数用以创建派生对象。

{{InteractiveExample("JavaScript Demo: Symbol.species")}}

```js interactive-example
class Array1 extends Array {
  static get [Symbol.species]() {
    return Array;
  }
}

const a = new Array1(1, 2, 3);
const mapped = a.map((x) => x * x);

console.log(mapped instanceof Array1);
// Expected output: false

console.log(mapped instanceof Array);
// Expected output: true
```

{{js_property_attributes(0,0,0)}}

## 描述

species 访问器属性允许子类覆盖对象的默认构造函数。

## 示例

你可能想在扩展数组类 `MyArray` 上返回 {{jsxref("Array")}} 对象。例如，当使用例如 {{jsxref("Array.map", "map()")}} 这样的方法返回默认的构造函数时，你希望这些方法能够返回父级的 Array 对象，以取代 `MyArray` 对象。`Symbol.species` 允许你这么做：

```js
class MyArray extends Array {
  // 覆盖 species 到父级的 Array 构造函数上
  static get [Symbol.species]() {
    return Array;
  }
}
var a = new MyArray(1, 2, 3);
var mapped = a.map((x) => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`Array[Symbol.species]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species)
- [`ArrayBuffer[Symbol.species]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/Symbol.species)
- [`Map[Symbol.species]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.species)
- [`Promise[Symbol.species]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species)
- [`RegExp[Symbol.species]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species)
- [`Set[Symbol.species]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.species)
- [`TypedArray[Symbol.species]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.species)
