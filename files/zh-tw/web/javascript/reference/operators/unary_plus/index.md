---
title: 一元正號運算子 (+)
slug: Web/JavaScript/Reference/Operators/Unary_plus
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.unary_plus
---
{{jsSidebar("Operators")}}

一元正號運算子 (`+`) 置於運算元之前並取其數值。如果可以，亦會將之轉為數字。

{{EmbedInteractiveExample("pages/js/expressions-unary-plus.html", "taller")}}

## 語法

```js
+x
```

## 詳細說明

一元負號運算子 (`-`) 也可以轉換非數字，但正號運算子卻是將運算元轉換為數字的最快和首選方法。

它不會對該運算元進行任何其他操作。

它可以將字串轉為整數和浮點數（如果字串值符合）；亦可使用在非字串的運算元，例如 `true`、`false`、`null`。 

正號運算子支持十進制和十六進制整數（`0x`前綴）、負數（雖然不適用於十六進制）格式。 

若用於 BigInt 類型的值，會觸發 TypeError。 

如果無法解析值，它會回傳 {{jsxref("NaN")}}。

## 範例

### 使用於數字

```js
const x = 1;
const y = -1;

console.log(+x);
// 1
console.log(+y);
// -1
```

### 使用於非數字上

```js
+true  // 1
+false // 0
+null  // 0
+function(val){ return val } // NaN
+1n    // throws TypeError: Cannot convert BigInt value to number
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
- [負號運算子](/zh-TW/docs/Web/JavaScript/Reference/Operators/Unary_negation) 
