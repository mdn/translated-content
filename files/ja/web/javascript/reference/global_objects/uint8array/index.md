---
title: Uint8Array
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Uint8Array`** は型付き配列で、 8 ビット符号なし整数値の配列を表します。初期化データが明示的に与えられなかった場合、中身は `0` で初期化されます。生成されると、配列内の要素はそのオブジェクトのメソッドを使用するか、配列の標準的な添字の構文（すなわち、ブラケット記法）を使用するかして参照することができます。

`Uint8Array` は非公開の {{jsxref("TypedArray")}} クラスのサブクラスです。

## 解説

`Uint8Array` は、現時点では他の型付き配列に比べて追加のメソッドを持つ唯一の `TypedArray` サブクラスです。汎用バイト配列という性質のため、任意のバイナリーデータの処理に最も適しています。これは、 `Uint8Array` データの 16 進文字列および base64 文字列への作成、シリアライズ、変更を行う 2 種類のメソッドに対応しています。

- {{jsxref("Uint8Array.fromBase64()")}}、{{jsxref("Uint8Array.prototype.toBase64()")}}ｍ{{jsxref("Uint8Array.prototype.setFromBase64()")}} は [base64](/ja/docs/Glossary/Base64) 文字列の処理を行い、 3 バイト単位でを 4 文字（0–9, A–Z, a–z, "+", "/" （または URL セーフ base64 であれば "-" と "\_"）のうちのいずれか）にエンコードします。
- {{jsxref("Uint8Array.fromHex()")}}、{{jsxref("Uint8Array.prototype.toHex()")}}、{{jsxref("Uint8Array.prototype.setFromHex()")}} は 16 進文字列の処理を行い、それぞれのバイトを 2 文字（0–9 または A–F （大文字小文字の区別なし）のいずれか）にエンコードします。

## コンストラクター

- {{jsxref("Uint8Array/Uint8Array", "Uint8Array()")}}
  - : 新しい `Uint8Array` オブジェクトを生成します。

## 静的プロパティ

_親である {{jsxref("TypedArray")}} から継承した静的プロパティもあります。_

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Uint8Array.BYTES_PER_ELEMENT")}}
  - : 要素の大きさを数値で返します。`Uint8Array` の場合は `1` です。

## 静的メソッド

_親である {{jsxref("TypedArray")}} から継承した静的メソッドもあります。_

- {{jsxref("Uint8Array.fromBase64()")}}
  - : base64 エンコードされた文字列から新しい `Uint8Array` オブジェクトを作成します。
- {{jsxref("Uint8Array.fromHex()")}}
  - : 16 進エンコードされた文字列から新しい `Uint8Array` オブジェクトを作成します。

## インスタンスプロパティ

_親である {{jsxref("TypedArray")}} から継承したインスタンスプロパティもあります。_

これらのプロパティは `Uint8Array.prototype` で定義され、すべての `Uint8Array` インスタンスで共有されます。

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Uint8Array.prototype.BYTES_PER_ELEMENT")}}
  - : 要素の大きさを数値で返します。`Uint8Array` の場合は `1` です。
- {{jsxref("Object/constructor", "Uint8Array.prototype.constructor")}}
  - : このインスタンスオブジェクトを作成したコンストラクター関数。Uint8Array インスタンスの場合、初期値は {{jsxref("Uint8Array/Uint8Array", "Uint8Array")}} コンストラクターです。

## インスタンスメソッド

_親である {{jsxref("TypedArray")}} から継承したインスタンスメソッドもあります。_

- {{jsxref("Uint8Array.prototype.setFromBase64()")}}
  - : この `Uint8Array` オブジェクトに、 base64 エンコードされた文字列から取得したバイト列を格納し、読み込んだバイト数と書き込んだバイト数を示すオブジェクトを返します。
- {{jsxref("Uint8Array.prototype.setFromHex()")}}
  - : この `Uint8Array` オブジェクトに 16 進エンコードされた文字列から取得取得したバイト列を格納し、読み込んだバイト数と書き込んだバイト数を示すオブジェクトを返します。
- {{jsxref("Uint8Array.prototype.toBase64()")}}
  - : この `Uint8Array` オブジェクトのデータに基づいて、base64 エンコードされた文字列を返します。
- {{jsxref("Uint8Array.prototype.toHex()")}}
  - : この `Uint8Array` オブジェクトのデータに基づいて、16 進エンコードされた文字列を返します。

## 例

### 様々な方法で `Uint8Array` を作成

```js
// 長さから
const uint8 = new Uint8Array(2);
uint8[0] = 42;
console.log(uint8[0]); // 42
console.log(uint8.length); // 2
console.log(uint8.BYTES_PER_ELEMENT); // 1

// 配列から
const x = new Uint8Array([21, 31]);
console.log(x[1]); // 31

// 他の TypedArray から
const y = new Uint8Array(x);
console.log(y[0]); // 21

// ArrayBuffer から
const buffer = new ArrayBuffer(8);
const z = new Uint8Array(buffer, 1, 4);
console.log(z.byteOffset); // 1

// 反復可能オブジェクトから
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const uint8FromIterable = new Uint8Array(iterable);
console.log(uint8FromIterable);
// Uint8Array [1, 2, 3]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Uint8Array` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
