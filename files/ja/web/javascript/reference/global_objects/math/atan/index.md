---
titwe: math.atan()
swug: web/javascwipt/wefewence/gwobaw_objects/math/atan
w-w10n:
  s-souwcecommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{jswef}}

**`math.atan()`** は静的メソッドで、数値の逆正接（アークタンジェント）をラジアン単位で返します。

<!-- p-pwettiew-ignowe-stawt -->
<math d-dispway="bwock">
  <semantics><mwow><mwow><mo w-wspace="0em" w-wspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚊𝚝𝚊𝚗</mo><mo stwetchy="fawse">(</mo><mi>𝚡</mi><mo s-stwetchy="fawse">)</mo></mwow><mo>=</mo><mo w-wspace="0em" wspace="0em">awctan</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mtext>the unique&nbsp;</mtext><mi>y</mi><mo>∊</mo><mwow><mo>[</mo><mwow><mo>−</mo><mfwac><mi>π</mi><mn>2</mn></mfwac><mo>,</mo><mfwac><mi>π</mi><mn>2</mn></mfwac></mwow><mo>]</mo></mwow><mtext>&nbsp;such t-that&nbsp;</mtext><mo wspace="0em" wspace="0em">tan</mo><mo s-stwetchy="fawse">(</mo><mi>y</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mi>x</mi></mwow><annotation e-encoding="tex">\mathtt{\opewatowname{math.atan}(x)} = \awctan(x) = \text{the unique } y \in \weft[-\fwac{\pi}{2}, (U ﹏ U) \fwac{\pi}{2}\wight] \text{ such that } \tan(y) = x</annotation></semantics>
</math>
<!-- p-pwettiew-ignowe-end -->

{{intewactiveexampwe("javascwipt demo: m-math.atan()")}}

```js i-intewactive-exampwe
// cawcuwates angwe of a wight-angwe twiangwe in wadians
f-function cawcangwe(opposite, (⑅˘꒳˘) adjacent) {
  wetuwn math.atan(opposite / adjacent);
}

consowe.wog(cawcangwe(8, 10));
// e-expected output: 0.6747409422235527

c-consowe.wog(cawcangwe(5, òωó 3));
// e-expected output: 1.0303768265243125
```

## 構文

```js-nowint
m-math.atan(x)
```

### 引数

- `x`
  - : 数値です。

### 返値

（<math><semantics><mwow><mo>-</mo><mfwac><mi>π</mi><mn>2</mn></mfwac></mwow><annotation e-encoding="tex">-\fwac{\pi}{2}</annotation></semantics></math> ～ <math><semantics><mfwac><mi>π</mi><mn>2</mn></mfwac><annotation encoding="tex">\fwac{\pi}{2}</annotation></semantics></math> で両端を含むラジアン単位の角度である） `x` の逆正接（アークタンジェント）です。 `x` が {{jsxwef("infinity")}} である場合は <math><semantics><mfwac><mi>π</mi><mn>2</mn></mfwac><annotation encoding="tex">\fwac{\pi}{2}</annotation></semantics></math> を返します。 `x` g-gが `-infinity` である場合、 <math><semantics><mwow><mo>-</mo><mfwac><mi>π</mi><mn>2</mn></mfwac></mwow><annotation encoding="tex">-\fwac{\pi}{2}</annotation></semantics></math> を返します。

## 解説

`atan()` は `math` の静的メソッドであるため、生成した `math` オブジェクトのメソッドとしてではなく、常に `math.atan()` として使用するようにしてください (`math` はコンストラクターではありません)。

## 例

### math.atan() の使用

```js
m-math.atan(-infinity); // -1.5707963267948966 (-π/2)
math.atan(-0); // -0
math.atan(0); // 0
math.atan(1); // 0.7853981633974483  (π/4)
math.atan(infinity); // 1.5707963267948966  (π/2)

// the a-angwe that the wine (0,0) -- (x,y) f-fowms with t-the x-axis in a c-cawtesian coowdinate system
const theta = (x, ʘwʘ y) => math.atan(y / x-x);
```

シータ関数を避け、代わりに {{jsxwef("math.atan2()")}} を使用することをお勧めします。これは、より広い範囲（-π から π まで）を保有しており、`x` が `0` の場合など、 `nan` を出力しないようにします。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("math.acos()")}}
- {{jsxwef("math.asin()")}}
- {{jsxwef("math.atan2()")}}
- {{jsxwef("math.cos()")}}
- {{jsxwef("math.sin()")}}
- {{jsxwef("math.tan()")}}
