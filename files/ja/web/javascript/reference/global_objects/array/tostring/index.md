---
title: Array.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toString
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

**`toString()`** は {{jsxref("Array")}} インスタンスのメソッドで、指定された配列とその要素を表す文字列を返します。

{{EmbedInteractiveExample("pages/js/array-tostring.html", "shorter")}}

## 構文

```js-nolint
toString()
```

### 引数

なし。

### 返値

配列の要素の文字列表現です。

## 解説

{{jsxref("Array")}} オブジェクトは {{jsxref("Object")}} の `toString` メソッドをオーバーライドしています。配列の `toString` メソッドは内部的に [`join()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join) を呼び出します。そちらで配列を結合し、配列のすべての要素をカンマで区切って一つの文字列に収めて返します。 `join` メソッドが利用できないか関数ではなかった場合、代わりに [`Object.prototype.toString`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) が使用され、 `[object Array]` を返します。

```js
const arr = [];
arr.join = 1; // `join` を関数ではないものに再代入
console.log(arr.toString()); // [object Array] と出力

console.log(Array.prototype.toString.call({ join: () => 1 })); // 1 と出力
```

配列を文字列値として表す必要がある場合や、配列が文字列の結合として参照されるとき、 JavaScript は `toString` メソッドを自動的に呼び出します。

`Array.prototype.toString` は他の配列も含めて、再帰的にそれぞれの要素を文字列に変換します。Array.prototype.toString` が返す文字列には区切り文字がないので、入れ子配列は平坦化されたように見えます。

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix.toString()); // 1,2,3,4,5,6,7,8,9
```

配列が循環している（コンテナーそのものである要素を格納している）場合、ブラウザーは循環参照を無視することで無限の再帰を避けます。

```js
const arr = [];
arr.push(1, [3, arr, 4], 2);
console.log(arr.toString()); // 1,3,,4,2
```

## 例

### toString() の使用

```js
const array1 = [1, 2, "a", "1a"];

console.log(array1.toString()); // "1,2,a,1a"
```

### 疎配列における toString() の使用

`join()` の動作に従い、 `toString()` は空のスロットを `undefined` と同じように扱い、余分な区切り文字を生成します：

```js
console.log([1, , 3].toString()); // '1,,3'
```

### 配列以外のオブジェクトに対する toString() の呼び出し

`toString()` は[汎用的](/ja/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods)です。このメソッドは `this` が `join()` メソッドを持っていることを期待します。ない場合は、代わりに `Object.prototype.toString()` を使用します。

```js
console.log(Array.prototype.toString.call({ join: () => 1 }));
// 1; a number
console.log(Array.prototype.toString.call({ join: () => undefined }));
// undefined
console.log(Array.prototype.toString.call({ join: "not function" }));
// "[object Object]"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)のガイド
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.join()")}}
- {{jsxref("Array.prototype.toLocaleString()")}}
- {{jsxref("TypedArray.prototype.toString()")}}
- {{jsxref("String.prototype.toString()")}}
