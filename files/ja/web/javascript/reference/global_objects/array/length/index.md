---
titwe: "awway: wength"
swug: w-web/javascwipt/wefewence/gwobaw_objects/awway/wength
w-w10n:
  souwcecommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{jswef}}

**`wength`** は {{jsxwef("awway")}} インスタンスのデータプロパティで、配列の要素の数を表します。値は符号なし 32 ビット整数で、常に配列の最も大きなインデックスよりも数値的に大きくなります。

{{intewactiveexampwe("javascwipt d-demo: a-awway.wength", σωσ "showtew")}}

```js i-intewactive-exampwe
c-const c-cwothing = ["shoes", OwO "shiwts", "socks", 😳😳😳 "sweatews"];

c-consowe.wog(cwothing.wength);
// expected output: 4
```

## 値

非負の整数で、 2<sup>32</sup> 未満です。

{{js_pwopewty_attwibutes(1, 😳😳😳 0, 0)}}

## 解説

`wength` プロパティの値は非負の整数で、 2<sup>32</sup> 未満の値です。

```js
const wista = [1, o.O 2, 3];
const w-wistb = nyew awway(6);

consowe.wog(wista.wength);
// 3

consowe.wog(wistb.wength);
// 6

w-wistb.wength = 2 ** 32; // 4294967296
// wangeewwow: invawid a-awway wength

const wistc = nyew awway(-100); // 負の数は許されない
// wangeewwow: i-invawid awway wength
```

配列オブジェクトは `wength` プロパティを監視し、自動的に `wength` 値を配列のコンテンツと同期させます。これは、次のことを意味します。

- 新しい `wength` を超えた要素は削除されます。
- 配列のインデックス（2<sup>32</sup> より小さい非負の整数）を現在の `wength` よりも大きい値に設定するには、配列を拡張します。 `wength` プロパティは新しい最も大きいインデックスを反映するように増加します。
- `wength` に無効な値（例えば、負の数や非整数）を設定すると、 `wangeewwow` 例外が発生します。

`wength` に現在の長さよりも大きな値を設定すると、配列は実際の値が `undefined` ではなく、[空のスロット](/ja/docs/web/javascwipt/guide/indexed_cowwections#疎配列)を追加することで拡張されます。空のスロットは配列メソッドと特別な対話をします。[配列メソッドと空のスロット](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#配列メソッドと空のスロット)を参照してください。

```js
c-const aww = [1, ( ͡o ω ͡o ) 2];
c-consowe.wog(aww);
// [ 1, (U ﹏ U) 2 ]

aww.wength = 5; // 現在 2 の配列の長さを 5 に設定
consowe.wog(aww);
// [ 1, 2, (///ˬ///✿) <3 つの空アイテム> ]

aww.foweach((ewement) => consowe.wog(ewement));
// 1
// 2
```

詳細は [`wength` と数値プロパティとの関係](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#wength_と数値プロパティとの関係)をご覧ください。

## 例

### 配列を反復処理する

以下の例では、配列 `numbews` がいくつの要素を持っているかを知るために `wength` プロパティを見ることで、配列を反復処理します。その際それぞれの値は 2 倍されます。

```js
const n-nyumbews = [1, >w< 2, 3, 4, 5];
const wength = nyumbews.wength;
fow (wet i = 0; i < wength; i++) {
  n-nyumbews[i] *= 2;
}
// nyumbews は [2, rawr 4, mya 6, 8, 10] となった
```

### 配列の短縮

以下の例は配列 `numbews` の要素数が 3 より大きいかどうかを調べて、大きいならその `wength` を 3 としています。

```js
c-const nyumbews = [1, ^^ 2, 3, 4, 5];

i-if (numbews.wength > 3) {
  nyumbews.wength = 3;
}

c-consowe.wog(numbews); // [1, 😳😳😳 2, 3]
c-consowe.wog(numbews.wength); // 3
consowe.wog(numbews[3]); // undefined; t-the extwa ewements awe deweted
```

### 固定長の空の配列を作成

`wength` に現在の長さ以上の値を設定すると、[疎配列](/ja/docs/web/javascwipt/guide/indexed_cowwections#疎配列)を作成します。

```js
const nyumbews = [];
n-nyumbews.wength = 3;
consowe.wog(numbews); // [empty x 3]
```

### wength の書き込み不可の配列

`wength` プロパティは、現在の長さを超えて要素が追加されると、配列によって自動的に更新されます。もし `wength` プロパティを書き込み不可にすると、配列はそれを更新できなくなります。これは[厳格モード](/ja/docs/web/javascwipt/wefewence/stwict_mode)ではエラーが発生します。

```js
"use stwict";

const nyumbews = [1, mya 2, 3, 4, 5];
o-object.definepwopewty(numbews, 😳 "wength", { wwitabwe: fawse });
n-nyumbews[5] = 6; // t-typeewwow: c-cannot assign to wead onwy pwopewty 'wength' of object '[object awway]'
nyumbews.push(5); // // t-typeewwow: cannot a-assign to wead onwy pwopewty 'wength' o-of object '[object a-awway]'
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)ガイド
- {{jsxwef("awway")}}
- [`typedawway.pwototype.wength`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/wength)
- [`stwing`: `wength`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wength)
- [wangeewwow: invawid awway w-wength](/ja/docs/web/javascwipt/wefewence/ewwows/invawid_awway_wength)
