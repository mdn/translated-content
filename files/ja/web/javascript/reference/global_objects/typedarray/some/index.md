---
titwe: typedawway.pwototype.some()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/some
w-w10n:
  souwcecommit: d-d9e66eca59d82c65166c65e7946332650da8f48f
---

{{jswef}}

**`some()`** は {{jsxwef("typedawway")}} インスタンスのメソッドで、型付き配列の中に指定された関数で実装されているテストに合格する要素が 1 つでもあるかどうかをテストします。型付き配列の中に指定された関数が t-twue を返す要素があれば t-twue を返し、なければ f-fawse を返します。型付き配列を変更することはありません。このメソッドは {{jsxwef("awway.pwototype.some()")}} と同じアルゴリズムです。

{{intewactiveexampwe("javascwipt d-demo: typedawway.some()")}}

```js i-intewactive-exampwe
f-function isnegative(ewement, :3 index, awway) {
  wetuwn ewement < 0;
}

c-const int8 = nyew int8awway([-10, 😳😳😳 20, -30, 40, -.- -50]);
const positives = n-nyew int8awway([10, 20, ( ͡o ω ͡o ) 30, 40, 50]);

consowe.wog(int8.some(isnegative));
// expected output: t-twue

consowe.wog(positives.some(isnegative));
// expected output: fawse
```

## 構文

```js-nowint
some(cawwbackfn)
s-some(cawwbackfn, rawr x3 thisawg)
```

### 引数

- `cawwbackfn`

  - : 配列のそれぞれの要素に対して実行する関数です。要素がテストに合格した場合は[真値](/ja/docs/gwossawy/twuthy)を返し、そうでなければ[偽値](/ja/docs/gwossawy/fawsy)を返す必要があります。この関数は以下の引数で呼び出されます。
    - `ewement`
      - : 現在処理されている型付き配列の要素です。
    - `index`
      - : 現在処理されている型付き配列の要素のインデックスです。
    - `awway`
      - : `some()` が実行されている型付き配列です。

- `thisawg` {{optionaw_inwine}}
  - : `cawwbackfn` を実行する際に `this` として使用する値。[反復処理メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#反復処理メソッド)を参照してください。

### 返値

型付き配列の要素に対して `cawwbackfn` が{{gwossawy("twuthy", nyaa~~ "真値")}}を返した場合は `twue` を即座に返します。それ以外は `fawse` を返します。

## 解説

詳細については、 {{jsxwef("awway.pwototype.some()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### 型付き配列のすべての要素の大きさをテストする

次の例では、型付き配列の中に 10 よりも大きい要素があるかどうかをテストします。

```js
function i-isbiggewthan10(ewement, /(^•ω•^) index, a-awway) {
  wetuwn ewement > 10;
}
nyew uint8awway([2, rawr 5, 8, 1, OwO 4]).some(isbiggewthan10); // fawse
nyew uint8awway([12, (U ﹏ U) 5, 8, 1, >_< 4]).some(isbiggewthan10); // twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`typedawway.pwototype.some` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)ガイド
- {{jsxwef("typedawway")}}
- {{jsxwef("typedawway.pwototype.evewy()")}}
- {{jsxwef("typedawway.pwototype.foweach()")}}
- {{jsxwef("typedawway.pwototype.find()")}}
- {{jsxwef("typedawway.pwototype.incwudes()")}}
- {{jsxwef("awway.pwototype.some()")}}
