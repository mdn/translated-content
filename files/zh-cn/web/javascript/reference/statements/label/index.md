---
title: label
slug: Web/JavaScript/Reference/Statements/label
l10n:
  sourceCommit: c6f0f106b9083984dbf597678def6561729bb459
---

**标记语句**是任何带有标识符前缀的[语句](/zh-CN/docs/Web/JavaScript/Reference/Statements)。你可以使用嵌套在标记语句中的 {{jsxref("Statements/break", "break")}} 或 {{jsxref("Statements/continue", "continue")}} 语句跳转到对应标记。

{{InteractiveExample("JavaScript Demo: Statement - Label")}}

```js interactive-example
let str = "";

loop1: for (let i = 0; i < 5; i++) {
  if (i === 1) {
    continue loop1;
  }
  str = str + i;
}

console.log(str);
// Expected output: "0234"
```

## 语法

```js-nolint
label:
  statement
```

- `label`
  - : 任何不属于[保留字](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#保留字)的 JavaScript [标识符](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#标识符)。
- `statement`
  - : JavaScript 语句。`break` 可以在任何标记语句中使用，而 `continue` 可以在标记的循环语句中使用。

## 描述

你可以使用标签来标识语句，并在后续使用 `break` 或 `continue` 语句来引用该标签。请注意，JavaScript _没有_ `goto` 语句；你只能将标签与 `break` 或 `continue` 一起使用。

任何引用 `label` 的 `break` 或 `continue` 语句都必须位于标记语句 `label` 所标记的语句的范围内。把 `label` 看作是仅在 `statement` 作用域内可用的变量。

如果在执行 `statement` 时遇到 `break label;` 语句，则 `statement` 执行终止，并继续执行标记的语句之后的语句。

`continue label;` 只能在 `statement` 是[循环语句](/zh-CN/docs/Web/JavaScript/Reference/Statements#迭代)时使用。如果在执行 `statement` 时遇到 `continue label;` 语句，则 `statement` 继续执行循环的下一次迭代。不带标签的 `continue;` 语句只能继续最内层的循环，而 `continue label;` 语句可以继续任何给定的循环，即使该语句嵌套在其他循环中。

一个语句可以有多个标签。在这种情况下，这些标签在功能上都是等价的。

## 示例

### 在 for 循环中使用带标签的 continue 语句

```js
// 第一个 for 语句被标记为“loop1”
loop1: for (let i = 0; i < 3; i++) {
  // 第二个 for 语句被标记为“loop2”
  loop2: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      continue loop1;
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}

// 输出：
// i = 0, j = 0
// i = 0, j = 1
// i = 0, j = 2
// i = 1, j = 0
// i = 2, j = 0
// i = 2, j = 1
// i = 2, j = 2
```

注意它如何跳过“i = 1, j = 1”和“i = 1, j = 2”。

### 在 for 循环中使用带标签的 break 语句

```js
let i, j;

// 第一个 for 语句被标记为“loop1”
loop1: for (i = 0; i < 3; i++) {
  // 第二个 for 语句被标记为“loop2”
  loop2: for (j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break loop1;
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}

// 输出：
// i = 0, j = 0
// i = 0, j = 1
// i = 0, j = 2
// i = 1, j = 0
```

请注意和前面的 `continue` 示例的区别：当遇到 `break loop1` 时，外层循环的执行终止，因此之后的日志都不会再输出；当遇到 `continue loop1` 时，外层循环的执行会继续下一次迭代，因此会跳过“i = 1, j = 1”和“i = 1, j = 2”。

### 使用带标签的 continue 语句

给定一个数据数组和一个测试数组，下面的例子会统计通过测试的数据的数量。

```js
// 从 1 到 100 的数字
const items = Array.from({ length: 100 }, (_, i) => i + 1);
const tests = [
  { pass: (item) => item % 2 === 0 },
  { pass: (item) => item % 3 === 0 },
  { pass: (item) => item % 5 === 0 },
];
let itemsPassed = 0;

itemIteration: for (const item of items) {
  for (const test of tests) {
    if (!test.pass(item)) {
      continue itemIteration;
    }
  }

  itemsPassed++;
}
```

请注意 `continue itemIteration;` 语句如何跳过当前项的其余测试以及更新 `itemsPassed` 计数器的语句，并继续下一个项目。如果你不使用标签，则需要使用布尔标志。

```js
// 从 1 到 100 的数字
const items = Array.from({ length: 100 }, (_, i) => i + 1);
const tests = [
  { pass: (item) => item % 2 === 0 },
  { pass: (item) => item % 3 === 0 },
  { pass: (item) => item % 5 === 0 },
];
let itemsPassed = 0;

for (const item of items) {
  let passed = true;
  for (const test of tests) {
    if (!test.pass(item)) {
      passed = false;
      break;
    }
  }
  if (passed) {
    itemsPassed++;
  }
}
```

### 使用带标签的 break 语句

给定一个数据数组和一个测试数组，下面的例子会确定所有数据是否通过所有测试。

```js
// 从 1 到 100 的数字
const items = Array.from({ length: 100 }, (_, i) => i + 1);
const tests = [
  { pass: (item) => item % 2 === 0 },
  { pass: (item) => item % 3 === 0 },
  { pass: (item) => item % 5 === 0 },
];
let allPass = true;

itemIteration: for (const item of items) {
  for (const test of tests) {
    if (!test.pass(item)) {
      allPass = false;
      break itemIteration;
    }
  }
}
```

同样，如果你不使用标签，则需要使用布尔标志。

```js
// 从 1 到 100 的数字
const items = Array.from({ length: 100 }, (_, i) => i + 1);
const tests = [
  { pass: (item) => item % 2 === 0 },
  { pass: (item) => item % 3 === 0 },
  { pass: (item) => item % 5 === 0 },
];
let allPass = true;

for (const item of items) {
  let passed = true;
  for (const test of tests) {
    if (!test.pass(item)) {
      passed = false;
      break;
    }
  }
  if (!passed) {
    allPass = false;
    break;
  }
}
```

### 在带标签的块语句中使用 break

你可以标记除循环语句以外的语句，例如简单的块，但只有 `break` 语句才能引用非循环标签。

```js
foo: {
  console.log("脸");
  break foo;
  console.log("这句不会被执行");
}
console.log("交换");

// 输出：
// "脸"
// "交换"
```

### 标记函数声明

只能标记[语句而不能标记声明](/zh-CN/docs/Web/JavaScript/Reference/Statements#语句和声明的区别)。在非严格代码中，有一种遗留语法允许使用标签来标记函数声明：

```js
L: function F() {}
```

在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下，这将会抛出一个 {{jsxref("SyntaxError")}}：

```js-nolint example-bad
"use strict";
L: function F() {}
// SyntaxError: functions cannot be labelled
```

非普通函数，例如[生成器函数](/zh-CN/docs/Web/JavaScript/Reference/Statements/function*)和[异步函数](/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)既不能在严格代码中进行标记，也不能在非严格代码中进行标记：

```js-nolint example-bad
L: function* F() {}
// SyntaxError: generator functions cannot be labelled
```

函数声明标记语法已[弃用](/zh-CN/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)，并且即使是在非严格代码中，也不应该使用。你不能在函数体内跳转到此标签。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
