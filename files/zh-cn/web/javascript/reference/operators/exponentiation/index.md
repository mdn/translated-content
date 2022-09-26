---
title: 求幂 (**)
slug: Web/JavaScript/Reference/Operators/Exponentiation
---

{{jsSidebar("Operators")}}

求幂运算符（`**`）返回将第一个操作数加到第二个操作数的幂的结果。它等效于`Math.pow`，不同之处在于它也接受 BigInts 作为操作数。

{{EmbedInteractiveExample("pages/js/expressions-exponentiation.html")}}

## 语法

```plain
Operator: var1 ** var2
```

## 简介

求幂运算符是是**右结合的**: `a ** b ** c` 等于 `a ** (b ** c)`.

在大多数语言里，比如 PHP、Python 等那些有一个幂运算符 (`**`) 的语言，幂运算符被定义有一个比一元运算符，比如一元的 `+` 和一元的 `-` 更高的运算顺序，但有一些例外。在 Bash 语言里，`**` 运算符被定义有一个比一元运算符更低的运算顺序。

在 JavaScript 里，你不可能写出一个不明确的求幂表达式。这就是说，你不能立刻将一个一元运算符（`+/-/~/!/delete/void/typeof`）放在基数前，这样做只会导致一个语法错误。

```js
-2 ** 2;
// 4 in Bash, -4 in other languages.
// This is invalid in JavaScript, as the operation is ambiguous.


-(2 ** 2);
// -4 in JavaScript and the author's intention is unambiguous.
```

注意有些编程语言用扬抑符 <kbd>^</kbd> 做乘方运算，但是 JavaScript 将这个符号作为了[XOR 位逻辑运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR)。

## 例子

### 基本求幂

```js
2 ** 3   // 8
3 ** 2   // 9
3 ** 2.5 // 15.588457268119896
10 ** -1 // 0.1
NaN ** 2 // NaN
```

### 结合

```js
2 ** 3 ** 2   // 512
2 ** (3 ** 2) // 512
(2 ** 3) ** 2 // 64
```

### 与一元运算符的用法

取求幂表达式的值的相反数：

```js
-(2 ** 2) // -4
```

将求幂表达式的底数转化为一个负数：

```js
(-2) ** 2 // 4
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [Addition operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Addition)
- [Subtraction operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplication operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Remainder operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Increment operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decrement operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary negation operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_plus)
