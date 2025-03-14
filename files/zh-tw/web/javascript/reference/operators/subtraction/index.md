---
title: 相減運算子（-）
slug: Web/JavaScript/Reference/Operators/Subtraction
---

{{jsSidebar("Operators")}}

相減運算子（`-`）是用來將兩個值進行相減，並得出它們的差值。

{{InteractiveExample("JavaScript Demo: Expressions - Subtraction operator")}}

```js interactive-example
console.log(5 - 3);
// Expected output: 2

console.log(3.5 - 5);
// Expected output: -1.5

console.log(5 - "hello");
// Expected output: NaN

console.log(5 - true);
// Expected output: 4
```

## 語法

```js-nolint
x - y
```

## 範例

### 數字相減

```js
5 - 3; // 2
3 - 5; // -2
```

### 非數字之間的相減

```js
"foo" - 3; // NaN
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [相加運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Addition)
- [相除運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Division)
- [相乘運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [餘數運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Remainder)
- [指數運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [遞增運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Increment)
- [遞減運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Decrement)
- [負號運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [正號運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Unary_plus)
