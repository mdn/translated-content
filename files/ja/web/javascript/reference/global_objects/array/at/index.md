---
title: Array.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/Array/at
l10n:
  sourceCommit: 968e6f1f3b6f977a09e116a0ac552459b741eac3
---

{{JSRef}}

**`at()`** メソッドは整数値を受け取り、その位置にある項目を返します。正の整数値と負の整数値が使用できます。負の整数は、配列の最後の項目から前へ数えます。

{{EmbedInteractiveExample("pages/js/array-at.html")}}

## 構文

```js-nolint
at(index)
```

### 引数

- `index`
  - : 返される配列要素のゼロ基点の添字（位置）で、[整数に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion)。負の添字を使用した場合は、配列の末尾から逆に数えた位置です。`index < 0` であれば、 `index + array.length` がアクセスされます。

### 返値

配列の中で指定された位置に一致する要素です。`index < -array.length` または `index >= array.length` の場合は、対応するプロパティにアクセスしようとせず、常に {{jsxref('undefined')}} を返します。

## 解説

`at()` メソッドは、`index` が負でない場合、ブラケット記法と等価です。例えば、`array[0]` と `array.at(0)` は、どちらも最初の項目を返します。しかし、配列の末尾から要素を数える場合、PythonやRのように `array[-1]` を使用することはできません。角括弧内の値はすべて文字列プロパティとしてリテラルに扱われるため、結局、配列のインデックスではなく通常の文字列プロパティである `array["-1"]` を読むことになります。

通常、{{jsxref("Array/length", "length")}} にアクセスし、そこからインデックスを計算します。例えば、 `array[array.length - 1]` のようになります。 `at()` メソッドでは相対インデックスが可能なので、これを短縮して `array.at(-1)` とすることができます。

`at()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods)です。`this` 値に `length` プロパティと整数キーのプロパティがあることだけを期待します。

## 例

### 配列の末尾の値を返す

以下の例は、指定された配列の中で最後に見つかった要素を返す関数を提供します。

```js
// 項目付きの配列
const cart = ["りんご", "バナナ", "なし"];

// 指定された配列の最後の項目を返す関数
function returnLast(arr) {
  return arr.at(-1);
}

// 配列 'cart' の最後の項⽬を取得する
const item1 = returnLast(cart);
console.log(item1); // 'なし'

// 配列 'cart' に商品を追加
cart.push("みかん");
const item2 = returnLast(cart);
console.log(item2); // 'みかん'
```

### メソッドの比較

この例では、 {{jsxref('Array')}} の最後から 1 つ目の項目を選択するさまざまな方法を比較しています。以下に示すどの方法も有効ですが、`at()` メソッドの簡潔さと読みやすさが際立っています。

```js
// 項目付きの配列
const colors = ["red", "green", "blue"];

// length プロパティの使用
const lengthWay = colors[colors.length - 2];
console.log(lengthWay); // 'green'

// slice() メソッドを使用。配列を返すことに注意。
const sliceWay = colors.slice(-2, -1);
console.log(sliceWay[0]); // 'green'

// at() メソッドを使用
const atWay = colors.at(-2);
console.log(atWay); // 'green'
```

### 配列以外のオブジェクトでの at() の呼び出し

`at()` メソッドは、`this` の `length` プロパティを読み込んで、アクセスする添字を計算します。

```js
const arrayLike = {
  length: 2,
  0: "a",
  1: "b",
};
console.log(Array.prototype.at.call(arrayLike, -1)); // "b"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.at` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#relative-indexing-method)
- [at() メソッドのポリフィル](https://github.com/tc39/proposal-relative-indexing-method#polyfill).
- {{jsxref("Array.prototype.find()")}} – 指定されたテストに基づく値を返します。
- {{jsxref("Array.prototype.includes()")}} – 配列に値が存在するかどうかを判定します。
- {{jsxref("Array.prototype.indexOf()")}} – 指定された要素の添字を返します。
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)
