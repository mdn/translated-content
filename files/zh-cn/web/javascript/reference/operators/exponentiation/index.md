---
title: 幂（**）
slug: Web/JavaScript/Reference/Operators/Exponentiation
---

{{jsSidebar("Operators")}}

**幂**（**`**`**）运算符返回第一个操作数取第二个操作数的幂的结果。它等价于 {{jsxref("Math.pow()")}}，不同之处在于，它还接受 [BigInt](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt) 作为操作数。

{{EmbedInteractiveExample("pages/js/expressions-exponentiation.html")}}

## 语法

```js-nolint
x ** y
```

## 描述

幂运算符是右结合的：`a ** b ** c` 等于 `a ** (b ** c)`。

在大多数语言里，比如 PHP、Python 等那些有幂运算符（`**`）的语言，幂运算符被定义有一个比一元运算符，比如一元的 `+` 和一元的 `-` 更高的运算顺序，但有一些例外。在 Bash 语言里，`**` 运算符被定义有一个比一元运算符更低的运算顺序。

在 JavaScript 中，不可能写出模棱两可的幂表达式。也就是说，你不能将一元运算符（`+/-/~/!/delete/void/typeof`）放在底数之前；[这样做会导致语法错误](/zh-CN/docs/Web/JavaScript/Reference/Errors/Unparenthesized_unary_expr_lhs_exponentiation)。

例如，`-2 ** 2` 在 Bash 中为 4，但在其他语言（如 Python）中为 -4。这在 JavaScript 中是无效的，因为操作不明确。你必须在两边加上括号——例如，作为 `-(2 ** 2)`——以使意图明确。

请注意，某些编程语言使用插入符号 <kbd>^</kbd> 进行求幂，但 JavaScript 使用该符号表示[逻辑异或运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)。

`NaN ** 0`（和等价的 `Math.pow(NaN, 0)`）是 {{jsxref("NaN")}} 不通过数学运算传播的唯一情况——尽管操作数是 `NaN`，但它返回 `1`。此外，`base` 为 1 且 `exponent` 为非有限（±Infinity 或 `NaN`）的行为与 IEEE 754 不同，IEEE 754 指定结果应为 1，而 JavaScript 返回 `NaN` 以保持与其原始行为的向后兼容性。

## 示例

### 基本求幂

```js
2 ** 3; // 8
3 ** 2; // 9
3 ** 2.5; // 15.588457268119896
10 ** -1; // 0.1
NaN ** 2; // NaN
NaN ** 0; // 1
1 ** Infinity; // NaN
```

### 结合性

```js-nolint
2 ** 3 ** 2; // 512
2 ** (3 ** 2); // 512
(2 ** 3) ** 2; // 64
```

### 与一元运算符一起使用

取幂表达式的值的相反数：

```js
-(2 ** 2); // -4
```

将幂表达式的底数转化为一个负数：

```js
(-2) ** 2; // 4
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [加法运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Addition)
- [减法运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [除法运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Division)
- [乘法运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [取余运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Remainder)
- [自增运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Increment)
- [自减运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Decrement)
- [一元减运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [一元加运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_plus)
