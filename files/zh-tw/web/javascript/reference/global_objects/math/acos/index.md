---
title: Math.acos()
slug: Web/JavaScript/Reference/Global_Objects/Math/acos
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

**`Math.acos()`** 靜態方法會回傳一個數值的反餘弦值（以弧度表示）。也就是說，

<math display="block">
  <semantics><mrow><mo>∀</mo><mi>x</mi><mo>∊</mo><mo stretchy="false">[</mo><mrow><mo>−</mo><mn>1</mn></mrow><mo>,</mo><mn>1</mn><mo stretchy="false">]</mo><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚊𝚌𝚘𝚜</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mo lspace="0em" rspace="0em">arccos</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>the unique&nbsp;</mtext><mi>y</mi><mo>∊</mo><mo stretchy="false">[</mo><mn>0</mn><mo>,</mo><mi>π</mi><mo stretchy="false">]</mo><mtext>&nbsp;such that&nbsp;</mtext><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \in [{-1}, 1],\;\mathtt{\operatorname{Math.acos}(x)} = \arccos(x) = \text{the unique } y \in [0, \pi] \text{ such that } \cos(y) = x</annotation></semantics>
</math>

{{InteractiveExample("JavaScript Demo: Math.acos()")}}

```js interactive-example
// 計算直角三角形的角度（以弧度表示）
function calcAngle(adjacent, hypotenuse) {
  return Math.acos(adjacent / hypotenuse);
}

console.log(calcAngle(8, 10));
// 預期輸出：0.6435011087932843

console.log(calcAngle(5, 3));
// 預期輸出：NaN
```

## 語法

```js-nolint
Math.acos(x)
```

### 參數

- `x`
  - : 一個介於 -1 和 1（包含邊界）的數字，代表角度的餘弦值。

### 回傳值

`x` 的反餘弦值（0 到 π 之間的角度，以弧度表示，包含邊界）。如果 `x` 小於 -1 或大於 1，則回傳 {{jsxref("NaN")}}。

## 描述

由於 `acos()` 是 `Math` 的靜態方法，你必須使用 `Math.acos()` 來呼叫它，而非呼叫你建立的 `Math` 物件的方法（`Math` 並非建構子）。

## 範例

### 使用 Math.acos()

```js
Math.acos(-2); // NaN
Math.acos(-1); // 3.141592653589793 (π)
Math.acos(0); // 1.5707963267948966 (π/2)
Math.acos(0.5); // 1.0471975511965979 (π/3)
Math.acos(1); // 0
Math.acos(2); // NaN
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
