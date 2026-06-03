---
title: Math.ceil()
slug: Web/JavaScript/Reference/Global_Objects/Math/ceil
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Math.ceil()`** 靜態方法總是無條件進位，並回傳大於或等於給定數字的最小整數。

{{InteractiveExample("JavaScript Demo: Math.ceil()")}}

```js interactive-example
console.log(Math.ceil(0.95));
// 預期輸出：1

console.log(Math.ceil(4));
// 預期輸出：4

console.log(Math.ceil(7.004));
// 預期輸出：8

console.log(Math.ceil(-7.004));
// 預期輸出：-7
```

## 語法

```js-nolint
Math.ceil(x)
```

### 參數

- `x`
  - : 一個數字。

### 回傳值

大於或等於 `x` 的最小整數。其值與 [`-Math.floor(-x)`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) 相同。

## 描述

因為 `ceil()` 是 `Math` 的靜態方法，你應該總是使用 `Math.ceil()`，而不是作為你建立的 `Math` 物件的方法（`Math` 不是一個建構子）。

## 範例

### 使用 Math.ceil()

```js
Math.ceil(-Infinity); // -Infinity
Math.ceil(-7.004); // -7
Math.ceil(-4); // -4
Math.ceil(-0.95); // -0
Math.ceil(-0); // -0
Math.ceil(0); // 0
Math.ceil(0.95); // 1
Math.ceil(4); // 4
Math.ceil(7.004); // 8
Math.ceil(Infinity); // Infinity
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
