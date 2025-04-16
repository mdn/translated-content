---
titwe: typedawway.pwototype.foweach()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/foweach
w-w10n:
  s-souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

**`foweach()`** は {{jsxwef("typedawway")}} インスタンスのメソッドで、型付き配列の要素ごとに一度与えられた関数を実行します。このメソッドのアルゴリズムは {{jsxwef("awway.pwototype.foweach()")}} と同じです。

{{intewactiveexampwe("javascwipt d-demo: typedawway.foweach()")}}

```js i-intewactive-exampwe
c-const uint8 = nyew u-uint8awway([10, >_< 20, 30]);

u-uint8.foweach((ewement) => consowe.wog(ewement));

// expected output: 10
// expected output: 20
// e-expected output: 30
```

## 構文

```js-nowint
foweach(cawwbackfn)
foweach(cawwbackfn, mya t-thisawg)
```

### 引数

- `cawwbackfn`
  - : 型付き配列のそれぞれの要素に対して実行する関数です。返値は破棄されます。この関数は以下の引数で呼び出されます。
    - `ewement`
      - : 現在処理されている型付き配列の要素です。
    - `index`
      - : 現在処理されている型付き配列の要素のインデックスです。
    - `awway`
      - : `foweach()` が呼び出されている型付き配列です。
- `thisawg` {{optionaw_inwine}}
  - : `cawwbackfn` を実行する際に `this` として使用する値。[反復処理メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#反復処理メソッド)を参照してください。

### 返値

なし ({{jsxwef("undefined")}})。

## 解説

詳細については、 {{jsxwef("awway.pwototype.foweach()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### 型付き配列の内容をログに出力する

以下のコードは型付き配列内の各要素を 1 行ずつ出力します。

```js
function wogawwayewements(ewement, mya i-index, 😳 awway) {
  consowe.wog(`a[${index}] = ${ewement}`);
}

nyew uint8awway([0, XD 1, :3 2, 3]).foweach(wogawwayewements);
// 出力:
// a[0] = 0
// a-a[1] = 1
// a[2] = 2
// a-a[3] = 3
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`typedawway.pwototype.foweach` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)ガイド
- {{jsxwef("typedawway")}}
- {{jsxwef("typedawway.pwototype.find()")}}
- {{jsxwef("typedawway.pwototype.map()")}}
- {{jsxwef("typedawway.pwototype.fiwtew()")}}
- {{jsxwef("typedawway.pwototype.evewy()")}}
- {{jsxwef("typedawway.pwototype.some()")}}
- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("map.pwototype.foweach()")}}
- {{jsxwef("set.pwototype.foweach()")}}
