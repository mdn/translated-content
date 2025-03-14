---
title: 相加運算子（+）
slug: Web/JavaScript/Reference/Operators/Addition
---

{{jsSidebar("Operators")}}

相加運算子（`+`）用來處理數字的相加或是進行字串的串聯。

{{InteractiveExample("JavaScript Demo: Expressions - Addition operator")}}

```js interactive-example
console.log(2 + 2);
// Expected output: 4

console.log(2 + true);
// Expected output: 3

console.log("hello " + "everyone");
// Expected output: "hello everyone"

console.log(2001 + ": A Space Odyssey");
// Expected output: "2001: A Space Odyssey"
```

## 語法

```js-nolint
x + y
```

## 範例

### 數字相加

```js
// Number + Number -> addition
1 + 2; // 3
// Boolean + Number -> addition
true + 1; // 2
// Boolean + Boolean -> addition
false + false; // 0
```

### 字串串聯

```js
// String + String -> concatenation
"foo" + "bar"; // "foobar"
// Number + String -> concatenation
5 + "foo"; // "5foo"
// String + Boolean -> concatenation
"foo" + false; // "foofalse"
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [相減運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [相除運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Division)
- [相乘運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [餘數運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Remainder)
- [指數運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [遞增運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Increment)
- [遞減運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Decrement)
- [負號運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [正號運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Unary_plus)
