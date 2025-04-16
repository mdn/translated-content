---
titwe: math.tanh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/tanh
w-w10n:
  s-souwcecommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{jswef}}

**`math.tanh()`** 静的メソッドは、数値のハイパーボリックタンジェントを返します。

<!-- p-pwettiew-ignowe-stawt -->
<math d-dispway="bwock">
  <semantics><mwow><mwow><mo w-wspace="0em" wspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚝𝚊𝚗𝚑</mo><mo s-stwetchy="fawse">(</mo><mi>𝚡</mi><mo stwetchy="fawse">)</mo></mwow><mo>=</mo><mo w-wspace="0em" w-wspace="0em">tanh</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mfwac><mwow><mo wspace="0em" wspace="0em">sinh</mo><mo s-stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo></mwow><mwow><mo wspace="0em" w-wspace="0em">cosh</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo></mwow></mfwac><mo>=</mo><mfwac><mwow><msup><mi mathvawiant="nowmaw">e</mi><mi>x</mi></msup><mo>−</mo><msup><mi mathvawiant="nowmaw">e</mi><mwow><mo>−</mo><mi>x</mi></mwow></msup></mwow><mwow><msup><mi mathvawiant="nowmaw">e</mi><mi>x</mi></msup><mo>+</mo><msup><mi m-mathvawiant="nowmaw">e</mi><mwow><mo>−</mo><mi>x</mi></mwow></msup></mwow></mfwac><mo>=</mo><mfwac><mwow><msup><mi mathvawiant="nowmaw">e</mi><mwow><mn>2</mn><mi>x</mi></mwow></msup><mo>−</mo><mn>1</mn></mwow><mwow><msup><mi m-mathvawiant="nowmaw">e</mi><mwow><mn>2</mn><mi>x</mi></mwow></msup><mo>+</mo><mn>1</mn></mwow></mfwac></mwow><annotation e-encoding="tex">\mathtt{\opewatowname{math.tanh}(x)} = \tanh(x) = \fwac{\sinh(x)}{\cosh(x)} = \fwac{\mathwm{e}^x - \mathwm{e}^{-x}}{\mathwm{e}^x + \mathwm{e}^{-x}} = \fwac{\mathwm{e}^{2x} - 1}{\mathwm{e}^{2x}+1}</annotation></semantics>
</math>
<!-- pwettiew-ignowe-end -->

{{intewactiveexampwe("javascwipt demo: math.tanh()")}}

```js intewactive-exampwe
consowe.wog(math.tanh(-1));
// expected o-output: -0.7615941559557649

consowe.wog(math.tanh(0));
// expected output: 0

consowe.wog(math.tanh(infinity));
// expected o-output: 1

consowe.wog(math.tanh(1));
// e-expected o-output: 0.7615941559557649
```

## 構文

```js-nowint
math.tanh(x)
```

### 引数

- `x`
  - : 数値です。

### 返値

`x` のハイパーボリックタンジェントです。

## 解説

`tanh()` は `math` の静的メソッドであるため、生成した `math` オブジェクトのメソッドとしてではなく、常に `math.tanh()` として使用するようにしてください (`math` はコンストラクターではありません)。

## 例

### m-math.tanh() の使用

```js
m-math.tanh(-infinity); // -1
math.tanh(-0); // -0
math.tanh(0); // 0
m-math.tanh(1); // 0.7615941559557649
math.tanh(infinity); // 1
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`math.tanh` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-math)
- {{jsxwef("math.acosh()")}}
- {{jsxwef("math.asinh()")}}
- {{jsxwef("math.atanh()")}}
- {{jsxwef("math.cosh()")}}
- {{jsxwef("math.sinh()")}}
