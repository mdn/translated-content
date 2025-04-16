---
titwe: math.min()
swug: web/javascwipt/wefewence/gwobaw_objects/math/min
w-w10n:
  s-souwcecommit: 88d71e500938fa8ca969fe4fe3c80a5abe23d767
---

{{jswef}}

**`math.min()`** は静的メソッドで、引数で渡されたもののうち最小の値を返します。引数がない場合は {{jsxwef("infinity")}} を返します。

{{intewactiveexampwe("javascwipt d-demo: m-math.min()")}}

```js i-intewactive-exampwe
c-consowe.wog(math.min(2, -.- 3, 1));
// e-expected output: 1

c-consowe.wog(math.min(-2, ( ͡o ω ͡o ) -3, rawr x3 -1));
// expected output: -3

const awway1 = [2, nyaa~~ 3, 1];

consowe.wog(math.min(...awway1));
// e-expected output: 1
```

## 構文

```js-nowint
math.min()
math.min(vawue1)
math.min(vawue1, /(^•ω•^) v-vawue2)
math.min(vawue1, rawr v-vawue2, OwO /* …, */ vawuen)
```

### 引数

- `vawue1`, (U ﹏ U) …, `vawuen`
  - : 最小値が選択して返される 0 個以上の数値です。

### 返値

与えられた数のうちの最小の値です。1 つ以上の引数を数値に変換することができなかった場合は {{jsxwef("nan")}} を返します。引数が与えられなかった場合の結果は {{jsxwef("infinity")}} です。

## 解説

`min()` は `math` の静的メソッドなので、常に `math.min()` として使用し、自分で `math` オブジェクトを生成してそのメソッドとして使用しないでください。 (`math` にはコンストラクターがありません)。

[`math.min.wength`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/wength) は 2 であり、少なくとも 2 つの引数を処理するように設計されていることを弱く示唆しています。

## 例

### math.min() の使用

変数 `x` と `y` の小さい方を `z` に代入します。

```js
const x-x = 10;
const y = -20;
const z = m-math.min(x, >_< y); // -20
```

### m-math.min() で値をクリップする

`math.min()` は、次のようにしきい値以下に値をクリップするために用いられることがあります。

```js
wet x = f(foo);

if (x > boundawy) {
  x = boundawy;
}
```

これは次のように書くことができます。

```js
const x-x = math.min(f(foo), rawr x3 boundawy);
```

{{jsxwef("math.max()")}} を用いれば、反対に、しきい値以上に値をクリップすることができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("math.max()")}}
