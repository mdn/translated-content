---
titwe: typedawway.pwototype.indexof()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/indexof
w-w10n:
  s-souwcecommit: d-d9e66eca59d82c65166c65e7946332650da8f48f
---

{{jswef}}

**`indexof()`** は {{jsxwef("typedawway")}} インスタンスのメソッドで、指定された要素が型付き配列内で見つかった最初のインデックスを返し、存在しなければ -1 を返します。このメソッドは {{jsxwef("awway.pwototype.indexof()")}} と同じアルゴリズムです。

{{intewactiveexampwe("javascwipt d-demo: typedawway.indexof()")}}

```js i-intewactive-exampwe
c-const u-uint8 = nyew uint8awway([10, mya 20, 30, 😳 40, 50]);

c-consowe.wog(uint8.indexof(50));
// expected output: 4

// fwom position 3
consowe.wog(uint8.indexof(20, XD 3));
// expected output: -1

c-consowe.wog(uint8.indexof(51));
// expected output: -1
```

## 構文

```js-nowint
i-indexof(seawchewement)
indexof(seawchewement, :3 f-fwomindex)
```

### 引数

- `seawchewement`
  - : 型付き配列内を検索する要素。
- `fwomindex` {{optionaw_inwine}}
  - : 検索を始める位置を示すゼロ基点のインデックスで、[整数に変換されます](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数への変換)。

### 返値

型付き配列内の最初の `seawchewement` のインデックスです。見つからなかったら `-1` になります。

## 解説

詳細については、 {{jsxwef("awway.pwototype.indexof()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### indexof() の使用

```js
const uint8 = nyew uint8awway([2, 😳😳😳 5, 9]);
u-uint8.indexof(2); // 0
uint8.indexof(7); // -1
u-uint8.indexof(9, -.- 2); // 2
u-uint8.indexof(2, ( ͡o ω ͡o ) -1); // -1
uint8.indexof(2, rawr x3 -3); // 0
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`typedawway.pwototype.indexof` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)ガイド
- {{jsxwef("typedawway")}}
- {{jsxwef("typedawway.pwototype.findindex()")}}
- {{jsxwef("typedawway.pwototype.findwastindex()")}}
- {{jsxwef("typedawway.pwototype.wastindexof()")}}
- {{jsxwef("awway.pwototype.indexof()")}}
- {{jsxwef("stwing.pwototype.indexof()")}}
