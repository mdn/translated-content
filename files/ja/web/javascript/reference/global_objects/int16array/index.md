---
title: Int16Array
slug: Web/JavaScript/Reference/Global_Objects/Int16Array
---

{{JSRef}}

**`Int16Array`** は型付き配列で、プラットフォームのバイト順による 2 の補数形式の 16 ビット符号付き整数値の配列を表します。バイト順の制御が必要な場合は、代わりに {{jsxref("DataView")}} を使用してください。中身は `0` で初期化されます。生成されると、配列内の要素はそのオブジェクトのメソッドを使用するか、配列の標準的な添字の構文 (すなわち、ブラケット記法) を使用するかして参照することができます。

## コンストラクター

- {{jsxref("Global_Objects/Int16Array/Int16Array", "Int16Array()")}}
  - : 新しい `Int16Array` オブジェクトを生成します。

## 静的プロパティ

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Int16Array.BYTES_PER_ELEMENT")}}
  - : 要素の大きさを数値で返します。`Int16Array` の場合は `2` です。
- {{jsxref("TypedArray.name", "Int16Array.name")}}
  - : コンストラクター名を文字列値で返します。`Int16Array` の場合、 "Int16Array" です。

## 静的メソッド

- {{jsxref("TypedArray.from", "Int16Array.from()")}}
  - : 配列風オブジェクトまたは反復可能オブジェクトから新しい `Int16Array` オブジェクトを生成します。 {{jsxref("Array.from()")}} も参照してください。
- {{jsxref("TypedArray.of", "Int16Array.of()")}}
  - : 可変長引数で新しい `Int16Array` オブジェクトを生成します。{{jsxref("Array.of()")}} も参照してください。

## インスタンスプロパティ

- {{jsxref("TypedArray.prototype.buffer", "Int16Array.prototype.buffer")}}
  - : `Int16Array` オブジェクトによって参照される {{jsxref("ArrayBuffer")}} を返します。構築時に固定され、**読み取り専用**です。
- {{jsxref("TypedArray.prototype.byteLength", "Int16Array.prototype.byteLength")}}
  - : {{jsxref("ArrayBuffer")}} の先頭からの `Int16Array` の長さを (バイト単位で) 返します。構築時に固定され、**読み取り専用**です。
- {{jsxref("TypedArray.prototype.byteOffset", "Int16Array.prototype.byteOffset")}}
  - : {{jsxref("ArrayBuffer")}} の先頭からの `Int16Array` のオフセットを (バイト単位で) 返します。構築時に固定され、**読み取り専用**です。
- {{jsxref("TypedArray.prototype.length", "Int16Array.prototype.length")}}
  - : `Int16Array` オブジェクト内に保持されている要素の数を返します。構築時に固定され、**読み取り専用**です。

## インスタンスメソッド

- {{jsxref("TypedArray.copyWithin", "Int16Array.prototype.copyWithin()")}}
  - : 配列内で一連の配列要素をコピーします。{{jsxref("Array.prototype.copyWithin()")}} も参照してください。
- {{jsxref("TypedArray.entries", "Int16Array.prototype.entries()")}}
  - : 配列内ですべての位置におけるキーと値の組を提供する新しい*配列イテレーター*を返します。{{jsxref("Array.prototype.entries()")}} も参照してください。
- {{jsxref("TypedArray.every", "Int16Array.prototype.every()")}}
  - : 配列内のすべての要素が関数によって提供されたテストに合格するかどうかテストを実行します。{{jsxref("Array.prototype.every()")}} も参照してください。
- {{jsxref("TypedArray.fill", "Int16Array.prototype.fill()")}}
  - : 配列の先頭位置から末尾位置までのすべての要素を固定値に設定します。{{jsxref("Array.prototype.fill()")}} も参照してください。
- {{jsxref("TypedArray.filter", "Int16Array.prototype.filter()")}}
  - : この配列のすべての要素のうち、与えられたフィルタリング関数が `true` を返すものをもつ新しい配列を生成します。{{jsxref("Array.prototype.filter()")}} も参照してください。
- {{jsxref("TypedArray.find", "Int16Array.prototype.find()")}}
  - : 配列内の要素に与えられたテスト関数を満足するものがあったら、見つかった値を返します。見つからなければ `undefined` を返します。{{jsxref("Array.prototype.find()")}} も参照してください。
- {{jsxref("TypedArray.findIndex", "Int16Array.prototype.findIndex()")}}
  - : 配列内の要素に与えられたテスト関数を満足するものがあったら、見つかった位置を返します。見つからなければ `-1` を返します。{{jsxref("Array.prototype.findIndex()")}} も参照してください。
- {{jsxref("TypedArray.forEach", "Int16Array.prototype.forEach()")}}
  - : 配列内のそれぞれの要素について関数を呼び出します。{{jsxref("Array.prototype.forEach()")}} も参照してください。
- {{jsxref("TypedArray.includes", "Int16Array.prototype.includes()")}}
  - : 型付き配列に特定の要素があるかどうかを判断し、それに応じて `true` か `false`を返します。 {{jsxref("Array.prototype.includes()")}} も参照してください。
