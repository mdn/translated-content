---
title: yield*
slug: Web/JavaScript/Reference/Operators/yield*
---

{{jsSidebar("Operators")}}

**`yield*` 表达式**用于委托给另一个{{jsxref("Statements/function*", "generator")}} 或可迭代对象。

## 语法

```plain
 yield* [[expression]];
```

- `expression`
  - : 返回一个可迭代对象的表达式。

## 描述

`yield*` 表达式迭代操作数，并产生它返回的每个值。

`yield*` 表达式本身的值是当迭代器关闭时返回的值（即`done`为`true`时）。

## 示例

### 委托给其他生成器

以下代码中，`g1()` `yield` 出去的每个值都会在 `g2()` 的 `next()` 方法中返回，就像那些 `yield` 语句是写在 `g2()` 里一样。

```js
function* g1() {
  yield 2;
  yield 3;
  yield 4;
}

function* g2() {
  yield 1;
  yield* g1();
  yield 5;
}

var iterator = g2();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

### 委托给其他可迭代对象

除了生成器对象这一种可迭代对象，`yield*` 还可以 `yield` 其他任意的可迭代对象，比如说数组、字符串、`arguments` 对象等等。

```js
function* g3() {
  yield* [1, 2];
  yield* "34";
  yield* arguments;
}

var iterator = g3(5, 6);

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: "3", done: false }
console.log(iterator.next()); // { value: "4", done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: 6, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

### `yield*` 表达式的值

`yield*` 是一个表达式，不是语句，所以它会有自己的值。

```js
function* g4() {
  yield* [1, 2, 3];
  return "foo";
}

var result;

function* g5() {
  result = yield* g4();
}

var iterator = g5();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true },
// 此时 g4() 返回了 { value: "foo", done: true }

console.log(result); // "foo"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [迭代器协议](/zh-CN/docs/Web/JavaScript/Guide/The_Iterator_protocol)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("Operators/yield", "yield")}}
