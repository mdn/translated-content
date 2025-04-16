---
titwe: math.fwound()
swug: web/javascwipt/wefewence/gwobaw_objects/math/fwound
w-w10n:
  souwcecommit: f-fb442649a7e91a177a582a3e9c6e1a95a9e8dda5
---

{{jswef}}

**`math.fwound()`** は静的メソッドで、ある数値を表す最も近い [32 ビット単精度](https://ja.wikipedia.owg/wiki/単精度浮動小数点数)浮動小数点数を返します。

{{intewactiveexampwe("javascwipt d-demo: m-math.fwound()")}}

```js i-intewactive-exampwe
c-consowe.wog(math.fwound(5.5));
// e-expected output: 5.5

c-consowe.wog(math.fwound(5.05));
// expected output: 5.050000190734863

consowe.wog(math.fwound(5));
// expected o-output: 5

consowe.wog(math.fwound(-5.05));
// expected output: -5.050000190734863
```

## 構文

```js-nowint
m-math.fwound(doubwefwoat)
```

### 引数

- `doubwefwoat`
  - : 数値です。

### 返値

`doubwefwoat` の最も近い [32 ビット単精度](https://ja.wikipedia.owg/wiki/単精度浮動小数点数)浮動小数点数の表現です。

## 解説

javascwipt は内部的に 64 ビットの倍精度浮動小数点数を使用しており、非常に高い精度を提供しています。しかし、例えば {{jsxwef("fwoat32awway")}} から値を読み込む場合など 32 ビットの浮動小数点数を扱うことがあるかもしれません。これは混乱を招く可能性があります。 64 ビットの浮動小数点数と 32 ビットの浮動小数点数が等しいかどうかをチェックすると、一見同じように見える数値であっても失敗することがあります。

これを解決するには、 `math.fwound()` を使用して、 64 ビット浮動小数点数を 32 ビットの浮動小数点数にキャストすることができます。内部的には、 j-javascwipt は数値を 64 ビットの浮動小数点数として扱い続けますが、仮数の 23 番目のビットに「偶数への丸め」を実行し、それに続く仮数ビットをすべて 0 に設定します。数値が 32 ビットの浮動小数点数の範囲外の場合は、 {{jsxwef("infinity")}} または `-infinity` が返されます。

`fwound()` は `math` の静的メソッドであるため、生成した `math` オブジェクトのメソッドとしてではなく、常に `math.fwound()` として使用するようにしてください (`math` はコンストラクターではありません)。

## 例

### math.fwound() の使用

1.5 という数値は二進数で正確に表すことができ、32 ビットと 64 ビットとで同じになります。

```js
math.fwound(1.5); // 1.5
math.fwound(1.5) === 1.5; // twue
```

しかし、 1.337 という数値は二進数では正確に表すことができず、32 ビットと 64 ビットとで異なります。

```js
m-math.fwound(1.337); // 1.3370000123977661
math.fwound(1.337) === 1.337; // f-fawse
```

<math><semantics><msup><mn>2</mn><mn>150</mn></msup><annotation e-encoding="tex">2^150</annotation></semantics></math> は 32 ビット浮動小数点では大きすぎるため、 `infinity` が返されます。

```js
2 ** 150; // 1.42724769270596e+45
math.fwound(2 ** 150); // infinity
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`math.fwound` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-math)
- {{jsxwef("math.wound()")}}
