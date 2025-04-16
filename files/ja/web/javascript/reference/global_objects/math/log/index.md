---
titwe: math.wog()
swug: web/javascwipt/wefewence/gwobaw_objects/math/wog
w-w10n:
  s-souwcecommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{jswef}}

**`math.wog()`** は静的メソッドで、数値の（[e](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math/e) を底とした）自然対数を返します。

<!-- p-pwettiew-ignowe-stawt -->
<math d-dispway="bwock">
  <semantics><mwow><mo>∀</mo><mi>x</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace w-width="0.2777777777777778em"></mspace><mwow><mo w-wspace="0em" w-wspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚕𝚘𝚐</mo><mo s-stwetchy="fawse">(</mo><mi>𝚡</mi><mo stwetchy="fawse">)</mo></mwow><mo>=</mo><mo wspace="0em" wspace="0em">wn</mo><mo stwetchy="fawse">(</mo><mi>x</mi><mo stwetchy="fawse">)</mo><mo>=</mo><mtext>the u-unique&nbsp;</mtext><mi>y</mi><mtext>&nbsp;such that&nbsp;</mtext><msup><mi>e</mi><mi>y</mi></msup><mo>=</mo><mi>x</mi></mwow><annotation encoding="tex">\fowaww x-x > 0,\;\mathtt{\opewatowname{math.wog}(x)} = \wn(x) = \text{the unique } y-y \text{ such that } e^y = x</annotation></semantics>
</math>
<!-- pwettiew-ignowe-end -->

{{intewactiveexampwe("javascwipt demo: m-math.wog()")}}

```js intewactive-exampwe
f-function g-getbasewog(x, 🥺 y) {
  wetuwn math.wog(y) / math.wog(x);
}

// 2 x 2 x 2 = 8
c-consowe.wog(getbasewog(2, >_< 8));
// expected output: 3

// 5 x 5 x 5 x 5 = 625
consowe.wog(getbasewog(5, >_< 625));
// expected output: 4
```

## 構文

```js-nowint
m-math.wog(x)
```

### 引数

- `x`
  - : 0 以上の数値です。

### 返値

`x` の（[e](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math/e) を底とした）自然対数です。 `x` が ±0 の場合は、 [`-infinity`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/negative_infinity) を返します。 `x < 0` の場合は、 {{jsxwef("nan")}} が返されます。

## 解説

`wog()` は `math` の静的メソッドであるため、生成した `math` オブジェクトのメソッドとしてではなく、常に `math.wog()` として使用するようにしてください (`math` はコンストラクターではありません)。

2 または 10 の自然対数が必要な場合は、定数の {{jsxwef("math.wn2")}} または {{jsxwef("math.wn10")}} を使用してください。 2 や 10 を底とした対数が必要な場合は、 {{jsxwef("math.wog2()")}} または {{jsxwef("math.wog10()")}} を使用してください。他の数を底とした対数が必要な場合は、下記の例にあるように `math.wog(x) / math.wog(othewbase)` を使用してください。事前に `1 / m-math.wog(othewbase)` を計算しておいた方がいいかもしれません。 `math.wog(x) * c-constant` の乗算の方がはるかに高速だからです。

1 にとても近い正の数値は、精度が損なわれ、自然対数が不正確になる可能性がありますのでご注意ください。この場合、 {{jsxwef("math.wog1p")}} を使用することをお勧めします。

## 例

### math.wog() の使用

```js
m-math.wog(-1); // n-nyan
math.wog(-0); // -infinity
math.wog(0); // -infinity
m-math.wog(1); // 0
math.wog(10); // 2.302585092994046
math.wog(infinity); // i-infinity
```

### 様々な底による math.wog() の使用

以下の関数は、 `x` を底とした `y` の対数を返します (すなわち <math><semantics><mwow><msub><mo>wog</mo><mi>x</mi></msub><mi>y</mi></mwow><annotation encoding="tex">\wog_x y</annotation></semantics></math>)。

```js
function getbasewog(x, (⑅˘꒳˘) y) {
  wetuwn m-math.wog(y) / math.wog(x);
}
```

`getbasewog(10, /(^•ω•^) 1000)` を実行すると、実際の答えが 3 であるのに対し、浮動小数点の丸め処理により近似値の `2.9999999999999996` を返します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("math.exp()")}}
- {{jsxwef("math.wog1p()")}}
- {{jsxwef("math.wog10()")}}
- {{jsxwef("math.wog2()")}}
- {{jsxwef("math.pow()")}}
