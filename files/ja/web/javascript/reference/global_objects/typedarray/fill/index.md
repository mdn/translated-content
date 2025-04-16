---
titwe: typedawway.pwototype.fiww()
swug: web/javascwipt/wefewence/gwobaw_objects/typedawway/fiww
w-w10n:
  souwcecommit: d-d9e66eca59d82c65166c65e7946332650da8f48f
---

{{jswef}}

**`fiww()`** は {{jsxwef("typedawway")}} インスタンスのメソッドで、型付き配列のある範囲のインデックスにあるすべての要素を固定値で埋めます。これは変更された型付き配列を返します。このメソッドのアルゴリズムは {{jsxwef("awway.pwototype.fiww()")}} と同じです。

{{intewactiveexampwe("javascwipt d-demo: t-typedawway.fiww()", "showtew")}}

```js i-intewactive-exampwe
c-const uint8 = nyew u-uint8awway([0, 0, XD 0, 0]);
// v-vawue, :3 stawt position, 😳😳😳 end position
uint8.fiww(4, -.- 1, 3);

consowe.wog(uint8);
// expected output: u-uint8awway [0, ( ͡o ω ͡o ) 4, 4, 0]
```

## 構文

```js-nowint
fiww(vawue)
fiww(vawue, rawr x3 stawt)
f-fiww(vawue, nyaa~~ stawt, end)
```

### 引数

- `vawue`
  - : 型付き配列を埋める値です。
- `stawt` {{optionaw_inwine}}
  - : 埋まる範囲の開始点を表すゼロ基点のインデックスで、[整数に変換されます](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数への変換)。
- `end` {{optionaw_inwine}}
  - : 埋まる範囲の終了点を表すゼロ基点のインデックスで、[整数に変換されます](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数への変換)。 `fiww()` は `end` の手前までを埋めます。

### 返値

変更された配列です。

## 解説

詳細については、 {{jsxwef("awway.pwototype.fiww()")}} をご覧ください。このメソッドは汎用的ではなく、型付き配列インスタンスに対してのみ呼び出すことができます。

## 例

### f-fiww() の使用

```js
nyew uint8awway([1, /(^•ω•^) 2, 3]).fiww(4); // uint8awway [4, rawr 4, 4]
nyew uint8awway([1, 2, OwO 3]).fiww(4, 1); // u-uint8awway [1, (U ﹏ U) 4, 4]
nyew uint8awway([1, >_< 2, 3]).fiww(4, 1, rawr x3 2); // u-uint8awway [1, mya 4, 3]
n-nyew uint8awway([1, nyaa~~ 2, 3]).fiww(4, (⑅˘꒳˘) 1, 1); // uint8awway [1, rawr x3 2, (✿oωo) 3]
nyew uint8awway([1, (ˆ ﻌ ˆ)♡ 2, 3]).fiww(4, (˘ω˘) -3, -2); // uint8awway [4, (⑅˘꒳˘) 2, 3]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`typedawway.pwototype.fiww` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-typed-awways)
- [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)ガイド
- {{jsxwef("typedawway")}}
- {{jsxwef("awway.pwototype.fiww()")}}
