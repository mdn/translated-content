---
title: BigInt64Array
slug: Web/JavaScript/Reference/Global_Objects/BigInt64Array
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`BigInt64Array`** は型付き配列で、プラットフォームのバイト順による 64 ビット符号付き整数値の配列を表します。バイト順の制御が必要な場合は、代わりに {{jsxref("DataView")}} を使用してください。初期化データが明示的に指定されていない限り、内容は `0n` に初期化されます。生成されると、配列内の要素はそのオブジェクトのメソッドを使用するか、配列の標準的な配列の添字構文（すなわち、ブラケット記法）を使用するかして参照することができます。

`BigInt64Array` は非公開の {{jsxref("TypedArray")}} クラスのサブクラスです。

{{InteractiveExample("JavaScript Demo: BigInt64Array", "taller")}}

```js interactive-example
const buffer = new ArrayBuffer(24);
const bigint64 = new BigInt64Array(buffer);
bigint64[0] = 5886014448488689n;
bigint64[1] = 1881938909131133n;
bigint64[2] = 1898875537769492n;

bigint64[0] = 6118793953620967n;
console.log(bigint64);
// 予想される結果: BigInt64Array [6118793953620967n, 1881938909131133n, 1898875537769492n]

console.log(bigint64[2]);
// 予想される結果: 1898875537769492n

console.log("配列の長さ:", bigint64.length);
// 予想される結果: 配列の長さ: 3

console.log("配列のバイト長:", bigint64.byteLength);
// 予想される結果: 配列のバイト長: 24

console.log("配列のバイトオフセット:", bigint64.byteOffset);
// 予想される結果: 配列のバイトオフセット: 0

bigint64.set([100n, 200n], 1);
console.log(bigint64);
// 予想される結果: BigInt64Array [6118793953620967n, 100n, 200n]
```

## コンストラクター

- {{jsxref("BigInt64Array/BigInt64Array", "BigInt64Array()")}}
  - : 新しい `BigInt64Array` オブジェクトを生成します。

## 静的プロパティ

_親である {{jsxref("TypedArray")}} から継承した静的プロパティもあります_。

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "BigInt64Array.BYTES_PER_ELEMENT")}}
  - : 要素の大きさを数値で返します。`BigInt64Array` の場合は `8` です。

## 静的メソッド

_親である {{jsxref("TypedArray")}} から継承した静的メソッドがあります_。

## インスタンスプロパティ

_親である {{jsxref("TypedArray")}} から継承したインスタンスプロパティもあります_。

これらのプロパティは `BigInt64Array.prototype` で定義されており、すべての `BigInt64Array` インスタンスで共有されています。

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "BigInt64Array.prototype.BYTES_PER_ELEMENT")}}
  - : 要素の大きさを数値で返します。`BigInt64Array` の場合は `8` です。
- {{jsxref("Object/constructor", "BigInt64Array.prototype.constructor")}}
  - : このインスタンスオブジェクトを構築したコンストラクター関数です。 `BigInt64Array` インスタンスの場合、初期値は {{jsxref("BigInt64Array/BigInt64Array", "BigInt64Array")}} コンストラクターです。

## インスタンスメソッド

_親である {{jsxref("TypedArray")}} から継承したインスタンスメソッドがあります_。

## 例

### 様々な方法で BigInt64Array を作成

```js
// 長さから
const bigint64 = new BigInt64Array(2);
bigint64[0] = 42n;
console.log(bigint64[0]); // 42n
console.log(bigint64.length); // 2
console.log(bigint64.BYTES_PER_ELEMENT); // 8

// 配列から
const x = new BigInt64Array([21n, 31n]);
console.log(x[1]); // 31n

// 他の TypedArray から
const y = new BigInt64Array(x);
console.log(y[0]); // 21n

// ArrayBuffer から
const buffer = new ArrayBuffer(64);
const z = new BigInt64Array(buffer, 8, 4);
console.log(z.byteOffset); // 8

// 反復可能オブジェクトから
const iterable = (function* () {
  yield* [1n, 2n, 3n];
})();
const bigint64FromIterable = new BigInt64Array(iterable);
console.log(bigint64FromIterable);
// BigInt64Array [1n, 2n, 3n]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
