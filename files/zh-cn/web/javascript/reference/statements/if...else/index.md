---
title: if...else
slug: Web/JavaScript/Reference/Statements/if...else
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{jsSidebar("Statements")}}

**`if...else`** 语句会在指定的条件为{{Glossary("truthy", "真")}}时执行一个语句。如果条件为{{Glossary("falsy", "假")}}，则会执行可选的 `else` 子句中的另一个语句。

{{InteractiveExample("JavaScript Demo: Statement - If...Else")}}

```js interactive-example
function testNum(a) {
  let result;
  if (a > 0) {
    result = "positive";
  } else {
    result = "NOT positive";
  }
  return result;
}

console.log(testNum(-5));
// Expected output: "NOT positive"
```

## 语法

```js-nolint
if (condition)
  statement1

// 带有 else 子句
if (condition)
  statement1
else
  statement2
```

- `condition`
  - : 值为{{Glossary("truthy", "真")}}或{{Glossary("falsy", "假")}}的[表达式](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#表达式)
- `statement1`
  - : 当*条件*为{{Glossary("truthy", "真")}}时执行的语句。可为任意语句，包括嵌套了 `if` 的语句。要执行多条语句，使用[块](/zh-CN/docs/Web/JavaScript/Reference/Statements/block)语句（`{ /* ... */ }`）将这些语句分组；若不想执行语句，则使用[空](/zh-CN/docs/Web/JavaScript/Reference/Statements/Empty)语句。
- `statement2`
  - : 如果 `condition` 为{{Glossary("falsy", "假")}}且 `else` 从句存在时执行的语句。可为任意语句，包括块语句和嵌套的 `if` 语句。

## 描述

可以嵌套多个 `if...else` 语句以创建 `else if` 子句。请注意，JavaScript 中没有 `elseif`（单个词）关键字。

```js-nolint
if (condition1)
  statement1
else if (condition2)
  statement2
else if (condition3)
  statement3
// …
else
  statementN
```

要看看它如何工作，可以调整下嵌套的缩进：

```js-nolint
if (condition1)
  statement1
else
  if (condition2)
    statement2
  else
    if (condition3)
      statement3
// …
```

要在一个子句中执行多条语句，可使用块语句（`{ /* ... */ }`）来组织这些语句。

```js-nolint
if (condition) {
  statements1
} else {
  statements2
}
```

不使用块可能会导致令人困惑的行为，尤其是在代码是手动格式化的情况下。例如：

```js-nolint example-bad
function checkValue(a, b) {
  if (a === 1)
    if (b === 2)
      console.log("a 是 1 并且 b 是 2");
  else
    console.log("a 不是 1");
}
```

这段代码看上去没什么问题，但是，执行 `checkValue(1, 3)` 会输出“a 不是 1”。这是因为在[悬空 else](https://en.wikipedia.org/wiki/Dangling_else) 的情况下，`else` 子句会连接到最近的 `if` 子句。因此，上述代码在缩进适当的情况下看起来会是这样的：

```js-nolint
function checkValue(a, b) {
  if (a === 1)
    if (b === 2)
      console.log("a 是 1 并且 b 是 2");
    else
      console.log("a 不是 1");
}
```

通常情况下，始终使用块语句是种很好的做法，特别是在涉及嵌套 `if` 语句的代码中。

```js example-good
function checkValue(a, b) {
  if (a === 1) {
    if (b === 2) {
      console.log("a 是 1 并且 b 是 2");
    }
  } else {
    console.log("a 不是 1");
  }
}
```

不要将原始的布尔值 `true` 和 `false` 与 {{jsxref("Boolean")}} 对象的真或假混淆。任何不是 `false`、`undefined`、`null`、`0`、`-0`、`NaN` 或空字符串（`""`）的值，以及任何对象（包括值为 `false` 的布尔对象），在用作条件时都被视为{{Glossary("truthy", "真")}}。例如：

```js
const b = new Boolean(false);
if (b) {
  console.log("b 为真"); // “b 为真”
}
```

## 示例

### 使用 if...else

```js
if (cipherChar === fromChar) {
  result += toChar;
  x++;
} else {
  result += clearChar;
}
```

### 使用 else if

请注意，JavaScript 中没有 `elseif` 关键字。但是，你可以在 `else` 和 `if` 之间加上一个空格：

```js
if (x > 50) {
  /* 做一些事情 */
} else if (x > 5) {
  /* 做一些事情 */
} else {
  /* 做一些事情 */
}
```

### 使用赋值作为条件

你几乎不应该在 `if...else` 语句中使用像 `x = y` 这样的赋值作为条件：

```js example-bad
if ((x = y)) {
  // …
}
```

因为与 {{jsxref("Statements/while", "while")}} 循环不同，条件只会被求值一次，所以赋值操作只会被执行一次。上述代码等价于：

```js example-good
x = y;
if (x) {
  // …
}
```

这更加清晰。然而，在极少数情况下，你可能需要这样做，[`while`](/zh-CN/docs/Web/JavaScript/Reference/Statements/while) 文档有[使用赋值作为条件](/zh-CN/docs/Web/JavaScript/Reference/Statements/while#使用赋值作为条件)一节，其中包含我们的建议。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Statements/block", "block")}}
- {{jsxref("Statements/switch", "switch")}}
- [条件（三元）运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
