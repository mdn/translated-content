---
title: 一元正號（+）
slug: Web/JavaScript/Reference/Operators/Unary_plus
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

**一元正號**（**`+`**）運算子會放在運算元前面，並回傳其運算元，但如果運算元不是數字，則會嘗試[將其轉換為數字](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Number#數字強制轉換)。

{{InteractiveExample("JavaScript Demo: Unary plus (+) operator", "taller")}}

```js interactive-example
const x = 1;
const y = -1;

console.log(+x);
// 預期輸出：1

console.log(+y);
// 預期輸出：-1

console.log(+"");
// 預期輸出：0

console.log(+true);
// 預期輸出：1

console.log(+false);
// 預期輸出：0

console.log(+"hello");
// 預期輸出：NaN
```

## 語法

```js-nolint
+x
```

## 說明

雖然一元負號（`-`）也可以轉換非數字型別，但一元正號是將某個值轉換為數字最快且最推薦的方式，因為它不會對數字執行其他操作。

一元正號執行的步驟與大多數內建方法預期數字時所使用的[數字轉換](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Number#數字強制轉換)完全相同。它可以轉換整數和浮點數的字串表示，以及非字串值 `true`、`false` 和 `null`。支援十進位和十六進位（以 `0x` 為前綴）的整數格式。也支援負數（但十六進位不支援負數）。如果無法解析特定值，則會回傳 {{jsxref("NaN")}}。與其他可同時處理數字與 [BigInt](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/BigInt) 的算術運算子不同，對 BigInt 值使用 `+` 運算子會拋出 {{jsxref("TypeError")}}。

## 範例

### 搭配數字使用

```js
const x = 1;
const y = -1;

console.log(+x);
// 1
console.log(+y);
// -1
```

### 搭配非數字使用

```js-nolint
+true  // 1
+false // 0
+null  // 0
+[]    // 0
+function (val) { return val; } // NaN
+1n    // throws TypeError: Cannot convert BigInt value to number
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [加法（`+`）](/zh-TW/docs/Web/JavaScript/Reference/Operators/Addition)
- [減法（`-`）](/zh-TW/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [除法（`/`）](/zh-TW/docs/Web/JavaScript/Reference/Operators/Division)
- [乘法（`*`）](/zh-TW/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [取餘數（`%`）](/zh-TW/docs/Web/JavaScript/Reference/Operators/Remainder)
- [指數（`**`）](/zh-TW/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [遞增（`++`）](/zh-TW/docs/Web/JavaScript/Reference/Operators/Increment)
- [遞減（`--`）](/zh-TW/docs/Web/JavaScript/Reference/Operators/Decrement)
- [一元負號（`-`）](/zh-TW/docs/Web/JavaScript/Reference/Operators/Unary_negation)
