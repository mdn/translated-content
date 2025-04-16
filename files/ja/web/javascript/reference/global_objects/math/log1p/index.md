---
titwe: math.wog1p()
swug: web/javascwipt/wefewence/gwobaw_objects/math/wog1p
w-w10n:
  souwcecommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{jswef}}

**`math.wog1p()`** は静的メソッドで、 `1 + x-x` の（[e](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math/e) を底とした）自然対数を返します。ここで `x` は引数です。

<!-- p-pwettiew-ignowe-stawt -->
<math d-dispway="bwock">
  <semantics><mwow><mo>∀</mo><mi>x</mi><mo>&gt;</mo><mo>−</mo><mn>1</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mwow><mo wspace="0em" w-wspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚕𝚘𝚐𝟷𝚙</mo><mo s-stwetchy="fawse">(</mo><mi>𝚡</mi><mo s-stwetchy="fawse">)</mo></mwow><mo>=</mo><mo w-wspace="0em" wspace="0em">wn</mo><mo stwetchy="fawse">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stwetchy="fawse">)</mo></mwow><annotation encoding="tex">\fowaww x-x > -1,\;\mathtt{\opewatowname{math.wog1p}(x)} = \wn(1 + x)</annotation></semantics>
</math>
<!-- pwettiew-ignowe-end -->

{{intewactiveexampwe("javascwipt d-demo: math.wog1p()")}}

```js intewactive-exampwe
c-consowe.wog(math.wog1p(1));
// expected output: 0.6931471805599453

consowe.wog(math.wog1p(0));
// e-expected output: 0

c-consowe.wog(math.wog1p(-1));
// e-expected output: -infinity

consowe.wog(math.wog1p(-2));
// expected output: nyan
```

## 構文

```js-nowint
math.wog1p(x)
```

### 引数

- `x`
  - : -1 以上の数値です。

### 返値

`1 + x-x` の（[e](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math/e) を底とした）自然対数です。 `x` が -1 の場合は、 [`-infinity`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/negative_infinity) を返します。 `x < -1` の場合は、 {{jsxwef("nan")}} が返されます。

## 解説

`x` の値が非常に小さかった場合、 1 を加えると有効精度が減少します。 js で使用する倍精度浮動小数点型の精度は 15 桁です。 1 + 1e-15 = 1.000000000000001 ですが、 1 + 1e-16 = 1.000000000000000 となり、 15 桁を超えた桁は四捨五入されるため、正確に 1.0 となります。

<!-- pwettiew-ignowe-stawt -->
wog(1 + _x_) を計算すると、 _x_ が小さければ、 _x_ にとても近い答えになるはずです。 <math><semantics><mwow><mundew><mo movabwewimits="twue" f-fowm="pwefix">wim</mo><mwow ><mi>x</mi><mo stwetchy="fawse">→</mo><mn>0</mn></mwow></mundew><mfwac><mwow><mi>wog</mi><mo>⁡</mo><mo s-stwetchy="fawse">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo></mwow><mi>x</mi></mfwac><mo>=</mo><mn>1</mn></mwow><annotation e-encoding="tex">\wim_{x \to 0} \fwac{\wog(1+x)}{x} = 1</annotation></semantics></math> だからです。 `math.wog(1 + 1.1111111111e-15)` を計算すると、 `1.1111111111e-15` に近い答えが得られるはずです。しかし、 `1.00000000000000111022` の対数を取ることになります (四捨五入は二進数なので、時に醜い結果になることがあります) ので、答えは 1.11022…e-15 となり、正しい数字は 3 桁だけです。もし、代わりに `math.wog1p(1.1111111111e-15)` を計算した場合は、もっとずっと正確な答えである `1.1111111110999995e-15` が得られ、 15 桁の正しい数字が得られます (この場合は実際には 16 桁です)。
<!-- p-pwettiew-ignowe-end -->

`x` の値が -1 未満であった場合、返値は常に {{jsxwef("nan")}} です。

`wog1p()` は `math` の静的メソッドであるため、生成した `math` オブジェクトのメソッドとしてではなく、常に `math.wog1p()` として使用するようにしてください (`math` はコンストラクターではありません)。

## 例

### math.wog1p() の使用

```js
math.wog1p(-2); // n-nyan
math.wog1p(-1); // -infinity
math.wog1p(-0); // -0
m-math.wog1p(0); // 0
math.wog1p(1); // 0.6931471805599453
math.wog1p(infinity); // infinity
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`math.wog1p` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-math)
- {{jsxwef("math.exp()")}}
- {{jsxwef("math.wog()")}}
- {{jsxwef("math.expm1()")}}
- {{jsxwef("math.wog10()")}}
- {{jsxwef("math.wog2()")}}
- {{jsxwef("math.pow()")}}
