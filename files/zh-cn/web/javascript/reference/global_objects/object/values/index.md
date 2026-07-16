---
title: Object.values()
slug: Web/JavaScript/Reference/Global_Objects/Object/values
---

**`Object.values()`** 静态方法返回一个给定对象的自有可枚举字符串键属性值组成的数组。

{{InteractiveExample("JavaScript Demo: Object.values()")}}

```js interactive-example
const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.values(object1));
// Expected output: Array ["somestring", 42, false]
```

## 语法

```js-nolint
Object.values(obj)
```

### 参数

- `obj`
  - : 一个对象。

### 返回值

一个包含了给定对象的自有可枚举字符串键属性值的数组。

## 描述

`Object.values()` 返回一个数组，其元素是直接在 `object` 上找到的可枚举字符串键属性值。这与使用 {{jsxref("Statements/for...in", "for...in")}} 循环迭代相同，只是 `for...in` 循环还枚举原型链中的属性。`Object.values()` 返回的数组顺序和 {{jsxref("Statements/for...in", "for...in")}} 循环提供的数组顺序相同。

如果需要属性键，请使用 {{jsxref("Object.keys()")}}。如果属性的键和值都需要，请使用 {{jsxref("Object.entries()")}}。

## 示例

### 使用 Object.values()

```js
const obj = { foo: "bar", baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// 类数组对象
const arrayLikeObj1 = { 0: "a", 1: "b", 2: "c" };
console.log(Object.values(arrayLikeObj1)); // ['a', 'b', 'c']

// 具有随机键排序的类数组对象
// 使用数字键时，将按键的数字顺序返回值
const arrayLikeObj2 = { 100: "a", 2: "b", 7: "c" };
console.log(Object.values(arrayLikeObj2)); // ['b', 'c', 'a']

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
myObj.foo = "bar";
console.log(Object.values(myObj)); // ['bar']
```

### 在基本类型中使用 Object.values()

非对象参数会[强制转换为对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object#对象强制转换)。[`undefined`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined) 和 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null) 不能被强制转换为对象，会立即抛出 {{jsxref("TypeError")}}。只有字符串可以有自己的可枚举属性，而其他所有基本类型都返回一个空数组。

```js
// 字符串具有索引作为可枚举的自有属性
console.log(Object.values("foo")); // ['f', 'o', 'o']

// 其他基本类型（除了 undefined 和 null）没有自有属性
console.log(Object.values(100)); // []
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Object.values` 的 Polyfill](https://github.com/zloirock/core-js#ecmascript-object)
- [属性的可枚举性和所有权](/zh-CN/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.entries()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Map.prototype.values()")}}
