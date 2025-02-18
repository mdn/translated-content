---
title: 块语句
slug: Web/JavaScript/Reference/Statements/block
l10n:
  sourceCommit: 8d538e9521d52d96f590b72101b4b50b0b259c4b
---

{{jsSidebar("Statements")}}

**块语句**用于将零个或多个语句组合在一起。块由一对大括号（“花括号”）界定，并包含零个或多个语句和声明。

{{InteractiveExample("JavaScript Demo: Statement - Block", "taller")}}

```js interactive-example
var x = 1;
let y = 1;

if (true) {
  var x = 2;
  let y = 2;
}

console.log(x);
// Expected output: 2

console.log(y);
// Expected output: 1
```

## 语法

```js-nolint
{
  StatementList
}
```

- `StatementList`
  - : 块语句中的语句和声明

## 描述

在其他语言中，块语句通常称为*复合语句*。它允许你在 JavaScript 期望仅一条语句的地方使用多条语句。在 JavaScript 中将语句组合成块是常见的做法，尤其是在与控制流语句（例如 {{jsxref("Statements/if...else", "if...else")}} 和 {{jsxref("Statements/for", "for")}}）一起使用时。使用[空语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/Empty)可以实现相反的行为，即在需要语句情况下不提供任何语句。

此外，结合使用块作用域声明（如 [`let`](/zh-CN/docs/Web/JavaScript/Reference/Statements/let)、[`const`](/zh-CN/docs/Web/JavaScript/Reference/Statements/const) 和 [`class`](/zh-CN/docs/Web/JavaScript/Reference/Statements/class)），块可以防止临时变量污染全局命名空间，就像 [IIFE（立即调用函数表达式）](/zh-CN/docs/Glossary/IIFE)一样。

### 非严格模式下使用 var 或函数声明时的块作用域规则

非严格模式下，使用 `var` 声明或由[函数声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/function)创建的变量**不具有**块级作用域。在块内部引入的变量的作用域限于包含的函数或脚本，并且对它们的设置会在块本身之外仍然有效。例如：

```js
var x = 1;
{
  var x = 2;
}
console.log(x); // 2
```

这段代码输出内容为 2，因为块内的 `var x` 语句与块之前的 `var x` 语句处于同一个作用域。

在非严格模式下，块内函数声明的行为很奇怪。请勿使用它们。

### 严格模式下使用 let、const、class 或函数声明时的块作用域规则

与之相反，使用 [`let`](/zh-CN/docs/Web/JavaScript/Reference/Statements/let)、[`const`](/zh-CN/docs/Web/JavaScript/Reference/Statements/const) 和 [`class`](/zh-CN/docs/Web/JavaScript/Reference/Statements/class) 声明的标识符具有块级作用域。

```js
let x = 1;
{
  let x = 2;
}
console.log(x); // 1
```

`x = 2` 的作用域仅限于定义它的块内。

`const` 也是如此：

```js
const c = 1;
{
  const c = 2;
}
console.log(c); // 1; 不会抛出 SyntaxError
```

请注意，块作用域的 `const c = 2` *不会*抛出 `SyntaxError: Identifier 'c' has already been declared`，因为它可以在块内唯一地声明。

在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下，块内的函数声明的作用域是该块，并且会被提升到该块的顶部。

```js
"use strict";

{
  foo(); // 输出 "foo"
  function foo() {
    console.log("foo");
  }
}

foo(); // ReferenceError: foo is not defined
```

## 示例

### 使用块语句作为 for 循环的循环体

[`for`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for) 循环接受单个语句作为其循环体。

```js
for (let i = 0; i < 10; i++) console.log(i);
```

如果循环体中需要使用多个语句，可以将它们组合成一个块语句：

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
  console.log(i ** 2);
}
```

### 使用块语句封装数据

`let` 和 `const` 声明的作用域是其所在的块。这意味着你可以将数据隐藏在全局作用域之外，而无需将其包装在一个函数中。

```js
let sector;
{
  // 这些变量的作用域仅限于此块，并且在块结束后不可访问。
  const angle = Math.PI / 3;
  const radius = 10;
  sector = {
    radius,
    angle,
    area: (angle / 2) * radius ** 2,
    perimeter: 2 * radius + angle * radius,
  };
}
console.log(sector);
// {
//   radius: 10,
//   angle: 1.0471975511965976,
//   area: 52.35987755982988,
//   perimeter: 30.471975511965976
// }
console.log(typeof radius); // "undefined"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/if...else", "if...else")}}
- {{jsxref("Statements/let", "let")}}
