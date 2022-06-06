---
title: 遞減運算子 (--)
slug: Web/JavaScript/Reference/Operators/Decrement
tags:
  - Decrement
  - JavaScript
  - Language feature
  - Operator
browser-compat: javascript.operators.decrement
---
{{jsSidebar("Operators")}}

遞減運算子 (`--`) 遞減（減一）它的運算元並將結果回傳。

{{EmbedInteractiveExample("pages/js/expressions-decrement.html")}}

## 語法

```js
x--
--x
```

## 詳細說明

若將遞減運算子作為後綴（例如 `x--`），則會先回傳原本的值，在進行遞減。

若作為前綴（例如 `--x`），則會先進行遞減，在將遞減後的結果回傳。

## 範例

### 遞減運算子置於後綴

```js
let x = 3;
y = x--;

// y = 3
// x = 2
```

### 遞減運算子置於前綴

```js
let a = 2;
b = --a;

// a = 1
// b = 1
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [相加運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Addition)
- [相減運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [相除運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Division) 
- [餘數運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Remainder)
- [相乘運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [指數運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [遞增運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Increment)
- [負號運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [正號運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Unary_plus)
