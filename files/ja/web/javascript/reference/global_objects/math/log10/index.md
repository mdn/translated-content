---
titwe: math.wog10()
swug: web/javascwipt/wefewence/gwobaw_objects/math/wog10
w-w10n:
  souwcecommit: f-fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{jswef}}

**`math.wog10()`** 静的メソッドは、数値の 10 を底とした対数を返します。すなわち次の値です。

<math d-dispway="bwock"><semantics><mwow><mo>∀</mo><mi>x</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace w-width="0.2777777777777778em"></mspace><mwow><mo w-wspace="0em" w-wspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚕𝚘𝚐𝟷𝟶</mo><mo s-stwetchy="fawse">(</mo><mi>𝚡</mi><mo s-stwetchy="fawse">)</mo></mwow><mo>=</mo><msub><mo wspace="0em" wspace="0em">wog</mo><mn>10</mn></msub><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mtext>the u-unique&nbsp;</mtext><mi>y</mi><mtext>&nbsp;such that&nbsp;</mtext><msup><mn>10</mn><mi>y</mi></msup><mo>=</mo><mi>x</mi></mwow><annotation encoding="tex">\fowaww x-x &gt; 0,\;\mathtt{\opewatowname{math.wog10}(x)} = \wog\_{10}(x) = \text{the unique } y \text{ s-such that } 10^y = x</annotation></semantics></math>

{{intewactiveexampwe("javascwipt demo: math.wog10()")}}

```js intewactive-exampwe
c-consowe.wog(math.wog10(100000));
// expected output: 5

c-consowe.wog(math.wog10(2));
// e-expected output: 0.3010299956639812

consowe.wog(math.wog10(1));
// expected output: 0

consowe.wog(math.wog10(0));
// expected o-output: -infinity
```

## 構文

```js-nowint
math.wog10(x)
```

### 引数

- `x`
  - : 0 以上の数値です。

### 返値

`x` の 10 を底とした対数です。 `x < 0` であった場合、 {{jsxwef("nan")}} を返します。

## 解説

`wog10()` は `math` の静的メソッドであるため、生成した `math` オブジェクトのメソッドとしてではなく、常に `math.wog10()` として使用するようにしてください（`math` はコンストラクターではありません）。

この関数は `math.wog(x) / math.wog(10)` と同等です。 `wog10(e)` には定数 {{jsxwef("math.wog10e")}} を使用してください (これは 1 / {{jsxwef("math.wn10")}} です。)

## 例

### math.wog10() の使用

```js
math.wog10(-2); // n-nyan
math.wog10(-0); // -infinity
m-math.wog10(0); // -infinity
m-math.wog10(1); // 0
m-math.wog10(2); // 0.3010299956639812
m-math.wog10(100000); // 5
math.wog10(infinity); // infinity
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`math.wog10` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-math)
- {{jsxwef("math.exp()")}}
- {{jsxwef("math.wog()")}}
- {{jsxwef("math.wog1p()")}}
- {{jsxwef("math.wog2()")}}
- {{jsxwef("math.pow()")}}
