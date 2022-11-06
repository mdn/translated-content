---
title: Object.fromEntries()
slug: Web/JavaScript/Reference/Global_Objects/Object/fromEntries
---

{{JSRef}}

**`Object.fromEntries()`** 方法把键值对列表转换为一个对象。

{{EmbedInteractiveExample("pages/js/object-fromentries.html")}}

## 语法

```plain
Object.fromEntries(iterable);
```

### 参数

- `iterable`
  - : 类似 {{jsxref("Array")}} 、 {{jsxref("Map")}} 或者其它实现了[可迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol)的可迭代对象。

### 返回值

一个由该迭代对象条目提供对应属性的新对象。

## 描述

`Object.fromEntries()` 方法接收一个键值对的列表参数，并返回一个带有这些键值对的新对象。这个迭代参数应该是一个能够实现`@@iterator`方法的的对象，返回一个迭代器对象。它生成一个具有两个元素的类数组的对象，第一个元素是将用作属性键的值，第二个元素是与该属性键关联的值。

`Object.fromEntries()` 执行与 {{jsxref("Object.entries")}} 互逆的操作。

## 示例

### `Map` 转化为 `Object`

通过 `Object.fromEntries`，可以将 {{jsxref("Map")}} 转换为 {{jsxref("Object")}}:

```js
const map = new Map([ ['foo', 'bar'], ['baz', 42] ]);
const obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }
```

### `Array` 转化为 `Object`

通过 `Object.fromEntries`，可以将 {{jsxref("Array")}} 转换为 {{jsxref("Object")}}:

```js
const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }
```

### 对象转换

`Object.fromEntries` 是与 {{jsxref("Object.entries()")}} 相反的方法，用 [数组处理函数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_2) 可以像下面这样转换对象：

```js
const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
  Object.entries(object1)
  .map(([ key, val ]) => [ key, val * 2 ])
);

console.log(object2);
// { a: 2, b: 4, c: 6 }
```

## 规范

{{Specifications}}

## 浏览器兼容

{{Compat}}

## 相关链接

- {{jsxref("Object.entries()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
