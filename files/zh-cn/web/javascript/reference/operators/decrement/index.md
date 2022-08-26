---
title: 自减 (--)
slug: Web/JavaScript/Reference/Operators/Decrement
original_slug: Web/JavaScript/Reference/Operators/自减
---
{{jsSidebar("Operators")}}

自减运算符 (`--`) 将它的操作数减一，然后返回操作数。

{{EmbedInteractiveExample("pages/js/expressions-decrement.html")}}

## <br>语法

```js
x--
--x
```

## 语法细节

如果使用后缀式，即将操作符放在操作数的后面 (如，`x--`)，运算会减一，然后返回减一之前的值。

如果使用前缀式，即将操作符放在操作数的前面 (如，`--x`)，运算会减一，然后返回减一之后的值。

## 示例

### 后缀式

```js
let x = 3;
y = x--;

// y = 3
// x = 2
```

### 前缀式

```js
let a = 2;
b = --a;

// a = 1
// b = 1
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
- [Increment operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment)
- [Unary negation operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)
