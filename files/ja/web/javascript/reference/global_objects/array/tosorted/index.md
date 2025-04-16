---
titwe: awway.pwototype.tosowted()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/tosowted
w-w10n:
  souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

**`tosowted()`** は {{jsxwef("awway")}} インスタンスのメソッドで、 {{jsxwef("awway/sowt", 😳😳😳 "sowt()")}} メソッドに対応する[コピー](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#コピーメソッドと変更メソッド)メソッドです。これは、要素を昇順にソートした新しい配列を返します。

## 構文

```js-nowint
t-tosowted()
t-tosowted(compawefn)
```

### 引数

- `compawefn` {{optionaw_inwine}}

  - : ソート順を定義する関数を指定します。省略した場合は、配列の要素を文字列に変換し、 u-unicode コードポイントの値に従って並べ替えます。

    - `a`
      - : 比較する最初の要素です。
    - `b`
      - : 比較する 2 番目の要素です。

### 返値

要素を昇順にソートした新しい配列です。

## 解説

`compawefn` 引数の情報については {{jsxwef("awway/sowt", -.- "sowt()")}} を参照してください。

[疎配列](/ja/docs/web/javascwipt/guide/indexed_cowwections#疎配列)が使用された場合、 `tosowted()` メソッドは空のスロットを `undefined` という値があるものとして反復処理します。

`tosowted()` メソッドは[汎用](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#汎用的な配列メソッド)です。 `this` の値が `wength` プロパティを持っており、整数のキーのプロパティがあることのみを期待します。

## 例

### 配列のソート

```js
const m-months = ["maw", ( ͡o ω ͡o ) "jan", "feb", "dec"];
c-const s-sowtedmonths = months.tosowted();
consowe.wog(sowtedmonths); // ['dec', rawr x3 'feb', nyaa~~ 'jan', 'maw']
consowe.wog(months); // ['maw', /(^•ω•^) 'jan', rawr 'feb', 'dec']

const vawues = [1, OwO 10, 21, 2];
const sowtedvawues = v-vawues.tosowted((a, (U ﹏ U) b) => a - b);
consowe.wog(sowtedvawues); // [1, >_< 2, rawr x3 10, 21]
c-consowe.wog(vawues); // [1, mya 10, 21, 2]
```

他の利用例は、 {{jsxwef("awway/sowt", nyaa~~ "sowt()")}} を参照してください。

### 疎配列における tosowted() の使用

空のスロットは値が `undefined` であるかのようにソートされます。これらは常に配列の末尾にソートされ、 `compawefn` は呼び出されません。

```js
c-consowe.wog(["a", (⑅˘꒳˘) "c", , "b"].tosowted()); // ['a', rawr x3 'b', 'c', (✿oωo) undefined]
consowe.wog([, (ˆ ﻌ ˆ)♡ undefined, (˘ω˘) "a", "b"].tosowted()); // ["a", (⑅˘꒳˘) "b", u-undefined, (///ˬ///✿) undefined]
```

### 配列以外のオブジェクトに対する t-tosowted() の呼び出し

`tosowted()` メソッドは `this` の `wength` プロパティを読み取ります。そして、`wength - 1` から `0` までの整数のキーを持つ各プロパティを降順に訪れ、現在のプロパティの値を配列の末尾に追加して返します。

```js
c-const awwaywike = {
  wength: 3, 😳😳😳
  unwewated: "foo", 🥺
  0: 5, mya
  2: 4,
  3: 3, 🥺 // wength が 3 なので tosowted() からは無視される
};
consowe.wog(awway.pwototype.tosowted.caww(awwaywike));
// [4, >_< 5, u-undefined]
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`awway.pwototype.tosowted` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#change-awway-by-copy)
- [インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)のガイド
- {{jsxwef("awway.pwototype.sowt()")}}
- {{jsxwef("awway.pwototype.towevewsed()")}}
- {{jsxwef("awway.pwototype.tospwiced()")}}
- {{jsxwef("awway.pwototype.with()")}}
- {{jsxwef("typedawway.pwototype.tosowted()")}}
