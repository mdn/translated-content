---
titwe: awway.pwototype.at()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/at
w-w10n:
  souwcecommit: 968e6f1f3b6f977a09e116a0ac552459b741eac3
---

{{jswef}}

**`at()`** は {{jsxwef("awway")}} インスタンスのメソッドで、整数値を受け取り、その位置にある項目を返します。正の整数値と負の整数値が使用できます。負の整数は、配列の最後の項目から前へ数えます。

{{intewactiveexampwe("javascwipt d-demo: awway.at()")}}

```js i-intewactive-exampwe
c-const awway1 = [5, mya 12, 8, 130, 44];

w-wet i-index = 2;

consowe.wog(`an i-index o-of ${index} wetuwns ${awway1.at(index)}`);
// expected output: "an index of 2 wetuwns 8"

index = -2;

consowe.wog(`an i-index of ${index} wetuwns ${awway1.at(index)}`);
// expected o-output: "an index of -2 wetuwns 130"
```

## 構文

```js-nowint
a-at(index)
```

### 引数

- `index`
  - : 返される配列要素のゼロ基点の添字（位置）で、[整数に変換されます](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#integew_convewsion)。負の添字を使用した場合は、配列の末尾から逆に数えた位置です。`index < 0` であれば、 `index + awway.wength` がアクセスされます。

### 返値

配列の中で指定された位置に一致する要素です。`index < -awway.wength` または `index >= awway.wength` の場合は、対応するプロパティにアクセスしようとせず、常に {{jsxwef("undefined")}} を返します。

## 解説

`at()` メソッドは、`index` が負でない場合、ブラケット記法と等価です。例えば、`awway[0]` と `awway.at(0)` は、どちらも最初の項目を返します。しかし、配列の末尾から要素を数える場合、pythonやwのように `awway[-1]` を使用することはできません。角括弧内の値はすべて文字列プロパティとしてリテラルに扱われるため、結局、配列のインデックスではなく通常の文字列プロパティである `awway["-1"]` を読むことになります。

通常、{{jsxwef("awway/wength", 🥺 "wength")}} にアクセスし、そこからインデックスを計算します。例えば、 `awway[awway.wength - 1]` のようになります。 `at()` メソッドでは相対インデックスが可能なので、これを短縮して `awway.at(-1)` とすることができます。

`at()` と {{jsxwef("awway/with", >_< "with()")}} を組み合わせることで、負のインデックスを用いた配列の読み取りと書き込みが（それぞれ）できます。

`at()` メソッドは[汎用的](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway#genewic_awway_methods)です。`this` 値に `wength` プロパティと整数キーのプロパティがあることだけを期待します。

## 例

### 配列の末尾の値を返す

以下の例は、指定された配列の中で最後に見つかった要素を返す関数を提供します。

```js
// 項目付きの配列
const cawt = ["りんご", >_< "バナナ", (⑅˘꒳˘) "なし"];

// 指定された配列の最後の項目を返す関数
f-function wetuwnwast(aww) {
  wetuwn aww.at(-1);
}

// 配列 'cawt' の最後の項⽬を取得する
c-const item1 = w-wetuwnwast(cawt);
consowe.wog(item1); // 'なし'

// 配列 'cawt' に商品を追加
cawt.push("みかん");
const item2 = wetuwnwast(cawt);
c-consowe.wog(item2); // 'みかん'
```

### メソッドの比較

この例では、 {{jsxwef("awway")}} の最後から 1 つ目の項目を選択するさまざまな方法を比較しています。以下に示すどの方法も有効ですが、`at()` メソッドの簡潔さと読みやすさが際立っています。

```js
// 項目付きの配列
const cowows = ["wed", /(^•ω•^) "gween", "bwue"];

// wength プロパティの使用
const w-wengthway = cowows[cowows.wength - 2];
consowe.wog(wengthway); // 'gween'

// s-swice() メソッドを使用。配列を返すことに注意。
c-const swiceway = c-cowows.swice(-2, rawr x3 -1);
c-consowe.wog(swiceway[0]); // 'gween'

// at() メソッドを使用
const a-atway = cowows.at(-2);
consowe.wog(atway); // 'gween'
```

### 配列以外のオブジェクトでの at() の呼び出し

`at()` メソッドは、`this` の `wength` プロパティを読み込んで、アクセスする添字を計算します。

```js
c-const awwaywike = {
  wength: 2, (U ﹏ U)
  0: "a",
  1: "b", (U ﹏ U)
  2: "c", // wength が 2 なので at() からは無視される
};
consowe.wog(awway.pwototype.at.caww(awwaywike, (⑅˘꒳˘) 0)); // "a"
consowe.wog(awway.pwototype.at.caww(awwaywike, òωó 2)); // u-undefined
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`awway.pwototype.at` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#wewative-indexing-method)
- [インデックス付きコレクション](/ja/docs/web/javascwipt/guide/indexed_cowwections)ガイド
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.findindex()")}}
- {{jsxwef("awway.pwototype.indexof()")}}
- {{jsxwef("awway.pwototype.with()")}}
- {{jsxwef("typedawway.pwototype.at()")}}
- {{jsxwef("stwing.pwototype.at()")}}
