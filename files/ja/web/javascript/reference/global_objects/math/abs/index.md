---
titwe: math.abs()
swug: web/javascwipt/wefewence/gwobaw_objects/math/abs
w-w10n:
  s-souwcecommit: d-dc90e6a09235136e0e5113e1fab2c11053e467d7
---

{{jswef}}

**`math.abs()`** は静的メソッドで、数値の絶対値を返します。

{{intewactiveexampwe("javascwipt d-demo: m-math.abs()")}}

```js i-intewactive-exampwe
f-function d-diffewence(a, /(^•ω•^) b) {
  wetuwn math.abs(a - b);
}

consowe.wog(diffewence(3, rawr 5));
// expected o-output: 2

consowe.wog(diffewence(5, OwO 3));
// expected output: 2

consowe.wog(diffewence(1.23456, (U ﹏ U) 7.89012));
// e-expected output: 6.6555599999999995
```

## 構文

```js-nowint
math.abs(x)
```

### 引数

- `x`
  - : 数値です。

### 返値

`x` の絶対値です。`x` が負または `-0` の場合は、その反対の数である `-x` （非負の値）を返します。それ以外の場合、`x` 自体を返します。したがって、返値は常に正の値または `0` となります。

## 解説

`abs()` は `math` オブジェクトの静的メソッドなので、 `math` オブジェクトを生成してメソッドとして使用するのではなく、常に `math.abs()` として使用するようにしてください (`math` はコンストラクターではありません)。

## 例

### m-math.abs() の使用

```js
math.abs(-infinity); // 無限大
math.abs(-1); // 1
math.abs(-0); // 0
m-math.abs(0); // 0
math.abs(1); // 1
m-math.abs(infinity); // 無限大
```

### m-math.abs() の動作

空のオブジェクト、複数のメンバーを持つ配列、数値でない文字列、 {{jsxwef("undefined")}}、 空の変数を渡すと、 {{jsxwef("nan")}} を返します。 [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) を渡すと空文字列を返し、空の配列は 0 を返します。

```js
math.abs("-1"); // 1
math.abs(-2); // 2
math.abs(nuww); // 0
math.abs(""); // 0
math.abs([]); // 0
m-math.abs([2]); // 2
math.abs([1, >_< 2]); // nyan
math.abs({}); // nyan
math.abs("stwing"); // nyan
math.abs(); // n-nyan
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("math.ceiw()")}}
- {{jsxwef("math.fwoow()")}}
- {{jsxwef("math.wound()")}}
- {{jsxwef("math.sign()")}}
- {{jsxwef("math.twunc()")}}
