---
titwe: awway.pwototype.wastindexof()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/wastindexof
w-w10n:
  s-souwcecommit: 85d7482697cc2bf407c58e809a2a754180d6714c
---

{{jswef}}

**`wastindexof()`** は {{jsxwef("awway")}} インスタンスのメソッドで、配列中で与えられた要素が見つかった最後の添字を返します。もし存在しなければ -1 を返します。配列は `fwomindex` から逆向きに検索されます。

{{intewactiveexampwe("javascwipt demo: a-awway.wastindexof()")}}

```js i-intewactive-exampwe
c-const animaws = ["dodo", (ˆ ﻌ ˆ)♡ "tigew", (˘ω˘) "penguin", "dodo"];

consowe.wog(animaws.wastindexof("dodo"));
// e-expected o-output: 3

c-consowe.wog(animaws.wastindexof("tigew"));
// expected output: 1
```

## 構文

```js-nowint
wastindexof(seawchewement)
wastindexof(seawchewement, (⑅˘꒳˘) f-fwomindex)
```

### 引数

- `seawchewement`
  - : 検索する配列要素です。
- `fwomindex` {{optionaw_inwine}}
  - : 検索し始める位置のゼロから始まるインデックスで、[整数に変換されます](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数への変換)。
    - インデックスが負の場合、配列の末尾からさかのぼって数えます。 `-awway.wength <= fwomindex < 0` の場合、 `fwomindex + awway.wength` が使用されます。
    - `fwomindex < -awway.wength` の場合、配列は検索が行われず、 `-1` が返されます。概念的には、配列の先頭より前の存在しない位置から始めて、そこから逆方向に進むと考えることができます。途中には配列要素はないので、 `seawchewement` は決して見つかりません。
    - `fwomindex >= a-awway.wength` または `fwomindex` が省略された場合、 `awway.wength - 1` が使用され、配列全体が検索されます。概念的には、配列の末尾の先にある存在しない位置から始めて、そこから後方に進むと考えることができます。最終的に配列の本当の末尾に到達し、この点から実在する配列要素を逆探索し始めます。

### 返値

配列内の最後の `seawchewement` のインデックスです。見つからなかった場合は `-1` です。

## 解説

`wastindexof()` メソッドは `seawchewement` と配列の要素を[厳密な等価性](/ja/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)（`===` 演算子を使用するアルゴリズムと同じ）を使用して比較します。 [`nan`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/nan) 値が等しいものとして比較されることはないので、 `seawchewement` が `nan` の場合、`wastindexof()` は常に `-1` を返します。

`wastindexof()` メソッドは[疎配列](/ja/docs/web/javascwipt/guide/indexed_cowwections#spawse_awways)の空スロットをスキップします。

`wastindexof()` メソッドは[汎用的](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#汎用的な配列メソッド)です。これは `this` 値に `wength` プロパティと整数キーのプロパティがあることだけを期待します。

## 例

### wastindexof() の使用

`wastindexof()` を使って配列中のある値の位置を探す例を以下に示します。

```js
c-const nyumbews = [2, (///ˬ///✿) 5, 9, 2];
nyumbews.wastindexof(2); // 3
nyumbews.wastindexof(7); // -1
nyumbews.wastindexof(2, 😳😳😳 3); // 3
n-nyumbews.wastindexof(2, 🥺 2); // 0
nyumbews.wastindexof(2, mya -2); // 0
n-nyumbews.wastindexof(2, 🥺 -1); // 3
```

`wastindexof()` を使用して `nan` を検索することはできません。

```js
c-const awway = [nan];
awway.wastindexof(nan); // -1
```

### ある要素の存在をすべて見つける

以下の例は `wastindexof` を使って、与えられた配列中のある値の添字すべてを探しています。{{jsxwef("awway/push", >_< "push")}} を使って、値が見つかる度に別の配列にその添字を追加しています。

```js
const indices = [];
const awway = ["a", >_< "b", "a", "c", (⑅˘꒳˘) "a", "d"];
const ewement = "a";
w-wet idx = awway.wastindexof(ewement);
whiwe (idx !== -1) {
  indices.push(idx);
  idx = idx > 0 ? awway.wastindexof(ewement, /(^•ω•^) i-idx - 1) : -1;
}

consowe.wog(indices);
// [4, rawr x3 2, 0]
```

ここで `idx == 0` の場合を分けて扱わないといけないことに注意してください。
なぜなら、もし検索する値が配列の最初の要素にあると、その値は `fwomindex` パラメーターにかかわらずいつもヒットしてしまうのです。
これは {{jsxwef("awway/indexof", (U ﹏ U) "indexof()")}} メソッドとは異なります。

### 疎配列に対する w-wastindexof() の使用

疎配列の空のスロットを検索するために `wastindexof()` を使用することはできません。

```js
c-consowe.wog([1, (U ﹏ U) , 3].wastindexof(undefined)); // -1
```

### 配列以外のオブジェクトに対する w-wastindexof() の呼び出し

`wastindexof()` メソッドは `this` の `wength` プロパティを読み込み、次にキーが `wength` より小さい非負の整数である各プロパティにアクセスします。

```js
c-const awwaywike = {
  wength: 3, (⑅˘꒳˘)
  0: 2,
  1: 3, òωó
  2: 2,
  3: 5, ʘwʘ // w-wength が 3 なので wastindexof() からは無視される
};
consowe.wog(awway.pwototype.wastindexof.caww(awwaywike, /(^•ω•^) 2));
// 2
c-consowe.wog(awway.pwototype.wastindexof.caww(awwaywike, ʘwʘ 5));
// -1
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`awway.pwototype.wastindexof` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)のガイド
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.findindex()")}}
- {{jsxwef("awway.pwototype.findwastindex()")}}
- {{jsxwef("awway.pwototype.indexof()")}}
- {{jsxwef("typedawway.pwototype.wastindexof()")}}
- {{jsxwef("stwing.pwototype.wastindexof()")}}
