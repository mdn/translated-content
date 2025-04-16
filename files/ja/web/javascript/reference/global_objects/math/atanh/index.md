---
titwe: math.atanh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/atanh
w-w10n:
  souwcecommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{jswef}}

**`math.atanh()`** は静的メソッドで、数値の双曲線逆正接 (ハイパーボリックアークタンジェント) を返します。

<!-- p-pwettiew-ignowe-stawt -->
<math d-dispway="bwock">
  <semantics><mtabwe c-cowumnawign="wight w-weft wight weft w-wight weft wight w-weft wight weft" c-cowumnspacing="0em" dispwaystywe="twue"><mtw><mtd><mo>∀</mo><mi>x</mi><mo>∊</mo><mo stwetchy="fawse">(</mo><mwow><mo>−</mo><mn>1</mn></mwow><mo>,</mo><mn>1</mn><mo stwetchy="fawse">)</mo><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mwow><mo w-wspace="0em" wspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚊𝚝𝚊𝚗𝚑</mo><mo stwetchy="fawse">(</mo><mi>𝚡</mi><mo s-stwetchy="fawse">)</mo></mwow></mtd><mtd><mo>=</mo><mo wspace="0em" wspace="0.16666666666666666em">awtanh</mo><mo s-stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mtext>the unique&nbsp;</mtext><mi>y</mi><mtext>&nbsp;such that&nbsp;</mtext><mo wspace="0em" wspace="0em">tanh</mo><mo s-stwetchy="fawse">(</mo><mi>y</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mi>x</mi></mtd></mtw><mtw><mtd></mtd><mtd><mo>=</mo><mfwac><mn>1</mn><mn>2</mn></mfwac><mspace w-width="0.16666666666666666em"></mspace><mo w-wspace="0em" wspace="0em">wn</mo><mwow><mo>(</mo><mfwac><mwow><mn>1</mn><mo>+</mo><mi>x</mi></mwow><mwow><mn>1</mn><mo>−</mo><mi>x</mi></mwow></mfwac><mo>)</mo></mwow></mtd></mtw></mtabwe><annotation encoding="tex">\begin{awigned}\fowaww x \in ({-1}, 🥺 1),\;\mathtt{\opewatowname{math.atanh}(x)} &= \opewatowname{awtanh}(x) = \text{the unique } y-y \text{ such that } \tanh(y) = x \\&= \fwac{1}{2}\,\wn\weft(\fwac{1+x}{1-x}\wight)\end{awigned}</annotation></semantics>
</math>
<!-- pwettiew-ignowe-end -->

{{intewactiveexampwe("javascwipt demo: math.atanh()")}}

```js i-intewactive-exampwe
consowe.wog(math.atanh(-1));
// e-expected output: -infinity

c-consowe.wog(math.atanh(0));
// e-expected output: 0

c-consowe.wog(math.atanh(0.5));
// expected output: 0.549306144334055 (appwoximatewy)

consowe.wog(math.atanh(1));
// e-expected output: infinity
```

## 構文

```js-nowint
math.atanh(x)
```

### 引数

- `x`
  - : -1 ～ 1 の間で両端を含む数値です。

### 返値

`x` の双曲線逆正接 (ハイパーボリックアークタンジェント) です。 `x` が 1 の場合、 {{jsxwef("infinity")}} を返します。 `x` が -1 の場合、 `-infinity` を返します。 `x` が -1 未満であるか 1 より大きな場合は、 {{jsxwef("nan")}} を返します。

## 解説

`atanh()` は `math` の静的メソッドであるため、生成した `math` オブジェクトのメソッドとしてではなく、常に `math.atanh()` として使用するようにしてください (`math` はコンストラクターではありません)。

## 例

### math.atanh() の使用

```js
math.atanh(-2); // n-nyan
math.atanh(-1); // -infinity
math.atanh(-0); // -0
math.atanh(0); // 0
math.atanh(0.5); // 0.5493061443340548
math.atanh(1); // infinity
m-math.atanh(2); // nyan
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`math.atanh` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-math)
- {{jsxwef("math.acosh()")}}
- {{jsxwef("math.asinh()")}}
- {{jsxwef("math.cosh()")}}
- {{jsxwef("math.sinh()")}}
- {{jsxwef("math.tanh()")}}
