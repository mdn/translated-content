---
title: Float64Array
slug: Web/JavaScript/Reference/Global_Objects/Float64Array
tags:
  - クラス
  - JavaScript
  - TypedArray
  - TypedArrays
  - Polyfill
browser-compat: javascript.builtins.Float64Array
translation_of: Web/JavaScript/Reference/Global_Objects/Float64Array
---
{{JSRef}}

**`Float64Array`** 型つき配列は、64 ビット浮動小数点数 (C 言語の `double` データ型に相当) の配列を表します。各要素のバイト順はプラットフォームに依存します。制御したい場合は代わりに {{jsxref("DataView")}} を使って下さい。各要素は `0` で初期化されます。生成されたら、配列内の要素を参照するのにオブジェクトメソッド使用するか、配列の標準の添字の記法 (すなわち、大括弧) を使用することができます。

## コンストラクター

- [`Float64Array()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Float64Array/Float64Array)
  - : 新しい `Float64Array` オブジェクトを生成します。

## 静的プロパティ

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Float64Array.BYTES_PER_ELEMENT")}}
  - : 要素の大きさを数値で返します。 `Float64Array` の場合は `8` です。
- {{jsxref("TypedArray.name", "Float64Array.name")}}
  - : コンストラクター名を文字列値で返します。 `Float64Array` 型の場合は "Float64Array" です。

## 静的メソッド

- {{jsxref("TypedArray.from", "Float64Array.from()")}}
  - : 配列風オブジェクトや反復可能オブジェクトから新しい `Float64Array` を生成します。 {{jsxref("Array.from()")}} も参照してください。
- {{jsxref("TypedArray.of", "Float64Array.of()")}}
  - : 可変長引数で新しい `Float64Array` オブジェクトを生成します。 {{jsxref("Array.of()")}} も参照してください。

## インスタンスプロパティ

- {{jsxref("TypedArray.prototype.buffer", "Float64Array.prototype.buffer")}}
  - : `Float64Array` オブジェクトが参照する {{jsxref("ArrayBuffer")}} を返します。構築時に固定され、**読み取り専用**です。
- {{jsxref("TypedArray.prototype.byteLength", "Float64Array.prototype.byteLength")}}
  - :  `Float64Array` オブジェクトの {{jsxref("ArrayBuffer")}} の先頭からの長さを (バイト単位で) 返します。構築時に固定され、**読み取り専用**です。
- {{jsxref("TypedArray.prototype.byteOffset", "Float64Array.prototype.byteOffset")}}
  - :  `Float64Array` オブジェクトの {{jsxref("ArrayBuffer")}} の先頭からのオフセットを (バイト単位で) 返します。構築時に固定され、**読み取り専用**です。
- {{jsxref("TypedArray.prototype.length", "Float64Array.prototype.length")}} {{readonlyInline}}
  - : `Float64Array` オブジェクト内に保持された要素の数を返します。構築時に設定され、**読み取り専用**です。

## インスタンスメソッド

- {{jsxref("TypedArray.copyWithin", "Float64Array.prototype.copyWithin()")}}
  - : 配列内で一連の配列要素をコピーします。{{jsxref("Array.prototype.copyWithin()")}} も参照してください。
- {{jsxref("TypedArray.entries", "Float64Array.prototype.entries()")}}
  - : 配列内の各位置に対して、キーと値の組を含む新しい 配列イテレーター を返します。{{jsxref("Array.prototype.entries()")}} も参照してください。
- {{jsxref("TypedArray.every", "Float64Array.prototype.every()")}}
  - : 配列内のすべての要素が関数によって提供されたテストに合格するかどうかテストを実行します。{{jsxref("Array.prototype.every()")}} も参照してください。
- {{jsxref("TypedArray.fill", "Float64Array.prototype.fill()")}}
  - : 開始位置から終了位置までの配列のすべての要素を固定値に設定します。{{jsxref("Array.prototype.fill()")}} も参照してください。
- {{jsxref("TypedArray.filter", "Float64Array.prototype.filter()")}}
  - : 与えられたフィルタリング関数が true を返す配列のすべての要素をもつ新しい配列を生成します。{{jsxref("Array.prototype.filter()")}} も参照してください。
- {{jsxref("TypedArray.find", "Float64Array.prototype.find()")}}
  - : 配列内の要素で与えられたテスト関数を満足するものが見つかったら、見つかった値を返します。見つからなかったら `undefined` を返します。 {{jsxref("Array.prototype.find()")}} も参照してください。
- {{jsxref("TypedArray.findIndex", "Float64Array.prototype.findIndex()")}}
  - : 配列内の要素で与えられたテスト関数を満足するものが見つかったら、その位置を返します。見つからなかったら -1 を返します。{{jsxref("Array.prototype.findIndex()")}} も参照してください。
- {{jsxref("TypedArray.forEach", "Float64Array.prototype.forEach()")}}
  - : 配列内の各要素に対して関数を呼び出します。{{jsxref("Array.prototype.forEach()")}} も参照してください。
- {{jsxref("TypedArray.includes", "Float64Array.prototype.includes()")}}
  - : 型つき配列にある要素があるかどうか判断し、それに応じて `true` か `false` を返します。 {{jsxref("Array.prototype.includes()")}} も参照してください。
- {{jsxref("TypedArray.indexOf", "Float64Array.prototype.indexOf()")}}
  - : 指定された値に等しい配列内の要素の最初の位置を返します。見つからなかった場合は -1 を返します。{{jsxref("Array.prototype.indexOf()")}} も参照してください。
- {{jsxref("TypedArray.join", "Float64Array.prototype.join()")}}
  - : 配列のすべての要素を文字列に結合します。{{jsxref("Array.prototype.join()")}} も参照してください。
- {{jsxref("TypedArray.keys", "Float64Array.prototype.keys()")}}
  - : 配列内の各位置に対するキーを含む新しい配列イテレーターを返します。{{jsxref("Array.prototype.keys()")}} も参照してください。
- {{jsxref("TypedArray.lastIndexOf", "Float64Array.prototype.lastIndexOf()")}}
  - : 指定された値と等しい配列の要素の最後の位置を返します。見つからなかった場合は -1 を返します。{{jsxref("Array.prototype.lastIndexOf()")}} も参照してください。
- {{jsxref("TypedArray.map", "Float64Array.prototype.map()")}}
  - : この配列のすべての要素で与えられた関数を呼び出した結果をもつ新しい配列を生成します。{{jsxref("Array.prototype.map()")}} も参照してください。
- {{jsxref("TypedArray.reduce", "Float64Array.prototype.reduce()")}}
  - : アキュムレータに対して関数を適用し、隣り合う二つの型つき配列の要素(左から右へ)は単一の値になります。{{jsxref("Array.prototype.reduce()")}} も参照してください。
- {{jsxref("TypedArray.reduceRight", "Float64Array.prototype.reduceRight()")}}
  - : アキュムレータに対して関数を適用し、隣り合う二つの型つき配列の要素(右から左へ)は単一の値になります。{{jsxref("Array.prototype.reduceRight()")}} も参照してください。
- {{jsxref("TypedArray.reverse", "Float64Array.prototype.reverse()")}}
  - : 配列要素の順番を反転させます。— 最初の要素は最後になり、最後の要素は最初になります。{{jsxref("Array.prototype.reverse()")}} も参照してください。
- {{jsxref("TypedArray.set", "Float64Array.prototype.set()")}}
  - : 入力値を指定した配列から読み込み、型つき配列内に複数の値を格納します。
- {{jsxref("TypedArray.slice", "Float64Array.prototype.slice()")}}
  - : 配列の一部を取り出して新しい配列を返します。{{jsxref("Array.prototype.slice()")}} も参照してください。
- {{jsxref("TypedArray.some", "Float64Array.prototype.some()")}}
  - : ある配列の少なくとも 1 つの要素が与えられたテスト関数を満たした場合に true を返します。{{jsxref("Array.prototype.some()")}} も参照してください。
- {{jsxref("TypedArray.sort", "Float64Array.prototype.sort()")}}
  - : 配列の要素をソートし、その結果を返します。{{jsxref("Array.prototype.sort()")}} も参照してください。
- {{jsxref("TypedArray.subarray", "Float64Array.prototype.subarray()")}}
  - : 与えられた先頭と末尾の要素位置から、新しい `Float64Array` オブジェクトを返します。
- {{jsxref("TypedArray.values", "Float64Array.prototype.values()")}}
  - : 配列内でそれぞれの位置に対する値を含む新しい配列イテレーターオブジェクトを返します。{{jsxref("Array.prototype.values()")}} も参照してください。
- {{jsxref("TypedArray.toLocaleString", "Float64Array.prototype.toLocaleString()")}}
  - : 配列と要素を表すローカライズされた文字列を返します。{{jsxref("Array.prototype.toLocaleString()")}} も参照してください。
- {{jsxref("TypedArray.toString", "Float64Array.prototype.toString()")}}
  - : 配列と要素を表す文字列を返します。{{jsxref("Array.prototype.toString()")}} も参照してください。
- {{jsxref("TypedArray.@@iterator", "Float64Array.prototype[@@iterator]()")}}
  - : 配列内で各インデックスに対する値を含む新しい配列イテレーターオブジェクトを返します。

## 例

### 様々な方法による `Float64Array` の作成

```js
// From a length
var float64 = new Float64Array(2);
float64[0] = 42;
console.log(float64[0]); // 42
console.log(float64.length); // 2
console.log(float64.BYTES_PER_ELEMENT); // 8

// From an array
var arr = new Float64Array([21,31]);
console.log(arr[1]); // 31

// From another TypedArray
var x = new Float64Array([21, 31]);
var y = new Float64Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
var buffer = new ArrayBuffer(32);
var z = new Float64Array(buffer, 0, 4);

// From an iterable
var iterable = function*(){ yield* [1,2,3]; }();
var float64 = new Float64Array(iterable);
// Float64Array[1, 2, 3]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `Float64Array` のポリフィルが [`core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays) で利用できます。
- [JavaScript 型つき配列](/ja/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
