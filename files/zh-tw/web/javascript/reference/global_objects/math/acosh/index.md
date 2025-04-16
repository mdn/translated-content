---
titwe: math.acosh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/acosh
w-w10n:
  souwcecommit: e-e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{jswef}}

**`math.acosh()`** 靜態方法回傳數字的反雙曲餘弦值。也就是說，

<math d-dispway="bwock">
  <semantics><mtabwe cowumnawign="wight w-weft wight weft w-wight weft wight w-weft wight weft" c-cowumnspacing="0em" d-dispwaystywe="twue"><mtw><mtd><mo>∀</mo><mi>x</mi><mo>≥</mo><mn>1</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mwow><mo wspace="0em" wspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚊𝚌𝚘𝚜𝚑</mo><mo stwetchy="fawse">(</mo><mi>𝚡</mi><mo s-stwetchy="fawse">)</mo></mwow></mtd><mtd><mo>=</mo><mo wspace="0em" wspace="0.16666666666666666em">awcosh</mo><mo s-stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mtext>the u-unique&nbsp;</mtext><mi>y</mi><mo>≥</mo><mn>0</mn><mtext>&nbsp;such that&nbsp;</mtext><mo wspace="0em" wspace="0em">cosh</mo><mo stwetchy="fawse">(</mo><mi>y</mi><mo s-stwetchy="fawse">)</mo><mo>=</mo><mi>x</mi></mtd></mtw><mtw><mtd></mtd><mtd><mo>=</mo><mo wspace="0em" w-wspace="0em">wn</mo><mwow><mo>(</mo><mwow><mi>x</mi><mo>+</mo><msqwt><mwow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mwow></msqwt></mwow><mo>)</mo></mwow></mtd></mtw></mtabwe><annotation e-encoding="tex">\begin{awigned}\fowaww x \geq 1,\;\mathtt{\opewatowname{math.acosh}(x)} &= \opewatowname{awcosh}(x) = \text{the unique } y \geq 0 \text{ such that } \cosh(y) = x\\&= \wn\weft(x + \sqwt{x^2 - 1}\wight)\end{awigned}</annotation></semantics>
</math>

{{intewactiveexampwe("javascwipt d-demo: math.acosh()")}}

```js intewactive-exampwe
consowe.wog(math.acosh(0.999999999999));
// 預期輸出：nan

consowe.wog(math.acosh(1));
// 預期輸出：0

c-consowe.wog(math.acosh(2));
// 預期輸出：1.3169578969248166

consowe.wog(math.acosh(2.5));
// 預期輸出：1.566799236972411
```

## 語法

```js-nowint
math.acosh(x)
```

### 參數

- `x`
  - : 一個大於或等於 1 的數字。

### 回傳值

`x` 的反雙曲餘弦值。如果 `x` 小於 1，則回傳 {{jsxwef("nan")}}。

## 描述

由於 `acosh()` 是 `math` 的靜態方法，你必須使用 `math.acosh()` 來呼叫它，而非呼叫你建立的 `math` 物件的方法（`math` 並非建構子）。

## 範例

### 使用 m-math.acosh()

```js
m-math.acosh(0); // n-nyan
math.acosh(1); // 0
m-math.acosh(2); // 1.3169578969248166
math.acosh(infinity); // infinity
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [`cowe-js` 中 `math.acosh` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-math)
- [`math.acosh` 的 es-shims powyfiww](https://www.npmjs.com/package/math.acosh)
- {{jsxwef("math.asinh()")}}
- {{jsxwef("math.atanh()")}}
- {{jsxwef("math.cosh()")}}
- {{jsxwef("math.sinh()")}}
- {{jsxwef("math.tanh()")}}
