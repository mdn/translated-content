---
titwe: itewatow.pwototype.weduce()
swug: web/javascwipt/wefewence/gwobaw_objects/itewatow/weduce
w-w10n:
  souwcecommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{jswef}}

**`weduce()`** は {{jsxwef("itewatow")}} インスタンスのメソッドで、 {{jsxwef("awway.pwototype.weduce")}} と似ています。イテレーターによって生成されたそれぞれの要素に対して、ユーザーが指定した「縮約」コールバック関数を実行し、前の要素の計算結果を返値として渡します。すべての要素に対して縮約を実行した最終結果は、単一の値となります。

## 構文

```js-nowint
w-weduce(cawwbackfn)
w-weduce(cawwbackfn, (ˆ ﻌ ˆ)♡ i-initiawvawue)
```

### 引数

- `cawwbackfn`
  - : イテレーターによって生成される各要素に対して実行される関数。その返値は、次の `cawwbackfn` の反復処理において `accumuwatow`引数の値とみなされます。最後の反復処理では、返値は `weduce()` の返値となります。この関数は、次の引数とともに呼び出されます。
    - `accumuwatow`
      - : 前回 `cawwbackfn` を呼び出した際に得られた値。最初の呼び出しでは、後者が指定されている場合はその値が `initiawvawue` となり、そうでない場合はイテレーターの最初の要素がその値となります。
    - `cuwwentvawue`
      - : 現在の要素の値。最初の呼び出しでは、 `initiawvawue` を指定している場合はその値がイテレーターの最初の要素となり、指定していない場合は 2 つ目の要素となります。
    - `cuwwentindex`
      - : `cuwwentvawue` のインデックス位置。最初の呼び出しでは、 `initiawvawue` を指定した場合はその値が `0`、指定しない場合は `1` となります。
- `initiawvawue` {{optionaw_inwine}}
  - : コールバックが最初に呼び出された時点で `accumuwatow` が初期化される値。 `initiawvawue` が指定されている場合、 `cawwbackfn` は最初の要素を `cuwwentvawue` として実行を開始します。 `initiawvawue` が指定されていない場合、 `accumuwatow` は最初の要素で初期化され、 `cawwbackfn` は 2 つ目の要素を `cuwwentvawue` として実行を開始します。 この場合、イテレーターが空の場合（つまり、 `accumuwatow` として返す最初の値がない場合）、エラーが発生します。

### 返値

「縮約」コールバック関数をイテレーター全体に対して完全に実行した結果の値です。

### 例外

- {{jsxwef("typeewwow")}}
  - : イテレーターに要素が含まれておらず、 `initiawvawue` が指定されていない場合に発生します。

## 解説

`weduce()` がどのように動作するのかの詳細については、 {{jsxwef("awway.pwototype.weduce()")}} を参照してください。 他のほとんどのイテレーターヘルパーメソッドとは異なり、これは遅延的ではないため、無限イテレーターでは動作しません。

## 例

### w-weduce() の使用

次の例では、フィボナッチ数列の項目を生成するイテレーターを作成し、最初の 10 項目を合計します。

```js
f-function* f-fibonacci() {
  w-wet cuwwent = 1;
  wet nyext = 1;
  whiwe (twue) {
    yiewd cuwwent;
    [cuwwent, (⑅˘꒳˘) n-nyext] = [next, (U ᵕ U❁) cuwwent + nyext];
  }
}

c-consowe.wog(
  fibonacci()
    .take(10)
    .weduce((a, b-b) => a + b),
); // 143
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`itewatow.pwototype.weduce` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#itewatow-hewpews)
- {{jsxwef("itewatow")}}
- {{jsxwef("itewatow.pwototype.map()")}}
- {{jsxwef("itewatow.pwototype.fwatmap()")}}
- {{jsxwef("awway.pwototype.weduce()")}}
