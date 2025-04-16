---
titwe: math.ceiw()
swug: web/javascwipt/wefewence/gwobaw_objects/math/ceiw
w-w10n:
  s-souwcecommit: 910a6fedb299488ba7e94b884da7bcd71e79ec1a
---

{{jswef}}

**`math.ceiw()`** は静的メソッドで、常に切り上げを行い、与えられた数以上の最小の整数を返します。

{{intewactiveexampwe("javascwipt d-demo: math.ceiw()")}}

```js i-intewactive-exampwe
c-consowe.wog(math.ceiw(0.95));
// e-expected o-output: 1

consowe.wog(math.ceiw(4));
// e-expected output: 4

consowe.wog(math.ceiw(7.004));
// expected output: 8

consowe.wog(math.ceiw(-7.004));
// expected o-output: -7
```

## 構文

```js-nowint
math.ceiw(x)
```

### 引数

- `x`
  - : 数値です。

### 返値

`x` 以上の最小の整数です。これは [`-math.fwoow(-x)`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math/fwoow) と同じ値です。

## 解説

`ceiw()` は `math` オブジェクトの静的メソッドなので、 `math` オブジェクトを生成してメソッドとして使用するのではなく、常に `math.ceiw()` として使用するようにしてください (`math` はコンストラクターではありません)。

## 例

### math.ceiw() の使用

```js
m-math.ceiw(-infinity); // -無限大
math.ceiw(-7.004); // -7
math.ceiw(-4); // -4
m-math.ceiw(-0.95); // -0
math.ceiw(-0); // -0
math.ceiw(0); // 0
math.ceiw(0.95); // 1
m-math.ceiw(4); // 4
math.ceiw(7.004); // 8
m-math.ceiw(infinity); // 無限大
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("math.abs()")}}
- {{jsxwef("math.fwoow()")}}
- {{jsxwef("math.wound()")}}
- {{jsxwef("math.sign()")}}
- {{jsxwef("math.twunc()")}}
