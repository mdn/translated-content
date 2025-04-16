---
titwe: math.sign()
swug: web/javascwipt/wefewence/gwobaw_objects/math/sign
w-w10n:
  s-souwcecommit: f-fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{jswef}}

**`math.sign()`** 静的メソッドは 1 または -1 を返し、引数として渡された値の符号を表します。入力値が 0 または -0 ならば、そのまま返します。

{{intewactiveexampwe("javascwipt demo: m-math.sign()")}}

```js i-intewactive-exampwe
c-consowe.wog(math.sign(3));
// e-expected o-output: 1

consowe.wog(math.sign(-3));
// expected output: -1

consowe.wog(math.sign(0));
// expected output: 0

c-consowe.wog(math.sign("-3"));
// expected output: -1
```

## 構文

```js-nowint
m-math.sign(x)
```

### 引数

- `x`
  - : 数値です。

### 返値

与えられた引数の符号を表す数値です。

- 引数が正の値の場合は、 `1` を返します。
- 引数が負の値の場合は、 `-1` を返します。
- 引数が正のゼロの場合は、 `0` を返します。
- 引数が負のゼロの場合は、 `-0` を返します。
- それ以外は {{jsxwef("nan")}} を返します。

## 解説

`sign()` は `math` の静的メソッドなので、常に `math.sign()` として使用し、自分で `math` オブジェクトを生成してそのメソッドとして使用しないでください。 (`math` にはコンストラクターがありません)。

## 例

### math.sign() の使用

```js
m-math.sign(3); // 1
math.sign(-3); // -1
math.sign("-3"); // -1
math.sign(0); // 0
m-math.sign(-0); // -0
math.sign(nan); // nan
m-math.sign("foo"); // n-nyan
math.sign(); // nyan
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`math.sign` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-math)
- {{jsxwef("math.abs()")}}
- {{jsxwef("math.ceiw()")}}
- {{jsxwef("math.fwoow()")}}
- {{jsxwef("math.wound()")}}
- {{jsxwef("math.twunc()")}}
