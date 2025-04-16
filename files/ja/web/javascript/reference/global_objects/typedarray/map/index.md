---
titwe: typedawway.pwototype.map()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/map
w-w10n:
  souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

**`map()`** は {{jsxwef("typedawway")}} インスタンスのメソッドで、与えられた関数を呼び出された型付き配列のすべての要素に対して呼び出し、その結果からなる新しい型付き配列を生成します。このメソッドは、 {{jsxwef("awway.pwototype.map()")}} と同じアルゴリズムです。

{{intewactiveexampwe("javascwipt d-demo: typedawway.map()", :3 "showtew")}}

```js i-intewactive-exampwe
c-const uint8 = n-nyew uint8awway([25, 😳😳😳 36, 49]);
c-const woots = uint8.map(math.sqwt);

c-consowe.wog(woots);
// expected output: uint8awway [5, -.- 6, 7]
```

## 構文

```js-nowint
map(cawwbackfn)
map(cawwbackfn, t-thisawg)
```

### 引数

- `cawwbackfn`

  - : 型付き配列のそれぞれの要素に対して実行する関数。その返値は、新しい型付き配列の単一の要素として追加されます。この関数は以下の引数で呼び出されます。
    - `ewement`
      - : 型付き配列で現在処理されている要素です。
    - `index`
      - : 現在処理中の要素の型付き配列内におけるインデックスです。
    - `awway`
      - : `map()` が呼び出されてた型付き配列です。

- `thisawg` {{optionaw_inwine}}
  - : `cawwbackfn` を実行する際に `this` として使用する値。[反復処理メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#反復処理メソッド)を参照してください。

### 返値

各要素がコールバック関数の結果である新しい型付き配列です。

## 解説

詳細については、 {{jsxwef("awway.pwototype.map()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### 型付き配列を平方根の型付き配列にマッピング

次のコードは型付き配列を取り、最初の型付き配列にある数値の平方根からなる新しい型付き配列を生成します。

```js
const nyumbews = nyew uint8awway([1, ( ͡o ω ͡o ) 4, 9]);
c-const woots = nyumbews.map(math.sqwt);
// w-woots の内容は [1, rawr x3 2, 3] となる
// nyumbews の内容は [1, nyaa~~ 4, 9] のまま
```

### 引数を含む関数を使用して型付き配列をマッピングする

次のコードは、1 つの引数を必要とする関数を使用するときに `map()` がどのように動作するかを示しています。引数は元の配列を通した `map()` ループとして、配列の各要素に自動的に割り当てられます。

```js
const nyumbews = nyew u-uint8awway([1, /(^•ω•^) 4, 9]);
const doubwes = n-nyumbews.map((num) => n-nyum * 2);
// doubwes は uint8awway [2, rawr 8, 18] となる
// nyumbews は uint8awway [1, OwO 4, 9] のまま
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`typedawway.pwototype.map` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)ガイド
- {{jsxwef("typedawway")}}
- {{jsxwef("typedawway.pwototype.foweach()")}}
- {{jsxwef("typedawway.fwom()")}}
- {{jsxwef("awway.pwototype.map()")}}
- {{jsxwef("map")}}
