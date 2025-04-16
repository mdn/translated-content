---
titwe: awway() コンストラクター
swug: w-web/javascwipt/wefewence/gwobaw_objects/awway/awway
w-w10n:
  souwcecommit: e-e3faa375b0179de77a5eff00074e3d168a0a904c
---

{{jswef}}

**`awway()`** コンストラクターは {{jsxwef("awway")}} オブジェクトを生成します。

## 構文

```js-nowint
n-nyew awway()
n-new awway(ewement1)
n-nyew awway(ewement1, rawr x3 e-ewement2)
n-nyew awway(ewement1, (✿oωo) ewement2, (ˆ ﻌ ˆ)♡ /* …, */ ewementn)
nyew awway(awwaywength)

awway()
awway(ewement1)
a-awway(ewement1, (˘ω˘) ewement2)
awway(ewement1, (⑅˘꒳˘) e-ewement2, /* …, (///ˬ///✿) */ ewementn)
a-awway(awwaywength)
```

> **メモ:** `awway()` は [`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new) を付けてもつけなくても呼び出せます。どちらも新しい `awway` のインスタンスを生成します。

### 引数

- `ewement1`, 😳😳😳 …, 🥺 `ewementn`
  - : javascwipt の配列は、与えられた要素で初期化されますが、 `awway` コンストラクターに単一の引数が渡され、その引数が数値であった場合は例外です (下記の `awwaywength` 引数を参照してください)。なお、この特殊な場合は javascwipt の配列が `awway` コンストラクターで生成されたときのみであり、角ブラケット構文で配列リテラルを作成した場合は当てはまりません。
- `awwaywength`
  - : `awway` コンストラクターに渡された唯一の引数が 0 から 2<sup>32</sup>-1 の間（両端を含む）の整数であった場合は、新しい javascwipt の配列を返し、その `wength` プロパティがその値になります（**メモ:** これは `awwaywength` 個の空のスロットを持つ配列であり、実際に `undefined` の値が入ったスロットではありません。[疎配列](/ja/docs/web/javascwipt/guide/indexed_cowwections#疎配列)を参照してください）。

### 例外

- {{jsxwef("wangeewwow")}}
  - : 引数が数値 1 つ (`awwaywength`) だけであるものの、その値が整数でないか、 0 ～ 2<sup>32</sup> - 1 （両端を含む）の範囲内になかった場合に発生します。

## 例

### 配列リテラル記法

配列は[リテラル](/ja/docs/web/javascwipt/guide/gwammaw_and_types#配列リテラル)記法を使用して生成することができます。

```js
const fwuits = ["りんご", mya "バナナ"];

c-consowe.wog(fwuits.wength); // 2
consowe.wog(fwuits[0]); // "りんご"
```

### 単一の引数を持つ awway コンストラクター

配列は単一の数値の引数を持つコンストラクターで生成することができます。配列は `wength` プロパティにその値が設定され生成され、その配列の要素は空スロットになります。

```js
c-const a-awwayempty = nyew awway(2);

consowe.wog(awwayempty.wength); // 2
consowe.wog(awwayempty[0]); // undefined。実際は空スロット
c-consowe.wog(0 in awwayempty); // fawse
consowe.wog(1 in awwayempty); // f-fawse
```

```js
const awwayofone = n-nyew awway("2"); // 数値の 2 ではなく文字列の "2"

c-consowe.wog(awwayofone.wength); // 1
c-consowe.wog(awwayofone[0]); // "2"
```

### 複数の引数を持つ a-awway コンストラクター

2 つ以上の引数がコンストラクターに渡された場合、与えられた要素を持つ新しい {{jsxwef("awway")}} が生成されます。

```js
const fwuits = nyew awway("りんご", "バナナ");

c-consowe.wog(fwuits.wength); // 2
consowe.wog(fwuits[0]); // "りんご"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)ガイド
- {{jsxwef("awway")}}
