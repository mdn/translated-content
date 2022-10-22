---
title: TypedArray
slug: Web/JavaScript/Reference/Global_Objects/TypedArray
---

{{JSRef}}

**_TypedArray_** オブジェクトは、背後にある[バイナリーデータバッファー](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)の、配列状のビューを表します。 `TypedArray` という名称のグローバルプロパティはなく、また直接 `TypedArray` コンストラクターが見えるわけではありません。代わりに、さまざまなグローバルプロパティがあり、それらの値は後述するように特定の要素の型における型付き配列のコンストラクターになります。下記のページで、それぞれの要素を持つ片引き配列で使用できる共通のプロパティやメソッドを確認できます。

{{EmbedInteractiveExample("pages/js/typedarray-constructor.html")}}

## 解説

ECMAScript 2015 では `TypedArray` コンストラクターを、すべての `TypedArray` コンストラクターの `[[Prototype]]` として定義しています。このコンストラクターは直接公開されてはいません。グローバルな `%TypedArray%` または `TypedArray` プロパティは存在しません。`Object.getPrototypeOf(Int8Array)` などの形式でのみ直接アクセスできます。すべての `TypedArray` 系コンストラクターは、共通のプロパティを `%TypedArray%` コンストラクター関数から継承します。またすべての型付き配列のプロトタイプ (`TypedArray.prototype`) は、自身の `[[Prototype]]` として `%TypedArray%.prototype` を持ちます。

`%TypedArray%` コンストラクター自体は、特に役立つものではありません。サブクラス化をサポートする JS エンジンでオブジェクトを生成する際に使用する場合を除き、コンストラクターを呼び出すか `new` 構文を使用すると {{jsxref("TypeError")}} が発生します。現在はそのようなエンジンがありませんので、`%TypedArray%` はすべての `TypedArray` コンストラクターへのポリフィル関数およびプロパティとしてのみ有用です。

`TypedArray` のインスタンス (すなわち `Int8Array` などのインスタンス) を生成するとき、配列バッファーはメモリーの内部に生成されます (コンストラクターの引数として `ArrayBuffer` オブジェクトが提供されて、配列バッファーによって使用される場合)。また、このバッファーのアドレスはインスタンスの内部プロパティとして保存され、 `%TypedArray%.prototype` のすべてのメソッドは、値の設定や取得などの操作で配列バッファーのアドレスを使用します。

### TypedArray オブジェクト

| 型                                       | 値の範囲                        | サイズ (バイト数) | 説明                                                                          | Web IDL 型            | 同等の C 型                     |
| ---------------------------------------- | ------------------------------- | ----------------- | ----------------------------------------------------------------------------- | --------------------- | ------------------------------- |
| {{jsxref("Int8Array")}}         | `-128` ～ `127`                 | 1                 | 8 ビット長、2 の補数方式の符号付き整数値                                      | `byte`                | `int8_t`                        |
| {{jsxref("Uint8Array")}}         | `0` ～ `255`                    | 1                 | 8 ビット長、符号なし整数値                                                    | `octet`               | `uint8_t`                       |
| {{jsxref("Uint8ClampedArray")}} | `0` ～ `255`                    | 1                 | 8 ビット長、符号なし整数値 (切り詰め)                                         | `octet`               | `uint8_t`                       |
| {{jsxref("Int16Array")}}         | `-32768` ～ `32767`             | 2                 | 16 ビット長、2 の補数方式の符号付き整数値                                     | `short`               | `int16_t`                       |
| {{jsxref("Uint16Array")}}         | `0` ～ `65535`                  | 2                 | 16 ビット長、符号なし整数値                                                   | `unsigned short`      | `uint16_t`                      |
| {{jsxref("Int32Array")}}         | `-2147483648` ～ `2147483647`   | 4                 | 32 ビット長、2 の補数方式の符号付き整数値                                     | `long`                | `int32_t`                       |
| {{jsxref("Uint32Array")}}         | `0` ～ `4294967295`             | 4                 | 32 ビット長、符号なし整数値                                                   | `unsigned long`       | `uint32_t`                      |
| {{jsxref("Float32Array")}}     | `1.2`×`10-38` ～ `3.4`×`1038`   | 4                 | 32 ビット長 IEEE 方式 浮動小数点数 (有効桁数 7 桁、例えば `1.234567`)         | `unrestricted float`  | `float`                         |
| {{jsxref("Float64Array")}}     | `5.0`×`10-324` ～ `1.8`×`10308` | 8                 | 64 ビット長 IEEE 方式 浮動小数点数 (有効桁数 16 桁、例えば`1.23456789012345`) | `unrestricted double` | `double`                        |
| {{jsxref("BigInt64Array")}}     | `-263` ～ `263-1`               | 8                 | 64 ビット長、2 の補数方式の符号付き整数値                                     | `bigint`              | `int64_t (signed long long)`    |
| {{jsxref("BigUint64Array")}}     | `0` ～ `264-1`                  | 8                 | 64 ビット長、符号なし整数値                                                   | `bigint`              | `uint64_t (unsigned long long)` |

