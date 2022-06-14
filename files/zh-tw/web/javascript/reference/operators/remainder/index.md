---
title: 餘數運算子 (%)
slug: Web/JavaScript/Reference/Operators/Remainder
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.remainder
---
{{jsSidebar("Operators")}}

The remainder operator (`%`) returns the remainder left over when one
operand is divided by a second operand. It always takes the sign of the dividend.

{{EmbedInteractiveExample("pages/js/expressions-remainder.html")}}

Note that while in most languages, '%' is a remainder operator, in some
(e.g. [Python, Perl](https://en.wikipedia.org/wiki/Modulo_operation#In_programming_languages))
it is a modulo operator.
For two values of the same sign, the two are equivalent, but
when the dividend and divisor are of different signs, they give different results. To
obtain a modulo in JavaScript, in place of `a % n`, use
`((a % n ) + n ) % n`.

## 語法

```js
x % y
```

## 範例

### 除正數時的餘數

```js
 13 % 5  //  3
 1 % -2 //  1
 1 % 2  //  1
 2 % 3  //  2
5.5 % 2 // 1.5
```

### 除負數時的餘數

```js
-13 % 5 // -3
-1 % 2  // -1
-4 % 2  // -0
```

### 除 `NaN` 時的餘數

```js
NaN % 2 // NaN
```

### 除無限 (Infinity) 時的餘數

```js
Infinity % 2 // NaN
Infinity % 0 // NaN
Infinity % Infinity // NaN
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [相加運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Addition)
- [相減運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [相乘運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [指數運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [遞增運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Increment)
- [遞減運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Decrement)
- [負號運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [正號運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Unary_plus)

- [Remainder operator vs. modulo operator](https://2ality.com/2019/08/remainder-vs-modulo.html)
- [Mod and Remainder are not the Same](https://bigmachine.io/2018/08/21/mod-and-remainder-are-not-the-same-2/)