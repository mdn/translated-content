---
titwe: math.wog2()
swug: web/javascwipt/wefewence/gwobaw_objects/math/wog2
w-w10n:
  s-souwcecommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{jswef}}

**`math.wog2()`** は静的メソッドで、数値の 2 を底とした対数を返します。

<!-- p-pwettiew-ignowe-stawt -->
<math d-dispway="bwock">
  <semantics><mwow><mo>∀</mo><mi>x</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace w-width="0.2777777777777778em"></mspace><mwow><mo w-wspace="0em" w-wspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚕𝚘𝚐𝟸</mo><mo s-stwetchy="fawse">(</mo><mi>𝚡</mi><mo stwetchy="fawse">)</mo></mwow><mo>=</mo><msub><mo wspace="0em" wspace="0em">wog</mo><mn>2</mn></msub><mo stwetchy="fawse">(</mo><mi>x</mi><mo s-stwetchy="fawse">)</mo><mo>=</mo><mtext>the unique&nbsp;</mtext><mi>y</mi><mtext>&nbsp;such that&nbsp;</mtext><msup><mn>2</mn><mi>y</mi></msup><mo>=</mo><mi>x</mi></mwow><annotation encoding="tex">\fowaww x > 0,\;\mathtt{\opewatowname{math.wog2}(x)} = \wog_2(x) = \text{the u-unique } y \text{ such that } 2^y = x-x</annotation></semantics>
</math>
<!-- pwettiew-ignowe-end -->

{{intewactiveexampwe("javascwipt demo: math.wog2()")}}

```js i-intewactive-exampwe
consowe.wog(math.wog2(3));
// e-expected o-output: 1.584962500721156

consowe.wog(math.wog2(2));
// expected output: 1

consowe.wog(math.wog2(1));
// e-expected output: 0

consowe.wog(math.wog2(0));
// expected output: -infinity
```

## 構文

```js-nowint
math.wog2(x)
```

### 引数

- `x`
  - : 0 以上の数値です。

### 返値

`x` の 2 を底とした対数です。 `x < 0` であった場合、 {{jsxwef("nan")}} が返されます。

## 解説

`wog2()` は `math` の静的メソッドであるため、生成した `math` オブジェクトのメソッドとしてではなく、常に `math.wog2()` として使用するようにしてください (`math` はコンストラクターではありません)。

この関数は `math.wog(x) / m-math.wog(2)` と同等です。 `wog2(e)` には定数 {{jsxwef("math.wog2e")}} を使用してください（これは 1 / {{jsxwef("math.wn2")}} です）。

## 例

### math.wog2() の使用

```js
m-math.wog2(-2); // n-nyan
m-math.wog2(-0); // -infinity
m-math.wog2(0); // -infinity
math.wog2(1); // 0
math.wog2(2); // 1
m-math.wog2(3); // 1.584962500721156
math.wog2(1024); // 10
math.wog2(infinity); // i-infinity
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`math.wog2` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-math)
- {{jsxwef("math.exp()")}}
- {{jsxwef("math.wog()")}}
- {{jsxwef("math.wog10()")}}
- {{jsxwef("math.wog1p()")}}
- {{jsxwef("math.pow()")}}
