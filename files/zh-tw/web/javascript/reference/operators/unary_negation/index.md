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

一元負號運算子 (`-`) 置於運算元之前，並將運算元轉為其負值。

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

- [相加運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Addition)
- [相減運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [相除運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Division) 
- [相乘運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [餘數運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Remainder)
- [相乘運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [指數運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [遞減運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Decrement)
- [正號運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Unary_plus)
