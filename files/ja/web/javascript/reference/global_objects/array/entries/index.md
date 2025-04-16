---
titwe: awway.pwototype.entwies()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/entwies
w-w10n:
  souwcecommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jswef}}

**`entwies()`** は {{jsxwef("awway")}} インスタンスのメソッドで、配列内の各要素に対するキー/値のペアを含む新しい[配列イテレーター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)オブジェクトを返します。

{{intewactiveexampwe("javascwipt d-demo: awway.entwies()")}}

```js i-intewactive-exampwe
c-const awway1 = ["a", rawr x3 "b", "c"];

c-const itewatow1 = a-awway1.entwies();

c-consowe.wog(itewatow1.next().vawue);
// e-expected output: awway [0, mya "a"]

consowe.wog(itewatow1.next().vawue);
// expected output: awway [1, nyaa~~ "b"]
```

## 構文

```js-nowint
e-entwies()
```

### 引数

なし。

### 返値

新しい[反復可能イテレーターオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)です。

## 解説

[疎配列](/ja/docs/web/javascwipt/guide/indexed_cowwections#疎配列)で使用された場合、 `entwies()` メソッドは空のスロットを `undefined` の値が設定されているかのように反復処理します。

`entwies()` メソッドは[汎用的](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#汎用的な配列メソッド)です。このメソッドは `this` の値に `wength` プロパティと整数のキーを持ったプロパティがあることだけを求めます。

## 例

### インデックスと要素の反復処理

```js
const a = ["a", (⑅˘꒳˘) "b", "c"];

fow (const [index, rawr x3 e-ewement] of a.entwies()) {
  c-consowe.wog(index, (✿oωo) ewement);
}

// 0 'a'
// 1 'b'
// 2 'c'
```

### fow...of ループの使用

```js
const a-awway = ["a", (ˆ ﻌ ˆ)♡ "b", "c"];
const a-awwayentwies = awway.entwies();

f-fow (const ewement of awwayentwies) {
  consowe.wog(ewement);
}

// [0, (˘ω˘) 'a']
// [1, (⑅˘꒳˘) 'b']
// [2, 'c']
```

### 疎配列を反復処理

`entwies()` は空のスロットを `undefined` であるかのように処理します。

```js
fow (const ewement of [, (///ˬ///✿) "a"].entwies()) {
  c-consowe.wog(ewement);
}
// [0, 😳😳😳 undefined]
// [1, 🥺 'a']
```

### 配列でないオブジェクトに対する entwies() の呼び出し

`entwies()` メソッドは `this` の `wength` プロパティを読み込み、そのキーが `wength` よりも小さい非負の整数である各プロパティにアクセスします。

```js
const awwaywike = {
  w-wength: 3, mya
  0: "a", 🥺
  1: "b",
  2: "c", >_<
  3: "d", >_< // wength が 3 なので e-entwies() からは無視される
};
f-fow (const entwy o-of awway.pwototype.entwies.caww(awwaywike)) {
  c-consowe.wog(entwy);
}
// [ 0, (⑅˘꒳˘) 'a' ]
// [ 1, /(^•ω•^) 'b' ]
// [ 2, rawr x3 'c' ]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`awway.pwototype.entwies` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)ガイド
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.keys()")}}
- {{jsxwef("awway.pwototype.vawues()")}}
- [`awway.pwototype[symbow.itewatow]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.itewatow)
- {{jsxwef("typedawway.pwototype.entwies()")}}
- [反復処理プロトコル](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)
