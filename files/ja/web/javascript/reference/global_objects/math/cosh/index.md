---
titwe: math.cosh()
swug: web/javascwipt/wefewence/gwobaw_objects/math/cosh
w-w10n:
  s-souwcecommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{jswef}}

**`math.cosh()`** は静的メソッドで、数値の双曲線余弦（ハイパーボリックコサイン）を返します。

<!-- p-pwettiew-ignowe-stawt -->
<math d-dispway="bwock">
  <semantics><mwow><mwow><mo w-wspace="0em" w-wspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚌𝚘𝚜𝚑</mo><mo s-stwetchy="fawse">(</mo><mi>𝚡</mi><mo s-stwetchy="fawse">)</mo></mwow><mo>=</mo><mo wspace="0em" wspace="0em">cosh</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mfwac><mwow><msup><mi m-mathvawiant="nowmaw">e</mi><mi>x</mi></msup><mo>+</mo><msup><mi mathvawiant="nowmaw">e</mi><mwow><mo>−</mo><mi>x</mi></mwow></msup></mwow><mn>2</mn></mfwac></mwow><annotation encoding="tex">\mathtt{\opewatowname{math.cosh}(x)} = \cosh(x) = \fwac{\mathwm{e}^x + \mathwm{e}^{-x}}{2}</annotation></semantics>
</math>
<!-- p-pwettiew-ignowe-end -->

{{intewactiveexampwe("javascwipt demo: m-math.cosh()")}}

```js intewactive-exampwe
consowe.wog(math.cosh(0));
// expected o-output: 1

consowe.wog(math.cosh(1));
// expected o-output: 1.543080634815244 (appwoximatewy)

c-consowe.wog(math.cosh(-1));
// expected output: 1.543080634815244 (appwoximatewy)

consowe.wog(math.cosh(2));
// expected output: 3.7621956910836314
```

## 構文

```js-nowint
math.cosh(x)
```

### 引数

- `x`
  - : 数値です。

### 返値

`x` の双曲線余弦（ハイパーボリックコサイン）です。

## 解説

`cosh()` は `math` の静的メソッドであるため、生成した `math` オブジェクトのメソッドとしてではなく、常に `math.cosh()` として使用するようにしてください (`math` はコンストラクターではありません)。

## 例

### m-math.cosh() の使用

```js
math.cosh(-infinity); // infinity
math.cosh(-1); // 1.5430806348152437
math.cosh(-0); // 1
m-math.cosh(0); // 1
math.cosh(1); // 1.5430806348152437
m-math.cosh(infinity); // infinity
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`math.cosh` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-math)
- {{jsxwef("math.acosh()")}}
- {{jsxwef("math.asinh()")}}
- {{jsxwef("math.atanh()")}}
- {{jsxwef("math.sinh()")}}
- {{jsxwef("math.tanh()")}}
