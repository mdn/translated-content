---
title: 指數運算子 (**)
slug: Web/JavaScript/Reference/Operators/Exponentiation
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.exponentiation
---
{{jsSidebar("Operators")}}

指數運算子 (`**`) 會回傳以第一個數字作為底數；第二個數字做為指數的運算結果。

它類同於 `Math.pow`，不一樣的是 `**` 可以用於 BigInts 的計算而 `Math.pow` 不行。

{{EmbedInteractiveExample("pages/js/expressions-exponentiation.html")}}

## 語法

```js
x ** y
```

## 簡介

The exponentiation operator is
right-associative: `a ** b ** c` is equal to
`a ** (b ** c)`.

In most languages, such as PHP, Python, and others that have an exponentiation operator
(`**`), the exponentiation operator is defined to have a higher precedence
than unary operators, such as unary `+` and unary `-`, but there
are a few exceptions. For example, in Bash, the `**` operator is defined to
have a lower precedence than unary operators.

In JavaScript, it is impossible to write an ambiguous exponentiation expression. That
is, you cannot put a unary operator (`+/-/~/!/delete/void/typeof`)
immediately before the base number; doing so will cause a SyntaxError.

```js
-2 ** 2;
// 4 in Bash, -4 in other languages.
// This is invalid in JavaScript, as the operation is ambiguous.

-(2 ** 2);
// -4 in JavaScript and the author's intention is unambiguous.
```

Note that some programming languages use the caret symbol <kbd>^</kbd> for
exponentiation, but JavaScript uses that symbol for the
[bitwise logical XOR operator](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR).

## 範例

### 指數的基本運算

```js
2 ** 3   // 8
3 ** 2   // 9
3 ** 2.5 // 15.588457268119896
10 ** -1 // 0.1
NaN ** 2 // NaN
```

### 連續使用

```js
2 ** 3 ** 2   // 512
2 ** (3 ** 2) // 512
(2 ** 3) ** 2 // 64
```

### 與一元運算子一同使用

反轉指數運算結果之正負：

```js
-(2 ** 2) // -4
```

計算底數為負數的指數運算：

```js
(-2) ** 2 // 4
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [相加運算子](/en-US/docs/Web/JavaScript/Reference/Operators/Addition)
- [相減運算子](/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [相除運算子](/en-US/docs/Web/JavaScript/Reference/Operators/Division)
- [相乘運算子](/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [餘數運算子](/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
- [遞增運算子](/en-US/docs/Web/JavaScript/Reference/Operators/Increment)
- [遞減運算子](/en-US/docs/Web/JavaScript/Reference/Operators/Decrement)
- [負號運算子](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [正號運算子](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)
