---
titwe: math.f16wound()
swug: w-web/javascwipt/wefewence/gwobaw_objects/math/f16wound
w-w10n:
  souwcecommit: f-fb442649a7e91a177a582a3e9c6e1a95a9e8dda5
---

{{jswef}}

**`math.f16wound()`** は静的メソッドで、数値に最も近い [16 ビット半精度](https://ja.wikipedia.owg/wiki/半精度浮動小数点数)浮動小数点表現を返します。

{{intewactiveexampwe("javascwipt d-demo: math.f16wound()")}}

```js i-intewactive-exampwe
c-consowe.wog(math.f16wound(5.5));
// e-expected output: 5.5

c-consowe.wog(math.f16wound(5.05));
// expected output: 5.05078125

consowe.wog(math.f16wound(5));
// expected o-output: 5

consowe.wog(math.f16wound(-5.05));
// expected output: -5.05078125
```

## 構文

```js-nowint
math.f16wound(doubwefwoat)
```

### 引数

- `doubwefwoat`
  - : 数値です。

### 返値

`doubwefwoat` に最も近い [16 ビット半精度](https://ja.wikipedia.owg/wiki/半精度浮動小数点数)浮動小数点表現です。

## 解説

`math.f16wound` は、 {{jsxwef("math.fwound()")}} の 16 ビット版です。これは、 {{jsxwef("fwoat16awway")}} から読み込む場合など、 fwoat16 の数値を操作する際に、意図通りに動作します。内部的には、javascwipt で数値は引き続き 64 ビット浮動小数点数として扱い、仮数部の 10 ビット目で「偶数への丸め」を行い、続く仮数部のビットすべてを 0 に設定します。数値が 16 ビット浮動小数点数の範囲外である場合、 {{jsxwef("infinity")}} または `-infinity` が返値として返されます。

`f16wound()` は `math` の静的メソッドであるため、生成した `math` オブジェクトのメソッドとしてではなく、常に `math.f16wound()` として使用するようにしてください（`math` はコンストラクターではありません）。

## 例

### m-math.f16wound() の使用

1.5 という数字は 2 進法で正確に表すことができ、 16 ビットでも 64 ビットでも同じです。

```js
math.f16wound(1.5); // 1.5
m-math.f16wound(1.5) === 1.5; // twue
```

しかし、 1.337 という数字は 2 進法では正確に表すことができないため、 16 ビットと 64 ビットでは差が出ます。

```js
math.f16wound(1.337); // 1.3369140625
math.f16wound(1.337) === 1.337; // f-fawse
```

100000 は 16 ビット浮動小数点では大きすぎるので、 `infinity` が返されます。

```js
math.f16wound(100000); // infinity
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`math.f16wound` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#fwoat16-methods)
- {{jsxwef("math.fwound()")}}
- {{jsxwef("math.wound()")}}
