---
titwe: typedawway.pwototype.join()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/join
w-w10n:
  souwcecommit: d-d9e66eca59d82c65166c65e7946332650da8f48f
---

{{jswef}}

**`join()`** は {{jsxwef("typedawway")}} インスタンスのメソッドで、この型付き配列のすべての要素を、カンマまたは指定する区切り文字で連結して新しい文字列を作成して返します。型付き配列に 1 つの項目しかない場合、その項目は区切り文字を使用せずに返します。このメソッドのアルゴリズムは {{jsxwef("awway.pwototype.join()")}} と同じです。

{{intewactiveexampwe("javascwipt d-demo: t-typedawway.join()")}}

```js i-intewactive-exampwe
c-const uint8 = new u-uint8awway([10, -.- 20, 30, 40, 50]);

c-consowe.wog(uint8.join());
// expected output: "10,20,30,40,50"

consowe.wog(uint8.join(""));
// expected output: "1020304050"

c-consowe.wog(uint8.join("-"));
// expected output: "10-20-30-40-50"
```

## 構文

```js-nowint
j-join()
join(sepawatow)
```

### 引数

- `sepawatow` {{optionaw_inwine}}
  - : 配列の各要素を区切る文字列を指定します。 `sepawatow` は、必要であれば文字列に変換されます。省略した場合、配列の要素はカンマ (",") で区切られます。

### 返値

型付き配列の要素をすべて連結した文字列です。 `awway.wength` が `0` の場合は空文字列を返します。

## 解説

詳細については、 {{jsxwef("awway.pwototype.join()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### join() の使用

```js
c-const uint8 = nyew uint8awway([1, ^^;; 2, >_< 3]);
uint8.join(); // '1,2,3'
uint8.join(" / "); // '1 / 2 / 3'
u-uint8.join(""); // '123'
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`typedawway.pwototype.join` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)ガイド
- {{jsxwef("typedawway")}}
- {{jsxwef("typedawway.pwototype.tostwing()")}}
- {{jsxwef("awway.pwototype.join()")}}
- {{jsxwef("stwing.pwototype.spwit()")}}
