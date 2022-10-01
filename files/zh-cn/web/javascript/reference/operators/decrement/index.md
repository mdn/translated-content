---
title: 自减（--）
slug: Web/JavaScript/Reference/Operators/Decrement
---

{{jsSidebar("Operators")}}

自减操作符（`--`）对其操作数进行自减（减一），并根据操作符的位置返回自减之前或之后的值。

{{EmbedInteractiveExample("pages/js/expressions-decrement.html")}}

## 语法

```js-nolint
x--
--x
```

## 描述

如果使用后缀式，即将操作符放在操作数的后面 (如，`x--`)，运算会减一，然后返回减一之前的值。

如果使用前缀式，即将操作符放在操作数的前面 (如，`--x`)，运算会减一，然后返回减一之后的值。

递减操作符只能应用于引用的操作数（变量和对象属性，即有效的[赋值目标](/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment)）。`--x` 本身的计算结果是一个值，而不是一个引用，因此不能将多个自减操作符链接在一起。

```js example-bad
--(--x); // SyntaxError: Invalid left-hand side expression in prefix operation
```

## 示例

### 后缀式

```js
let x = 3;
const y = x--;

// x = 2
// y = 3
```

### 前缀式

```js
let x = 3;
const y = --x;

// x = 2
// y = 2
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Addition operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Addition)
- [Subtraction operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplication operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Remainder operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Increment operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Increment)
- [Unary negation operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_plus)
