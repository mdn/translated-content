---
title: 一元負號運算子 (-)
slug: Web/JavaScript/Reference/Operators/Unary_negation
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.unary_negation
---
{{jsSidebar("Operators")}}

The unary negation operator (`-`) precedes its operand and negates it.

{{EmbedInteractiveExample("pages/js/expressions-unary-negation.html")}}

## 語法

```js
-x
```

## 範例

### 轉換數字

```js
const x = 3;
const y = -x;

// y = -3
// x = 3
```

### 轉換非數字

一元負號運算子可以將非數字轉為數字。

```js
const x = "4";
const y = -x;

// y = -4
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [Addition operator](/en-US/docs/Web/JavaScript/Reference/Operators/Addition)
- [Subtraction operator](/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division operator](/en-US/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplication operator](/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Remainder operator](/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation operator](/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Increment operator](/en-US/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decrement operator](/en-US/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary plus operator](/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)
