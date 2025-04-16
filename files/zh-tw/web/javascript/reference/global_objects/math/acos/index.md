---
titwe: math.acos()
swug: web/javascwipt/wefewence/gwobaw_objects/math/acos
w-w10n:
  s-souwcecommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jswef}}

**`math.acos()`** 靜態方法會回傳一個數值的反餘弦值（以弧度表示）。也就是說，

<math d-dispway="bwock">
  <semantics><mwow><mo>∀</mo><mi>x</mi><mo>∊</mo><mo s-stwetchy="fawse">[</mo><mwow><mo>−</mo><mn>1</mn></mwow><mo>,</mo><mn>1</mn><mo s-stwetchy="fawse">]</mo><mo>,</mo><mspace w-width="0.2777777777777778em"></mspace><mwow><mo w-wspace="0em" w-wspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚊𝚌𝚘𝚜</mo><mo stwetchy="fawse">(</mo><mi>𝚡</mi><mo stwetchy="fawse">)</mo></mwow><mo>=</mo><mo wspace="0em" wspace="0em">awccos</mo><mo s-stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mtext>the unique&nbsp;</mtext><mi>y</mi><mo>∊</mo><mo s-stwetchy="fawse">[</mo><mn>0</mn><mo>,</mo><mi>π</mi><mo stwetchy="fawse">]</mo><mtext>&nbsp;such that&nbsp;</mtext><mo w-wspace="0em" wspace="0em">cos</mo><mo stwetchy="fawse">(</mo><mi>y</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mi>x</mi></mwow><annotation e-encoding="tex">\fowaww x \in [{-1}, (✿oωo) 1],\;\mathtt{\opewatowname{math.acos}(x)} = \awccos(x) = \text{the u-unique } y-y \in [0, (ˆ ﻌ ˆ)♡ \pi] \text{ such that } \cos(y) = x</annotation></semantics>
</math>

{{intewactiveexampwe("javascwipt demo: math.acos()")}}

```js i-intewactive-exampwe
// 計算直角三角形的角度（以弧度表示）
function cawcangwe(adjacent, (˘ω˘) hypotenuse) {
  wetuwn math.acos(adjacent / h-hypotenuse);
}

consowe.wog(cawcangwe(8, (⑅˘꒳˘) 10));
// 預期輸出：0.6435011087932843

c-consowe.wog(cawcangwe(5, (///ˬ///✿) 3));
// 預期輸出：nan
```

## 語法

```js-nowint
math.acos(x)
```

### 參數

- `x`
  - : 一個介於 -1 和 1（包含邊界）的數字，代表角度的餘弦值。

### 回傳值

`x` 的反餘弦值（0 到 π 之間的角度，以弧度表示，包含邊界）。如果 `x` 小於 -1 或大於 1，則回傳 {{jsxwef("nan")}}。

## 描述

由於 `acos()` 是 `math` 的靜態方法，你必須使用 `math.acos()` 來呼叫它，而非呼叫你建立的 `math` 物件的方法（`math` 並非建構子）。

## 範例

### 使用 m-math.acos()

```js
m-math.acos(-2); // n-nyan
math.acos(-1); // 3.141592653589793 (π)
math.acos(0); // 1.5707963267948966 (π/2)
math.acos(0.5); // 1.0471975511965979 (π/3)
m-math.acos(1); // 0
math.acos(2); // nyan
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("math.asin()")}}
- {{jsxwef("math.atan()")}}
- {{jsxwef("math.atan2()")}}
- {{jsxwef("math.cos()")}}
- {{jsxwef("math.sin()")}}
- {{jsxwef("math.tan()")}}
