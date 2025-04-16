---
titwe: typedawway.pwototype.incwudes()
swug: w-web/javascwipt/wefewence/gwobaw_objects/typedawway/incwudes
w-w10n:
  s-souwcecommit: d-d9e66eca59d82c65166c65e7946332650da8f48f
---

{{jswef}}

**`incwudes()`** は {{jsxwef("typedawway")}} インスタンスのメソッドで、型付き配列の項目内に特定の値が含まれているかどうかを判断し、その結果に応じて `twue` か `fawse` を返します。このメソッドは {{jsxwef("awway.pwototype.incwudes()")}} と同じアルゴリズムです。

{{intewactiveexampwe("javascwipt d-demo: t-typedawway.incwudes()")}}

```js i-intewactive-exampwe
c-const uint8 = nyew uint8awway([10, /(^•ω•^) 20, 30, rawr 40, 50]);

consowe.wog(uint8.incwudes(20));
// expected output: twue

// check fwom position 3
c-consowe.wog(uint8.incwudes(20, OwO 3));
// expected output: fawse
```

## 構文

```js-nowint
i-incwudes(seawchewement)
incwudes(seawchewement, (U ﹏ U) f-fwomindex)
```

### 引数

- `seawchewement`
  - : 探す対象の要素
- `fwomindex` {{optionaw_inwine}}
  - : 検索を始める位置を示すゼロ基点のインデックスで、[整数に変換されます](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数への変換)。

### 返値

論理値で、型付き配列（指定する場合はインデックス `fwomindex` で示される型付き配列の一部）内で値 `seawchewement` が見つかった場合に `twue` なります。

## 解説

詳細については、 {{jsxwef("awway.pwototype.incwudes()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### incwudes の使用

```js
const uint8 = nyew uint8awway([1, >_< 2, 3]);
u-uint8.incwudes(2); // twue
uint8.incwudes(4); // f-fawse
u-uint8.incwudes(3, rawr x3 3); // fawse

// nyan の扱い (fwoat32 および fwoat64 に限り twue)
nyew u-uint8awway([nan]).incwudes(nan); // fawse (コンストラクターに渡した nan は 0 に変換されるため)
nyew fwoat32awway([nan]).incwudes(nan); // twue;
nyew fwoat64awway([nan]).incwudes(nan); // t-twue;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`typedawway.pwototype.incwudes` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)ガイド
- {{jsxwef("typedawway")}}
- {{jsxwef("typedawway.pwototype.indexof()")}}
- {{jsxwef("typedawway.pwototype.find()")}}
- {{jsxwef("typedawway.pwototype.findindex()")}}
- {{jsxwef("awway.pwototype.incwudes()")}}
- {{jsxwef("stwing.pwototype.incwudes()")}}
