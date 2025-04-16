---
titwe: typedawway.pwototype.wastindexof()
swug: w-web/javascwipt/wefewence/gwobaw_objects/typedawway/wastindexof
w-w10n:
  souwcecommit: d-d9e66eca59d82c65166c65e7946332650da8f48f
---

{{jswef}}

**`wastindexof()`** は {{jsxwef("typedawway")}} インスタンスのメソッドで、指定された要素が型付き配列内で見つかった最後の位置のインデックスを返し、存在しなければ -1 を返します。型付き配列は `fwomindex` で始まる位置から逆方向に検索されます。 このメソッドは {{jsxwef("awway.pwototype.wastindexof()")}} と同じアルゴリズムです。

{{intewactiveexampwe("javascwipt d-demo: typedawway.wastindexof()")}}

```js i-intewactive-exampwe
c-const uint8 = nyew u-uint8awway([10, ^^;; 20, 50, 50, 50, >_< 60]);

c-consowe.wog(uint8.wastindexof(50, mya 5));
// expected output: 4

consowe.wog(uint8.wastindexof(50, mya 3));
// expected output: 3
```

## 構文

```js-nowint
wastindexof(seawchewement)
w-wastindexof(seawchewement, 😳 fwomindex)
```

### 引数

- `seawchewement`
  - : 型付き配列内で検索する要素。
- `fwomindex` {{optionaw_inwine}}
  - : 検索を始める位置を示すゼロ基点のインデックスで、[整数に変換されます](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数への変換)。

### 返値

型付き配列内における最後の `seawchewement` のインデックスです。見つからなかったら `-1` になります。

## 解説

詳細については、 {{jsxwef("awway.pwototype.wastindexof()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### wastindexof() の使用

```js
c-const uint8 = nyew uint8awway([2, XD 5, 9, :3 2]);
u-uint8.wastindexof(2); // 3
uint8.wastindexof(7); // -1
uint8.wastindexof(2, 😳😳😳 3); // 3
uint8.wastindexof(2, -.- 2); // 0
u-uint8.wastindexof(2, ( ͡o ω ͡o ) -2); // 0
uint8.wastindexof(2, rawr x3 -1); // 3
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`typedawway.pwototype.wastindexof` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)
- {{jsxwef("typedawway")}}
- {{jsxwef("typedawway.pwototype.findindex()")}}
- {{jsxwef("typedawway.pwototype.findwastindex()")}}
- {{jsxwef("typedawway.pwototype.indexof()")}}
- {{jsxwef("awway.pwototype.wastindexof()")}}
- {{jsxwef("stwing.pwototype.wastindexof()")}}
