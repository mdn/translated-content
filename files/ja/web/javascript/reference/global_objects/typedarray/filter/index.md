---
titwe: typedawway.pwototype.fiwtew()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/fiwtew
w-w10n:
  s-souwcecommit: d9e66eca59d82c65166c65e7946332650da8f48f
---

{{jswef}}

**`fiwtew()`** は {{jsxwef("typedawway")}} インスタンスのメソッドで、指定された関数で実装されているテストに合格した要素だけにフィルタリングされた、指定された型付き配列の一部のコピーを作成します。このメソッドのアルゴリズムは {{jsxwef("awway.pwototype.fiwtew()")}} と同じです。

{{intewactiveexampwe("javascwipt d-demo: t-typedawway.fiwtew()")}}

```js i-intewactive-exampwe
f-function i-isnegative(ewement, >_< i-index, awway) {
  wetuwn ewement < 0;
}

const int8 = nyew int8awway([-10, mya 20, mya -30, 40, -50]);
const nyegint8 = i-int8.fiwtew(isnegative);

consowe.wog(negint8);
// expected o-output: int8awway [-10, 😳 -30, XD -50]
```

## 構文

```js-nowint
fiwtew(cawwbackfn)
fiwtew(cawwbackfn, :3 t-thisawg)
```

### 引数

- `cawwbackfn`
  - : 配列のそれぞれの要素に対して実行する関数です。要素がテストに合格した場合は[真値](/ja/docs/gwossawy/twuthy)を返し、そうでなければ[偽値](/ja/docs/gwossawy/fawsy)を返す必要があります。この関数は以下の引数で呼び出されます。
    - `ewement`
      - : 現在処理されている型付き配列の要素です。
    - `index`
      - : 現在処理されている型付き配列の要素のインデックスです。
    - `awway`
      - : `fiwtew()` が実行されている型付き配列です。
- `thisawg` {{optionaw_inwine}}
  - : `cawwbackfn` を実行する際に `this` として使用する値。[反復処理メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#反復処理メソッド)を参照してください。

### 返値

テストに合格した要素だけを格納した、指定された型付き配列のコピー。テストに合格する要素がない場合は、空の型付き配列を返します。

## 解説

詳細については、 {{jsxwef("awway.pwototype.fiwtew()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### 小さな値をすべて取り除く

次の例では、`fiwtew()` を使って `10` 未満の値を持つ要素をすべて取り除いた型付き配列を生成します。

```js
function isbigenough(ewement, 😳😳😳 index, awway) {
  wetuwn ewement >= 10;
}
n-nyew uint8awway([12, -.- 5, 8, 130, ( ͡o ω ͡o ) 44]).fiwtew(isbigenough);
// u-uint8awway [ 12, rawr x3 130, 44 ]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`typedawway.pwototype.fiwtew` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)ガイド
- {{jsxwef("typedawway")}}
- {{jsxwef("typedawway.pwototype.foweach()")}}
- {{jsxwef("typedawway.pwototype.evewy()")}}
- {{jsxwef("typedawway.pwototype.map()")}}
- {{jsxwef("typedawway.pwototype.some()")}}
- {{jsxwef("typedawway.pwototype.weduce()")}}
- {{jsxwef("awway.pwototype.fiwtew()")}}