## コンストラクター

このオブジェクトは直接インスタンス化することはできません。その代わりに、特定の方の配列、例えば {{jsxref("Int8Array")}} や {{jsxref("BigInt64Array")}} のインスタンスを生成することができます。これらのオブジェクトのコンストラクターの構文はすべて共通です。

```
new TypedArray();
new TypedArray(length);
new TypedArray(typedArray);
new TypedArray(object);
new TypedArray(buffer [, byteOffset [, length]]);
```

ここで _TypedArray_ は特定の型のコンストラクターのうちの一つを表します。

### 引数

- `length`
  - : 引数 `length` を付加して呼び出すと、_length に BYTES_PER_ELEMENT を掛けた値_ のバイト数の、値 0 を持つ内部配列バッファーをメモリー内に生成します。
- `typedArray`
  - : `typedArray` 引数で、任意の型付き配列型 (`Int32Array` など) のオブジェクトを示す引数を渡して呼び出すと、`typedArray` を新たな型付き配列にコピーします。`typedArray` 内の各値は、新しい配列へコピーされる前に対応する型へ変換されます。新しい型付き配列オブジェクトの長さは、引数 `typedArray` の長さと同じです。
- `object`
  - : 引数 `object` を付加して呼び出すと、`TypedArray.from()` メソッドを使用したかのように新たな型付き配列を生成します。
- `buffer`, `byteOffset`, `length`
  - : 引数 `buffer`, `byteOffset` (省略可), `length` (省略可) を付加して呼び出すと、指定した {{jsxref("ArrayBuffer")}} のビューになる新たな型付き配列を生成します。引数 `byteOffset` および `length` は、型付き配列ビューで公開するメモリー範囲を指定します。両方とも省略すると、`buffer` のすべてを公開します。`length` のみ省略すると、`buffer` の残りの部分を公開します。

## 静的プロパティ

- {{jsxref("TypedArray.BYTES_PER_ELEMENT")}}
  - : さまざまな `TypedArray` オブジェクトの要素のサイズを数値で返します。
- {{jsxref("TypedArray.name")}}
  - : コンストラクター名を文字列値で返します (例: "`Int8Array`")。
- {{jsxref("TypedArray.@@species", "get TypedArray[@@species]")}}
  - : 派生オブジェクトを生成するために使用するコンストラクター関数です。
- {{jsxref("TypedArray.prototype")}}
  - : `TypedArray` オブジェクトのプロトタイプです。

## 静的メソッド

- {{jsxref("TypedArray.from()")}}
  - : 配列状のオブジェクトや反復可能なオブジェクトから、新たな `TypedArray` を生成します。{{jsxref("Array.from()")}} もご覧ください。
- {{jsxref("TypedArray.of()")}}
  - : 引数に与えた値をもとに、新たな `TypedArray` を生成します。{{jsxref("Array.of()")}} もご覧ください。

## インスタンスプロパティ

- {{jsxref("TypedArray.prototype.buffer")}}
  - : この型付き配列によって参照さている {{jsxref("ArrayBuffer")}} を返します。構築時に設定され、**読取専用**です。
- {{jsxref("TypedArray.prototype.byteLength")}}
  - : 型付き配列の長さを (バイト単位で) 返します。構築時に設定され、**読取専用**です。
