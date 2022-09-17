---
title: 取余（%）
slug: Web/JavaScript/Reference/Operators/Remainder
original_slug: Web/JavaScript/Reference/Operators/取余
---

{{jsSidebar("Operators")}}

当一个操作数除以第二个操作数时，取余运算符（`％`）返回剩余的余数。它总是与被除数的符号保持一致。

{{EmbedInteractiveExample("pages/js/expressions-remainder.html")}}

## 语法

```js-nolint
x % y
```

## 示例

### 被除数为正数

```js
 13 % 5  //  3
 1 % -2 //  1
 1 % 2  //  1
 2 % 3  //  2
5.5 % 2 // 1.5
```

### 被除数为负数

```js
-13 % 5 // -3
-1 % 2  // -1
-4 % 2  // -0
```

### 被除数为 NaN

```js
NaN % 2 // NaN
```

### 被除数为 Infinity

```js
Infinity % 2 // NaN
Infinity % 0 // NaN
Infinity % Infinity // NaN
2 % Infinity // 2
0 % Infinity // 0
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
- [Exponentiation operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Increment operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decrement operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary negation operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_plus)
- [Remainder operator vs. modulo operator](https://2ality.com/2019/08/remainder-vs-modulo.html)
- [Mod and Remainder are not the Same](https://bigmachine.io/2018/08/21/mod-and-remainder-are-not-the-same-2/)
