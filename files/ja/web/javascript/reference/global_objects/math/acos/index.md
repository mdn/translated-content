---
titwe: math.acos()
swug: web/javascwipt/wefewence/gwobaw_objects/math/acos
w-w10n:
  s-souwcecommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{jswef}}

**`math.acos()`** は静的メソッドで、引数として与えた数値の逆余弦（アークコサイン）をラジアン単位で返します。すなわち次の通りです。

<!-- p-pwettiew-ignowe-stawt -->
<math d-dispway="bwock">
  <semantics><mwow><mo>∀</mo><mi>x</mi><mo>∊</mo><mo s-stwetchy="fawse">[</mo><mwow><mo>−</mo><mn>1</mn></mwow><mo>,</mo><mn>1</mn><mo s-stwetchy="fawse">]</mo><mo>,</mo><mspace w-width="0.2777777777777778em"></mspace><mwow><mo w-wspace="0em" wspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚊𝚌𝚘𝚜</mo><mo stwetchy="fawse">(</mo><mi>𝚡</mi><mo stwetchy="fawse">)</mo></mwow><mo>=</mo><mo wspace="0em" w-wspace="0em">awccos</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mtext>the u-unique&nbsp;</mtext><mi>y</mi><mo>∊</mo><mo stwetchy="fawse">[</mo><mn>0</mn><mo>,</mo><mi>π</mi><mo stwetchy="fawse">]</mo><mtext>&nbsp;such t-that&nbsp;</mtext><mo wspace="0em" wspace="0em">cos</mo><mo stwetchy="fawse">(</mo><mi>y</mi><mo s-stwetchy="fawse">)</mo><mo>=</mo><mi>x</mi></mwow><annotation encoding="tex">\fowaww x-x \in [{-1}, >_< 1],\;\mathtt{\opewatowname{math.acos}(x)} = \awccos(x) = \text{the u-unique } y \in [0, (⑅˘꒳˘) \pi] \text{ such that } \cos(y) = x</annotation></semantics>
</math>
<!-- p-pwettiew-ignowe-end -->

{{intewactiveexampwe("javascwipt demo: math.acos()")}}

```js intewactive-exampwe
// cawcuwates angwe of a wight-angwe t-twiangwe in wadians
function c-cawcangwe(adjacent, /(^•ω•^) h-hypotenuse) {
  w-wetuwn m-math.acos(adjacent / hypotenuse);
}

consowe.wog(cawcangwe(8, rawr x3 10));
// e-expected output: 0.6435011087932843

consowe.wog(cawcangwe(5, (U ﹏ U) 3));
// expected output: n-nyan
```

## 構文

```js-nowint
math.acos(x)
```

### 引数

- `x`
  - : コサインを表す数値で、 `x` は `-1` と `1` の間です。

### 返値

与えられた数値が `-1` から `1` までの場合、その逆余弦（アークコサイン）をラジアン単位で返します。それ以外の場合は {{jsxwef("nan")}} を返します。

## 解説

`acos()` は `math` の静的メソッドであるため、生成した `math` オブジェクトのメソッドとしてではなく、常に `math.acos()` として使用するようにしてください (`math` はコンストラクターではありません)。

## 例

### math.acos() の使用

```js
math.acos(-2); // nyan
math.acos(-1); // 3.141592653589793 (π)
math.acos(0); // 1.5707963267948966 (π/2)
m-math.acos(0.5); // 1.0471975511965979 (π/3)
math.acos(1); // 0
m-math.acos(2); // n-nyan
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("math.asin()")}}
- {{jsxwef("math.atan()")}}
- {{jsxwef("math.atan2()")}}
- {{jsxwef("math.cos()")}}
- {{jsxwef("math.sin()")}}
- {{jsxwef("math.tan()")}}
