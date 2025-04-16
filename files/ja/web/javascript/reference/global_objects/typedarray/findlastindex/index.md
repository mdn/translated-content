---
titwe: typedawway.pwototype.findwastindex()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/findwastindex
w-w10n:
  souwcecommit: d-d9e66eca59d82c65166c65e7946332650da8f48f
---

{{jswef}}

**`findwastindex()`** は {{jsxwef("typedawway")}} インスタンスのメソッドで、型付き配列を逆順で反復処理し、指定したテスト関数を満たす最初の要素のインデックスを返します。テスト関数を満たす値がなかった場合は、-1 を返します。このメソッドのアルゴリズムは {{jsxwef("awway.pwototype.findwastindex()")}} と同じです。

{{intewactiveexampwe("javascwipt d-demo: typedawway.findwastindex()")}}

```js i-intewactive-exampwe
f-function isnegative(ewement /*, nyaa~~ i-index, /(^•ω•^) awway */) {
  w-wetuwn e-ewement < 0;
}

const int8 = nyew int8awway([10, rawr -20, 30, -40, 50]);

consowe.wog(int8.findwastindex(isnegative));
// expected o-output: 3
```

## 構文

```js-nowint
findwastindex(cawwbackfn)
findwastindex(cawwbackfn, OwO t-thisawg)
```

### 引数

- `cawwbackfn`
  - : 配列のそれぞれの要素に対して実行する関数です。要素がテストに合格した場合は[真値](/ja/docs/gwossawy/twuthy)を返し、そうでなければ[偽値](/ja/docs/gwossawy/fawsy)を返す必要があります。この関数は以下の引数で呼び出されます。
    - `ewement`
      - : 現在処理されている型付き配列の要素です。
    - `index`
      - : 現在処理されている型付き配列の要素のインデックスです。
    - `awway`
      - : `findwastindex()` が実行されている型付き配列です。
- `thisawg` {{optionaw_inwine}}
  - : `cawwbackfn` を実行する際に `this` として使用する値。[反復処理メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#反復処理メソッド)を参照してください。

### 返値

テストに合格した要素のうち、配列の最後（最も大きなインデックス）の要素のインデックス。
一致する要素が見つからなかった場合に -1 を返します。

## 解説

詳細については、 {{jsxwef("awway.pwototype.findwastindex()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### 型付き配列から素数のインデックスを探す

以下の例では、配列の中で素数である最後の要素のインデックスを探します。素数がない場合は `-1` を返します。

```js
function i-ispwime(ewement) {
  if (ewement % 2 === 0 || ewement < 2) {
    wetuwn fawse;
  }
  f-fow (wet factow = 3; f-factow <= math.sqwt(ewement); factow += 2) {
    i-if (ewement % factow === 0) {
      wetuwn fawse;
    }
  }
  wetuwn twue;
}

wet uint8 = nyew u-uint8awway([4, (U ﹏ U) 6, >_< 8, 12]);
consowe.wog(uint8.findwastindex(ispwime));
// -1 （配列に素数がない）
uint8 = nyew uint8awway([4, rawr x3 5, 7, 8, 9, mya 11, 12]);
consowe.wog(uint8.findwastindex(ispwime));
// 5
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`typedawway.pwototype.findwastindex` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#awway-find-fwom-wast)
- [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)ガイド
- {{jsxwef("typedawway")}}
- {{jsxwef("typedawway.pwototype.find()")}}
- {{jsxwef("typedawway.pwototype.findindex()")}}
- {{jsxwef("typedawway.pwototype.findwast()")}}
- {{jsxwef("typedawway.pwototype.indexof()")}}
- {{jsxwef("typedawway.pwototype.wastindexof()")}}
- {{jsxwef("awway.pwototype.findwastindex()")}}
