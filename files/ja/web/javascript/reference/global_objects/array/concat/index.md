---
title: Array.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/Array/concat
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

**`concat()`** は {{jsxref("Array")}} インスタンスのメソッドで、2 つ以上の配列を結合するために使用します。
このメソッドは既存の配列を変更せず、新しい配列を返します。

{{EmbedInteractiveExample("pages/js/array-concat.html", "shorter")}}

## 構文

```js-nolint
concat()
concat(value1)
concat(value1, value2)
concat(value1, value2, /* …, */ valueN)
```

### 引数

- `value1`, …, `valueN` {{optional_inline}}
  - : 新しい配列に連結する配列や値です。
    すべての `valueN` 引数が省略された場合、 `concat` は呼び出された既存の配列の[シャローコピー](/ja/docs/Glossary/Shallow_copy)を返します。
    詳しくは下記の解説をお読みください。

### 返値

新しい {{jsxref("Array")}} インスタンス。

## 解説

`concat` メソッドは新しい配列を作成します。この配列には、まず、このメソッドが名付けられたオブジェクトの要素が入ります。それから、それぞれの引数に対して、その値が配列に追加されます。通常のオブジェクトやプリミティブの場合、引数自体が最終的な配列の要素になります。配列や 配列風のオブジェクトで [`Symbol.isConcatSpreadable`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable) プロパティを真値に設定している場合、各引数の要素は独立して最終的に配列に追加されます。 `concat` メソッドは入れ子になった配列の引数に再帰的にアクセスすることはありません。

`concat()` は[コピーメソッド](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods)です。 `this` や引数として与えられた配列を変更せず、代わりに元の配列の要素と同じ要素を含む[シャローコピー](/ja/docs/Glossary/Shallow_copy)を返します。

`concat()` メソッドは、元の配列のいずれかが[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)であった場合には空のスロットを維持します。

`concat()` メソッドは[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#汎用的な配列メソッド)です。 `this` 値は他の引数と同じように扱われます（ただし、先にオブジェクトに変換されます）。つまり、素のオブジェクトは直接結果の配列に追加され、 `@isConcatSpreadable` を持つ配列風オブジェクトは結果の配列に展開されます。

## 例

### 2 つの配列の連結

以下のコードは 2 つの配列を連結させます。

```js
const letters = ["a", "b", "c"];
const numbers = [1, 2, 3];

const alphaNumeric = letters.concat(numbers);
console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]
```

### 3 つの配列の連結

以下のコードは 3 つの配列を連結させます。

```js
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

console.log(numbers);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### 配列に値を連結

以下のコードは配列に値を連結させます。

```js
const letters = ["a", "b", "c"];

const alphaNumeric = letters.concat(1, [2, 3]);

console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]
```

### ネストした配列の連結

以下のコードはネストした配列同士を連結させます。また、元の配列からの参照を保持しています。

```js
const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);

console.log(numbers);
// results in [[1], 2, [3]]

// num1 の最初の要素を変更する
num1[0].push(4);

console.log(numbers);
// results in [[1, 4], 2, [3]]
```

### 配列風オブジェクトを Symbol.isConcatSpreadable で連結

`concat` は既定ですべての配列風オブジェクトを配列として扱いません。 `Symbol.isConcatSpreadable` が真値（`true` など）に設定された場合のみ、配列として扱います。

```js
const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };
console.log([0].concat(obj1, obj2));
// [ 0, { '0': 1, '1': 2, '2': 3, length: 3 }, 1, 2, 3 ]
```

### 疎配列に対する concat()

元の配列のいずれかが疎配列の場合、結果の配列も疎配列になります。

```js
console.log([1, , 3].concat([4, 5])); // [1, empty, 3, 4, 5]
console.log([1, 2].concat([3, , 5])); // [1, 2, 3, empty, 5]
```

### 配列ではないオブジェクトに対する concat() の呼び出し

もし `this` の値が配列でなければ、オブジェクトに変換され、 `concat()` の引数と同じように扱われます。この場合、返値は常に新しい素の配列になります。

```js
console.log(Array.prototype.concat.call({}, 1, 2, 3)); // [{}, 1, 2, 3]
console.log(Array.prototype.concat.call(1, 2, 3)); // [ [Number: 1], 2, 3 ]
const arrayLike = {
  [Symbol.isConcatSpreadable]: true,
  length: 2,
  0: 1,
  1: 2,
  2: 99, // length が 2 なので concat() からは無視される
};
console.log(Array.prototype.concat.call(arrayLike, 3, 4)); // [1, 2, 3, 4]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Array.prototype.concat` のポリフィル (`core-js`)（`Symbol.isConcatSpreadable` の対応など、最近の動作の修正と実装付き）](https://github.com/zloirock/core-js#ecmascript-array)
- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)ガイド
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("String.prototype.concat()")}}
- {{jsxref("Symbol.isConcatSpreadable")}}
