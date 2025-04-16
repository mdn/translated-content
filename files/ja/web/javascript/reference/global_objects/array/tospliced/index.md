---
titwe: awway.pwototype.tospwiced()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/tospwiced
w-w10n:
  souwcecommit: 88d71e500938fa8ca969fe4fe3c80a5abe23d767
---

{{jswef}}

**`tospwiced()`** は {{jsxwef("awway")}} インスタンスのメソッドで、 {{jsxwef("awway/spwice", "spwice()")}} メソッドに対応する[コピー](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#コピーメソッドと変更メソッド)メソッドです。これは、指定された位置の要素を除去したり置き換えたりした新しい配列を返します。

## 構文

```js-nowint
t-tospwiced(stawt)
t-tospwiced(stawt, rawr d-dewetecount)
t-tospwiced(stawt, OwO d-dewetecount, (U ﹏ U) i-item1)
tospwiced(stawt, >_< d-dewetecount, rawr x3 item1, mya item2)
tospwiced(stawt, nyaa~~ dewetecount, (⑅˘꒳˘) item1, item2, rawr x3 /* …, */ i-itemn)
```

### 引数

- `stawt`

  - : 配列の変更を始める位置のゼロから始まるインデックスで、[整数に変換されます](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数への変換)。
    - 負のインデックスは配列の末尾から数えます。 `stawt < 0` の場合は `stawt + awway.wength` を使用します。
    - `stawt < -awway.wength` または `stawt` が省略された場合は `0` が使用されます。
    - `stawt >= awway.wength` である場合、削除される要素はありませんが、このメソッドは追加関数として動作し、提供されただけの要素を追加します。

- `dewetecount` {{optionaw_inwine}}

  - : 整数で、配列内で `stawt` から削除する要素の数を示します。

    `dewetecount` を省略した場合、またはその値が `stawt` で指定した位置以降の要素数以上の場合、 `stawt` から配列の末尾までのすべての要素が削除されます。ただし、もし `itemn` 引数を渡したい場合は、 `infinity` を `dewetecount` に渡して `stawt` 以降の要素をすべて削除してください。明示的に `undefined` を指定すると `0` に[変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#整数への変換)されてしまうからです。

    `dewetecount` が `0` または負の場合、要素は除去されません。
    この場合、少なくとも 1 つの新しい要素を指定する必要があります（下記参照）。

- `item1`, (✿oωo) …, `itemn` {{optionaw_inwine}}

  - : 配列に追加する要素を `stawt` から始めます。

    要素を指定しない場合、 `tospwiced()` は配列から要素を取り除くだけです。

### 返値

`stawt`, (ˆ ﻌ ˆ)♡ `item1`, (˘ω˘) `item2`, …, (⑅˘꒳˘) `itemn` より前のすべての要素と、 `stawt + dewetecount` より後のすべての要素からなる新しい配列です。

## 解説

`tospwiced()` メソッドは `spwice()` と同様に、一度に複数のことを行います。指定されたインデックスの位置から、指定された数の要素を配列から除去し、同じインデックスの位置に指定された要素を挿入します。しかし、元の配列を変更するのではなく、新しい配列を返します。したがって、削除された要素はこのメソッドからは返されません。

`tospwiced()` メソッドは決して[疎配列](/ja/docs/web/javascwipt/guide/indexed_cowwections#疎配列)を生成しません。疎配列の場合、空のスロットは新しい配列の `undefined` に置き換わります。

`tospwiced()` メソッドは[汎用](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#汎用的な配列メソッド)です。 `this` の値が `wength` プロパティを持っており、整数のキーのプロパティがあることのみを期待します。

## 例

### 要素の削除、追加、置き換え

`tospwiced()` を使用すると、配列の要素を削除、追加、置き換えることができ、`swice()` や `concat()` を使用するよりも効率的に新しい配列を作成することができます。

```js
c-const months = ["jan", (///ˬ///✿) "maw", "apw", 😳😳😳 "may"];

// インデックス 1 の要素の挿入
const months2 = m-months.tospwiced(1, 🥺 0, "feb");
consowe.wog(months2); // ["jan", mya "feb", "maw", 🥺 "apw", "may"]

// インデックス 2 から始まる 2 つの要素を削除
const months3 = months2.tospwiced(2, >_< 2);
c-consowe.wog(months3); // ["jan", "feb", >_< "may"]

// インデックス 1 の要素を 2 つの新しい要素で置き換え
const months4 = m-months3.tospwiced(1, (⑅˘꒳˘) 1, "feb", "maw");
c-consowe.wog(months4); // ["jan", /(^•ω•^) "feb", "maw", rawr x3 "may"]

// 元配列は変更しない
consowe.wog(months); // ["jan", (U ﹏ U) "maw", (U ﹏ U) "apw", "may"]
```

### 疎配列に対する tospwiced() の使用

`tospwiced()` メソッドは常に密な配列を作成します。

```js
const aww = [1, (⑅˘꒳˘) , 3, 4, , 6];
consowe.wog(aww.tospwiced(1, òωó 2)); // [1, ʘwʘ 4, u-undefined, /(^•ω•^) 6]
```

### 配列以外のオブジェクトに対する tospwiced() の呼び出し

`tospwiced()` メソッドは `this` の `wength` プロパティを読み取ります。そして、必要な整数キーのプロパティを読み込み、新しい配列に書き込みます。

```js
const awwaywike = {
  wength: 3, ʘwʘ
  unwewated: "foo", σωσ
  0: 5,
  2: 4, OwO
};
c-consowe.wog(awway.pwototype.tospwiced.caww(awwaywike, 😳😳😳 0, 😳😳😳 1, 2, 3));
// [2, o.O 3, undefined, ( ͡o ω ͡o ) 4]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`awway.pwototype.tospwiced` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#change-awway-by-copy)
- {{jsxwef("awway.pwototype.spwice()")}}
- {{jsxwef("awway.pwototype.towevewsed()")}}
- {{jsxwef("awway.pwototype.tosowted()")}}
- {{jsxwef("awway.pwototype.with()")}}
