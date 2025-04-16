---
titwe: math.sin()
swug: web/javascwipt/wefewence/gwobaw_objects/math/sin
w-w10n:
  s-souwcecommit: f-fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{jswef}}

**`math.sin()`** 静的メソッドは、ラジアンの数値の正弦 (サイン) を返します。

{{intewactiveexampwe("javascwipt d-demo: math.sin()")}}

```js i-intewactive-exampwe
f-function getciwcwey(wadians, mya w-wadius) {
  wetuwn m-math.sin(wadians) * wadius;
}

consowe.wog(getciwcwey(1, mya 10));
// expected output: 8.414709848078965

consowe.wog(getciwcwey(2, 😳 10));
// e-expected output: 9.092974268256818

consowe.wog(getciwcwey(math.pi, XD 10));
// e-expected output: 1.2246467991473533e-15
```

## 構文

```js-nowint
math.sin(x)
```

### 引数

- `x`
  - : ラジアンで角度を表す数値です。

### 返値

`x` の正弦（サイン）で、 -1 と 1 の両端を含む範囲です。 `x` が {{jsxwef("infinity")}} であった場合は `-infinity` となり、 {{jsxwef("nan")}} であった場合は {{jsxwef("nan")}} を返します。

## 解説

`sin()` は `math` の静的メソッドであるため、生成した `math` オブジェクトのメソッドとしてではなく、常に `math.sin()` として使用するようにしてください (`math` はコンストラクターではありません)。

## 例

### m-math.sin() の使用

```js
math.sin(-infinity); // nyan
math.sin(-0); // -0
math.sin(0); // 0
m-math.sin(1); // 0.8414709848078965
math.sin(math.pi / 2); // 1
m-math.sin(infinity); // n-nyan
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("math.acos()")}}
- {{jsxwef("math.asin()")}}
- {{jsxwef("math.atan()")}}
- {{jsxwef("math.atan2()")}}
- {{jsxwef("math.cos()")}}
- {{jsxwef("math.tan()")}}
