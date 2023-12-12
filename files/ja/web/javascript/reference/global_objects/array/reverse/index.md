---
title: Array.prototype.reverse()
slug: Web/JavaScript/Reference/Global_Objects/Array/reverse
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

**`reverse()`** は {{jsxref("Array")}} のメソッドで、配列の要素を[その場 (in-place)](https://ja.wikipedia.org/wiki/In-place%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0) で反転させ、その配列への参照を返します。最初の要素が最後の要素に、最後の要素が最初の要素になります。言い換えれば、配列内の要素順序を、先に述べた方向とは逆に向かわせます。

元の配列を変更せずに配列の要素を反転させるには {{jsxref("Array/toReversed", "toReversed()")}} を使用してください。

{{EmbedInteractiveExample("pages/js/array-reverse.html")}}

## 構文

```js-nolint
reverse()
```

### 引数

なし。

### 返値

元の配列を反転されたものへの参照です。なお、配列は[その場 (in-place)](https://ja.wikipedia.org/wiki/In-place%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0) で反転され、コピーは作られません。

## 解説

`reverse()` メソッドは、呼び出した配列オブジェクトの要素を反転し、書き換えられた配列の参照を返します。

`reverse()` メソッドは空のスロットを維持します。元の配列が[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays)である場合、空のスロットに対応する新しいインデックスは[削除され](/ja/docs/Web/JavaScript/Reference/Operators/delete)、空のスロットになります。

`reverse()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。これは `this` 値に `length` プロパティと整数キーのプロパティがあることだけを期待します。文字列も配列風ですが、文字列は不変であるため、このメソッドを適用するのは適切ではありません。

## 例

### 配列の要素を反転させる

次の例は、3 つの要素を含む配列 `items` を作成し、その配列を反転させます。`reverse()` の呼び出しは、反転した配列 `items` への参照を返します。

```js
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

items.reverse();
console.log(items); // [3, 2, 1]
```

### reverse() メソッドは同じ配列への参照を返す

`reverse()` メソッドは元の配列への参照を返すので、返された配列を変更すると、元の配列も変更されます。

```js
const numbers = [3, 2, 4, 1, 5];
const reversed = numbers.reverse();
// numbers and reversed are both in reversed order [5, 1, 4, 2, 3]
reversed[0] = 5;
console.log(numbers[0]); // 5
```

`reverse()` で元の配列を変更せず、他の配列メソッド（[`map()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map) など）が行うように[シャローコピーした](/ja/docs/Glossary/Shallow_copy)配列を返すようにするには、 {{jsxref("Array/toReversed", "toReversed()")}} メソッドを使用してください。他にも、 `reverse()` を呼び出す前に[スプレッド構文](/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)か [`Array.from()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/from) を使用してシャローコピーを行っておくこともできます。

```js
const numbers = [3, 2, 4, 1, 5];
// [...numbers] はシャローコピーを作成するので、 reverse() は元の配列を変更しない
const reverted = [...numbers].reverse();
reverted[0] = 5;
console.log(numbers[0]); // 3
```

### 疎配列に対する reverse() の使用

疎配列は `reverse()` を呼び出しても疎配列のままです。空のスロットは空のスロットとしてそれぞれの新しいインデックスにコピーされます。

```js
console.log([1, , 3].reverse()); // [3, empty, 1]
console.log([1, , 3, 4].reverse()); // [4, 3, empty, 1]
```

### 配列以外のオブジェクトに対する reverse() の呼び出し

`reverse()` メソッドは `this` の `length` プロパティを読み込みます。そして、 `0` から `length / 2` までの整数のキーを持つ各プロパティを参照し、両端の対応する 2 つのインデックスを入れ替えます。出力先のプロパティで、参照元のプロパティが存在しないものは[削除](/ja/docs/Web/JavaScript/Reference/Operators/delete)します。

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
  3: 33, // length が 3 であるため reverse() 空は無視される
};
console.log(Array.prototype.reverse.call(arrayLike));
// { 0: 4, 3: 33, length: 3, unrelated: 'foo' }
// 元々インデックス 0 が存在しなかったため、インデックス 2 は削除される
// 長さが 3 であるため、インデックス 3 は変更されない
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.reverse` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.join()")}}
- {{jsxref("Array.prototype.sort()")}}
- {{jsxref("Array.prototype.toReversed()")}}
- {{jsxref("TypedArray.prototype.reverse()")}}
