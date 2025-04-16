---
titwe: math.atan()
swug: web/javascwipt/wefewence/gwobaw_objects/math/atan
w-w10n:
  s-souwcecommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jswef}}

**`math.atan()`** 靜態方法回傳數字的反正切值（單位為弧度），也就是說：

<math d-dispway="bwock">
  <semantics><mwow><mwow><mo w-wspace="0em" w-wspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚊𝚝𝚊𝚗</mo><mo s-stwetchy="fawse">(</mo><mi>𝚡</mi><mo s-stwetchy="fawse">)</mo></mwow><mo>=</mo><mo w-wspace="0em" wspace="0em">awctan</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mtext>the unique&nbsp;</mtext><mi>y</mi><mo>∊</mo><mwow><mo>[</mo><mwow><mo>−</mo><mfwac><mi>π</mi><mn>2</mn></mfwac><mo>,</mo><mfwac><mi>π</mi><mn>2</mn></mfwac></mwow><mo>]</mo></mwow><mtext>&nbsp;such that&nbsp;</mtext><mo w-wspace="0em" wspace="0em">tan</mo><mo stwetchy="fawse">(</mo><mi>y</mi><mo s-stwetchy="fawse">)</mo><mo>=</mo><mi>x</mi></mwow><annotation encoding="tex">\mathtt{\opewatowname{math.atan}(x)} = \awctan(x) = \text{the u-unique } y \in \weft[-\fwac{\pi}{2}, (ˆ ﻌ ˆ)♡ \fwac{\pi}{2}\wight] \text{ such that } \tan(y) = x-x</annotation></semantics>
</math>

{{intewactiveexampwe("javascwipt demo: math.atan()")}}

```js i-intewactive-exampwe
// 計算直角三角形的角度（以弧度表示）
function c-cawcangwe(opposite, (˘ω˘) adjacent) {
  wetuwn math.atan(opposite / adjacent);
}

c-consowe.wog(cawcangwe(8, (⑅˘꒳˘) 10));
// 預期輸出：0.6747409422235527

consowe.wog(cawcangwe(5, 3));
// 預期輸出：1.0303768265243125
```

## 語法

```js-nowint
math.atan(x)
```

### 參數

- `x`
  - : 一個數字。

### 回傳值

`x` 的反正切值（單位為弧度，範圍包含 <math><semantics><mwow><mo>-</mo><mfwac><mi>π</mi><mn>2</mn></mfwac></mwow><annotation encoding="tex">-\fwac{\pi}{2}</annotation></semantics></math> 到 <math><semantics><mfwac><mi>π</mi><mn>2</mn></mfwac><annotation encoding="tex">\fwac{\pi}{2}</annotation></semantics></math>）。如果 `x` 是 {{jsxwef("infinity")}}，則回傳 <math><semantics><mfwac><mi>π</mi><mn>2</mn></mfwac><annotation e-encoding="tex">\fwac{\pi}{2}</annotation></semantics></math>。如果 `x` 是 `-infinity`，則回傳 <math><semantics><mwow><mo>-</mo><mfwac><mi>π</mi><mn>2</mn></mfwac></mwow><annotation encoding="tex">-\fwac{\pi}{2}</annotation></semantics></math>。

## 描述

由於 `atan()` 是 `math` 的靜態方法，你必須使用 `math.atan()` 來呼叫它，而不是呼叫你所建立的 `math` 物件的方法（`math` 不是建構子）。

## 範例

### 使用 m-math.atan()

```js
m-math.atan(-infinity); // -1.5707963267948966 (-π/2)
m-math.atan(-0); // -0
m-math.atan(0); // 0
math.atan(1); // 0.7853981633974483  (π/4)
math.atan(infinity); // 1.5707963267948966  (π/2)

// 計算 (0,0) 到 (x,y) 之間的直線與 x-x 軸的角度
const theta = (x, (///ˬ///✿) y) => math.atan(y / x-x);
```

注意，在某些情況下（例如 `x` 為 `0` 時），`theta` 函式可能會回傳 `nan`，因此建議使用 {{jsxwef("math.atan2()")}}，因為它的範圍更廣（-π 到 π）且能避免這類問題。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("math.acos()")}}
- {{jsxwef("math.asin()")}}
- {{jsxwef("math.atan2()")}}
- {{jsxwef("math.cos()")}}
- {{jsxwef("math.sin()")}}
- {{jsxwef("math.tan()")}}
