---
title: BigInt64Array
slug: Web/JavaScript/Reference/Global_Objects/BigInt64Array
---

{{JSRef}}

**`BigInt64Array`** は型付き配列で、プラットフォームのバイト順による 64 ビット符号付き整数値の配列を表します。バイト順の制御が必要な場合は、代わりに {{jsxref("DataView")}} を使用してください。中身は `0n` で初期化されます。生成されると、配列内の要素はそのオブジェクトのメソッドを使用するか、配列の標準的な添字の構文 (すなわち、ブラケット記法) を使用するかして参照することができます。

## コンストラクター

- [`BigInt64Array()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array/BigInt64Array)
  - : 新しい `BigInt64Array` オブジェクトを生成します。

## 静的プロパティ

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "BigInt64Array.BYTES_PER_ELEMENT")}}
  - : 要素の大きさを数値で返します。`BigInt64Array` の場合は `8` です。
- {{jsxref("TypedArray.name", "BigInt64Array.name")}}
  - : コンストラクター名を文字列値で返します。`BigInt64Array` の場合、 "`BigInt64Array`" です。

## 静的メソッド

- {{jsxref("TypedArray.from", "BigInt64Array.from()")}}
  - : 配列風オブジェクトまたは反復可能オブジェクトから新しい `BigInt64Array` オブジェクトを生成します。 {{jsxref("Array.from()")}} も参照してください。
- {{jsxref("TypedArray.of", "BigInt64Array.of()")}}
  - : 可変長引数で新しい `BigInt64Array` オブジェクトを生成します。{{jsxref("Array.of()")}} も参照してください。

## インスタンスプロパティ

- {{jsxref("TypedArray.prototype.buffer", "BigInt64Array.prototype.buffer")}}
  - : `BigInt64Array` オブジェクトによって参照される {{jsxref("ArrayBuffer")}} を返します。構築時に固定され、**読み取り専用**です。
- {{jsxref("TypedArray.prototype.byteLength", "BigInt64Array.prototype.byteLength")}}
  - : {{jsxref("ArrayBuffer")}} の先頭からの `BigInt64Array` の長さを (バイト単位で) 返します。構築時に固定され、**読み取り専用**です。
- {{jsxref("TypedArray.prototype.byteOffset", "BigInt64Array.prototype.byteOffset")}}
  - : {{jsxref("ArrayBuffer")}} の先頭からの `BigInt64Array` のオフセットを (バイト単位で) 返します。構築時に固定され、**読み取り専用**です。
- {{jsxref("TypedArray.prototype.length", "BigInt64Array.prototype.length")}}
  - : `BigInt64Array` オブジェクト内に保持されている要素の数を返します。構築時に固定され、**読み取り専用**です。

## インスタンスメソッド

- {{jsxref("TypedArray.copyWithin", "BigInt64Array.prototype.copyWithin()")}}
  - : 配列内で一連の配列要素をコピーします。{{jsxref("Array.prototype.copyWithin()")}} も参照してください。
- {{jsxref("TypedArray.entries", "BigInt64Array.prototype.entries()")}}
  - : 配列内ですべての位置におけるキーと値の組を提供する新しい*配列イテレーター*を返します。{{jsxref("Array.prototype.entries()")}} も参照してください。
- {{jsxref("TypedArray.every", "BigInt64Array.prototype.every()")}}
  - : 配列内のすべての要素が関数によって提供されたテストに合格するかどうかテストを実行します。{{jsxref("Array.prototype.every()")}} も参照してください。
- {{jsxref("TypedArray.fill", "BigInt64Array.prototype.fill()")}}
  - : 配列の先頭位置から末尾位置までのすべての要素を固定値に設定します。{{jsxref("Array.prototype.fill()")}} も参照してください。
- {{jsxref("TypedArray.filter", "BigInt64Array.prototype.filter()")}}
  - : この配列のすべての要素のうち、与えられたフィルタリング関数が `true` を返すものをもつ新しい配列を生成します。{{jsxref("Array.prototype.filter()")}} も参照してください。
- {{jsxref("TypedArray.find", "BigInt64Array.prototype.find()")}}
  - : 配列内の要素に与えられたテスト関数を満足するものがあったら、見つかった値を返します。見つからなければ `undefined` を返します。{{jsxref("Array.prototype.find()")}} も参照してください。
- {{jsxref("TypedArray.findIndex", "BigInt64Array.prototype.findIndex()")}}
  - : 配列内の要素に与えられたテスト関数を満足するものがあったら、見つかった位置を返します。見つからなければ `-1` を返します。{{jsxref("Array.prototype.findIndex()")}} も参照してください。
- {{jsxref("TypedArray.forEach", "BigInt64Array.prototype.forEach()")}}
  - : 配列内のそれぞれの要素について関数を呼び出します。{{jsxref("Array.prototype.forEach()")}} も参照してください。
- {{jsxref("TypedArray.includes", "BigInt64Array.prototype.includes()")}}
  - : 型付き配列に特定の要素があるかどうかを判断し、それに応じて `true` か `false`を返します。 {{jsxref("Array.prototype.includes()")}} も参照してください。
- {{jsxref("TypedArray.indexOf", "BigInt64Array.prototype.indexOf()")}}
  - : 指定された値に等しい配列内の要素の最初の (最小の) 位置を返します。見つからなかった場合、 `-1` を返します。{{jsxref("Array.prototype.indexOf()")}} も参照してください。
- {{jsxref("TypedArray.join", "BigInt64Array.prototype.join()")}}
  - : 配列のすべての要素を 1 つの文字列に結合します。{{jsxref("Array.prototype.join()")}} も参照してください。
- {{jsxref("TypedArray.keys", "BigInt64Array.prototype.keys()")}}
  - : 配列内ですべての位置におけるキーを提供する新しい*配列イテレーター*を返します。{{jsxref("Array.prototype.keys()")}} も参照してください。
- {{jsxref("TypedArray.lastIndexOf", "BigInt64Array.prototype.lastIndexOf()")}}
  - : 指定された値に等しい配列内の要素の最後の (最大の) 位置を返します。見つからなかった場合、 `-1` を返します。{{jsxref("Array.prototype.lastIndexOf()")}} も参照してください。
- {{jsxref("TypedArray.map", "BigInt64Array.prototype.map()")}}
  - : この配列のすべての要素で与えられた関数を呼び出した結果をもつ新しい配列を生成します。{{jsxref("Array.prototype.map()")}} も参照してください。
- {{jsxref("TypedArray.reduce", "BigInt64Array.prototype.reduce()")}}
  - : アキュムレーターとこの配列のそれぞれの値に対して (左から右へ) 関数を適用し、単一の値に還元します。{{jsxref("Array.prototype.reduce()")}} も参照してください。
- {{jsxref("TypedArray.reduceRight", "BigInt64Array.prototype.reduceRight()")}}
  - : アキュムレーターとこの配列のそれぞれの値に対して (右から左へ) 関数を適用し、単一の値に還元します。{{jsxref("Array.prototype.reduceRight()")}} も参照してください。
- {{jsxref("TypedArray.reverse", "BigInt64Array.prototype.reverse()")}}
  - : 配列の要素の順番を反転させます。最初の要素は最後になり、最後の要素は最初になります。{{jsxref("Array.prototype.reverse()")}} も参照してください。
- {{jsxref("TypedArray.set", "BigInt64Array.prototype.set()")}}
  - : 入力値を指定した配列から読み込み、この型付き配列内に複数の値を格納します。
- {{jsxref("TypedArray.slice", "BigInt64Array.prototype.slice()")}}
  - : 配列の一部を取り出して新しい配列を返します。{{jsxref("Array.prototype.slice()")}} も参照してください。
- {{jsxref("TypedArray.some", "BigInt64Array.prototype.some()")}}
  - : この配列の 1 つ以上の要素が与えられたテスト関数を満たした場合に `true` を返します。{{jsxref("Array.prototype.some()")}} も参照してください。
- {{jsxref("TypedArray.sort", "BigInt64Array.prototype.sort()")}}
  - : 配列の要素をその場で並べ替え、その配列を返します。{{jsxref("Array.prototype.sort()")}} も参照してください。
- {{jsxref("TypedArray.subarray", "BigInt64Array.prototype.subarray()")}}
  - : 指定された先頭と末尾の要素位置から新しい `BigInt64Array` を返します。
- {{jsxref("TypedArray.values", "BigInt64Array.prototype.values()")}}
  - : 配列内ですべての位置における値を提供する新しい*配列イテレーター*を返します。{{jsxref("Array.prototype.values()")}} も参照してください。
- {{jsxref("TypedArray.toLocaleString", "BigInt64Array.prototype.toLocaleString()")}}
  - : 配列とその要素を表すローカライズされた文字列を返します。{{jsxref("Array.prototype.toLocaleString()")}} も参照してください。
- {{jsxref("TypedArray.toString", "BigInt64Array.prototype.toString()")}}
  - : 配列とその要素を表す文字列を返します。{{jsxref("Array.prototype.toString()")}} も参照してください。
- {{jsxref("TypedArray.@@iterator", "BigInt64Array.prototype[@@iterator]()")}}
  - : 配列内ですべての位置における値を提供する新しい*配列イテレーター*を返します。

## 例

### 様々な方法で `BigInt64Array` を作成

```js
// 長さから
var bigint64 = new BigInt64Array(2);
bigint64[0] = 42n;
console.log(bigint64[0]); // 42n
console.log(bigint64.length); // 2
console.log(bigint64.BYTES_PER_ELEMENT); // 8

// 配列から
var arr = new BigInt64Array([21n, 31n]);
console.log(arr[1]); // 31n

// From another TypedArray
var x = new BigInt64Array([21n, 31n]);
var y = new BigInt64Array(x);
console.log(y[0]); // 21n

// ArrayBuffer から
var buffer = new ArrayBuffer(32);
var z = new BigInt64Array(buffer, 0, 4);

// 反復可能オブジェクトから
var iterable = (function* () {
  yield* [1n, 2n, 3n];
})();
var bigint64 = new BigInt64Array(iterable);
// BigInt64Array[1n, 2n, 3n]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("BigUint64Array")}}
- {{jsxref("DataView")}}
