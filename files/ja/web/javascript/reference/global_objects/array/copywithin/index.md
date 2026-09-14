---
title: Array.prototype.copyWithin()
short-title: copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`copyWithin()`** は {{jsxref("Array")}} インスタンスのメソッドで、この配列の一部を配列内の他の場所にシャローコピーし、この配列を長さを変更せずに返します。

{{InteractiveExample("JavaScript デモ: Array.prototype.copyWithin()")}}

```js interactive-example
const array = ["a", "b", "c", "d", "e"];

// インデックス 0 にインデックス 3 の要素をコピー
console.log(array.copyWithin(0, 3, 4));
// 予想される結果: Array ["d", "b", "c", "d", "e"]

// インデックス 1 以降のすべての要素にインデックス 3 から末尾までをコピー
console.log(array.copyWithin(1, 3));
// 予想される結果: Array ["d", "d", "e", "d", "e"]
```

## 構文

```js-nolint
copyWithin(target, start)
copyWithin(target, start, end)
```

### 引数

- `target`
  - : 並びのコピー先となる 0 から始まるインデックスで、[整数に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#整数への変換)。これは `start` にある要素がコピーされる場所に対応し、`start` から `end` までのすべての要素が後続のインデックスにコピーされます。
    - 負のインデックスの場合は、配列の末尾から逆に数えます。 `-array.length <= target < 0` の場合は、 `target + array.length` が使用されます。
    - `target < -array.length` の場合は、 `0` が使用されます。
    - `target >= array.length` の場合は、何もコピーされません。
    - `target` が正規化後の `start` の後に位置している場合、コピーは `array.length` の末尾までしか行われません（言い換えれば、 `copyWithin()` は配列を拡張しません）。
- `start`
  - : 要素のコピー元の始まりを表す 0 から始まるインデックスで、[整数に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#整数への変換)。
    - 負のインデックスの場合は、配列の末尾から逆に数えます。 `-array.length <= start < 0` の場合は、 `start + array.length` が使用されます。
    - `start < -array.length` の場合は、 `0` が使用されます。
    - `start >= array.length` の場合は、何もコピーされません。
- `end` {{optional_inline}}
  - : 要素のコピー元の末尾を表す 0 から始まるインデックスで、[整数に変換されます](/ja/docs/Web/JavaScript/Reference/Global_Objects/Number#整数への変換)。 `copyWithin()` のコピーは `end` の手前まで行います。
    - 負のインデックスの場合は、配列の末尾から逆に数えます。 `-array.length <= end < 0` の場合は、 `end + array.length` が使用されます。
    - `end < -array.length` の場合は、 `0` が使用されます。
    - `end >= array.length` の場合、 `end` が省略された場合、 `undefined` であった場合は、 `array.length` が使用され、末尾までのすべての要素がコピーされます。
    - `end` が `start` が示す位置の前またはその位置を示す場合、何もコピーされません。

### 返値

変更された配列です。

## 解説

`copyWithin()` メソッドは C や C++ の `memmove` のような動きをし、 {{jsxref("Array")}} のデータを移動するための高いパフォーマンスのメソッドです。これは特に {{jsxref("TypedArray/copyWithin", "TypedArray")}} の同名メソッドに当てはまります。データの並びがコピーされ貼り付けられる処理が一命令で行われます。コピー元と貼り付け先で領域が重なっていたとしても、貼り付け先の並びはコピーされた値になります。

`undefined` は整数に変換されると `0` になるため、 `start` 引数を省略すると `0` を渡したのと同じ効果があり、配列全体が対象とする位置にコピーされます（右の境界が切り取られ、左の境界が複製される右シフトと同じです）。この動作はコードの読み手を混乱させる可能性があるので、代わりに `start` として `0` を明示的に渡してください。

```js
console.log([1, 2, 3, 4, 5].copyWithin(2));
// [1, 2, 1, 2, 3]; すべての要素を右に 2 つずらす
```

`copyWithin()` は[変更を行うメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#コピーメソッドと変更メソッド)です。 `this` の長さは変更しませんが、 `this` の内容を変更し、必要に応じて新しいプロパティを作成します。

`copyWithin()` メソッドは空のスロットを保持します。コピー元の範囲が[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)であった場合、空のスロットに対応するインデックスは[削除](/ja/docs/Web/JavaScript/Reference/Operators/delete)され、空のスロットになります。

`copyWithin()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。このメソッドは `this` の値に `length` プロパティと整数のキーを持ったプロパティがあることだけを求めます。文字列も配列風オブジェクトですが、文字列は不変なので、このメソッドを適用するのは適していません。

## 例

### copyWithin() の使用

```js
console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
// [4, 5, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
// [4, 2, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
// [1, 2, 3, 3, 4]
```

### 疎配列に対する copyWithin() の使用

`copyWithin()` は空のスロットを広めます。

```js
console.log([1, , 3].copyWithin(2, 1, 2)); // [1, empty, empty]
```

### 配列ではないオブジェクトに対する copyWithin() の呼び出し

`copyWithin()` メソッドは `this` の `length` プロパティを読み込んで、関係する整数のインデックスを操作します。

```js
const arrayLike = {
  length: 5,
  3: 1,
};
console.log(Array.prototype.copyWithin.call(arrayLike, 0, 3));
// { '0': 1, '3': 1, length: 5 }
console.log(Array.prototype.copyWithin.call(arrayLike, 3, 1));
// { '0': 1, length: 5 }
// コピー元が空のスロットであるため、 '3' プロパティは削除される
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.copyWithin` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-array)
- [es-shims による `Array.prototype.copyWithin` のポリフィル](https://www.npmjs.com/package/array.prototype.copywithin)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)ガイド
- {{jsxref("Array")}}
- {{jsxref("TypedArray.prototype.copyWithin()")}}
