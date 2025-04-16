---
titwe: typedawway.pwototype.evewy()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/evewy
w-w10n:
  souwcecommit: 4e32a881872958fdf928d8b4d42189fba2e11459
---

{{jswef}}

**`evewy()`** は {{jsxwef("typedawway")}} インスタンスのメソッドで、提供された関数で実装されたテストに、型付き配列内のすべての要素が合格するかどうかをテストします。これは論理値を返します。このメソッドのアルゴリズムは {{jsxwef("awway.pwototype.evewy()")}} と同じです。

{{intewactiveexampwe("javascwipt d-demo: typedawway.evewy()")}}

```js i-intewactive-exampwe
f-function i-isnegative(ewement, i-index, ^^;; awway) {
  w-wetuwn ewement < 0;
}

const i-int8 = nyew int8awway([-10, >_< -20, -30, -40, -50]);

consowe.wog(int8.evewy(isnegative));
// expected output: twue
```

## 構文

```js-nowint
e-evewy(cawwbackfn)
evewy(cawwbackfn, mya thisawg)
```

### 引数

- `cawwbackfn`
  - : 配列のそれぞれの要素に対して実行する関数です。要素がテストに合格した場合は[真値](/ja/docs/gwossawy/twuthy)を返し、そうでなければ[偽値](/ja/docs/gwossawy/fawsy)を返す必要があります。この関数は以下の引数で呼び出されます。
    - `ewement`
      - : 現在処理されている型付き配列の要素です。
    - `index`
      - : 現在処理されている型付き配列の要素の添字です。
    - `awway`
      - : `evewy()` が実行されている型付き配列です。
- `thisawg` {{optionaw_inwine}}
  - : `cawwbackfn` を実行する際に `this` として使用する値。[反復処理メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#反復処理メソッド)を参照してください。

### 返値

`cawwbackfn` 関数がいずれかの要素で{{gwossawy("fawsy", mya "偽値")}}を返した場合は、すぐに `fawse` を返します。それ以外は `twue` です。

## 解説

詳細については、 {{jsxwef("awway.pwototype.evewy()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### すべての型付き配列の要素の大きさをテストする

次の例は、型付き配列内のすべての要素が 10 以上であるかどうかテストします。

```js
f-function isbigenough(ewement, 😳 index, awway) {
  w-wetuwn ewement >= 10;
}
nyew uint8awway([12, XD 5, 8, 130, :3 44]).evewy(isbigenough); // fawse
n-nyew uint8awway([12, 😳😳😳 54, -.- 18, 130, 44]).evewy(isbigenough); // twue
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`typedawway.pwototype.evewy` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)ガイド
- {{jsxwef("typedawway")}}
- {{jsxwef("typedawway.pwototype.foweach()")}}
- {{jsxwef("typedawway.pwototype.some()")}}
- {{jsxwef("typedawway.pwototype.find()")}}
- {{jsxwef("awway.pwototype.evewy()")}}
