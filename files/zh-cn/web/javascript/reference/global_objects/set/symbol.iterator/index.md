---
title: Set.prototype[Symbol.iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator
---

{{jsxref("Set")}} 实例的 **`[Symbol.iterator]()`** 方法实现了[可迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)以允许 `Set` 对象被大多数期望可迭代对象的语法所使用，例如[展开语法](/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)和 {{jsxref("Statements/for...of", "for...of")}} 循环。它返回一个[集合迭代器对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)，它会以插入顺序生成集合的值。

该属性的初始值与 {{jsxref("Set.prototype.values()")}} 属性的初始值是同一个函数对象。

{{InteractiveExample("JavaScript Demo: Set.prototype[Symbol.iterator]()")}}

```js interactive-example
const set1 = new Set();

set1.add(42);
set1.add("forty two");

const iterator1 = set1[Symbol.iterator]();

console.log(iterator1.next().value);
// Expected output: 42

console.log(iterator1.next().value);
// Expected output: "forty two"
```

## 语法

```js-nolint
set[Symbol.iterator]()
```

### 参数

无。

### 返回值

与 {{jsxref("Set.prototype.values()")}} 返回值相同：一个新的[可迭代迭代器对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator)，它会以插入顺序生成集合的值。

## 示例

### 使用 for...of 循环进行迭代

请注意，通常你不需要直接调用此方法。`[Symbol.iterator]()` 方法的存在使得 `Set` 对象[可迭代](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)，而像 `for...of` 循环这样的迭代语法会自动调用此方法以获取用于循环的迭代器。

```js
const mySet = new Set();
mySet.add("0");
mySet.add(1);
mySet.add({});

for (const v of mySet) {
  console.log(v);
}
```

### 手动控制迭代器

你仍然可以手动调用返回的迭代器对象的 `next()` 方法来获得最大程度的控制权。

```js
const mySet = new Set();
mySet.add("0");
mySet.add(1);
mySet.add({});

const setIter = mySet[Symbol.iterator]();

console.log(setIter.next().value); // "0"
console.log(setIter.next().value); // 1
console.log(setIter.next().value); // {}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Set")}}
- {{jsxref("Set.prototype.entries()")}}
- {{jsxref("Set.prototype.keys()")}}
- {{jsxref("Set.prototype.values()")}}
- {{jsxref("Symbol.iterator")}}
- [迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)
