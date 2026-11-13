---
title: 表达式语句
slug: Web/JavaScript/Reference/Statements/Expression_statement
l10n:
  sourceCommit: 4c26e8a3fb50d06963b06017f51ce19364350564
---

**表达式语句**是指在需要语句的地方使用的表达式。该表达式被执行后，它的结果将被丢弃——因此，它仅对有着副作用的表达式有意义，例如执行函数或者更新变量。

## 语法

```js-nolint
expression;
```

- `expression`
  - : 要计算的任意[表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators)。[有些表达式](#被禁用的表达式)可能与其他语句产生歧义，因此被禁用。

## 描述

除了[专用的语句语法](/zh-CN/docs/Web/JavaScript/Reference/Statements)外，你也可以将几乎任何[表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators)用作单独的语句。表达式语句语法需要在表达式的结尾添加一个分号，但是如果缺少分号导致语法无效，[自动分号补全](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#自动分号补全)的过程可能会为你插入一个分号。

因为表达式执行之后就会被丢弃，表达式的结果不再可用。因此，表达式必须有一些副作用才能有用。表达式语句通常是：

- 函数调用（`console.log("Hello");`、`[1, 2, 3].forEach((i) => console.log(i));`）
- [带标签的模版字符串](/zh-CN/docs/Web/JavaScript/Reference/Template_literals#带标签的模板字符串)
- [赋值表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators#赋值运算符)，包括复合赋值
- [自增和自减](/zh-CN/docs/Web/JavaScript/Reference/Operators#自增和自减)
- [`delete`](/zh-CN/docs/Web/JavaScript/Reference/Operators/delete)
- [`import()`](/zh-CN/docs/Web/JavaScript/Reference/Operators/import)
- [`yield`](/zh-CN/docs/Web/JavaScript/Reference/Operators/yield) 和 [`yield*`](/zh-CN/docs/Web/JavaScript/Reference/Operators/yield*)

如果表达式调用 [getter](/zh-CN/docs/Web/JavaScript/Reference/Functions/get) 或者触发[强制类型转换](/zh-CN/docs/Web/JavaScript/Guide/Data_structures#强制类型转换)，它们也可能有副作用。

### 被禁用的表达式

为了将表达式用作语句，它禁止与其他的语句语法有歧义。因此，表达式禁止以以下任何标记开头：

- `function`：这将是 [`function` 声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/function)或者 [`function*` 声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/function*)，而不是 [`function` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function)或者 [`function*` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function*)
- `async function`：这将是 [`async function` 声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)或者 [`async function*` 声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function*)，而不是 [`async function` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/async_function)或者 [`async function*` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/async_function*)
- `class`：这将是 [`class` 声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/class)，而不是 [`class` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/class)
- `let[`：这将是带有[数组解构](/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring)的 [`let` 声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/let)，而不是称为 `let` 变量的[属性访问器](/zh-CN/docs/Web/JavaScript/Reference/Operators/Property_accessors)（`let` 仅可以是在[非严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode#额外的保留字)下的标识符）
- `{`：这将是一个[块语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/block)，而不是[对象字面量](/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer)

因此，以下所有内容均无效：

```js-nolint example-bad
function foo() {
  console.log("foo");
}(); // SyntaxError: Unexpected token '('

// 出于某种原因，你有一个叫做 `let` 的变量
var let = [1, 2, 3];
let[0] = 4; // SyntaxError: Invalid destructuring assignment target

{
  foo: 1,
  bar: 2, // SyntaxError: Unexpected token ':'
};
```

更危险的是，有时候代码碰巧是有效的语法，但是这并不是你想要的。

```js-nolint example-bad
// 出于某种原因，你有一个叫做 `let` 的变量
var let = [1, 2, 3];

function setIndex(index, value) {
  if (index >= 0) {
    // 打算分配给数组 `let`，但是却创建一个额外的变量！
    let[index] = value;
  }
}

setIndex(0, [1, 2]);
console.log(let); // [1, 2, 3]

// 这并不是一个对象字面量，而是一个块语句。
// 其中 `foo` 是标签，`1` 是表达式语句。
// 这通常在控制台中发生
{ foo: 1 };
```

为了避免这些问题，你可以使用圆括号，使语句明确地作为一个表达式。

```js example-good
(function foo() {
  console.log("foo");
})();
```

## 示例

### 避免控制流语句

你可以使用表达式语句来避免几乎所有控制流语句的使用。例如，可以使用[三元运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Conditional_operator)和[逻辑运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators#二元逻辑运算符)替换 `if...else`。像 `for` 或者 `for...of` 可以使用[数组方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array#实例方法)来替换。

```js
// 使用控制流语句
function range(start, end) {
  if (start > end) {
    [start, end] = [end, start];
  }
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

// 使用表达式语句
function range2(start, end) {
  start > end && ([start, end] = [end, start]);
  return Array.from({ length: end - start }, (_, i) => start + i);
}
```

> [!WARNING]
> 这仅演示了该语言的功能。过度的使用表达式语句来替代控制流语句会大大降低代码的可读性。

## 规范

{{Specifications}}

## 参见

- [语句和声明](/zh-CN/docs/Web/JavaScript/Reference/Statements)
- [表达式和运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators)
