---
title: Iterator.from()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/from
l10n:
  sourceCommit: 088b56a895d22b6df854a9f26400af7d399f289f
---

{{JSRef}}{{SeeCompatTable}}

**`Iterator.from()`** 静态方法从迭代器或可迭代对象创建一个新的 {{jsxref("Iterator")}} 对象。

## 语法

```js-nolint
from(object)
```

### 参数

- `object`
  - : 一个实现了[可迭代](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#可迭代协议)协议或[迭代器](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#迭代器协议)协议的对象。

### 返回值

如果 `object` 是一个可迭代对象，则会调用其 `[Symbol.iterator]()` 以获取迭代器。否则，`object` 将被视为一个迭代器。如果该迭代器的 `{{jsxref("Operators/instanceof", "instanceof")}} {{jsxref("Iterator")}}` 结果为真（这意味着它在原型链中有 `Iterator.prototype`），则直接返回它。否则，创建一个包装了原始迭代器的新 {{jsxref("Iterator")}} 对象。

## 描述

这个方法的存在是为了将自定义迭代器（可能是由库导出的）转换为[恰当的迭代器](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator#恰当的迭代器)。所有由 `Iterator.from()` 返回的迭代器对象都继承自一个公共原型对象，该对象具有以下方法：

- `next()`
  - : 调用底层迭代器的 `next()` 方法并返回结果。
- `return()`
  - : 调用底层迭代器的 `return()` 方法并返回结果，如果底层迭代器没有 `return()` 方法，则返回 `{ value: undefined, done: true }`。

## 示例

### 将可迭代对象转换为恰当的迭代器

因为 `obj` 已经是一个可迭代对象，并且其 `[Symbol.iterator]()` 方法返回了一个恰当的迭代器，所以 `Iterator.from(obj)` 返回的迭代器与 `obj` 相同。

```js
const iterator = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();

const obj = {
  [Symbol.iterator]() {
    return iterator;
  },
};

const iterator2 = Iterator.from(obj);
console.log(iterator2 === iterator); // true
```

因为 `obj2` 是一个可迭代对象，其 `[Symbol.iterator]()` 方法返回了一个非恰当的迭代器，所以 `Iterator.from(obj2)` 返回一个包装了原始迭代器的新迭代器。

```js
const iterator = {
  current: 0,
  next() {
    return { value: this.current++, done: false };
  },
};

const obj2 = {
  [Symbol.iterator]() {
    return iterator;
  },
};

const iterator2 = Iterator.from(obj2);
console.log(iterator2 === iterator); // false
console.log(iterator2.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
```

### 将迭代器转换为恰当的迭代器

因为 `obj` 已经是一个恰当的迭代器，所以 `Iterator.from(obj)` 返回它本身。

```js
const obj = (function* () {
  yield 1;
  yield 2;
  yield 3;
})();

const iterator = Iterator.from(obj);
console.log(iterator === obj); // true
```

因为 `obj2` 是一个非恰当的迭代器，所以 `Iterator.from(obj2)` 返回一个包装了原始迭代器的新迭代器。

```js
const obj2 = {
  current: 0,
  next() {
    return { value: this.current++, done: false };
  },
};

const iterator = Iterator.from(obj2);
console.log(iterator === obj2); // false
console.log(iterator.next()); // { value: 0, done: false }
console.log(obj2.next()); // { value: 1, done: false }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Iterator.from` 的 polyfill](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Array.from()")}}
