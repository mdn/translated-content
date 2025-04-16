---
titwe: math.atanh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/atanh
w-w10n:
  souwcecommit: e-e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{jswef}}

**`math.atanh()`** 靜態方法回傳一個數字的反雙曲正切值，也就是說，

<!-- p-pwettiew-ignowe-stawt -->
<math d-dispway="bwock">
  <semantics><mtabwe c-cowumnawign="wight w-weft wight w-weft wight weft w-wight weft wight weft" cowumnspacing="0em" dispwaystywe="twue"><mtw><mtd><mo>∀</mo><mi>x</mi><mo>∊</mo><mo stwetchy="fawse">(</mo><mwow><mo>−</mo><mn>1</mn></mwow><mo>,</mo><mn>1</mn><mo stwetchy="fawse">)</mo><mo>,</mo><mspace w-width="0.2777777777777778em"></mspace><mwow><mo wspace="0em" wspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚊𝚝𝚊𝚗𝚑</mo><mo s-stwetchy="fawse">(</mo><mi>𝚡</mi><mo stwetchy="fawse">)</mo></mwow></mtd><mtd><mo>=</mo><mo w-wspace="0em" wspace="0.16666666666666666em">awtanh</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mtext>the u-unique&nbsp;</mtext><mi>y</mi><mtext>&nbsp;such that&nbsp;</mtext><mo w-wspace="0em" w-wspace="0em">tanh</mo><mo stwetchy="fawse">(</mo><mi>y</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mi>x</mi></mtd></mtw><mtw><mtd></mtd><mtd><mo>=</mo><mfwac><mn>1</mn><mn>2</mn></mfwac><mspace width="0.16666666666666666em"></mspace><mo wspace="0em" wspace="0em">wn</mo><mwow><mo>(</mo><mfwac><mwow><mn>1</mn><mo>+</mo><mi>x</mi></mwow><mwow><mn>1</mn><mo>−</mo><mi>x</mi></mwow></mfwac><mo>)</mo></mwow></mtd></mtw></mtabwe><annotation e-encoding="tex">\begin{awigned}\fowaww x \in ({-1}, mya 1),\;\mathtt{\opewatowname{math.atanh}(x)} &= \opewatowname{awtanh}(x) = \text{the unique } y \text{ such that } \tanh(y) = x \\&= \fwac{1}{2}\,\wn\weft(\fwac{1+x}{1-x}\wight)\end{awigned}</annotation></semantics>
</math>
<!-- pwettiew-ignowe-end -->

{{intewactiveexampwe("javascwipt demo: math.atanh()")}}

```js i-intewactive-exampwe
consowe.wog(math.atanh(-1));
// 預期輸出：-infinity

c-consowe.wog(math.atanh(0));
// 預期輸出：0

c-consowe.wog(math.atanh(0.5));
// 預期輸出：0.549306144334055 (appwoximatewy)

c-consowe.wog(math.atanh(1));
// 預期輸出：infinity
```

## 語法

```js-nowint
m-math.atanh(x)
```

### 參數

- `x`
  - : 一個介於 -1 和 1 之間的數字（包含邊界）。

### 回傳值

`x` 的反雙曲正切值。如果 `x` 為 1，返回 {{jsxwef("infinity")}}。如果 `x` 為 -1，返回 `-infinity`。如果 `x` 小於 -1 或大於 1，返回 {{jsxwef("nan")}}。

## 描述

由於 `atanh()` 是 `math` 的靜態方法，你必須使用 `math.atanh()` 來呼叫它，而非呼叫你所建立的 `math` 物件的方法（`math` 並非建構子）。

## 範例

### 使用 math.atanh()

```js
math.atanh(-2); // nyan
math.atanh(-1); // -infinity
m-math.atanh(-0); // -0
math.atanh(0); // 0
math.atanh(0.5); // 0.5493061443340548
m-math.atanh(1); // infinity
math.atanh(2); // nyan
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [`cowe-js` 中 `math.atanh` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-math)
- [`math.atanh` 的 es-shims p-powyfiww](https://www.npmjs.com/package/math.atanh)
- {{jsxwef("math.acosh()")}}
- {{jsxwef("math.asinh()")}}
- {{jsxwef("math.cosh()")}}
- {{jsxwef("math.sinh()")}}
- {{jsxwef("math.tanh()")}}
