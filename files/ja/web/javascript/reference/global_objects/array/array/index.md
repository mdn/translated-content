---
title: Array() コンストラクター
short-title: Array()
slug: Web/JavaScript/Reference/Global_Objects/Array/Array
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Array()`** コンストラクターは {{jsxref("Array")}} オブジェクトを生成します。

## 構文

```js-nolint
new Array()
new Array(element1)
new Array(element1, element2)
new Array(element1, element2, /* …, */ elementN)
new Array(arrayLength)

Array()
Array(element1)
Array(element1, element2)
Array(element1, element2, /* …, */ elementN)
Array(arrayLength)
```

> [!NOTE]
> `Array()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) を付けてもつけなくても呼び出せます。どちらも新しい `Array` のインスタンスを生成します。

### 引数

- `element1`, …, `elementN`
  - : JavaScript の配列は、与えられた要素で初期化されますが、 `Array` コンストラクターに単一の引数が渡され、その引数が数値であった場合は例外です (下記の `arrayLength` 引数を参照してください)。なお、この特殊な場合は JavaScript の配列が `Array` コンストラクターで生成されたときのみであり、角ブラケット構文で配列リテラルを作成した場合は当てはまりません。
- `arrayLength`
  - : `Array` コンストラクターに渡された唯一の引数が 0 から 2<sup>32</sup>-1 の間（両端を含む）の整数であった場合は、新しい JavaScript の配列を返し、その `length` プロパティがその値になります。

  > [!NOTE]
  > これは `arrayLength` 個の空のスロットを持つ配列であり、実際に `undefined` の値が入ったスロットではありません。[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)を参照してください）。

### 例外

- {{jsxref("RangeError")}}
  - : 引数が数値 1 つ (`arrayLength`) だけであるものの、その値が整数でないか、 0 ～ 2<sup>32</sup> - 1 （両端を含む）の範囲内になかった場合に発生します。

## 例

### 配列リテラル記法

配列は[リテラル](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#配列リテラル)記法を使用して生成することができます。

```js
const fruits = ["りんご", "バナナ"];

console.log(fruits.length); // 2
console.log(fruits[0]); // "りんご"
```

### 単一の引数を持つ Array コンストラクター

配列は単一の数値の引数を持つコンストラクターで生成することができます。配列は `length` プロパティにその値が設定され生成され、その配列の要素は空スロットになります。

```js
const arrayEmpty = new Array(2);

console.log(arrayEmpty.length); // 2
console.log(arrayEmpty[0]); // undefined。実際は空スロット
console.log(0 in arrayEmpty); // false
console.log(1 in arrayEmpty); // false
```

```js
const arrayOfOne = new Array("2"); // 数値の 2 ではなく文字列の "2"

console.log(arrayOfOne.length); // 1
console.log(arrayOfOne[0]); // "2"
```

### 複数の引数を持つ Array コンストラクター

2 つ以上の引数がコンストラクターに渡された場合、与えられた要素を持つ新しい {{jsxref("Array")}} が生成されます。

```js
const fruits = new Array("りんご", "バナナ");

console.log(fruits.length); // 2
console.log(fruits[0]); // "りんご"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [インデックス付きコレクション](/ja/docs/Web/JavaScript/Guide/Indexed_collections)ガイド
- {{jsxref("Array")}}
