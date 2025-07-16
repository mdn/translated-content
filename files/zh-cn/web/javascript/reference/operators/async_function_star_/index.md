---
title: async function* 表达式
slug: Web/JavaScript/Reference/Operators/async_function*
---

**`async function*`** 关键字可用于在表达式中定义一个异步生成器函数。

你也可以使用 [`async function*` 声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function*)定义一个异步生成器函数。

{{InteractiveExample("JavaScript Demo: Expressions - Async Function Asterisk", "taller")}}

```js interactive-example
async function* foo() {
  yield await Promise.resolve("a");
  yield await Promise.resolve("b");
  yield await Promise.resolve("c");
}

let str = "";

async function generate() {
  for await (const val of foo()) {
    str = str + val;
  }
  console.log(str);
}

generate();
// Expected output: "abc"
```

## 语法

```js-nolint
async function* (param0) {
  statements
}
async function* (param0, param1) {
  statements
}
async function* (param0, param1, /* … ,*/ paramN) {
  statements
}

async function* name(param0) {
  statements
}
async function* name(param0, param1) {
  statements
}
async function* name(param0, param1, /* … ,*/ paramN) {
  statements
}
```

> [!NOTE]
> 为了避免 [`async function*` 声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function*)所带来的歧义，[表达式语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/Expression_statement)不能以关键字 `async function` 开头。`async function` 关键字仅在上下文中无法接受语句时，才会被视为表达式的开头。

### 参数

- `name` {{optional_inline}}
  - : 函数名。在这种情况下，函数名是*匿名的*，可以被省略。该名称仅在函数主体的内部有效。
- `paramN` {{optional_inline}}
  - : 传递给函数的参数名称。
- `statements` {{optional_inline}}
  - : 构成函数主体的语句。

## 描述

`async function*` 表达式与 [`async function*` 声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function*)非常相似，语法几乎相同。*函数名*是 `async function*` 表达式和 `async function*` 声明之间最主要的区别，在 `async function*` 表达式中，可以创建*匿名*函数去忽略函数名。`async function*` 表达式可以用作[立即调用函数表达式（IIFE）](/zh-CN/docs/Glossary/IIFE)，该表达式在被定义后立即运行，允许你去创建一个临时的[异步的可迭代对象](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#异步迭代器和异步可迭代协议)。有关更多信息，请参见[函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)这个章节。

## 示例

### 使用 async function\*

以下示例定义了一个没有名称的异步生成器函数并将它分配给变量 `x`。这个函数产生它参数的平方。

```js
const x = async function* (y) {
  yield Promise.resolve(y * y);
};
x(6)
  .next()
  .then((res) => console.log(res.value)); // 36
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Statements/async_function*", "async function*")}} 语句
- {{jsxref("AsyncGeneratorFunction")}} 对象
- [迭代协议](/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("GeneratorFunction")}} 对象
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- {{jsxref("Function")}} 对象
- {{jsxref("Functions", "函数", "", 1)}}