- {{jsxref("TypedArray.prototype.byteOffset")}}
  - : 型付き配列の {{jsxref("ArrayBuffer")}} の先頭からのオフセットを (バイト単位で) 返します。構築時に設定され、**読取専用**です。
- {{jsxref("TypedArray.prototype.length")}}
  - : 型付き配列内に保持された要素の数を返します。構築時に設定され、**読取専用**です。

## インスタンスメソッド

- {{jsxref("TypedArray.prototype.copyWithin()")}}
  - : 配列内で一連の配列要素をコピーします。 {{jsxref("Array.prototype.copyWithin()")}} も参照してください。
- {{jsxref("TypedArray.prototype.entries()")}}
  - : 配列内のすべての位置に対するキー／値の組を含む、新しい配列イテレーターを返します。 {{jsxref("Array.prototype.entries()")}} も参照してください。
- {{jsxref("TypedArray.prototype.every()")}}
  - : 配列内のすべての要素が関数によって提供されたテストに合格するかどうかテストを実行します。 {{jsxref("Array.prototype.every()")}} も参照してください。
- {{jsxref("TypedArray.prototype.fill()")}}
  - : 開始位置から終了位置までのすべての要素に固定値を設定します。 {{jsxref("Array.prototype.fill()")}} も参照してください。
- {{jsxref("TypedArray.prototype.filter()")}}
  - : 与えられたフィルタリング関数が `true` を返す配列のすべての要素をもつ新しい配列を生成します。 {{jsxref("Array.prototype.filter()")}} も参照してください。
- {{jsxref("TypedArray.prototype.find()")}}
  - : 配列要素が与えられたテスト関数を満足したら、配列の値を返します。満足しなかった場合、 `undefined` を返します。 {{jsxref("Array.prototype.find()")}} も参照してください。
- {{jsxref("TypedArray.prototype.findIndex()")}}
  - : 配列要素が与えられたテスト関数を満足したら、配列のインデックスを返します。満足しなかった場合は `-1` を返します。{{jsxref("Array.prototype.findIndex()")}} も参照してください。
- {{jsxref("TypedArray.prototype.forEach()")}}
  - : 配列内の各要素に対する関数を呼び出します。 {{jsxref("Array.prototype.forEach()")}} も参照してください。
- {{jsxref("TypedArray.prototype.includes()")}}
  - : 型付き配列にある要素が含まれているかどうか判断し、それに応じて `true` または `false` を返します。 {{jsxref("Array.prototype.includes()")}} も参照してください。
- {{jsxref("TypedArray.prototype.indexOf()")}}
  - : 指定された値に等しい配列内の要素の最初の位置を返します。見つからなかった場合は `-1` を返します。 {{jsxref("Array.prototype.indexOf()")}} も参照してください。
- {{jsxref("TypedArray.prototype.join()")}}
  - : すべての配列要素を 1 つの文字列に結合します。 {{jsxref("Array.prototype.join()")}} も参照してください。
- {{jsxref("TypedArray.prototype.keys()")}}
  - : 配列内のそれぞれの位置に対するキーを含む新しい配列イテレーターを返します。 {{jsxref("Array.prototype.keys()")}} も参照してください。
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
  - : 指定された値と等しい配列の要素の最後の位置を返します。見つからない場合は `-1` を返します。{{jsxref("Array.prototype.lastIndexOf()")}}を確かめて下さい。
- {{jsxref("TypedArray.prototype.map()")}}
  - : この配列のすべての要素で与えられた関数を呼び出した結果をもつ新しい配列を生成します。{{jsxref("Array.prototype.map()")}} も参照してください。
- {{jsxref("TypedArray.prototype.reduce()")}}
  - : アキュームレーターと配列のそれぞれの値 (左から右へ) に対して関数を適用し、単一の値にまで縮小します。 {{jsxref("Array.prototype.reduce()")}} も参照してください。
- {{jsxref("TypedArray.prototype.reduceRight()")}}
  - : アキュームレーターと配列のそれぞれの値 (右から左へ) に対して関数を適用し、単一の値にまで縮小します。 {{jsxref("Array.prototype.reduce()")}} も参照してください。
