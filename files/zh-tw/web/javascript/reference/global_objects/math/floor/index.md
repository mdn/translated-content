---
title: Math.floor()
slug: Web/JavaScript/Reference/Global_Objects/Math/floor
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Math.floor()`** 靜態方法會將給定的數字無條件捨去，並回傳小於或等於該數字的最大整數。

{{InteractiveExample("JavaScript Demo: Math.floor()")}}

```js interactive-example
console.log(Math.floor(5.95));
// 預期輸出：5

console.log(Math.floor(5.05));
// 預期輸出：5

console.log(Math.floor(5));
// 預期輸出：5

console.log(Math.floor(-5.05));
// 預期輸出：-6
```

## 語法

```js-nolint
Math.floor(x)
```

### 參數

- `x`
  - : 一個數字。

### 回傳值

小於或等於 `x` 的最大整數。其值與 [`-Math.ceil(-x)`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil) 相同。

## 描述

因為 `floor()` 是 `Math` 的靜態方法，所以你應該總是使用 `Math.floor()`，而不是在你建立的 `Math` 物件上呼叫方法（`Math` 不是一個建構子）。

## 範例

### 使用 Math.floor()

```js
Math.floor(-Infinity); // -Infinity
Math.floor(-45.95); // -46
Math.floor(-45.05); // -46
Math.floor(-0); // -0
Math.floor(0); // 0
Math.floor(4); // 4
Math.floor(45.05); // 45
Math.floor(45.95); // 45
Math.floor(Infinity); // Infinity
```

### 小數調整

在此範例中，我們實作了一個名為 `decimalAdjust()` 的方法，它是 `Math.floor()`、{{jsxref("Math.ceil()")}} 和 {{jsxref("Math.round()")}} 的增強方法。雖然這三個 `Math` 函式總是將輸入調整到個位數，但 `decimalAdjust` 接受一個 `exp` 參數，該參數指定了數字應調整到小數點左側的位數。例如，`-1` 表示它將在小數點後保留一位數字（如同「× 10<sup>-1</sup>」）。此外，它還允許你透過 `type` 參數選擇調整方式——`round`、`floor` 或 `ceil`。

它透過將數字乘以 10 的次方，然後將結果四捨五入到最接近的整數，再除以 10 的次方來實現。為了更好地保持精度，它利用了 Number 的 [`toString()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) 方法，該方法以科學記號（如 `6.02e23`）表示大數或小數。

```js
/**
 * 將數字調整到指定的位數。
 *
 * @param {"round" | "floor" | "ceil"} type 調整的類型。
 * @param {number} value 數字。
 * @param {number} exp 指數（調整基數的 10 對數）。
 * @returns {number} 調整後的值。
 */
function decimalAdjust(type, value, exp) {
  type = String(type);
  if (!["round", "floor", "ceil"].includes(type)) {
    throw new TypeError(
      "小數調整的類型必須是 'round'、'floor' 或 'ceil' 之一。",
    );
  }
  exp = Number(exp);
  value = Number(value);
  if (exp % 1 !== 0 || Number.isNaN(value)) {
    return NaN;
  } else if (exp === 0) {
    return Math[type](value);
  }
  const [magnitude, exponent = 0] = value.toString().split("e");
  const adjustedValue = Math[type](`${magnitude}e${exponent - exp}`);
  // 移回
  const [newMagnitude, newExponent = 0] = adjustedValue.toString().split("e");
  return Number(`${newMagnitude}e${Number(newExponent) + exp}`);
}

// 小數四捨五入
const round10 = (value, exp) => decimalAdjust("round", value, exp);
// 小數無條件捨去
const floor10 = (value, exp) => decimalAdjust("floor", value, exp);
// 小數無條件進位
const ceil10 = (value, exp) => decimalAdjust("ceil", value, exp);

// 四捨五入
round10(55.55, -1); // 55.6
round10(55.549, -1); // 55.5
round10(55, 1); // 60
round10(54.9, 1); // 50
round10(-55.55, -1); // -55.5
round10(-55.551, -1); // -55.6
round10(-55, 1); // -50
round10(-55.1, 1); // -60
// 無條件捨去
floor10(55.59, -1); // 55.5
floor10(59, 1); // 50
floor10(-55.51, -1); // -55.6
floor10(-51, 1); // -60
// 無條件進位
ceil10(55.51, -1); // 55.6
ceil10(51, 1); // 60
ceil10(-55.59, -1); // -55.5
ceil10(-59, 1); // -50
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}}
- {{jsxref("Math.trunc()")}}
