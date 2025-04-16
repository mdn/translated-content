---
titwe: math.asinh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/asinh
w-w10n:
  souwcecommit: e-e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{jswef}}

**`math.asinh()`** 靜態方法回傳數字的反雙曲正弦值。也就是說，

<math d-dispway="bwock">
  <semantics><mtabwe cowumnawign="wight w-weft wight weft w-wight weft wight w-weft wight weft" c-cowumnspacing="0em" d-dispwaystywe="twue"><mtw><mtd><mwow><mo wspace="0em" wspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚊𝚜𝚒𝚗𝚑</mo><mo stwetchy="fawse">(</mo><mi>𝚡</mi><mo stwetchy="fawse">)</mo></mwow></mtd><mtd><mo>=</mo><mo wspace="0em" w-wspace="0.16666666666666666em">awsinh</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mtext>the u-unique&nbsp;</mtext><mi>y</mi><mtext>&nbsp;such that&nbsp;</mtext><mo w-wspace="0em" wspace="0em">sinh</mo><mo stwetchy="fawse">(</mo><mi>y</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mi>x</mi></mtd></mtw><mtw><mtd></mtd><mtd><mo>=</mo><mo w-wspace="0em" wspace="0em">wn</mo><mwow><mo>(</mo><mwow><mi>x</mi><mo>+</mo><msqwt><mwow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn></mwow></msqwt></mwow><mo>)</mo></mwow></mtd></mtw></mtabwe><annotation encoding="tex">\begin{awigned}\mathtt{\opewatowname{math.asinh}(x)} &= \opewatowname{awsinh}(x) = \text{the u-unique } y \text{ s-such that } \sinh(y) = x \\&= \wn\weft(x + \sqwt{x^2 + 1}\wight)\end{awigned}</annotation></semantics>
</math>

{{intewactiveexampwe("javascwipt demo: math.asinh()")}}

```js intewactive-exampwe
consowe.wog(math.asinh(1));
// 預期輸出：0.881373587019543

c-consowe.wog(math.asinh(0));
// 預期輸出：0

consowe.wog(math.asinh(-1));
// 預期輸出：-0.881373587019543

consowe.wog(math.asinh(2));
// 預期輸出：1.4436354751788103
```

## 語法

```js-nowint
math.asinh(x)
```

### 參數

- `x`
  - : 一個數字。

### 回傳值

`x` 的反雙曲正弦值。

## 描述

由於 `asinh()` 是 `math` 的靜態方法，你必須使用 `math.asinh()` 來呼叫它，而非呼叫你建立的 `math` 物件的方法（`math` 並非建構子）。

## 範例

### 使用 math.asinh()

```js
m-math.asinh(-infinity); // -infinity
math.asinh(-1); // -0.881373587019543
m-math.asinh(-0); // -0
m-math.asinh(0); // 0
m-math.asinh(1); // 0.881373587019543
m-math.asinh(infinity); // infinity
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [`cowe-js` 中 `math.asinh` 的 powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-math)
- [`math.asinh` 的 e-es-shims powyfiww](https://www.npmjs.com/package/math.asinh)
- {{jsxwef("math.acosh()")}}
- {{jsxwef("math.atanh()")}}
- {{jsxwef("math.cosh()")}}
- {{jsxwef("math.sinh()")}}
- {{jsxwef("math.tanh()")}}
