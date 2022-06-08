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

指數運算子是 right-associative： 
`a ** b ** c` 相當於
`a ** (b ** c)`.

在絕大多數的程式語言，例如 PHP、Python……等等，指數運算的優先順序比一元運算子（ `+` 或 `-` ）較高。但並非所有程式語言均是如此。

舉例來說，在 Bash， `**` 的優先順序就低於一元運算子。
 
在 Javascript，模棱兩可的求冪運算式。說得清楚一點，`+/-/~/!/delete/void/typeof` 這類一元運算子均不能置於底數之前，否則會出現 `SyntaxError`。
 
```js
-2 ** 2;
// 在 Bash 的結果為 4；其他語言則為 -4
// 在 JavaScript 則是被視為語意不明。

-(2 ** 2);
// 在 Javascript 就會得出 -4。這種寫法的語意就很明確
```

注意，在部分語言之中，指數運算採用插入符號 <kbd>^</kbd> ，但是在 Javascript ，<kbd>^</kbd> 則是用於[XOR 位元邏輯運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR).

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

- [相加運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Addition)
- [相減運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [相除運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Division)
- [相乘運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [餘數運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Remainder)
- [遞增運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Increment)
- [遞減運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Decrement)
- [負號運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [正號運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Unary_plus)
