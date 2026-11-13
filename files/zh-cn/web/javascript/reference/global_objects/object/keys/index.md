---
title: Object.keys()
slug: Web/JavaScript/Reference/Global_Objects/Object/keys
---

**`Object.keys()`** 静态方法返回一个由给定对象自身的可枚举的字符串键属性名组成的数组。

{{InteractiveExample("JavaScript Demo: Object.keys()")}}

```js interactive-example
const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.keys(object1));
// Expected output: Array ["a", "b", "c"]
```

## 语法

```js-nolint
Object.keys(obj)
```

### 参数

- `obj`
  - : 一个对象。

### 返回值

一个由给定对象自身可枚举的字符串键属性键组成的数组。

## 描述

`Object.keys()` 返回一个数组，其元素是字符串，对应于直接在对象上找到的可枚举的字符串键属性名。这与使用 {{jsxref("Statements/for...in", "for...in")}} 循环迭代相同，只是 `for...in` 循环还会枚举原型链中的属性。`Object.keys()` 返回的数组顺序和与 {{jsxref("Statements/for...in", "for...in")}} 循环提供的顺序相同。

如果你需要属性的值，请使用 {{jsxref("Object.values()")}}。如果你同时需要属性的键和值，请使用 {{jsxref("Object.entries()")}}。

## 示例

### 使用 Object.keys()

```js
// 简单数组
const arr = ["a", "b", "c"];
console.log(Object.keys(arr)); // ['0', '1', '2']

// 类数组对象
const obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.keys(obj)); // ['0', '1', '2']

// 键的顺序随机的类数组对象
const anObj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.keys(anObj)); // ['2', '7', '100']

// getFoo 是一个不可枚举的属性
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
    },
  },
);
myObj.foo = 1;
console.log(Object.keys(myObj)); // ['foo']
```

如果你想要*所有*以字符串为键的自有属性，包括不可枚举的属性，参见 {{jsxref("Object.getOwnPropertyNames()")}}。

### 在基本类型中使用 Object.keys()

非对象参数会[强制转换为对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object#对象强制转换)。[`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined) 和 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null) 不能被强制转换为对象，会立即抛出 {{jsxref("TypeError")}}。只有字符串可以有自己的可枚举属性，而其他所有基本类型都返回一个空数组。

```js
// 字符串具有索引作为可枚举的自有属性
console.log(Object.keys("foo")); // ['0', '1', '2']

// 其他基本类型（除了 undefined 和 null）没有自有属性
console.log(Object.keys(100)); // []
```

> [!NOTE]
> 在 ES5 中，将一个非对象传递给 `Object.keys()` 会抛出一个 {{jsxref("TypeError")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Object.keys` 的 Polyfill](https://github.com/zloirock/core-js#ecmascript-object)
- [属性的可枚举性和所有权](/zh-CN/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.entries()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Map.prototype.keys()")}}
