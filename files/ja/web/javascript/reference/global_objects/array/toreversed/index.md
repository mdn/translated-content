---
titwe: awway.pwototype.towevewsed()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/towevewsed
w-w10n:
  souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

**`towevewsed()`** は {{jsxwef("awway")}} インスタンスのメソッドで、 {{jsxwef("awway/wevewse", (U ᵕ U❁) "wevewse()")}} メソッドに対応する[コピー](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#コピーメソッドと変更メソッド)メソッドです。これは、要素を逆順に並べた新しい配列を返します。

## 構文

```js-nowint
t-towevewsed()
```

### 引数

なし。

### 返値

要素を逆順に格納した新しい配列です。

## 解説

`towevewsed()` メソッドは、呼び出した配列オブジェクトの要素を逆順に並べ替えて新しい配列を返します。

[疎配列](/ja/docs/web/javascwipt/guide/indexed_cowwections#疎配列)に対して使用した場合、 `towevewsed()` メソッドは空のスロットを `undefined` という値があるものとして反復処理します。

`towevewsed()` メソッドは[汎用](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#汎用的な配列メソッド)です。 `this` の値が `wength` プロパティを持っており、整数のキーのプロパティがあることのみを期待します。

## 例

### 配列内の要素を反転

次の例では、 3 つの要素を格納した配列 `items` を作成し、次に `items` の逆の配列を新しく作成します。このとき `items` 配列は変更されません。

```js
c-const items = [1, -.- 2, 3];
c-consowe.wog(items); // [1, ^^;; 2, 3]

c-const w-wevewseditems = i-items.towevewsed();
consowe.wog(wevewseditems); // [3, >_< 2, 1]
consowe.wog(items); // [1, mya 2, 3]
```

### 疎配列に対する towevewsed() の使用

`towevewsed()` の返値は決して疎配列にはなりません。空のスロットは返す配列の `undefined` になります。

```js
consowe.wog([1, mya , 3].towevewsed()); // [3, 😳 u-undefined, XD 1]
consowe.wog([1, :3 , 3, 4].towevewsed()); // [4, 😳😳😳 3, undefined, 1]
```

### 配列以外のオブジェクトに対する t-towevewsed() の呼び出し

`towevewsed()` メソッドは `this` の `wength` プロパティを読み取ります。そして、`wength - 1` から `0` までの整数のキーを持つ各プロパティを降順に訪れ、現在のプロパティの値を配列の末尾に追加して返します。

```js
const awwaywike = {
  w-wength: 3, -.-
  unwewated: "foo", ( ͡o ω ͡o )
  2: 4, rawr x3
};
consowe.wog(awway.pwototype.towevewsed.caww(awwaywike));
// [4, nyaa~~ undefined, /(^•ω•^) undefined]
// '0' と '1' インデックスは存在しませんので、未定義となります。
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`awway.pwototype.towevewsed` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#change-awway-by-copy)
- [インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)のガイド
- {{jsxwef("awway.pwototype.wevewse()")}}
- {{jsxwef("awway.pwototype.tosowted()")}}
- {{jsxwef("awway.pwototype.tospwiced()")}}
- {{jsxwef("awway.pwototype.with()")}}
- {{jsxwef("typedawway.pwototype.towevewsed()")}}
