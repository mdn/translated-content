---
title: Math.abs()
slug: Web/JavaScript/Reference/Global_Objects/Math/abs
l10n:
  sourceCommit: dc90e6a09235136e0e5113e1fab2c11053e467d7
---

{{JSRef}}

**`Math.abs()`** 靜態方法會回傳一個數字的絕對值。

{{InteractiveExample("JavaScript Demo: Math.abs()")}}

```js interactive-example
function difference(a, b) {
  return Math.abs(a - b);
}

console.log(difference(3, 5));
// Expected output: 2

console.log(difference(5, 3));
// Expected output: 2

console.log(difference(1.23456, 7.89012));
// Expected output: 6.6555599999999995
```

## 語法

```js-nolint
Math.abs(x)
```

### 參數

- `x`
  - : 一個數字。

### 回傳值

`x` 的絕對值。如果 `x` 是負數或 `-0`，則回傳它的相反數 `-x`（非負數）。否則，回傳 `x` 本身。因此，結果必定是正數或 `0`。

## 描述

由於 `abs()` 是 `Math` 的靜態方法，你必須使用 `Math.abs()`，而不是在你所建立的 `Math` 物件上呼叫此方法（`Math` 並不是建構子）。

## 範例

### 使用 Math.abs()

```js
Math.abs(-Infinity); // Infinity
Math.abs(-1); // 1
Math.abs(-0); // 0
Math.abs(0); // 0
Math.abs(1); // 1
Math.abs(Infinity); // Infinity
```

### 參數的強制轉型

`Math.abs()` [會將參數強制轉型為數字](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion)。無法轉型的值將變為 `NaN`，因此 `Math.abs()` 也會回傳 `NaN`。

```js
Math.abs("-1"); // 1
Math.abs(-2); // 2
Math.abs(null); // 0
Math.abs(""); // 0
Math.abs([]); // 0
Math.abs([2]); // 2
Math.abs([1, 2]); // NaN
Math.abs({}); // NaN
Math.abs("string"); // NaN
Math.abs(); // NaN
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
