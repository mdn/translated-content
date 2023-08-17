---
title: Array.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/Array/concat
l10n:
  sourceCommit: 968e6f1f3b6f977a09e116a0ac552459b741eac3
---

{{JSRef}}

**`concat()`** メソッドは、2 つ以上の配列を結合するために使用します。このメソッドは既存の配列を変更せず、新しい配列を返します。

{{EmbedInteractiveExample("pages/js/array-concat.html","shorter")}}

## 構文

```js
concat();
concat(value0);
concat(value0, value1);
concat(value0, value1, /* … ,*/ valueN);
```

### 引数

- `valueN` {{optional_inline}}
  - : 新しい配列に連結する配列や値です。すべての `valueN` 引数が省略された場合、 `concat` は呼び出された既存の配列の[シャローコピー](/ja/docs/Glossary/Shallow_copy)を返します。詳しくは下記の解説をお読みください。

### 返値

新しい {{jsxref("Array")}} インスタンス。

## 解説

`concat` メソッドは新しい配列を作成します。この配列には、まず、このメソッドが名付けられたオブジェクトの要素が入ります。それから、それぞれの引数に対して、その値が配列に追加されます。通常のオブジェクトやプリミティブの場合、引数自体が最終的な配列の要素になります。配列や 配列風のオブジェクトで {{jsxref("Symbol.isConcatSpreadable")}} プロパティを真値に設定している場合、各引数の要素は独立して最終的に配列に追加されます。 `concat` メソッドは入れ子になった配列の引数に再帰的にアクセスすることはありません。

`concat` は `this` や引数として与えられた配列を変更しませんが、その代わりに元の配列から結合させた同じ要素のコピーを含む[シャローコピー](/ja/docs/Glossary/Shallow_copy)を返します。元の配列の要素は以下のようにして新しい配列にコピーされます。

- オブジェクトの参照の場合（実際のオブジェクトではない場合）、 `concat` はオブジェクトの参照を新しい配列にコピーします。元の配列も新しい配列も同じオブジェクトを参照します。これはつまり、もし参照されているオブジェクトが変更されれば、その変更は元の配列と新しい配列の両方に現れます。これは、配列引数の要素も配列である場合も含みます。
- 文字列、数値、論理値などのデータ型の場合（{{jsxref("Global_Objects/String", "String")}}, {{jsxref("Global_Objects/Number", "Number")}}, {{jsxref("Global_Objects/Boolean", "Boolean")}} などのオブジェクトではない場合）、`concat` は文字列や数値の値を新しい配列にコピーします。

> **メモ:** 配列や値を追加しても、元の配列には手を付けません。さらに、新しい配列へどんな操作をしても、元の配列には影響しません。逆もまた同様です（オブジェクト参照である要素に対する操作を除く）。

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Polyfill of `Array.prototype.concat` in `core-js` with fixes and implementation of modern behavior like `Symbol.isConcatSpreadable` support](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array/push", "push()")}} / {{jsxref("Array/pop", "pop()")}} — 配列末尾への要素の追加 / 配列末尾の要素の削除
- {{jsxref("Array/unshift", "unshift()")}} / {{jsxref("Array/shift", "shift()")}} — 配列の先頭に要素を追加 / 配列の先頭の要素を削除
- {{jsxref("Array/splice", "splice()")}} — 配列の指定位置に要素を追加 / 指定位置の要素を削除
- {{jsxref("String.prototype.concat()")}}
- {{jsxref("Symbol.isConcatSpreadable")}} — 平坦化を制御
