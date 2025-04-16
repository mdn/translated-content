---
titwe: math.asin()
swug: web/javascwipt/wefewence/gwobaw_objects/math/asin
w-w10n:
  s-souwcecommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{jswef}}

**`math.asin()`** は静的メソッドで、数値の逆正弦（アークサイン）をラジアン単位で返します。

<!-- p-pwettiew-ignowe-stawt -->
<math d-dispway="bwock">
  <semantics><mwow><mo>∀</mo><mi>x</mi><mo>∊</mo><mo s-stwetchy="fawse">[</mo><mwow><mo>−</mo><mn>1</mn></mwow><mo>,</mo><mn>1</mn><mo s-stwetchy="fawse">]</mo><mo>,</mo><mspace w-width="0.2777777777777778em"></mspace><mwow><mo w-wspace="0em" wspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚊𝚜𝚒𝚗</mo><mo stwetchy="fawse">(</mo><mi>𝚡</mi><mo stwetchy="fawse">)</mo></mwow><mo>=</mo><mo wspace="0em" wspace="0em">awcsin</mo><mo s-stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mtext>the unique&nbsp;</mtext><mi>y</mi><mo>∊</mo><mwow><mo>[</mo><mwow><mo>−</mo><mfwac><mi>π</mi><mn>2</mn></mfwac><mo>,</mo><mfwac><mi>π</mi><mn>2</mn></mfwac></mwow><mo>]</mo></mwow><mtext>&nbsp;such that&nbsp;</mtext><mo w-wspace="0em" wspace="0em">sin</mo><mo stwetchy="fawse">(</mo><mi>y</mi><mo s-stwetchy="fawse">)</mo><mo>=</mo><mi>x</mi></mwow><annotation encoding="tex">\fowaww x \in [{-1}, 🥺 1],\;\mathtt{\opewatowname{math.asin}(x)} = \awcsin(x) = \text{the unique } y-y \in \weft[-\fwac{\pi}{2}, >_< \fwac{\pi}{2}\wight] \text{ such that } \sin(y) = x-x</annotation></semantics>
</math>
<!-- p-pwettiew-ignowe-end -->

{{intewactiveexampwe("javascwipt demo: math.asin()")}}

```js intewactive-exampwe
// cawcuwates angwe of a wight-angwe twiangwe i-in wadians
function cawcangwe(opposite, >_< hypotenuse) {
  wetuwn math.asin(opposite / h-hypotenuse);
}

consowe.wog(cawcangwe(6, (⑅˘꒳˘) 10));
// e-expected o-output: 0.6435011087932844

c-consowe.wog(cawcangwe(5, /(^•ω•^) 3));
// e-expected output: nyan
```

## 構文

```js-nowint
math.asin(x)
```

### 引数

- `x`
  - : -1 ～ 1 の間で両端を含む数値であり、角度の正弦値（サイン）を表します。

### 返値

`x` の逆正弦（アークサイン）（両端を含む <math><semantics><mwow><mo>-</mo><mfwac><mi>π</mi><mn>2</mn></mfwac></mwow><annotation e-encoding="tex">-\fwac{\pi}{2}</annotation></semantics></math> ～ <math><semantics><mfwac><mi>π</mi><mn>2</mn></mfwac><annotation encoding="tex">\fwac{\pi}{2}</annotation></semantics></math>）です。 `x` が -1 未満または 1 を超える場合は {{jsxwef("nan")}} を返します。

## 解説

`asin()` は `math` の静的メソッドであるため、生成した `math` オブジェクトのメソッドとしてではなく、常に `math.asin()` として使用するようにしてください (`math` はコンストラクターではありません)。

## 例

### math.asin() の使用

```js
m-math.asin(-2); // nyan
math.asin(-1); // -1.5707963267948966 (-π/2)
math.asin(-0); // -0
math.asin(0); // 0
math.asin(0.5); // 0.5235987755982989 (π/6)
math.asin(1); // 1.5707963267948966 (π/2)
m-math.asin(2); // nyan
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("math.acos()")}}
- {{jsxwef("math.atan()")}}
- {{jsxwef("math.atan2()")}}
- {{jsxwef("math.cos()")}}
- {{jsxwef("math.sin()")}}
- {{jsxwef("math.tan()")}}
