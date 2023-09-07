---
title: Array() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Array/Array
l10n:
  sourceCommit: 968e6f1f3b6f977a09e116a0ac552459b741eac3
---

{{JSRef}}

**`Array()`** コンストラクターは {{jsxref("Array")}} オブジェクトを生成するために使用します。

## 構文

```js
new Array(element0, element1, /* … ,*/ elementN);
new Array(arrayLength);

Array(element0, element1, /* … ,*/ elementN);
Array(arrayLength);
```

> **メモ:** `Array()` は [`new`](/ja/docs/Web/JavaScript/Reference/Operators/new) を付けてもつけなくても呼び出せます。どちらも新しい `Array` のインスタンスを生成します。

### 引数

- `elementN`
  - : JavaScript の配列は、与えられた要素で初期化されますが、 `Array` コンストラクターに単一の引数が渡され、その引数が数値であった場合は例外です (下記の `arrayLength` 引数を参照してください)。なお、この特殊な場合は JavaScript の配列が `Array` コンストラクターで生成されたときのみであり、ブラケット構文で配列リテラルを作成した場合は当てはまりません。
- `arrayLength`
  - : `Array` コンストラクターに渡された唯一の引数が 0 から 2<sup>32</sup>-1 の間（両端を含む）の整数であった場合は、新しい JavaScript の配列を返し、その `length` プロパティがその値になります（**注:** これは `arrayLength` 個の空のスロットを持つ配列であり、実際に `undefined` の値が入ったスロットではありません。[疎配列](/ja/docs/Web/JavaScript/Guide/Indexed_collections#疎配列)を参照してください）。

### 例外

- {{jsxref("RangeError")}}
  - : 引数が 1 つ (`arrayLength`) だけであり、その値が 0 and 2<sup>32</sup> - 1 （両端を含む）の範囲内にな勝った場合に発生します。

## 例

### 配列リテラル記法

配列は[リテラル](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#配列リテラル)記法を使用して生成することができます。

```js
const fruits = ["りんご", "バナナ"];

console.log(fruits.length); // 2
console.log(fruits[0]); // "りんご"
```

### 単一の引数を持つ Array コンストラクター

配列は単一の数値の引数を持つコンストラクターで生成することができます。配列は `length` プロパティにその値が設定されており、配列の要素は空スロットになります。

```js
const fruits = new Array(2);

console.log(fruits.length); // 2
console.log(fruits[0]); // undefined
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

- {{jsxref("Array")}} クラス
