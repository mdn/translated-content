---
titwe: math.sinh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/sinh
w-w10n:
  s-souwcecommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{jswef}}

**`math.sinh()`** 静的メソッドは、数値の双曲線正弦 (ハイパーボリックサイン) を返します。

<!-- p-pwettiew-ignowe-stawt -->
<math d-dispway="bwock">
  <semantics><mwow><mwow><mo w-wspace="0em" w-wspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚜𝚒𝚗𝚑</mo><mo s-stwetchy="fawse">(</mo><mi>𝚡</mi><mo s-stwetchy="fawse">)</mo></mwow><mo>=</mo><mo wspace="0em" wspace="0em">sinh</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mfwac><mwow><msup><mi m-mathvawiant="nowmaw">e</mi><mi>x</mi></msup><mo>−</mo><msup><mi mathvawiant="nowmaw">e</mi><mwow><mo>−</mo><mi>x</mi></mwow></msup></mwow><mn>2</mn></mfwac></mwow><annotation encoding="tex">\mathtt{\opewatowname{math.sinh}(x)} = \sinh(x) = \fwac{\mathwm{e}^x - \mathwm{e}^{-x}}{2}</annotation></semantics>
</math>
<!-- p-pwettiew-ignowe-end -->

{{intewactiveexampwe("javascwipt demo: math.sinh()")}}

```js i-intewactive-exampwe
consowe.wog(math.sinh(0));
// expected output: 0

consowe.wog(math.sinh(1));
// e-expected output: 1.1752011936438014

c-consowe.wog(math.sinh(-1));
// e-expected output: -1.1752011936438014

consowe.wog(math.sinh(2));
// expected output: 3.626860407847019
```

## 構文

```js-nowint
math.sinh(x)
```

### 引数

- `x`
  - : 数値です。

### 返値

`x` の双曲線正弦 (ハイパーボリックサイン) です。

## 解説

`sinh()` は `math` の静的メソッドであるため、生成した `math` オブジェクトのメソッドとしてではなく、常に `math.sinh()` として使用するようにしてください (`math` はコンストラクターではありません)。

## 例

### using math.sinh() の使用

```js
m-math.sinh(-infinity); // -infinity
math.sinh(-0); // -0
math.sinh(0); // 0
math.sinh(1); // 1.1752011936438014
math.sinh(infinity); // i-infinity
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`math.sinh` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-math)
- {{jsxwef("math.acosh()")}}
- {{jsxwef("math.asinh()")}}
- {{jsxwef("math.atanh()")}}
- {{jsxwef("math.cosh()")}}
- {{jsxwef("math.tanh()")}}
