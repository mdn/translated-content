---
title: 条件（三元）运算符
slug: Web/JavaScript/Reference/Operators/Conditional_operator
---

{{jsSidebar("Operators")}}

**条件（三元）运算符**是 JavaScript 唯一使用三个操作数的运算符：一个条件后跟一个问号（`?`），如果条件为{{Glossary("truthy", "真值")}}，则执行冒号（`:`）前的表达式；若条件为{{Glossary("falsy", "假值")}}，则执行最后的表达式。该运算符经常当作 [`if...else`](/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else) 语句的简捷形式来使用。

{{EmbedInteractiveExample("pages/js/expressions-conditionaloperators.html")}}

## 语法

```js-nolint
condition ? exprIfTrue : exprIfFalse
```

### 参数

- `condition`
  - : 计算结果用作条件的表达式。
- `exprIfTrue`
  - : 如果 `condition` 的计算结果为{{Glossary("truthy", "真值")}}（等于或可以转换为 `true` 的值），则执行该表达式。
- `exprIfFalse`
  - : 如果 `condition` 为{{Glossary("falsy", "假值")}}（等于或可以转换为 `false` 的值）时执行的表达式。

## 描述

除了 `false`，可能的假值表达式还有：`null`、`NaN`、`0`、空字符串（`""`）和 `undefined`。如果 `condition` 是其中任何一个，那么条件表达式的结果就是 `exprIfFalse` 表达式执行的结果。

## 示例

### 简单的例子

```js
const age = 26;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer"
```

### 处理 null 值

一个常见的用法是处理可能为 `null` 的值：

```js
const greeting = (person) => {
  const name = person ? person.name : "stranger";
  return `Howdy, ${name}`;
};

console.log(greeting({ name: "Alice" })); // "Howdy, Alice"
console.log(greeting(null)); // "Howdy, stranger"
```

### 条件链

三元运算符是右结合的，这意味着它可以按以下方式“链接”起来，类似于 `if … else if … else if … else` 链：

```js
function example() {
  return condition1
    ? value1
    : condition2
    ? value2
    : condition3
    ? value3
    : value4;
}
```

这等价于以下 [`if...else`](/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else) 链。

```js
function example() {
  if (condition1) {
    return value1;
  } else if (condition2) {
    return value2;
  } else if (condition3) {
    return value3;
  } else {
    return value4;
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [if 语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else)
- [空值合并运算符（`??`）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [可选链运算符（`?.`）](/zh-CN/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [在代码中做决定——条件语句](/zh-CN/docs/Learn/JavaScript/Building_blocks/conditionals)
- [表达式与运算符](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators)
