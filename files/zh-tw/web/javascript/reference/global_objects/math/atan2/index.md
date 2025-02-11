---
title: Math.atan2()
slug: Web/JavaScript/Reference/Global_Objects/Math/atan2
l10n:
  sourceCommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{JSRef}}

**`Math.atan2()`** 靜態方法返回平面上由 (0, 0) 到點 (x, y) 的射線與正 x 軸之間的角度（以弧度表示），即 `Math.atan2(y, x)`。

{{InteractiveExample("JavaScript Demo: Math.atan2()")}}

```js interactive-example
function calcAngleDegrees(x, y) {
  return (Math.atan2(y, x) * 180) / Math.PI;
}

console.log(calcAngleDegrees(5, 5));
// Expected output: 45

console.log(calcAngleDegrees(10, 10));
// Expected output: 45

console.log(calcAngleDegrees(0, 10));
// Expected output: 90
```

## 語法

```js-nolint
Math.atan2(y, x)
```

### 參數

- `y`
  - : y 點座標。
- `x`
  - : x 點座標。

### 返回值

由 (0, 0) 到點 (x, y) 的射線與正 x 軸之間的角度（弧度），範圍在 -π 到 π（包含邊界）。

## 描述

`Math.atan2()` 方法測量從正 x 軸到點 `(x, y)` 的逆時針角度 θ，單位是弧度。請注意，此方法的參數順序為 y 座標先於 x 座標。

![顯示 atan2(y, x) 返回角度的圖示](atan2.png)

`Math.atan2()` 接收分別的 `x` 和 `y` 參數，而 [`Math.atan()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Math/atan) 則接收兩個參數的比值。`Math.atan2(y, x)` 與 `Math.atan(y / x)` 之間的差異如下：

| `x`             | `y`         | `Math.atan2(y, x)` | `Math.atan(y / x)` |
| --------------- | ----------- | ------------------ | ------------------ |
| `Infinity`      | `Infinity`  | π / 4              | `NaN`              |
| `Infinity`      | `-Infinity` | -π / 4             | `NaN`              |
| `-Infinity`     | `Infinity`  | 3π / 4             | `NaN`              |
| `-Infinity`     | `-Infinity` | -3π / 4            | `NaN`              |
| 0               | 0           | 0                  | `NaN`              |
| 0               | -0          | -0                 | `NaN`              |
| < 0 (包含 `-0`) | 0           | π                  | 0                  |
| < 0 (包含 `-0`) | -0          | -π                 | 0                  |
| `-Infinity`     | > 0         | π                  | -0                 |
| -0              | > 0         | π / 2              | -π / 2             |
| `-Infinity`     | < 0         | -π                 | 0                  |
| -0              | < 0         | -π / 2             | π / 2              |

此外，對於第二和第三象限中的點（`x < 0`），`Math.atan2()` 輸出的角度會小於 <math><semantics><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><annotation encoding="TeX">-\frac{\pi}{2}</annotation></semantics></math> 或大於 <math><semantics><mfrac><mi>π</mi><mn>2</mn></mfrac><annotation encoding="TeX">\frac{\pi}{2}</annotation></semantics></math>。

由於 `atan2()` 是 `Math` 的靜態方法，你必須使用 `Math.atan2()` 來呼叫它，而不是呼叫你所建立的 `Math` 物件的方法（`Math` 不是建構子）。

## 範例

### 使用 Math.atan2()

```js
Math.atan2(90, 15); // 1.4056476493802699
Math.atan2(15, 90); // 0.16514867741462683
```

### Math.atan2(y, x) 和 Math.atan(y / x) 的差別

以下腳本會輸出所有 `Math.atan2(y, x)` 和 `Math.atan(y / x)` 結果不相等的輸入。

```js
const formattedNumbers = new Map([
  [-Math.PI, "-π"],
  [(-3 * Math.PI) / 4, "-3π/4"],
  [-Math.PI / 2, "-π/2"],
  [-Math.PI / 4, "-π/4"],
  [Math.PI / 4, "π/4"],
  [Math.PI / 2, "π/2"],
  [(3 * Math.PI) / 4, "3π/4"],
  [Math.PI, "π"],
  [-Infinity, "-∞"],
  [Infinity, "∞"],
]);

function format(template, ...args) {
  return String.raw(
    { raw: template },
    ...args.map((num) =>
      (Object.is(num, -0)
        ? "-0"
        : (formattedNumbers.get(num) ?? String(num))
      ).padEnd(5),
    ),
  );
}

console.log(`| x     | y     | atan2 | atan  |
|-------|-------|-------|-------|`);

for (const x of [-Infinity, -1, -0, 0, 1, Infinity]) {
  for (const y of [-Infinity, -1, -0, 0, 1, Infinity]) {
    const atan2 = Math.atan2(y, x);
    const atan = Math.atan(y / x);
    if (!Object.is(atan2, atan)) {
      console.log(format`| ${x} | ${y} | ${atan2} | ${atan} |`);
    }
  }
}
```

輸出為：

```plain
| x     | y     | atan2 | atan  |
|-------|-------|-------|-------|
| -∞    | -∞    | -3π/4 | NaN   |
| -∞    | -1    | -π    | 0     |
| -∞    | -0    | -π    | 0     |
| -∞    | 0     | π     | -0    |
| -∞    | 1     | π     | -0    |
| -∞    | ∞     | 3π/4  | NaN   |
| -1    | -∞    | -π/2  | π/2   |
| -1    | -1    | -3π/4 | π/4   |
| -1    | -0    | -π    | 0     |
| -1    | 0     | π     | -0    |
| -1    | 1     | 3π/4  | -π/4  |
| -1    | ∞     | π/2   | -π/2  |
| -0    | -∞    | -π/2  | π/2   |
| -0    | -1    | -π/2  | π/2   |
| -0    | -0    | -π    | NaN   |
| -0    | 0     | π     | NaN   |
| -0    | 1     | π/2   | -π/2  |
| -0    | ∞     | π/2   | -π/2  |
| 0     | -0    | -0    | NaN   |
| 0     | 0     | 0     | NaN   |
| ∞     | -∞    | -π/4  | NaN   |
| ∞     | ∞     | π/4   | NaN   |
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
