---
title: Math.atan()
slug: Web/JavaScript/Reference/Global_Objects/Math/atan
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

**`Math.atan()`** 靜態方法回傳數字的反正切值（單位為弧度），也就是說：

<math display="block">
  <semantics><mrow><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚊𝚝𝚊𝚗</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mo lspace="0em" rspace="0em">arctan</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>the unique&nbsp;</mtext><mi>y</mi><mo>∊</mo><mrow><mo>[</mo><mrow><mo>−</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>,</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><mo>]</mo></mrow><mtext>&nbsp;such that&nbsp;</mtext><mo lspace="0em" rspace="0em">tan</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.atan}(x)} = \arctan(x) = \text{the unique } y \in \left[-\frac{\pi}{2}, \frac{\pi}{2}\right] \text{ such that } \tan(y) = x</annotation></semantics>
</math>

{{InteractiveExample("JavaScript Demo: Math.atan()")}}

```js interactive-example
// 計算直角三角形的角度（以弧度表示）
function calcAngle(opposite, adjacent) {
  return Math.atan(opposite / adjacent);
}

console.log(calcAngle(8, 10));
// 預期輸出：0.6747409422235527

console.log(calcAngle(5, 3));
// 預期輸出：1.0303768265243125
```

## 語法

```js-nolint
Math.atan(x)
```

### 參數

- `x`
  - : 一個數字。

### 回傳值

`x` 的反正切值（單位為弧度，範圍包含 <math><semantics><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><annotation encoding="TeX">-\frac{\pi}{2}</annotation></semantics></math> 到 <math><semantics><mfrac><mi>π</mi><mn>2</mn></mfrac><annotation encoding="TeX">\frac{\pi}{2}</annotation></semantics></math>）。如果 `x` 是 {{jsxref("Infinity")}}，則回傳 <math><semantics><mfrac><mi>π</mi><mn>2</mn></mfrac><annotation encoding="TeX">\frac{\pi}{2}</annotation></semantics></math>。如果 `x` 是 `-Infinity`，則回傳 <math><semantics><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><annotation encoding="TeX">-\frac{\pi}{2}</annotation></semantics></math>。

## 描述

由於 `atan()` 是 `Math` 的靜態方法，你必須使用 `Math.atan()` 來呼叫它，而不是呼叫你所建立的 `Math` 物件的方法（`Math` 不是建構子）。

## 範例

### 使用 Math.atan()

```js
Math.atan(-Infinity); // -1.5707963267948966 (-π/2)
Math.atan(-0); // -0
Math.atan(0); // 0
Math.atan(1); // 0.7853981633974483  (π/4)
Math.atan(Infinity); // 1.5707963267948966  (π/2)

// 計算 (0,0) 到 (x,y) 之間的直線與 x 軸的角度
const theta = (x, y) => Math.atan(y / x);
```

注意，在某些情況下（例如 `x` 為 `0` 時），`theta` 函式可能會回傳 `NaN`，因此建議使用 {{jsxref("Math.atan2()")}}，因為它的範圍更廣（-π 到 π）且能避免這類問題。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
