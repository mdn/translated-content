---
title: 自增（++）
slug: Web/JavaScript/Reference/Operators/Increment
---

{{jsSidebar("Operators")}}

自增操作符（`++`）对其操作数进行自增（加一），并根据操作符的位置返回自增之前或之后的值。

{{EmbedInteractiveExample("pages/js/expressions-increment.html")}}

## 语法

```js-nolint
x++
++x
```

## 描述

如使用后缀式，操作符在操作数后（例如 `x++`），操作数会加一，然后返回加一之前的值。

如使用前缀式，操作符在操作数前（例如 `++x`），操作数会加一，然后返回加一之后的值。

自增操作符只能应用于引用的操作数（变量和对象属性，即有效的[赋值目标](/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment)）。`++x` 本身的计算结果是一个值，而不是一个引用，因此不能将多个自增操作符链接在一起。

```js example-bad
++(++x); // SyntaxError: Invalid left-hand side expression in prefix operation
```

## 示例

### 后缀式

```js
let x = 3;
const y = x++;

// x = 4
// y = 3
```

### 前缀式

```js
let x = 3;
const y = ++x;

// x = 4
// y = 4
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
- [Decrement operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary negation operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_plus)