- {{jsxref("TypedArray.prototype.reverse()")}}
  - : 配列要素の順番を反転させます。 — 最初の要素は最後になり、最後の要素は最初になります。 {{jsxref("Array.prototype.reverse()")}} も参照してください。
- {{jsxref("TypedArray.prototype.set()")}}
  - : 入力値を指定した配列から読み込み、型付き配列内に複数の値を格納します。
- {{jsxref("TypedArray.prototype.slice()")}}
  - : 配列の一部を取り出して新しい配列を返します。 {{jsxref("Array.prototype.slice()")}} も参照してください。
- {{jsxref("TypedArray.prototype.some()")}}
  - : ある配列の少なくとも 1 つの要素が与えられたテスト関数を満たした場合に `true` を返します。 {{jsxref("Array.prototype.some()")}} も参照してください。
- {{jsxref("TypedArray.prototype.sort()")}}
  - : 配列の要素をソートし、その結果を返します。 {{jsxref("Array.prototype.sort()")}} も参照してください。
- {{jsxref("TypedArray.prototype.subarray()")}}
  - : 与えられた開始位置と終了位置の要素インデックスから、新しい `TypedArray` を返します。
- {{jsxref("TypedArray.prototype.values()")}}
  - : 配列内のそれぞれの位置に対する値を含む新しい配列イテレーターオブジェクトを返します。 {{jsxref("Array.prototype.values()")}} も参照してください。
- {{jsxref("TypedArray.prototype.toLocaleString()")}}
  - : 配列と要素を表すローカライズされた文字列を返します。 {{jsxref("Array.prototype.toLocaleString()")}} も参照してください。
- {{jsxref("TypedArray.prototype.toString()")}}
  - : 配列と要素を表す文字列を返します。 {{jsxref("Array.prototype.toString()")}} も参照してください。
- {{jsxref("TypedArray.prototype.@@iterator()", "TypedArray.prototype[@@iterator]()")}}
  - : 配列内でそれぞれの位置に対する値を含む新しい配列イテレーターオブジェクトを返します。

## 例

### new が必須

ECMAScript 2015 より、 `TypedArray` コンストラクターは {{jsxref("Operators/new", "new")}} 演算子を付けて構築する必要があります。 `TypedArray` コンストラクターを `new` のない関数として呼び出すと、 {{jsxref("TypeError")}} が発生します。

```js example-bad
var dv = Int8Array([1, 2, 3]);
// TypeError: calling a builtin Int8Array constructor
// without new is forbidden
```

```js example-good
var dv = new Int8Array([1, 2, 3]);
```

### プロパティへのアクセス

配列内の要素は、標準の配列の添字構文 (すなわち、かぎ括弧を使用する表記) を使用して参照することができます。しかし、型付き配列で添字付きプロパティで取得または設定するときは、範囲外の添字でもプロパティのプロトタイプチェーンを探索しません。添字付きプロパティは {{jsxref("ArrayBuffer")}} を調べるのであり、オブジェクトのプロパティは探索しません。他のオブジェクト同様に、名前付きプロパティは使用できます。

```js
// 標準的な配列構文を使用して設定および取得
var int16 = new Int16Array(2);
int16[0] = 42;
console.log(int16[0]); // 42

// プロトタイプで添字付き配列を使用しても探索しない (Fx 25)
Int8Array.prototype[20] = 'foo';
(new Int8Array(32))[20]; // 0
// even when out of bound
Int8Array.prototype[20] = 'foo';
(new Int8Array(8))[20]; // undefined
// or with negative integers
Int8Array.prototype[-1] = 'foo';
(new Int8Array(8))[-1]; // undefined

// Named properties are allowed, though (Fx 30)
Int8Array.prototype.foo = 'bar';
(new Int8Array(32)).foo; // "bar"
```

## 仕様書

| 仕様書                                                                                           |
| ------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-typedarray-objects', 'TypedArray Objects')}} |

## ブラウザーの互換性

{{Compat("javascript.builtins.TypedArray")}}

## 関連情報

- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
- [TextDecoder](/ja/docs/Web/API/TextDecoder) — 数値データから文字列をデコードするヘルパー
