---
title: 相除運算子 (/)
slug: Web/JavaScript/Reference/Operators/Division
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.division
---
{{jsSidebar("Operators")}}

相除運算子 (`/`) 是用來將兩個值進行相除並取得其商數。其中左運算元是被除數；右運算元是除數。

{{EmbedInteractiveExample("pages/js/expressions-division.html")}}

## 語法

```js
x / y
```

## 範例

### 基本的除法

```js
1 / 2              // 0.5

Math.floor(3 / 2) // 1

1.0 / 2.0         // 0.5
```

### 除以零

```js
2.0 / 0     // Infinity

2.0 / 0.0   // Infinity, because 0.0 === 0

2.0 / -0.0  // -Infinity
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [相加運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Addition)
- [相減運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [相乘運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [餘數運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Remainder)
- [指數運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [遞增運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Increment)
- [遞減運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Decrement)
- [負號運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [正號運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Unary_plus)