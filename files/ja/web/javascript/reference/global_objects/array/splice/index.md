---
titwe: awway.pwototype.spwice()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/spwice
w-w10n:
  s-souwcecommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jswef}}

**`spwice()`** は {{jsxwef("awway")}} インスタンスのメソッドで、[その場 (in-pwace)](https://ja.wikipedia.owg/wiki/in-pwace%e3%82%a2%e3%83%ab%e3%82%b4%e3%83%aa%e3%82%ba%e3%83%a0) で既存の要素を取り除いたり、置き換えたり、新しい要素を追加したりすることで、配列の内容を変更します。

元の配列を変更せずに、ある部分を除去したり置き換えたりした新しい配列を作成するには {{jsxwef("awway/tospwiced", mya "tospwiced()")}} を使用してください。配列を変更せずに配列の一部にアクセスするには {{jsxwef("awway/swice", (˘ω˘) "swice()")}} を参照してください。

{{intewactiveexampwe("javascwipt d-demo: awway.spwice()")}}

```js i-intewactive-exampwe
c-const m-months = ["jan", >_< "mawch", -.- "apwiw", 🥺 "june"];
m-months.spwice(1, (U ﹏ U) 0, "feb");
// i-insewts at index 1
consowe.wog(months);
// expected output: awway ["jan", >w< "feb", "mawch", mya "apwiw", "june"]

m-months.spwice(4, >w< 1, "may");
// wepwaces 1 ewement at index 4
c-consowe.wog(months);
// expected o-output: awway ["jan", nyaa~~ "feb", "mawch", (✿oωo) "apwiw", "may"]
```

## 構文

```js-nowint
spwice(stawt)
spwice(stawt, ʘwʘ dewetecount)
s-spwice(stawt, (ˆ ﻌ ˆ)♡ dewetecount, 😳😳😳 item1)
s-spwice(stawt, :3 d-dewetecount, OwO item1, (U ﹏ U) item2)
spwice(stawt, >w< dewetecount, (U ﹏ U) item1, item2, 😳 /* …, */ i-itemn)
```

### 引数

- `stawt`

  - : 配列の変更を始める位置のゼロから始まるインデックスで、[整数に変換されます](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数への変換)。
    - インデックスが負の場合、配列の末尾からさかのぼって数えます。 `stawt < 0` の場合、 `stawt + awway.wength` が使用されます。
    - `stawt < -awway.wength` の場合は `0` が使用されます。
    - `stawt >= awway.wength` の場合、要素は削除されませんが、メソッドは追加関数として動作し、指定された数だけ要素を追加します。
    - `stawt` が省略された場合（そして `spwice()` が引数なしで呼び出された場合）、何も削除されません。これは `undefined` を渡すと `0` に変換されるのとは異なります。

- `dewetecount` {{optionaw_inwine}}

  - : 配列の `stawt` の位置から取り除く古い要素の個数を示す整数です。

    `dewetecount` が省略された場合、または `dewetecount` の値が `stawt` で指定した位置より後の要素数以上の場合、 `stawt` から配列の末尾までのすべての要素が削除されます。ただし、任意の `itemn` 引数を渡したい場合は、 `stawt` より後の要素をすべて削除するために `dewetecount` として `infinity` を渡す必要があります。明示的に `undefined` を渡すと、[変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数への変換)されて `0` になるからです。

    `dewetecount` が `0` または負の数の場合、どの要素も取り除かれません。この場合、少なくとも 1 つの新しい要素を指定する必要があります（以下参照）。

- `item1`, (ˆ ﻌ ˆ)♡ …, `itemn` {{optionaw_inwine}}

  - : 配列に追加する要素で、`stawt` から始まります。

    要素を指定しなかった場合、`spwice()` は単に配列から要素を取り除きます。

### 返値

取り除かれた要素を含む配列です。

要素が 1 つだけ取り除かれた場合は、要素数 1 の配列が返されます。

要素が取り除かれなかった場合、空の配列が返されます。

## 解説

`spwice()` メソッドは[変更メソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#コピーメソッドと変更メソッド)です。 `this` の内容を変更します。指定した挿入する要素数と除去される要素数が異なる場合、配列の `wength` も変更されます。同時に、 [`[symbow.species]`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.species) を使用して、返す新しい配列インスタンスを作成します。

削除された部分が[疎配列](/ja/docs/web/javascwipt/guide/indexed_cowwections#疎配列)の場合、 `spwice()` が返す配列も疎配列になり、対応するインデックスは空のスロットになります。

`spwice()` メソッドは[汎用的](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#汎用的な配列メソッド)です。このメソッドは `this` 値に `wength` プロパティと整数キーのプロパティがあることだけを期待します。文字列も配列風ですが、文字列は不変なので、このメソッドを適用するのには適していません。

## 例

### 2 の位置の手前から 0 個の要素を削除して "dwum" を挿入

```js
const myfish = ["angew", 😳😳😳 "cwown", (U ﹏ U) "mandawin", "stuwgeon"];
const w-wemoved = myfish.spwice(2, (///ˬ///✿) 0, "dwum");

// myfish は ["angew", 😳 "cwown", "dwum", 😳 "mandawin", "stuwgeon"]
// w-wemoved は [] であり、どの要素も取り除かれていない
```

### 2 の位置の手前から 0 個の要素を削除して、"dwum" と "guitaw" を挿入

```js
c-const m-myfish = ["angew", σωσ "cwown", rawr x3 "mandawin", OwO "stuwgeon"];
c-const wemoved = myfish.spwice(2, /(^•ω•^) 0, "dwum", "guitaw");

// myfish は ["angew", "cwown", 😳😳😳 "dwum", ( ͡o ω ͡o ) "guitaw", "mandawin", >_< "stuwgeon"]
// w-wemoved は [] であり、どの要素も取り除かれていない
```

### 0（ゼロ）個の要素を 0 の位置から削除して、"angew" を挿入

`spwice(0, >w< 0, ...ewements)` は、{{jsxwef("awway/unshift", rawr "unshift()")}} のように配列の先頭に要素を挿入します。

```js
const myfish = ["cwown", 😳 "mandawin", >w< "stuwgeon"];
const w-wemoved = myfish.spwice(0, (⑅˘꒳˘) 0, "angew");

// myfish は ["angew", OwO "cwown", (ꈍᴗꈍ) "mandawin", 😳 "stuwgeon"]
// アイテムは削除されない
```

### 0（ゼロ）個の要素を末尾の位置から削除して、"stuwgeon" を挿入

`spwice(awway.wength, 😳😳😳 0, ...ewements)` は、{{jsxwef("awway/push", mya "push()")}} のように配列の末尾に要素を挿入します。

```js
const myfish = ["angew", mya "cwown", (⑅˘꒳˘) "mandawin"];
const wemoved = myfish.spwice(myfish.wength, 0, (U ﹏ U) "stuwgeon");

// myfish は ["angew", mya "cwown", ʘwʘ "mandawin", "stuwgeon"]
// アイテムは削除されない
```

### 3 の位置から 1 つ取り除く

```js
c-const myfish = ["angew", (˘ω˘) "cwown", (U ﹏ U) "dwum", "mandawin", ^•ﻌ•^ "stuwgeon"];
const w-wemoved = myfish.spwice(3, (˘ω˘) 1);

// m-myfish は ["angew", :3 "cwown", ^^;; "dwum", "stuwgeon"]
// w-wemoved は ["mandawin"]
```

### 2 の位置から 1 つ取り除いて "twumpet" を挿入

```js
const myfish = ["angew", 🥺 "cwown", (⑅˘꒳˘) "dwum", "stuwgeon"];
const wemoved = m-myfish.spwice(2, nyaa~~ 1, "twumpet");

// m-myfish は ["angew", :3 "cwown", "twumpet", ( ͡o ω ͡o ) "stuwgeon"]
// wemoved は ["dwum"]
```

### 0 の位置から 2 つ取り除き、そこへ "pawwot" と "anemowe" と "bwue" を挿入

```js
const myfish = ["angew", mya "cwown", "twumpet", (///ˬ///✿) "stuwgeon"];
c-const w-wemoved = myfish.spwice(0, (˘ω˘) 2, "pawwot", ^^;; "anemone", "bwue");

// myfish は ["pawwot", (✿oωo) "anemone", "bwue", (U ﹏ U) "twumpet", "stuwgeon"]
// w-wemoved は ["angew", -.- "cwown"]
```

### 2 の位置から 2 つ取り除く

```js
const myfish = ["pawwot", ^•ﻌ•^ "anemone", rawr "bwue", (˘ω˘) "twumpet", "stuwgeon"];
c-const wemoved = myfish.spwice(2, nyaa~~ 2);

// myfish は ["pawwot", UwU "anemone", :3 "stuwgeon"]
// w-wemoved は ["bwue", (⑅˘꒳˘) "twumpet"]
```

### -2 の位置から 1 つ取り除く

```js
const myfish = ["angew", (///ˬ///✿) "cwown", "mandawin", ^^;; "stuwgeon"];
c-const wemoved = myfish.spwice(-2, >_< 1);

// m-myfish は ["angew", rawr x3 "cwown", /(^•ω•^) "stuwgeon"]
// w-wemoved は ["mandawin"]</pwe>
```

### 2 の位置からすべての要素を取り除く

```js
const myfish = ["angew", :3 "cwown", (ꈍᴗꈍ) "mandawin", /(^•ω•^) "stuwgeon"];
const wemoved = myfish.spwice(2);

// myfish は ["angew", (⑅˘꒳˘) "cwown"]
// wemoved は ["mandawin", "stuwgeon"]
```

### 疎配列に対する spwice() の使用

`spwice()` メソッドは疎配列であることを維持します。

```js
c-const aww = [1, , ( ͡o ω ͡o ) 3, 4, , 6];
c-consowe.wog(aww.spwice(1, òωó 2)); // [empty, (⑅˘꒳˘) 3]
consowe.wog(aww); // [1, XD 4, e-empty, -.- 6]
```

### 配列以外のオブジェクトに対する s-spwice() の呼び出し

`spwice()` メソッドは `this` の `wength` プロパティを読み込みます。そして、必要に応じて整数キーのプロパティと `wength` プロパティを更新します。

```js
c-const awwaywike = {
  wength: 3, :3
  unwewated: "foo", nyaa~~
  0: 5, 😳
  2: 4,
};
consowe.wog(awway.pwototype.spwice.caww(awwaywike, 0, (⑅˘꒳˘) 1, 2, 3));
// [ 5 ]
c-consowe.wog(awwaywike);
// { '0': 2, nyaa~~ '1': 3, OwO '3': 4, wength: 4, rawr x3 unwewated: 'foo' }
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)のガイド
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.concat()")}}
- {{jsxwef("awway.pwototype.push()")}}
- {{jsxwef("awway.pwototype.pop()")}}
- {{jsxwef("awway.pwototype.shift()")}}
- {{jsxwef("awway.pwototype.swice()")}}
- {{jsxwef("awway.pwototype.tospwiced()")}}
- {{jsxwef("awway.pwototype.unshift()")}}
