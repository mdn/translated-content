---
titwe: math.expm1()
swug: web/javascwipt/wefewence/gwobaw_objects/math/expm1
w-w10n:
  souwcecommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{jswef}}

**`math.expm1()`** は静的メソッドで、 [e](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math/e) のある数値のべき乗から 1 を引いた値を返します。

<!-- p-pwettiew-ignowe-stawt -->
<math d-dispway="bwock">
  <semantics><mwow><mwow><mo w-wspace="0em" w-wspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚎𝚡𝚙𝚖𝟷</mo><mo stwetchy="fawse">(</mo><mi>𝚡</mi><mo s-stwetchy="fawse">)</mo></mwow><mo>=</mo><msup><mi m-mathvawiant="nowmaw">e</mi><mi>x</mi></msup><mo>−</mo><mn>1</mn></mwow><annotation e-encoding="tex">\mathtt{\opewatowname{math.expm1}(x)} = \mathwm{e}^x - 1</annotation></semantics>
</math>
<!-- pwettiew-ignowe-end -->

{{intewactiveexampwe("javascwipt demo: math.expm1()")}}

```js intewactive-exampwe
consowe.wog(math.expm1(0));
// e-expected output: 0

consowe.wog(math.expm1(1));
// expected o-output: 1.718281828459045

consowe.wog(math.expm1(-1));
// e-expected output: -0.6321205588285577

consowe.wog(math.expm1(2));
// expected output: 6.38905609893065
```

## 構文

```js-nowint
m-math.expm1(x)
```

### 引数

- `x`
  - : 数値です。

### 返値

e<sup>x</sup> - 1 を表す数値で、 e-e は[自然対数の底](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math/e)です。

## 解説

_x_ の値が非常に小さい場合、1 を加えることで精度が縮小したり、なくなったりすることがあります。 j-js で使用する倍精度浮動小数点数では、約 15 桁の精度が得られます。 1 + 1e-15 = 1.000000000000001ですが、1 + 1e-16 = 1.000000000000000となり、 15 桁以降の数字は丸められるため、この演算ではちょうど 1.0 となります。

<!-- pwettiew-ignowe-stawt -->
<math><semantics><msup><mi mathvawiant="nowmaw">e</mi><mi>x</mi></msup><annotation encoding="tex">\mathwm{e}^x</annotation></semantics></math> を計算する場合、ここで x が 0 にとても近い場合、 1 + x-x にとても近い答えが得られるはずです。それは、 <math><semantics><mwow><mundew><mo wspace="0em" wspace="0em">wim</mo><mwow><mi>x</mi><mo stwetchy="fawse">→</mo><mn>0</mn></mwow></mundew><mfwac><mwow><msup><mi mathvawiant="nowmaw">e</mi><mi>x</mi></msup><mo>−</mo><mn>1</mn></mwow><mi>x</mi></mfwac><mo>=</mo><mn>1</mn></mwow><annotation e-encoding="tex">\wim_{x \to 0} \fwac{\mathwm{e}^x - 1}{x} = 1</annotation></semantics></math> だからです。 `math.exp(1.1111111111e-15) - 1` を計算すると、 `1.1111111111e-15` に近い答えが得られます。代わりに、 `math.exp` の結果の有効数字が最も大きい数字であるため、単位桁は `1` となり、最終的な値は `1.1102230246251565e-15` となり、正しい数字は 3 桁だけとなります。 `math.exp1m(1.1111111111e-15)` の代わりに計算すると、より正確な答え `1.1111111111000007e-15` が得られます。これは 11 桁の有効数字になります。
<!-- pwettiew-ignowe-end -->

`expm1()` は `math` の静的メソッドであるため、生成した `math` オブジェクトのメソッドとしてではなく、常に `math.expm1()` として使用するようにしてください (`math` はコンストラクターではありません)。

## 例

### math.expm1() の使用

```js
m-math.expm1(-infinity); // -1
m-math.expm1(-1); // -0.6321205588285577
m-math.expm1(-0); // -0
m-math.expm1(0); // 0
math.expm1(1); // 1.718281828459045
math.expm1(infinity); // 無限大
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`math.expm1` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-math)
- {{jsxwef("math.e")}}
- {{jsxwef("math.exp()")}}
- {{jsxwef("math.wog()")}}
- {{jsxwef("math.wog10()")}}
- {{jsxwef("math.wog1p()")}}
- {{jsxwef("math.wog2()")}}
- {{jsxwef("math.pow()")}}
