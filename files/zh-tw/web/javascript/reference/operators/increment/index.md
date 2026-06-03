---
title: 遞增運算子（++）
slug: Web/JavaScript/Reference/Operators/Increment
---

遞增運算子（`++`）遞增（加一）它的運算元並將結果回傳。

{{InteractiveExample("JavaScript Demo: Expressions - Increment operator")}}

```js interactive-example
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
```

## 語法

```js-nolint
x++
++x
```

## 詳細說明

若將遞增運算子作為後綴（例如 `x++`），則會先回傳原本的值，再進行遞增。

若作為前綴（例如 `++x`），則會先進行遞增，再將遞增後的結果回傳。

## 範例

### 遞增運算子置於後綴

```js
let x = 3;
y = x++;

// y = 3
// x = 4
```

### 遞增運算子置於前綴

```js
let a = 2;
b = ++a;

// a = 3
// b = 3
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
- [遞減運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Decrement)
- [負號運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [正號運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Unary_plus)
