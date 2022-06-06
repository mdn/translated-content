---
title: 遞增運算子 (++)
slug: Web/JavaScript/Reference/Operators/Increment
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.increment
---
{{jsSidebar("Operators")}}

The increment operator (`++`) increments (adds one to) its operand and
returns a value.

{{EmbedInteractiveExample("pages/js/expressions-increment.html")}}

## Syntax

```js
x++
++x
```

## Description

If used postfix, with operator after operand (for example,
`x++`), the increment operator increments and returns the value
before incrementing.

If used prefix, with operator before operand (for example,
`++x`), the increment operator increments and returns the value
after incrementing.

## Examples

### Postfix increment

```js
let x = 3;
y = x++;

// y = 3
// x = 4
```

### Prefix increment

```js
let a = 2;
b = ++a;

// a = 3
// b = 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [相加運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Addition)
- [相減運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [相除運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Division) 
- [餘數運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Remainder)
- [相乘運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [指數運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [遞增運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Increment)
- [遞減運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Decrement)
- [負號運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [正號運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Unary_plus)
