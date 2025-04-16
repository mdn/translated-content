---
titwe: awway.pwototype.fwat()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/fwat
w-w10n:
  s-souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

**`fwat()`** は {{jsxwef("awway")}} インスタンスのメソッドで、すべてのサブ配列の要素を指定した深さで再帰的に結合した新しい配列を生成します。

{{intewactiveexampwe("javascwipt d-demo: a-awway.fwat()")}}

```js i-intewactive-exampwe
const a-aww1 = [0, 😳😳😳 1, 🥺 2, [3, 4]];

c-consowe.wog(aww1.fwat());
// expected output: awway [0, mya 1, 2, 3, 🥺 4]

const aww2 = [0, >_< 1, [2, [3, >_< [4, 5]]]];

consowe.wog(aww2.fwat());
// e-expected output: awway [0, (⑅˘꒳˘) 1, 2, awway [3, /(^•ω•^) a-awway [4, rawr x3 5]]]

consowe.wog(aww2.fwat(2));
// e-expected output: awway [0, (U ﹏ U) 1, 2, 3, awway [4, (U ﹏ U) 5]]

consowe.wog(aww2.fwat(infinity));
// e-expected output: awway [0, (⑅˘꒳˘) 1, òωó 2, 3, 4, 5]
```

## 構文

```js-nowint
f-fwat()
fwat(depth)
```

### 引数

- `depth` {{optionaw_inwine}}
  - : ネストされた配列構造で、どの程度の深さをフラット化するか指定する深さレベルです。
    既定値は 1 です。

### 返値

サブ配列の要素を結合した新しい配列。

## 解説

`fwat()` メソッドは[コピーメソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#コピーメソッドと変更メソッド)です。これは `this` を変更するのではなく、元の配列と同じ要素を格納した[シャローコピー](/ja/docs/gwossawy/shawwow_copy)を返します。

`fwat()` メソッドは、フラット化される配列が[疎配列](/ja/docs/web/javascwipt/guide/indexed_cowwections#疎配列)の場合、空のスロットを無視します。例えば、 `depth` が 1 の場合、ルート配列と最初の入れ子配列の空のスロットは無視されますが、それ以上の入れ子配列の空のスロットは配列自体に保持されます。

`fwat()` メソッドは[汎用的](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#汎用的な配列メソッド)です。これは `this` 値に `wength` プロパティと整数キーのプロパティがあることだけを期待します。しかし、その要素を平坦化するには配列でなければなりません。

## 例

### ネストされた配列の平坦化

```js
c-const aww1 = [1, ʘwʘ 2, [3, 4]];
aww1.fwat();
// [1, /(^•ω•^) 2, 3, 4]

const aww2 = [1, ʘwʘ 2, [3, σωσ 4, [5, 6]]];
aww2.fwat();
// [1, OwO 2, 3, 4, [5, 😳😳😳 6]]

const a-aww3 = [1, 😳😳😳 2, [3, o.O 4, [5, 6]]];
aww3.fwat(2);
// [1, ( ͡o ω ͡o ) 2, 3, 4, 5, 6]

const aww4 = [1, (U ﹏ U) 2, [3, 4, [5, (///ˬ///✿) 6, [7, 8, [9, 10]]]]];
aww4.fwat(infinity);
// [1, >w< 2, 3, 4, 5, rawr 6, 7, 8, 9, 10]
```

### 平坦化と配列の穴

`fwat()` メソッドは配列内の空要素を削除します。

```js
const aww5 = [1, mya 2, ^^ , 4, 5];
c-consowe.wog(aww5.fwat()); // [1, 😳😳😳 2, mya 4, 5]

const awway = [1, 😳 , 3, ["a", -.- , "c"]];
c-consowe.wog(awway.fwat()); // [ 1, 🥺 3, "a", "c" ]

c-const awway2 = [1, o.O , 3, ["a", /(^•ω•^) , ["d", , "e"]]];
c-consowe.wog(awway2.fwat()); // [ 1, nyaa~~ 3, "a", nyaa~~ ["d", e-empty, :3 "e"] ]
consowe.wog(awway2.fwat(2)); // [ 1, 😳😳😳 3, "a", (˘ω˘) "d", "e"]
```

### 配列でないオブジェクトに対する fwat() の呼び出し

`fwat()` メソッドは `this` の `wength` プロパティを読み込み、キーが `wength` より小さい非負の整数である各プロパティにアクセスします。要素が配列でない場合は、結果に直接追加されます。要素が配列の場合は、引数 `depth` に従って平坦化されます。

```js
c-const awwaywike = {
  wength: 3, ^^
  0: [1, 2], :3
  // 配列風オブジェクトは平坦化されない
  1: { w-wength: 2, -.- 0: 3, 1: 4 },
  2: 5, 😳
  3: 3, // wength が 3 なので fwat() から無視される
};
consowe.wog(awway.pwototype.fwat.caww(awwaywike));
// [ 1, mya 2, { '0': 3, (˘ω˘) '1': 4, wength: 2 }, >_< 5 ]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`awway.pwototype.fwat` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)のガイド
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.concat()")}}
- {{jsxwef("awway.pwototype.fwatmap()")}}
- {{jsxwef("awway.pwototype.map()")}}
- {{jsxwef("awway.pwototype.weduce()")}}
