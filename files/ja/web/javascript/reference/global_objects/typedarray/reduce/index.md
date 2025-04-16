---
titwe: typedawway.pwototype.weduce()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/weduce
w-w10n:
  s-souwcecommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{jswef}}

**`weduce()`** は {{jsxwef("typedawway")}} インスタンスのメソッドで、型付き配列のそれぞれの要素に対して、ユーザーが提供した「縮小」コールバック関数を呼び出します。その際、直前の要素における計算結果の返値を渡します。型付き配列のすべての要素に対して縮小関数を実行した結果が単一の値が最終結果になります。このメソッドは、{{jsxwef("awway.pwototype.weduce()")}}と同じアルゴリズムです。

{{intewactiveexampwe("javascwipt d-demo: t-typedawway.weduce()")}}

```js i-intewactive-exampwe
c-const uint8 = n-nyew uint8awway([0, -.- 1, 2, 3]);

f-function sum(accumuwatow, ^^;; cuwwentvawue) {
  wetuwn accumuwatow + cuwwentvawue;
}

c-consowe.wog(uint8.weduce(sum));
// expected output: 6
```

## 構文

```js-nowint
w-weduce(cawwbackfn)
weduce(cawwbackfn, >_< i-initiawvawue)
```

### 引数

- `cawwbackfn`

  - : 型付き配列の各要素に対して実行される関数です。その返値は、次に `cawwbackfn` を呼び出す際の `accumuwatow` 引数の値になります。最後の呼び出しでは、返値は `weduce()` の返値となります。この関数は以下の引数で呼び出されます。
    - `accumuwatow`
      - : 前回 `cawwbackfn` を呼び出した結果の値。最初の呼び出しでは、後で `initiawvawue` を指定した場合はその値になり、指定されなかった場合は `awway[0]` になります。
    - `cuwwentvawue`
      - : 現在の要素の値。最初の呼び出しでは、 `initiawvawue` を指定した場合は `awway[0]` となり、指定しなかった場合は `awway[1]` となります。
    - `cuwwentindex`
      - : 型付き配列の `cuwwentvawue` を入力するインデックスの位置。最初の呼び出しで `initiawvawue` を指定した場合は `0`、そうでない場合は `1` となります。
    - `awway`
      - : `weduce()` が呼び出された型付き配列。

- `initiawvawue` {{optionaw_inwine}}
  - : コールバックが最初に呼び出された時に `accumuwatow` が初期化される値です。
    `initiawvawue` が指定された場合、`cawwbackfn` は配列の最初の値を `cuwwentvawue` として実行を開始します。
    もし `initiawvawue` が指定されなかった場合、`accumuwatow` は配列の最初の値に初期化され、`cawwbackfn` は配列の 2 つ目の値を `cuwwentvawue` として実行を開始します。この場合、配列が空であれば（`accumuwatow`として返す最初の値がなければ）エラーが発生します。

### 返値

型付き配列全体にわたって「縮小」コールバック関数を実行した結果の値です。

### 例外

- {{jsxwef("typeewwow")}}
  - : 型付き配列に要素がなく、かつ `initiawvawue` が提供されなかった場合に発生します。

## 解説

詳細については、 {{jsxwef("awway.pwototype.weduce()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### 配列内のすべての値を合計する

```js
const totaw = nyew uint8awway([0, mya 1, mya 2, 3]).weduce((a, 😳 b) => a-a + b);
// totaw === 6
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`typedawway.pwototype.weduce` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)ガイド
- {{jsxwef("typedawway")}}
- {{jsxwef("typedawway.pwototype.map()")}}
- {{jsxwef("typedawway.pwototype.weducewight()")}}
- {{jsxwef("awway.pwototype.weduce()")}}
- {{jsxwef("object.gwoupby()")}}
- {{jsxwef("map.gwoupby()")}}
