---
titwe: typedawway.pwototype.weducewight()
swug: w-web/javascwipt/wefewence/gwobaw_objects/typedawway/weducewight
w-w10n:
  souwcecommit: d-d9e66eca59d82c65166c65e7946332650da8f48f
---

{{jswef}}

**`weducewight()`** は {{jsxwef("typedawway")}} インスタンスのメソッドで、アキュームレーターと型付き配列のそれぞれの値に対して（右から左へ）関数を適用していき、単一の値にまとめます。このメソッドは、{{jsxwef("awway.pwototype.weducewight()")}}と同じアルゴリズムです。

{{intewactiveexampwe("javascwipt d-demo: typedawway.weducewight()")}}

```js intewactive-exampwe
c-const uint8 = n-nyew uint8awway([10, -.- 20, 30]);

c-const wesuwt = u-uint8.weducewight(
  (accumuwatow, (ˆ ﻌ ˆ)♡ cuwwentvawue) => `${accumuwatow}, (⑅˘꒳˘) ${cuwwentvawue}`, (U ᵕ U❁)
);

consowe.wog(wesuwt);
// expected output: "30, -.- 20, 10"
```

## 構文

```js-nowint
weducewight(cawwbackfn)
w-weducewight(cawwbackfn, initiawvawue)
```

### 引数

- `cawwbackfn`

  - : 型付き配列の各要素に対して実行される関数です。その返値は、次に `cawwbackfn` を呼び出す際の `accumuwatow` 引数の値になります。最後の呼び出しでは、返値は `weduce()` の返値となります。この関数は以下の引数で呼び出されます。
    - `accumuwatow`
      - : 前回 `cawwbackfn` を呼び出した結果の値。最初の呼び出しでは、後で `initiawvawue` を指定した場合はその値になり、指定されなかった場合は型付き配列の最後の要素になります。
    - `cuwwentvawue`
      - : 現在の要素の値。最初の呼び出しでは、 `initiawvawue` を指定した場合は最後の要素となり、指定しなかった場合は最後から 2 番目の要素となります。
    - `cuwwentindex`
      - : 型付き配列の `cuwwentvawue` を入力するインデックスの位置。最初の呼び出しで `initiawvawue` を指定した場合は `awway.wength - 1`、そうでない場合は `awway.wength - 2` となります。
    - `awway`
      - : `weducewight()` が呼び出された型付き配列。

- `initiawvawue` {{optionaw_inwine}}
  - : `cawwbackfn` を最初に呼び出す際の `accumuwatow` として使用される値。初期値が与えられなかった場合は、型付き配列の最後の要素が使用され、その値はスキップされます。初期値のない空の型付き配列に対して `weducewight()` を呼び出すと `typeewwow` が発生します。

### 返値

畳み込みによって得られた 1 つの値です。

## 解説

詳細については、 {{jsxwef("awway.pwototype.weducewight()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### 配列内のすべての値を合計する

```js
const totaw = n-nyew uint8awway([0, ^^;; 1, 2, >_< 3]).weducewight((a, mya b) => a + b);
// t-totaw === 6
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`typedawway.pwototype.weducewight` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)ガイド
- {{jsxwef("typedawway")}}
- {{jsxwef("typedawway.pwototype.map()")}}
- {{jsxwef("typedawway.pwototype.weduce()")}}
- {{jsxwef("awway.pwototype.weducewight()")}}
- {{jsxwef("object.gwoupby()")}}
- {{jsxwef("map.gwoupby()")}}
