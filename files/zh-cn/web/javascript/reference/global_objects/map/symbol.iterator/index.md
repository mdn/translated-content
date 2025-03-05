---
title: Map.prototype[Symbol.iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator
---

{{JSRef}}

{{jsxref("Map")}} 实例的 **`[Symbol.iterator]()`** 方法实现了[可迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)以允许 `Map` 对象被大多数语法所接受，例如[展开语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)和 {{jsxref("Statements/for...of", "for...of")}} 循环。它返回一个 [map 迭代器对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)，此对象会以插入顺序生成 map 的键值对。

该属性的初始值与 {{jsxref("Map.prototype.entries")}} 属性的初始值是同一个函数对象。

{{InteractiveExample("JavaScript Demo: Map.prototype[Symbol.iterator]()")}}

```js interactive-example
const map1 = new Map();

map1.set("0", "foo");
map1.set(1, "bar");

const iterator1 = map1[Symbol.iterator]();

for (const item of iterator1) {
  console.log(item);
}
// Expected output: Array ["0", "foo"]
// Expected output: Array [1, "bar"]
```

## 语法

```js-nolint
map[Symbol.iterator]()
```

### 参数

无。

### 返回值

与 {{jsxref("Map.prototype.entries()")}} 返回值相同：一个新的[迭代器对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)，它会以插入顺序生成 map 的键值对。

## 示例

### 使用 for...of 循环进行迭代

请注意，通常你不需要直接调用此方法。`[Symbol.iterator]()` 方法的存在使得 `Map` 对象[可迭代](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)，而像 `for...of` 循环这样的迭代语法会自动调用此方法以获取用于循环的迭代器。

```js
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

for (const entry of myMap) {
  console.log(entry);
}
// ["0", "foo"]
// [1, "bar"]
// [{}, "baz"]

for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}
// 0: foo
// 1: bar
// [Object]: baz
```

### 手动控制迭代器

你仍然可以手动调用返回的迭代器对象的 `next()` 方法来获得最大程度的控制权。

```js
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap[Symbol.iterator]();

console.log(mapIter.next().value); // ["0", "foo"]
console.log(mapIter.next().value); // [1, "bar"]
console.log(mapIter.next().value); // [Object, "baz"]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
- {{jsxref("Symbol.iterator")}}
- [迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)
