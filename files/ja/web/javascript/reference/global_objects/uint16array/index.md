---
title: Uint16Array
slug: Web/JavaScript/Reference/Global_Objects/Uint16Array
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Uint16Array`** は型付き配列で、プラットフォームのバイト順による 16 ビット符号なし整数値の配列を表します。バイト順の制御が必要な場合は、代わりに {{jsxref("DataView")}} を使用してください。初期化データが明示的に指定されていない限り、内容は `0` に初期化されます。生成されると、配列内の要素はそのオブジェクトのメソッドを使用するか、配列の標準的な添字構文（すなわち、ブラケット記法）を使用するかして参照することができます。

`Uint16Array` は非公開の {{jsxref("TypedArray")}} クラスのサブクラスです。

## コンストラクター

- {{jsxref("Uint16Array/Uint16Array", "Uint16Array()")}}
  - : 新しい `Uint16Array` オブジェクトを生成します。

## 静的プロパティ

_親である {{jsxref("TypedArray")}} から継承した静的プロパティもあります_。

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Uint16Array.BYTES_PER_ELEMENT")}}
  - : 要素の大きさを数値で返します。`Uint16Array` の場合は `2` です。

## 静的メソッド

_親である {{jsxref("TypedArray")}} から継承した静的メソッドがあります_。

## インスタンスプロパティ

_親である {{jsxref("TypedArray")}} から継承したインスタンスプロパティもあります_。

これらのプロパティは `Uint16Array.prototype` で定義されており、すべての `Uint16Array` インスタンスで共有されています。

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Uint16Array.prototype.BYTES_PER_ELEMENT")}}
  - : 要素の大きさを数値で返します。`Uint16Array` の場合は `2` です。
- {{jsxref("Object/constructor", "Uint16Array.prototype.constructor")}}
  - : このインスタンスオブジェクトを構築したコンストラクター関数です。 `Uint16Array` インスタンスの場合、初期値は {{jsxref("Uint16Array/Uint16Array", "Uint16Array")}} コンストラクターです。

## インスタンスメソッド

_親である {{jsxref("TypedArray")}} から継承したインスタンスメソッドがあります_。

## 例

### 様々な方法で Uint16Array を作成

```js
// 長さから
const uint16 = new Uint16Array(2);
uint16[0] = 42;
console.log(uint16[0]); // 42
console.log(uint16.length); // 2
console.log(uint16.BYTES_PER_ELEMENT); // 2

// 配列から
const x = new Uint16Array([21, 31]);
console.log(x[1]); // 31

// 他の TypedArray から
const y = new Uint16Array(x);
console.log(y[0]); // 21

// ArrayBuffer から
const buffer = new ArrayBuffer(16);
const z = new Uint16Array(buffer, 2, 4);
console.log(z.byteOffset); // 2

// 反復可能オブジェクトから
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const uint16FromIterable = new Uint16Array(iterable);
console.log(uint16FromIterable);
// Uint16Array [1, 2, 3]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`Uint16Array` のポリフィル (`core-js`)](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 型付き配列](/ja/docs/Web/JavaScript/Guide/Typed_arrays)ガイド
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
