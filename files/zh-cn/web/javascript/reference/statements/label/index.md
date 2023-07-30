---
title: label
slug: Web/JavaScript/Reference/Statements/label
---

{{jsSidebar("Statements")}}

**标记语句**可以和 {{jsxref("Statements/break", "break")}} 或 {{jsxref("Statements/continue", "continue")}} 语句一起使用。标记就是在一条语句前面加个可以引用的标识符（identifier）。

{{EmbedInteractiveExample("pages/js/statement-label.html")}}

> **备注：** 使用标记的循环或语句块非常罕见。通常情况下，可以使用函数调用而不是（基于标记的）循环跳转。

## 语法

```plain
label :
   statement
```

- `label`
  - : 任何不属于保留关键字的 JavaScript 标识符。
- `statement`
  - : JavaScript 语句。`break` 可用于任何标记语句，而 `continue` 可用于循环标记语句。

## 描述

可使用一个标签来唯一标记一个循环，然后使用 `break` 或 `continue` 语句来指示程序是否中断循环或继续执行。

需要注意的是，JavaScript 没有 `goto` 语句，标记只能和 `break` 或 `continue` 一起使用。

在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)中，你不能使用“`let`”作为标签名称。它会抛出一个 {{jsxref("SyntaxError")}}（因为 let 是一个保留的标识符）。

## 示例

### 在 `for` 循环中使用带标记的 `continue` 语句

```js
var i, j;

loop1: for (i = 0; i < 3; i++) {
  //The first for statement is labeled "loop1"
  loop2: for (j = 0; j < 3; j++) {
    //The second for statement is labeled "loop2"
    if (i === 1 && j === 1) {
      continue loop1;
    }
    console.log("i = " + i + ", j = " + j);
  }
}

// Output is:
//   "i = 0, j = 0"
//   "i = 0, j = 1"
//   "i = 0, j = 2"
//   "i = 1, j = 0"
//   "i = 2, j = 0"
//   "i = 2, j = 1"
//   "i = 2, j = 2"
// Notice how it skips both "i = 1, j = 1" and "i = 1, j = 2"
```

### 使用带标记的 `continue` 语句

若给定一个数据数组和一个测试数组，则下面的例子会统计通过测试的数据的数量。

```js
var itemsPassed = 0;
var i, j;

top: for (i = 0; i < items.length; i++) {
  for (j = 0; j < tests.length; j++) {
    if (!tests[j].pass(items[i])) {
      continue top;
    }
  }

  itemsPassed++;
}
```

### 在 `for` 循环中使用带标记的 `break`

```js
var i, j;

loop1: for (i = 0; i < 3; i++) {
  //The first for statement is labeled "loop1"
  loop2: for (j = 0; j < 3; j++) {
    //The second for statement is labeled "loop2"
    if (i == 1 && j == 1) {
      break loop1;
    }
    console.log("i = " + i + ", j = " + j);
  }
}

// Output is:
//   "i = 0, j = 0"
//   "i = 0, j = 1"
//   "i = 0, j = 2"
//   "i = 1, j = 0"
// Notice the difference with the previous continue example
```

### 使用带标记的 `break` 语句

若给定一个数据数组和一个测试数组，则下面的例子会判断是否所有数据均通过了测试。

```js
var allPass = true;
var i, j;

top: for (i = 0; items.length; i++)
  for (j = 0; j < tests.length; i++)
    if (!tests[j].pass(items[i])) {
      allPass = false;
      break top;
    }
```

### 在标记块中使用 `break`

你可以在代码块中使用标记，但只有 `break` 语句可以使用非循环标记。

```js
foo: {
  console.log("face");
  break foo;
  console.log("this will not be executed");
}
console.log("swap");

// this will log:

// "face"
// "swap
```

### 标记函数声明

从 ECMAScript 2015 开始，标准的函数声明现在对规范的 [Web 兼容性附件](http://www.ecma-international.org/ecma-262/6.0/#sec-labelled-function-declarations)中的非严格代码进行了标准化。

```js
L: function F() {}
```

在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)中，这会抛出 {{jsxref("SyntaxError")}}：

```js
"use strict";
L: function F() {}
// SyntaxError: functions cannot be labelled
```

无论是否处于严格模式下，[生成器函数](/zh-CN/docs/Web/JavaScript/Reference/Statements/function*)都不能被标记：

```js
L: function* F() {}
// SyntaxError: generator functions cannot be labelled
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
