---
title: Object.fromEntries()
slug: Web/JavaScript/Reference/Global_Objects/Object/fromEntries
---

**`Object.fromEntries()`** 静态方法将键值对列表转换为一个对象。

{{InteractiveExample("JavaScript Demo: Object.fromEntries()")}}

```js interactive-example
const entries = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// Expected output: Object { foo: "bar", baz: 42 }
```

## 语法

```js-nolint
Object.fromEntries(iterable)
```

### 参数

- `iterable`
  - : 一个包含对象列表的[可迭代](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)对象，例如 {{jsxref("Array")}} 或者 {{jsxref("Map")}}。每个对象都要有两个属性：
    - `0`
      - : 表示属性键的字符串或者 [Symbol](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)。
    - `1`
      - : 属性值。

    通常，该对象被实现为二元数组，第一个元素是属性键，第二个元素是属性值。

### 返回值

一个新对象，其属性由可迭代对象的条目给定。

## 描述

`Object.fromEntries()` 方法接收一个键值对列表，并返回一个新对象，该对象的属性由这些条目给定。`iterable` 参数应该是实现了 `[Symbol.iterator]()` 方法的可迭代对象。该方法返回一个可迭代对象，产生包含两个元素的类数组对象。第一个元素是将用作属性键的值，第二个元素是要与该属性键关联的值。

`Object.fromEntries()` 是 {{jsxref("Object.entries()")}} 的逆操作，只是 `Object.entries()` 只返回字符串键属性，而 `Object.fromEntries()` 还可以创建符号键属性。

> [!NOTE]
> 与 {{jsxref("Array.from()")}} 不同的是，`Object.fromEntries()` 不使用 `this` 的值，因此在另一个构造函数上调用它不会创建该类型的对象。

## 示例

### 将 Map 转换成对象

通过 `Object.fromEntries`，你可以将 {{jsxref("Map")}} 转换成 {{jsxref("Object")}}：

```js
const map = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);
const obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }
```

### 将 Array 转换成对象

通过 `Object.fromEntries`，你可以将 {{jsxref("Array")}} 转换成 {{jsxref("Object")}}：

```js
const arr = [
  ["0", "a"],
  ["1", "b"],
  ["2", "c"],
];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }
```

### 对象转换

通过 `Object.fromEntries`、其逆操作 {{jsxref("Object.entries()")}} 和[数组操作方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#实例方法)，你可以像这样转换对象：

```js
const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
  Object.entries(object1).map(([key, val]) => [key, val * 2]),
);

console.log(object2);
// { a: 2, b: 4, c: 6 }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Object.fromEntries` 的 Polyfill](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.entries()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
