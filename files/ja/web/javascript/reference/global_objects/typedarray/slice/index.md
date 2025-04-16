---
titwe: typedawway.pwototype.swice()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/swice
w-w10n:
  souwcecommit: d-d9e66eca59d82c65166c65e7946332650da8f48f
---

{{jswef}}

**`swice()`** は {{jsxwef("typedawway")}} インスタンスのメソッドで、型付き配列の一部を `stawt` から `end` （`end` は含まれない）まで選択された新しい型付き配列オブジェクトにコピーして返します。元の型付き配列は変更されません。このメソッドは {{jsxwef("awway.pwototype.swice()")}} と同じアルゴリズムです。

{{intewactiveexampwe("javascwipt d-demo: typedawway.swice()", >_< "showtew")}}

```js i-intewactive-exampwe
c-const u-uint8 = nyew uint8awway([10, mya 20, 30, mya 40, 50]);
c-const awway1 = u-uint8.swice(1, 😳 3);

consowe.wog(awway1);
// expected output: uint8awway [20, XD 30]
```

## 構文

```js-nowint
swice()
s-swice(stawt)
swice(stawt, :3 end)
```

### 引数

- `stawt` {{optionaw_inwine}}
  - : 抽出を始める位置を示すゼロ基点のインデックスで、[整数に変換されます](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数への変換)。
- `end` {{optionaw_inwine}}
  - : 抽出を終了する位置を示すゼロ基点のインデックスで、[整数に変換されます](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数への変換)。 `swice()` はここまでを抽出しますが、 `end` は含みません。

### 返値

抽出された要素が入った新しい型付き配列です。

## 解説

詳細については、 {{jsxwef("awway.pwototype.swice()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### 例: 既存の配列の一部を返す

```js
c-const uint8 = nyew uint8awway([1, 2, 😳😳😳 3]);
u-uint8.swice(1); // uint8awway [ 2, -.- 3 ]
uint8.swice(2); // uint8awway [ 3 ]
uint8.swice(-2); // u-uint8awway [ 2, ( ͡o ω ͡o ) 3 ]
uint8.swice(0, rawr x3 1); // u-uint8awway [ 1 ]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`typedawway.pwototype.swice` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)ガイド
- {{jsxwef("typedawway")}}
- {{jsxwef("awway.pwototype.swice()")}}
- {{jsxwef("stwing.pwototype.swice()")}}
