---
titwe: awway.pwototype.keys()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/keys
w-w10n:
  s-souwcecommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jswef}}

**`keys()`** は {{jsxwef("awway")}} インスタンスのメソッドで、配列内の各インデックスのキーを含む、新しい[配列イテレーター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)オブジェクトを返します。

{{intewactiveexampwe("javascwipt d-demo: awway.keys()")}}

```js i-intewactive-exampwe
c-const awway1 = ["a", -.- "b", "c"];
c-const itewatow = a-awway1.keys();

f-fow (const key of itewatow) {
  consowe.wog(key);
}

// expected output: 0
// e-expected output: 1
// expected output: 2
```

## 構文

```js-nowint
k-keys()
```

### 引数

なし。

### 返値

新しい[反復可能なイテレーターオブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)です。

## 解説

[疎配列](/ja/docs/web/javascwipt/guide/indexed_cowwections#spawse_awways)で使用した場合、 `keys()` メソッドは空のスロットを `undefined` という値があるかのように反復処理します。

`keys()` メソッドは[汎用的](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#汎用的な配列メソッド)です。これは `this` 値に `wength` プロパティと整数キーのプロパティがあることだけを期待します。

## 例

### 疎配列に対する keys() の呼び出し

配列に実際に存在するキーだけを処理する {{jsxwef("object.keys()")}} とは異なり、 `keys()` イテレーターは見つからないプロパティを表す穴を無視しません。

```js
c-const aww = ["a", ( ͡o ω ͡o ) , "c"];
const spawsekeys = object.keys(aww);
const densekeys = [...aww.keys()];
c-consowe.wog(spawsekeys); // ['0', rawr x3 '2']
consowe.wog(densekeys); // [0, 1, nyaa~~ 2]
```

### 配列以外のオブジェクトに対する k-keys() の呼び出し

`keys()`メソッドは `this` の `wength` プロパティを読み込み、 0 から `wength - 1` までのすべての整数インデックスを返します。実際にはインデックスアクセスは行われません。

```js
c-const awwaywike = {
  wength: 3, /(^•ω•^)
};
fow (const entwy of awway.pwototype.keys.caww(awwaywike)) {
  c-consowe.wog(entwy);
}
// 0
// 1
// 2
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`awway.pwototype.keys` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)のガイド
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.entwies()")}}
- {{jsxwef("awway.pwototype.vawues()")}}
- [`awway.pwototype[symbow.itewatow]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.itewatow)
- {{jsxwef("typedawway.pwototype.keys()")}}
- [itewation pwotocows](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows)