- {{jsxref("TypedArray.indexOf", "Int16Array.prototype.indexOf()")}}
  - : 指定された値に等しい配列内の要素の最初の (最小の) 位置を返します。見つからなかった場合、 `-1` を返します。{{jsxref("Array.prototype.indexOf()")}} も参照してください。
- {{jsxref("TypedArray.join", "Int16Array.prototype.join()")}}
  - : 配列のすべての要素を 1 つの文字列に結合します。{{jsxref("Array.prototype.join()")}} も参照してください。
- {{jsxref("TypedArray.keys", "Int16Array.prototype.keys()")}}
  - : 配列内ですべての位置におけるキーを提供する新しい*配列イテレーター*を返します。{{jsxref("Array.prototype.keys()")}} も参照してください。
- {{jsxref("TypedArray.lastIndexOf", "Int16Array.prototype.lastIndexOf()")}}
  - : 指定された値に等しい配列内の要素の最後の (最大の) 位置を返します。見つからなかった場合、 `-1` を返します。{{jsxref("Array.prototype.lastIndexOf()")}} も参照してください。
- {{jsxref("TypedArray.map", "Int16Array.prototype.map()")}}
  - : この配列のすべての要素で与えられた関数を呼び出した結果をもつ新しい配列を生成します。{{jsxref("Array.prototype.map()")}} も参照してください。
- {{jsxref("TypedArray.reduce", "Int16Array.prototype.reduce()")}}
  - : アキュムレーターとこの配列のそれぞれの値に対して (左から右へ) 関数を適用し、単一の値に還元します。{{jsxref("Array.prototype.reduce()")}} も参照してください。
- {{jsxref("TypedArray.reduceRight", "Int16Array.prototype.reduceRight()")}}
  - : アキュムレーターとこの配列のそれぞれの値に対して (右から左へ) 関数を適用し、単一の値に還元します。{{jsxref("Array.prototype.reduceRight()")}} も参照してください。
- {{jsxref("TypedArray.reverse", "Int16Array.prototype.reverse()")}}
  - : 配列の要素の順番を反転させます。最初の要素は最後になり、最後の要素は最初になります。{{jsxref("Array.prototype.reverse()")}} も参照してください。
- {{jsxref("TypedArray.set", "Int16Array.prototype.set()")}}
  - : 入力値を指定した配列から読み込み、この型付き配列内に複数の値を格納します。
- {{jsxref("TypedArray.slice", "Int16Array.prototype.slice()")}}
  - : 配列の一部を取り出して新しい配列を返します。{{jsxref("Array.prototype.slice()")}} も参照してください。
- {{jsxref("TypedArray.some", "Int16Array.prototype.some()")}}
  - : この配列の 1 つ以上の要素が与えられたテスト関数を満たした場合に `true` を返します。{{jsxref("Array.prototype.some()")}} も参照してください。
- {{jsxref("TypedArray.sort", "Int16Array.prototype.sort()")}}
  - : 配列の要素をその場で並べ替え、その配列を返します。{{jsxref("Array.prototype.sort()")}} も参照してください。
- {{jsxref("TypedArray.subarray", "Int16Array.prototype.subarray()")}}
  - : 指定された先頭と末尾の要素位置から新しい `Int16Array` を返します。
- {{jsxref("TypedArray.values", "Int16Array.prototype.values()")}}
  - : 配列内ですべての位置における値を提供する新しい*配列イテレーター*を返します。{{jsxref("Array.prototype.values()")}} も参照してください。
- {{jsxref("TypedArray.toLocaleString", "Int16Array.prototype.toLocaleString()")}}
  - : 配列とその要素を表すローカライズされた文字列を返します。{{jsxref("Array.prototype.toLocaleString()")}} も参照してください。
- {{jsxref("TypedArray.toString", "Int16Array.prototype.toString()")}}
  - : 配列とその要素を表す文字列を返します。{{jsxref("Array.prototype.toString()")}} も参照してください。
- {{jsxref("TypedArray.@@iterator", "Int16Array.prototype[@@iterator]()")}}
  - : 配列内ですべての位置における値を提供する新しい*配列イテレーター*を返します。

## 例

### 様々な方法で `Int16Array` を作成

```js
// 長さから
var int16 = new Int16Array(2);
int16[0] = 42;
console.log(int16[0]); // 42
console.log(int16.length); // 2
console.log(int16.BYTES_PER_ELEMENT); // 2

// 配列から
var arr = new Int16Array([21, 31]);
console.log(arr[1]); // 31

// From another TypedArray
var x = new Int16Array([21, 31]);
var y = new Int16Array(x);
console.log(y[0]); // 21

// ArrayBuffer から
var buffer = new ArrayBuffer(8);
var z = new Int16Array(buffer, 0, 4);

// 反復可能オブジェクトから
var iterable = (function* () {
  yield* [1, 2, 3];
})();
var int16 = new Int16Array(iterable);
// Int16Array[1, 2, 3]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- `Int16Array` のポリフィルが [`core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays) で利用できます
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
