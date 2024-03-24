---
title: Generator.prototype.return()
slug: Web/JavaScript/Reference/Global_Objects/Generator/return
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

{{jsxref("Generator")}} 实例的 **`return()`** 方法的作用就好像一个 `return` 语句被插入到生成器主体的当前暂停位置，这会结束生成器并允许生成器与 [`try...finally`](/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch#finally_块) 块结合使用时执行任何清理任务。

## 语法

```js-nolint
generatorInstance.return()
generatorInstance.return(value)
```

### 参数

- `value` {{optional_inline}}
  - : 要返回的值。

### 返回值

一个 {{jsxref("Object")}}，有以下两个属性：

- `done`
  - : 一个布尔值：
    - 如果该生成器函数的控制流程已经结束，则为 `true`。
    - 如果该生成器函数的控制流程还未结束并能产生更多的值，则为 `false`。只有在 [`try...finally`](/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch#finally_块) 中捕获 `return` 并且 `finally` 块中还有更多的 `yield` 表达式时才会发生这种情况。
- `value`
  - : 给定的作为参数的值，或者，如果 `yield` 表达式包含在 [`try...finally`](/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch#finally_块)，从 `finally` 块产生/返回的值。

## 描述

`return()` 方法在被调用时，可以看作是在生成器主体当前暂停的位置插入了一个 `return value;` 语句，其中 `value` 是传入给 `return()` 方法的值。因此，在典型的流程中，调用 `return(value)` 将返回 `{done: true, value: value }`。然而，如果 `yield` 表达式被包含在 `try...finally` 块中，控制流不会退出函数体，而是进入 `finally` 块。在这种情况下，如果 `finally` 块中有更多 `yield` 表达式，返回的值可能会不同，`done` 甚至可能是 `false`。

## 示例

### 使用 return()

以下例子展示了一个简单的生成器和 `return` 方法的使用。

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();

g.next(); // { value: 1, done: false }
g.return("foo"); // { value: "foo", done: true }
g.next(); // { value: undefined, done: true }
```

如果对已经处于“完成”状态的生成器调用 `return(value)`，则生成器将保持在“完成”状态。

如果没有提供参数，则返回对象的 `value` 将为 `undefined`。如果提供了参数，则参数将被设置为返回对象的 `value` 属性的值，除非 `yield` 表达式被包装在 `try...finally` 中。

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const g = gen();
g.next(); // { value: 1, done: false }
g.next(); // { value: 2, done: false }
g.next(); // { value: 3, done: false }
g.next(); // { value: undefined, done: true }
g.return(); // { value: undefined, done: true }
g.return(1); // { value: 1, done: true }
```

### 将 return() 与 try...finally 一起使用

如果 `yield` 表达式被包含在一个 `try...finally` 块中，只有生成器本身才能知道 `return` 方法已被调用。

当在 `try` 块中暂停的生成器上调用 `return` 方法时，生成器中的执行将继续到 `finally` 块——因为 `try...finally` 语句的 `finally` 块始终执行。

```js
function* gen() {
  yield 1;
  try {
    yield 2;
    yield 3;
  } finally {
    yield "cleanup";
  }
}

const g1 = gen();
g1.next(); // { value: 1, done: false }

// 在 try...finally 前暂停执行。
g1.return("early return"); // { value: 'early return', done: true }

const g2 = gen();
g2.next(); // { value: 1, done: false }
g2.next(); // { value: 2, done: false }

// 在 try...finally 中暂停执行。
g2.return("early return"); // { value: 'cleanup', done: false }

// 完成值被保留
g2.next(); // { value: 'early return', done: true }

// 生成器处于完成状态
g2.return("not so early return"); // { value: 'not so early return', done: true }
```

finally 块的返回值也可以成为 `return` 调用返回结果的 `value`。

```js
function* gen() {
  try {
    yield 1;
  } finally {
    return "cleanup";
  }
}

const g1 = gen();
g1.next(); // { value: 1, done: false }
g1.return("early return"); // { value: 'cleanup', done: true }
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Statements/function*", "function*")}}
