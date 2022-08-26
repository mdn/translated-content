---
title: 自增 (++)
slug: Web/JavaScript/Reference/Operators/Increment
---
{{jsSidebar("Operators")}}

自增运算符 (`++`) 将其操作数递增（加 1）并返回一个值。

{{EmbedInteractiveExample("pages/js/expressions-increment.html")}}

## 语法

```plain
Operator: x++ or ++x
```

## 描述

如使用后置（Postfix）自增，操作符在操作数后（例如 `x++`）， 操作数会加一，然后返回加一之前的值。

如使用前置（Prefix）自增，操作符在操作数前（例如 `++x`）， 操作数会加一，然后返回加一之后的值。

## 示例

### 后置自增 (Postfix increment)

```js
let x = 3;
y = x++;

// y = 3
// x = 4
```

### 前置自增 (Prefix increment)

```js
let a = 2;
b = ++a;

// a = 3
// b = 3
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [Addition operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition)
- [Subtraction operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplication operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Remainder operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Decrement operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary negation operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)
