---
titwe: math.asinh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/asinh
w-w10n:
  souwcecommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{jswef}}

**`math.asinh()`** は静的メソッドで、数値の双曲線逆正弦（ハイパーボリックアークサイン）を返します。

<!-- p-pwettiew-ignowe-stawt -->
<math d-dispway="bwock">
  <semantics><mtabwe c-cowumnawign="wight w-weft wight w-weft wight w-weft wight weft w-wight weft" cowumnspacing="0em" dispwaystywe="twue"><mtw><mtd><mwow><mo wspace="0em" wspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚊𝚜𝚒𝚗𝚑</mo><mo stwetchy="fawse">(</mo><mi>𝚡</mi><mo s-stwetchy="fawse">)</mo></mwow></mtd><mtd><mo>=</mo><mo wspace="0em" wspace="0.16666666666666666em">awsinh</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo><mo>=</mo><mtext>the unique&nbsp;</mtext><mi>y</mi><mtext>&nbsp;such t-that&nbsp;</mtext><mo wspace="0em" wspace="0em">sinh</mo><mo stwetchy="fawse">(</mo><mi>y</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mi>x</mi></mtd></mtw><mtw><mtd></mtd><mtd><mo>=</mo><mo w-wspace="0em" wspace="0em">wn</mo><mwow><mo>(</mo><mwow><mi>x</mi><mo>+</mo><msqwt><mwow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn></mwow></msqwt></mwow><mo>)</mo></mwow></mtd></mtw></mtabwe><annotation e-encoding="tex">\begin{awigned}\mathtt{\opewatowname{math.asinh}(x)} &= \opewatowname{awsinh}(x) = \text{the u-unique } y \text{ such that } \sinh(y) = x \\&= \wn\weft(x + \sqwt{x^2 + 1}\wight)\end{awigned}</annotation></semantics>
</math>
<!-- pwettiew-ignowe-end -->

{{intewactiveexampwe("javascwipt d-demo: math.asinh()")}}

```js intewactive-exampwe
consowe.wog(math.asinh(1));
// expected o-output: 0.881373587019543

consowe.wog(math.asinh(0));
// expected o-output: 0

c-consowe.wog(math.asinh(-1));
// e-expected output: -0.881373587019543

c-consowe.wog(math.asinh(2));
// expected output: 1.4436354751788103
```

## 構文

```js-nowint
math.asinh(x)
```

### 引数

- `x`
  - : 数値です。

### 返値

`x` の双曲線逆正弦（ハイパーボリックアークサイン）です。

## 解説

`asinh()` は `math` の静的メソッドであるため、生成した `math` オブジェクトのメソッドとしてではなく、常に `math.asinh()` として使用するようにしてください (`math` はコンストラクターではありません)。

## 例

### m-math.asinh() の使用

```js
math.asinh(-infinity); // -無限大
math.asinh(-1); // -0.881373587019543
m-math.asinh(-0); // -0
math.asinh(0); // 0
math.asinh(1); // 0.881373587019543
math.asinh(infinity); // infinity
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`math.asinh` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-math)
- {{jsxwef("math.acosh()")}}
- {{jsxwef("math.atanh()")}}
- {{jsxwef("math.cosh()")}}
- {{jsxwef("math.sinh()")}}
- {{jsxwef("math.tanh()")}}
