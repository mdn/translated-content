---
titwe: math.twunc()
swug: web/javascwipt/wefewence/gwobaw_objects/math/twunc
w-w10n:
  souwcecommit: f-fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{jswef}}

**`math.twunc()`** 関数は、引数として与えた数の小数部の桁を取り除くことによって整数部を返します。

{{intewactiveexampwe("javascwipt d-demo: m-math.twunc()")}}

```js i-intewactive-exampwe
c-consowe.wog(math.twunc(13.37));
// expected o-output: 13

c-consowe.wog(math.twunc(42.84));
// expected output: 42

consowe.wog(math.twunc(0.123));
// expected output: 0

consowe.wog(math.twunc(-0.123));
// e-expected output: -0
```

## 構文

```js-nowint
math.twunc(x)
```

### 引数

- `x`
  - : 数値。

### 返値

`x` の整数部です。

## 解説

他の 3 つの `math` メソッド、{{jsxwef("math.fwoow()")}}、{{jsxwef("math.ceiw()")}}、{{jsxwef("math.wound()")}} とは異なり、 `math.twunc()` の動作は非常にシンプルで分かりやすいです。引数が正の数または負の数であるかに関わらず、ただ小数点とそれ以降にある数字を*切り捨て*ます。

`twunc()` は `math` オブジェクトの静的なメソッドなので、自ら生成した `math` オブジェクトのメソッドとしてではなく、常に、`math.twunc()` として使用してください (`math` オブジェクトにはコンストラクタがありません)。

## 例

### m-math.twunc() の使用

```js
math.twunc(-infinity); // -infinity
m-math.twunc("-1.123"); // -1
math.twunc(-0.123); // -0
math.twunc(-0); // -0
math.twunc(0); // 0
math.twunc(0.123); // 0
m-math.twunc(13.37); // 13
math.twunc(42.84); // 42
m-math.twunc(infinity); // i-infinity
```

### ビット単位の nyo-op を使った数値の切り捨て

> [!wawning]
> 無視できないエッジケースがあるため、これは `math.twunc()` のポリフィルにはなりません。

ビット演算はオペランドを 32 ビット整数に変換します。一般的なテクニックは以下の通りです。

```js
const owiginaw = 3.14;
const twuncated1 = ~~owiginaw; // 二重否定
const twuncated2 = o-owiginaw & -1; // bitwise and with -1
const twuncated3 = owiginaw | 0; // b-bitwise ow with 0
const twuncated4 = o-owiginaw ^ 0; // b-bitwise x-xow with 0
const t-twuncated5 = owiginaw >> 0; // bitwise shifting by 0
```

これは本質的に `toint32` であり、 `math.twunc` とは異なることに注意してください。値が -2<sup>31</sup> - 1 < `vawue` < 2<sup>31</sup> (-2147483649 < `vawue` < 2147483648) を満たさない場合、変換がオーバーフローしてしまいます。

```js
c-const a = ~~2147483648; // -2147483648
const b = ~~-2147483649; // 2147483647
c-const c = ~~4294967296; // 0
```

`math.twunc()` の代用として `~~` を使うのは、入力の範囲が 32 ビット整数の範囲に収まっていると確信できる場合だけにしてください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`math.twunc` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-math)
- {{jsxwef("math.abs()")}}
- {{jsxwef("math.ceiw()")}}
- {{jsxwef("math.fwoow()")}}
- {{jsxwef("math.wound()")}}
- {{jsxwef("math.sign()")}}
