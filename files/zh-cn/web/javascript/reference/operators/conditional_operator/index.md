---
title: 条件运算符
slug: Web/JavaScript/Reference/Operators/Conditional_Operator
---

{{jsSidebar("Operators")}}

**条件（三元）运算符**是 JavaScript 仅有的使用三个操作数的运算符。一个条件后面会跟一个问号（?），如果条件为 {{Glossary("truthy")}} ，则问号后面的表达式 A 将会执行；表达式 A 后面跟着一个冒号（:），如果条件为 {{Glossary("falsy")}} ，则冒号后面的表达式 B 将会执行。本运算符经常作为 [`if`](/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else) 语句的简捷形式来使用。

{{EmbedInteractiveExample("pages/js/expressions-conditionaloperators.html")}}

## 语法

```plain
condition ? exprIfTrue : exprIfFalse
```

### 参数

- `condition`
  - : 计算结果用作条件的表达式
- `exprIfTrue`
  - : 如果表达式 `condition` 的计算结果是 {{Glossary("truthy")}}（它和 `true` 相等或者可以转换成 `true` ），那么表达式 `exprIfTrue` 将会被求值。
- `exprIfFalse`
  - : 如果表达式 `condition` 的计算结果是 {{Glossary("falsy")}}（它可以转换成 `false` ），那么表达式 `exprIfFalse` 将会被执行。

## 描述

除了 `false`，可能的假值表达式还有：`null` 、`NaN` 、
`0` 、空字符串（ `""` ）、和 `undefined` 。如果 `condition` 是以上中的任何一个，那么条件表达式的结果就是 `exprIfFalse` 表达式执行的结果。

一个简单的例子：

```js
var age = 26;
var beverage = (age >= 21) ? "Beer" : "Juice";
console.log(beverage); // "Beer"
```

一个常见的用法是处理可能为 `null` 的值：

```js
function greeting(person) {
    var name = person ? person.name : "stranger";
    return "Howdy, " + name;
}

console.log(greeting({name: 'Alice'}));  // "Howdy, Alice"
console.log(greeting(null));             // "Howdy, stranger"
```

> **备注：** [The optional chaining operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Optional_chaining) 设计用来处理这种使用场景。在本文档写成的时候 (2019.01)，这个运算符还处于实验阶段并且没有实现。

### 条件链

这个三元操作符是右结合的，也就是说你可以像这样把它链接起来，和 `if … else if … else if … else` 链类似：

```js
function example(…) {
    return condition1 ? value1
         : condition2 ? value2
         : condition3 ? value3
         : value4;
}

// Equivalent to:

function example(…) {
    if (condition1) { return value1; }
    else if (condition2) { return value2; }
    else if (condition3) { return value3; }
    else { return value4; }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [if statement](/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else)
- [Optional chaining](/zh-CN/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Making decisions in your code — conditionals](/zh-CN/docs/Learn/JavaScript/Building_blocks/conditionals)
- [Expressions and operators](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators)
