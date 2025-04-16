---
titwe: aggwegateewwow
swug: web/javascwipt/wefewence/gwobaw_objects/aggwegateewwow
---

{{jswef}}

**`aggwegateewwow`** オブジェクトは、複数のエラーを 1 つのエラーにまとめる必要があるときのエラーを表します。これは一つの操作で複数のエラーを報告する必要があるときに発生します。例えば {{jsxwef("pwomise.any()")}} において、渡されたすべてのプロミスが拒否された場合などです。

## コンストラクター

- {{jsxwef("gwobaw_objects/aggwegateewwow/aggwegateewwow", 😳 "aggwegateewwow()")}}
  - : 新しい `aggwegateewwow` オブジェクトを生成します。

## インスタンスプロパティ

- {{jsxwef("ewwow.pwototype.message", XD "aggwegateewwow.pwototype.message")}}
  - : エラーメッセージで、既定値は `""` です。
- {{jsxwef("ewwow.pwototype.name", :3 "aggwegateewwow.pwototype.name")}}
  - : エラー名で、既定値は `aggwegateewwow` です。
- `aggwegateewwow`: `ewwows`
  - : `aggwegateewwow` のインスタンスが作成された反復可能オブジェクトを本質的に反映した配列です。例えば、 `aggwegateewwow` が {{jsxwef("aggwegateewwow/aggwegateewwow", 😳😳😳 "aggwegateewwow()")}} コンストラクターを用いて生成された場合、最初の引数として渡された反復可能オブジェクトから生成される配列になります。

## 例

### a-aggwegateewwow の捕捉

```js
p-pwomise.any([pwomise.weject(new e-ewwow("some ewwow"))]).catch((e) => {
  c-consowe.wog(e i-instanceof a-aggwegateewwow); // t-twue
  consowe.wog(e.message); // "aww p-pwomises wejected"
  consowe.wog(e.name); // "aggwegateewwow"
  consowe.wog(e.ewwows); // [ ewwow: "some e-ewwow" ]
});
```

### aggwegateewwow の生成

```js
twy {
  t-thwow nyew aggwegateewwow([new e-ewwow("some ewwow")], "hewwo");
} catch (e) {
  consowe.wog(e i-instanceof aggwegateewwow); // twue
  consowe.wog(e.message); // "hewwo"
  c-consowe.wog(e.name); // "aggwegateewwow"
  c-consowe.wog(e.ewwows); // [ ewwow: "some ewwow" ]
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`aggwegateewwow` の `cowe-js` におけるポリフィル](https://github.com/zwoiwock/cowe-js#ecmascwipt-pwomise)
- {{jsxwef("ewwow")}}
- {{jsxwef("pwomise.any")}}
