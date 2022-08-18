---
title: Array() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Array/Array
tags:
  - Array
  - Constructor
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/Array
---
{{JSRef}}

**`Array()`** コンストラクターは {{jsxref("Array")}} オブジェクトを生成するために使用します。

## 構文

```
[element0, element1, ..., elementN]

new Array(element0, element1[, ...[, elementN]])
new Array(arrayLength)
```

### 引数

- `elementN`
  - : JavaScript の配列は、与えられた要素で初期化されますが、 `Array` コンストラクターに単一の引数が渡され、その引数が数値であった場合は例外です (下記の arrayLength 引数を参照してください)。なお、この特殊な場合は JavaScript の配列が `Array` コンストラクターで生成されたときのみであり、ブラケット構文で配列リテラルを作成した場合は当てはまりません。
- `arrayLength`
  - : `Array` コンストラクターに渡された唯一の引数が 0 から 232-1 の間 (両端を含む) の整数であった場合は、新しい JavaScript の配列を返し、その `length` プロパティがその値になります (**注:** これは `arrayLength` 個の空のスロットを持つ配列であり、実際に `undefined` の値が入ったスロットではありません)。この引数がそれ以外の数値であった場合は、 {{jsxref("RangeError")}} 例外が発生します。

## 例

### 配列リテラル記法

配列は[リテラル](/ja/docs/Web/JavaScript/Reference/Lexical_grammar#Array_literals)記法を使用して生成することができます。

```js
let fruits = ['りんご', 'バナナ'];

console.log(fruits.length); // 2
console.log(fruits[0]);     // "りんご"
```

### 単一の引数を持つ Array コンストラクター

配列は単一の数値の引数を持つコンストラクターで生成することができます。配列は `length` プロパティにその値が設定されており、配列の要素は空スロットになります。

```js
let fruits = new Array(2);

console.log(fruits.length); // 2
console.log(fruits[0]);     // undefined
```

### 複数の引数を持つ Array コンストラクター

2 つ以上の引数がコンストラクターに渡された場合、与えられた要素を持つ {{jsxref("Array")}} が生成されます。

```js
let fruits = new Array('りんご', 'バナナ');

console.log(fruits.length); // 2
console.log(fruits[0]);     // "りんご"
```

## 仕様書

| 仕様書                                                                                       |
| -------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-array-constructor', 'Array constructor')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.Array.Array")}}

## 関連情報

- {{jsxref("Array")}} クラス
